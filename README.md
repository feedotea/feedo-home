# feedo-home

FEEDO MUSEUM 官網首頁（feedomuseum.com），報紙頭版「The Feedo Times」風格，作為各子網站的入口。

| 子網站 | 用途 |
|---|---|
| order.feedomuseum.com | 線上點單、外送、公司揪團、品牌故事與風味選茶 |
| claim.feedomuseum.com | 每日杯套配給登記（LINE 登入） |
| pet.feedomuseum.com | FEEDO PRESS 收藏房間（LINE 登入） |
| shop.feedomuseum.com | 限量商品 |
| photobooth.feedomuseum.com | 線上拍貼機 |

## 檔案
- `index.html`：首頁（樣式寫在同一個檔案裡）
- `404.html`：找不到頁面時顯示
- `images/`：吉祥物圖片、`og.jpg`（LINE／FB 分享預覽圖）
- `CNAME`：GitHub Pages 自訂網域
- `robots.txt`、`sitemap.xml`：給搜尋引擎

## 常改的地方
- 營業時間、公休：搜尋「來店資訊」，並同步修改 `<script type="application/ld+json">` 裡的 `openingHoursSpecification`
- 茶單精選價格：搜尋「茶單精選」
