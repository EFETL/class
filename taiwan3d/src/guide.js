// 老師教學指引與學生小任務
// GUIDES：每個分頁一張指引（對應課本、目標、流程、提問、迷思）
// MISSIONS：每個分頁的小任務；ev 是地圖上會觸發的事件名稱（見 main.js 的 mission()）

export const GUIDES = {
  terrain: {
    title: '⛰️ 地形', book: '國小社會 4 下〈家鄉的地形〉、5 上 2-1〈多樣化的地形〉；國中地理 1 上第 3 課〈臺灣的地形〉',
    goal: '認識五大地形（山地、丘陵、台地、盆地、平原）的特徵與分布；國中進一步理解板塊擠壓與地形剖面。',
    steps: [
      [3, '按「🗺️ 平面圖」，請學生說出臺灣中間偏東那一長條是什麼地形（山地）。'],
      [5, '回到「🎥 3D 斜看」，依序點五種地形，讓它們「浮起來」，比較位置與高低。'],
      [4, '點山峰看高度（玉山 3,952 公尺），用右側高度尺換算「公尺＝公里」。'],
      [5, '國中：開啟「📈 剖面圖」臺中→花蓮，沿剖面滑動，說出經過的地形。'],
      [5, '國中：播放「🌋 板塊運動」，說明臺灣為什麼多山、多地震。'],
    ],
    questions: [
      ['臺灣的山地主要在哪裡？', '中央偏東，南北排成一長條，面積最大。'],
      ['台地和平原都很平，差在哪裡？', '台地地勢較高、邊緣是陡坡；平原低平。'],
      ['為什麼桃園台地有很多埤塘？', '台地地勢高、不容易引河水灌溉，所以挖埤塘存水。'],
      ['臺北盆地為什麼人口多？', '地勢平坦、交通方便，是政治經濟中心。'],
      ['（國中）臺灣的山為什麼這麼高？', '菲律賓海板塊擠壓歐亞板塊，形成年輕的新褶曲山脈，到現在還在抬升。'],
    ],
    myths: [
      '「台地一定比丘陵高」→ 不一定，台地的特色是「頂部平坦」，不是高度。',
      '「盆地一定很低」→ 埔里盆地底部約 450 公尺，比很多丘陵還高。',
      '3D 地圖的高度有放大（×6），真實的山坡沒有這麼陡；可用「高度放大」滑桿調回 ×1 給學生看。',
    ],
  },
  rain: {
    title: '🌧️ 雨量', book: '國小社會 4 下〈家鄉的氣候〉；國中地理 1 上第 5 課〈臺灣的氣候〉',
    goal: '讀懂月雨量長條圖，知道臺灣的雨季（梅雨、颱風、東北季風）與南北差異；用淹水模擬比較地形高低。',
    steps: [
      [4, '選「高雄」，看 12 個月的長條圖：雨集中在哪幾個月？（夏雨冬乾）'],
      [4, '換成「基隆」或「淡水」比較：北部冬天也下雨（東北季風）。'],
      [3, '點不同月份，觀察地圖上的雲出現在哪裡，念出那個月的下雨原因。'],
      [4, '按「開始下雨」，看水位上升時平原、盆地、台地、丘陵、山地依序被淹。'],
    ],
    questions: [
      ['高雄哪幾個月雨最多？為什麼？', '6～8 月，梅雨、西南季風與颱風。'],
      ['為什麼基隆冬天也常下雨？', '冬天吹東北季風，從海上帶來水氣，迎風的北部、東北部多雨。'],
      ['水位到 100 公尺時，哪一種地形最先被淹？', '平原（大多不到 100 公尺）。'],
      ['（國中）一天下 200 毫米叫什麼？', '豪雨（80 大雨、200 豪雨、350 大豪雨、500 超大豪雨）。'],
    ],
    myths: [
      '「淹水模擬」是想像實驗，用來比較地形高低；真實的雨水會流進河川、回到大海，不會淹到山上。',
      '雨量長條圖的單位是「毫米（mm）」，不是公分。',
      '標「補充」的城市是氣象署平均值的約略數字；標「課本」的是課本表格。',
    ],
  },
  ocean: {
    title: '🌊 海洋', book: '國中地理 1 上第 4 課〈臺灣的海域〉',
    goal: '認識臺灣四周的海域與洋流；知道暖流、寒流對漁業與氣候的影響；認識離島的成因。',
    steps: [
      [3, '依序點太平洋、巴士海峽、臺灣海峽、東海，說出它們在臺灣的哪一邊。'],
      [4, '切「❄️ 冬季」，點黑潮與中國沿岸流，比較暖流和寒流的方向。'],
      [3, '切「☀️ 夏季」，看南海季風流出現、中國沿岸流消失。'],
      [5, '點離島（龜山島、基隆嶼、大坵島、蘭嶼），說出它們是火山島、大陸島還是珊瑚礁島。'],
    ],
    questions: [
      ['黑潮往哪個方向流？是暖流還是寒流？', '沿臺灣東部往北流，是暖流。'],
      ['為什麼東部可以賞鯨、捕旗魚？', '黑潮帶來溫暖海水與豐富的遠洋魚類。'],
      ['冬天澎湖的魚為什麼可能被凍傷？', '中國沿岸流（冷流）南下，太冷時造成寒害。'],
      ['澎湖、金門、東沙分別是什麼島？', '澎湖：火山島（玄武岩）；金門：大陸島；東沙：珊瑚礁島。'],
    ],
    myths: [
      '箭頭只表示大致方向，真實的洋流會隨季節、天氣變動。',
      '「寒流」在這裡是指冷的洋流，和天氣預報的「寒流來襲」不同。',
    ],
  },
  tribes: {
    title: '👥 族群', book: '國小社會（家鄉的族群與文化）；國中歷史、公民相關單元',
    goal: '認識 17 個原住民族的分布與文化、祭典的時序，以及客家族群的分布；學會尊重多元文化。',
    steps: [
      [4, '看 17 族的分布顏色：哪些族住高山？哪些族住平原或海島？'],
      [5, '用「📅 祭典月曆」點本月，看哪些族正在舉行祭典；點一個祭典看說明。'],
      [3, '介紹 2026 年新核定的第 17 族「西拉雅族」，討論「正名」的意義。'],
      [3, '切到「🏮 客家」，看客家人口比率最高的縣市在哪裡。'],
    ],
    questions: [
      ['哪一族住在海島上？有什麼特別的文化？', '雅美族（達悟族），拼板舟、飛魚祭、地下屋。'],
      ['阿美族的豐年祭大約在幾月？', '7～8 月。'],
      ['西拉雅族傳統住在哪裡？', '嘉南平原到恆春半島。'],
      ['客家人口比率最高的是哪個縣？', '新竹縣（約 67.8%），其次是苗栗縣。'],
    ],
    myths: [
      '彩色分布是「傳統主要分布地區」的示意，現在很多族人住在城市。',
      '神聖祭典（🕯️）不是表演，觀禮要遵守部落規範，不要用「好玩」來形容。',
      '人物是剪影，不代表各族真實的服飾；可以搭配原民會或原文會的影片介紹服飾。',
      '祭典日期每年、每個部落不同，請以原民會與部落公告為準。',
    ],
  },
  life: {
    title: '🦌 生物', book: '國小自然與社會（臺灣的生物、保育）；國中地理 1 上（氣候與植物垂直分布）',
    goal: '理解「海拔越高越冷，植物跟著改變」的垂直分布；認識臺灣特有種與保育類動物。',
    steps: [
      [4, '開著「植物垂直分布」顏色，從海邊往玉山看，說出經過幾種森林。'],
      [5, '點臺灣黑熊、帝雉、櫻花鉤吻鮭：牠們住在多高的地方？'],
      [3, '切到「🐬 海洋」，點飛旋海豚、飛魚，連結黑潮。'],
      [3, '討論：石虎、穿山甲面臨什麼威脅？我們能做什麼？'],
    ],
    questions: [
      ['為什麼玉山頂附近只有矮小的玉山圓柏？', '風大、氣溫低，大樹長不起來（高山寒原）。'],
      ['櫻花鉤吻鮭為什麼只住在七家灣溪？', '牠需要低溫清澈的溪水，是冰河時期留下的魚。'],
      ['黑面琵鷺什麼時候來臺灣？', '冬天（約 10 月到隔年 4 月）到臺南七股度冬。'],
      ['石虎最大的威脅是什麼？', '路殺（被車撞）和棲地開發。'],
    ],
    myths: [
      '動物插圖是示意，位置是「常見地點」，不代表只住在那一點。',
      '植物垂直分布的高度界線各版本課本略有不同，以學生用的課本為準。',
    ],
  },
  spots: {
    title: '📍 景點', book: '國小社會（家鄉的特色）；國中地理 1 上第 3 課',
    goal: '把景點和地形連起來：知道每一種地形附近有哪些代表性的地方。',
    steps: [
      [5, '每組抽一種地形，在清單中找出 2 個景點，並說明為什麼它屬於這種地形。'],
      [5, '各組上台點地圖分享，其他組補充。'],
    ],
    questions: [
      ['月世界屬於哪一種地形？為什麼長成那樣？', '丘陵；泥岩被雨水沖刷成惡地。'],
      ['清水斷崖是什麼海岸？', '斷層海岸，山直接插進太平洋。'],
      ['臺灣地理中心碑在哪個盆地？', '埔里盆地。'],
    ],
    myths: ['照片來自 Wikimedia Commons（自由授權），作者與授權寫在照片下方。'],
  },
};

