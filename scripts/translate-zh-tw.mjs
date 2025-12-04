#!/usr/bin/env node
/**
 * 自動翻譯 zh-tw.json 中的英文值為繁體中文
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

/**
 * 檢查值是否為英文（簡單檢測）
 */
function isEnglishText(text) {
  if (typeof text !== 'string') return false;
  
  // 如果包含中文字符，不是英文
  if (/[\u4e00-\u9fff]/.test(text)) return false;
  
  // 如果包含日文字符，不是英文
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(text)) return false;
  
  // 如果包含韓文字符，不是英文
  if (/[\uac00-\ud7a3]/.test(text)) return false;
  
  // 如果大部分是拉丁字符，認為是英文
  const latinChars = text.match(/[a-zA-Z\s]/g) || [];
  const latinRatio = latinChars.length / (text.length || 1);
  
  return latinRatio > 0.5;
}

/**
 * 使用 Google Translate 免費 API 翻譯
 */
async function translateText(text, targetLang) {
  try {
    // 使用 Google Translate 的免費端點
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 解析翻譯結果
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0].map(item => item[0]).join('');
    }
    
    return text; // 如果解析失敗，返回原文
  } catch (error) {
    console.error(`  翻譯錯誤: ${error.message}`);
    return text; // 錯誤時返回原文
  }
}

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
      // 如果是值，使用目標值（可能已翻譯）
      result[key] = target[key] !== undefined ? target[key] : source[key];
    }
  }
  
  return result;
}

/**
 * 遞歸翻譯對象，只翻譯英文值
 */
async function translateObject(source, target, stats = { translated: 0, skipped: 0 }) {
  const result = {};
  
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      // 遞歸處理對象
      const targetObj = target[key] && typeof target[key] === 'object' ? target[key] : {};
      result[key] = await translateObject(source[key], targetObj, stats);
    } else {
      // 處理值
      const sourceValue = source[key];
      const targetValue = target[key];
      
      // 只處理字串類型
      if (typeof sourceValue === 'string') {
        // 如果目標值存在且不是英文（已翻譯），保留
        if (targetValue && targetValue !== sourceValue && !isEnglishText(targetValue)) {
          result[key] = targetValue;
          stats.skipped++;
        } 
        // 如果是英文或不存在，需要翻譯
        else if (isEnglishText(sourceValue) || !targetValue || targetValue === sourceValue) {
          try {
            // 保護變數不被翻譯
            const placeholders = sourceValue.match(/\{[^}]+\}|{{[^}]+}}|%[sd]/g) || [];
            const placeholdersMap = new Map();
            
            // 用占位符替換變數
            let textToTranslate = sourceValue;
            placeholders.forEach((placeholder, index) => {
              const placeholderKey = `__PLACEHOLDER_${index}__`;
              placeholdersMap.set(placeholderKey, placeholder);
              textToTranslate = textToTranslate.replace(placeholder, placeholderKey);
            });
            
            console.log(`  翻譯: ${key.substring(0, 60)}${key.length > 60 ? '...' : ''}`);
            
            // 翻譯
            let translatedText = await translateText(textToTranslate, 'zh-TW');
            
            // 還原變數
            placeholdersMap.forEach((placeholder, key) => {
              translatedText = translatedText.replace(key, placeholder);
            });
            
            result[key] = translatedText;
            stats.translated++;
            
            // 每 10 個保存一次進度
            if (stats.translated % 10 === 0) {
              console.log(`  💾 已翻譯 ${stats.translated} 個...`);
            }
            
            // 延遲以避免速率限制
            await new Promise(resolve => setTimeout(resolve, 200));
            
          } catch (error) {
            console.error(`  ❌ 翻譯失敗 ${key}: ${error.message}`);
            result[key] = sourceValue; // 失敗時保留英文
            stats.skipped++;
          }
        } else {
          result[key] = targetValue || sourceValue;
          stats.skipped++;
        }
      } else {
        result[key] = targetValue !== undefined ? targetValue : sourceValue;
      }
    }
  }
  
  return result;
}

console.log('🌏 階段 3：自動翻譯 zh-tw.json 中的英文值...\n');

// 讀取檔案
const enFile = path.join(LOCALES_DIR, 'en.json');
const zhTwFile = path.join(LOCALES_DIR, 'zh-tw.json');

const enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
const zhTwData = JSON.parse(fs.readFileSync(zhTwFile, 'utf-8'));

// 找出需要翻譯的項目
const enPairs = getAllKeyValuePairs(enData);
const needTranslate = [];

for (const { key, value } of enPairs) {
  if (typeof value === 'string' && isEnglishText(value)) {
    const zhTwValue = getNestedValue(zhTwData, key);
    
    // 如果目標值不存在、是英文、或等於源值，需要翻譯
    if (!zhTwValue || zhTwValue === value || isEnglishText(zhTwValue)) {
      needTranslate.push({ key, value });
    }
  }
}

console.log(`📊 找到 ${needTranslate.length} 個需要翻譯的項目\n`);

if (needTranslate.length === 0) {
  console.log('✅ zh-tw.json 中沒有需要翻譯的英文值\n');
} else {
  const stats = { translated: 0, skipped: 0 };
  
  // 翻譯並保持結構一致
  const translatedData = await translateObject(enData, zhTwData, stats);
  
  // 儲存
  fs.writeFileSync(zhTwFile, JSON.stringify(translatedData, null, 2) + '\n', 'utf-8');
  
  console.log(`\n✅ 翻譯完成！`);
  console.log(`   - 已翻譯: ${stats.translated} 個`);
  console.log(`   - 已保留: ${stats.skipped} 個\n`);
}

