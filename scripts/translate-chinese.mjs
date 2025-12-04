#!/usr/bin/env node
/**
 * 繁體中文和簡體中文自動翻譯工具
 * 使用 Google Translate 免費 API（無需 API key）
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

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
 * 深度複製對象結構
 */
function deepMerge(source, target) {
  const result = {};
  
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      result[key] = target[key] && typeof target[key] === 'object' 
        ? deepMerge(source[key], target[key])
        : deepMerge(source[key], {});
    } else {
      // 如果目標值存在且已翻譯（不是英文），保留它
      const targetValue = target[key];
      if (targetValue !== undefined && targetValue !== source[key] && !isEnglishText(targetValue)) {
        result[key] = targetValue;
      } else {
        result[key] = source[key]; // 使用源值（需要翻譯）
      }
    }
  }
  
  return result;
}

/**
 * 翻譯指定語言
 */
async function translateLanguage(targetLang) {
  const langName = targetLang === 'zh-tw' ? '繁體中文' : '簡體中文';
  console.log(`\n🌐 開始翻譯 ${targetLang} (${langName})...\n`);
  
  const sourceFile = path.join(LOCALES_DIR, 'en.json');
  const targetFile = path.join(LOCALES_DIR, `${targetLang}.json`);
  
  // 讀取檔案
  const sourceData = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
  const targetData = fs.existsSync(targetFile)
    ? JSON.parse(fs.readFileSync(targetFile, 'utf-8'))
    : {};
  
  // 合併結構，保留已有翻譯
  let mergedData = deepMerge(sourceData, targetData);
  
  // 找出需要翻譯的項目
  const sourcePairs = getAllKeyValuePairs(sourceData);
  const needTranslate = [];
  
  for (const { key, value } of sourcePairs) {
    if (typeof value === 'string' && isEnglishText(value)) {
      const targetValue = getNestedValue(targetData, key);
      
      // 如果目標值不存在、是英文、或等於源值，需要翻譯
      if (!targetValue || targetValue === value || isEnglishText(targetValue)) {
        needTranslate.push({ key, value });
      }
    }
  }
  
  console.log(`📊 找到 ${needTranslate.length} 個需要翻譯的項目\n`);
  
  if (needTranslate.length === 0) {
    console.log(`✅ ${targetLang} 沒有需要翻譯的項目`);
    return { translated: 0, skipped: 0 };
  }
  
  // 翻譯
  let translated = 0;
  let skipped = 0;
  let errors = 0;
  
  // Google Translate 的語言代碼
  const langCode = targetLang === 'zh-tw' ? 'zh-TW' : 'zh-CN';
  
  for (let i = 0; i < needTranslate.length; i++) {
    const { key, value } = needTranslate[i];
    
    try {
      // 保護變數不被翻譯
      const placeholders = value.match(/\{[^}]+\}|{{[^}]+}}|%[sd]/g) || [];
      const placeholdersMap = new Map();
      
      // 用占位符替換變數
      let textToTranslate = value;
      placeholders.forEach((placeholder, index) => {
        const placeholderKey = `__PLACEHOLDER_${index}__`;
        placeholdersMap.set(placeholderKey, placeholder);
        textToTranslate = textToTranslate.replace(placeholder, placeholderKey);
      });
      
      console.log(`  [${i + 1}/${needTranslate.length}] 翻譯: ${key.substring(0, 60)}...`);
      
      // 翻譯
      let translatedText = await translateText(textToTranslate, langCode);
      
      // 還原變數
      placeholdersMap.forEach((placeholder, key) => {
        translatedText = translatedText.replace(key, placeholder);
      });
      
      // 設置翻譯結果
      setNestedValue(mergedData, key, translatedText);
      translated++;
      
      // 每 10 個保存一次
      if (translated % 10 === 0) {
        fs.writeFileSync(targetFile, JSON.stringify(mergedData, null, 2) + '\n', 'utf-8');
        console.log(`     💾 已保存進度 (${translated}/${needTranslate.length})`);
      }
      
      // 延遲以避免速率限制
      await new Promise(resolve => setTimeout(resolve, 200));
      
    } catch (error) {
      console.error(`     ❌ 翻譯失敗: ${error.message}`);
      errors++;
      skipped++;
    }
  }
  
  // 最後保存
  fs.writeFileSync(targetFile, JSON.stringify(mergedData, null, 2) + '\n', 'utf-8');
  
  console.log(`\n✅ ${targetLang} 翻譯完成！`);
  console.log(`   - 已翻譯: ${translated} 個`);
  console.log(`   - 已跳過: ${skipped} 個`);
  if (errors > 0) {
    console.log(`   - 錯誤: ${errors} 個`);
  }
  
  return { translated, skipped, errors };
}

// 主程序
(async () => {
  try {
    console.log('🚀 開始翻譯繁體中文和簡體中文...\n');
    console.log('📝 使用 Google Translate 免費 API（無需 API key）\n');
    
    const zhTwStats = await translateLanguage('zh-tw');
    const zhCnStats = await translateLanguage('zh-cn');
    
    console.log('\n' + '='.repeat(60));
    console.log('🎉 翻譯完成！');
    console.log('\n繁體中文 (zh-tw):');
    console.log(`   - 已翻譯: ${zhTwStats.translated} 個`);
    console.log(`   - 已保留: ${zhTwStats.skipped} 個`);
    console.log('\n簡體中文 (zh-cn):');
    console.log(`   - 已翻譯: ${zhCnStats.translated} 個`);
    console.log(`   - 已保留: ${zhCnStats.skipped} 個`);
    console.log('='.repeat(60));
    
  } catch (error) {
    console.error('❌ 執行錯誤:', error.message);
    process.exit(1);
  }
})();

