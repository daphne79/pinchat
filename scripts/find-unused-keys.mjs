#!/usr/bin/env node
/**
 * 找出未使用的 i18n keys
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const USED_KEYS_FILE = path.join(__dirname, '../used-i18n-keys.json');

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

console.log('🔍 比對 en.json 與實際使用的 keys...\n');

// 讀取實際使用的 keys
const usedKeysData = JSON.parse(fs.readFileSync(USED_KEYS_FILE, 'utf-8'));
const usedKeys = new Set(usedKeysData.keys);
const usageMap = usedKeysData.usageMap;

console.log(`📊 統計：`);
console.log(`   - en.json 中的所有 keys: 待檢查`);
console.log(`   - 實際使用的 keys: ${usedKeys.size}\n`);

// 讀取 en.json
const enFile = path.join(LOCALES_DIR, 'en.json');
const enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
const allEnKeys = getAllKeys(enData);

console.log(`   - en.json 中的 keys: ${allEnKeys.length}\n`);

// 找出未使用的 keys
const unusedKeys = [];
const usedKeysList = [];

allEnKeys.forEach(key => {
  if (usedKeys.has(key)) {
    usedKeysList.push(key);
  } else {
    const value = getNestedValue(enData, key);
    unusedKeys.push({
      key,
      value: typeof value === 'string' ? value.substring(0, 100) : JSON.stringify(value).substring(0, 100),
      type: typeof value
    });
  }
});

console.log('='.repeat(70));
console.log(`📋 分析結果：\n`);
console.log(`✅ 實際使用的 keys: ${usedKeysList.length}`);
console.log(`❌ 未使用的 keys: ${unusedKeys.length}\n`);

// 輸出未使用的 keys 報告
console.log('='.repeat(70));
console.log('🗑️  未使用的 i18n keys 清單：\n');

// 按照區塊分組
const grouped = {};

if (unusedKeys.length === 0) {
  console.log('✅ 沒有未使用的 keys！所有 keys 都在使用中。\n');
} else {
  unusedKeys.forEach(({ key, value, type }) => {
    const section = key.split('.')[0];
    if (!grouped[section]) {
      grouped[section] = [];
    }
    grouped[section].push({ key, value, type });
  });
  
  // 輸出報告
  Object.keys(grouped).sort().forEach(section => {
    console.log(`\n📦 ${section} (${grouped[section].length} 個未使用的 keys):`);
    grouped[section].forEach(({ key, value, type }) => {
      const preview = value.length > 60 ? value.substring(0, 60) + '...' : value;
      console.log(`   - ${key}`);
      console.log(`     值: "${preview}"`);
    });
  });
}

// 儲存報告
const reportFile = path.join(__dirname, '../unused-i18n-keys-report.json');
const report = {
  totalKeys: allEnKeys.length,
  usedKeys: usedKeysList.length,
  unusedKeys: unusedKeys.length,
  unusedKeysList: unusedKeys,
  groupedBySection: grouped || {}
};

fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf-8');

console.log('\n' + '='.repeat(70));
console.log(`💾 詳細報告已儲存至: ${path.relative(process.cwd(), reportFile)}`);
console.log('='.repeat(70));

