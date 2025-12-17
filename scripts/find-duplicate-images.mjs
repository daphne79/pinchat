import { readFileSync, readdirSync, unlinkSync, existsSync, statSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';
import { glob } from 'glob';

// 計算文件的 hash
function getFileHash(filePath) {
  const fileBuffer = readFileSync(filePath);
  return createHash('md5').update(fileBuffer).digest('hex');
}

// 獲取所有圖片目錄
const imageDirs = [
  join(process.cwd(), 'public/lovable-uploads'),
  join(process.cwd(), 'lovable-uploads'),
  join(process.cwd(), 'dist/lovable-uploads'),
];

// 收集所有圖片及其 hash
const imageMap = new Map(); // hash -> [{ path, filename, size }]
const allImages = [];

console.log('🔍 掃描圖片文件...\n');

for (const dir of imageDirs) {
  if (!existsSync(dir)) {
    continue;
  }
  
  const files = readdirSync(dir).filter(f => f.endsWith('.png'));
  console.log(`📁 ${dir}: ${files.length} 張圖片`);
  
  for (const file of files) {
    const filePath = join(dir, file);
    try {
      const stats = statSync(filePath);
      const hash = getFileHash(filePath);
      
      if (!imageMap.has(hash)) {
        imageMap.set(hash, []);
      }
      
      imageMap.get(hash).push({
        path: filePath,
        filename: file,
        size: stats.size,
        dir: dir,
      });
      
      allImages.push({ path: filePath, filename: file, hash, size: stats.size });
    } catch (error) {
      console.error(`❌ 無法讀取 ${filePath}: ${error.message}`);
    }
  }
}

console.log(`\n✅ 總共掃描 ${allImages.length} 張圖片\n`);

// 找出重複的圖片
const duplicates = [];
for (const [hash, files] of imageMap.entries()) {
  if (files.length > 1) {
    duplicates.push({ hash, files });
  }
}

console.log(`🔎 找到 ${duplicates.length} 組重複圖片\n`);

// 搜索代碼中所有使用圖片的地方
console.log('🔍 檢查圖片使用情況...\n');
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

// 找出需要刪除的重複圖片
const toDelete = [];
let totalSizeToSave = 0;

for (const { hash, files } of duplicates) {
  // 找出哪些文件被使用
  const usedFiles = files.filter(f => usedImages.has(f.filename));
  const unusedFiles = files.filter(f => !usedImages.has(f.filename));
  
  if (unusedFiles.length === 0) {
    // 所有重複的圖片都被使用，跳過
    continue;
  }
  
  // 如果有些被使用，有些沒被使用，保留一個被使用的（如果有的話），刪除未使用的
  // 如果都沒有被使用，保留一個（保留 public 目錄中的，因為那是主要目錄）
  let keepFile = null;
  
  if (usedFiles.length > 0) {
    // 保留第一個被使用的文件
    keepFile = usedFiles[0];
  } else {
    // 都沒有被使用，優先保留 public 目錄中的
    const publicFile = files.find(f => f.dir.includes('public/lovable-uploads'));
    keepFile = publicFile || files[0];
  }
  
  // 標記需要刪除的文件
  for (const file of files) {
    if (file.path !== keepFile.path) {
      // 檢查是否被使用
      if (!usedImages.has(file.filename)) {
        toDelete.push({
          path: file.path,
          filename: file.filename,
          size: file.size,
          hash,
          reason: usedFiles.length > 0 ? '重複且未使用（有使用中的版本）' : '重複且未使用',
        });
        totalSizeToSave += file.size;
      }
    }
  }
}

console.log(`🗑️  找到 ${toDelete.length} 張重複且未使用的圖片可以刪除\n`);
console.log(`💾 預計可節省空間: ${(totalSizeToSave / 1024 / 1024).toFixed(2)} MB\n`);

if (toDelete.length > 0) {
  console.log('📋 待刪除的圖片列表：\n');
  
  // 按目錄分組顯示
  const byDir = {};
  for (const file of toDelete) {
    const dir = file.path.split('/lovable-uploads')[0] + '/lovable-uploads';
    if (!byDir[dir]) {
      byDir[dir] = [];
    }
    byDir[dir].push(file);
  }
  
  for (const [dir, files] of Object.entries(byDir)) {
    console.log(`📁 ${dir}:`);
    for (const file of files) {
      const sizeMB = (file.size / 1024 / 1024).toFixed(2);
      console.log(`   - ${file.filename} (${sizeMB} MB) - ${file.reason}`);
    }
    console.log('');
  }
  
  // 刪除文件
  console.log('🗑️  開始刪除重複圖片...\n');
  let deletedCount = 0;
  let errorCount = 0;
  
  for (const file of toDelete) {
    try {
      unlinkSync(file.path);
      console.log(`✅ 已刪除: ${file.path}`);
      deletedCount++;
    } catch (error) {
      console.error(`❌ 無法刪除 ${file.path}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n✅ 完成！已刪除 ${deletedCount} 張圖片`);
  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} 張圖片刪除失敗`);
  }
  console.log(`💾 節省空間: ${(totalSizeToSave / 1024 / 1024).toFixed(2)} MB`);
} else {
  console.log('✅ 沒有找到需要刪除的重複圖片');
}

// 顯示重複圖片統計
if (duplicates.length > 0) {
  console.log('\n📊 重複圖片統計：');
  for (const { hash, files } of duplicates) {
    const usedCount = files.filter(f => usedImages.has(f.filename)).length;
    const unusedCount = files.length - usedCount;
    console.log(`   Hash ${hash.substring(0, 8)}...: ${files.length} 個副本 (${usedCount} 使用中, ${unusedCount} 未使用)`);
  }
}

