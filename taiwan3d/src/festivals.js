// 原住民族祭典的「剪影動畫」：只用各族代表色的簡單人形，不畫服飾花紋（避免畫錯）
// 動畫全部用 CSS 完成，地圖不必一直重畫，手機比較省電。

// 卡通人物：有臉、頭髮、皮膚色的手腳，衣服用各族代表色（不畫服飾花紋）
const SKIN = '#f1c27d', HAIR = '#2b1d14', PANTS = '#4e342e';
function fig(pose, c) {
  const head = `<circle cx="10" cy="5.5" r="4.6" fill="${SKIN}"/><path d="M5.4 5 Q6 0 10 0.6 Q14.2 0.4 14.6 5 Q12.5 2.6 10 2.8 Q7.5 2.6 5.4 5 Z" fill="${HAIR}"/>`
    + `<circle cx="8.3" cy="6" r=".65" fill="#222"/><circle cx="11.7" cy="6" r=".65" fill="#222"/><path d="M8.4 7.9 Q10 9.2 11.6 7.9" stroke="#a0522d" stroke-width=".7" fill="none" stroke-linecap="round"/>`
    + `<circle cx="7.2" cy="7.6" r=".8" fill="#f48fb1" opacity=".6"/><circle cx="12.8" cy="7.6" r=".8" fill="#f48fb1" opacity=".6"/>`;
  const body = `<path d="M5.2 11 Q10 9 14.8 11 L15.8 24 Q10 25.5 4.2 24 Z" fill="${c}"/>`;
  const legs = `<path d="M8 24 L7 37.5 M12 24 L13 37.5" stroke="${PANTS}" stroke-width="3.2" stroke-linecap="round" fill="none"/><path d="M5.4 38 L8 38 M12.2 38 L14.8 38" stroke="#222" stroke-width="2" stroke-linecap="round"/>`;
  const A = (d) => `<path d="${d}" stroke="${SKIN}" stroke-width="2.8" stroke-linecap="round" fill="none"/>`;
  const arms = {
    dance: A('M6 13 L0.5 18 M14 13 L19.5 18'),
    up: A('M6 12.5 L2.5 3.5 M14 12.5 L17.5 3.5'),
    down: A('M6 13 L4.5 22 M14 13 L15.5 22'),
    bow: A('M14 13 L19 12.5 M6 13 L3 14') + `<path d="M18 3 Q25 12 18 21" stroke="#6d4c41" stroke-width="1.8" fill="none"/><path d="M18 3 L18 21" stroke="#555" stroke-width=".6"/>`,
    pole: A('M14 12.5 L16 6 M6 13 L13 9') + `<path d="M18 -14 L10 30" stroke="#8d6e63" stroke-width="1.8"/>`,
    pestle: A('M14 12.5 L16.5 11 M14 14.5 L16.5 13') + `<path d="M17 0 L17 30" stroke="#8d6e63" stroke-width="3" stroke-linecap="round"/>`,
    carry: A('M14 13 L15.5 22 M6 13 L4 20') + `<path d="M1 10 L6.5 10 L6 21 L1.5 21 Z" fill="#a1887f" stroke="#6d4c41" stroke-width=".6"/>`,
    torch: A('M14 13 L16 6 M6 13 L4.5 22') + `<path d="M16 6 L16.5 -2" stroke="#6d4c41" stroke-width="2"/><circle class="flame" cx="16.5" cy="-4" r="2.6" fill="#ffb300"/>`,
  }[pose] || '';
  return `<svg class="fg" viewBox="0 -16 20 56" width="22" height="60">${head}${legs}${body}${arms}</svg>`;
}
const seated = (c) => `<svg class="fg" viewBox="0 0 20 26" width="18" height="24"><circle cx="10" cy="5" r="4.2" fill="${SKIN}"/><path d="M6 4.6 Q7 0.6 10 1 Q13.4 0.6 14 4.6 Q12 2.6 10 2.8 Q8 2.6 6 4.6 Z" fill="${HAIR}"/><circle cx="8.6" cy="5.4" r=".6" fill="#222"/><circle cx="11.4" cy="5.4" r=".6" fill="#222"/><path d="M6 10 Q10 8.4 14 10 L14.5 20 L5.5 20 Z" fill="${c}"/><path class="oar" d="M10 13 L20 24" stroke="#8d6e63" stroke-width="2.6" stroke-linecap="round"/></svg>`;
const fish = `<svg class="fish" viewBox="0 0 20 10" width="16" height="8"><path d="M1 5 Q8 -1 15 5 Q8 11 1 5 Z M15 5 L19 1 L19 9 Z M5 4 L11 0 L10 5 Z" fill="#4fc3f7"/></svg>`;

