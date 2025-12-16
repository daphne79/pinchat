# 圖片位置指定系統使用說明

這個系統允許您在圖片查看器中指定圖片要放在哪個頁面的哪個位置，然後自動生成或更新代碼。

## 功能特點

1. **視覺化圖片管理** - 查看所有圖片及其使用狀態
2. **位置指定** - 為每張圖片指定要放置的頁面和位置
3. **自動代碼生成** - 根據配置自動更新 TSX 文件

## 使用步驟

### 1. 查看圖片

啟動開發服務器：
```bash
npm run dev
```

然後訪問：`http://localhost:8080/pinchat/image-viewer.html`

### 2. 指定圖片位置

1. 在圖片查看器中，點擊圖片卡片上的「指定位置」按鈕
2. 在彈出的模態框中：
   - 選擇要放置的頁面（如 Index, About, AIPinBot 等）
   - 選擇頁面中的位置（如 hero, feature1, valueBlock1 等）
   - 可選：填寫 Alt 文字和 CSS 類名
3. 點擊「保存」

### 3. 複製配置指令

當您指定圖片位置後，系統會自動顯示一個模態框，裡面包含：

1. **可複製的指令** - 點擊「複製指令」按鈕，然後在終端中執行
2. **完整的 JSON 配置** - 如果需要查看或手動編輯

**使用方式：**
- 點擊「複製指令」按鈕
- 在終端中貼上並執行該命令
- 系統會自動：
  - 更新 `image-assignments.json` 配置文件
  - 重新生成圖片查看器
  - 刷新瀏覽器即可看到更新

**手動方式（可選）：**
如果您想手動處理，也可以：
1. 複製 JSON 配置
2. 保存到項目根目錄的 `image-assignments.json` 文件
3. 運行 `npm run apply-images` 來應用配置到代碼

### 4. 應用配置到代碼（可選）

如果您想將配置應用到實際的代碼文件中，運行：

```bash
npm run apply-images
```

這個腳本會：
- 讀取 `image-assignments.json` 配置
- 在對應的 TSX 文件中插入或更新圖片代碼
- 自動添加必要的 import 語句

## 頁面和位置說明

### 主要頁面

- **Index** - 首頁
  - `hero` - Hero 區塊
  - `valueBlock1` - 核心價值 1
  - `valueBlock2` - 核心價值 2
  - `valueBlock3` - 核心價值 3
  - `valueBlock4` - 核心價值 4

- **About** - 關於我們頁面
  - `hero` - Hero 區塊

### 功能頁面 (Features)

- **AIPinBot** - AI PinBot 功能頁
- **Analytics** - 分析功能頁
- **Branding** - 品牌功能頁
- **Chat** - 聊天功能頁
- **ChatWidget** - 聊天小工具頁
- **ChatroomManagement** - 聊天室管理頁
- **FAQPinBot** - FAQ PinBot 頁
- **PinBoard** - PinBoard 頁
- **SubAccount** - 子帳號頁

每個功能頁面都有：
- `hero` - Hero 區塊
- `feature1` ~ `feature5` - 功能展示區塊

### 行業頁面 (Industries)

- **ForB2BCommercial** - B2B 商業
- **ForEducation** - 教育
- **ForEvents** - 活動
- **ForHealthcare** - 醫療
- **ForProfessionalServices** - 專業服務
- **ForRealEstate** - 房地產
- **ForRetailEcommerce** - 零售電商
- **ForServiceIndustries** - 服務業

每個行業頁面都有：
- `hero` - Hero 區塊
- `useCase1` ~ `useCase3` - 使用案例區塊

## 注意事項

1. **備份代碼** - 在運行 `apply-images` 之前，建議先提交或備份現有代碼
2. **檢查結果** - 自動生成的代碼可能需要手動調整位置和樣式
3. **重複分配** - 同一個位置不能重複指定同一張圖片
4. **Section 匹配** - 如果找不到對應的 section 註釋，圖片會被添加到文件末尾

## 手動調整

如果自動生成的代碼位置不正確，您可以：

1. 手動編輯對應的 TSX 文件
2. 或刪除配置中的分配，重新指定位置

## 查看已指定的圖片

在圖片查看器中：
- 點擊「已指定」標籤頁，查看所有已指定位置的圖片
- 每個圖片卡片會顯示所有已指定的位置
- 可以點擊「移除」按鈕來刪除某個位置指定

## 疑難排解

### 圖片沒有顯示

- 檢查圖片路徑是否正確（應該是 `/pinchat/lovable-uploads/xxx.png`）
- 確認開發服務器正在運行

### 配置沒有應用

- 確認 `image-assignments.json` 在項目根目錄
- 檢查 JSON 格式是否正確
- 查看終端輸出的錯誤訊息

### 代碼位置不對

- 檢查目標頁面是否有對應的 section 註釋
- 手動調整生成的代碼位置

## 相關命令

```bash
# 重新生成圖片查看器
npm run analyze-images

# 應用圖片分配配置
npm run apply-images
```

