#!/usr/bin/env node
/**
 * 掃描專案中硬寫的文案並識別需要轉換為 i18n 的內容
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const ignoreDirs = ['node_modules', 'i18n', 'build', 'dist', '.git', '.next', 'ui'];
const ignorePatterns = [/\.spec\./, /\.test\./, /\.stories\./];

function shouldIgnore(filePath) {
  const parts = filePath.split(path.sep);
  if (parts.some(p => ignoreDirs.includes(p))) return true;
  return ignorePatterns.some(pattern => pattern.test(filePath));
}

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (shouldIgnore(filePath)) return;
    
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

function findHardcodedStrings(content, filePath) {
  const results = [];
  const lines = content.split('\n');
  
  // 檢測中文字符
  const chineseCharRegex = /[\u4e00-\u9fff]/;
  
  lines.forEach((line, index) => {
    // 跳過註解和空行
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('//') || trimmedLine.startsWith('*')) return;
    
    // 跳過 import/export
    if (trimmedLine.startsWith('import ') || trimmedLine.startsWith('export ')) return;
    
    // 跳過已有的 i18n
    if (line.match(/t\(['"`]/) || line.includes('useTranslation')) return;
    if (line.match(/\$t\(['"`]/)) return;
    
    // 跳過類型定義、interface、type
    if (trimmedLine.startsWith('type ') || trimmedLine.startsWith('interface ')) return;
    if (trimmedLine.startsWith('const ') && line.includes(':')) return;
    
    // 找出 JSX 文字內容（>文字<），排除 className、style 等
    const jsxTextRegex = />\s*([^<>{}\n]+)\s*</g;
    let match;
    while ((match = jsxTextRegex.exec(line)) !== null) {
      let text = match[1].trim();
      
      // 過濾條件
      if (!text) continue;
      if (text.includes('{') || text.includes('$')) continue; // 變數插值
      if (text.match(/^(className|id|href|src|alt|key|type|value|name|role|aria-)/)) continue; // 屬性名
      if (text.match(/^\//)) continue; // 路徑
      if (text.match(/^http/)) continue; // URL
      if (text.match(/^[A-Z][a-zA-Z]*$/)) continue; // 大寫開頭的單詞（可能是組件名）
      if (text.match(/^['"]/)) continue; // 已經是字串（會在下面處理）
      
      // 必須包含中文或至少 2 個單詞的英文
      if (!chineseCharRegex.test(text) && !text.match(/\b[a-zA-Z]{3,}\b.*\b[a-zA-Z]{3,}\b/)) continue;
      
      results.push({
        file: filePath,
        line: index + 1,
        text: text,
        fullLine: line.trim(),
        type: 'jsx'
      });
    }
    
    // 找出字串中的中文（只在 JSX/TSX 上下文中）
    // 檢查是否在 JSX 屬性中，且是 title、label、placeholder、children 等
    const stringInJsxRegex = /(title|label|placeholder|text|message|description|name|children|content|heading|subtitle|cta|button|link|alt|aria-label|aria-placeholder)\s*[:=]\s*['"]([^'"`]+)['"]/g;
    while ((match = stringInJsxRegex.exec(line)) !== null) {
      const text = match[2];
      
      // 過濾條件
      if (text.includes('{') || text.includes('${')) continue;
      if (text.startsWith('/') || text.startsWith('http') || text.startsWith('@') || text.startsWith('#')) continue;
      if (text.match(/^[a-z]+(\.[a-z]+)+$/)) continue; // 像 key 的格式
      
      // 必須包含中文或至少 3 個字母的英文單詞
      if (!chineseCharRegex.test(text) && !text.match(/\b[a-zA-Z]{3,}\b/)) continue;
      
      results.push({
        file: filePath,
        line: index + 1,
        text: text,
        fullLine: line.trim(),
        type: 'jsx-prop',
        prop: match[1]
      });
    }
    
    // 找出字串字面量中的中文（更嚴格的條件）
    const stringLiteralRegex = /['"]([^'"`]{2,})['"]/g;
    while ((match = stringLiteralRegex.exec(line)) !== null) {
      const text = match[1];
      const beforeText = line.substring(0, match.index);
      
      // 跳過 import/require 路徑
      if (beforeText.match(/from\s+['"]|require\(['"]|import\(['"]/)) continue;
      // 跳過變數名、函數名
      if (beforeText.match(/const\s+\w+\s*=\s*['"]|let\s+\w+\s*=\s*['"]|var\s+\w+\s*=\s*['"]/)) continue;
      // 跳過已有 t( 的
      if (beforeText.includes('t(') || beforeText.includes('$t(')) continue;
      
      // 過濾明顯是程式碼的
      if (text.includes('{') || text.includes('${') || text.startsWith('/') || text.startsWith('http')) continue;
      if (text.match(/^[a-z]+(\.[a-z]+)+$/)) continue; // key 格式
      
      // 必須包含中文或至少 2 個單詞的英文
      if (!chineseCharRegex.test(text) && !text.match(/\b[a-zA-Z]{3,}\b.*\b[a-zA-Z]{3,}\b/)) continue;
      
      results.push({
        file: filePath,
        line: index + 1,
        text: text,
        fullLine: line.trim(),
        type: 'string'
      });
    }
  });
  
  return results;
}

// 主程式
const srcDir = path.join(__dirname, '../src');
const allFiles = getAllFiles(srcDir).filter(f => f.includes('pages') || f.includes('components/Footer') || f.includes('components/FeatureNavigation'));

console.log(`📂 掃描到 ${allFiles.length} 個檔案\n`);

let allResults = [];
const fileResults = {};

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const results = findHardcodedStrings(content, file);
    if (results.length > 0) {
      fileResults[file] = results;
      allResults.push(...results);
    }
  } catch (error) {
    console.error(`❌ 讀取 ${file} 失敗:`, error.message);
  }
});

// 輸出報告
console.log(`\n📊 掃描結果：`);
console.log(`總共找到 ${allResults.length} 個硬寫文案\n`);

Object.entries(fileResults).forEach(([file, results]) => {
  const relativePath = path.relative(srcDir, file);
  console.log(`📄 ${relativePath}: ${results.length} 個`);
  results.slice(0, 5).forEach(r => {
    const textPreview = r.text.length > 50 ? r.text.substring(0, 50) + '...' : r.text;
    console.log(`  行 ${r.line} (${r.type}): "${textPreview}"`);
  });
  if (results.length > 5) {
    console.log(`  ... 還有 ${results.length - 5} 個`);
  }
  console.log('');
});

// 儲存結果到 JSON
const reportFile = path.join(__dirname, '../hardcoded-text-report.json');
fs.writeFileSync(reportFile, JSON.stringify({
  total: allResults.length,
  files: Object.keys(fileResults).length,
  results: fileResults,
  timestamp: new Date().toISOString()
}, null, 2));

console.log(`\n💾 詳細報告已儲存至: ${path.relative(process.cwd(), reportFile)}`);
