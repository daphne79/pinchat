import { readFileSync, readdirSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';

// 獲取所有圖片目錄
const imageDirs = [
  join(process.cwd(), 'public/lovable-uploads'),
];

console.log('🔍 檢查未使用的圖片...\n');

// 搜索代碼中所有使用圖片的地方
const codeFiles = glob.sync('src/**/*.{tsx,ts}', { cwd: process.cwd() });
const usedImages = new Set();

for (const file of codeFiles) {
  const content = readFileSync(join(process.cwd(), file), 'utf-8');
  // 查找所有 lovable-uploads 引用
  const matches = content.matchAll(/lovable-uploads\/([^"'\s)]+\.png)/g);
  for (const match of matches) {
    usedImages.add(match[1]);
  }
}

// 檢查 image-assignments.json
const assignmentsPath = join(process.cwd(), 'image-assignments.json');
if (existsSync(assignmentsPath)) {
  const assignments = JSON.parse(readFileSync(assignmentsPath, 'utf-8'));
  if (assignments.assignments) {
    for (const assignment of assignments.assignments) {
      usedImages.add(assignment.image);
    }
  }
}

console.log(`📊 已使用的圖片: ${usedImages.size} 張\n`);

// 檢查 public/lovable-uploads 目錄（主要圖片目錄）
const mainImageDir = join(process.cwd(), 'public/lovable-uploads');
if (!existsSync(mainImageDir)) {
  console.log('❌ 找不到圖片目錄');
  process.exit(1);
}

const allImages = readdirSync(mainImageDir).filter(f => f.endsWith('.png'));
const unusedImages = allImages.filter(img => !usedImages.has(img));

console.log(`📁 public/lovable-uploads: ${allImages.length} 張圖片`);
console.log(`✅ 已使用: ${usedImages.size} 張`);
console.log(`❌ 未使用: ${unusedImages.length} 張\n`);

if (unusedImages.length > 0) {
  console.log('📋 未使用的圖片列表：\n');
  
  // 計算總大小
  let totalSize = 0;
  const { statSync } = await import('fs');
  
  for (const img of unusedImages) {
    const imgPath = join(mainImageDir, img);
    try {
      const stats = statSync(imgPath);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      totalSize += stats.size;
      console.log(`   - ${img} (${sizeMB} MB)`);
    } catch (error) {
      console.error(`   ❌ 無法讀取 ${img}: ${error.message}`);
    }
  }
  
  console.log(`\n💾 未使用圖片總大小: ${(totalSize / 1024 / 1024).toFixed(2)} MB\n`);
  
  // 詢問是否刪除（這裡我們直接刪除，因為用戶說可以繼續處理）
  console.log('🗑️  開始刪除未使用的圖片...\n');
  let deletedCount = 0;
  let errorCount = 0;
  
  for (const img of unusedImages) {
    const imgPath = join(mainImageDir, img);
    try {
      unlinkSync(imgPath);
      console.log(`✅ 已刪除: ${img}`);
      deletedCount++;
    } catch (error) {
      console.error(`❌ 無法刪除 ${img}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n✅ 完成！已刪除 ${deletedCount} 張未使用的圖片`);
  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} 張圖片刪除失敗`);
  }
  console.log(`💾 節省空間: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
} else {
  console.log('✅ 沒有未使用的圖片，所有圖片都在使用中！');
}

