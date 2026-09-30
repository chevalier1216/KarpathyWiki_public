# Public Knowledge Wiki

這是從私人 Obsidian / Git 知識庫篩選出的**公開閱讀版**。

## 目的

公開展示可重用的產品工程、GitHub 治理、AI 工作流與遊戲開發經驗。這個 repository 不是私人知識庫的完整鏡像，也不是原始資料備份。

## 發布原則

- 只發布經明確挑選的整理頁。
- 不同步私人原始筆記、帳號資料、Token、API Key、本機絕對路徑或私人服務資訊。
- 所有修改走 Branch → PR → 驗證 → Squash Merge。
- 公開版是 downstream mirror；完整私人知識庫仍是內部來源。

網站入口：GitHub Pages 啟用後使用 `https://chevalier1216.github.io/KarpathyWiki_public/`。

## 顯示設定

- 網站預設使用低亮度暗色主題，主要樣式集中在 `styles.css`。
- 網站名稱、導覽名稱、首頁主標題、分類標題、卡片名稱與文章主標題集中在 `site-config.js`。
- 只要改 `site-config.js` 的文字即可重新命名，不需要逐頁修改 HTML，也不會改變文章 URL。

例如：

```js
sections: {
  workflows: "我的工作方法",
  projects: "實作紀錄"
}
```
