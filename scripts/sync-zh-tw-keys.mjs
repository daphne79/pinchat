#!/usr/bin/env node
/**
 * 同步 zh-tw.json 的 key 結構與 en.json
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
 * 設置嵌套對象的值
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

console.log('🔄 階段 2：同步 zh-tw.json 的 key 結構...\n');

// 讀取基準檔 en.json
const enFile = path.join(LOCALES_DIR, 'en.json');
const enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
const enKeyValuePairs = getAllKeyValuePairs(enData);
const enKeys = new Set(enKeyValuePairs.map(p => p.key));

console.log(`📊 基準檔 en.json：${enKeys.size} 個 keys\n`);

// 讀取 zh-tw.json
const zhTwFile = path.join(LOCALES_DIR, 'zh-tw.json');
const zhTwData = JSON.parse(fs.readFileSync(zhTwFile, 'utf-8'));
const zhTwKeyValuePairs = getAllKeyValuePairs(zhTwData);
const zhTwKeys = new Set(zhTwKeyValuePairs.map(p => p.key));

// 找出缺少和多餘的 keys
const missingKeys = enKeyValuePairs.filter(p => !zhTwKeys.has(p.key));
const extraKeys = Array.from(zhTwKeys).filter(k => !enKeys.has(k));

console.log(`📄 zh-tw.json 分析：`);
console.log(`   缺少 ${missingKeys.length} 個 keys`);
console.log(`   多餘 ${extraKeys.length} 個 keys\n`);

if (missingKeys.length === 0 && extraKeys.length === 0) {
  console.log('✅ zh-tw.json 已經與 en.json 結構一致，無需同步\n');
} else {
  // 先移除多餘的 keys
  for (const key of extraKeys) {
    deleteNestedValue(zhTwData, key);
  }
  
  // 補齊缺少的 keys（使用英文值）
  for (const { key, value } of missingKeys) {
    setNestedValue(zhTwData, key, value);
  }
  
  // 重建結構以保持與 en.json 一致的順序
  const syncedData = rebuildStructure(enData, zhTwData);
  
  // 儲存
  fs.writeFileSync(zhTwFile, JSON.stringify(syncedData, null, 2) + '\n', 'utf-8');
  
  console.log(`✅ 已同步：補齊 ${missingKeys.length} 個，移除 ${extraKeys.length} 個\n`);
  
  // 驗證
  const finalZhTwPairs = getAllKeyValuePairs(syncedData);
  const finalZhTwKeys = new Set(finalZhTwPairs.map(p => p.key));
  const finalMissing = [...enKeys].filter(k => !finalZhTwKeys.has(k));
  const finalExtra = [...finalZhTwKeys].filter(k => !enKeys.has(k));
  
  if (finalMissing.length === 0 && finalExtra.length === 0) {
    console.log('✅ 同步完成，結構已完全一致！');
  } else {
    console.log('⚠️  仍有不一致：');
    if (finalMissing.length > 0) {
      console.log(`   缺少: ${finalMissing.length} 個`);
    }
    if (finalExtra.length > 0) {
      console.log(`   多餘: ${finalExtra.length} 個`);
    }
  }
}

