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
    
    // 如果輸入是 JSON 字符串（被雙引號包圍），先解析一層
    if (configData.startsWith('"') && configData.endsWith('"')) {
      configData = JSON.parse(configData);
    }
    
    const config = JSON.parse(configData);
    
    // 讀取現有配置以保留 pageSections
    const configPath = join(process.cwd(), 'image-assignments.json');
    let existingConfig = { assignments: [], pageSections: {} };
    
    if (existsSync(configPath)) {
      existingConfig = JSON.parse(readFileSync(configPath, 'utf-8'));
    }
    
    // 合併配置（保留 pageSections，更新 assignments）
    const updatedConfig = {
      assignments: config.assignments || [],
      pageSections: config.pageSections || existingConfig.pageSections
    };
    
    // 寫入配置文件
    writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2), 'utf-8');
    console.log('✅ 配置已更新到 image-assignments.json');
    
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

