#!/usr/bin/env node
/**
 * 比對實際使用的 i18n keys 與 en.json 中定義的 keys
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');
const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const EN_FILE = path.join(LOCALES_DIR, 'en.json');

// 要掃描的副檔名
const SCAN_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue', '.dart', '.html'];

// 要忽略的資料夾
const IGNORE_DIRS = ['node_modules', 'test', 'build', 'dist', 'locales', '.git'];

/**
 * 遞歸獲取所有翻譯鍵
 */
function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

/**
 * 檢查是否為忽略的資料夾
 */
function shouldIgnoreDir(dirPath) {
  const dirName = path.basename(dirPath);
  return IGNORE_DIRS.some(ignore => dirPath.includes(ignore) || dirName === ignore);
}

/**
 * 收集所有檔案
 */
function collectFiles(dir, files = []) {
  if (shouldIgnoreDir(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      collectFiles(fullPath, files);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * 提取 i18n keys 從程式碼
 */
function extractI18nKeys(content) {
  const keys = new Set();
  
  // 支援的 i18n 語法模式
  const patterns = [
    /[^a-zA-Z_$]t\(['"`]([^'"`]+)['"`]/g,      // t("key")
    /tFixed\(['"`]([^'"`]+)['"`]/g,            // tFixed("key")
    /\$t\(['"`]([^'"`]+)['"`]/g,               // $t("key")
    /i18n\.t\(['"`]([^'"`]+)['"`]/g,           // i18n.t("key")
    /useTranslation\(['"`]([^'"`]+)['"`]/g,    // useTranslation("key")
    /context\.\$t\(['"`]([^'"`]+)['"`]/g,      // context.$t("key")
    /\{t\(['"`]([^'"`]+)['"`]\)\}/g,            // {t("key")}
    /\{tFixed\(['"`]([^'"`]+)['"`]\)\}/g,       // {tFixed("key")}
    /\{\$t\(['"`]([^'"`]+)['"`]\)\}/g,          // {$t("key")}
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const key = match[1];
      if (key && !key.includes('${') && !key.includes('{`')) {
        keys.add(key.trim());
      }
    }
  });
  
  return Array.from(keys);
}

console.log('🔍 開始比對 i18n keys...\n');
console.log('='.repeat(70));

// 讀取 en.json
let enData, definedKeys;
try {
  enData = JSON.parse(fs.readFileSync(EN_FILE, 'utf-8'));
  definedKeys = new Set(getAllKeys(enData));
  console.log(`📊 en.json 定義了 ${definedKeys.size} 個 keys\n`);
} catch (error) {
  console.error(`❌ 無法讀取 en.json: ${error.message}`);
  process.exit(1);
}

// 收集所有檔案
const files = collectFiles(SRC_DIR);
console.log(`📁 掃描 ${files.length} 個檔案...\n`);

const usedKeys = new Set();
const keyUsageMap = new Map(); // 記錄每個 key 在哪個檔案使用

// 掃描每個檔案
files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const keys = extractI18nKeys(content);
    
    keys.forEach(key => {
      usedKeys.add(key);
      if (!keyUsageMap.has(key)) {
        keyUsageMap.set(key, []);
      }
      const relativePath = path.relative(SRC_DIR, file);
      keyUsageMap.get(key).push(relativePath);
    });
  } catch (error) {
    // 忽略讀取錯誤
  }
});

console.log(`📊 程式碼中使用了 ${usedKeys.size} 個 keys\n`);

// 找出已使用但未定義的 keys
const usedButNotDefined = Array.from(usedKeys).filter(key => !definedKeys.has(key));

// 找出定義但未使用的 keys
const definedButNotUsed = Array.from(definedKeys).filter(key => !usedKeys.has(key));

console.log('='.repeat(70));
console.log('📋 比對結果\n');

// 報告已使用但未定義的 keys
if (usedButNotDefined.length > 0) {
  console.log(`⚠️  已使用但未定義的 keys (${usedButNotDefined.length} 個):\n`);
  
  // 按檔案分組
  const grouped = {};
  usedButNotDefined.forEach(key => {
    const files = keyUsageMap.get(key) || [];
    const section = key.split('.')[0];
    if (!grouped[section]) {
      grouped[section] = [];
    }
    grouped[section].push({ key, files });
  });
  
  Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([section, items]) => {
      console.log(`   📦 ${section} (${items.length} 個):`);
      items.forEach(({ key, files }) => {
        console.log(`      - ${key}`);
        if (files.length > 0) {
          const uniqueFiles = [...new Set(files)];
          uniqueFiles.slice(0, 3).forEach(file => {
            console.log(`        → ${file}`);
          });
          if (uniqueFiles.length > 3) {
            console.log(`        ... 還有 ${uniqueFiles.length - 3} 個檔案`);
          }
        }
      });
      console.log('');
    });
} else {
  console.log('✅ 所有使用的 keys 都有在 en.json 中定義\n');
}

console.log('='.repeat(70));

// 報告定義但未使用的 keys
if (definedButNotUsed.length > 0) {
  console.log(`📝 定義但未使用的 keys (${definedButNotUsed.length} 個):\n`);
  
  // 按區塊分組
  const grouped = {};
  definedButNotUsed.forEach(key => {
    const section = key.split('.')[0];
    if (!grouped[section]) {
      grouped[section] = [];
    }
    grouped[section].push(key);
  });
  
  Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([section, keys]) => {
      console.log(`   📦 ${section} (${keys.length} 個):`);
      keys.sort().forEach(key => {
        // 獲取 key 的值以便顯示
        const keys = key.split('.');
        let value = enData;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            value = null;
            break;
          }
        }
        const preview = typeof value === 'string' ? value.substring(0, 50) : JSON.stringify(value).substring(0, 50);
        console.log(`      - ${key}`);
        if (preview) {
          console.log(`        "${preview}${preview.length >= 50 ? '...' : ''}"`);
        }
      });
      console.log('');
    });
} else {
  console.log('✅ 所有定義的 keys 都有在程式碼中使用\n');
}

console.log('='.repeat(70));
console.log('📊 統計摘要：');
console.log(`   - 定義的 keys: ${definedKeys.size}`);
console.log(`   - 使用的 keys: ${usedKeys.size}`);
console.log(`   - 已使用但未定義: ${usedButNotDefined.length}`);
console.log(`   - 定義但未使用: ${definedButNotUsed.length}`);
console.log(`   - 覆蓋率: ${((usedKeys.size / definedKeys.size) * 100).toFixed(1)}%`);
console.log('='.repeat(70));

