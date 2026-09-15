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
- `privacy.html`：隱私權說明（網站收集的資料有變動時要更新，例如拍貼機打開「存進我的房間」）
- `images/`：斑點狗圖片、`og.jpg`（LINE／FB 分享預覽圖）、從舊官網 feedo.com.tw 取來的照片（`cup-hand` 頭版、`foam-pour` 招牌奶蓋（IG 限動截圖裁掉文字）、`moby-sketch` 時間軸草圖、`shop-drawing` 來店插畫）
- `CNAME`：GitHub Pages 自訂網域
- `robots.txt`、`sitemap.xml`：給搜尋引擎

## 常改的地方
- 營業時間、公休：搜尋「來店資訊」，並同步修改 `<script type="application/ld+json">` 裡的 `openingHoursSpecification`
- 茶單精選價格：搜尋「茶單精選」
- 最新消息：搜尋「最新消息」，新的放最上面，保留最近 3～5 則
- 常見問題：搜尋「常見問題」。號碼牌規則要和 claim 網站、訂購／外送規則要和 order 網站同步修改