export const MISSIONS = {
  terrain: [
    { q: '找到臺灣最高的山，看它有幾公尺', ev: 'peak:玉山主峰' },
    { q: '讓「盆地」浮起來', ev: 'float:basin' },
    { q: '讓「台地」浮起來，看看它們在西部哪裡', ev: 'float:tableland' },
    { q: '打開一條地形剖面圖', ev: 'profile' },
    { q: '看一次板塊擠壓動畫', ev: 'plates' },
  ],
  rain: [
    { q: '找出高雄雨最多的月份（點那個月）', ev: 'month:8' },
    { q: '換一個北部城市（臺北、基隆、淡水、宜蘭）', ev: 'city:N' },
    { q: '讓水位超過 1,000 公尺，看看只剩哪種地形', ev: 'flood:1000' },
  ],
  ocean: [
    { q: '點「黑潮」看它往哪裡流', ev: 'current:kuroshio' },
    { q: '切到冬季，找出冷的洋流', ev: 'current:china' },
    { q: '點一個火山島（龜山島、綠島或蘭嶼）', ev: 'volcanic' },
  ],
  tribes: [
    { q: '找出住在海島上的原住民族', ev: 'tribe:yami' },
    { q: '找出 2026 年新核定的第 17 族', ev: 'tribe:siraya' },
    { q: '用祭典月曆看 8 月有哪些祭典', ev: 'festmonth:8' },
    { q: '切到「客家」看客家分布', ev: 'hakka' },
  ],
  life: [
    { q: '找到胸前有白色 V 字的動物', ev: 'creature:bear' },
    { q: '找到只住在七家灣溪的國寶魚', ev: 'creature:salmon' },
    { q: '點一種海洋生物', ev: 'creature:sea' },
  ],
  spots: [
    { q: '找一個「台地」上的景點', ev: 'spot:tableland' },
    { q: '找一個「盆地」裡的景點', ev: 'spot:basin' },
    { q: '找一個「海岸」景點', ev: 'spot:coast' },
  ],
};

