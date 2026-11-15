// 逐格錄影：把網頁的時間「凍結」，每次往前推 1/FPS 秒再截一張圖。
// 這台機器畫 3D 很慢，用真實時間錄會掉格、對不上旁白；逐格錄可以保證畫面和旁白完全同步。
const pw = require('playwright'); const fs = require('fs');
const FPS = 12;
(async () => {
  const plan = JSON.parse(fs.readFileSync(process.argv[2])); const out = process.argv[3];
  const fdir = out + '/frames'; fs.mkdirSync(fdir, { recursive: true });
  for (const f of fs.readdirSync(fdir)) fs.unlinkSync(fdir + '/' + f);
  const b = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.addInitScript(() => {
    localStorage.setItem('tw3d_hint', '1'); localStorage.removeItem('tw3d_done');
    // 假時間：performance.now / Date.now / requestAnimationFrame 都改由 __step 推進
    let T = 0; const base = Date.now(); const q = [];
    performance.now = () => T; const RD = Date.now; Date.now = () => base + T;
    window.requestAnimationFrame = (cb) => { q.push(cb); return q.length; };
    window.cancelAnimationFrame = () => {};
    window.__step = (dt) => {
      T += dt;
      const cbs = q.splice(0); cbs.forEach(cb => { try { cb(T); } catch (e) { console.error(e); } });
      document.getAnimations().forEach(a => { try { if (a.playState !== 'finished') { a.pause(); a.currentTime = (a.currentTime || 0) + dt; } } catch (e) {} });
    };
  });
  await p.goto('file:///home/user/class/taiwan3d/index.html');
  for (let i = 0; i < 200; i++) { await p.evaluate(() => window.__step(50)); if (await p.evaluate(() => !document.getElementById('loading'))) break; await p.waitForTimeout(50); }
  await p.addStyleTag({ content: '.hint{display:none!important}' });
  let n = 0;
  const frame = async () => { await p.evaluate((d) => window.__step(d), 1000 / FPS); await p.screenshot({ path: `${fdir}/${String(n++).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 88 }); };
  const run = async (ms) => { const k = Math.round(ms / 1000 * FPS); for (let i = 0; i < k; i++) await frame(); };
  // 開場先讓畫面穩定 1 秒（不錄）
  for (let i = 0; i < 24; i++) await p.evaluate(() => window.__step(1000 / 24));
  const H = {
    click: async (sel) => { await p.click(sel); },
    js: async (code) => { await p.evaluate(code); },
    wait: async (ms) => { await run(ms); },
    label: async (text) => { await p.evaluate((t) => window.__tw.tapLabel(t), text); },
    drag: async ([x1, y1, x2, y2, ms]) => {
      await p.mouse.move(x1, y1); await p.mouse.down();
      const k = Math.round(ms / 1000 * FPS);
      for (let i = 1; i <= k; i++) { await p.mouse.move(x1 + (x2 - x1) * i / k, y1 + (y2 - y1) * i / k); await frame(); }
      await p.mouse.up();
    },
  };
  const marks = [];
  for (const seg of plan) {
    const s0 = n; marks.push(n / FPS);
    for (const [k, v] of seg.act) await H[k](v);
    const need = Math.round(seg.dur * FPS) - (n - s0);
    for (let i = 0; i < need; i++) await frame();
  }
  await run(1500);
  await b.close();
  fs.writeFileSync(out + '/rec.json', JSON.stringify({ frames: fdir, fps: FPS, start: 0, end: n / FPS, marks }));
})();
