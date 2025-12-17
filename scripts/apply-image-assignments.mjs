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
const allAppliedAssignments = []; // 記錄所有已應用的配置

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
  const appliedAssignments = []; // 記錄已成功應用的配置
  
  for (const assignment of pageAssignments) {
    const imagePath = `/lovable-uploads/${assignment.image}`;
    const imageFileName = assignment.image;
    
    const altText = assignment.alt || assignment.image.replace('.png', '');
    const className = assignment.className || 'w-full h-auto';
    
    // 生成圖片標籤
    const imgTag = `<img \n              src={getAssetPath("${imagePath}")} \n              alt="${altText}" \n              className="${className}" \n              loading="lazy" \n            />`;
    
    // 改進的 section 查找邏輯
    let insertIndex = -1;
    let foundSection = false;
    
    // 標準化 section 名稱
    const normalizedSection = assignment.section.toLowerCase().trim();
    
    // 對於 hero section
    if (normalizedSection === 'hero') {
      // 查找 Hero Section 註釋
      const heroCommentPattern = /\{\/\*\s*Hero\s+Section\s*\*\/}/i;
      const heroCommentMatch = content.match(heroCommentPattern);
      
      if (heroCommentMatch) {
        // 在 Hero Section 中查找圖片區域（min-h div）
        const afterHeroComment = content.slice(heroCommentMatch.index);
        const heroImageDivPattern = /<div[^>]*min-h[^>]*>[\s\S]*?(<img[^>]*>|<\/div>)/i;
        const heroImageMatch = afterHeroComment.match(heroImageDivPattern);
        
        if (heroImageMatch) {
          if (heroImageMatch[0].includes('<img')) {
            // 替換現有圖片
            const imgMatch = afterHeroComment.match(/<img[^>]*>/i);
            if (imgMatch) {
              insertIndex = heroCommentMatch.index + imgMatch.index;
              content = content.slice(0, insertIndex) + 
                       imgTag.replace(/\n\s+/g, '\n                ') + 
                       content.slice(insertIndex + imgMatch[0].length);
              modified = true;
              totalApplied++;
              appliedAssignments.push(assignment);
              console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片)`);
              foundSection = true;
            }
          } else {
            // 在 div 內插入
            const divEnd = heroImageMatch[0].indexOf('</div>');
            insertIndex = heroCommentMatch.index + heroImageMatch.index + heroImageMatch[1].length;
            content = content.slice(0, insertIndex) + 
                     `\n                ${imgTag}\n              ` + 
                     content.slice(insertIndex);
            modified = true;
            totalApplied++;
            appliedAssignments.push(assignment);
            console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName}`);
            foundSection = true;
          }
        }
      }
    } 
    // 對於 feature1-4
    else if (normalizedSection.startsWith('feature')) {
      const featureNum = normalizedSection.replace('feature', '').trim();
      
      if (/^[1-4]$/.test(featureNum)) {
        // 查找 "Feature N:" 註釋（不區分大小寫，允許冒號後的文字）
        const featureCommentPattern = new RegExp(`\\{/\\*\\s*Feature\\s+${featureNum}[^}]*\\*\\/}`, 'i');
        const featureCommentMatch = content.match(featureCommentPattern);
        
        if (featureCommentMatch) {
          // 在註釋後查找包含圖片的 div（通常是 order-1 或 order-2）
          const afterFeatureComment = content.slice(featureCommentMatch.index + featureCommentMatch[0].length);
          
          // 查找該 feature 區塊中的圖片 div
          // Feature 區塊通常是：註釋 -> grid div -> 兩個 order div，圖片在其中一個
          // 需要匹配完整的 grid div，包括所有嵌套的 div
          let featureBlockMatch = null;
          const gridDivStart = afterFeatureComment.match(/<div[^>]*grid[^>]*>/i);
          if (gridDivStart) {
            // 從 grid div 開始位置計算，找到對應的結束標籤
            let depth = 0;
            let pos = gridDivStart.index;
            let found = false;
            
            while (pos < afterFeatureComment.length && !found) {
              const nextOpen = afterFeatureComment.indexOf('<div', pos);
              const nextClose = afterFeatureComment.indexOf('</div>', pos);
              
              if (nextClose === -1) break;
              
              if (nextOpen !== -1 && nextOpen < nextClose) {
                // 找到開始標籤
                depth++;
                pos = nextOpen + 4;
              } else {
                // 找到結束標籤
                depth--;
                if (depth === 0) {
                  // 找到對應的結束標籤
                  const blockEnd = nextClose + 6;
                  featureBlockMatch = {
                    0: afterFeatureComment.slice(gridDivStart.index, blockEnd),
                    index: gridDivStart.index
                  };
                  found = true;
                } else {
                  pos = nextClose + 6;
                }
              }
            }
          }
          
          if (featureBlockMatch) {
            // 在 feature block 中查找圖片 div（order-1 或 order-2）
            // 優先查找包含圖片的 div，如果沒有則查找空的 div
            const imgDivWithImgPattern = /<div[^>]*order-[12][^>]*>[\s\S]*?<img[^>]*>/i;
            const imgDivWithImgMatch = featureBlockMatch[0].match(imgDivWithImgPattern);
            
            if (imgDivWithImgMatch) {
              // 替換現有圖片
              const existingImg = imgDivWithImgMatch[0].match(/<img[^>]*>/i);
              if (existingImg) {
                insertIndex = featureCommentMatch.index + featureCommentMatch[0].length + 
                             featureBlockMatch.index + imgDivWithImgMatch.index + existingImg.index;
                content = content.slice(0, insertIndex) + 
                         imgTag.replace(/\n\s+/g, '\n                ') + 
                         content.slice(insertIndex + existingImg[0].length);
                modified = true;
                totalApplied++;
                appliedAssignments.push(assignment);
                console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片)`);
                foundSection = true;
              }
            } else {
              // 查找空的圖片 div（order-1 或 order-2），必須不包含文字內容標籤
              // 文字內容 div 通常包含：<div（icon）、<h3、<p、<ul 等標籤
              // 圖片 div 通常完全為空或只包含空白
              const allOrderDivs = featureBlockMatch[0].match(/<div[^>]*order-[12][^>]*>[\s\S]*?<\/div>/gi);
              
              if (allOrderDivs) {
                // 查找不包含文字內容標籤的 div（即空的圖片 div）
                for (const div of allOrderDivs) {
                  // 提取 div 的內容（去除開始和結束標籤）
                  const divContent = div.replace(/<div[^>]*>/, '').replace(/<\/div>$/, '').trim();
                  
                  // 檢查是否包含文字內容標籤（排除 <img>）
                  const hasTextContent = /<(?!img\s)[a-z]+[\s>]/i.test(divContent);
                  
                  // 如果沒有文字內容標籤，這就是空的圖片 div
                  if (!hasTextContent) {
                    const imgDivMatch = div.match(/<div[^>]*order-[12][^>]*>/i);
                    if (imgDivMatch) {
                      // 計算在原始內容中的位置
                      const divIndex = featureBlockMatch[0].indexOf(div);
                      insertIndex = featureCommentMatch.index + featureCommentMatch[0].length + 
                                   featureBlockMatch.index + divIndex + imgDivMatch.index + imgDivMatch[0].length;
                      content = content.slice(0, insertIndex) + 
                               `\n                ${imgTag}\n              ` + 
                               content.slice(insertIndex);
                      modified = true;
                      totalApplied++;
                      appliedAssignments.push(assignment);
                      console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName}`);
                      foundSection = true;
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
    // 如果找不到 section，在文件末尾插入
    if (!foundSection) {
      console.warn(`  ⚠️  找不到 section "${assignment.section}" 在 ${page}，將在文件末尾插入`);
      const mainEndIndex = content.lastIndexOf('</main>');
      if (mainEndIndex > 0) {
        const sectionDiv = `\n        {/* ${assignment.section} */}\n        <section className="py-16 px-4">\n          <div className="container mx-auto">\n            ${imgTag}\n          </div>\n        </section>\n`;
        content = content.slice(0, mainEndIndex) + sectionDiv + content.slice(mainEndIndex);
        modified = true;
        totalApplied++;
        appliedAssignments.push(assignment);
        console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (新增 section)`);
      }
    }
  }
  
  // 記錄已應用的配置，用於後續清理
  if (modified) {
    writeFileSync(join(process.cwd(), filePath), content, 'utf-8');
    console.log(`\n✅ 已更新: ${filePath}\n`);
  }
  
  // 將已應用的配置添加到總列表
  allAppliedAssignments.push(...appliedAssignments);
}

console.log(`\n🎉 完成！共應用了 ${totalApplied} 個圖片分配`);

// 從配置中移除已應用的配置
if (allAppliedAssignments.length > 0) {
  const remainingAssignments = assignments.filter(assignment => {
    return !allAppliedAssignments.some(applied => 
      applied.image === assignment.image && 
      applied.page === assignment.page && 
      applied.section === assignment.section
    );
  });
  
  if (remainingAssignments.length < assignments.length) {
    const removedCount = assignments.length - remainingAssignments.length;
    config.assignments = remainingAssignments;
    writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
    console.log(`\n🧹 已從配置中移除 ${removedCount} 個已應用的圖片分配`);
    console.log(`📋 剩餘 ${remainingAssignments.length} 個待應用的配置`);
  }
}

console.log(`\n💡 提示: 請檢查生成的代碼，確保圖片位置正確。`);

