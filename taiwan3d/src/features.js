// 第二批功能：地形浮起、洋流箭頭、剖面圖、板塊擠壓動畫、縣市界線
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { COUNTIES } from './counties.js';

export const CURRENTS = [
  { id: 'kuroshio', n: '黑潮（主流）', kind: '暖流', c: '#e53935', seasons: ['summer', 'winter'],
    path: [[121.9, 20.4], [121.55, 21.4], [121.65, 22.4], [121.95, 23.4], [122.25, 24.3], [122.75, 25.2], [123.5, 26.2]],
    elem: '從南方熱帶海洋流來的溫暖海水，沿著臺灣東邊一路往北流到日本。黑潮帶來很多魚，像旗魚、鮪魚、鬼頭刀，花蓮、臺東也因此可以賞鯨。',
    junior: '源自北赤道洋流，經菲律賓東方北上，沿臺灣東部海域流向日本；為高溫、高鹽的暖流（年均水溫約 24～26°C），流量居全球前列。帶來豐富的熱帶與遠洋魚類（旗魚、鮪魚、鬼頭刀），造就東部漁場與賞鯨產業。' },
  { id: 'branch', n: '黑潮支流', kind: '暖流', c: '#ff7043', seasons: ['summer', 'winter'],
    path: [[121.2, 21.05], [120.55, 21.75], [120.05, 22.5], [119.8, 23.2], [119.85, 23.9], [120.2, 24.6], [120.6, 25.3]],
    elem: '黑潮在臺灣南邊分出一小股，往北流進臺灣海峽，讓澎湖附近的海水比較溫暖。',
    junior: '黑潮於臺灣南方分出的分支，經澎湖水道北上進入臺灣海峽；冬季與南下的中國沿岸流交會，冷暖水團對峙形成重要漁場。' },
  { id: 'china', n: '中國沿岸流', kind: '寒流（冷流）', c: '#1e88e5', seasons: ['winter'],
    path: [[121.3, 27.6], [120.4, 26.7], [119.75, 25.85], [119.15, 25.0], [118.6, 24.25], [118.05, 23.55], [117.5, 22.9]],
    elem: '冬天吹東北季風，把北方冰冷的海水沿著中國大陸海岸往南推，流進臺灣海峽。太冷的時候，澎湖的魚會被凍傷（寒害）。',
    junior: '冬季受強勁東北季風吹送，沿中國大陸沿岸南下流入臺灣海峽，屬低溫、低鹽的沿岸冷流；與黑潮支流交會形成漁場，寒流過強時曾造成澎湖箱網養殖與野生魚群的低溫寒害。' },
  { id: 'scs', n: '南海季風流', kind: '季風流', c: '#fb8c00', seasons: ['summer'],
    path: [[117.4, 21.4], [118.4, 22.2], [119.2, 23.0], [119.55, 23.9], [119.95, 24.9], [120.6, 25.9]],
    elem: '夏天吹西南季風，把南海的海水往北推，流進臺灣海峽。它會跟著季節改變方向。',
    junior: '夏季受西南季風增強，南海表層流向北推進臺灣海峽；冬季隨季風轉換而改變，是隨季節交替的洋流系統，與黑潮支流、中國沿岸流在臺灣西部與南端海域形成「四季角力」。' },
];

// 剖面圖預設路線
export const PROFILES = [
  { n: '臺中 → 花蓮', a: [120.45, 24.18], b: [121.62, 24.0] },
  { n: '嘉義 → 臺東', a: [120.2, 23.47], b: [121.42, 22.9] },
  { n: '新竹 → 宜蘭', a: [120.92, 24.82], b: [121.85, 24.68] },
  { n: '高雄 → 臺東（南橫）', a: [120.3, 23.05], b: [121.2, 23.0] },
];

