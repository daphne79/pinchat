# PinChat 設計規範指南

本文件整理首頁的設計規範，適用於 Features 和 Solutions 下的所有頁面。

## 1. 區塊左右 Margin

所有主要區塊都應使用以下響應式左右 margin：

```tsx
className="px-4 sm:px-6 md:px-8 lg:px-12"
```

**數值對應：**
- 手機：16px (`px-4`)
- 小螢幕：24px (`sm:px-6`)
- 中螢幕：32px (`md:px-8`)
- 大螢幕：48px (`lg:px-12`)

**適用區塊：**
- Hero Section
- Core Values Section
- Features Section
- CTA Section

---

## 2. Hero Section 規範

### 2.1 結構
```tsx
<section className="container mx-auto flex flex-col gap-6 py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
```

### 2.2 Headline (主標題)
```tsx
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-center leading-normal lg:leading-[1.2] max-w-4xl mx-auto"
```

**字體大小：**
- 手機：30px (`text-3xl`)
- 小螢幕：36px (`sm:text-4xl`)
- 中螢幕：48px (`md:text-5xl`)
- 大螢幕：60px (`lg:text-6xl`)
- 超大螢幕：72px (`xl:text-[72px]`)

**其他屬性：**
- `font-bold`：粗體
- `tracking-wide`：字距加寬
- `text-center`：置中對齊
- `leading-normal lg:leading-[1.2]`：行距（大螢幕 1.2 倍）
- `max-w-4xl mx-auto`：最大寬度限制，置中

### 2.3 Sub-headline (副標題)
```tsx
className="text-base text-muted-foreground text-center sm:text-lg max-w-4xl mx-auto"
```

**字體大小：**
- 手機：16px (`text-base`)
- 小螢幕以上：18px (`sm:text-lg`)

### 2.4 CTA Buttons
```tsx
<Button size="lg" className="text-base sm:text-lg">
```

**字體大小：**
- 手機：16px (`text-base`)
- 小螢幕以上：18px (`sm:text-lg`)

### 2.5 元素間距
- Section gap: `gap-6` (24px)

---

## 3. Core Values Section 規範

### 3.1 結構
```tsx
<section className="border-t py-16 px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="container mx-auto">
    <div className="mt-2 space-y-16 md:space-y-20">
```

### 3.2 標題
```tsx
className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]"
```

**字體大小：**
- 手機：24px (`text-2xl`)
- 小螢幕：30px (`sm:text-3xl`)
- 中螢幕：36px (`md:text-4xl`)
- 大螢幕：48px (`lg:text-[48px]`)

**其他屬性：**
- `font-semibold`：半粗體
- `tracking-wide`：字距加寬
- `leading-normal lg:leading-[1.2]`：行距（大螢幕 1.2 倍）

### 3.3 Icon
```tsx
className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-12 lg:w-12 text-primary mb-3 sm:mb-4 md:mb-5"
```

**Icon 大小：**
- 手機：24px (`h-6 w-6`)
- 小螢幕：28px (`sm:h-7 sm:w-7`)
- 中螢幕：36px (`md:h-9 md:w-9`)
- 大螢幕：48px (`lg:h-12 lg:w-12`)

**Icon 與標題間距：**
- 手機：12px (`mb-3`)
- 小螢幕：16px (`sm:mb-4`)
- 中螢幕以上：20px (`md:mb-5`)

**Icon 位置：** 標題上方，使用 `flex flex-col`

### 3.4 描述文字
```tsx
className="mt-4 text-base sm:text-lg text-muted-foreground"
```

**字體大小：**
- 手機：16px (`text-base`)
- 小螢幕以上：18px (`sm:text-lg`)

### 3.5 區塊間距
- 區塊之間：`space-y-16 md:space-y-20`
  - 手機：64px
  - 中螢幕以上：80px

---

## 4. Features Section 規範

### 4.1 結構
```tsx
<section className="container mx-auto py-16 px-4 sm:px-6 md:px-8 lg:px-12">
```

### 4.2 Section 標題
```tsx
className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]"
```

**字體大小：** 與 Core Values 標題相同

### 4.3 Section 副標題
```tsx
className="mt-2 text-base sm:text-lg text-muted-foreground"
```

**字體大小：** 與 Core Values 描述相同

### 4.4 Feature 項目標題
```tsx
className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
```

**字體大小：**
- 手機：18px (`text-lg`)
- 小螢幕：20px (`sm:text-xl`)
- 中螢幕：24px (`md:text-2xl`)
- 大螢幕：30px (`lg:text-3xl`)

### 4.5 Feature 項目描述
```tsx
className="mt-2 text-sm sm:text-base text-muted-foreground"
```

**字體大小：**
- 手機：14px (`text-sm`)
- 小螢幕以上：16px (`sm:text-base`)

---

## 5. CTA Section 規範

### 5.1 結構
```tsx
<section className="border-t bg-primary/5 py-16">
  <div className="container mx-auto text-center">
    <div className="mx-auto max-w-2xl">
```

### 5.2 標題
```tsx
className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2]"
```

**字體大小：** 與 Core Values 標題相同，但使用 `font-bold`

### 5.3 副標題
```tsx
className="mt-4 text-base sm:text-lg text-muted-foreground"
```

### 5.4 CTA Buttons
```tsx
<Button size="lg" className="min-w-[200px] text-base sm:text-lg">
```

**屬性：**
- `min-w-[200px]`：最小寬度 200px
- 字體大小：與其他按鈕相同

---

## 6. 通用規範

### 6.1 按鈕規範
- **大小：** `size="lg"`
- **文字大小：** `text-base sm:text-lg`
- **Hero 按鈕：** 不需要 `min-w-[200px]`
- **CTA 按鈕：** 需要 `min-w-[200px]`

### 6.2 文字顏色
- **標題：** 使用預設 `text-foreground`
- **描述/副標題：** 使用 `text-muted-foreground`

### 6.3 對齊方式
- **Hero：** 所有內容置中 (`text-center`)
- **Core Values：** 文字置左，圖片置中
- **Features：** 所有內容置中 (`text-center`)
- **CTA：** 所有內容置中 (`text-center`)

### 6.4 響應式斷點
- `sm:`：640px 以上
- `md:`：768px 以上
- `lg:`：1024px 以上
- `xl:`：1280px 以上

---

## 7. 應用範例

### Hero Section 範例
```tsx
<section className="container mx-auto flex flex-col gap-6 py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-center leading-normal lg:leading-[1.2] max-w-4xl mx-auto">
    Your Title
  </h1>
  <p className="text-base text-muted-foreground text-center sm:text-lg max-w-4xl mx-auto">
    Your subtitle
  </p>
  <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
    <Button size="lg" className="text-base sm:text-lg">
      Button Text
    </Button>
  </div>
</section>
```

### Section 標題範例
```tsx
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">
  Section Title
</h2>
```

### Feature 項目標題範例
```tsx
<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
  Feature Title
</h3>
```

---

## 8. 檢查清單

套用規範時，請確認：

- [ ] 所有主要區塊都有 `px-4 sm:px-6 md:px-8 lg:px-12`
- [ ] Hero headline 使用正確的字體大小和行距
- [ ] 所有 Section 標題使用 `text-2xl sm:text-3xl md:text-4xl lg:text-[48px]`
- [ ] 所有描述文字使用 `text-base sm:text-lg`
- [ ] 所有按鈕使用 `text-base sm:text-lg`
- [ ] Icon 大小與標題字體大小對應
- [ ] 行距設定正確（大標題使用 `leading-normal lg:leading-[1.2]`）
- [ ] 字距設定正確（大標題使用 `tracking-wide`）

