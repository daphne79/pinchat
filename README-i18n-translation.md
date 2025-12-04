# i18n 自動翻譯工具使用說明

## 功能

這個工具可以：
1. ✅ **檢查缺失的翻譯鍵** - 對比所有語言文件，找出缺失的翻譯
2. ✅ **自動翻譯** - 使用 OpenAI API 自動翻譯缺失的內容
3. ✅ **術語一致性** - 維護術語表（glossary）確保關鍵術語翻譯一致
4. ✅ **上下文感知** - 使用 GPT-4 進行自然、符合語境的翻譯（非硬翻）

## 使用方式

### 1. 檢查缺失的翻譯鍵

```bash
node scripts/translate-i18n.mjs --check
```

這會顯示所有語言對比英文的缺失翻譯百分比和缺失的鍵。

### 2. 自動翻譯（需要 OpenAI API Key）

```bash
# 設置 API Key
export OPENAI_API_KEY=your_api_key_here

# 翻譯到多個語言
node scripts/translate-i18n.mjs --from=en --to=zh-tw,zh-cn,ja,ko,pt-br

# 或翻譯到單一語言
node scripts/translate-i18n.mjs --from=en --to=zh-cn
```

### 3. 只報告缺失的鍵（不需要 API Key）

```bash
node scripts/translate-i18n.mjs --from=en --to=zh-tw,zh-cn
```

這會列出所有缺失的翻譯鍵，但不會自動翻譯。

## 術語表管理

術語表保存在 `scripts/i18n-glossary.json`，確保關鍵術語在所有語言中翻譯一致：

- `PinChat` - 產品名稱，保持不變
- `MAU` - Monthly Active Users，保持不變
- `BYOK` - Bring Your Own Key，保持不變
- `AI PinBot` - 產品功能名稱，保持不變

您可以手動編輯這個文件來添加或修改術語翻譯。

## 注意事項

1. **API 費用**：使用 OpenAI API 會產生費用，建議先檢查缺失的鍵再決定是否需要翻譯
2. **翻譯質量**：工具會跳過已經存在的翻譯，只翻譯缺失的部分
3. **自動保存**：翻譯過程中每 10 個鍵會自動保存一次，避免丟失進度
4. **速率限制**：工具會在每次 API 調用之間暫停 100ms，避免觸發速率限制

## 翻譯流程建議

1. 先運行檢查命令，了解缺失情況
2. 設置 OpenAI API Key（如果需要自動翻譯）
3. 運行翻譯命令，工具會自動翻譯並更新語言文件
4. 手動審核重要頁面的翻譯質量
5. 如果需要，手動調整術語表





