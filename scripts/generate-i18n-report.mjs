#!/usr/bin/env node
/**
 * 生成格式化的 i18n 檢查報告
 */

import { execSync } from 'child_process';

console.log('📋 i18n 使用檢查報告\n');
console.log('='.repeat(70));
console.log('檢查規則：');
console.log('  1. 找出硬寫文字（中文或英文）');
console.log('  2. 找出錯誤或無效的 i18n 語法');
console.log('  3. 比對 en.json 的 key 使用情況');
console.log('='.repeat(70));
console.log('');

try {
  const output = execSync('node scripts/check-i18n-usage.mjs', { encoding: 'utf-8' });
  console.log(output);
} catch (error) {
  console.error('執行檢查時發生錯誤:', error.message);
}