export const GUIDE_CSS = `
.guidebtn{border:0;background:#fff3cd;color:#7a5200;border-radius:999px;padding:6px 12px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap}
#guide{position:fixed;inset:0;background:#0006;z-index:40;display:none;align-items:flex-start;justify-content:center;padding:60px 12px 12px}
#guide.show{display:flex}
#guide .gbox{background:#fff;border-radius:18px;max-width:760px;width:100%;max-height:100%;overflow:auto;padding:18px 22px;box-shadow:0 10px 40px #0005;position:relative}
#guide .gx{position:sticky;top:0;float:right;border:0;background:#eee;border-radius:50%;width:34px;height:34px;font-size:18px;cursor:pointer}
#guide .gtabs{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}
#guide .gtabs button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px;font:inherit;font-size:14px;cursor:pointer}
#guide .gtabs button.on{background:#7a5200;color:#fff;border-color:#7a5200}
#guide h2{margin:4px 0 8px;font-size:22px}
#guide h4{margin:14px 0 6px;color:#7a5200}
#guide .gbook{background:#f5f0e6;border-radius:10px;padding:8px 12px;font-size:14px}
#guide ol{padding-left:20px;margin:4px 0}#guide ol li{margin:5px 0;line-height:1.55}
#guide .min{display:inline-block;background:#e3f2fd;color:#0d47a1;border-radius:6px;padding:0 6px;font-size:12px;margin-right:6px;font-weight:700}
#guide details{border:1px solid var(--line);border-radius:10px;padding:6px 10px;margin:5px 0}
#guide summary{cursor:pointer;font-weight:700}
#guide details p{margin:6px 0 2px;color:#2e7d32}
#guide .myth{background:#fff8e1;border-left:4px solid #f9a825;padding:6px 10px;border-radius:6px;margin:5px 0;font-size:14.5px;line-height:1.55}
#guide .gfoot{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.mission{background:#f1f8e9;border:1px solid #c5e1a5;border-radius:12px;padding:8px 10px;margin:4px 0 10px}
.mission summary{cursor:pointer;font-weight:700;color:#33691e}
.mission ul{list-style:none;padding:0;margin:6px 0 0}
.mission li{padding:4px 0;font-size:14px;display:flex;gap:6px;align-items:flex-start}
.mission li.done{color:#689f38;text-decoration:line-through}
.mission .reset{border:0;background:none;color:#888;font:inherit;font-size:12px;cursor:pointer;text-decoration:underline}
#toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%) translateY(20px);opacity:0;transition:.3s;background:#33691e;color:#fff;border-radius:999px;padding:10px 18px;font-weight:700;z-index:50;pointer-events:none}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
body.present #panel,body.present .padbar,body.present header.top .seg{display:none!important}
body.present .lb.lf,body.present .lb.island,body.present .lb.tribe,body.present .lb.sea{font-size:20px!important}
body.present .lb.spot .nm,body.present .lb.peak,body.present .lb.creature .crn{font-size:16px!important}
body.present #info{font-size:19px;width:420px}
@media (max-width:900px){#guide .gbox{padding:14px}#guide ol li,#guide .myth,#guide .gbook,.mission li,#guide .gtabs button{font-size:16px!important}.guidebtn{font-size:14px;padding:5px 9px}}
@media print{#guide{position:static;background:none;padding:0;display:block}#guide .gfoot,#guide .gx,#guide .gtabs{display:none}}
`;
