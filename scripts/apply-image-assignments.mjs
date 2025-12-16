import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';

// 讀取配置
const configPath = join(process.cwd(), 'image-assignments.json');
if (!existsSync(configPath)) {
  console.error('❌ 找不到 image-assignments.json 配置文件');
  process.exit(1);
}

const config = JSON.parse(readFileSync(configPath, 'utf-8'));
const assignments = config.assignments || [];

if (assignments.length === 0) {
  console.log('ℹ️  沒有需要應用的圖片分配');
  process.exit(0);
}

console.log(`📋 找到 ${assignments.length} 個圖片分配\n`);

// 頁面文件映射
const pageFileMap = {
  'Index': 'src/pages/Index.tsx',
  'About': 'src/pages/About.tsx',
  'AIPinBot': 'src/pages/features/AIPinBot.tsx',
  'Analytics': 'src/pages/features/Analytics.tsx',
  'Branding': 'src/pages/features/Branding.tsx',
  'Chat': 'src/pages/features/Chat.tsx',
  'ChatWidget': 'src/pages/features/ChatWidget.tsx',
  'ChatroomManagement': 'src/pages/features/ChatroomManagement.tsx',
  'FAQPinBot': 'src/pages/features/FAQPinBot.tsx',
  'PinBoard': 'src/pages/features/PinBoard.tsx',
  'SubAccount': 'src/pages/features/SubAccount.tsx',
  'ForB2BCommercial': 'src/pages/industries/ForB2BCommercial.tsx',
  'ForEducation': 'src/pages/industries/ForEducation.tsx',
  'ForEvents': 'src/pages/industries/ForEvents.tsx',
  'ForHealthcare': 'src/pages/industries/ForHealthcare.tsx',
  'ForProfessionalServices': 'src/pages/industries/ForProfessionalServices.tsx',
  'ForRealEstate': 'src/pages/industries/ForRealEstate.tsx',
  'ForRetailEcommerce': 'src/pages/industries/ForRetailEcommerce.tsx',
  'ForServiceIndustries': 'src/pages/industries/ForServiceIndustries.tsx',
};

// 按頁面分組分配
const assignmentsByPage = {};
assignments.forEach(assignment => {
  if (!assignmentsByPage[assignment.page]) {
    assignmentsByPage[assignment.page] = [];
  }
  assignmentsByPage[assignment.page].push(assignment);
});

let totalApplied = 0;

// 處理每個頁面
for (const [page, pageAssignments] of Object.entries(assignmentsByPage)) {
  const filePath = pageFileMap[page];
  
  if (!filePath || !existsSync(join(process.cwd(), filePath))) {
    console.warn(`⚠️  找不到頁面文件: ${page} (${filePath})`);
    continue;
  }
  
  let content = readFileSync(join(process.cwd(), filePath), 'utf-8');
  let modified = false;
  
  // 檢查是否已導入 getAssetPath
  if (!content.includes("import { getAssetPath }")) {
    // 找到最後一個 import 語句
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
  
  // 為每個分配生成圖片代碼
  for (const assignment of pageAssignments) {
    const imagePath = `/lovable-uploads/${assignment.image}`;
    const altText = assignment.alt || assignment.image.replace('.png', '');
    const className = assignment.className || 'w-full h-auto';
    
    // 生成圖片標籤
    const imgTag = `<img \n              src={getAssetPath("${imagePath}")} \n              alt="${altText}" \n              className="${className}" \n              loading="lazy" \n            />`;
    
    // 根據 section 找到插入位置
    const sectionComment = `{/* ${assignment.section} */}`;
    const sectionPattern = new RegExp(`(\\{/\\*\\s*${assignment.section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\*\\/}[\\s\\S]*?)(?=\\{/\\*|</section>|</div>|$)`, 'i');
    
    if (content.includes(sectionComment)) {
      // 如果找到 section 註釋，在附近插入
      const sectionMatch = content.match(sectionPattern);
      if (sectionMatch) {
        // 檢查是否已經有圖片
        if (!sectionMatch[0].includes(`lovable-uploads/${assignment.image}`)) {
          // 在 section 內容中尋找合適的插入位置
          const insertPattern = new RegExp(`(\\{/\\*\\s*${assignment.section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\*\\/}[\\s\\S]*?)(<div[^>]*className[^>]*>\\s*)(?=<img|</div>)`, 'i');
          const insertMatch = content.match(insertPattern);
          
          if (insertMatch) {
            // 在 div 標籤後插入圖片
            const insertIndex = insertMatch.index + insertMatch[0].length;
            content = content.slice(0, insertIndex) + 
                      `\n            ${imgTag}\n          ` + 
                      content.slice(insertIndex);
            modified = true;
            totalApplied++;
            console.log(`  ✓ ${page} - ${assignment.section}: ${assignment.image}`);
          }
        } else {
          console.log(`  ⊙ ${page} - ${assignment.section}: ${assignment.image} (已存在)`);
        }
      }
    } else {
      // 如果找不到 section，在文件末尾的 </main> 之前插入
      console.warn(`  ⚠️  找不到 section "${assignment.section}" 在 ${page}，將在文件末尾插入`);
      const mainEndIndex = content.lastIndexOf('</main>');
      if (mainEndIndex > 0) {
        const sectionDiv = `\n        {/* ${assignment.section} */}\n        <section className="py-16 px-4">\n          <div className="container mx-auto">\n            ${imgTag}\n          </div>\n        </section>\n`;
        content = content.slice(0, mainEndIndex) + sectionDiv + content.slice(mainEndIndex);
        modified = true;
        totalApplied++;
        console.log(`  ✓ ${page} - ${assignment.section}: ${assignment.image} (新增 section)`);
      }
    }
  }
  
  if (modified) {
    writeFileSync(join(process.cwd(), filePath), content, 'utf-8');
    console.log(`\n✅ 已更新: ${filePath}\n`);
  }
}

console.log(`\n🎉 完成！共應用了 ${totalApplied} 個圖片分配`);
console.log(`\n💡 提示: 請檢查生成的代碼，確保圖片位置正確。`);

