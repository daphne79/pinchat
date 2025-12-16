import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';

// 獲取所有需要處理的文件
const featureFiles = glob.sync('src/pages/features/*.tsx', { cwd: process.cwd() });
const industryFiles = glob.sync('src/pages/industries/*.tsx', { cwd: process.cwd() });
const solutionFiles = glob.sync('src/pages/solutions/*.tsx', { cwd: process.cwd() });

const allFiles = [...featureFiles, ...industryFiles, ...solutionFiles];

let totalModified = 0;

for (const file of allFiles) {
  const filePath = join(process.cwd(), file);
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  let fileChanges = 0;

  // 1. 移除圖片標籤中的 rounded 和 shadow 類（各種組合）
  const patterns = [
    // 組合模式
    { pattern: /\s+rounded-lg\s+shadow-lg/g, replacement: '' },
    { pattern: /\s+rounded-2xl\s+shadow-xl/g, replacement: '' },
    { pattern: /\s+shadow-lg\s+rounded-lg/g, replacement: '' },
    { pattern: /\s+shadow-xl\s+rounded-2xl/g, replacement: '' },
    // 單獨模式（在 className 屬性中）
    { pattern: /(className="[^"]*)\s+rounded-2xl(\s+[^"]*")/g, replacement: '$1$2' },
    { pattern: /(className="[^"]*)\s+rounded-lg(\s+[^"]*")/g, replacement: '$1$2' },
    { pattern: /(className="[^"]*)\s+shadow-xl(\s+[^"]*")/g, replacement: '$1$2' },
    { pattern: /(className="[^"]*)\s+shadow-lg(\s+[^"]*")/g, replacement: '$1$2' },
  ];

  for (const { pattern, replacement } of patterns) {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      fileChanges++;
    }
  }

  // 2. 移除圖片容器 div 中的 rounded-lg（只針對包含圖片的容器）
  // 匹配模式：<div ... className="... rounded-lg overflow-hidden"> ... <img
  content = content.replace(
    /(<div[^>]*className="[^"]*)\s+rounded-lg(\s+overflow-hidden[^"]*">[^<]*<img)/g,
    '$1 overflow-hidden$2'
  );
  content = content.replace(
    /(<div[^>]*className="[^"]*overflow-hidden)\s+rounded-lg(\s+[^"]*">[^<]*<img)/g,
    '$1$2'
  );
  
  // 匹配模式：<div ... className="... rounded-lg ..."> ... <img（沒有 overflow-hidden）
  content = content.replace(
    /(<div[^>]*className="[^"]*)\s+rounded-lg(\s+[^"]*">\s*<img)/g,
    (match, p1, p2) => {
      // 只替換包含圖片的 div
      if (match.includes('<img')) {
        return p1 + p2;
      }
      return match;
    }
  );

  // 3. 清理多餘的空格
  content = content.replace(/className="([^"]*)\s{2,}([^"]*)"/g, 'className="$1 $2"');
  content = content.replace(/className="\s+([^"]*)"/g, 'className="$1"');
  content = content.replace(/className="([^"]*)\s+"/g, 'className="$1"');

  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ ${file} (${fileChanges > 0 ? fileChanges + ' 處' : '已處理'})`);
    totalModified++;
  }
}

console.log(`\n✅ 完成！共修改了 ${totalModified} 個文件`);
