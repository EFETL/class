// 生物在地圖上的小動畫。插圖（Gemini 畫的 PNG）放在 taiwan3d/animals/<id>.png，
// ANIMAL_IMG 裡有登記的就用插圖；還沒有插圖的先用表情符號代替。
// 有插圖的動物（檔案在 taiwan3d/animals/）；插圖都畫成「面向右邊」
export const ANIMAL_IMG = { bear: 'bear.png', butterfly: 'butterfly.png', fiddler: 'fiddler.png', flyingfish: 'flyingfish.png', gull: 'gull.png', leopardcat: 'leopardcat.png', macaque: 'macaque.png', magpie: 'magpie.png', mahi: 'mahi.png', muntjac: 'muntjac.png', pangolin: 'pangolin.png', salmon: 'salmon.png', sambar: 'sambar.png', sika: 'sika.png', sperm: 'sperm.png', spinner: 'spinner.png', spoonbill: 'spoonbill.png', tuna: 'tuna.png', turtle: 'turtle.png', ventcrab: 'ventcrab.png' };

export const EMOJI = {
  bear: '🐻', pheasant: '🐓', sambar: '🦌', muntjac: '🦌', salmon: '🐟', macaque: '🐒', magpie: '🐦', leopardcat: '🐆', pangolin: '🦔',
  spoonbill: '🦢', fiddler: '🦀', sika: '🦌', butterfly: '🦋', spinner: '🐬', bottlenose: '🐬', sperm: '🐋', flyingfish: '🐟', turtle: '🐢',
  mahi: '🐠', tuna: '🐟', ventcrab: '🦀', gull: '🕊️', juniper: '🌲', fir: '🌲', cypress: '🌳', mangrove: '🌿', tung: '🌼',
};

export function creatureHTML(c) {
  const art = ANIMAL_IMG[c.id] ? `<span class="flip"><img src="animals/${ANIMAL_IMG[c.id]}" alt=""></span>` : `<span class="emo">${EMOJI[c.id] || '🐾'}</span>`;
  const extra = c.a === 'spout' ? '<span class="spout"></span>' : (c.a === 'leap' || c.a === 'glide') ? '<span class="splash"></span>' : '';
  return `<div class="cr cr-${c.k} an-${c.a || 'still'}"><span class="mover">${art}</span>${extra}</div><div class="crn">${c.n.replace(/（.*）/, '')}</div>`;
}

