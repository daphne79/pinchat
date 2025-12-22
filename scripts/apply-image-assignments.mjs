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
  'AICustomerServiceBot': 'src/pages/solutions/AICustomerServiceBot.tsx',
  'ChatroomTeamManagement': 'src/pages/solutions/ChatroomTeamManagement.tsx',
  'CustomerFeedbackAnalytics': 'src/pages/solutions/CustomerFeedbackAnalytics.tsx',
  'InAppCustomerService': 'src/pages/solutions/InAppCustomerService.tsx',
  'LeadCaptureSurveys': 'src/pages/solutions/LeadCaptureSurveys.tsx',
  'MultichannelMessagingHub': 'src/pages/solutions/MultichannelMessagingHub.tsx',
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
        const afterHeroComment = content.slice(heroCommentMatch.index);
        
        // 優先查找 Hero Image 註釋（適用於 InAppCustomerService 等頁面）
        const heroImageCommentPattern = /\{\/\*\s*Hero\s+Image\s*\*\/}/i;
        const heroImageCommentMatch = afterHeroComment.match(heroImageCommentPattern);
        
        if (heroImageCommentMatch) {
          // 在 Hero Image 註釋後查找圖片（支持跨多行的圖片標籤）
          const afterHeroImageComment = afterHeroComment.slice(heroImageCommentMatch.index);
          // 匹配跨多行的圖片標籤，從 <img 開始到 /> 或 </img> 結束
          const imgMatch = afterHeroImageComment.match(/<img[\s\S]*?\/>/i) || 
                          afterHeroImageComment.match(/<img[\s\S]*?<\/img>/i);
          
          if (imgMatch) {
            // 替換現有圖片
            insertIndex = heroCommentMatch.index + heroImageCommentMatch.index + imgMatch.index;
            content = content.slice(0, insertIndex) + 
                     imgTag.replace(/\n\s+/g, '\n              ') + 
                     content.slice(insertIndex + imgMatch[0].length);
            modified = true;
            totalApplied++;
            appliedAssignments.push(assignment);
            console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片 - Hero Image)`);
            foundSection = true;
          }
        }
        
        // 如果沒有找到 Hero Image 註釋，嘗試查找包含 min-h 的 div
        if (!foundSection) {
          // 回退到原來的邏輯：查找包含 min-h 的 div（適用於其他頁面）
          const heroImageDivPattern = /<div[^>]*min-h[^>]*>[\s\S]*?(<img[^>]*>|<\/div>)/i;
          const heroImageMatch = afterHeroComment.match(heroImageDivPattern);
          
          if (heroImageMatch) {
            if (heroImageMatch[0].includes('<img')) {
              // 替換現有圖片（支持跨多行的圖片標籤）
              const imgMatch = afterHeroComment.match(/<img[\s\S]*?\/>/i) || 
                              afterHeroComment.match(/<img[\s\S]*?<\/img>/i);
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
      
      // 如果還是沒找到，查找文件末尾的簡單 hero 註釋（如 {/* hero */}）
      if (!foundSection) {
        const simpleHeroCommentPattern = /\{\/\*\s*hero\s*\*\/}/i;
        const simpleHeroCommentMatch = content.match(simpleHeroCommentPattern);
        
        if (simpleHeroCommentMatch) {
          // 在註釋後查找圖片（支持跨多行的圖片標籤）
          const afterSimpleHeroComment = content.slice(simpleHeroCommentMatch.index + simpleHeroCommentMatch[0].length);
          const imgMatch = afterSimpleHeroComment.match(/<img[\s\S]*?\/>/i) || 
                          afterSimpleHeroComment.match(/<img[\s\S]*?<\/img>/i);
          
          if (imgMatch) {
            // 替換現有圖片
            insertIndex = simpleHeroCommentMatch.index + simpleHeroCommentMatch[0].length + imgMatch.index;
            content = content.slice(0, insertIndex) + 
                     imgTag.replace(/\n\s+/g, '\n              ') + 
                     content.slice(insertIndex + imgMatch[0].length);
            modified = true;
            totalApplied++;
            appliedAssignments.push(assignment);
            console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片 - 簡單 hero 註釋)`);
            foundSection = true;
          }
        }
      }
    } 
    // 對於 feature1-4 (Features 頁面) 或 feature1-2 (Solutions/Industries 頁面)
    else if (normalizedSection.startsWith('feature')) {
      const featureNum = normalizedSection.replace('feature', '').trim();
      
      if (/^[1-4]$/.test(featureNum)) {
        // 優先查找簡單的 feature 註釋（如 {/* feature1 */}），適用於 InAppCustomerService 等頁面
        const simpleFeatureCommentPattern = new RegExp(`\\{/\\*\\s*feature${featureNum}\\s*\\*\\/}`, 'i');
        const simpleFeatureCommentMatch = content.match(simpleFeatureCommentPattern);
        
        if (simpleFeatureCommentMatch) {
          // 在註釋後查找圖片（支持跨多行的圖片標籤）
          const afterSimpleFeatureComment = content.slice(simpleFeatureCommentMatch.index + simpleFeatureCommentMatch[0].length);
          const imgMatch = afterSimpleFeatureComment.match(/<img[\s\S]*?\/>/i) || 
                          afterSimpleFeatureComment.match(/<img[\s\S]*?<\/img>/i);
          
          if (imgMatch) {
            // 替換現有圖片
            insertIndex = simpleFeatureCommentMatch.index + simpleFeatureCommentMatch[0].length + imgMatch.index;
            content = content.slice(0, insertIndex) + 
                     imgTag.replace(/\n\s+/g, '\n              ') + 
                     content.slice(insertIndex + imgMatch[0].length);
            modified = true;
            totalApplied++;
            appliedAssignments.push(assignment);
            console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片 - 簡單 feature 註釋)`);
            foundSection = true;
          }
        }
        
        // 如果沒有找到簡單註釋，查找 Section N 註釋（適用於 InAppCustomerService 等頁面）
        // feature1 對應 Section 2, feature2 對應 Section 3
        if (!foundSection && (featureNum === '1' || featureNum === '2')) {
          const sectionNum = featureNum === '1' ? '2' : '3';
          const sectionCommentPattern = new RegExp(`\\{/\\*\\s*Section\\s+${sectionNum}[^}]*\\*\\/}`, 'i');
          const sectionCommentMatch = content.match(sectionCommentPattern);
          
          if (sectionCommentMatch) {
            // 在 Section 註釋後查找圖片（在該 section 的 grid div 中）
            const afterSectionComment = content.slice(sectionCommentMatch.index + sectionCommentMatch[0].length);
            
            // 查找該 section 中的圖片（通常在 grid div 中的 order div 內）
            // 先查找包含圖片的 div（order-1, order-2, 或 rounded-lg）
            const imgInSectionPattern = /<div[^>]*(?:order-[12]|rounded-lg|overflow-hidden)[^>]*>[\s\S]*?<img[^>]*>/i;
            const imgInSectionMatch = afterSectionComment.match(imgInSectionPattern);
            
            if (imgInSectionMatch) {
              // 找到圖片標籤
              const imgMatch = imgInSectionMatch[0].match(/<img[^>]*>/i);
              if (imgMatch) {
                insertIndex = sectionCommentMatch.index + sectionCommentMatch[0].length + 
                             imgInSectionMatch.index + imgMatch.index;
                content = content.slice(0, insertIndex) + 
                         imgTag.replace(/\n\s+/g, '\n                ') + 
                         content.slice(insertIndex + imgMatch[0].length);
                modified = true;
                totalApplied++;
                appliedAssignments.push(assignment);
                console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片 - Section ${sectionNum})`);
                foundSection = true;
              }
            }
          }
        }
        
        // 如果沒有找到簡單註釋，查找 Section N 註釋（適用於 InAppCustomerService 等頁面）
        // feature1 對應 Section 2, feature2 對應 Section 3
        if (!foundSection && (featureNum === '1' || featureNum === '2')) {
          const sectionNum = featureNum === '1' ? '2' : '3';
          const sectionCommentPattern = new RegExp(`\\{/\\*\\s*Section\\s+${sectionNum}[^}]*\\*\\/}`, 'i');
          const sectionCommentMatch = content.match(sectionCommentPattern);
          
          if (sectionCommentMatch) {
            // 在 Section 註釋後查找圖片（在該 section 的 grid div 中）
            const afterSectionComment = content.slice(sectionCommentMatch.index + sectionCommentMatch[0].length);
            
            // 查找該 section 中的圖片（通常在 grid div 中的 order div 或 rounded-lg div 內）
            // 先查找包含圖片的 div（order-1, order-2, rounded-lg, 或 overflow-hidden）
            // 使用更寬鬆的匹配，允許多行和各種屬性組合
            const imgInSectionPattern = /<div[^>]*(?:order-[12]|rounded-lg|overflow-hidden)[^>]*>[\s\S]*?<img[^>]*>/i;
            const imgInSectionMatch = afterSectionComment.match(imgInSectionPattern);
            
            if (imgInSectionMatch) {
              // 找到圖片標籤（支持跨多行的圖片標籤）
              const imgMatch = imgInSectionMatch[0].match(/<img[\s\S]*?\/>/i) || 
                              imgInSectionMatch[0].match(/<img[\s\S]*?<\/img>/i);
              if (imgMatch) {
                insertIndex = sectionCommentMatch.index + sectionCommentMatch[0].length + 
                             imgInSectionMatch.index + imgMatch.index;
                content = content.slice(0, insertIndex) + 
                         imgTag.replace(/\n\s+/g, '\n                ') + 
                         content.slice(insertIndex + imgMatch[0].length);
                modified = true;
                totalApplied++;
                appliedAssignments.push(assignment);
                console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片 - Section ${sectionNum})`);
                foundSection = true;
              }
            } else {
              // 如果沒有找到包含特定 class 的 div，直接查找 section 內的第一個圖片
              // 限制搜索範圍在該 section 內（到下一個 section 或 </section> 為止）
              const sectionEndMatch = afterSectionComment.match(/<\/section>/i);
              const searchRange = sectionEndMatch ? 
                afterSectionComment.slice(0, sectionEndMatch.index) : 
                afterSectionComment;
              
              const directImgMatch = searchRange.match(/<img[\s\S]*?\/>/i) || 
                                    searchRange.match(/<img[\s\S]*?<\/img>/i);
              if (directImgMatch) {
                insertIndex = sectionCommentMatch.index + sectionCommentMatch[0].length + directImgMatch.index;
                content = content.slice(0, insertIndex) + 
                         imgTag.replace(/\n\s+/g, '\n                ') + 
                         content.slice(insertIndex + directImgMatch[0].length);
                modified = true;
                totalApplied++;
                appliedAssignments.push(assignment);
                console.log(`  ✓ ${page} - ${assignment.section}: ${imageFileName} (替換現有圖片 - Section ${sectionNum} - 直接匹配)`);
                foundSection = true;
              }
            }
          }
        }
        
        // 如果還是沒有找到，查找 "Feature N:" 註釋（不區分大小寫，允許冒號後的文字）
        if (!foundSection) {
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
                // 替換現有圖片（支持跨多行的圖片標籤）
                const existingImg = imgDivWithImgMatch[0].match(/<img[\s\S]*?\/>/i) || 
                                   imgDivWithImgMatch[0].match(/<img[\s\S]*?<\/img>/i);
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

