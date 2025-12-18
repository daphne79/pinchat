import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';

// 獲取所有圖片文件
const imageDir = join(process.cwd(), 'public/lovable-uploads');
const images = readdirSync(imageDir).filter(f => f.endsWith('.png')).sort();

console.log(`找到 ${images.length} 張圖片\n`);

// 搜索代碼中所有使用圖片的地方
const codeFiles = glob.sync('src/**/*.{tsx,ts}', { cwd: process.cwd() });
const usedImages = new Set();

for (const file of codeFiles) {
  const content = readFileSync(join(process.cwd(), file), 'utf-8');
  // 查找所有 lovable-uploads 引用
  const matches = content.matchAll(/lovable-uploads\/([^"'\s)]+\.png)/g);
  for (const match of matches) {
    usedImages.add(match[1]);
  }
}

// 定義默認的頁面配置（包含所有頁面）
const defaultPageSections = {
  "Index": {
    "hero": "首頁 Hero 區塊",
    "valueBlock1": "核心價值 1 - 一鍵連接",
    "valueBlock2": "核心價值 2 - 跨平台整合",
    "valueBlock3": "核心價值 3 - AI 客服",
    "valueBlock4": "核心價值 4 - 數據管理"
  },
  "About": {
    "hero": "關於我們 Hero 區塊"
  },
  "AIPinBot": {
    "hero": "AI PinBot Hero 區塊",
    "feature1": "功能 1 - 統一知識來源",
    "feature2": "功能 2 - 智能 FAQ",
    "feature3": "功能 3 - 多語言支持",
    "feature4": "功能 4 - 實時學習"
  },
  "Analytics": {
    "hero": "分析頁面 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "Branding": {
    "hero": "品牌頁面 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "Chat": {
    "hero": "聊天頁面 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "ChatWidget": {
    "hero": "聊天小工具 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "ChatroomManagement": {
    "hero": "聊天室管理 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "FAQPinBot": {
    "hero": "FAQ PinBot Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "PinBoard": {
    "hero": "PinBoard Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "SubAccount": {
    "hero": "子帳號 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2",
    "feature3": "功能 3",
    "feature4": "功能 4"
  },
  "AICustomerServiceBot": {
    "hero": "AI 客服機器人 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ChatroomTeamManagement": {
    "hero": "聊天室團隊管理 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "CustomerFeedbackAnalytics": {
    "hero": "客戶反饋分析 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "InAppCustomerService": {
    "hero": "應用內客服 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "LeadCaptureSurveys": {
    "hero": "潛在客戶捕捉問卷 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "MultichannelMessagingHub": {
    "hero": "多渠道訊息中心 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForB2BCommercial": {
    "hero": "B2B 商業 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForEducation": {
    "hero": "教育 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForEvents": {
    "hero": "活動 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForHealthcare": {
    "hero": "醫療 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForProfessionalServices": {
    "hero": "專業服務 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForRealEstate": {
    "hero": "房地產 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForRetailEcommerce": {
    "hero": "零售電商 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  },
  "ForServiceIndustries": {
    "hero": "服務業 Hero 區塊",
    "feature1": "功能 1",
    "feature2": "功能 2"
  }
};

// 讀取現有的配置
const configPath = join(process.cwd(), 'image-assignments.json');
let assignments = [];
let pageSections = { ...defaultPageSections }; // 從默認配置開始

if (existsSync(configPath)) {
  const config = JSON.parse(readFileSync(configPath, 'utf-8'));
  // 過濾掉不存在的圖片配置
  assignments = (config.assignments || []).filter(assignment => {
    const imagePath = join(imageDir, assignment.image);
    return existsSync(imagePath);
  });
  
  // 合併配置：使用配置文件中的 pageSections，但保留默認配置中沒有的頁面
  if (config.pageSections) {
    pageSections = { ...defaultPageSections, ...config.pageSections };
  }
  
  // 如果有被過濾掉的配置，提示用戶
  const removedCount = (config.assignments || []).length - assignments.length;
  if (removedCount > 0) {
    console.log(`⚠️  已移除 ${removedCount} 個不存在的圖片配置`);
  }
}

// 創建圖片到分配的映射
// 只包含尚未應用到代碼的分配（已使用的圖片不顯示「已指定」）
const imageAssignments = {};
assignments.forEach(assignment => {
  // 如果圖片已經在代碼中使用，跳過（因為已經應用了）
  if (usedImages.has(assignment.image)) {
    return;
  }
  if (!imageAssignments[assignment.image]) {
    imageAssignments[assignment.image] = [];
  }
  imageAssignments[assignment.image].push(assignment);
});

// 分類圖片
const used = images.filter(img => usedImages.has(img));
// 未使用的圖片：不在代碼中使用，且沒有位置指定
const unused = images.filter(img => {
  if (usedImages.has(img)) {
    return false; // 已使用，不是未使用
  }
  // 如果有位置指定，也不算未使用（應該顯示在「已指定」tab）
  if (imageAssignments[img] && imageAssignments[img].length > 0) {
    return false;
  }
  return true;
});

console.log(`已使用的圖片: ${used.length}`);
console.log(`未使用的圖片: ${unused.length}\n`);

// 生成頁面選項 HTML
function generatePageOptions() {
  return Object.keys(pageSections).map(page => {
    const sections = pageSections[page];
    const sectionOptions = Object.keys(sections).map(sectionKey => 
      `<option value="${sectionKey}">${sections[sectionKey]}</option>`
    ).join('');
    return `<optgroup label="${page}">${sectionOptions}</optgroup>`;
  }).join('');
}

// 生成 HTML 查看頁面
const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>圖片查看器 - PinChat</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .header {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
      margin-bottom: 10px;
    }
    .stats {
      display: flex;
      gap: 20px;
      margin-top: 10px;
      flex-wrap: wrap;
    }
    .stat {
      padding: 10px 15px;
      border-radius: 6px;
      font-weight: 600;
    }
    .stat.total { background: #e3f2fd; color: #1976d2; }
    .stat.used { background: #e8f5e9; color: #388e3c; }
    .stat.unused { background: #fff3e0; color: #f57c00; }
    .stat.assigned { background: #f3e5f5; color: #7b1fa2; }
    .tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .tab {
      padding: 10px 20px;
      background: white;
      border: 2px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
    }
    .tab:hover {
      border-color: #1976d2;
    }
    .tab.active {
      background: #1976d2;
      color: white;
      border-color: #1976d2;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .image-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .image-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .image-card img {
      width: 100%;
      height: 200px;
      object-fit: contain;
      background: #f9f9f9;
      display: block;
    }
    .image-info {
      padding: 12px;
    }
    .image-name {
      font-size: 12px;
      color: #666;
      word-break: break-all;
      margin-bottom: 8px;
    }
    .image-status {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      margin-right: 8px;
    }
    .status-used {
      background: #e8f5e9;
      color: #388e3c;
    }
    .status-unused {
      background: #fff3e0;
      color: #f57c00;
    }
    .status-assigned {
      background: #f3e5f5;
      color: #7b1fa2;
    }
    .image-actions {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .btn {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      transition: all 0.2s;
    }
    .btn-primary {
      background: #1976d2;
      color: white;
    }
    .btn-primary:hover {
      background: #1565c0;
    }
    .btn-secondary {
      background: #f5f5f5;
      color: #333;
      border: 1px solid #ddd;
    }
    .btn-secondary:hover {
      background: #e0e0e0;
    }
    .section {
      display: none;
    }
    .section.active {
      display: block;
    }
    .search-box {
      width: 100%;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 6px;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .search-box:focus {
      outline: none;
      border-color: #1976d2;
    }
    .assignment-badge {
      display: inline-block;
      padding: 2px 6px;
      background: #e3f2fd;
      color: #1976d2;
      border-radius: 3px;
      font-size: 10px;
      margin-top: 4px;
    }
    /* Modal Styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      overflow: auto;
    }
    .modal.active {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal-content {
      background: white;
      padding: 30px;
      border-radius: 8px;
      max-width: 600px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    .modal-header {
      margin-bottom: 20px;
    }
    .modal-header h2 {
      margin-bottom: 10px;
    }
    .modal-header .current-image {
      color: #666;
      font-size: 14px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #333;
    }
    .form-group select,
    .form-group input {
      width: 100%;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 6px;
      font-size: 14px;
    }
    .form-group select:focus,
    .form-group input:focus {
      outline: none;
      border-color: #1976d2;
    }
    .modal-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 20px;
    }
    .btn-cancel {
      background: #f5f5f5;
      color: #333;
    }
    .btn-cancel:hover {
      background: #e0e0e0;
    }
    .assignments-list {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #eee;
    }
    .assignment-item {
      padding: 8px;
      background: #f9f9f9;
      border-radius: 4px;
      margin-bottom: 6px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .assignment-item .remove-btn {
      background: #f44336;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 11px;
    }
    .assignment-item .remove-btn:hover {
      background: #d32f2f;
    }
    .config-modal {
      max-width: 800px;
    }
    .config-display {
      background: #f5f5f5;
      border: 2px solid #ddd;
      border-radius: 6px;
      padding: 15px;
      margin: 15px 0;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      max-height: 300px;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .command-display {
      background: #1e1e1e;
      color: #d4d4d4;
      border-radius: 6px;
      padding: 15px;
      margin: 15px 0;
      font-family: 'Courier New', monospace;
      font-size: 13px;
      position: relative;
    }
    .copy-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #1976d2;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 11px;
    }
    .copy-btn:hover {
      background: #1565c0;
    }
    .copy-btn.copied {
      background: #388e3c;
    }
    .instruction-text {
      color: #666;
      font-size: 13px;
      margin: 10px 0;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📸 PinChat 圖片查看器</h1>
    <div class="stats">
      <div class="stat total">總數: ${images.length}</div>
      <div class="stat used">已使用: ${used.length}</div>
      <div class="stat unused">未使用: ${unused.length}</div>
      <div class="stat assigned">已指定: ${Object.keys(imageAssignments).length}</div>
    </div>
    <div style="margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;">
      <button class="btn btn-primary" onclick="refreshImageList()" style="margin-top: 0;">
        🔄 刷新圖片列表
      </button>
      <button class="btn btn-secondary" onclick="exportConfig()" style="margin-top: 0;">
        📋 複製配置指令
      </button>
      <button class="btn btn-primary" onclick="saveConfigFromHeader()" style="margin-top: 0; background: #1976d2;">
        💾 保存配置
      </button>
      <button class="btn btn-primary" onclick="applyToWebpage()" style="margin-top: 0; background: #388e3c;">
        🌐 應用到網頁
      </button>
    </div>
  </div>

  <input type="text" class="search-box" id="searchBox" placeholder="搜尋圖片名稱...">

  <div class="tabs">
    <div class="tab active" onclick="showSection('all')">全部圖片 (${images.length})</div>
    <div class="tab" onclick="showSection('used')">已使用 (${used.length})</div>
    <div class="tab" onclick="showSection('unused')">未使用 (${unused.length})</div>
    <div class="tab" onclick="showSection('assigned')">已指定 (${Object.keys(imageAssignments).length})</div>
  </div>

  <div id="all-section" class="section active">
    <div class="gallery" id="all-gallery">
      ${images.map(img => {
        const isUsed = usedImages.has(img);
        const assignments = imageAssignments[img] || [];
        const hasAssignments = assignments.length > 0;
        return `
          <div class="image-card" data-name="${img.toLowerCase()}">
            <img src="/pinchat/lovable-uploads/${img}" alt="${img}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'200\\'%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\'%3E圖片載入失敗%3C/text%3E%3C/svg%3E'">
            <div class="image-info">
              <div class="image-name">${img}</div>
              <div>
                <span class="image-status ${isUsed ? 'status-used' : 'status-unused'}">
                  ${isUsed ? '✓ 已使用' : '○ 未使用'}
                </span>
                ${hasAssignments ? `<span class="image-status status-assigned">📍 已指定 (${assignments.length})</span>` : ''}
              </div>
              ${hasAssignments ? `
                <div class="assignments-list">
                  ${assignments.map(a => `
                    <div class="assignment-item">
                      <span>${a.page} - ${a.section}</span>
                      <button class="remove-btn" onclick="removeAssignment('${img}', '${a.page}', '${a.section}')">移除</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <div class="image-actions">
                <button class="btn btn-primary" onclick="openAssignModal('${img}')">指定位置</button>
                ${hasAssignments ? `<button class="btn btn-secondary" onclick="exportConfig()">導出配置</button>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  </div>

  <div id="used-section" class="section">
    <div class="gallery" id="used-gallery">
      ${used.map(img => {
        const assignments = imageAssignments[img] || [];
        const hasAssignments = assignments.length > 0;
        return `
          <div class="image-card" data-name="${img.toLowerCase()}">
            <img src="/pinchat/lovable-uploads/${img}" alt="${img}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'200\\'%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\'%3E圖片載入失敗%3C/text%3E%3C/svg%3E'">
            <div class="image-info">
              <div class="image-name">${img}</div>
              <div>
                <span class="image-status status-used">✓ 已使用</span>
                ${hasAssignments ? `<span class="image-status status-assigned">📍 已指定 (${assignments.length})</span>` : ''}
              </div>
              ${hasAssignments ? `
                <div class="assignments-list">
                  ${assignments.map(a => `
                    <div class="assignment-item">
                      <span>${a.page} - ${a.section}</span>
                      <button class="remove-btn" onclick="removeAssignment('${img}', '${a.page}', '${a.section}')">移除</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <div class="image-actions">
                <button class="btn btn-primary" onclick="openAssignModal('${img}')">指定位置</button>
                ${hasAssignments ? `<button class="btn btn-secondary" onclick="exportConfig()">導出配置</button>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  </div>

  <div id="unused-section" class="section">
    <div class="gallery" id="unused-gallery">
      ${unused.map(img => {
        const assignments = imageAssignments[img] || [];
        const hasAssignments = assignments.length > 0;
        return `
          <div class="image-card" data-name="${img.toLowerCase()}">
            <img src="/pinchat/lovable-uploads/${img}" alt="${img}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'200\\'%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\'%3E圖片載入失敗%3C/text%3E%3C/svg%3E'">
            <div class="image-info">
              <div class="image-name">${img}</div>
              <div>
                <span class="image-status status-unused">○ 未使用</span>
                ${hasAssignments ? `<span class="image-status status-assigned">📍 已指定 (${assignments.length})</span>` : ''}
              </div>
              ${hasAssignments ? `
                <div class="assignments-list">
                  ${assignments.map(a => `
                    <div class="assignment-item">
                      <span>${a.page} - ${a.section}</span>
                      <button class="remove-btn" onclick="removeAssignment('${img}', '${a.page}', '${a.section}')">移除</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <div class="image-actions">
                <button class="btn btn-primary" onclick="openAssignModal('${img}')">指定位置</button>
                ${hasAssignments ? `<button class="btn btn-secondary" onclick="exportConfig()">導出配置</button>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  </div>

  <div id="assigned-section" class="section">
    <div class="gallery" id="assigned-gallery">
      ${Object.keys(imageAssignments).map(img => {
        const assignments = imageAssignments[img];
        const isUsed = usedImages.has(img);
        const hasAssignments = assignments.length > 0;
        return `
          <div class="image-card" data-name="${img.toLowerCase()}">
            <img src="/pinchat/lovable-uploads/${img}" alt="${img}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'200\\'%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\'%3E圖片載入失敗%3C/text%3E%3C/svg%3E'">
            <div class="image-info">
              <div class="image-name">${img}</div>
              <div>
                <span class="image-status ${isUsed ? 'status-used' : 'status-unused'}">
                  ${isUsed ? '✓ 已使用' : '○ 未使用'}
                </span>
                <span class="image-status status-assigned">📍 已指定 (${assignments.length})</span>
              </div>
              <div class="assignments-list">
                ${assignments.map(a => `
                  <div class="assignment-item">
                    <span>${a.page} - ${a.section}</span>
                    <button class="remove-btn" onclick="removeAssignment('${img}', '${a.page}', '${a.section}')">移除</button>
                  </div>
                `).join('')}
              </div>
              <div class="image-actions">
                <button class="btn btn-primary" onclick="openAssignModal('${img}')">指定位置</button>
                ${hasAssignments ? `<button class="btn btn-secondary" onclick="exportConfig()">導出配置</button>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  </div>

  <!-- Config Display Modal -->
  <div id="configModal" class="modal">
    <div class="modal-content config-modal">
      <div class="modal-header">
        <h2>📋 複製配置指令</h2>
        <div class="instruction-text">
          請複製下面的指令，在終端中執行以更新配置：
        </div>
      </div>
      <div style="margin-bottom: 15px;">
        <button class="btn btn-primary" onclick="copyCommand()" id="copyCommandBtn" style="width: 100%; padding: 12px; font-size: 14px; font-weight: 600; background: #1976d2;">
          📋 複製指令（點擊複製命令到剪貼板）
        </button>
      </div>
      <div style="position: relative;">
        <div class="command-display" id="commandDisplay"></div>
      </div>
      <div class="instruction-text" id="configInstruction" style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 4px;">
        <strong>💡 完整流程說明：</strong><br>
        <strong>步驟 1 - 保存配置：</strong><br>
        1. 點擊「複製指令」或「保存配置」按鈕，命令會自動複製到剪貼板<br>
        2. 在終端中貼上並執行該命令（<strong>請確保完整複製整個命令</strong>）<br>
        3. 系統會自動更新 <strong>image-assignments.json</strong> 文件<br><br>
        <strong>步驟 2 - 應用到網頁：</strong><br>
        4. 點擊「應用到網頁」按鈕，命令會自動複製到剪貼板<br>
        5. 在終端中貼上並執行該命令<br>
        6. 系統會將配置應用到實際的代碼文件中（圖片會插入到對應的頁面）<br>
        7. 執行完成後，刷新瀏覽器頁面查看效果<br><br>
        <strong>⚠️ 如果遇到 "command not found" 錯誤：</strong><br>
        • 可能是命令被截斷了，請確保完整複製整個命令（從 "echo" 開始到 "update-image-config" 結束）<br>
        • 或者使用替代方案：複製下方的 JSON 配置，保存到 <strong>image-assignments.json</strong> 文件，然後執行 <code>npm run analyze-images</code><br><br>
        <strong>⚠️ 重要：</strong>如果不執行命令，配置變更只會存在於記憶體中，不會保存到文件或應用到網頁。
      </div>
      <div class="instruction-text" style="margin-top: 20px;">
        <strong>或者</strong>，如果您想查看完整的 JSON 配置：
      </div>
      <div style="position: relative;">
        <button class="copy-btn" onclick="copyConfig()" id="copyConfigBtn">複製 JSON</button>
        <div class="config-display" id="configDisplay"></div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeConfigModal()">稍後保存</button>
        <button type="button" class="btn btn-primary" onclick="saveAndReload()">保存配置</button>
        <button type="button" class="btn btn-primary" onclick="applyToWebpage()" style="background: #388e3c;">應用到網頁</button>
      </div>
    </div>
  </div>

  <!-- Assignment Modal -->
  <div id="assignModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>指定圖片位置</h2>
        <div class="current-image" id="currentImageName"></div>
      </div>
      <form id="assignForm" onsubmit="saveAssignment(event)">
        <div class="form-group">
          <label for="pageSelect">選擇頁面</label>
          <select id="pageSelect" required onchange="updateSectionOptions()">
            <option value="">-- 請選擇頁面 --</option>
            ${Object.keys(pageSections).map(page => `<option value="${page}">${page}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label for="sectionSelect">選擇位置</label>
          <select id="sectionSelect" required>
            <option value="">-- 請先選擇頁面 --</option>
          </select>
        </div>
        <div class="form-group">
          <label for="altText">Alt 文字 (選填)</label>
          <input type="text" id="altText" placeholder="圖片描述文字">
        </div>
        <div class="form-group">
          <label for="className">CSS 類名 (選填)</label>
          <input type="text" id="className" placeholder="例如: w-full rounded-lg">
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-cancel" onclick="closeAssignModal()">取消</button>
          <button type="submit" class="btn btn-primary">保存</button>
        </div>
      </form>
    </div>
  </div>

  <script>
    const pageSections = ${JSON.stringify(pageSections)};
    let currentImage = '';
    let assignments = ${JSON.stringify(assignments)};

    function showSection(section) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      
      document.getElementById(section + '-section').classList.add('active');
      event.target.classList.add('active');
      
      document.getElementById('searchBox').value = '';
      filterImages();
    }

    function filterImages() {
      const searchTerm = document.getElementById('searchBox').value.toLowerCase();
      const activeSection = document.querySelector('.section.active');
      const cards = activeSection.querySelectorAll('.image-card');
      
      cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function openAssignModal(imageName) {
      currentImage = imageName;
      document.getElementById('currentImageName').textContent = imageName;
      document.getElementById('assignModal').classList.add('active');
      document.getElementById('assignForm').reset();
      document.getElementById('pageSelect').value = '';
      document.getElementById('sectionSelect').innerHTML = '<option value="">-- 請先選擇頁面 --</option>';
    }

    function closeAssignModal() {
      document.getElementById('assignModal').classList.remove('active');
    }

    function updateSectionOptions() {
      const pageSelect = document.getElementById('pageSelect');
      const sectionSelect = document.getElementById('sectionSelect');
      const selectedPage = pageSelect.value;
      
      sectionSelect.innerHTML = '<option value="">-- 請選擇位置 --</option>';
      
      if (selectedPage && pageSections[selectedPage]) {
        const sections = pageSections[selectedPage];
        Object.keys(sections).forEach(sectionKey => {
          const option = document.createElement('option');
          option.value = sectionKey;
          option.textContent = sections[sectionKey];
          sectionSelect.appendChild(option);
        });
      }
    }

    function saveAssignment(event) {
      event.preventDefault();
      
      const page = document.getElementById('pageSelect').value;
      const section = document.getElementById('sectionSelect').value;
      const altText = document.getElementById('altText').value;
      const className = document.getElementById('className').value;
      
      // 檢查是否已存在相同的分配
      const exists = assignments.some(a => 
        a.image === currentImage && a.page === page && a.section === section
      );
      
      if (exists) {
        alert('此位置已經指定過這張圖片了！');
        return;
      }
      
      // 添加新分配
      assignments.push({
        image: currentImage,
        page: page,
        section: section,
        alt: altText || '',
        className: className || ''
      });
      
      // 顯示配置模態框
      showConfigModal();
      closeAssignModal();
    }

    function removeAssignment(image, page, section) {
      if (!confirm('確定要移除這個位置指定嗎？')) {
        return;
      }
      
      assignments = assignments.filter(a => 
        !(a.image === image && a.page === page && a.section === section)
      );
      
      // 立即更新頁面顯示 - 移除該 assignment 的 UI 元素
      updateAssignmentDisplay(image, page, section);
      
      // 顯示配置模態框，並強調需要保存
      showConfigModal();
      
      // 在模態框顯示後，更新提示訊息
      setTimeout(() => {
        const instruction = document.getElementById('configInstruction');
        if (instruction) {
          instruction.style.background = '#ffebee';
          instruction.style.border = '2px solid #f44336';
          instruction.innerHTML = '<strong>⚠️ 重要提示：</strong><br>' +
            '您已移除位置指定，但配置尚未保存到 <strong>image-assignments.json</strong> 文件。<br><br>' +
            '<strong>請立即執行以下步驟：</strong><br>' +
            '1. 點擊「保存並重新載入」按鈕（命令會自動複製）<br>' +
            '2. 在終端中執行該命令<br>' +
            '3. 刷新瀏覽器頁面<br><br>' +
            '如果不執行命令，移除操作不會保存到文件，重新載入頁面後會恢復原狀。';
        }
      }, 100);
    }
    
    function updateAssignmentDisplay(image, page, section) {
      // 移除所有相關的 assignment 顯示元素
      const assignmentItems = document.querySelectorAll('.assignment-item');
      assignmentItems.forEach(item => {
        const itemText = item.textContent;
        if (itemText.includes(page) && itemText.includes(section) && itemText.includes(image)) {
          item.remove();
        }
      });
      
      // 更新圖片卡片的 assignment 狀態
      const imageCards = document.querySelectorAll('.image-card');
      imageCards.forEach(card => {
        const imgName = card.querySelector('.image-name').textContent;
        if (imgName === image) {
          const assignmentsList = card.querySelector('.assignments-list');
          if (assignmentsList) {
            const items = assignmentsList.querySelectorAll('.assignment-item');
            items.forEach(item => {
              const itemText = item.textContent;
              if (itemText.includes(page) && itemText.includes(section)) {
                item.remove();
              }
            });
            
            // 如果沒有 assignment 了，移除整個 assignments-list
            if (assignmentsList.querySelectorAll('.assignment-item').length === 0) {
              assignmentsList.remove();
              
              // 移除 assigned 狀態標籤
              const statusBadges = card.querySelectorAll('.status-assigned');
              statusBadges.forEach(badge => badge.remove());
              
              // 如果該圖片在「已指定」tab 中，移除它
              const assignedSection = document.getElementById('assigned-section');
              if (assignedSection) {
                const assignedCards = assignedSection.querySelectorAll('.image-card');
                assignedCards.forEach(assignedCard => {
                  const assignedImgName = assignedCard.querySelector('.image-name').textContent;
                  if (assignedImgName === image) {
                    assignedCard.remove();
                  }
                });
              }
              
              // 更新計數
              updateAssignedTabCount();
            } else {
              // 更新 assigned 狀態標籤的數量
              const assignedBadge = card.querySelector('.status-assigned');
              if (assignedBadge) {
                const remainingCount = assignmentsList.querySelectorAll('.assignment-item').length;
                assignedBadge.textContent = '📍 已指定 (' + remainingCount + ')';
              }
              
              // 更新計數
              updateAssignedTabCount();
            }
          }
        }
      });
      
      // 更新統計數字和 tab 計數
      updateAssignedTabCount();
    }
    
    function updateAssignedTabCount() {
      // 計算當前還有多少圖片有位置指定（且未使用）
      const assignedImages = new Set();
      const usedImages = new Set();
      
      // 先找出所有已使用的圖片
      document.querySelectorAll('.image-card').forEach(card => {
        const imgName = card.querySelector('.image-name').textContent;
        const statusUsed = card.querySelector('.status-used');
        if (statusUsed) {
          usedImages.add(imgName);
        }
      });
      
      // 計算未使用且有位置指定的圖片
      assignments.forEach(a => {
        if (!usedImages.has(a.image)) {
          assignedImages.add(a.image);
        }
      });
      
      const count = assignedImages.size;
      
      // 更新 tab 標籤
      const assignedTab = document.querySelector('.tab[onclick*="assigned"]');
      if (assignedTab) {
        assignedTab.textContent = '已指定 (' + count + ')';
      }
      
      // 更新統計數字
      const assignedStat = document.querySelector('.stat.assigned');
      if (assignedStat) {
        assignedStat.textContent = '已指定: ' + count;
      }
    }

    function showConfigModal() {
      const config = {
        assignments: assignments,
        pageSections: pageSections
      };
      
      // 調試信息：檢查 assignments 是否正確
      console.log('📋 生成配置，assignments 數量:', assignments.length);
      if (assignments.length > 0) {
        console.log('📝 Assignments 內容:', assignments);
      } else {
        console.warn('⚠️ 警告：assignments 為空陣列！請確保已指定圖片位置。');
      }
      
      const configJson = JSON.stringify(config, null, 2);
      
      // 生成指令（使用 base64 編碼更安全地傳遞 JSON）
      const singleLineJson = JSON.stringify(configJson);
      // 使用 base64 編碼避免 shell 轉義問題
      const base64Json = btoa(unescape(encodeURIComponent(singleLineJson)));
      const command = 'echo "BASE64:' + base64Json + '" | npm run update-image-config';
      
      // 顯示配置
      document.getElementById('configDisplay').textContent = configJson;
      document.getElementById('commandDisplay').textContent = command;
      document.getElementById('configModal').classList.add('active');
      
      // 如果 assignments 為空，顯示警告
      if (assignments.length === 0) {
        const instruction = document.getElementById('configInstruction');
        if (instruction) {
          instruction.style.background = '#ffebee';
          instruction.style.border = '2px solid #f44336';
          instruction.innerHTML = '<strong>⚠️ 警告：沒有圖片分配！</strong><br><br>' +
            '配置中的 assignments 為空陣列。這可能是因為：<br>' +
            '1. 您還沒有指定任何圖片位置<br>' +
            '2. 或者配置沒有正確保存<br><br>' +
            '<strong>請先指定圖片位置，然後再保存配置。</strong>';
        }
      }
    }

    function closeConfigModal() {
      document.getElementById('configModal').classList.remove('active');
      // 不自動重新載入，讓用戶選擇何時保存
      // 如果需要重新載入以查看更新後的配置，請手動刷新頁面
    }
    
    function saveConfigFromHeader() {
      // 從 header 按鈕調用，直接保存配置
      const config = {
        assignments: assignments,
        pageSections: pageSections
      };
      
      const configJson = JSON.stringify(config, null, 2);
      const singleLineJson = JSON.stringify(configJson);
      // 使用 base64 編碼避免 shell 轉義問題
      const base64Json = btoa(unescape(encodeURIComponent(singleLineJson)));
      const command = 'echo "BASE64:' + base64Json + '" | npm run update-image-config';
      
      // 複製命令到剪貼板
      navigator.clipboard.writeText(command).then(() => {
        alert('配置命令已複製到剪貼板！\\n\\n📋 請在終端中執行以下命令：\\n\\n' + command.substring(0, 100) + '...\\n\\n（命令已完整複製，請直接貼上執行）\\n\\n✅ 這個命令會保存配置到 image-assignments.json 文件。\\n\\n💡 保存完成後，您可以點擊「應用到網頁」按鈕來將配置應用到實際的代碼文件。');
      }).catch(() => {
        prompt('請複製以下命令並在終端中執行：', command);
      });
    }
    
    function saveAndReload() {
      const config = {
        assignments: assignments,
        pageSections: pageSections
      };
      
      const configJson = JSON.stringify(config, null, 2);
      
      // 生成指令（使用 base64 編碼更安全地傳遞 JSON）
      const singleLineJson = JSON.stringify(configJson);
      const base64Json = btoa(unescape(encodeURIComponent(singleLineJson)));
      const command = 'echo "BASE64:' + base64Json + '" | npm run update-image-config';
      
      // 複製命令到剪貼板
      navigator.clipboard.writeText(command).then(() => {
        alert('配置命令已複製到剪貼板！\\n\\n📋 請在終端中貼上並執行該命令來保存配置到 image-assignments.json。\\n\\n⚠️ 注意：如果命令很長，請確保完整複製。\\n\\n保存完成後，您可以點擊「應用到網頁」按鈕來將配置應用到實際的代碼文件。');
        // 不關閉模態框，讓用戶可以繼續操作
      }).catch(() => {
        // 降級方案：顯示命令讓用戶手動複製
        const commandText = document.getElementById('commandDisplay').textContent;
        prompt('請複製以下命令並在終端中執行：', commandText);
      });
    }
    
    function applyToWebpage() {
      const command = 'npm run apply-images';
      
      // 複製命令到剪貼板
      navigator.clipboard.writeText(command).then(() => {
        alert('應用命令已複製到剪貼板！\\n\\n📋 請在終端中執行以下命令：\\n\\n' + command + '\\n\\n✅ 這個命令會將 image-assignments.json 中的配置應用到實際的代碼文件中。\\n\\n💡 提示：\\n1. 請先確保已經保存配置到 image-assignments.json（點擊「保存配置」按鈕）\\n2. 執行此命令後，圖片會自動插入到對應的頁面文件中\\n3. 執行完成後，刷新瀏覽器頁面查看效果');
        // 如果模態框是打開的，關閉它
        const modal = document.getElementById('configModal');
        if (modal && modal.classList.contains('active')) {
          closeConfigModal();
        }
      }).catch(() => {
        // 降級方案：顯示命令讓用戶手動複製
        prompt('請複製以下命令並在終端中執行：', command);
      });
    }

    function copyCommand() {
      const command = document.getElementById('commandDisplay').textContent;
      if (!command || command.trim() === '') {
        alert('⚠️ 還沒有生成命令，請先指定圖片位置。');
        return;
      }
      copyToClipboard(command, 'copyCommandBtn');
    }

    function copyConfig() {
      const config = document.getElementById('configDisplay').textContent;
      copyToClipboard(config, 'copyConfigBtn');
    }

    function copyToClipboard(text, buttonId) {
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById(buttonId);
        const originalText = btn.textContent;
        btn.textContent = '已複製！';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        // 降級方案：使用 textarea
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          const btn = document.getElementById(buttonId);
          const originalText = btn.textContent;
          btn.textContent = '已複製！';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          alert('複製失敗，請手動複製');
        }
        document.body.removeChild(textarea);
      });
    }

    // 點擊模態框外部關閉
    document.getElementById('assignModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeAssignModal();
      }
    });

    function exportConfig() {
      showConfigModal();
    }
    
    function refreshImageList() {
      const command = 'npm run analyze-images';
      
      // 複製命令到剪貼板
      navigator.clipboard.writeText(command).then(() => {
        const message = '刷新命令已複製到剪貼板！\\n\\n' +
          '📋 請在終端中執行以下命令：\\n' + command + '\\n\\n' +
          '✅ 執行完成後，請點擊瀏覽器的「重新載入」按鈕（或按 F5）來查看更新後的圖片列表。\\n\\n' +
          '💡 提示：執行命令後，圖片查看器會自動重新生成，然後您只需要刷新瀏覽器頁面即可。';
        alert(message);
      }).catch(() => {
        // 降級方案：顯示命令讓用戶手動複製
        const message = '請複製以下命令並在終端中執行：\\n\\n' + command + '\\n\\n執行完成後，請刷新瀏覽器頁面。';
        prompt(message, command);
      });
    }

    // 點擊配置模態框外部關閉
    document.getElementById('configModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeConfigModal();
      }
    });

    document.getElementById('searchBox').addEventListener('input', filterImages);
  </script>
</body>
</html>`;

// 寫入 HTML 文件
const outputPath = join(process.cwd(), 'public/image-viewer.html');
writeFileSync(outputPath, html, 'utf-8');

console.log(`✅ 已生成圖片查看器: ${outputPath}`);
console.log(`\n📊 統計資訊:`);
console.log(`   總圖片數: ${images.length}`);
console.log(`   已使用: ${used.length}`);
console.log(`   未使用: ${unused.length}`);
console.log(`   已指定位置: ${Object.keys(imageAssignments).length}`);

if (unused.length > 0) {
  console.log(`\n⚠️  未使用的圖片 (前 10 個):`);
  unused.slice(0, 10).forEach(img => console.log(`   - ${img}`));
  if (unused.length > 10) {
    console.log(`   ... 還有 ${unused.length - 10} 個未使用的圖片`);
  }
}
