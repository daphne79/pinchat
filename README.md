# PinChat

PinChat is a business instant messaging platform with live chat, AI Bot, forms, payments, and integrations.

## Features

- Live chat functionality
- AI-powered chatbot (AI PinBot)
- Forms and surveys
- Payment integrations
- Multi-channel messaging
- Analytics and reporting
- Team management

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

這個專案已設定為自動部署到 GitHub Pages。

### 自動部署（推薦）

1. 在 GitHub repository 設定中：
   - 前往 **Settings** → **Pages**
   - 在 **Source** 選擇 **GitHub Actions**
   - 儲存設定

2. 每次 push 到 `main` 分支時，GitHub Actions 會自動：
   - 安裝依賴
   - 執行 build
   - 部署 `dist` 目錄到 GitHub Pages

3. 網站會發布在：`https://daphne79.github.io/pinchat/`

### 手動部署

如果您想手動部署：

1. 執行 build：
   ```bash
   npm run build
   ```

2. 在 GitHub repository 設定中：
   - 前往 **Settings** → **Pages**
   - 在 **Source** 選擇 **Deploy from a branch**
   - 選擇分支：`main`
   - 選擇資料夾：`/dist`
   - 儲存設定

3. 確保 `dist` 目錄已 commit 並 push 到 repository

### 注意事項

- 專案已設定 `base: '/pinchat/'` 在 `vite.config.ts`
- React Router 已設定 `basename="/pinchat"`
- 已自動產生 `404.html` 以支援 SPA 路由
