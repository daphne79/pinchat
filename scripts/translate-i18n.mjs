#!/usr/bin/env node

/**
 * i18n 自動翻譯工具
 * 
 * 這個工具可以：
 * 1. 自動翻譯缺失的翻譯鍵到目標語言
 * 2. 使用 OpenAI API 進行高質量翻譯
 * 3. 檢查翻譯一致性
 * 4. 維護術語表（glossary）確保術語翻譯一致
 * 
 * 使用方式：
 *   node scripts/translate-i18n.mjs --from=en --to=zh-cn,zh-tw,ja,ko
 *   node scripts/translate-i18n.mjs --check  # 檢查缺失的翻譯鍵
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 配置
const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const GLOSSARY_FILE = path.join(__dirname, '../scripts/i18n-glossary.json');

// 術語表 - 確保關鍵術語翻譯一致
let glossary = {};

// 載入術語表
if (fs.existsSync(GLOSSARY_FILE)) {
  glossary = JSON.parse(fs.readFileSync(GLOSSARY_FILE, 'utf-8'));
} else {
  // 創建初始術語表
  glossary = {
    'PinChat': {
      'zh-tw': 'PinChat',
      'zh-cn': 'PinChat',
      'ja': 'PinChat',
      'ko': 'PinChat',
    },
    'MAU': {
      'zh-tw': 'MAU',
      'zh-cn': 'MAU',
      'ja': 'MAU',
      'ko': 'MAU',
    },
    'BYOK': {
      'zh-tw': 'BYOK',
      'zh-cn': 'BYOK',
      'ja': 'BYOK',
      'ko': 'BYOK',
    },
    'AI PinBot': {
      'zh-tw': 'AI PinBot',
      'zh-cn': 'AI PinBot',
      'ja': 'AI PinBot',
      'ko': 'AI PinBot',
    },
  };
  fs.writeFileSync(GLOSSARY_FILE, JSON.stringify(glossary, null, 2), 'utf-8');
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
 * 檢查翻譯鍵是否缺失
 */
function findMissingKeys(sourceLang, targetLang) {
  const sourceFile = path.join(LOCALES_DIR, `${sourceLang}.json`);
  const targetFile = path.join(LOCALES_DIR, `${targetLang}.json`);

  if (!fs.existsSync(sourceFile)) {
    console.error(`❌ 源語言文件不存在: ${sourceFile}`);
    return [];
  }

  const source = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
  const target = fs.existsSync(targetFile) 
    ? JSON.parse(fs.readFileSync(targetFile, 'utf-8'))
    : {};

  const sourceKeys = getAllKeys(source);
  const missingKeys = [];

  for (const key of sourceKeys) {
    const sourceValue = getNestedValue(source, key);
    const targetValue = getNestedValue(target, key);
    
    // 只處理字符串類型的值
    if (typeof sourceValue === 'string' && (!targetValue || targetValue === sourceValue)) {
      missingKeys.push({
        key,
        sourceValue,
        targetValue: targetValue || null
      });
    }
  }

  return missingKeys;
}

/**
 * 應用術語表替換
 */
function applyGlossary(text, targetLang) {
  let result = text;
  for (const [term, translations] of Object.entries(glossary)) {
    if (translations[targetLang]) {
      // 使用正則表達式替換，保持大小寫
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      result = result.replace(regex, translations[targetLang]);
    }
  }
  return result;
}

/**
 * 使用 OpenAI API 翻譯文本
 */
