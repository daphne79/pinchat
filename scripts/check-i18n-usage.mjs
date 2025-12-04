#!/usr/bin/env node
/**
 * 檢查整個 /src 資料夾的 i18n 使用情況
 * 1. 找出硬寫文字
 * 2. 找出錯誤的 i18n 語法
 * 3. 比對 en.json 的 key 使用情況
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');
const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const EN_FILE = path.join(LOCALES_DIR, 'en.json');

// 要掃描的副檔名
const SCAN_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue', '.dart', '.html'];

// 要忽略的資料夾
const IGNORE_DIRS = ['node_modules', 'test', 'build', 'dist', 'locales', '.git'];

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
 * 檢查是否為忽略的資料夾
 */
function shouldIgnoreDir(dirPath) {
  const dirName = path.basename(dirPath);
  return IGNORE_DIRS.some(ignore => dirPath.includes(ignore) || dirName === ignore);
}

/**
 * 收集所有檔案
 */
function collectFiles(dir, files = []) {
  if (shouldIgnoreDir(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      collectFiles(fullPath, files);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * 提取 i18n keys 從程式碼
 */
function extractI18nKeys(content) {
  const keys = new Set();
  
  // 支援的 i18n 語法模式
  const patterns = [
    /[^a-zA-Z_$]t\(['"`]([^'"`]+)['"`]/g,      // t("key")
    /tFixed\(['"`]([^'"`]+)['"`]/g,            // tFixed("key")
    /\$t\(['"`]([^'"`]+)['"`]/g,               // $t("key")
    /i18n\.t\(['"`]([^'"`]+)['"`]/g,           // i18n.t("key")
    /useTranslation\(['"`]([^'"`]+)['"`]/g,    // useTranslation("key")
    /context\.\$t\(['"`]([^'"`]+)['"`]/g,      // context.$t("key")
    /\{t\(['"`]([^'"`]+)['"`]\)\}/g,            // {t("key")}
    /\{tFixed\(['"`]([^'"`]+)['"`]\)\}/g,       // {tFixed("key")}
    /\{\$t\(['"`]([^'"`]+)['"`]\)\}/g,          // {$t("key")}
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const key = match[1];
      if (key && !key.includes('${') && !key.includes('{`')) {
        keys.add(key.trim());
      }
    }
  });
  
  return Array.from(keys);
}

/**
 * 檢查硬寫文字（中英文）
 */
function findHardcodedText(content, filePath) {
  const issues = [];
  const lines = content.split('\n');
  
  // 跳過的語境（註解、import、變數名等）
  const skipPatterns = [
    /^[\s]*\/\//,              // 單行註解
    /^[\s]*\/\*/,              // 多行註解開始
    /^[\s]*\*/,                // 多行註解內容
    /^[\s]*import\s+.*from/,   // import 語句
    /^[\s]*export\s+.*from/,   // export 語句
    /['"]https?:\/\//,         // URL
    /['"]mailto:/,             // email
    /className\s*=|class\s*=/,  // CSS class
    /style\s*=\s*\{/,          // inline style
    /console\.(log|error|warn)/, // console 語句
    /process\.env/,            // 環境變數
    /\.toLowerCase\(\)/,       // 方法調用
    /\.toUpperCase\(\)/,       // 方法調用
    /['"]\s*\+/,               // 字串拼接開始
    /\+\s*['"]/,               // 字串拼接結束
    /['"]\s*===?\s*/,          // 比較運算
    /['"]\s*!==?\s*/,          // 比較運算
    /\s*['"]\s*:/,             // 物件 key
    /['"]\s*\)\s*=>/,          // 箭頭函數參數
    /['"]\s*,/,                // 物件分隔符
    /^\d+$/,                   // 純數字
    /hover:\w+/,               // Tailwind CSS hover class
    /focus:\w+/,               // Tailwind CSS focus class
    /bg-\w+/,                  // Tailwind CSS background class
    /text-\w+/,                // Tailwind CSS text class
    /border-\w+/,              // Tailwind CSS border class
    /rounded-\w+/,             // Tailwind CSS rounded class
    /px-\w+|py-\w+|p-\w+|m-\w+/, // Tailwind CSS spacing
  ];
  
  // 找出中文字符串
  const chinesePattern = /['"`]([^'"`]*[\u4e00-\u9fff]+[^'"`]*)['"`]/g;
  let match;
  while ((match = chinesePattern.exec(content)) !== null) {
    const fullMatch = match[0];
    const text = match[1];
    const lineNum = content.substring(0, match.index).split('\n').length;
    const line = lines[lineNum - 1];
    
    // 檢查是否應該跳過
    const shouldSkip = skipPatterns.some(pattern => pattern.test(line));
    
    // 檢查是否在 i18n 調用中
    const beforeText = content.substring(Math.max(0, match.index - 50), match.index);
    const isInI18nCall = /t\(|tFixed\(|\$t\(|i18n\.t\(/.test(beforeText);
    
    // 檢查是否在 JSX 註解中
    const isInJSXComment = /\{\s*\/\*|\/\*[\s\S]*?\*\//.test(line);
    
    // 檢查是否在 CSS class 中（例如 className="..." 或 class="..."）
    const isInClassName = /className\s*=\s*['"`]|class\s*=\s*['"`]/.test(line);
    
    // 檢查是否在圖片路徑或資源路徑中
    const isInResourcePath = /src\s*=\s*['"`]\//.test(line) && text.length < 10;
    
    if (!shouldSkip && !isInI18nCall && !isInJSXComment && !isInClassName && !isInResourcePath && text.length > 0) {
      // 過濾掉太短的中文字串（可能是變數名或 ID）
      if (text.length >= 3 || /[\u4e00-\u9fff]{2,}/.test(text)) {
        issues.push({
          line: lineNum,
          type: '硬寫文字（中文）',
          text: text.substring(0, 50),
          code: line.trim().substring(0, 80)
        });
      }
    }
  }
  
  // 找出常見的英文 UI 文字（只在特定屬性中檢查）
  const commonEnglishUIText = [
    /\b(Login|Sign in|Sign up|Submit|Cancel|OK|Yes|No|Delete|Edit|Save|Close|Back|Next|Previous|More|Less|Show|Hide|Search|Filter|Sort|Reset|Clear|Confirm|Loading|Error|Success|Warning|Info|Please|Required|Optional)\b/gi,
    /\b(Email|Password|Username|Name|Title|Description|Message|Comment|Address|Phone|Mobile|Company|Job|Country)\b/gi,
  ];
  
  // 只在特定的 HTML/JSX 屬性中檢查（排除 className）
  const uiAttributePatterns = [
    /(?:aria-label|placeholder|title|alt)\s*=\s*['"`]([^'"`]+)['"`]/g,
    /<[^>]+>([^<>]{3,50})<\//g, // JSX 內容文字
  ];
  
  uiAttributePatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const text = match[1];
      const lineNum = content.substring(0, match.index).split('\n').length;
      const line = lines[lineNum - 1];
      
      // 檢查是否在 i18n 調用中
      const isInI18nCall = /t\(|tFixed\(|\$t\(|i18n\.t\(/.test(line);
      
      // 檢查是否為純英文且看起來像 UI 文字
      if (!isInI18nCall && /^[a-zA-Z\s]{3,}$/i.test(text.trim())) {
        const isUIWord = commonEnglishUIText.some(p => p.test(text));
        if (isUIWord && !/^(no|yes|loading|mobile|previous|next)$/i.test(text.toLowerCase()) || 
            /^(Login|Sign|Submit|Cancel|Delete|Edit|Save|Close|Back|Next|Previous|Email|Password|Username)$/i.test(text)) {
          issues.push({
            line: lineNum,
            type: '硬寫文字（英文）',
            text: text.trim(),
            code: line.trim().substring(0, 80)
          });
        }
      }
    }
  });
  
  // 特別檢查 aria-label 中的 previous/next
  const ariaLabelPattern = /aria-label\s*=\s*['"`]([^'"`]+)['"`]/g;
  let ariaMatch;
  while ((ariaMatch = ariaLabelPattern.exec(content)) !== null) {
    const text = ariaMatch[1];
    const lineNum = content.substring(0, ariaMatch.index).split('\n').length;
    const line = lines[lineNum - 1];
    
    if (/Go to (previous|next)/i.test(text) && !/t\(|tFixed\(|\$t\(|i18n\.t\(/.test(line)) {
      issues.push({
        line: lineNum,
        type: '硬寫文字（英文）',
        text: text,
        code: line.trim().substring(0, 80)
      });
    }
  }
  
  return issues;
}

/**
 * 檢查錯誤的 i18n 語法
 */
function findInvalidI18nSyntax(content) {
  const issues = [];
  const lines = content.split('\n');
  
  // 空 key
  const emptyKeyPatterns = [
    /t\(['"`]\s*['"`]/g,
    /tFixed\(['"`]\s*['"`]/g,
    /\$t\(['"`]\s*['"`]/g,
    /i18n\.t\(['"`]\s*['"`]/g,
  ];
  
  emptyKeyPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      issues.push({
        line: lineNum,
        type: '語法錯誤（空 key）',
        text: 't("") 或 t(\'\')',
        code: lines[lineNum - 1].trim().substring(0, 80)
      });
    }
  });
  
  // undefined key
  const undefinedPatterns = [
    /t\(['"`]undefined['"`]/g,
    /tFixed\(['"`]undefined['"`]/g,
    /\$t\(['"`]undefined['"`]/g,
  ];
  
  undefinedPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      issues.push({
        line: lineNum,
        type: '語法錯誤（undefined key）',
        text: 't("undefined")',
        code: lines[lineNum - 1].trim().substring(0, 80)
      });
    }
  });
  
  // 只有空格的 key
  const spaceKeyPatterns = [
    /t\(['"`]\s+['"`]/g,
  ];
  
  spaceKeyPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      issues.push({
        line: lineNum,
        type: '語法錯誤（空白 key）',
        text: 't(" ")',
        code: lines[lineNum - 1].trim().substring(0, 80)
      });
    }
  });
  
  return issues;
}

console.log('🔍 開始檢查 i18n 使用情況...\n');
console.log('='.repeat(70));

// 讀取 en.json
let enData, definedKeys;
try {
  enData = JSON.parse(fs.readFileSync(EN_FILE, 'utf-8'));
  definedKeys = new Set(getAllKeys(enData));
  console.log(`📊 en.json 定義了 ${definedKeys.size} 個 keys\n`);
} catch (error) {
  console.error(`❌ 無法讀取 en.json: ${error.message}`);
  process.exit(1);
}

// 收集所有檔案
const files = collectFiles(SRC_DIR);
console.log(`📁 找到 ${files.length} 個檔案需要檢查\n`);

const allIssues = [];
const usedKeys = new Set();

// 檢查每個檔案
files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const relativePath = path.relative(SRC_DIR, file);
    
    // 提取使用的 keys
    const keys = extractI18nKeys(content);
    keys.forEach(key => usedKeys.add(key));
    
    // 檢查硬寫文字
    const hardcodedIssues = findHardcodedText(content, file);
    
    // 檢查錯誤語法
    const syntaxIssues = findInvalidI18nSyntax(content);
    
    // 檢查未定義的 keys
    const undefinedKeyIssues = [];
    keys.forEach(key => {
      if (!definedKeys.has(key)) {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes(`"${key}"`) || line.includes(`'${key}'`) || line.includes(`\`${key}\``)) {
            undefinedKeyIssues.push({
              line: index + 1,
              type: '找不到 key',
              text: key,
              code: line.trim().substring(0, 80)
            });
          }
        });
      }
    });
    
    // 合併所有問題
    const fileIssues = [...hardcodedIssues, ...syntaxIssues, ...undefinedKeyIssues];
    
    if (fileIssues.length > 0) {
      allIssues.push({
        file: relativePath,
        issues: fileIssues
      });
    }
  } catch (error) {
    console.error(`❌ 讀取檔案失敗 ${file}: ${error.message}`);
  }
});

// 找出未使用的 keys
const unusedKeys = Array.from(definedKeys).filter(key => !usedKeys.has(key));

console.log('='.repeat(70));
console.log('📋 檢查結果報告\n');

// 輸出問題報告
if (allIssues.length === 0) {
  console.log('✅ 沒有發現問題！\n');
} else {
  console.log(`⚠️  發現 ${allIssues.length} 個檔案有問題：\n`);
  
  allIssues.forEach(({ file, issues }) => {
    console.log(`📄 ${file}`);
    issues.forEach(({ line, type, text, code }) => {
      console.log(`   行 ${line}: ${type}`);
      console.log(`   ${text ? `   內容: "${text}"` : ''}`);
      console.log(`   ${code ? `   程式碼: ${code}${code.length >= 80 ? '...' : ''}` : ''}`);
    });
    console.log('');
  });
}

// 輸出未使用的 keys
if (unusedKeys.length > 0) {
  console.log('='.repeat(70));
  console.log(`📊 JSON 裡有定義但程式沒使用的 keys (${unusedKeys.length} 個)：\n`);
  
  // 分組顯示
  const grouped = {};
  unusedKeys.forEach(key => {
    const section = key.split('.')[0];
    if (!grouped[section]) {
      grouped[section] = [];
    }
    grouped[section].push(key);
  });
  
  Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([section, keys]) => {
      console.log(`   ${section} (${keys.length} 個):`);
      keys.slice(0, 10).forEach(key => {
        console.log(`     - ${key}`);
      });
      if (keys.length > 10) {
        console.log(`     ... 還有 ${keys.length - 10} 個`);
      }
      console.log('');
    });
} else {
  console.log('='.repeat(70));
  console.log('✅ 所有定義的 keys 都有在程式碼中使用\n');
}

console.log('='.repeat(70));
console.log('📊 統計：');
console.log(`   - 檢查檔案數: ${files.length}`);
console.log(`   - 發現問題檔案: ${allIssues.length}`);
console.log(`   - 使用的 keys: ${usedKeys.size}`);
console.log(`   - 定義的 keys: ${definedKeys.size}`);
console.log(`   - 未使用的 keys: ${unusedKeys.length}`);
console.log('='.repeat(70));

