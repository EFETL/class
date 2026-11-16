# 臺灣 3D 地形教室｜專案說明與決策紀錄

給國小 3、4 年級與國中地理用的互動 3D 地圖。這份文件記錄「內容在哪裡、怎麼改、已經決定了什麼」，
下次（不論是老師自己或新的 Claude 對話）打開這個 repo，先讀這份就能接著做。

## 網址與部署
| 位置 | 說明 |
|---|---|
| https://teaching.efetl.com/geography/taiwan3d/ | **正式上課用**（repo：`EFETL/teaching` 的 `geography/taiwan3d/`）；有 teaching 共用的密碼鎖 |
| 本資料夾 `class/taiwan3d/` | 原始碼與素材的主要存放處（分支 `claude/relaxed-bell-zenacd`，尚未合併到 main） |
| quiz.efetl.com（EFETL.github.io） | **不放**這張地圖（老師決定只放 teaching） |

部署方式：改 `src/` 後執行 `tools/build-taiwan3d.sh` 產生 `app.js`，再把 `app.js`、`index.html` 與素材資料夾複製到
`teaching/geography/taiwan3d/`。**teaching 那份的 index.html 要保留密碼鎖區塊**（從 `geography/index.html` 複製 `#pw-gate` 的 style＋div＋script，接在 `<script src="app.js?v=…">` 後面）。

## 檔案結構
- `index.html`：頁面、面板、樣式（手機 ≤900px 另有樣式；手機文字至少 16px）
- `src/main.js`：3D 場景、上色、標籤、各分頁、雨量、淹水、族群、生物、任務、教學指引
- `src/features.js`：地形浮起、洋流、剖面圖、板塊動畫、縣市界
- `src/data.js`：**大部分內容都在這裡**（地形、山脈、外島、景點、雨量、17 族、祭典、客家、生物、植物垂直分布）
- `src/guide.js`：老師教學指引與學生小任務
- `src/festivals.js`、`src/creatures.js`：族群圖卡、動物動畫
- `photos/`、`creatures/`：Wikimedia Commons 自由授權照片（作者與授權在 `src/photos.js`、`src/creaturePhotos.js`）
- `animals/`：老師用 Gemini 畫的 22 隻動物插圖（已去背，面向右）
- `tribes/`：老師用 Gemini 畫的 17 族插圖（畫面註明「AI 繪製，僅供示意」）
- `videos/`：教學影片腳本、錄製工具、成品 MP4（見下）

## 已經決定的事（不要隨意更動）
- **國小／國中切換維持原狀**：只影響說明卡文字（老師指定不要動）。
- **族群**：17 族（含 2026-07-30 核定的西拉雅族）；原住民族圖片用老師的 Gemini 插圖，不用剪影或卡通人物；神聖祭典（矮靈祭、火神祭、夜祭、聖貝祭）不做熱鬧畫面。
- **客家**：用客委會 110 年調查（新竹縣 67.8%、苗栗縣 62.5%、桃園市 39.9%、花蓮縣 34.2%、新竹市 30.3%；全國 466.9 萬人、19.8%）。
- **射耳祭拼音**用 Malahodaan（老師指定）。
- **手機面板**：選項（分頁、切換鈕、按鈕）一直顯示，說明與長清單收進可展開區塊，手機預設收起。
- **頁尾**只在這頁顯示「Kevin EFETL 製作」；上方按鈕寫中文「教學指引」，不用圖示。
- **板塊動畫**：從海面下浮出、高度放大 ×10、側面視角；動畫時隱藏景點等標籤。
- **教學影片**：中文旁白＋中文字幕、0.7 倍語速（微軟 zh-TW-HsiaoChenNeural，-30%）、字幕夠大（1080p 約 52px）；
  **每段約 20～30 秒、各自獨立錄製**（不要錄一整集再切）；老師自己上傳 YouTube 播放清單。

## 資料來源與待核對
- 課本：老師 Google 雲端硬碟（國中地理 1 上第 3～5 課、國小社會 4 下、5 上）。
- 雨量：淡水、高雄、恆春、玉山為課本表格；臺北、基隆、宜蘭、臺中、花蓮、澎湖為氣象署平均約略值，**待核對**。
- 祭典月份：部分依原文會與一般說法補上，標「依部落而異」者**待老師核對**。
- 地形高度是依課本山脈與地形區示意建模，不是精確 DEM。

## 教學影片（國小版）
- 腳本：`videos/國小版腳本.md`；分段設定：`videos/clips/*.json`（第 2～11 集，34 段）；第 1 集見 `videos/episodes/ep01.json`。
- 成品：`videos/mp4/`（39 段，檔名＝播放順序＋標題）。
- 重錄一段：`python3 videos/tools/make_episode.py "videos/clips/2-2 山地.json" 輸出資料夾`
  （逐格錄製：凍結網頁時間、每格截圖，畫面與旁白保證同步）；全部重錄：`videos/tools/run_all.sh 輸出資料夾`。
- 需要的網路：`speech.platform.bing.com`（語音）；edge-tts 要加 `--proxy "$HTTPS_PROXY"`。

## 待辦／可以做的事
- 老師上傳 YouTube 後，做一頁式影片清單網站。
- 國中版影片（尚未做）。
- 讓朋友嵌入：teaching 有密碼鎖，若要給外部嵌入需另放一份無密碼公開版（老師尚未決定）。
- `class` 分支尚未合併到 main。
- 「4-3 地震」影片僅 12 秒，可考慮加長。
