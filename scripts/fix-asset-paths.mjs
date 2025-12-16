import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { join } from 'path';

const files = glob.sync('src/**/*.{tsx,ts}', { cwd: process.cwd() });

let totalReplacements = 0;

for (const file of files) {
  const filePath = join(process.cwd(), file);
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;
  let fileReplacements = 0;

  // Check if file uses lovable-uploads paths
  if (content.includes('/lovable-uploads/')) {
    // Add import if not present
    if (!content.includes("import { getAssetPath }")) {
      // Find the last import statement
      const importMatch = content.match(/(import .+ from ['"].+['"];?\n)+/);
      if (importMatch) {
        const lastImport = importMatch[0].split('\n').filter(Boolean).pop();
        const insertIndex = content.indexOf(lastImport) + lastImport.length;
        content = content.slice(0, insertIndex) + 
                  "\nimport { getAssetPath } from '@/lib/assetPath';" + 
                  content.slice(insertIndex);
        modified = true;
      }
    }

    // Replace all src="/lovable-uploads/..." with src={getAssetPath("/lovable-uploads/...")}
    const regex = /src="(\/lovable-uploads\/[^"]+)"/g;
    const matches = [...content.matchAll(regex)];
    
    for (const match of matches) {
      const fullPath = match[1];
      const replacement = `src={getAssetPath("${fullPath}")}`;
      content = content.replace(match[0], replacement);
      fileReplacements++;
      totalReplacements++;
      modified = true;
    }
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ ${file} (${fileReplacements} replacements)`);
  }
}

console.log(`\n✅ Total: ${totalReplacements} replacements across ${files.length} files`);

