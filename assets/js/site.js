/* ============================================================
   星光教學舞台 — 共用互動引擎
   1. SFX   合成音效（不需外部音檔，離線可用）
   2. Party 彩帶 / 星星特效
   3. Speak 英語發音（瀏覽器內建 TTS）
   4. Reveal 捲動進場動畫
   5. Timer 課堂計時器（教學舞台與工具箱共用）
   ============================================================ */

// 標記 JS 已啟用：沒有 JS 時 .reveal 不會被隱藏，內容照樣看得到。
document.documentElement.classList.add('js');

/* ---------- 1. 音效 ---------- */
const SFX = (() => {
  let ctx = null;
  let on = localStorage.getItem('sfx') !== 'off';

  const ac = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };

  // 單一音符：freq 頻率 / t0 起始秒 / dur 長度 / type 波形 / vol 音量
  function note(freq, t0, dur, type = 'sine', vol = .22) {
    if (!on) return;
    const c = ac(), o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, c.currentTime + t0);
    g.gain.setValueAtTime(0, c.currentTime + t0);
    g.gain.linearRampToValueAtTime(vol, c.currentTime + t0 + .012);
    g.gain.exponentialRampToValueAtTime(.0001, c.currentTime + t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + .02);
  }

  // 噪音（掌聲 / 沙鈴用）
  function noise(t0, dur, vol = .16) {
    if (!on) return;
    const c = ac(), len = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter();
    s.buffer = buf; f.type = 'bandpass'; f.frequency.value = 1800;
    g.gain.value = vol;
    s.connect(f); f.connect(g); g.connect(c.destination);
    s.start(c.currentTime + t0);
  }

  const lib = {
    tap:     () => note(660, 0, .09, 'triangle', .14),
    flip:    () => { note(520, 0, .08, 'triangle', .13); note(780, .06, .1, 'triangle', .11); },
    correct: () => { note(784, 0, .13); note(988, .1, .13); note(1319, .2, .3); },
    wrong:   () => { note(220, 0, .18, 'sawtooth', .13); note(165, .14, .3, 'sawtooth', .12); },
    ding:    () => { note(1047, 0, .5, 'sine', .2); note(1568, .02, .45, 'sine', .1); },
    bell:    () => { for (let i = 0; i < 3; i++) note(880, i * .18, .3, 'sine', .18); },
    fanfare: () => {
      [523, 659, 784, 1047].forEach((f, i) => note(f, i * .1, .34, 'square', .13));
      note(1319, .44, .7, 'sine', .2);
    },
    clap:    () => { for (let i = 0; i < 14; i++) noise(i * .045 + Math.random() * .02, .1, .1); },
    whoosh:  () => { noise(0, .34, .09); },
    tick:    () => note(1200, 0, .04, 'square', .06),
    up:      () => { note(392, 0, .1); note(587, .08, .18); },
  };

  return {
    play: n => { try { (lib[n] || lib.tap)(); } catch (e) {} },
    get on() { return on; },
    toggle() { on = !on; localStorage.setItem('sfx', on ? 'on' : 'off'); paintToggles(); if (on) lib.up(); return on; },
  };

  function paintToggles() {
    document.querySelectorAll('.sfx-toggle').forEach(b => {
      b.dataset.on = on ? 'on' : 'off';
      b.querySelector('.sfx-ico').textContent = on ? '🔊' : '🔇';
      b.querySelector('.sfx-txt').textContent = on ? '音效開' : '音效關';
    });
  }
})();

/* ---------- 2. 彩帶 ---------- */
function party(count = 90) {
  let cv = document.getElementById('confetti');
  if (!cv) { cv = document.createElement('canvas'); cv.id = 'confetti'; document.body.appendChild(cv); }
  const dpr = window.devicePixelRatio || 1;
  cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px';
  const g = cv.getContext('2d'); g.scale(dpr, dpr);
  const colors = ['#4c5fd5', '#ffb020', '#2fbf9b', '#ff6b8a', '#8b5cf6', '#ffd75e'];
  const bits = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * .5,
    w: 7 + Math.random() * 8, h: 9 + Math.random() * 10,
    c: colors[(Math.random() * colors.length) | 0],
    vy: 2.4 + Math.random() * 3.4, vx: -1.4 + Math.random() * 2.8,
    r: Math.random() * 6.28, vr: -.16 + Math.random() * .32,
  }));
  let frames = 0;
  (function loop() {
    frames++;
    g.clearRect(0, 0, innerWidth, innerHeight);
    bits.forEach(b => {
      b.x += b.vx; b.y += b.vy; b.r += b.vr;
      g.save(); g.translate(b.x, b.y); g.rotate(b.r);
      g.fillStyle = b.c; g.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); g.restore();
    });
    if (frames < 220) requestAnimationFrame(loop);
    else g.clearRect(0, 0, innerWidth, innerHeight);
  })();
}

/* ---------- 3. 英語發音 ---------- */
function speak(text, rate = .85) {
  if (!('speechSynthesis' in window)) { alert('這台裝置不支援語音朗讀，請改用 Chrome 或 Safari。'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = rate; u.pitch = 1.05;
  const v = speechSynthesis.getVoices().find(x => /en-US|en_GB|en-GB/.test(x.lang));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
if ('speechSynthesis' in window) speechSynthesis.getVoices();

/* ---------- 4. 捲動進場 ---------- */
function initReveal() {
  const els = [...document.querySelectorAll('.reveal')];
  const showAll = () => els.forEach(el => el.classList.add('in'));
  if (!('IntersectionObserver' in window)) { showAll(); return; }
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  els.forEach(el => io.observe(el));
  // 保險絲：萬一觀察器沒回呼（分頁在背景、瀏覽器怪癖），2.5 秒後一律顯示，
  // 內容永遠不會卡在看不見的狀態。
  setTimeout(showAll, 2500);
}

/* ---------- 5. 課堂計時器 ---------- */
class ClassTimer {
  constructor(onTick, onEnd) { this.onTick = onTick; this.onEnd = onEnd; this.reset(0); }
  reset(sec) { this.stop(); this.total = sec; this.left = sec; this.onTick && this.onTick(this.left, this.total); }
  start() {
    if (this.id || this.left <= 0) return;
    this.id = setInterval(() => {
      this.left--;
      this.onTick && this.onTick(this.left, this.total);
      if (this.left <= 5 && this.left > 0) SFX.play('tick');
      if (this.left <= 0) { this.stop(); SFX.play('bell'); this.onEnd && this.onEnd(); }
    }, 1000);
  }
  stop() { if (this.id) { clearInterval(this.id); this.id = null; } }
  get running() { return !!this.id; }
}
const mmss = s => `${String(Math.floor(Math.max(0, s) / 60)).padStart(2, '0')}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;

/* ---------- 啟動 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();

  // 音效開關（每頁導覽列都有一顆）
  document.querySelectorAll('.sfx-toggle').forEach(b => {
    b.dataset.on = SFX.on ? 'on' : 'off';
    b.querySelector('.sfx-ico').textContent = SFX.on ? '🔊' : '🔇';
    b.querySelector('.sfx-txt').textContent = SFX.on ? '音效開' : '音效關';
    b.addEventListener('click', () => SFX.toggle());
  });

  // 所有按鈕預設有點擊聲
  document.addEventListener('click', e => {
    const t = e.target.closest('.btn,.pill,.action-card,.nav-links a');
    if (t && !t.classList.contains('sfx-toggle')) SFX.play('tap');
  });
});