export function sceneHTML(a, c, caption, sacred) {
  let inner = '';
  if (a === 'dance') for (let k = 0; k < 8; k++) inner += `<span class="orb" style="animation-delay:${-k * 0.75}s">${fig('dance', c)}</span>`;
  else if (a === 'boat') inner = `<div class="sea"></div><div class="boat">${seated(c)}${seated(c)}${seated(c)}<svg class="hull" viewBox="0 0 80 18" width="80" height="18"><path d="M0 2 Q40 22 80 2 Q78 12 40 16 Q2 12 0 2 Z" fill="${c}"/><path d="M0 2 L-3 -8 M80 2 L83 -8" stroke="${c}" stroke-width="2.4"/></svg></div>${[0, 1, 2].map(k => `<span class="jump" style="animation-delay:${k * 1.1}s">${fish}</span>`).join('')}`;
  else if (a === 'archer') inner = `<span class="st" style="left:14px">${fig('bow', c)}</span><span class="arrow"></span><span class="target"></span>`;
  else if (a === 'pole') inner = `<span class="st" style="left:24px">${fig('pole', c)}</span><span class="st" style="left:56px">${fig('up', c)}</span><span class="ball"></span>`;
  else if (a === 'walk') inner = [0, 1, 2].map(k => `<span class="walker" style="animation-delay:${-k * 1.3}s">${fig('down', c)}</span>`).join('') + '<span class="tree"></span>';
  else if (a === 'solemn') inner = `<div class="night"></div>` + [0, 1, 2, 3, 4].map(k => `<span class="st sway" style="left:${8 + k * 18}px;animation-delay:${-k * 0.6}s">${fig(k === 2 ? 'torch' : 'dance', c)}</span>`).join('');
  else if (a === 'pound') inner = [0, 1].map(k => `<span class="st pounder" style="left:${22 + k * 34}px;animation-delay:${k * 0.45}s">${fig('pestle', c)}</span>`).join('') + '<span class="mortar"></span>';
  else if (a === 'sow') inner = `<span class="st bend" style="left:30px">${fig('down', c)}</span>${[0, 1, 2, 3].map(k => `<span class="seed" style="left:${44 + k * 6}px;animation-delay:${k * 0.35}s"></span>`).join('')}<span class="soil"></span>`;
  else if (a === 'carry') inner = `<span class="carrier">${fig('carry', c)}</span><span class="field"></span>`;
  else inner = [0, 1, 2, 3, 4].map(k => `<span class="st bob" style="left:${6 + k * 19}px;animation-delay:${-k * 0.4}s">${fig(k % 2 ? 'up' : 'down', c)}</span>`).join('') + '<span class="hut"></span>';
  return `<div class="scene sc-${a}${sacred ? ' sacred' : ''}">${inner}</div><div class="sccap">${sacred ? '🕯️ ' : ''}${caption}</div>`;
}

