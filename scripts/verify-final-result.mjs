#!/usr/bin/env node
/**
 * 階段 4：檢查最終結果
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

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

console.log('🔍 階段 4：檢查最終結果...\n');
console.log('='.repeat(70));

// 讀取檔案
const enFile = path.join(LOCALES_DIR, 'en.json');
const zhTwFile = path.join(LOCALES_DIR, 'zh-tw.json');

let enData, zhTwData;

try {
  enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
  console.log('✅ en.json - JSON 格式正確');
} catch (error) {
  console.error('❌ en.json - JSON 解析錯誤:', error.message);
  process.exit(1);
}

try {
  zhTwData = JSON.parse(fs.readFileSync(zhTwFile, 'utf-8'));
  console.log('✅ zh-tw.json - JSON 格式正確');
} catch (error) {
  console.error('❌ zh-tw.json - JSON 解析錯誤:', error.message);
  process.exit(1);
}

// 檢查 key 一致性
const enKeys = new Set(getAllKeys(enData));
const zhTwKeys = new Set(getAllKeys(zhTwData));

const missing = [...enKeys].filter(k => !zhTwKeys.has(k));
const extra = [...zhTwKeys].filter(k => !enKeys.has(k));

console.log('\n📊 Key 結構檢查：');
console.log(`   en.json: ${enKeys.size} 個 keys`);
console.log(`   zh-tw.json: ${zhTwKeys.size} 個 keys`);

if (missing.length > 0) {
  console.log(`\n❌ zh-tw.json 缺少 ${missing.length} 個 keys:`);
  missing.slice(0, 10).forEach(k => console.log(`   - ${k}`));
  if (missing.length > 10) {
    console.log(`   ... 還有 ${missing.length - 10} 個`);
  }
} else {
  console.log('   ✅ 無缺少的 keys');
}

if (extra.length > 0) {
  console.log(`\n❌ zh-tw.json 多餘 ${extra.length} 個 keys:`);
  extra.slice(0, 10).forEach(k => console.log(`   - ${k}`));
  if (extra.length > 10) {
    console.log(`   ... 還有 ${extra.length - 10} 個`);
  }
} else {
  console.log('   ✅ 無多餘的 keys');
}

// 檢查翻譯覆蓋率
let englishCount = 0;
let translatedCount = 0;

function isEnglishText(text) {
  if (typeof text !== 'string') return false;
  if (/[\u4e00-\u9fff]/.test(text)) return false;
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(text)) return false;
  if (/[\uac00-\ud7a3]/.test(text)) return false;
  const latinChars = text.match(/[a-zA-Z\s]/g) || [];
  const latinRatio = latinChars.length / (text.length || 1);
  return latinRatio > 0.5;
}

enKeys.forEach(key => {
  const enValue = getNestedValue(enData, key);
  const zhTwValue = getNestedValue(zhTwData, key);
  
  if (typeof enValue === 'string' && typeof zhTwValue === 'string') {
    if (isEnglishText(zhTwValue) && zhTwValue === enValue) {
      englishCount++;
    } else {
      translatedCount++;
    }
  }
});

console.log('\n📊 翻譯覆蓋率：');
console.log(`   已翻譯: ${translatedCount} 個`);
console.log(`   仍為英文: ${englishCount} 個`);
const coverage = ((translatedCount / (translatedCount + englishCount)) * 100).toFixed(1);
console.log(`   覆蓋率: ${coverage}%`);

console.log('\n' + '='.repeat(70));

if (missing.length === 0 && extra.length === 0) {
  console.log('🎉 所有驗證通過！');
  console.log('   ✅ JSON 格式正確');
  console.log('   ✅ Key 結構完全一致');
  console.log(`   ✅ 翻譯覆蓋率: ${coverage}%`);
  console.log('='.repeat(70));
} else {
  console.log('⚠️  發現問題，請檢查上述錯誤');
  console.log('='.repeat(70));
  process.exit(1);
}