export function initFeatures(ctx) {
  const { scene, world, camera, controls, mainGeo, M, G, px, pz, heightAt, state, openInfo, info, $, LF_COLOR, CLS, wake, flyTo, addLabel, labels } = ctx;
  const lonOf = (x) => x / ctx.KX + 121.0, latOf = (z) => 23.7 - z / ctx.KZ;
  const anim = { floatT: 0, floatTarget: 0 };

  // ========== 1. 地形浮起 ==========
  let floatMesh = null, floatCls = 0;
  const floatMat = new THREE.MeshLambertMaterial({ vertexColors: true, emissive: new THREE.Color('#222'), side: THREE.DoubleSide });
  function setFloat(key) {
    const cls = key ? CLS[key] : 0;
    if (floatMesh) { world.remove(floatMesh); floatMesh.geometry.dispose(); floatMesh = null; }
    floatCls = cls; anim.floatT = 0; anim.floatTarget = cls ? 1 : 0;
    if (!cls) return;
    const src = mainGeo.index.array, idx = [];
    for (let k = 0; k < src.length; k += 3) {
      const a = src[k], b = src[k + 1], c = src[k + 2];
      if (M.cls[a] === cls && M.cls[b] === cls && M.cls[c] === cls) idx.push(a, b, c);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', mainGeo.attributes.position);
    g.setAttribute('normal', mainGeo.attributes.normal);
    const col = new Float32Array(M.elev.length * 3), base = LF_COLOR[cls], t = new THREE.Color();
    for (let i = 0; i < M.elev.length; i++) {
      t.copy(base); if (cls === 5) t.lerp(new THREE.Color('#5a3a28'), Math.min(1, (M.elev[i] - 1000) / 2900) * 0.4);
      col[i * 3] = t.r; col[i * 3 + 1] = t.g; col[i * 3 + 2] = t.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(idx);
    floatMesh = new THREE.Mesh(g, floatMat); world.add(floatMesh);
  }

  // ========== 2. 縣市界線 ==========
  const countyLines = new THREE.Group(); countyLines.visible = false; world.add(countyLines);
  (function () {
    const pts = [];
    for (const rings of Object.values(COUNTIES)) for (const r of rings) {
      for (let i = 0; i < r.length - 1; i++) {
        const [x1, y1] = r[i], [x2, y2] = r[i + 1];
        const n = Math.max(1, Math.ceil(Math.hypot(px(x2) - px(x1), pz(y2) - pz(y1)) / 1.5));
        for (let k = 0; k < n; k++) {
          const la = x1 + (x2 - x1) * k / n, pa = y1 + (y2 - y1) * k / n, lb = x1 + (x2 - x1) * (k + 1) / n, pb = y1 + (y2 - y1) * (k + 1) / n;
          const ha = (heightAt(la, pa) ?? 5) / 1000 + 0.025, hb = (heightAt(lb, pb) ?? 5) / 1000 + 0.025;
          pts.push(px(la), ha, pz(pa), px(lb), hb, pz(pb));
        }
      }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    countyLines.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9 })));
  })();

  // ========== 3. 洋流 ==========
  const curGroup = new THREE.Group(); curGroup.visible = false; scene.add(curGroup);
  const curObjs = CURRENTS.map(cu => {
    const pts = cu.path.map(([lon, lat]) => new THREE.Vector3(px(lon), 0, pz(lat)));
    const curve = new THREE.CatmullRomCurve3(pts);
    const color = new THREE.Color(cu.c);
    const tubeMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, depthWrite: false });
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 2.2, 8, false), tubeMat);
    const n = 9, cone = new THREE.ConeGeometry(5, 12, 12); cone.rotateX(Math.PI / 2);
    const arrowMat = new THREE.MeshLambertMaterial({ color, emissive: color.clone().multiplyScalar(0.35), transparent: true, opacity: 1 });
    const arrows = new THREE.InstancedMesh(cone, arrowMat, n);
    const head = new THREE.Mesh(new THREE.ConeGeometry(9, 20, 16).rotateX(Math.PI / 2), arrowMat);
    const g = new THREE.Group(); g.add(tube, arrows, head); curGroup.add(g);
    const mid = curve.getPointAt(0.5);
    const lb = document.createElement('div'); lb.className = 'lb current'; lb.innerHTML = `<span class="cdot" style="background:${cu.c}"></span>${cu.n}<small>${cu.kind}</small>`;
    const lo = new CSS2DObject(lb); lo.position.set(mid.x + 14, 8, mid.z); g.add(lo);
    labels.current.push({ o: lo, el: lb, onClick: () => selectCurrent(cu.id) });
    return { cu, curve, g, tubeMat, arrowMat, arrows, head, n, lift: 0, lo };
  });
  const dummy = new THREE.Object3D();
  let curSel = null, season = 'winter', flowT = 0;
  function placeArrows(o) {
    const len = o.curve.getLength(), tmpT = new THREE.Vector3();
    for (let k = 0; k < o.n; k++) {
      const u = ((k + flowT * 40 / len) / o.n) % 1;
      const p = o.curve.getPointAt(u), tg = o.curve.getTangentAt(u, tmpT);
      dummy.position.copy(p); dummy.position.y += 2.5; dummy.lookAt(p.x + tg.x, p.y + 2.5 + tg.y, p.z + tg.z); dummy.updateMatrix();
      o.arrows.setMatrixAt(k, dummy.matrix);
    }
    o.arrows.instanceMatrix.needsUpdate = true;
    const end = o.curve.getPointAt(1), tg = o.curve.getTangentAt(1);
    o.head.position.set(end.x, 2.5, end.z); o.head.lookAt(end.x + tg.x, 2.5, end.z + tg.z);
  }
  function refreshCurrents() {
    curObjs.forEach(o => {
      const on = o.cu.seasons.includes(season);
      o.g.visible = on; o.lo.visible = on;
      const dim = curSel && curSel !== o.cu.id;
      o.tubeMat.opacity = dim ? 0.12 : 0.55; o.arrowMat.opacity = dim ? 0.25 : 1;
      o.lb = o.lo.element; o.lb.classList.toggle('sel', curSel === o.cu.id);
    });
    document.querySelectorAll('#curList [data-cur]').forEach(b => {
      const cu = CURRENTS.find(c => c.id === b.dataset.cur);
      b.classList.toggle('on', curSel === cu.id); b.classList.toggle('off', !cu.seasons.includes(season));
    });
    document.querySelectorAll('[data-season]').forEach(b => b.classList.toggle('on', b.dataset.season === season));
    wake(800);
  }
  function selectCurrent(id) {
    ctx.mission && ctx.mission('current:' + id);
    curSel = curSel === id ? null : id;
    const cu = CURRENTS.find(c => c.id === id);
    if (!cu.seasons.includes(season)) season = cu.seasons[0];
    refreshCurrents();
    if (curSel) {
      openInfo(`<div class="tag-lf" style="background:${cu.c};color:#fff">🌊 洋流・${cu.kind}</div><h3>${cu.n}</h3><p>${state.level === 'elem' ? cu.elem : cu.junior}</p>
        <p class="muted">出現季節：${cu.seasons.length === 2 ? '一年四季' : cu.seasons[0] === 'winter' ? '冬季' : '夏季'}。箭頭方向就是海水流動的方向。</p>`);
      const mid = cu.path[Math.floor(cu.path.length / 2)]; flyTo(mid[0], mid[1], 520, 0.75);
    }
  }
  function renderCurrents() {
    $('#curList').innerHTML = CURRENTS.map(cu => `<button data-cur="${cu.id}"><span class="dot" style="background:${cu.c}"></span><b>${cu.n}</b><small>${cu.kind}・${cu.seasons.length === 2 ? '全年' : cu.seasons[0] === 'winter' ? '冬季' : '夏季'}</small></button>`).join('');
    $('#curList').querySelectorAll('[data-cur]').forEach(b => b.onclick = () => selectCurrent(b.dataset.cur));
    document.querySelectorAll('[data-season]').forEach(b => b.onclick = () => { season = b.dataset.season; if (curSel && !CURRENTS.find(c => c.id === curSel).seasons.includes(season)) curSel = null; refreshCurrents(); });
    refreshCurrents();
  }
  function showCurrents(on) { curGroup.visible = on; if (on) { curObjs.forEach(placeArrows); refreshCurrents(); } else { curSel = null; curObjs.forEach(o => { o.lo.visible = false; }); } }

  // ========== 4. 剖面圖 ==========
  const profGroup = new THREE.Group(); world.add(profGroup);
  const marker = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), new THREE.MeshBasicMaterial({ color: '#ff1744' }));
  marker.visible = false; scene.add(marker);
  let prof = null, picking = null;
  function sampleProfile(a, b) {
    const N = 240, out = [];
    const dist = Math.hypot(px(b[0]) - px(a[0]), pz(b[1]) - pz(a[1]));
    for (let i = 0; i <= N; i++) {
      const t = i / N, lon = a[0] + (b[0] - a[0]) * t, lat = a[1] + (b[1] - a[1]) * t;
      const h = heightAt(lon, lat);
      let cls = 0;
      if (h != null) {
        const x = Math.round((lon - G.lon0) / (G.lon1 - G.lon0) * (M.nx - 1)), z = Math.round((G.lat1 - lat) / (G.lat1 - G.lat0) * (M.nz - 1));
        cls = M.cls[z * M.nx + x];
      }
      out.push({ t, km: dist * t, lon, lat, h: h == null ? 0 : Math.max(0, h), cls });
    }
    return { pts: out, dist };
  }
  function drawProfile(a, b, name) {
    ctx.mission && ctx.mission('profile');
    prof = { a, b, name, ...sampleProfile(a, b) };
    // 3D 線
    profGroup.clear();
    const lp = prof.pts.map(p => new THREE.Vector3(px(p.lon), p.h / 1000 + 0.06, pz(p.lat)));
    profGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(lp), new THREE.LineBasicMaterial({ color: '#ff1744', linewidth: 2 })));
    const pin = (p, txt) => { const el = document.createElement('div'); el.className = 'lb profpin'; el.textContent = txt; const o = new CSS2DObject(el); o.position.set(px(p.lon), p.h / 1000 + 0.2, pz(p.lat)); profGroup.add(o); };
    pin(prof.pts[0], 'A'); pin(prof.pts[prof.pts.length - 1], 'B');
    // SVG
    const W = 340, H = 170, L = 38, R = 8, T = 10, B = 26;
    const maxH = Math.max(1000, Math.ceil(Math.max(...prof.pts.map(p => p.h)) / 1000) * 1000);
    const X = (km) => L + km / prof.dist * (W - L - R), Y = (h) => T + (1 - h / maxH) * (H - T - B);
    const LFC = { 0: '#7fb3d5', 1: '#6fcf97', 2: '#f2c94c', 3: '#f2994a', 4: '#56ccf2', 5: '#9c6b4a' };
    let bars = '';
    for (let i = 0; i < prof.pts.length - 1; i++) {
      const p = prof.pts[i], q = prof.pts[i + 1];
      bars += `<path d="M${X(p.km)},${Y(0)} L${X(p.km)},${Y(p.h)} L${X(q.km)},${Y(q.h)} L${X(q.km)},${Y(0)} Z" fill="${LFC[p.cls]}" stroke="${LFC[p.cls]}" stroke-width=".4"/>`;
    }
    let grid = '';
    for (let h = 0; h <= maxH; h += 1000) grid += `<line x1="${L}" x2="${W - R}" y1="${Y(h)}" y2="${Y(h)}" stroke="#0002"/><text x="${L - 4}" y="${Y(h) + 4}" font-size="11" text-anchor="end" fill="#345">${h.toLocaleString()}</text>`;
    const step = prof.dist > 100 ? 20 : 10;
    for (let k = 0; k <= prof.dist; k += step) grid += `<text x="${X(k)}" y="${H - 8}" font-size="11" text-anchor="middle" fill="#345">${k}</text>`;
    // 最高點
    const top = prof.pts.reduce((m, p) => p.h > m.h ? p : m, prof.pts[0]);
    const legend = [1, 2, 3, 4, 5].filter(c => prof.pts.some(p => p.cls === c)).map(c => `<span><i style="background:${LFC[c]}"></i>${['', '平原', '丘陵', '台地', '盆地', '山地'][c]}</span>`).join('');
    openInfo(`<div class="tag-lf" style="background:#ff1744;color:#fff">📈 地形剖面圖</div><h3>${name}</h3>
      <svg id="profSvg" viewBox="0 0 ${W} ${H}" width="100%" style="touch-action:none">${grid}${bars}
        <text x="${X(top.km)}" y="${Y(top.h) - 6}" font-size="11" text-anchor="middle" fill="#a0410d">▲${Math.round(top.h).toLocaleString()}</text>
        <text x="4" y="12" font-size="10" fill="#345">公尺</text><text x="${W - R}" y="${H - 8}" font-size="10" text-anchor="end" fill="#345">公里</text>
        <line id="profCur" x1="0" x2="0" y1="${T}" y2="${H - B}" stroke="#ff1744" stroke-width="1.5" visibility="hidden"/></svg>
      <div class="proflegend">${legend}</div>
      <p id="profRead" class="muted">在剖面圖上滑動手指（或滑鼠），地圖上的紅點會跟著走。全長約 <b>${Math.round(prof.dist)} 公里</b>，最高約 <b>${Math.round(top.h).toLocaleString()} 公尺</b>。</p>
      <p class="muted">高度有放大（×${state.exag}），和 3D 地圖一樣；真實的山坡沒有這麼陡。</p>`);
    const svg = $('#profSvg');
    const move = (ev) => {
      const r = svg.getBoundingClientRect(), xs = (ev.clientX - r.left) / r.width * W;
      const km = Math.max(0, Math.min(prof.dist, (xs - L) / (W - L - R) * prof.dist));
      const p = prof.pts[Math.round(km / prof.dist * (prof.pts.length - 1))];
      const cur = $('#profCur'); cur.setAttribute('x1', X(p.km)); cur.setAttribute('x2', X(p.km)); cur.setAttribute('visibility', 'visible');
      marker.visible = true; marker.position.set(px(p.lon), p.h / 1000 * world.scale.y + 1.2, pz(p.lat)); marker.scale.setScalar(Math.max(1, camera.position.distanceTo(marker.position) / 120));
      $('#profRead').innerHTML = `距離 A 點 <b>${p.km.toFixed(1)} 公里</b>，高度 <b>${Math.round(p.h).toLocaleString()} 公尺</b>（${['海面', '平原', '丘陵', '台地', '盆地', '山地'][p.cls]}）`;
      wake();
    };
    svg.addEventListener('pointermove', move); svg.addEventListener('pointerdown', move);
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    flyTo(mid[0], mid[1], Math.max(140, prof.dist * 1.6), 0.85);
    wake(1500);
  }
  function clearProfile() { profGroup.clear(); marker.visible = false; prof = null; }
  function startPick() {
    picking = []; clearProfile();
    $('#pickHint').hidden = false; $('#pickHint').textContent = '請在地圖上點第 1 個點（A）';
  }
  // 由主程式的「輕點」呼叫：回傳 true 表示這次點擊被剖面選點用掉了
  function onTap(e) {
    if (!picking) return false;
    const r = ctx.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObject(ctx.mainMesh)[0] || ray.intersectObject(ctx.seaMesh)[0];
    if (!hit) return true;
    picking.push([lonOf(hit.point.x), latOf(hit.point.z)]);
    if (picking.length === 1) { $('#pickHint').textContent = '很好！再點第 2 個點（B）'; return true; }
    const [a, b] = picking; picking = null; $('#pickHint').hidden = true;
    drawProfile(a, b, '自己畫的剖面');
    return true;
  }

  // ========== 5. 板塊擠壓動畫 ==========
  const plate = { group: new THREE.Group(), t: 1, playing: false, shake: 0 };
  plate.group.visible = false; scene.add(plate.group);
  const plateLabels = [];
  const setPlateLabels = (on) => plateLabels.forEach(o => { o.visible = on; });
  const BOUND = [[122.3, 24.6], [121.85, 24.35], [121.6, 23.97], [121.48, 23.7], [121.36, 23.4], [121.24, 23.15], [121.15, 22.9], [121.1, 22.6], [121.0, 21.9], [120.8, 21.0]];
  (function buildPlates() {
    const bpts = BOUND.map(([lon, lat]) => [px(lon), pz(lat)]);
    const mk = (pts, color) => {
      const sh = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
      const g = new THREE.ShapeGeometry(sh); g.rotateX(-Math.PI / 2);
      return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide }));
    };
    const west = [[px(116.0), pz(27.5)], [bpts[0][0], pz(27.5)], ...bpts, [bpts[bpts.length - 1][0], pz(19.5)], [px(116.0), pz(19.5)]];
    const east = [[bpts[0][0], pz(27.5)], [px(125.5), pz(27.5)], [px(125.5), pz(19.5)], [bpts[bpts.length - 1][0], pz(19.5)], ...bpts.slice().reverse()];
    plate.eu = mk(west, '#43a047'); plate.ph = mk(east, '#8e24aa');
    plate.eu.position.y = 0.4; plate.ph.position.y = 0.5;
    plate.group.add(plate.eu, plate.ph);
    // 交界線
    const lp = BOUND.map(([lon, lat]) => new THREE.Vector3(px(lon), 1.2, pz(lat)));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(lp), new THREE.LineDashedMaterial({ color: '#d50000', dashSize: 6, gapSize: 4 }));
    line.computeLineDistances(); plate.group.add(line);
    // 推擠箭頭（菲律賓海板塊往西北）
    plate.arrows = [];
    [[122.6, 22.6], [122.9, 23.6], [122.4, 21.6]].forEach(([lon, lat]) => {
      const a = new THREE.ArrowHelper(new THREE.Vector3(-0.8, 0, -0.6).normalize(), new THREE.Vector3(px(lon), 3, pz(lat)), 55, 0x8e24aa, 18, 12);
      plate.group.add(a); plate.arrows.push(a);
    });
    const lab = (html, lon, lat, cls) => { const el = document.createElement('div'); el.className = 'lb plate ' + cls; el.innerHTML = html; const o = new CSS2DObject(el); o.position.set(px(lon), 4, pz(lat)); o.visible = false; plate.group.add(o); plateLabels.push(o); return o; };
    plate.lEu = lab('歐亞板塊', 118.9, 22.3, 'eu');
    plate.lPh = lab('菲律賓海板塊<small>往西北推擠 ↖</small>', 123.0, 22.4, 'ph');
    lab('板塊交界（花東縱谷）', 121.75, 22.9, 'bd');
  })();
  const STAGES = [
    [0, '很久很久以前（約幾百萬年前），這裡還是一片海，海底堆積了厚厚的泥沙。'],
    [0.2, '東邊的菲律賓海板塊慢慢往西北移動，推擠西邊的歐亞板塊。'],
    [0.45, '海底的岩層被擠得皺起來、抬升，臺灣慢慢露出海面。'],
    [0.7, '擠壓越久，山越長越高，形成中央山脈等「新褶曲山脈」。'],
    [0.95, '現在：板塊還在擠壓，所以臺灣地震很多，山也還在慢慢長高！'],
  ];
  const STAGES_J = [
    [0, '約數百萬年前，臺灣所在位置是大陸棚邊緣的淺海，堆積了大量沉積物。'],
    [0.2, '菲律賓海板塊向西北移動（每年僅數公分），與歐亞板塊碰撞；北邊菲律賓海板塊隱沒到歐亞板塊之下，南邊則是歐亞板塊隱沒。'],
    [0.45, '沉積岩層受擠壓褶曲、斷裂並抬升出海面——這就是「蓬萊造山運動」。'],
    [0.7, '持續擠壓形成高聳的新褶曲山脈；海岸山脈原屬菲律賓海板塊上的火山島弧，花東縱谷即為板塊交界。'],
    [0.95, '造山運動仍在進行：地震頻繁、山脈持續抬升，同時也受侵蝕作用（內營力與外營力同時作用）。'],
  ];
  function applyPlate() {
    const t = plate.t;
    world.scale.y = Math.max(0.02, state.exag * t);
    const off = (1 - t) * 60;
    plate.ph.position.x = off * 0.8; plate.ph.position.z = off * 0.6;
    const st = (state.level === 'elem' ? STAGES : STAGES_J).filter(s => s[0] <= t + 1e-6).pop();
    const el = $('#plateStage'); if (el) el.textContent = st[1];
    const sl = $('#plateSlider'); if (sl && !sl.matches(':active')) sl.value = Math.round(t * 100);
    const yl = $('#plateYear'); if (yl) yl.textContent = t >= 0.999 ? '現在' : t < 0.05 ? '數百萬年前' : `擠壓中…${Math.round(t * 100)}%`;
  }
  function openPlates() {
    ctx.mission && ctx.mission('plates');
    clearProfile();
    document.body.classList.add('plates');   // 板塊動畫時隱藏景點等標記
    plate.group.visible = true; setPlateLabels(true); plate.t = 0; plate.playing = true; applyPlate();
    openInfo(`<div class="tag-lf" style="background:#8e24aa;color:#fff">🌋 板塊運動</div><h3>臺灣是怎麼「擠」出來的？</h3>
      <p id="plateYear" style="font-weight:800;color:#8e24aa"></p>
      <p id="plateStage"></p>
      <input type="range" id="plateSlider" min="0" max="100" value="0" aria-label="時間">
      <div class="row"><button class="btn-sm" id="platePlay">⏸ 暫停</button><button class="btn-sm" id="plateQuake">🫨 地震！</button><button class="btn-sm" id="plateClose">✕ 結束動畫</button></div>
      <p class="muted">紫色是菲律賓海板塊、綠色是歐亞板塊，紅色虛線是板塊交界（花東縱谷）。課本：臺灣位於兩板塊的接觸帶，板塊擠壓形成「新褶曲山脈」。</p>`);
    applyPlate();
    $('#plateSlider').oninput = (e) => { plate.playing = false; $('#platePlay').textContent = '▶ 播放'; plate.t = +e.target.value / 100; applyPlate(); wake(); };
    $('#platePlay').onclick = () => { if (plate.t >= 1) plate.t = 0; plate.playing = !plate.playing; $('#platePlay').textContent = plate.playing ? '⏸ 暫停' : '▶ 播放'; wake(); };
    $('#plateQuake').onclick = () => { plate.shake = 1.2; wake(1500); };
    $('#plateClose').onclick = closePlates;
    viewPlates();
  }
  function viewPlates() { flyTo(121.1, 23.4, 620, 0.95); }
  function closePlates() {
    if (!plate.group.visible) return;
    document.body.classList.remove('plates');
    plate.group.visible = false; setPlateLabels(false); plate.playing = false; plate.t = 1; world.scale.y = state.exag; info.classList.remove('show'); wake();
  }

  // ========== 每一格動畫 ==========
  function tick(dt) {
    let busy = false;
    if (floatMesh || anim.floatT > 0) {
      anim.floatT += (anim.floatTarget - anim.floatT) * Math.min(1, dt * 4);
      if (!floatMesh && anim.floatT < 0.002) anim.floatT = 0;
      const bob = Math.sin(performance.now() / 600) * 1.2;
      if (floatMesh) floatMesh.position.y = (anim.floatT * 45 + bob * 2 * anim.floatT) / world.scale.y;
      busy = true;
    }
    if (curGroup.visible) { flowT += dt; curObjs.forEach(o => { if (o.g.visible) placeArrows(o); const target = curSel === o.cu.id ? 10 : 0; o.lift += (target - o.lift) * Math.min(1, dt * 5); o.g.position.y = o.lift; }); busy = true; }
    if (plate.group.visible) {
      if (plate.playing) { plate.t = Math.min(1, plate.t + dt / 14); applyPlate(); if (plate.t >= 1) { plate.playing = false; plate.shake = 1.2; const b = $('#platePlay'); if (b) b.textContent = '▶ 重新播放'; } }
      busy = true;
    }
    if (plate.shake > 0) {
      plate.shake -= dt; const k = Math.max(0, plate.shake) * 2.2;
      camera.position.x += (Math.random() - 0.5) * k; camera.position.y += (Math.random() - 0.5) * k * 0.6; busy = true;
    }
    return busy;
  }

  return { setFloat, countyLines, showCurrents, renderCurrents, drawProfile, clearProfile, startPick, onTap, openPlates, closePlates, tick, isPlates: () => plate.group.visible };
}
