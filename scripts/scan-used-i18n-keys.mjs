#!/usr/bin/env node
/**
 * 掃描專案中實際使用的 i18n keys
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');
const IGNORE_DIRS = ['node_modules', 'test', 'build', 'dist', 'locales', 'i18n', '.git'];
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue', '.dart', '.html'];

/**
 * 獲取所有需要掃描的檔案
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // 跳過忽略的資料夾
    if (stat.isDirectory()) {
      const dirName = path.basename(filePath);
      if (!IGNORE_DIRS.includes(dirName)) {
        getAllFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * 提取字串中的 i18n key
 */
function extractI18nKeys(content) {
  const keys = new Set();
  
  // 支援的模式：
  // t("key"), t('key'), t(`key`)
  // tFixed("key") - 自定義翻譯函數
  // $t("key"), $t('key'), $t(`key`)
  // i18n.t("key")
  // useTranslation("key")
  // context.$t("key")
  
  // 匹配各種翻譯函數調用（支援帶參數的情況）
  const patterns = [
    // t("key") 或 t('key') 或 t(`key`) - 標準用法（可能帶參數）
    /[^a-zA-Z_$]t\(['"`]([^'"`]+)['"`]/g,
    // tFixed("key") - 自定義翻譯函數（可能帶參數）
    /tFixed\(['"`]([^'"`]+)['"`]/g,
    // $t("key")
    /\$t\(['"`]([^'"`]+)['"`]/g,
    // i18n.t("key")
    /i18n\.t\(['"`]([^'"`]+)['"`]/g,
    // useTranslation("key")
    /useTranslation\(['"`]([^'"`]+)['"`]/g,
    // context.$t("key")
    /context\.\$t\(['"`]([^'"`]+)['"`]/g,
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const key = match[1];
      if (key && !key.includes('${') && !key.includes('{`')) {
        // 排除模板字串和動態 key
        keys.add(key);
      }
    }
  });
  
  // 也檢查 JSX 中的使用：{t('key')} 或 {tFixed('key')}
  const jsxPatterns = [
    /\{t\(['"`]([^'"`]+)['"`]\)\}/g,
    /\{tFixed\(['"`]([^'"`]+)['"`]\)\}/g,
  ];
  
  jsxPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const key = match[1];
      if (key && !key.includes('${') && !key.includes('{`')) {
        keys.add(key);
      }
    }
  });
  
  return keys;
}

console.log('🔍 掃描專案中實際使用的 i18n keys...\n');

const allFiles = getAllFiles(SRC_DIR);
console.log(`📂 掃描到 ${allFiles.length} 個檔案\n`);

const allUsedKeys = new Set();
const keyUsageMap = new Map(); // 記錄每個 key 在哪個檔案使用

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const keys = extractI18nKeys(content);
    
    keys.forEach(key => {
      allUsedKeys.add(key);
      if (!keyUsageMap.has(key)) {
        keyUsageMap.set(key, []);
      }
      keyUsageMap.get(key).push(file);
    });
  } catch (error) {
    console.error(`❌ 讀取檔案失敗 ${file}:`, error.message);
  }
});

console.log(`✅ 找到 ${allUsedKeys.size} 個實際使用的 i18n keys\n`);

// 輸出結果到檔案
const outputFile = path.join(__dirname, '../used-i18n-keys.json');
const result = {
  totalKeys: allUsedKeys.size,
  keys: Array.from(allUsedKeys).sort(),
  usageMap: Object.fromEntries(
    Array.from(keyUsageMap.entries()).map(([key, files]) => [
      key,
      files.map(f => path.relative(SRC_DIR, f))
    ])
  )
};

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf-8');

console.log(`💾 結果已儲存至: ${path.relative(process.cwd(), outputFile)}\n`);
console.log(`📊 前 20 個使用的 keys:`);
Array.from(allUsedKeys).sort().slice(0, 20).forEach(key => {
  console.log(`   - ${key}`);
});
if (allUsedKeys.size > 20) {
  console.log(`   ... 還有 ${allUsedKeys.size - 20} 個`);
}

// 導出供其他腳本使用
export { allUsedKeys, keyUsageMap };