async function translateWithOpenAI(text, sourceLang, targetLang, openaiApiKey) {
  if (!openaiApiKey) {
    throw new Error('OpenAI API key is required. Set OPENAI_API_KEY environment variable.');
  }

  const languageNames = {
    'en': 'English',
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
Translate the following text from ${languageNames[sourceLang]} to ${languageNames[targetLang]}.
- Maintain the tone and style of business communication
- Keep technical terms and product names consistent
- Ensure natural, native-sounding translation
- Do not translate product names like "PinChat", "PinBot", "MAU", "BYOK"
- Return only the translation, no explanations or additional text.`;

  // 重試邏輯
  const maxRetries = 3;
  let lastError = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // 如果之前失敗了，等待更長時間再重試
      if (attempt > 0) {
        const waitTime = Math.pow(2, attempt) * 1000; // 指數退避：2s, 4s, 8s
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
        // 如果是速率限制，需要等待更長時間
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
      translated = applyGlossary(translated, targetLang);

      return translated;
    } catch (error) {
      lastError = error;
      // 如果不是最後一次嘗試，繼續重試
      if (attempt < maxRetries - 1) {
        continue;
      }
      // 最後一次嘗試也失敗了，拋出錯誤
      throw error;
    }
  }
  
  throw lastError || new Error('Unknown error');
}

/**
 * 翻譯缺失的鍵
 */
async function translateMissingKeys(sourceLang, targetLang, openaiApiKey = null) {
  console.log(`\n🔍 檢查 ${sourceLang} -> ${targetLang} 的缺失翻譯...`);
  
  const missingKeys = findMissingKeys(sourceLang, targetLang);
  
  if (missingKeys.length === 0) {
    console.log(`✅ ${targetLang} 沒有缺失的翻譯鍵`);
    return;
  }

  console.log(`📝 找到 ${missingKeys.length} 個缺失的翻譯鍵`);

  // 讀取目標語言文件
  const targetFile = path.join(LOCALES_DIR, `${targetLang}.json`);
  const target = fs.existsSync(targetFile)
    ? JSON.parse(fs.readFileSync(targetFile, 'utf-8'))
    : {};

  // 讀取源語言文件
  const sourceFile = path.join(LOCALES_DIR, `${sourceLang}.json`);
  const source = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));

  let translatedCount = 0;
  let skippedCount = 0;

  // 如果沒有 API key，只報告缺失的鍵
  if (!openaiApiKey) {
    console.log('\n⚠️  未設置 OPENAI_API_KEY，無法自動翻譯');
    console.log('缺失的翻譯鍵：');
    missingKeys.slice(0, 10).forEach(({ key, sourceValue }) => {
      console.log(`  - ${key}: "${sourceValue}"`);
    });
    if (missingKeys.length > 10) {
      console.log(`  ... 還有 ${missingKeys.length - 10} 個`);
    }
    return;
  }

  // 翻譯缺失的鍵
  for (const { key, sourceValue } of missingKeys) {
    try {
      // 如果已經有值且不等於源值，跳過
      const existingValue = getNestedValue(target, key);
      if (existingValue && existingValue !== sourceValue) {
        skippedCount++;
        continue;
      }

      console.log(`  翻譯: ${key}`);
      const translated = await translateWithOpenAI(sourceValue, sourceLang, targetLang, openaiApiKey);
      setNestedValue(target, key, translated);
      translatedCount++;

      // 保存進度（每 10 個鍵保存一次）
      if (translatedCount % 10 === 0) {
        fs.writeFileSync(targetFile, JSON.stringify(target, null, 2) + '\n', 'utf-8');
        console.log(`  💾 已保存進度 (${translatedCount}/${missingKeys.length})`);
      }

      // 避免 API 速率限制（增加延遲時間）
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`  ❌ 翻譯失敗 ${key}: ${error.message}`);
    }
  }

  // 最後保存
  fs.writeFileSync(targetFile, JSON.stringify(target, null, 2) + '\n', 'utf-8');

  console.log(`\n✅ 完成！`);
  console.log(`   - 已翻譯: ${translatedCount} 個鍵`);
  console.log(`   - 已跳過: ${skippedCount} 個鍵`);
}

/**
 * 檢查所有語言的缺失翻譯
 */
function checkAllLanguages(sourceLang = 'en') {
  console.log(`\n📊 檢查所有語言對比 ${sourceLang} 的缺失翻譯...\n`);

  const files = fs.readdirSync(LOCALES_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .filter(f => f !== sourceLang);

  for (const targetLang of files) {
    const missing = findMissingKeys(sourceLang, targetLang);
    const total = getAllKeys(JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, `${sourceLang}.json`), 'utf-8'))).length;
    const missingCount = missing.length;
    const completedCount = total - missingCount;
    const percentage = ((completedCount / total) * 100).toFixed(1);

    const status = missingCount === 0 ? '✅' : '⚠️';
    console.log(`${status} ${targetLang.padEnd(8)}: ${completedCount}/${total} (${percentage}%)`);
    
    if (missingCount > 0 && missingCount <= 5) {
      console.log(`   缺失: ${missing.map(m => m.key).join(', ')}`);
    } else if (missingCount > 5) {
      console.log(`   缺失: ${missing.slice(0, 5).map(m => m.key).join(', ')} ... (還有 ${missingCount - 5} 個)`);
    }
  }
}

// 主程序
const args = process.argv.slice(2);

if (args.includes('--check')) {
  checkAllLanguages('en');
} else {
  // 解析參數（支持 --from=en 和 --from en 兩種格式）
  let sourceLang = null;
  let targetLangs = null;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--from=')) {
      sourceLang = args[i].split('=')[1];
    } else if (args[i] === '--from' && i + 1 < args.length) {
      sourceLang = args[i + 1];
    } else if (args[i].startsWith('--to=')) {
      targetLangs = args[i].split('=')[1].split(',');
    } else if (args[i] === '--to' && i + 1 < args.length) {
      targetLangs = args[i + 1].split(',');
    }
  }

  if (sourceLang && targetLangs && targetLangs.length > 0) {
    const openaiApiKey = process.env.OPENAI_API_KEY;

    (async () => {
      try {
        for (const targetLang of targetLangs) {
          await translateMissingKeys(sourceLang, targetLang.trim(), openaiApiKey);
        }
      } catch (error) {
        console.error('❌ 執行錯誤:', error.message);
        process.exit(1);
      }
    })();
  } else {
    console.log(`
使用方法：
  
  檢查缺失的翻譯鍵：
    node scripts/translate-i18n.mjs --check

  自動翻譯（需要 OpenAI API key）：
    export OPENAI_API_KEY=your_api_key
    node scripts/translate-i18n.mjs --from=en --to=zh-tw,zh-cn,ja,ko

  只報告缺失的鍵（不需要 API key）：
    node scripts/translate-i18n.mjs --from=en --to=zh-tw,zh-cn

注意：
  - 工具會自動維護術語表（glossary）確保翻譯一致性
  - 術語表保存在 scripts/i18n-glossary.json
  - 翻譯會跳過已經存在的翻譯鍵
  - 建議先檢查缺失的鍵，然後再進行翻譯
  `);
  }
}