export const CREATURE_CSS = `
.lb.creature{transform:translate(-50%,-100%);display:flex;flex-direction:column;align-items:center}
.lb.creature .cr{position:relative;width:64px;height:44px}
.lb.creature .mover{position:absolute;left:18px;bottom:0;width:30px;height:30px;display:grid;place-items:center}
.lb.creature .emo{font-size:26px;line-height:1;filter:drop-shadow(0 2px 2px #0006)}
.lb.creature img{width:46px;height:46px;object-fit:contain;filter:drop-shadow(0 2px 2px #0006)}
.lb.creature .flip{display:block;transform:scaleX(-1)}   /* 插圖面向右，翻成和表情符號一樣面向左，動畫的轉向邏輯就通用 */
.lb.creature .crn{background:#fffffff0;border-radius:7px;padding:0 6px;font-size:11.5px;font-weight:700;box-shadow:0 1px 3px #0003;white-space:nowrap}
.lb.creature.cr-plant .crn{background:#e8f5e9}
body.far .lb.creature .crn{display:none}
.an-walk .mover{animation:crwalk 7s linear infinite}
@keyframes crwalk{0%{transform:translateX(-14px) scaleX(-1)}45%{transform:translateX(14px) scaleX(-1)}50%{transform:translateX(14px) scaleX(1)}95%{transform:translateX(-14px) scaleX(1)}100%{transform:translateX(-14px) scaleX(-1)}}
.an-walk .mover>*{animation:crstep .45s ease-in-out infinite}
@keyframes crstep{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.an-hop .mover{animation:crhop 1.4s ease-in-out infinite}
@keyframes crhop{0%,100%{transform:translate(-8px,0)}25%{transform:translate(-2px,-12px)}50%{transform:translate(6px,0)}75%{transform:translate(0,-8px)}}
.an-fly .mover{animation:crfly 6s ease-in-out infinite}
@keyframes crfly{0%{transform:translate(-18px,-6px) scaleX(-1)}25%{transform:translate(0,-16px) scaleX(-1)}50%{transform:translate(18px,-6px) scaleX(-1)}55%{transform:translate(18px,-6px) scaleX(1)}75%{transform:translate(0,2px) scaleX(1)}100%{transform:translate(-18px,-6px) scaleX(1)}}
.an-flutter .mover{animation:crflut 3s ease-in-out infinite}
@keyframes crflut{0%,100%{transform:translate(-10px,0) rotate(-10deg)}25%{transform:translate(0,-14px) rotate(8deg)}50%{transform:translate(10px,-4px) rotate(-6deg)}75%{transform:translate(0,-18px) rotate(10deg)}}
.an-swim .mover{animation:crswim 5s ease-in-out infinite}
@keyframes crswim{0%,100%{transform:translateX(-14px) scaleX(-1) rotate(-4deg)}45%{transform:translateX(14px) scaleX(-1) rotate(4deg)}50%{transform:translateX(14px) scaleX(1)}95%{transform:translateX(-14px) scaleX(1)}}
.an-side .mover{animation:crside 2.6s ease-in-out infinite}
@keyframes crside{0%,100%{transform:translateX(-12px)}50%{transform:translateX(12px)}}
.an-wade .mover{animation:crwade 5s ease-in-out infinite}
@keyframes crwade{0%,100%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(8px) rotate(14deg)}}
.an-leap .mover,.an-glide .mover{animation:crleap 3.2s ease-in-out infinite}
@keyframes crleap{0%{transform:translate(-20px,8px) rotate(40deg);opacity:0}10%{opacity:1}50%{transform:translate(0,-18px) rotate(0)}90%{opacity:1}100%{transform:translate(20px,8px) rotate(-40deg);opacity:0}}
.an-glide .mover{animation-duration:2.6s}
.splash{position:absolute;left:8px;right:8px;bottom:0;height:4px;border-radius:50%;background:#bfe6ff;animation:crsplash 3.2s ease-in-out infinite}
@keyframes crsplash{0%,8%{transform:scaleX(1);opacity:.9}20%{transform:scaleX(.3);opacity:0}88%{opacity:0;transform:scaleX(.3)}96%{transform:scaleX(1.2);opacity:.9}100%{opacity:.9}}
.an-spout .mover{animation:crbob 3s ease-in-out infinite}
@keyframes crbob{0%,100%{transform:translateY(2px)}50%{transform:translateY(-2px)}}
.spout{position:absolute;left:28px;bottom:26px;width:6px;height:0;background:linear-gradient(#e3f6ff,#7fd0ff00);border-radius:3px;animation:crspout 3s ease-out infinite}
@keyframes crspout{0%,40%{height:0;opacity:0}55%{height:22px;opacity:1}80%{height:26px;opacity:0}100%{height:0;opacity:0}}
.an-still .mover{animation:crsway 4s ease-in-out infinite;transform-origin:bottom center}
@keyframes crsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
.lb.bluetears{width:70px;height:40px;transform:translate(-50%,-50%);pointer-events:none}
.lb.bluetears i{position:absolute;width:4px;height:4px;border-radius:50%;background:#4fc3f7;box-shadow:0 0 8px 3px #29b6f6;animation:twinkle 2.2s ease-in-out infinite}
@keyframes twinkle{0%,100%{opacity:.1}50%{opacity:1}}
.veg-legend div{display:grid;grid-template-columns:18px 1fr;gap:8px;align-items:center;margin:4px 0;font-size:14px}
.veg-legend small{display:block;color:var(--muted)}
#lifeList ul.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;list-style:none;padding:0;margin:0}
#lifeList ul.cards li{border:1px solid var(--line);border-radius:10px;overflow:hidden;cursor:pointer;background:#fff;display:flex;flex-direction:column}
#lifeList ul.cards img{width:100%;aspect-ratio:3/2;object-fit:cover}
#lifeList ul.cards li>span{padding:5px 7px;font-size:13px}
@media (max-width:900px){#lifeList ul.cards{grid-template-columns:repeat(3,1fr)}#lifeList ul.cards li>span,.lb.creature .crn,.veg-legend div{font-size:16px!important}}
@media (prefers-reduced-motion:reduce){.lb.creature *{animation:none!important}}
`;