export const FEST_CSS = `
.lb.fest .tpic{width:132px;height:99px;border-radius:14px;overflow:hidden;border:3px solid;box-shadow:0 3px 10px #0004;background:#eee}
.lb.fest .tpic img{width:100%;height:100%;object-fit:cover;animation:kb 12s ease-in-out infinite alternate}
@keyframes kb{from{transform:scale(1)}to{transform:scale(1.15) translate(-3%,-2%)}}
.lb.fest{pointer-events:none}
.tribe-list button{grid-template-columns:44px 1fr!important}
.tribe-list .tthumb{grid-row:span 2;width:44px;height:33px;object-fit:cover;border-radius:6px;border:2px solid}
.lb.fest{transform:translate(-50%,-112%);display:flex;flex-direction:column;align-items:center;pointer-events:none}
.lb.fest .scene{position:relative;width:120px;height:72px;border-radius:14px;background:linear-gradient(#e3f4ff 0 70%,#c5e1a5 70%);box-shadow:0 2px 8px #0003;overflow:hidden}
.lb.fest .sccap{margin-top:3px;background:#fff;border-radius:8px;padding:1px 7px;font-size:12px;font-weight:700;box-shadow:0 1px 4px #0002;white-space:nowrap}
.scene .st,.scene .orb,.scene .walker,.scene .carrier,.scene .jump{position:absolute;bottom:4px}
.sc-dance .orb{left:45px;animation:orbit 6s linear infinite}
@keyframes orbit{0%{transform:translate(34px,-8px) scale(.72);z-index:1}25%{transform:translate(0,-2px) scale(1);z-index:3}50%{transform:translate(-34px,-8px) scale(.72);z-index:1}75%{transform:translate(0,-15px) scale(.6);z-index:0;opacity:.7}100%{transform:translate(34px,-8px) scale(.72);z-index:1}}
.sc-boat .sea{position:absolute;left:0;right:0;bottom:0;height:24px;background:#4aa3df}
.sc-boat{background:linear-gradient(#e3f4ff,#e3f4ff)!important}
.sc-boat .boat{position:absolute;left:14px;bottom:10px;width:82px;height:34px;animation:bob 2.4s ease-in-out infinite}
.sc-boat .boat .fg{position:relative;top:4px;margin-left:6px}
.sc-boat .hull{position:absolute;left:0;bottom:0}
.sc-boat .oar{transform-origin:10px 13px;animation:row 1.2s ease-in-out infinite}
@keyframes row{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(22deg)}}
@keyframes bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-3px) rotate(2deg)}}
.sc-boat .jump{left:90px;bottom:14px;opacity:0;animation:leap 3.3s ease-in-out infinite}
@keyframes leap{0%{transform:translate(0,0) rotate(-30deg);opacity:0}10%{opacity:1}50%{transform:translate(-26px,-30px) rotate(0)}90%{opacity:1}100%{transform:translate(-52px,0) rotate(30deg);opacity:0}}
.sc-archer .arrow{position:absolute;left:36px;top:30px;width:16px;height:2px;background:#333;animation:shoot 1.8s ease-in infinite}
.sc-archer .target{position:absolute;right:8px;top:20px;width:20px;height:20px;border-radius:50%;background:radial-gradient(#d32f2f 30%,#fff 31% 55%,#d32f2f 56%)}
@keyframes shoot{0%,15%{transform:translateX(0);opacity:1}70%{transform:translateX(46px);opacity:1}100%{transform:translateX(46px);opacity:0}}
.sc-pole .ball{position:absolute;left:30px;top:6px;width:9px;height:9px;border-radius:50%;background:#795548;animation:toss 2s ease-in-out infinite}
@keyframes toss{0%,100%{transform:translate(28px,30px)}50%{transform:translate(0,0)}}
.sc-pole .st:first-child{animation:jab 2s ease-in-out infinite}
@keyframes jab{0%,40%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.sc-walk .walker{left:0;animation:march 4s linear infinite}
@keyframes march{0%{transform:translateX(-10px) translateY(0)}25%{transform:translateX(18px) translateY(-2px)}50%{transform:translateX(46px) translateY(0)}75%{transform:translateX(74px) translateY(-2px)}100%{transform:translateX(102px) translateY(0)}}
.sc-walk .tree{position:absolute;right:4px;bottom:4px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:26px solid #2e7d32}
.sacred .night,.sc-solemn .night{position:absolute;inset:0;background:linear-gradient(#ffe0b2 0 70%,#d7ccc8 70%)}
.sc-solemn .sway{animation:sway 3s ease-in-out infinite}
@keyframes sway{0%,100%{transform:translateX(-1.5px)}50%{transform:translateX(1.5px)}}
.sc-solemn .flame{animation:flick .6s ease-in-out infinite alternate}
@keyframes flick{from{opacity:.6}to{opacity:1}}
.sc-solemn .fg{filter:none}
.sc-pound .pounder svg{animation:pound .9s ease-in-out infinite}
.sc-pound .pounder:nth-child(2) svg{animation-delay:.45s}
@keyframes pound{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.sc-pound .mortar{position:absolute;left:44px;bottom:4px;width:16px;height:14px;background:#6d4c41;border-radius:3px 3px 6px 6px}
.sc-sow .bend svg{transform-origin:10px 24px;animation:bend 2s ease-in-out infinite}
@keyframes bend{0%,100%{transform:rotate(0)}50%{transform:rotate(28deg)}}
.sc-sow .seed{position:absolute;top:30px;width:4px;height:4px;border-radius:50%;background:#f9a825;animation:fall 1.4s ease-in infinite}
@keyframes fall{0%{transform:translateY(0);opacity:1}100%{transform:translateY(24px);opacity:0}}
.sc-sow .soil,.sc-carry .field{position:absolute;left:0;right:0;bottom:0;height:6px;background:#8d6e63}
.sc-carry .field{background:repeating-linear-gradient(90deg,#c0a050 0 4px,#9ccc65 4px 8px)}
.sc-carry .carrier{left:0;animation:carry 6s linear infinite}
@keyframes carry{0%{transform:translateX(4px) scaleX(1)}48%{transform:translateX(84px) scaleX(1)}50%{transform:translateX(84px) scaleX(-1)}98%{transform:translateX(4px) scaleX(-1)}100%{transform:translateX(4px) scaleX(1)}}
.sc-carry .carrier svg{animation:step .5s ease-in-out infinite}
@keyframes step{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.sc-gather .bob{animation:bobme 1.6s ease-in-out infinite}
@keyframes bobme{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.sc-gather .hut{position:absolute;right:2px;bottom:4px;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:16px solid #6d4c41}
.month-strip{display:grid;grid-template-columns:repeat(6,1fr);gap:4px;margin:6px 0}
.month-strip button{border:1px solid var(--line);background:#fff;border-radius:8px;padding:5px 0;font:inherit;font-size:13px;cursor:pointer;position:relative}
.month-strip button.on{background:#8e24aa;color:#fff;border-color:#8e24aa}
.month-strip button.now::after{content:"";position:absolute;right:3px;top:3px;width:6px;height:6px;border-radius:50%;background:#ff7043}
.fest-list{display:flex;flex-direction:column;gap:5px}
.fest-list button{text-align:left;border:1px solid var(--line);background:#fff;border-radius:10px;padding:6px 10px;font:inherit;cursor:pointer;display:grid;grid-template-columns:14px 1fr;column-gap:8px;align-items:center}
.fest-list button small{grid-column:2;color:var(--muted);font-size:12px}
@media (max-width:900px){.lb.fest .tpic{width:120px;height:90px}.lb.fest .sccap,.month-strip button,.fest-list button small{font-size:16px!important}.lb.fest .scene{transform:scale(1.15);transform-origin:bottom center;margin-bottom:6px}}
@media (prefers-reduced-motion:reduce){.scene *{animation:none!important}}
`;
