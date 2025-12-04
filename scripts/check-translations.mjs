#!/usr/bin/env node
/**
 * 檢查翻譯鍵完整性腳本
 * 確保所有語言檔案都有必要的翻譯鍵，避免顯示 key 值
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const localesDir = join(__dirname, '../src/i18n/locales');

// 讀取英文檔案作為標準
const enFile = join(localesDir, 'en.json');
const enData = JSON.parse(readFileSync(enFile, 'utf-8'));

// 需要檢查的主要翻譯鍵
const requiredKeys = [
  'common.learnMore',
  'common.backToHome',
  'common.startFreeToday',
];

// 遞迴獲取所有嵌套鍵
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

// 檢查特定路徑的鍵是否存在
function getNestedValue(obj, path) {
  const keys = path.split('.');
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

// 設置嵌套值
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
}

// 深度複製
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

console.log('🔍 檢查翻譯鍵完整性...\n');

const languages = ['zh-cn', 'ja', 'ko', 'pt-br', 'fr', 'es', 'de', 'th', 'vi', 'ro'];
const allEnKeys = getAllKeys(enData);

let hasErrors = false;
const fixedFiles = [];

for (const lang of languages) {
  const langFile = join(localesDir, `${lang}.json`);
  const langData = JSON.parse(readFileSync(langFile, 'utf-8'));
  let needsFix = false;
  const missingKeys = [];

  // 檢查所有英文鍵是否存在於當前語言檔案中
  for (const keyPath of allEnKeys) {
    const enValue = getNestedValue(enData, keyPath);
    const langValue = getNestedValue(langData, keyPath);
    
    if (langValue === undefined) {
      missingKeys.push(keyPath);
      needsFix = true;
    }
  }

  if (needsFix) {
    console.log(`❌ ${lang}.json 缺少 ${missingKeys.length} 個翻譯鍵`);
    hasErrors = true;
    
    // 自動修復：添加缺失的鍵（使用英文值作為佔位符）
    for (const keyPath of missingKeys) {
      const enValue = getNestedValue(enData, keyPath);
      if (enValue !== undefined) {
        setNestedValue(langData, keyPath, deepCopy(enValue));
      }
    }
    
    writeFileSync(langFile, JSON.stringify(langData, null, 2) + '\n', 'utf-8');
    fixedFiles.push(lang);
    console.log(`   ✓ 已自動修復 ${lang}.json`);
  } else {
    console.log(`✓ ${lang}.json 翻譯鍵完整`);
  }
}

console.log('\n' + '='.repeat(50));

if (hasErrors) {
  console.log(`⚠️  發現問題並已自動修復以下檔案: ${fixedFiles.join(', ')}`);
  console.log('   這些檔案現在使用英文值作為佔位符，建議後續進行翻譯。');
  process.exit(1);
} else {
  console.log('✅ 所有語言檔案的翻譯鍵都完整！');
  process.exit(0);
}





