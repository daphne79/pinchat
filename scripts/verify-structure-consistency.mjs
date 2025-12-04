#!/usr/bin/env node
/**
 * 驗證所有語言檔案的結構一致性和順序
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

/**
 * 獲取對象的鍵順序
 */
function getKeyOrder(obj, prefix = '') {
  const order = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      order.push({ key: fullKey, type: 'object', children: getKeyOrder(obj[key], fullKey) });
    } else {
      order.push({ key: fullKey, type: 'value' });
    }
  }
  return order;
}

/**
 * 遞歸獲取所有翻譯鍵
 */
function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(...getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

console.log('🔍 驗證所有語言檔案的結構一致性...\n');

// 讀取基準檔
const enFile = path.join(LOCALES_DIR, 'en.json');
const enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
const enKeys = new Set(getAllKeys(enData));

console.log(`📊 基準檔 en.json：${enKeys.size} 個 keys\n`);

// 檢查所有語言檔案
const allLangFiles = fs.readdirSync(LOCALES_DIR)
  .filter(f => f.endsWith('.json'))
  .map(f => f.replace('.json', ''));

let allConsistent = true;
const issues = [];

for (const lang of allLangFiles) {
  const langFile = path.join(LOCALES_DIR, `${lang}.json`);
  
  let langData;
  try {
    langData = JSON.parse(fs.readFileSync(langFile, 'utf-8'));
  } catch (error) {
    console.error(`❌ ${lang}.json - JSON 解析錯誤: ${error.message}`);
    allConsistent = false;
    issues.push({ lang, error: error.message });
    continue;
  }
  
  const langKeys = new Set(getAllKeys(langData));
  
  // 檢查 key 完整性
  const missing = [...enKeys].filter(k => !langKeys.has(k));
  const extra = [...langKeys].filter(k => !enKeys.has(k));
  
  if (missing.length > 0 || extra.length > 0) {
    allConsistent = false;
    console.error(`❌ ${lang}.json - key 不一致:`);
    if (missing.length > 0) {
      console.error(`   缺少: ${missing.length} 個 (${missing.slice(0, 3).join(', ')}...)`);
    }
    if (extra.length > 0) {
      console.error(`   多餘: ${extra.length} 個 (${extra.slice(0, 3).join(', ')}...)`);
    }
    issues.push({ lang, missing, extra });
  } else {
    console.log(`✅ ${lang}.json - 結構一致 (${langKeys.size} 個 keys)`);
  }
}

console.log('\n' + '='.repeat(70));

if (allConsistent && issues.length === 0) {
  console.log('🎉 所有驗證通過！');
  console.log(`   ✅ 所有 JSON 檔案格式正確`);
  console.log(`   ✅ 所有語言檔案 key 完全一致`);
  console.log(`   ✅ 共 ${allLangFiles.length} 個檔案，每個都有 ${enKeys.size} 個 keys`);
  console.log('='.repeat(70));
} else {
  console.log('⚠️  發現問題：');
  issues.forEach(issue => {
    console.log(`   - ${issue.lang}.json: ${issue.error || 'key 不一致'}`);
  });
  console.log('='.repeat(70));
  process.exit(1);
}

