#!/usr/bin/env node
/**
 * 自動翻譯所有語言檔案
 * 只翻譯英文值，保留已翻譯內容
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const GLOSSARY_FILE = path.join(__dirname, '../scripts/i18n-glossary.json');

// 語言配置
const LANGUAGES = {
  'zh-tw': 'Traditional Chinese',
  'zh-cn': 'Simplified Chinese',
  'ja': 'Japanese',
  'ko': 'Korean',
  'fr': 'French',
  'es': 'Spanish',
  'de': 'German',
  'pt-br': 'Portuguese (Brazil)',
  'th': 'Thai',
  'vi': 'Vietnamese',
  'ro': 'Romanian',
};

// 載入術語表
let glossary = {};
if (fs.existsSync(GLOSSARY_FILE)) {
  glossary = JSON.parse(fs.readFileSync(GLOSSARY_FILE, 'utf-8'));
}

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
 * 深度合併對象，保持結構與 en.json 一致
 */
function mergeStructure(source, target) {
  const result = {};
  
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      // 如果是對象，遞歸處理
      result[key] = target[key] && typeof target[key] === 'object' 
        ? mergeStructure(source[key], target[key])
        : mergeStructure(source[key], {});
    } else {
      // 如果是值，優先使用目標值（如果存在且不同於源值），否則使用源值
      if (target[key] !== undefined && target[key] !== source[key]) {
        result[key] = target[key]; // 保留已有翻譯
      } else {
        result[key] = source[key]; // 使用英文（需要翻譯）
      }
    }
  }
  
  return result;
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
  
  // 如果包含其他非拉丁字符（除了常見標點），可能是其他語言
  // 這裡簡單判斷：如果大部分是拉丁字符，認為是英文
  const latinChars = text.match(/[a-zA-Z\s]/g) || [];
  const latinRatio = latinChars.length / (text.length || 1);
  
  return latinRatio > 0.5;
}

/**
 * 使用 OpenAI API 翻譯文本
 */
async function translateWithOpenAI(text, targetLang, openaiApiKey) {
  if (!openaiApiKey) {
    throw new Error('OpenAI API key is required. Set OPENAI_API_KEY environment variable.');
  }

  const languageNames = {
    'zh-tw': 'Traditional Chinese',
    'zh-cn': 'Simplified Chinese',
    'ja': 'Japanese',
    'ko': 'Korean',
    'pt-br': 'Portuguese (Brazil)',
    'fr': 'French',
    'es': 'Spanish',
    'de': 'German',
    'th': 'Thai',
    'vi': 'Vietnamese',
    'ro': 'Romanian',
  };

  const systemPrompt = `You are a professional translator specializing in business and technology content. 
Translate the following text from English to ${languageNames[targetLang]}.
- Maintain the tone and style of business communication
- Keep technical terms and product names consistent
- Ensure natural, native-sounding translation
- Do not translate product names like "PinChat", "PinBot", "MAU", "BYOK", "AI PinBot"
- Preserve placeholders like {name}, {{count}}, %s exactly as they are
- Return only the translation, no explanations or additional text.`;

  const maxRetries = 3;
  let lastError = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      if (attempt > 0) {
        const waitTime = Math.pow(2, attempt) * 1000;
        console.log(`    重試 ${attempt}/${maxRetries - 1}，等待 ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: text }
          ],
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          const retryAfter = response.headers.get('retry-after') || '60';
          const waitTime = parseInt(retryAfter) * 1000;
          console.log(`    ⚠️  速率限制，等待 ${waitTime}ms...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          throw new Error(`OpenAI API error: Rate limit exceeded`);
        }
        throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      let translated = data.choices[0].message.content.trim();

      // 應用術語表
      for (const [term, translations] of Object.entries(glossary)) {
        if (translations[targetLang]) {
          const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
          translated = translated.replace(regex, translations[targetLang]);
        }
      }

      return translated;
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries - 1) {
        continue;
      }
      throw error;
    }
  }
  
  throw lastError || new Error('Unknown error');
}

/**
 * 遞歸翻譯對象，只翻譯英文值
 */
async function translateObject(source, target, targetLang, openaiApiKey, stats = { translated: 0, skipped: 0 }) {
  const result = {};
  
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      // 遞歸處理對象
      const targetObj = target[key] && typeof target[key] === 'object' ? target[key] : {};
      result[key] = await translateObject(source[key], targetObj, targetLang, openaiApiKey, stats);
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
            console.log(`  翻譯: ${key}`);
            const translated = await translateWithOpenAI(sourceValue, targetLang, openaiApiKey);
            result[key] = translated;
            stats.translated++;
            
            // 每 10 個保存一次進度
            if (stats.translated % 10 === 0) {
              console.log(`  💾 已翻譯 ${stats.translated} 個...`);
            }
            
            // 避免速率限制
            await new Promise(resolve => setTimeout(resolve, 500));
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

/**
 * 翻譯指定語言
 */
async function translateLanguage(targetLang, openaiApiKey) {
  console.log(`\n🌐 開始翻譯 ${targetLang} (${LANGUAGES[targetLang]})...\n`);
  
  const sourceFile = path.join(LOCALES_DIR, 'en.json');
  const targetFile = path.join(LOCALES_DIR, `${targetLang}.json`);
  
  const sourceData = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
  const targetData = fs.existsSync(targetFile)
    ? JSON.parse(fs.readFileSync(targetFile, 'utf-8'))
    : {};
  
  const stats = { translated: 0, skipped: 0 };
  
  // 翻譯並保持結構一致
  const translatedData = await translateObject(sourceData, targetData, targetLang, openaiApiKey, stats);
  
  // 保存
  fs.writeFileSync(targetFile, JSON.stringify(translatedData, null, 2) + '\n', 'utf-8');
  
  console.log(`\n✅ ${targetLang} 翻譯完成！`);
  console.log(`   - 已翻譯: ${stats.translated} 個`);
  console.log(`   - 已保留: ${stats.skipped} 個`);
  
  return stats;
}

// 主程序
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.log('❌ 錯誤: 未設置 OPENAI_API_KEY 環境變數');
  console.log('\n請先設置 API key:');
  console.log('  export OPENAI_API_KEY=your_api_key');
  console.log('\n然後運行:');
  console.log('  node scripts/auto-translate-all.mjs');
  process.exit(1);
}

(async () => {
  try {
    const targetLangs = Object.keys(LANGUAGES);
    const totalStats = { translated: 0, skipped: 0 };
    
    for (const lang of targetLangs) {
      const stats = await translateLanguage(lang, openaiApiKey);
      totalStats.translated += stats.translated;
      totalStats.skipped += stats.skipped;
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('🎉 所有語言翻譯完成！');
    console.log(`   總共翻譯: ${totalStats.translated} 個條目`);
    console.log(`   總共保留: ${totalStats.skipped} 個條目`);
    console.log('='.repeat(60));
  } catch (error) {
    console.error('❌ 執行錯誤:', error.message);
    process.exit(1);
  }
})();

