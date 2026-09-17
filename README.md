# feedo-home

FEEDO MUSEUM 官網首頁（feedomuseum.com），報紙頭版「The Feedo Times」風格，作為各子網站的入口。

| 子網站 | 用途 |
|---|---|
| order.feedomuseum.com | 線上點單、外送、公司揪團、風味選茶 |
| claim.feedomuseum.com | 每日杯套配給登記（LINE 登入） |
| pet.feedomuseum.com | FEEDO PRESS 收藏房間（LINE 登入） |
| shop.feedomuseum.com | 限量商品 |
| photobooth.feedomuseum.com | 線上拍貼機 |

## 檔案
網站分成四頁，共用同一套樣式與腳本：
- `index.html`：首頁，The Feedo Times 頭版。放最新消息、功能入口、台灣烏龍簡介、代表茶款、品牌理念摘要、Moby 摘要、5 題常見問題與來店資訊
- `story.html`：品牌故事完整版（名稱由來、台灣烏龍、時間溫度與水、奶蓋、設計轉換、FEEDO MUSEUM、Moby 與時間軸）
- `faq.html`：完整常見問題（19 題、7 個分類）
- `privacy.html`：隱私權說明
- `404.html`：找不到頁面時顯示
- `feedo.css`：四頁共用樣式（改樣式只改這裡，記得同步改檔名後面的 `?v=` 版本號）
- `feedo.js`：共用腳本，報頭日期與頁尾年份
- `images/`：斑點狗圖片、`og.jpg`（LINE／FB 分享預覽圖）、從舊官網 feedo.com.tw 取來的照片（`cup-hand` 頭版、`foam-pour` 招牌奶蓋（IG 限動截圖裁掉文字）、`moby-sketch` 時間軸草圖、`shop-drawing` 來店插畫）
- `CNAME`：GitHub Pages 自訂網域
- `robots.txt`、`sitemap.xml`：給搜尋引擎

## 常改的地方
- 營業時間、公休：搜尋「來店資訊」，並同步修改 `<script type="application/ld+json">` 裡的 `openingHoursSpecification`
- 茶單精選價格：搜尋「茶單精選」
- 最新消息：搜尋「最新消息」，新的放最上面，保留最近 3～5 則
- 常見問題：首頁只放 5 題（搜尋「常見問題」），完整版在 `faq.html`。兩邊都要改，號碼牌規則要和 claim 網站、訂購／外送規則要和 order 網站同步
- 品牌故事與 Moby 完整時間軸：改本站的 `story.html`（訂購站的 `story.html` 是「風味選茶」，不是品牌故事）
- 限量商店完售狀態：首頁「今日版面」的卡片文字要跟 shop 網站目前狀態一致（搜尋 `ed-flag`）


## 視覺
兩站共用一套報紙視覺（首頁的 `feedo.css` 與訂購站的 `style.css` 各自維護，但值要對齊）：
- 深咖啡桌面 `#2a261d` 上的一張紙 `#e9e2cf`，紙張噪點與陰影在 `.gazette`
- 字體 Playfair Display（報頭與英文標題）／Old Standard TT・Noto Serif TC（內文）／Special Elite（英文小標與數據）
- 紅色 `#6e2415`
- 選單是例外：米底、15px 中文、手機三欄格線，兩站要一致
