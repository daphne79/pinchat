#!/usr/bin/env node
/**
 * 同步所有語言檔案的 key 結構
 * 以 en.json 為基準，補齊缺少的 keys，移除多餘的 keys
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

/**
 * 遞歸獲取所有翻譯鍵和值
 */
function getAllKeyValuePairs(obj, prefix = '') {
  const pairs = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      pairs.push(...getAllKeyValuePairs(value, fullKey));
    } else {
      pairs.push({ key: fullKey, value });
    }
  }
  return pairs;
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
 * 設置嵌套對象的值（保持結構）
 */
function setNestedValue(obj, keyPath, value) {
  const keys = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
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
      return false;
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
 * 重建對象結構，保持與 source 相同的結構和順序
 */
function rebuildStructure(source, target) {
  const result = {};
  
  // 按照 source 的順序重建
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      // 遞歸處理子對象
      const targetChild = target[key] && typeof target[key] === 'object' ? target[key] : {};
      result[key] = rebuildStructure(source[key], targetChild);
    } else {
      // 如果是值，優先使用目標值（如果存在且不同於源值），否則使用源值
      if (target[key] !== undefined && target[key] !== source[key]) {
        result[key] = target[key]; // 保留已有翻譯
      } else {
        result[key] = source[key]; // 使用英文值
      }
    }
  }
  
  return result;
}

console.log('🔄 開始同步所有語言檔案的 key 結構...\n');

// 讀取基準檔 en.json
const enFile = path.join(LOCALES_DIR, 'en.json');
const enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
const enKeyValuePairs = getAllKeyValuePairs(enData);
const enKeys = new Set(enKeyValuePairs.map(p => p.key));

console.log(`📊 基準檔 en.json：${enKeys.size} 個 keys\n`);

// 獲取所有語言檔案（排除 en.json）
const allLangFiles = fs.readdirSync(LOCALES_DIR)
  .filter(f => f.endsWith('.json') && f !== 'en.json')
  .map(f => f.replace('.json', ''));

let totalAdded = 0;
let totalRemoved = 0;
const results = {};

// 處理每個語言檔案
for (const lang of allLangFiles) {
  const langFile = path.join(LOCALES_DIR, `${lang}.json`);
  const langData = JSON.parse(fs.readFileSync(langFile, 'utf-8'));
  const langKeyValuePairs = getAllKeyValuePairs(langData);
  const langKeys = new Set(langKeyValuePairs.map(p => p.key));
  
  // 找出缺少和多餘的 keys
  const missingKeys = enKeyValuePairs.filter(p => !langKeys.has(p.key));
  const extraKeys = Array.from(langKeys).filter(k => !enKeys.has(k));
  
  console.log(`📄 ${lang}.json:`);
  console.log(`   缺少 ${missingKeys.length} 個 keys`);
  console.log(`   多餘 ${extraKeys.length} 個 keys`);
  
  // 先移除多餘的 keys
  for (const key of extraKeys) {
    deleteNestedValue(langData, key);
    totalRemoved++;
  }
  
  // 補齊缺少的 keys（使用英文值）
  for (const { key, value } of missingKeys) {
    setNestedValue(langData, key, value);
    totalAdded++;
  }
  
  // 重建結構以保持與 en.json 一致的順序
  const syncedData = rebuildStructure(enData, langData);
  
  // 儲存
  fs.writeFileSync(langFile, JSON.stringify(syncedData, null, 2) + '\n', 'utf-8');
  
  results[lang] = {
    added: missingKeys.length,
    removed: extraKeys.length,
    total: getAllKeyValuePairs(syncedData).length
  };
  
  console.log(`   ✅ 已同步：補齊 ${missingKeys.length} 個，移除 ${extraKeys.length} 個\n`);
}

console.log('='.repeat(70));
console.log('📊 同步結果摘要：\n');

allLangFiles.forEach(lang => {
  const r = results[lang];
  console.log(`   ${lang}.json: ${r.total} 個 keys (補齊 ${r.added} 個，移除 ${r.removed} 個)`);
});

console.log('\n' + '='.repeat(70));
console.log(`✅ 同步完成！`);
console.log(`   總共補齊: ${totalAdded} 個 keys`);
console.log(`   總共移除: ${totalRemoved} 個 keys`);
console.log('='.repeat(70));

