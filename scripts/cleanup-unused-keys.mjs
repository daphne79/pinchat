#!/usr/bin/env node
/**
 * 清理未使用的 i18n keys
 * 從所有語言檔案中移除未使用的 keys
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const REPORT_FILE = path.join(__dirname, '../unused-i18n-keys-report.json');

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
 * 獲取嵌套對象的值
 */
function getNestedValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }
  return value;
}

/**
 * 刪除嵌套對象的值
 */
function deleteNestedValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false; // 路徑不存在
    }
  }
  const lastKey = keys[keys.length - 1];
  if (current && typeof current === 'object' && lastKey in current) {
    delete current[lastKey];
    return true;
  }
  return false;
}

/**
 * 清理 JSON 對象，移除未使用的 keys
 */
function cleanupObject(obj, unusedKeys) {
  const unusedSet = new Set(unusedKeys.map(k => k.key));
  const cleaned = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = key; // 當前層級的 key
    const childKeys = getAllKeys(typeof value === 'object' && value !== null ? value : {});
    
    // 檢查是否為未使用的 key（直接匹配或子路徑）
    const isUnused = unusedSet.has(fullKey) || 
      childKeys.some(childKey => unusedSet.has(childKey));
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // 遞歸處理對象
      const cleanedChild = cleanupObject(value, unusedKeys.filter(k => k.key.startsWith(fullKey + '.')));
      // 只保留有內容的對象
      if (Object.keys(cleanedChild).length > 0) {
        cleaned[key] = cleanedChild;
      }
    } else {
      // 只保留未在 unusedKeys 中的值
      if (!unusedSet.has(fullKey)) {
        cleaned[key] = value;
      }
    }
  }
  
  return cleaned;
}

/**
 * 遞歸刪除未使用的 keys（更精確的方法）
 */
function removeUnusedKeys(obj, unusedKeyPaths) {
  const unusedSet = new Set(unusedKeyPaths);
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // 遞歸處理子對象
      const cleaned = removeUnusedKeys(value, unusedKeyPaths.filter(k => k.startsWith(currentPath + '.')));
      // 只保留有內容的對象
      if (Object.keys(cleaned).length > 0) {
        result[key] = cleaned;
      }
    } else {
      // 檢查完整路徑是否在未使用列表中
      const fullPath = currentPath; // 這裡需要在遞歸中構建完整路徑
      if (!unusedSet.has(fullPath)) {
        result[key] = value;
      }
    }
  }
  
  return result;
}

/**
 * 更好的方法：從根節點遞歸刪除
 */
function removeKeysRecursive(obj, unusedKeys, currentPath = '') {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return obj;
  }
  
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const fullPath = currentPath ? `${currentPath}.${key}` : key;
    
    // 檢查這個完整路徑是否在未使用列表中
    if (unusedKeys.includes(fullPath)) {
      // 跳過這個 key
      continue;
    }
    
    // 如果值是對象，遞歸處理
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const cleaned = removeKeysRecursive(value, unusedKeys, fullPath);
      // 只保留非空對象
      if (Object.keys(cleaned).length > 0) {
        result[key] = cleaned;
      }
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

console.log('🧹 開始清理未使用的 i18n keys...\n');

// 讀取報告
const report = JSON.parse(fs.readFileSync(REPORT_FILE, 'utf-8'));
const unusedKeys = report.unusedKeysList.map(item => item.key);

console.log(`📋 將移除 ${unusedKeys.length} 個未使用的 keys\n`);

// 獲取所有語言檔案
const allLangFiles = fs.readdirSync(LOCALES_DIR)
  .filter(f => f.endsWith('.json'))
  .map(f => f.replace('.json', ''));

console.log(`📂 將處理 ${allLangFiles.length} 個語言檔案:\n`);

// 處理每個語言檔案
let totalRemoved = 0;
const results = {};

for (const lang of allLangFiles) {
  const langFile = path.join(LOCALES_DIR, `${lang}.json`);
  const langData = JSON.parse(fs.readFileSync(langFile, 'utf-8'));
  
  // 計算移除前的 keys 數量
  const beforeCount = getAllKeys(langData).length;
  
  // 移除未使用的 keys
  const cleanedData = removeKeysRecursive(langData, unusedKeys);
  
  // 計算移除後的 keys 數量
  const afterCount = getAllKeys(cleanedData).length;
  const removed = beforeCount - afterCount;
  
  // 儲存清理後的資料
  fs.writeFileSync(langFile, JSON.stringify(cleanedData, null, 2) + '\n', 'utf-8');
  
  results[lang] = {
    before: beforeCount,
    after: afterCount,
    removed: removed
  };
  
  totalRemoved += removed;
  console.log(`✅ ${lang}.json: ${beforeCount} → ${afterCount} keys (移除 ${removed} 個)`);
}

console.log('\n' + '='.repeat(70));
console.log(`🎉 清理完成！`);
console.log(`   總共從 ${allLangFiles.length} 個語言檔案中移除 keys`);
console.log(`   總計移除: ${totalRemoved} 個 key 引用`);
console.log('='.repeat(70));

