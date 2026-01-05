# Explore Features 區塊文案與機制說明

## 📋 目錄
- [機制說明](#機制說明)
- [翻譯 Key 結構](#翻譯-key-結構)
- [功能列表與翻譯 Key 對應](#功能列表與翻譯-key-對應)
- [文案內容](#文案內容)
  - [繁體中文](#繁體中文)
  - [英文](#英文)
  - [簡體中文](#簡體中文)

---

## 機制說明

### 運作原理

1. **統一翻譯來源**
   - 所有功能頁面的「探索其他功能」區塊都使用統一的翻譯 key：`features.common.exploreFeatures`
   - 每個功能的文案在所有頁面都是固定的，不會因頁面而變化

2. **功能選取邏輯**
   - 每個功能頁面會從**自己以外的相關功能**中隨機選取 **3 個**功能顯示
   - 功能關係定義在 `src/lib/featureRelations.ts` 的 `FEATURE_RELATIONS` 中
   - 選取邏輯由 `getRelatedFeatures()` 函數處理，會自動排除當前功能本身

3. **組件位置**
   - 組件檔案：`src/components/ExploreFeatures.tsx`
   - 使用方式：`<ExploreFeatures currentFeature="chat" />`
   - 組件會自動根據 `currentFeature` 參數選取相關功能並顯示

4. **翻譯 Key 構建方式**
   ```typescript
   // 標題
   const titleKey = 'features.common.exploreFeatures.title';
   
   // 功能卡片標題
   const featureTitleKey = `features.common.exploreFeatures.${feature.translationSubKey}.title`;
   
   // 功能卡片描述
   const featureDescKey = `features.common.exploreFeatures.${feature.translationSubKey}.description`;
   ```

---

## 翻譯 Key 結構

```
features.common.exploreFeatures
├── title (區塊標題)
└── [功能Key]
    ├── title (功能標題)
    └── description (功能描述)
```

### 功能 Key 對應表

| 功能 Key | 功能名稱 | 路由 | 圖標 |
|---------|---------|------|------|
| `chat` | 即時聊天系統 | `/features/chat` | MessageSquare |
| `chatWidget` | 網頁客服插件 | `/features/chat-widget` | ExternalLink |
| `aiPinBot` | AI 聊天機器人 | `/features/ai-pinbot` | Bot |
| `pinBoard` | 歡迎頁面多連結行銷 | `/features/pinboard` | Link2 |
| `branding` | 品牌與自訂 | `/features/branding` | Palette |
| `dataAnalysis` | 完整數據分析 | `/features/analytics` | BarChart3 |
| `chatroomManagement` | 聊天室管理 | `/features/chatroom-management` | FolderOpen |
| `subAccount` | 子帳號管理 | `/features/sub-account` | Users |
| `faqPinbot` | FAQ 聊天機器人 | `/features/faq-pinbot` | HelpCircle |

---

## 功能列表與翻譯 Key 對應

### 功能關係配置

每個功能頁面會顯示的相關功能（從中隨機選 3 個）：

- **chat** (聊天功能頁面)
  - 相關功能：`aiPinbot`, `chatWidget`, `pinboard`, `branding`, `analytics`

- **chatWidget** (網頁客服插件頁面)
  - 相關功能：`pinboard`, `aiPinbot`, `analytics`, `branding`, `chat`

- **pinboard** (歡迎頁面頁面)
  - 相關功能：`chatWidget`, `aiPinbot`, `analytics`, `branding`, `chat`

- **aiPinbot** (AI 聊天機器人頁面)
  - 相關功能：`chat`, `chatWidget`, `faqPinbot`, `analytics`, `chatroomManagement`

- **faqPinbot** (FAQ 聊天機器人頁面)
  - 相關功能：`aiPinbot`, `chat`, `chatWidget`, `analytics`, `chatroomManagement`

- **branding** (品牌與自訂頁面)
  - 相關功能：`chat`, `chatWidget`, `pinboard`, `aiPinbot`, `analytics`

- **analytics** (數據分析頁面)
  - 相關功能：`chat`, `chatWidget`, `aiPinbot`, `chatroomManagement`, `subAccount`

- **chatroomManagement** (聊天室管理頁面)
  - 相關功能：`subAccount`, `analytics`, `aiPinbot`, `chat`, `faqPinbot`

- **subAccount** (子帳號管理頁面)
  - 相關功能：`chatroomManagement`, `analytics`, `chat`, `aiPinbot`, `branding`

---

## 文案內容

### 繁體中文

#### 區塊標題
- **Key**: `features.common.exploreFeatures.title`
- **文案**: `探索其他功能`

#### 功能卡片

1. **即時聊天系統** (`chat`)
   - **Key**: `features.common.exploreFeatures.chat.title`
   - **標題**: `即時聊天系統`
   - **Key**: `features.common.exploreFeatures.chat.description`
   - **描述**: `支援一對一與群組聊天、多媒體訊息與可調整的介面，讓品牌與用戶保持自然、即時且高品質的雙向互動。`

2. **網頁客服插件** (`chatWidget`)
   - **Key**: `features.common.exploreFeatures.chatWidget.title`
   - **標題**: `網頁客服插件`
   - **Key**: `features.common.exploreFeatures.chatWidget.description`
   - **描述**: `在網站上快速嵌入可拖曳、可客製化的聊天介面，提升訪客互動與轉換效率。`

3. **AI 聊天機器人** (`aiPinBot`)
   - **Key**: `features.common.exploreFeatures.aiPinBot.title`
   - **標題**: `AI 聊天機器人`
   - **Key**: `features.common.exploreFeatures.aiPinBot.description`
   - **描述**: `提供 AI 驅動的聊天，即時回應，需要時交由人工處理，並能適應你的品牌跨平台運作。`

4. **歡迎頁面多連結行銷** (`pinBoard`)
   - **Key**: `features.common.exploreFeatures.pinBoard.title`
   - **標題**: `歡迎頁面多連結行銷`
   - **Key**: `features.common.exploreFeatures.pinBoard.description`
   - **描述**: `打造可導流、可呈現品牌資訊的多連結頁，並加入聊天入口提升顧客互動。`

5. **品牌與自訂** (`branding`)
   - **Key**: `features.common.exploreFeatures.branding.title`
   - **標題**: `品牌與自訂`
   - **Key**: `features.common.exploreFeatures.branding.description`
   - **描述**: `自訂聊天介面、插件與歡迎頁面，使其符合你的品牌識別，打造一致的使用者體驗。`

6. **完整數據分析** (`dataAnalysis`)
   - **Key**: `features.common.exploreFeatures.dataAnalysis.title`
   - **標題**: `完整數據分析`
   - **Key**: `features.common.exploreFeatures.dataAnalysis.description`
   - **描述**: `深入洞察聊天量、流量來源、問卷回覆與互動表現，透過清晰的圖表了解服務成效並持續優化營運。`

7. **聊天室管理** (`chatroomManagement`)
   - **Key**: `features.common.exploreFeatures.chatroomManagement.title`
   - **標題**: `聊天室管理`
   - **Key**: `features.common.exploreFeatures.chatroomManagement.description`
   - **描述**: `以標籤、資料夾與快速搜尋掌握所有聊天脈絡，讓客服與銷售團隊能更快找到重要訊息。`

8. **子帳號管理** (`subAccount`)
   - **Key**: `features.common.exploreFeatures.subAccount.title`
   - **標題**: `子帳號管理`
   - **Key**: `features.common.exploreFeatures.subAccount.description`
   - **描述**: `透過角色與權限控制輕鬆管理多位成員的營運範圍，實現高效的團隊協作。`

9. **FAQ 聊天機器人** (`faqPinbot`)
   - **Key**: `features.common.exploreFeatures.faqPinbot.title`
   - **標題**: `FAQ 聊天機器人`
   - **Key**: `features.common.exploreFeatures.faqPinbot.description`
   - **描述**: `以關鍵字觸發的 FAQ 聊天機器人，集中管理重複問題，並可在需要時無縫交由人工客服接手。`

---

### 英文

#### 區塊標題
- **Key**: `features.common.exploreFeatures.title`
- **文案**: `Explore Other Features`

#### 功能卡片

1. **Real-Time Chat System** (`chat`)
   - **Key**: `features.common.exploreFeatures.chat.title`
   - **Title**: `Real-Time Chat System`
   - **Key**: `features.common.exploreFeatures.chat.description`
   - **Description**: `Enable one-on-one and group chats with multimedia support and customizable UI for seamless brand-user interactions.`

2. **Website Chat Widget** (`chatWidget`)
   - **Key**: `features.common.exploreFeatures.chatWidget.title`
   - **Title**: `Website Chat Widget`
   - **Key**: `features.common.exploreFeatures.chatWidget.description`
   - **Description**: `Quickly embed a draggable, customizable chat interface on your website to boost visitor engagement and conversion.`

3. **AI Chatbot** (`aiPinBot`)
   - **Key**: `features.common.exploreFeatures.aiPinBot.title`
   - **Title**: `AI Chatbot`
   - **Key**: `features.common.exploreFeatures.aiPinBot.description`
   - **Description**: `Deliver AI-powered chats that respond instantly, hand off to humans when needed, and adapt across channels.`

4. **Welcome Page Multi-Link Marketing** (`pinBoard`)
   - **Key**: `features.common.exploreFeatures.pinBoard.title`
   - **Title**: `Welcome Page Multi-Link Marketing`
   - **Key**: `features.common.exploreFeatures.pinBoard.description`
   - **Description**: `Create a multi-link page for traffic routing and brand display, with chat entry points to enhance customer interaction.`

5. **Branding & Customization** (`branding`)
   - **Key**: `features.common.exploreFeatures.branding.title`
   - **Title**: `Branding & Customization`
   - **Key**: `features.common.exploreFeatures.branding.description`
   - **Description**: `Customize chat interfaces, widgets, and welcome pages to match your brand identity and create a consistent experience.`

6. **Comprehensive Analytics** (`dataAnalysis`)
   - **Key**: `features.common.exploreFeatures.dataAnalysis.title`
   - **Title**: `Comprehensive Analytics`
   - **Key**: `features.common.exploreFeatures.dataAnalysis.description`
   - **Description**: `Gain insights into chat volume, traffic sources, survey responses, and interaction performance with clear charts.`

7. **Chatroom Management** (`chatroomManagement`)
   - **Key**: `features.common.exploreFeatures.chatroomManagement.title`
   - **Title**: `Chatroom Management`
   - **Key**: `features.common.exploreFeatures.chatroomManagement.description`
   - **Description**: `Organize all chats with labels, folders, and quick search for efficient customer service workflows.`

8. **Sub-Account Management** (`subAccount`)
   - **Key**: `features.common.exploreFeatures.subAccount.title`
   - **Title**: `Sub-Account Management`
   - **Key**: `features.common.exploreFeatures.subAccount.description`
   - **Description**: `Manage multiple members' scope through role and permission controls for efficient team collaboration.`

9. **FAQ Chatbot** (`faqPinbot`)
   - **Key**: `features.common.exploreFeatures.faqPinbot.title`
   - **Title**: `FAQ Chatbot`
   - **Key**: `features.common.exploreFeatures.faqPinbot.description`
   - **Description**: `Keyword-triggered FAQ chatbot that manages repetitive questions and seamlessly hands off to human agents.`

---

### 簡體中文

#### 區塊標題
- **Key**: `features.common.exploreFeatures.title`
- **文案**: `探索其他功能`

#### 功能卡片

1. **即时聊天系统** (`chat`)
   - **Key**: `features.common.exploreFeatures.chat.title`
   - **标题**: `即时聊天系统`
   - **Key**: `features.common.exploreFeatures.chat.description`
   - **描述**: `支持一对一与群组聊天、多媒体消息与可调整的界面，让品牌与用户保持自然、即时且高品质的双向互动。`

2. **网页客服插件** (`chatWidget`)
   - **Key**: `features.common.exploreFeatures.chatWidget.title`
   - **标题**: `网页客服插件`
   - **Key**: `features.common.exploreFeatures.chatWidget.description`
   - **描述**: `在网站上快速嵌入可拖曳、可自定义的聊天界面，提升访客互动与转换效率。`

3. **AI 聊天机器人** (`aiPinBot`)
   - **Key**: `features.common.exploreFeatures.aiPinBot.title`
   - **标题**: `AI 聊天机器人`
   - **Key**: `features.common.exploreFeatures.aiPinBot.description`
   - **描述**: `提供 AI 驱动的聊天，即时回应，需要时交由人工处理，并能适应你的品牌跨平台运作。`

4. **欢迎页面多链接营销** (`pinBoard`)
   - **Key**: `features.common.exploreFeatures.pinBoard.title`
   - **标题**: `欢迎页面多链接营销`
   - **Key**: `features.common.exploreFeatures.pinBoard.description`
   - **描述**: `打造可导流、可呈现品牌信息的多链接页，并加入聊天入口提升顾客互动。`

5. **品牌与自定义** (`branding`)
   - **Key**: `features.common.exploreFeatures.branding.title`
   - **标题**: `品牌与自定义`
   - **Key**: `features.common.exploreFeatures.branding.description`
   - **描述**: `自定义聊天界面、插件与欢迎页面，使其符合你的品牌识别，打造一致的用户体验。`

6. **完整数据分析** (`dataAnalysis`)
   - **Key**: `features.common.exploreFeatures.dataAnalysis.title`
   - **标题**: `完整数据分析`
   - **Key**: `features.common.exploreFeatures.dataAnalysis.description`
   - **描述**: `深入洞察聊天量、流量来源、问卷回复与互动表现，透过清晰的图表了解服务成效并持续优化营运。`

7. **聊天室管理** (`chatroomManagement`)
   - **Key**: `features.common.exploreFeatures.chatroomManagement.title`
   - **标题**: `聊天室管理`
   - **Key**: `features.common.exploreFeatures.chatroomManagement.description`
   - **描述**: `以标签、文件夹与快速搜索掌握所有聊天脉络，让客服与销售团队能更快找到重要消息。`

8. **子账号管理** (`subAccount`)
   - **Key**: `features.common.exploreFeatures.subAccount.title`
   - **标题**: `子账号管理`
   - **Key**: `features.common.exploreFeatures.subAccount.description`
   - **描述**: `通过角色与权限控制轻松管理多位成员的营运范围，实现高效的团队协作。`

9. **FAQ 聊天机器人** (`faqPinbot`)
   - **Key**: `features.common.exploreFeatures.faqPinbot.title`
   - **标题**: `FAQ 聊天机器人`
   - **Key**: `features.common.exploreFeatures.faqPinbot.description`
   - **描述**: `以关键词触发的 FAQ 聊天机器人，集中管理重复问题，并可在需要时无缝交由人工客服接手。`

---

## 📝 注意事項

1. **文案統一性**
   - 所有功能頁面使用相同的文案，不會因頁面而變化
   - 如需修改文案，只需更新 `features.common.exploreFeatures` 區塊

2. **功能選取**
   - 每個頁面會從相關功能中隨機選取 3 個顯示
   - 相關功能定義在 `src/lib/featureRelations.ts` 的 `FEATURE_RELATIONS`

3. **翻譯檔案位置**
   - 繁體中文：`src/i18n/locales/zh-tw.json`
   - 英文：`src/i18n/locales/en.json`
   - 簡體中文：`src/i18n/locales/zh-cn.json`

4. **組件使用**
   ```tsx
   import ExploreFeatures from '@/components/ExploreFeatures';
   
   <ExploreFeatures currentFeature="chat" />
   ```

---

## 🔧 技術細節

### 檔案結構
```
src/
├── components/
│   └── ExploreFeatures.tsx        # 組件實作
├── lib/
│   └── featureRelations.ts       # 功能關係配置
└── i18n/
    └── locales/
        ├── zh-tw.json            # 繁體中文翻譯
        ├── en.json               # 英文翻譯
        └── zh-cn.json            # 簡體中文翻譯
```

### 關鍵函數

**`getRelatedFeatures(currentFeature, count)`**
- 功能：從相關功能中隨機選取指定數量的功能
- 參數：
  - `currentFeature`: 當前功能頁面的 key
  - `count`: 要選取的功能數量（預設為 3）
- 回傳：`FeatureConfig[]` 功能配置陣列

---

*最後更新：2024年*

