import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { spawn } from 'child_process';
import { execSync } from 'child_process';

// 從標準輸入讀取數據
let inputData = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  try {
    let configData = inputData.trim();
    
    console.log('📥 收到輸入數據，長度:', configData.length);
    console.log('📥 輸入數據前 100 個字符:', configData.substring(0, 100));
    
    // 檢查是否是 base64 編碼（以 BASE64: 開頭）
    if (configData.startsWith('BASE64:')) {
      try {
        const base64Data = configData.substring(7); // 移除 'BASE64:' 前綴
        console.log('🔓 正在解碼 Base64 數據，長度:', base64Data.length);
        configData = Buffer.from(base64Data, 'base64').toString('utf-8');
        console.log('✅ Base64 解碼成功，解碼後長度:', configData.length);
        console.log('📋 解碼後數據前 200 個字符:', configData.substring(0, 200));
        
        // Base64 解碼後的數據可能是雙引號包裹的 JSON 字符串，需要先解析一層
        if (configData.startsWith('"') && configData.endsWith('"')) {
          console.log('🔓 檢測到雙引號包裹，先解析一層...');
          try {
            configData = JSON.parse(configData);
            console.log('✅ 第一層解析成功，長度:', typeof configData === 'string' ? configData.length : '不是字符串');
          } catch (e) {
            console.warn('⚠️ 第一層解析失敗，嘗試直接使用:', e.message);
          }
        }
      } catch (e) {
        console.error('❌ Base64 解碼錯誤:', e.message);
        process.exit(1);
      }
    }
    // 如果輸入是 JSON 字符串（被雙引號包圍），先解析一層
    else if (configData.startsWith('"') && configData.endsWith('"')) {
      try {
        configData = JSON.parse(configData);
      } catch (e) {
        // 如果解析失敗，可能是引號沒有正確配對，嘗試直接使用
        // 移除首尾的引號
        if (configData.startsWith('"') && configData.endsWith('"')) {
          configData = configData.slice(1, -1);
          // 處理轉義的引號
          configData = configData.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
      }
    }
    
    // 嘗試解析 JSON（如果 configData 還是字符串，需要再解析一次）
    let config;
    try {
      if (typeof configData === 'string') {
        config = JSON.parse(configData);
        console.log('✅ JSON 解析成功（字符串 -> 對象）');
      } else {
        config = configData; // 已經是對象了
        console.log('✅ 配置已經是對象格式');
      }
      console.log('📋 解析後的配置包含:');
      console.log('   - assignments:', Array.isArray(config.assignments) ? `${config.assignments.length} 個` : '不是陣列');
      if (Array.isArray(config.assignments) && config.assignments.length > 0) {
        console.log('   - 第一個分配:', JSON.stringify(config.assignments[0]));
      }
      console.log('   - pageSections:', config.pageSections ? '存在' : '不存在');
    } catch (e) {
      // 如果解析失敗，嘗試修復常見的 JSON 錯誤
      console.error('❌ JSON 解析錯誤:', e.message);
      console.error('📋 原始數據類型:', typeof configData);
      console.error('📋 原始數據前 200 個字符:', typeof configData === 'string' ? configData.substring(0, 200) : String(configData).substring(0, 200));
      console.error('💡 提示：請確保 JSON 格式正確，或使用「複製 JSON」按鈕手動保存到 image-assignments.json 文件');
      process.exit(1);
    }
    
    // 讀取現有配置以保留 pageSections
    const configPath = join(process.cwd(), 'image-assignments.json');
    let existingConfig = { assignments: [], pageSections: {} };
    
    if (existsSync(configPath)) {
      existingConfig = JSON.parse(readFileSync(configPath, 'utf-8'));
      console.log('📂 讀取現有配置，包含', existingConfig.assignments?.length || 0, '個分配');
    }
    
    // 合併配置（保留 pageSections，更新 assignments）
    // 使用新配置中的 assignments（即使為空陣列，也應該使用，因為這表示用戶想要清空配置）
    const updatedConfig = {
      assignments: Array.isArray(config.assignments) ? config.assignments : [],
      pageSections: config.pageSections || existingConfig.pageSections
    };
    
    console.log('🔄 合併配置:');
    console.log('   - 新配置中的 assignments 數量:', Array.isArray(config.assignments) ? config.assignments.length : 0);
    console.log('   - 現有配置中的 assignments 數量:', existingConfig.assignments?.length || 0);
    console.log('   - 最終 assignments 數量:', updatedConfig.assignments.length);
    
    // 驗證配置
    if (!Array.isArray(updatedConfig.assignments)) {
      console.error('❌ 錯誤：assignments 必須是一個陣列');
      process.exit(1);
    }
    
    console.log(`📋 準備保存 ${updatedConfig.assignments.length} 個圖片分配`);
    if (updatedConfig.assignments.length > 0) {
      console.log('📝 分配列表：');
      updatedConfig.assignments.forEach((assignment, index) => {
        console.log(`   ${index + 1}. ${assignment.image} -> ${assignment.page}/${assignment.section}`);
      });
    }
    
    // 寫入配置文件
    writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2), 'utf-8');
    console.log(`✅ 配置已更新到 image-assignments.json (${updatedConfig.assignments.length} 個分配)`);
    
    // 重新生成圖片查看器
    console.log('🔄 正在重新生成圖片查看器...');
    const analyzeScript = spawn('node', ['scripts/analyze-images.mjs'], {
      cwd: process.cwd(),
      stdio: 'inherit'
    });
    
    analyzeScript.on('close', (code) => {
      if (code === 0) {
        console.log('\n🎉 完成！圖片查看器已更新，請刷新瀏覽器查看。');
      } else {
        console.error('\n❌ 重新生成圖片查看器時發生錯誤');
        process.exit(1);
      }
    });
    
  } catch (error) {
    console.error('❌ 解析 JSON 時發生錯誤:', error.message);
    process.exit(1);
  }
});

