// 臺灣 3D 地形教室 — 主程式（three.js）
// 地形高度是依課本的五大山脈、地形區與山峰高度「示意建模」出來的，
// 不是精確的數值地形資料（DEM），但山脈走向、高度級距與地形分區都符合課本。
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { COAST } from './coast.js';
import { PHOTOS } from './photos.js';
import {
  LANDFORMS, RIDGES, HILLBANDS, CONES, ZONES, HILL_LABELS, PEAKS, ISLANDS, SPOTS,
  REGIONS, RAIN, SEASONS, MONTH_RAIN, RAIN_LEVELS, TRIBES,
} from './data.js';

// ================= 座標：1 單位 = 1 公里 =================
const LON0 = 121.0, LAT0 = 23.7;
const KX = 111.32 * Math.cos(LAT0 * Math.PI / 180), KZ = 110.6;
const px = (lon) => (lon - LON0) * KX;
const pz = (lat) => -(lat - LAT0) * KZ;
const $ = (s) => document.querySelector(s);

// ================= 小工具 =================
function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return (a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v) * 2 - 1;
}
function fbm(x, y) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 5; i++) { s += a * vnoise(x * f, y * f); f *= 2.03; a *= 0.5; } return s; }
function ridged(x, y) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 4; i++) { s += a * (1 - Math.abs(vnoise(x * f + 9, y * f + 3))); f *= 2.1; a *= 0.5; } return s; }
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function inPoly(x, y, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function segDist(x, z, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, L = dx * dx + dz * dz;
  let t = L ? ((x - ax) * dx + (z - az) * dz) / L : 0; t = Math.max(0, Math.min(1, t));
  const qx = ax + t * dx - x, qz = az + t * dz - z;
  return [Math.sqrt(qx * qx + qz * qz), t];
}
// 折線距離 + 沿線內插高度
function polyline(x, z, pts) {
  let best = 1e9, h = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [d, t] = segDist(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
    if (d < best) { best = d; h = pts[i][2] + (pts[i + 1][2] - pts[i][2]) * t; }
  }
  return [best, h];
}
// 距離轉換（chamfer），回傳每格到最近「非陸地」格的距離（格數）
function distField(mask, nx, nz) {
  const D = new Float32Array(nx * nz), INF = 1e6, s2 = 1.4142;
  for (let i = 0; i < D.length; i++) D[i] = mask[i] ? INF : 0;
  for (let z = 0; z < nz; z++) for (let x = 0; x < nx; x++) {
    const i = z * nx + x; if (!D[i]) continue; let v = D[i];
    if (x > 0) v = Math.min(v, D[i - 1] + 1); else v = Math.min(v, 1);
    if (z > 0) { v = Math.min(v, D[i - nx] + 1); if (x > 0) v = Math.min(v, D[i - nx - 1] + s2); if (x < nx - 1) v = Math.min(v, D[i - nx + 1] + s2); } else v = Math.min(v, 1);
    D[i] = v;
  }
  for (let z = nz - 1; z >= 0; z--) for (let x = nx - 1; x >= 0; x--) {
    const i = z * nx + x; if (!D[i]) continue; let v = D[i];
    if (x < nx - 1) v = Math.min(v, D[i + 1] + 1); else v = Math.min(v, 1);
    if (z < nz - 1) { v = Math.min(v, D[i + nx] + 1); if (x < nx - 1) v = Math.min(v, D[i + nx + 1] + s2); if (x > 0) v = Math.min(v, D[i + nx - 1] + s2); } else v = Math.min(v, 1);
    D[i] = v;
  }
  return D;
}
function blur(arr, nx, nz, r) {
  if (r < 1) return arr;
  const a = Float32Array.from(arr), b = new Float32Array(arr.length);
  for (let pass = 0; pass < 2; pass++) {
    for (let z = 0; z < nz; z++) for (let x = 0; x < nx; x++) {
      let s = 0, n = 0; for (let k = -r; k <= r; k++) { const xx = x + k; if (xx >= 0 && xx < nx) { s += a[z * nx + xx]; n++; } } b[z * nx + x] = s / n;
    }
    for (let z = 0; z < nz; z++) for (let x = 0; x < nx; x++) {
      let s = 0, n = 0; for (let k = -r; k <= r; k++) { const zz = z + k; if (zz >= 0 && zz < nz) { s += b[zz * nx + x]; n++; } } a[z * nx + x] = s / n;
    }
  }
  return a;
}

// ================= 地形分類 =================
const CLS = { sea: 0, plain: 1, hill: 2, tableland: 3, basin: 4, mountain: 5 };
const CLS_KEY = ['sea', 'plain', 'hill', 'tableland', 'basin', 'mountain'];
function classify(e, zoneType) {
  if (zoneType === 'tableland') return CLS.tableland;
  if (zoneType === 'basin') return CLS.basin;
  if (zoneType === 'plain') return CLS.plain;
  if (e < 100) return CLS.plain;
  if (e < 1000) return CLS.hill;
  return CLS.mountain;
}
function regionOf(lon, lat) {
  // 中央山脈稜線經度（依緯度內插）
  const r = RIDGES[0].pts; let crest = r[0][0];
  for (let i = 0; i < r.length - 1; i++) {
    const a = r[i], b = r[i + 1];
    if (lat <= a[1] && lat >= b[1]) { crest = a[0] + (b[0] - a[0]) * (a[1] - lat) / (a[1] - b[1]); break; }
  }
  if (lat < 21.95) crest = 121.0;
  const northLine = 24.70 - (lon - 120.88) * 0.81;
  if (lat > northLine && !(lat < 24.5 && lon > crest)) return 'N';
  if (lon > crest && lat >= 24.35) return 'N';
  if (lon > crest && lat > 22.40) return 'E';
  if (lat > 23.56 - (lon - 120.15) * 0.15) return 'C';
  return 'S';
}

// ================= 建立本島網格 =================
const G = { lon0: 119.98, lon1: 122.06, lat0: 21.86, lat1: 25.34, step: 0.8 };
G.nx = Math.round((G.lon1 - G.lon0) * KX / G.step) + 1;
G.nz = Math.round((G.lat1 - G.lat0) * KZ / G.step) + 1;

function buildMain() {
  const { nx, nz } = G, N = nx * nz;
  const lonA = new Float32Array(N), latA = new Float32Array(N), mask = new Uint8Array(N);
  const main = COAST.main;
  for (let z = 0; z < nz; z++) for (let x = 0; x < nx; x++) {
    const i = z * nx + x;
    const lon = G.lon0 + (G.lon1 - G.lon0) * x / (nx - 1);
    const lat = G.lat1 - (G.lat1 - G.lat0) * z / (nz - 1);
    lonA[i] = lon; latA[i] = lat; mask[i] = inPoly(lon, lat, main) ? 1 : 0;
  }
  const dist = distField(mask, nx, nz);
  // 山脈折線先投影成公里
  const ridgeKm = RIDGES.map(r => ({ w: r.w, pts: r.pts.map(p => [px(p[0]), pz(p[1]), p[2]]) }));
  const hillKm = HILLBANDS.map(r => ({ w: r.w, pts: r.pts.map(p => [px(p[0]), pz(p[1]), p[2]]) }));
  const elev = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    if (!mask[i]) { elev[i] = -60; continue; }
    const x = px(lonA[i]), z = pz(latA[i]);
    let e = 0;
    for (const r of ridgeKm) {
      const [d, h] = polyline(x, z, r.pts);
      const q = d / r.w; if (q > 4) continue;
      e = Math.max(e, h * (0.78 * Math.exp(-q * q) + 0.22 * Math.exp(-q * q / 5)));
    }
    for (const r of hillKm) {
      const [d, h] = polyline(x, z, r.pts);
      const q = d / r.w; if (q > 4) continue;
      e = Math.max(e, h * Math.exp(-q * q));
    }
    for (const c of CONES) {
      const d = Math.hypot(x - px(c.lon), z - pz(c.lat)) / c.r;
      e = Math.max(e, c.h * Math.exp(-d * d * 1.6));
    }
    // 起伏細節：高的地方越崎嶇（但不超過課本高度）
    const e0 = e;
    const n = fbm(x * 0.06, z * 0.06), rg = ridged(x * 0.09, z * 0.09);
    const rough = smooth(150, 2500, e);
    e = e * (1 + 0.16 * n) + e * rough * 0.18 * (rg - 0.5) + 25 * n;
    e = Math.min(e, e0 * 1.02 + 20, 3952);
    const dk = dist[i] * G.step;
    e *= smooth(0, 3.2, dk);
    e = Math.max(e, Math.min(30, 1.5 + dk * 1.2));
    elev[i] = e;
  }
  // 地形區塊（平原、盆地、台地）
  const zoneOf = new Int8Array(N).fill(-1);
  ZONES.forEach((zn, zi) => {
    let m = new Float32Array(N);
    const ell = zn.ell, poly = zn.poly, line = zn.line && zn.line.map(p => [px(p[0]), pz(p[1]), 0]);
    for (let i = 0; i < N; i++) {
      if (!mask[i]) continue;
      const lon = lonA[i], lat = latA[i]; let inside = false;
      if (poly) inside = inPoly(lon, lat, poly);
      else if (ell) { const dx = (px(lon) - px(ell[0])) / ell[2], dz = (pz(lat) - pz(ell[1])) / ell[3]; inside = dx * dx + dz * dz <= 1; }
      else if (line) inside = polyline(px(lon), pz(lat), line)[0] <= zn.lw;
      if (inside) { m[i] = 1; zoneOf[i] = zi; }
    }
    m = blur(m, nx, nz, zn.blur);
    for (let i = 0; i < N; i++) {
      if (!mask[i] || m[i] <= 0) continue;
      const x = px(lonA[i]), z = pz(latA[i]);
      let t = zn.h;
      if (zn.type === 'plain') t = Math.min(elev[i], zn.h * (0.35 + 0.65 * Math.min(1, dist[i] * G.step / 18)) + 6 * fbm(x * 0.2, z * 0.2));
      else if (zn.type === 'tableland') t = zn.h + 18 * fbm(x * 0.3, z * 0.3);
      else t = zn.h + 8 * fbm(x * 0.3, z * 0.3);
      elev[i] = elev[i] * (1 - m[i]) + t * m[i];
    }
  });
  const cls = new Uint8Array(N), reg = new Array(N);
  for (let i = 0; i < N; i++) {
    if (!mask[i]) { cls[i] = 0; continue; }
    cls[i] = classify(elev[i], zoneOf[i] >= 0 ? ZONES[zoneOf[i]].type : null);
    reg[i] = regionOf(lonA[i], latA[i]);
  }
  return { nx, nz, lonA, latA, mask, elev, cls, reg, zoneOf };
}

function gridGeometry(nx, nz, xAt, zAt, elev) {
  const N = nx * nz, pos = new Float32Array(N * 3);
  for (let z = 0; z < nz; z++) for (let x = 0; x < nx; x++) {
    const i = z * nx + x; pos[i * 3] = xAt(x); pos[i * 3 + 1] = elev[i] / 1000; pos[i * 3 + 2] = zAt(z);
  }
  const idx = new Uint32Array((nx - 1) * (nz - 1) * 6); let k = 0;
  for (let z = 0; z < nz - 1; z++) for (let x = 0; x < nx - 1; x++) {
    const a = z * nx + x, b = a + 1, c = a + nx, d = c + 1;
    idx[k++] = a; idx[k++] = c; idx[k++] = b; idx[k++] = b; idx[k++] = c; idx[k++] = d;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  return g;
}

// ================= 外島 =================
function ellipsePoly(lon, lat, ax, az, seed) {
  const pts = [];
  for (let k = 0; k < 28; k++) {
    const a = k / 28 * Math.PI * 2, w = 1 + 0.18 * vnoise(Math.cos(a) * 2 + seed, Math.sin(a) * 2 + seed);
    pts.push([lon + Math.cos(a) * ax * w / KX, lat + Math.sin(a) * az * w / KZ]);
  }
  return pts;
}
function buildIsland(isl) {
  const polys = isl.coast ? isl.coast.map(k => COAST[k]) : isl.ell.map((e, j) => ellipsePoly(e[0], e[1], e[2], e[3], j * 7 + isl.h));
  const out = [];
  polys.forEach((poly, pi) => {
    let lo = [1e9, 1e9], hi = [-1e9, -1e9];
    poly.forEach(([x, y]) => { lo[0] = Math.min(lo[0], x); lo[1] = Math.min(lo[1], y); hi[0] = Math.max(hi[0], x); hi[1] = Math.max(hi[1], y); });
    const pad = 0.01; lo[0] -= pad; lo[1] -= pad; hi[0] += pad; hi[1] += pad;
    const wkm = (hi[0] - lo[0]) * KX, hkm = (hi[1] - lo[1]) * KZ;
    const step = Math.max(0.08, Math.max(wkm, hkm) / 110);
    const nx = Math.round(wkm / step) + 1, nz = Math.round(hkm / step) + 1, N = nx * nz;
    const mask = new Uint8Array(N), lonA = new Float32Array(N), latA = new Float32Array(N);
    for (let z = 0; z < nz; z++) for (let x = 0; x < nx; x++) {
      const i = z * nx + x, lon = lo[0] + (hi[0] - lo[0]) * x / (nx - 1), lat = hi[1] - (hi[1] - lo[1]) * z / (nz - 1);
      lonA[i] = lon; latA[i] = lat; mask[i] = inPoly(lon, lat, poly) ? 1 : 0;
    }
    const dist = distField(mask, nx, nz); let dmax = 1; for (let i = 0; i < N; i++) dmax = Math.max(dmax, dist[i]);
    const peakScale = pi === 0 ? 1 : 0.7;
    const elev = new Float32Array(N), cls = new Uint8Array(N);
    for (let i = 0; i < N; i++) {
      if (!mask[i]) { elev[i] = -40; continue; }
      const q = dist[i] / dmax, n = fbm(lonA[i] * 300, latA[i] * 300);
      let f;
      if (isl.profile === 'cone') f = Math.pow(q, 0.85) * (1 + 0.2 * n);
      else if (isl.profile === 'hill') f = Math.pow(q, 0.7) * (0.7 + 0.45 * (n + 0.5));
      else if (isl.profile === 'mesa') f = smooth(0, 0.18, q) * (0.85 + 0.15 * n);
      else f = smooth(0, 0.3, q);
      elev[i] = Math.max(2, isl.h * peakScale * Math.max(0, f));
      cls[i] = isl.profile === 'mesa' && isl.id === 'penghu' ? CLS.tableland : classify(elev[i], null);
    }
    const x0 = px(lo[0]), z0 = pz(hi[1]);
    const g = gridGeometry(nx, nz, x => x0 + x * step * (wkm / ((nx - 1) * step)), z => z0 + z * step * (hkm / ((nz - 1) * step)), elev);
    out.push({ g, N, elev, cls, mask, region: isl.region, isl });
  });
  return out;
}

// ================= 色彩 =================
const C = (h) => new THREE.Color(h);
const LF_COLOR = { 1: C(LANDFORMS.plain.color), 2: C(LANDFORMS.hill.color), 3: C(LANDFORMS.tableland.color), 4: C(LANDFORMS.basin.color), 5: C(LANDFORMS.mountain.color) };
const HYPSO = [[0, '#3c9a54'], [100, '#8cc56a'], [300, '#d7d97f'], [700, '#e3b866'], [1000, '#d4924f'], [2000, '#a5643b'], [3000, '#7a4630'], [3600, '#eae6e1'], [4000, '#ffffff']].map(([h, c]) => [h, C(c)]);
function hypso(e, out) {
  for (let k = 0; k < HYPSO.length - 1; k++) {
    if (e <= HYPSO[k + 1][0]) { const t = Math.max(0, (e - HYPSO[k][0]) / (HYPSO[k + 1][0] - HYPSO[k][0])); return out.copy(HYPSO[k][1]).lerp(HYPSO[k + 1][1], t); }
  }
  return out.copy(HYPSO[HYPSO.length - 1][1]);
}
const SEA_COLOR = C('#1d4f7a');

// ================= 場景 =================
const state = { mode: 'terrain', color: 'landform', level: 'elem', exag: 6, focus: null, flood: 0, raining: false, rising: false, month: 7, city: 'kaohsiung' };
const wrap = $('#scene');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
wrap.appendChild(renderer.domElement);
const labelR = new CSS2DRenderer(); labelR.domElement.className = 'labels'; wrap.appendChild(labelR.domElement);
const scene = new THREE.Scene();
scene.background = C('#bfe3f7');
scene.fog = new THREE.Fog('#bfe3f7', 700, 1700);
const camera = new THREE.PerspectiveCamera(42, 1, 1, 5000);
// 手勢要綁在地圖畫布上（標籤層是「點不到」的透明層）
const controls = new OrbitControls(camera, renderer.domElement);
renderer.domElement.style.touchAction = 'none';
// 手機／平板：一指拖曳＝轉動，兩指捏合＝縮放（同時可拖曳移動）——這是 three.js 預設、在 iPhone／iPad 上最穩定的組合
// 電腦：左鍵轉動、右鍵移動、滾輪縮放
controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
controls.screenSpacePanning = false;
controls.zoomSpeed = 1.2;
// iPhone／iPad 的 Safari 會用兩指手勢縮放「整個網頁」，搶走地圖的縮放；這裡把它擋掉
['gesturestart', 'gesturechange', 'gestureend'].forEach(t => document.addEventListener(t, e => e.preventDefault(), { passive: false }));
document.addEventListener('touchmove', e => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
// 放大／縮小按鈕（備用：手指不方便時也能縮放）
function zoomBy(k) {
  fly = null;
  const off = camera.position.clone().sub(controls.target);
  const d = THREE.MathUtils.clamp(off.length() * k, controls.minDistance, controls.maxDistance);
  camera.position.copy(controls.target).add(off.setLength(d));
}
$('#zoomIn').onclick = () => zoomBy(0.7);
$('#zoomOut').onclick = () => zoomBy(1 / 0.7);
controls.rotateSpeed = 0.6;
controls.addEventListener('start', () => { fly = null; });
// 標籤不攔截手勢：手指一律交給地圖；「輕點」（幾乎沒移動）時，才看手指下面是哪個標籤
const tap = { x: 0, y: 0, t: 0, n: 0 };
renderer.domElement.addEventListener('pointerdown', e => { tap.n++; if (tap.n === 1) { tap.x = e.clientX; tap.y = e.clientY; tap.t = performance.now(); } else tap.t = 0; });
renderer.domElement.addEventListener('pointerup', e => {
  tap.n = Math.max(0, tap.n - 1);
  if (!tap.t || performance.now() - tap.t > 450 || Math.hypot(e.clientX - tap.x, e.clientY - tap.y) > 8) return;
  tap.t = 0;
  const order = ['tribe', 'island', 'lf', 'peak', 'city', 'spot'];
  for (const kind of order) for (const l of labels[kind]) {
    if (!l.onClick || !l.o.visible || l.el.style.display === 'none' || l.el.classList.contains('hid')) continue;
    const r = l.el.getBoundingClientRect();
    if (e.clientX >= r.left - 4 && e.clientX <= r.right + 4 && e.clientY >= r.top - 4 && e.clientY <= r.bottom + 4) { l.onClick(); return; }
  }
});
renderer.domElement.addEventListener('pointercancel', () => { tap.n = 0; tap.t = 0; });
controls.enableDamping = true; controls.maxPolarAngle = Math.PI * 0.49; controls.minDistance = 8; controls.maxDistance = 1400;
scene.add(new THREE.HemisphereLight('#ffffff', '#4b6b3a', 1.1));
const sun = new THREE.DirectionalLight('#fff6e0', 2.2); sun.position.set(-300, 400, 200); scene.add(sun);

const world = new THREE.Group(); world.scale.y = state.exag; scene.add(world);
const sea = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1400), new THREE.MeshLambertMaterial({ color: '#4a9fd8' }));
sea.rotation.x = -Math.PI / 2; sea.position.set(-150, 0, -20); world.add(sea);

const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
const M = buildMain();
const mainGeo = gridGeometry(M.nx, M.nz, x => px(G.lon0) + x * (px(G.lon1) - px(G.lon0)) / (M.nx - 1), z => pz(G.lat1) + z * (pz(G.lat0) - pz(G.lat1)) / (M.nz - 1), M.elev);
world.add(new THREE.Mesh(mainGeo, mat));
// 原住民族分布：每一格找最近的分布圈（距離 / 半徑 < 1 才算）
const ZKM = []; TRIBES.forEach((t, ti) => t.zones.forEach(([lon, lat, r]) => ZKM.push([px(lon), pz(lat), r, ti])));
// 圈內一定算；圈和圈之間的山區（海拔 500 公尺以上）就近補滿，讓分布區連成一片；西部平原、丘陵不上色
function tribeAt(x, z, e) {
  let best = -1, bq = 1e9;
  for (const [zx, zz, r, ti] of ZKM) { const q = Math.hypot(x - zx, z - zz) / r; if (q < bq) { bq = q; best = ti; } }
  return bq < 1 || (bq < 2.4 && e > 500) ? best : -1;
}
M.tribe = new Int8Array(M.elev.length).fill(-1);
for (let i = 0; i < M.elev.length; i++) if (M.mask[i]) M.tribe[i] = tribeAt(px(M.lonA[i]), pz(M.latA[i]), M.elev[i]);
const islandParts = [];
ISLANDS.forEach(isl => buildIsland(isl).forEach(p => { p.tribe = TRIBES.findIndex(t => t.island === isl.id); islandParts.push(p); world.add(new THREE.Mesh(p.g, mat)); }));
// 東沙環礁的珊瑚礁圈
ISLANDS.filter(i => i.atoll).forEach(i => {
  const [lon, lat, r] = i.atoll;
  const ring = new THREE.Mesh(new THREE.RingGeometry(r - 1.3, r, 64), new THREE.MeshBasicMaterial({ color: '#8ff0e6', transparent: true, opacity: 0.85, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(px(lon), 0.004, pz(lat)); world.add(ring);
  const lagoon = new THREE.Mesh(new THREE.CircleGeometry(r - 1.3, 64), new THREE.MeshBasicMaterial({ color: '#5ec8e0', transparent: true, opacity: 0.6 }));
  lagoon.rotation.x = -Math.PI / 2; lagoon.position.set(px(lon), 0.003, pz(lat)); world.add(lagoon);
});

// 水位（淹水模擬）
const flood = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1400), new THREE.MeshPhongMaterial({ color: '#2f7fe0', transparent: true, opacity: 0.55, shininess: 80, depthWrite: false }));
flood.rotation.x = -Math.PI / 2; flood.position.set(-150, 0, -20); flood.visible = false; world.add(flood);

// ================= 上色 =================
const tmp = new THREE.Color(), tmp2 = new THREE.Color();
const FOCUS_CLS = { plain: 1, hill: 2, tableland: 3, basin: 4, mountain: 5 };
const NO_TRIBE = C('#e9e4d4');
function colorFor(e, cls, reg, out, tribe = -1) {
  if (!cls) return out.copy(SEA_COLOR);
  if (state.color === 'tribe') {
    if (tribe >= 0 && (!state.tribeFocus || TRIBES[tribe].id === state.tribeFocus)) out.set(TRIBES[tribe].c); else out.copy(NO_TRIBE);
    out.multiplyScalar(0.82 + 0.3 * Math.min(1, e / 3200));
    return out;
  }
  if (state.color === 'height') hypso(e, out);
  else if (state.color === 'region') { out.set(REGIONS[reg].color); out.lerp(tmp2.set('#ffffff'), Math.min(0.35, e / 9000)); out.multiplyScalar(0.85 + 0.25 * Math.min(1, e / 3000)); }
  else { out.copy(LF_COLOR[cls]); const k = cls === 5 ? Math.min(1, (e - 1000) / 2900) : 0; out.lerp(tmp2.set(k > 0.9 ? '#ffffff' : '#5a3a28'), k * 0.45); }
  if (state.focus && FOCUS_CLS[state.focus] !== cls) out.lerp(tmp2.set('#cfcfcf'), 0.78);
  return out;
}
function paint() {
  const col = mainGeo.attributes.color.array;
  for (let i = 0; i < M.elev.length; i++) { colorFor(M.elev[i], M.cls[i], M.reg[i], tmp, M.tribe[i]); col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b; }
  mainGeo.attributes.color.needsUpdate = true;
  islandParts.forEach(p => {
    const a = p.g.attributes.color.array;
    for (let i = 0; i < p.N; i++) { colorFor(p.elev[i], p.mask[i] ? p.cls[i] : 0, p.region, tmp, p.tribe); a[i * 3] = tmp.r; a[i * 3 + 1] = tmp.g; a[i * 3 + 2] = tmp.b; }
    p.g.attributes.color.needsUpdate = true;
  });
}

// 依經緯度取得高度（m）
function heightAt(lon, lat) {
  const x = Math.round((lon - G.lon0) / (G.lon1 - G.lon0) * (M.nx - 1)), z = Math.round((G.lat1 - lat) / (G.lat1 - G.lat0) * (M.nz - 1));
  if (x < 0 || z < 0 || x >= M.nx || z >= M.nz) return null;
  const i = z * M.nx + x; return M.mask[i] ? M.elev[i] : null;
}
function islandAt(lon, lat) {
  let best = null, bd = 1e9;
  ISLANDS.forEach(i => { const d = Math.hypot(px(i.lon) - px(lon), pz(i.lat) - pz(lat)); if (d < bd) { bd = d; best = i; } });
  return bd < 30 ? best : null;
}
function spotHeight(lon, lat) {
  const h = heightAt(lon, lat); if (h != null) return h;
  const isl = islandAt(lon, lat); return isl ? Math.min(isl.h, isl.h * 0.5 + 10) : 5;
}

// ================= 標籤 =================
const labels = { lf: [], peak: [], spot: [], island: [], ruler: [], city: [], tribe: [] };
function addLabel(kind, html, lon, lat, hM, cls, onClick) {
  const el = document.createElement('div'); el.className = 'lb ' + cls; el.innerHTML = html;
  if (onClick) el.classList.add('clickable');
  const o = new CSS2DObject(el); o.position.set(px(lon), hM / 1000, pz(lat)); world.add(o);
  labels[kind].push({ o, el, hM, onClick }); return { o, el };
}
const LF_TYPE_OF_ZONE = { plain: 'plain', basin: 'basin', tableland: 'tableland' };
RIDGES.forEach(r => addLabel('lf', r.name, r.label[0], r.label[1], (heightAt(...r.label) || 2000) + 400, 'lf lf-mountain', () => showLandform('mountain', r.name)));
CONES.forEach(c => addLabel('lf', c.name, c.lon + 0.03, c.lat + 0.03, c.h + 300, 'lf lf-mountain', () => showLandform('mountain', c.name)));
HILL_LABELS.forEach(h => addLabel('lf', h.name, h.lon, h.lat, (heightAt(h.lon, h.lat) || 300) + 300, 'lf lf-hill', () => showLandform('hill', h.name)));
ZONES.forEach(z => addLabel('lf', z.name, z.label[0], z.label[1], (heightAt(...z.label) || z.h) + 250, 'lf lf-' + LF_TYPE_OF_ZONE[z.type], () => showLandform(z.type, z.name)));
PEAKS.forEach(p => addLabel('peak', `▲ ${p.name}<small>${p.h.toLocaleString()} 公尺</small>`, p.lon, p.lat, (heightAt(p.lon, p.lat) || p.h) + 120, 'peak', () => showPeak(p)));
ISLANDS.forEach(i => addLabel('island', `🏝️ ${i.name}`, i.lon, i.lat, i.h + 400, 'island', () => showIsland(i)));
SPOTS.forEach(s => { const h = spotHeight(s.lon, s.lat); s.h = h; s.lbl = addLabel('spot', `<span class="pin">${s.i}</span><span class="nm">${s.n}</span>`, s.lon, s.lat, h + 60, 'spot', () => showSpot(s)); });
TRIBES.forEach(t => { t.lbl = addLabel('tribe', `<span class="tdot" style="background:${t.c}"></span><b>${t.n}</b><small>${t.v}</small>`, t.vlon, t.vlat, spotHeight(t.vlon, t.vlat) + 80, 'tribe', () => showTribe(t)); });
RAIN.forEach(c => addLabel('city', `☔ ${c.name}`, c.lon, c.lat, (heightAt(c.lon, c.lat) || 30) + 200, 'city', () => { state.city = c.id; $('#city').value = c.id; drawRain(); }));

// ================= 比例尺：公尺、公里 =================
const rulerGroup = new THREE.Group(); world.add(rulerGroup);
(function buildRulers() {
  // 高度尺（放在臺灣東方海上）
  const rx = px(122.32), rz = pz(23.55);
  const pole = new THREE.Mesh(new THREE.BoxGeometry(2.4, 4, 2.4), new THREE.MeshLambertMaterial({ color: '#fff7d6' }));
  pole.position.set(rx, 2, rz); rulerGroup.add(pole);
  for (let m = 0; m <= 4000; m += 500) {
    // 每 500 公尺一小格、每 1,000 公尺一大格
    const major = m % 1000 === 0;
    const tick = new THREE.Mesh(new THREE.BoxGeometry(major ? 6 : 3.5, 0.012, 1.2), new THREE.MeshLambertMaterial({ color: major ? '#d33' : '#333' }));
    tick.position.set(rx + (major ? 3 : 1.8), m / 1000, rz); rulerGroup.add(tick);
    if (major) addLabel('ruler', m === 0 ? '海平面 0 公尺' : `${m.toLocaleString()} 公尺<small>＝ ${m / 1000} 公里</small>`, 122.32 + 0.09, 23.55, m, 'ruler ruler-h');
  }
    // 距離比例尺（臺灣西南方海上）0–100 公里
  const sx = px(119.75), sz = pz(22.2);
  const segs = [[0, 25, '#222'], [25, 50, '#fff'], [50, 100, '#222']];
  segs.forEach(([a, b, c]) => { const bar = new THREE.Mesh(new THREE.BoxGeometry(b - a, 0.06, 3), new THREE.MeshLambertMaterial({ color: c })); bar.position.set(sx + (a + b) / 2, 0.03, sz); rulerGroup.add(bar); });
  [0, 25, 50, 100].forEach(k => addLabel('ruler', k === 100 ? '100 公里' : `${k}`, 119.75 + k / KX, 22.2 - 0.05, 0, 'ruler ruler-km'));
  addLabel('ruler', '⬆ 北', 119.75, 22.55, 0, 'ruler ruler-n');
})();

// ================= 雨 =================
const DROPS = 5000;
const rainGeo = new THREE.BufferGeometry();
const rainPos = new Float32Array(DROPS * 6); rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9 }));
rain.frustumCulled = false; rain.visible = false; scene.add(rain);
const clouds = new THREE.Group(); scene.add(clouds); clouds.visible = false;
const cloudMat = new THREE.MeshLambertMaterial({ color: '#f4f6f8', transparent: true, opacity: 0.6, depthWrite: false });
let rainZones = [], rainSpeed = 1, activeDrops = DROPS;
function setRainZones() {
  const m = MONTH_RAIN[state.month];
  rainZones = m.zones.map(([w, s, e, n]) => [px(w), pz(n), px(e), pz(s)]);
  const city = RAIN.find(c => c.id === state.city), mm = city.mm[state.month];
  activeDrops = Math.round(DROPS * Math.min(1, 0.12 + mm / 450));
  rainSpeed = 0.8 + Math.min(1.5, mm / 300);
  for (let d = 0; d < DROPS; d++) resetDrop(d, true);
  // 雲
  clouds.clear();
  rainZones.forEach(([x0, z0, x1, z1], zi) => {
    const n = Math.max(4, Math.round((x1 - x0) * (z1 - z0) / 900));
    for (let k = 0; k < n; k++) {
      const c = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), cloudMat);
      c.scale.set(6 + hash(k, zi) * 6, 1.6 + hash(zi, k) * 1.2, 5 + hash(k + 3, zi) * 5);
      c.position.set(x0 + hash(k, zi + 5) * (x1 - x0), 42 + hash(k + 1, zi) * 6, z0 + hash(k + 2, zi) * (z1 - z0));
      clouds.add(c);
    }
  });
}
function resetDrop(d, randomY) {
  const z = rainZones[d % rainZones.length] || [0, 0, 1, 1];
  const x = z[0] + Math.random() * (z[2] - z[0]), zz = z[1] + Math.random() * (z[3] - z[1]);
  const y = randomY ? Math.random() * 42 : 42;
  const o = d * 6; rainPos[o] = x; rainPos[o + 1] = y; rainPos[o + 2] = zz; rainPos[o + 3] = x + 0.3; rainPos[o + 4] = y - 2.6; rainPos[o + 5] = zz;
}
function stepRain(dt) {
  const floor = Math.max(0, state.flood / 1000 * state.exag);
  for (let d = 0; d < DROPS; d++) {
    const o = d * 6;
    if (d >= activeDrops) { rainPos[o + 1] = rainPos[o + 4] = -999; continue; }
    const v = (40 + (d % 7) * 3) * rainSpeed * dt;
    rainPos[o + 1] -= v; rainPos[o + 4] -= v; rainPos[o] += v * 0.08; rainPos[o + 3] += v * 0.08;
    if (rainPos[o + 4] < floor || rainPos[o + 1] < -5) resetDrop(d, false);
  }
  rainGeo.attributes.position.needsUpdate = true;
}

// ================= 淹水統計 =================
const totals = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < M.cls.length; i++) totals[M.cls[i]]++;
function updateFlood() {
  const L = state.mode === 'rain' ? state.flood : 0;
  flood.visible = L > 0; flood.position.y = L / 1000;
  const sub = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < M.cls.length; i++) if (M.cls[i] && M.elev[i] < L) sub[M.cls[i]]++;
  let land = 0, landSub = 0; for (let k = 1; k < 6; k++) { land += totals[k]; landSub += sub[k]; }
  $('#floodVal').innerHTML = `${Math.round(state.flood).toLocaleString()} <small>公尺</small> ＝ ${(state.flood / 1000).toFixed(state.flood < 1000 ? 2 : 1)} <small>公里</small>`;
  $('#floodSlider').value = state.flood;
  const rows = ['plain', 'basin', 'tableland', 'hill', 'mountain'].map(k => {
    const c = CLS[k], pct = totals[c] ? Math.round(sub[c] / totals[c] * 100) : 0;
    return `<div class="fl-row"><span class="dot" style="background:${LANDFORMS[k].color}"></span>${LANDFORMS[k].name}<div class="bar"><i style="width:${pct}%"></i></div><b>${pct}%</b></div>`;
  }).join('');
  const drowned = SPOTS.filter(s => s.h < L);
  $('#floodStats').innerHTML = rows + `<p class="fl-sum">臺灣本島有 <b>${Math.round(landSub / land * 100)}%</b> 的土地在水面下。</p>` +
    (drowned.length ? `<p class="fl-sum">被淹到的景點（${drowned.length}）：${drowned.slice(0, 14).map(s => s.n).join('、')}${drowned.length > 14 ? '…' : ''}</p>` : '');
  SPOTS.forEach(s => s.lbl.el.classList.toggle('flooded', s.h < L));
  $('#floodHint').textContent = floodHint(L);
}
function floodHint(L) {
  if (L <= 0) return '按「開始下雨」或拖拉水位，看看水會淹到哪裡。';
  if (L < 100) return '平原最先被淹：平原高度大多不到 100 公尺。';
  if (L < 500) return '平原、盆地都淹了，台地和丘陵還露在水面上。';
  if (L < 1000) return '只剩丘陵的高處和山地露出水面。丘陵不到 1,000 公尺。';
  if (L < 3000) return '超過 1,000 公尺，只剩下山地！臺灣變成一串細長的島。';
  if (L < 3952) return '只剩幾座高山的山頂，像小島一樣。';
  return '連玉山（3,952 公尺）都淹沒了！';
}

// ================= 雨量圖表 =================
function drawRain() {
  const c = RAIN.find(x => x.id === state.city), max = 550, W = 340, H = 170, bw = W / 12;
  const bars = c.mm.map((v, m) => {
    const h = v / max * (H - 30), x = m * bw, sea = SEASONS.find(s => s.months.includes(m));
    return `<rect x="${x}" y="0" width="${bw}" height="${H - 18}" fill="${sea.color}" opacity="${m === state.month ? 0.55 : 0.18}"/>` +
      `<rect class="bar-m" data-m="${m}" x="${x + 3}" y="${H - 18 - h}" width="${bw - 6}" height="${h}" rx="3" fill="${m === state.month ? '#1565c0' : '#4a90d9'}"/>` +
      `<text x="${x + bw / 2}" y="${H - 22 - h}" font-size="9" text-anchor="middle" fill="#234">${Math.round(v)}</text>` +
      `<text x="${x + bw / 2}" y="${H - 5}" font-size="10" text-anchor="middle" fill="#345">${m + 1}月</text>`;
  }).join('');
  const lines = RAIN_LEVELS.slice(0, 3).map(l => { const y = H - 18 - l.mm / max * (H - 30); return `<line x1="0" x2="${W}" y1="${y}" y2="${y}" stroke="#c33" stroke-dasharray="3 3" stroke-width=".7"/><text x="${W - 2}" y="${y - 2}" font-size="8" text-anchor="end" fill="#c33">${l.mm}mm</text>`; }).join('');
  $('#rainChart').innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="100%">${bars}${lines}</svg>`;
  $('#rainChart').querySelectorAll('.bar-m').forEach(b => b.addEventListener('click', () => setMonth(+b.dataset.m)));
  const total = c.mm.reduce((a, b) => a + b, 0);
  $('#seasonBox').innerHTML = SEASONS.map(s => {
    const v = s.months.reduce((a, m) => a + c.mm[m], 0);
    return `<div class="sea" style="background:${s.color}"><b>${s.name}</b><span>${s.months.map(m => m + 1).join('、')}月</span><em>${Math.round(v).toLocaleString()} mm</em><i>${Math.round(v / total * 100)}%</i></div>`;
  }).join('');
  $('#rainTotal').innerHTML = `<b>${c.name}</b> 一年約 <b>${Math.round(total).toLocaleString()}</b> 毫米（mm）` +
    `${c.src === 'book' ? '<span class="tag book">課本資料</span>' : '<span class="tag cwa">補充：氣象署平均約略值</span>'}${c.note ? `<br><small>${c.note}</small>` : ''}`;
  const mr = MONTH_RAIN[state.month];
  $('#monthInfo').innerHTML = `<h4>${state.month + 1} 月：${mr.why}</h4><p>${mr.elem}</p><p class="muted">雨下最多的地方：<b>${mr.where}</b>（3D 地圖上有雲的地方）</p>`;
  $('#monthSel').value = state.month;
  setRainZones();
}
function setMonth(m) { state.month = m; drawRain(); }

// ================= 資訊卡 =================
const info = $('#info');
function openInfo(html) { info.innerHTML = `<button class="x" aria-label="關閉">✕</button>${html}`; info.classList.add('show'); info.querySelector('.x').onclick = () => info.classList.remove('show'); }
const txt = (o) => state.level === 'elem' ? o.elem : o.junior;
function examplesOf(type) {
  if (type === 'mountain') return RIDGES.map(r => r.name).concat(CONES.map(c => c.name));
  if (type === 'hill') return HILL_LABELS.map(h => h.name);
  return ZONES.filter(z => z.type === type).map(z => z.name);
}
function showLandform(type, name) {
  const lf = LANDFORMS[type];
  const spots = SPOTS.filter(s => s.t === type);
  openInfo(`<div class="tag-lf" style="background:${lf.color}">${lf.icon} ${lf.name}</div><h3>${name || lf.name}</h3><p>${txt(lf)}</p>
    <p><b>課本舉例：</b>${examplesOf(type).join('、')}</p>
    <p><b>附近景點：</b></p><ul class="spot-list">${spots.map(s => `<li data-n="${s.n}">${s.i} ${s.n}</li>`).join('')}</ul>
    <button class="btn-sm" id="focusBtn">只看「${lf.name}」在哪裡</button>`);
  info.querySelectorAll('.spot-list li').forEach(li => li.onclick = () => { const s = SPOTS.find(x => x.n === li.dataset.n); flyTo(s.lon, s.lat, 60); showSpot(s); });
  $('#focusBtn').onclick = () => setFocus(type);
}
function lfName(e, lon, lat) { const h = heightAt(lon, lat); if (h == null) return ''; const i = Math.round((G.lat1 - lat) / (G.lat1 - G.lat0) * (M.nz - 1)) * M.nx + Math.round((lon - G.lon0) / (G.lon1 - G.lon0) * (M.nx - 1)); return LANDFORMS[CLS_KEY[M.cls[i]]]?.name || ''; }
const T_NAME = { mountain: '山地', hill: '丘陵', tableland: '台地', basin: '盆地', plain: '平原', coast: '海岸', volcano: '火山', island: '外島' };
function photoHTML(n) {
  const ph = PHOTOS[n]; if (!ph) return '';
  return `<figure class="ph"><img src="photos/${ph.f}" alt="${n}" loading="lazy"><figcaption>📷 ${ph.a || '佚名'}・${ph.l}・<a href="${ph.u}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`;
}
function showSpot(s) {
  openInfo(`${photoHTML(s.n)}<div class="tag-lf" style="background:${LANDFORMS[s.t]?.color || '#7fb3d5'}">${T_NAME[s.t]}</div><h3>${s.i} ${s.n}</h3><p>${s.d}</p>
    <p class="muted">這裡大約海拔 <b>${Math.round(s.h).toLocaleString()} 公尺</b>（${(s.h / 1000).toFixed(2)} 公里）${lfName(s.h, s.lon, s.lat) ? `，地圖上屬於「${lfName(s.h, s.lon, s.lat)}」` : ''}。</p>`);
}
function showTribe(t) {
  state.tribeFocus = t.id; paint(); renderTribes();
  openInfo(`<div class="tag-lf" style="background:${t.c};color:#fff">🪶 原住民族</div><h3>${t.n}</h3>
    <p><b>住在哪裡：</b>${t.where}</p><p>${txt(t)}</p>
    <p class="muted">地圖上的代表部落：<b>${t.v}</b>。彩色範圍是主要分布地區的示意，不是精確的界線；現在也有很多族人住在城市裡。</p>
    <button class="btn-sm" id="tribeAll">看全部 16 族</button>`);
  $('#tribeAll').onclick = () => { state.tribeFocus = null; paint(); renderTribes(); info.classList.remove('show'); };
  const isl = t.island ? ISLANDS.find(i => i.id === t.island) : null;
  flyTo(t.vlon, t.vlat, isl ? 45 : 130);
}
function renderTribes() {
  $('#tribeList').innerHTML = TRIBES.map((t, i) => `<button data-t="${t.id}" class="${state.tribeFocus === t.id ? 'on' : ''}"><span class="dot" style="background:${t.c}"></span><b>${i + 1}. ${t.n}</b><small>${t.where}</small></button>`).join('');
  $('#tribeList').querySelectorAll('button').forEach(b => b.onclick = () => showTribe(TRIBES.find(t => t.id === b.dataset.t)));
}
function showPeak(p) {
  openInfo(`<div class="tag-lf" style="background:${LANDFORMS.mountain.color}">⛰️ 山地</div><h3>▲ ${p.name}</h3><p>高度 <b>${p.h.toLocaleString()} 公尺</b>＝ ${(p.h / 1000).toFixed(3)} 公里${p.note ? `，${p.note}` : ''}。</p>
    <p class="muted">${state.level === 'elem' ? '如果一層樓大約 3 公尺，' + p.name + '差不多有 ' + Math.round(p.h / 3).toLocaleString() + ' 層樓那麼高！' : '臺灣面積不大，卻有兩百多座 3,000 公尺以上的高山，是板塊擠壓形成的年輕山脈。'}</p>`);
}
function showIsland(i) {
  const d = Math.round(Math.hypot(px(i.lon) - px(120.30), pz(i.lat) - pz(22.62)));
  openInfo(`<div class="tag-lf" style="background:${REGIONS[i.region].color}">${i.kind}</div><h3>🏝️ ${i.name}</h3><p>${txt(i)}</p>
    <p class="muted">最高點約 <b>${i.h} 公尺</b>；距離高雄直線約 <b>${d} 公里</b>。</p>`);
  flyTo(i.lon, i.lat, Math.max(30, i.id === 'dongsha' ? 60 : i.id === 'penghu' ? 70 : 40));
}

// ================= 相機 =================
let fly = null;
function flyTo(lon, lat, dist, polar = 0.9) {
  const tx = px(lon), tz = pz(lat);
  const to = new THREE.Vector3(tx, 0, tz), az = -0.35;
  const from = new THREE.Vector3(tx + Math.sin(az) * Math.sin(polar) * dist, Math.cos(polar) * dist, tz + Math.cos(az) * Math.sin(polar) * dist);
  fly = { t: 0, p0: camera.position.clone(), p1: from, c0: controls.target.clone(), c1: to };
}
function viewHome() { flyTo(121.05, 23.55, 500, 1.0); }
function viewTop() { fly = { t: 0, p0: camera.position.clone(), p1: new THREE.Vector3(px(120.95), 560, pz(23.62) + 1), c0: controls.target.clone(), c1: new THREE.Vector3(px(120.95), 0, pz(23.62)) }; }
function viewAll() { fly = { t: 0, p0: camera.position.clone(), p1: new THREE.Vector3(px(119.4), 1050, pz(23.4) + 260), c0: controls.target.clone(), c1: new THREE.Vector3(px(119.4), 0, pz(23.4)) }; }

// ================= UI =================
function setFocus(f) { state.focus = state.focus === f ? null : f; document.querySelectorAll('.legend [data-lf]').forEach(b => b.classList.toggle('on', b.dataset.lf === state.focus)); paint(); }
function setColor(c) { state.color = c; document.querySelectorAll('[data-color]').forEach(b => b.classList.toggle('on', b.dataset.color === c)); renderLegend(); paint(); }
function renderLegend() {
  const el = $('#legend');
  if (state.color === 'landform') el.innerHTML = ['plain', 'basin', 'tableland', 'hill', 'mountain'].map(k => `<button data-lf="${k}" class="${state.focus === k ? 'on' : ''}"><span class="dot" style="background:${LANDFORMS[k].color}"></span>${LANDFORMS[k].icon} ${LANDFORMS[k].name}</button>`).join('');
  else if (state.color === 'region') el.innerHTML = Object.values(REGIONS).map(r => `<div class="rg"><span class="dot" style="background:${r.color}"></span><b>${r.name}</b><small>${r.list}</small></div>`).join('') + '<p class="muted">依國發會區域劃分；有的課本把宜蘭歸在東部。</p>';
  else el.innerHTML = `<div class="hyp">${HYPSO.slice(0, -1).map(([h, c]) => `<span style="background:#${c.getHexString()}">${h.toLocaleString()}</span>`).join('')}</div><p class="muted">單位：公尺（m）。和課本「分層設色圖」一樣：越高顏色越深，最高處是白色。</p>`;
  el.querySelectorAll('[data-lf]').forEach(b => b.onclick = () => { setFocus(b.dataset.lf); showLandform(b.dataset.lf); });
}
function setMode(m) {
  state.mode = m;
  document.querySelectorAll('.tabs [data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
  document.querySelectorAll('.pane').forEach(p => p.hidden = p.dataset.pane !== m);
  if (m === 'tribes') { if (state.color !== 'tribe') state.prevColor = state.color; state.color = 'tribe'; renderTribes(); paint(); }
  else if (state.color === 'tribe') { state.tribeFocus = null; setColor(state.prevColor || 'landform'); }
  const isRain = m === 'rain';
  rain.visible = clouds.visible = isRain && state.raining;
  labels.city.forEach(l => l.o.visible = isRain);
  if (isRain) drawRain(); else state.rising = false;
  updateFlood();
  if (m === 'spots') renderSpotList();
  applyToggles();
}
function renderSpotList() {
  const groups = ['mountain', 'hill', 'tableland', 'basin', 'plain', 'volcano', 'coast', 'island'];
  $('#spotList').innerHTML = groups.map(g => `<h4>${LANDFORMS[g]?.icon || (g === 'coast' ? '🌊' : g === 'volcano' ? '🌋' : '🏝️')} ${T_NAME[g]}</h4><ul class="cards">${SPOTS.filter(s => s.t === g).map(s => `<li data-n="${s.n}">${PHOTOS[s.n] ? `<img src="photos/${PHOTOS[s.n].f}" alt="" loading="lazy">` : `<span class="noimg">${s.i}</span>`}<span>${s.i} ${s.n}</span></li>`).join('')}</ul>`).join('');
  $('#spotList').querySelectorAll('li').forEach(li => li.onclick = () => { const s = SPOTS.find(x => x.n === li.dataset.n); const isl = islandAt(s.lon, s.lat); flyTo(s.lon, s.lat, s.t === 'island' ? 40 : 70); showSpot(s); });
}
function applyToggles() {
  const on = (id) => $('#' + id).checked;
  const tr = state.mode === 'tribes';
  labels.lf.forEach(l => l.o.visible = on('tgLf') && !tr);
  labels.peak.forEach(l => l.o.visible = on('tgPeak') && !tr);
  labels.spot.forEach(l => l.o.visible = (on('tgSpot') || state.mode === 'spots') && !tr);
  labels.tribe.forEach(l => l.o.visible = tr);
  labels.island.forEach(l => l.o.visible = on('tgIsland'));
  labels.ruler.forEach(l => l.o.visible = on('tgRuler'));
  rulerGroup.visible = on('tgRuler');
}
function setLevel(l) {
  state.level = l; document.querySelectorAll('.seg [data-level]').forEach(b => b.classList.toggle('on', b.dataset.level === l));
  document.body.dataset.level = l; info.classList.remove('show');
}

document.querySelectorAll('.tabs [data-mode]').forEach(b => b.onclick = () => setMode(b.dataset.mode));
document.querySelectorAll('[data-color]').forEach(b => b.onclick = () => setColor(b.dataset.color));
document.querySelectorAll('.seg [data-level]').forEach(b => b.onclick = () => setLevel(b.dataset.level));
['tgLf', 'tgPeak', 'tgSpot', 'tgIsland', 'tgRuler'].forEach(id => $('#' + id).onchange = applyToggles);
$('#exag').oninput = (e) => { state.exag = +e.target.value; world.scale.y = state.exag; $('#exagVal').textContent = '×' + state.exag; };
$('#btnHome').onclick = viewHome; $('#btnTop').onclick = viewTop; $('#btnAll').onclick = viewAll;
$('#islandBtns').innerHTML = ISLANDS.map(i => `<button data-isl="${i.id}">${i.name}</button>`).join('');
$('#islandBtns').querySelectorAll('button').forEach(b => b.onclick = () => showIsland(ISLANDS.find(i => i.id === b.dataset.isl)));
$('#city').innerHTML = RAIN.map(c => `<option value="${c.id}">${c.name}（${REGIONS[c.region].name}）${c.src === 'book' ? '・課本' : ''}</option>`).join('');
$('#city').value = state.city; $('#city').onchange = (e) => { state.city = e.target.value; drawRain(); };
$('#monthSel').innerHTML = MONTH_RAIN.map((_, m) => `<option value="${m}">${m + 1} 月</option>`).join('');
$('#monthSel').onchange = (e) => setMonth(+e.target.value);
$('#btnRain').onclick = () => {
  state.raining = !state.raining; state.rising = state.raining;
  rain.visible = clouds.visible = state.raining;
  $('#btnRain').textContent = state.raining ? '⏸ 停止下雨' : '🌧️ 開始下雨（水位上升）';
};
$('#floodSlider').oninput = (e) => { state.flood = +e.target.value; state.rising = false; updateFlood(); };
$('#btnDrain').onclick = () => { state.flood = 0; state.rising = false; updateFlood(); };
document.querySelectorAll('[data-flood]').forEach(b => b.onclick = () => { state.flood = +b.dataset.flood; state.rising = false; updateFlood(); });
$('#panelToggle').onclick = () => { document.body.classList.toggle('panel-min'); layout(); };
// 手機：面板一開始收起來，只留分頁列；點分頁就展開
const isPhone = () => window.innerWidth <= 900;
if (isPhone()) document.body.classList.add('panel-min');
document.querySelectorAll('.tabs [data-mode]').forEach(b => b.addEventListener('click', () => { document.body.classList.remove('panel-min'); layout(); }));

// ================= 啟動 =================
function resize() {
  const w = wrap.clientWidth, h = wrap.clientHeight;
  renderer.setSize(w, h); labelR.setSize(w, h); camera.aspect = w / h;
  layout();
}
// 讓地圖的中心落在「沒被面板擋住」的地方：手機往上移、電腦往右移
function layout() {
  const w = wrap.clientWidth, h = wrap.clientHeight, r = $('#panel').getBoundingClientRect();
  const top = 52; // 上方標題列
  let ox = 0, oy = 0;
  if (isPhone()) oy = Math.round((r.height - top) / 2);
  else if (!document.body.classList.contains('panel-min')) ox = -Math.round((r.right) / 2);
  else oy = 0;
  if (ox || oy) camera.setViewOffset(w, h, ox, oy, w, h); else camera.clearViewOffset();
  camera.updateProjectionMatrix();
}
new ResizeObserver(() => layout()).observe($('#panel'));
window.addEventListener('resize', resize);
resize();
camera.position.set(px(120.2), 330, pz(21.2)); controls.target.set(px(120.95), 0, pz(23.65));
setColor('landform'); setLevel('elem'); setMode('terrain'); viewHome();
$('#loading').remove();

const clock = new THREE.Clock(); let floodTick = 0, frame = 0;
// 標籤避免重疊：重要的先放（外島 > 地形名 > 山峰 > 雨量站 > 景點），被擋到的先藏起來
function declutter() {
  const placed = [];
  for (const kind of ['tribe', 'island', 'lf', 'peak', 'city', 'spot']) {
    for (const l of labels[kind]) {
      if (!l.o.visible || l.el.style.display === 'none') continue;
      l.el.classList.remove('hid');
      const r = l.el.getBoundingClientRect();
      if (!r.width) continue;
      const hit = placed.some(q => r.left < q.right - 2 && r.right > q.left + 2 && r.top < q.bottom - 2 && r.bottom > q.top + 2);
      if (hit) l.el.classList.add('hid'); else placed.push(r);
    }
  }
}
renderer.setAnimationLoop(() => {
  const raw = clock.getDelta(), dt = Math.min(0.05, raw);
  if (fly) {
    fly.t = Math.min(1, fly.t + Math.min(0.2, raw) / 1.4); const k = fly.t < 0.5 ? 2 * fly.t * fly.t : 1 - Math.pow(-2 * fly.t + 2, 2) / 2;
    camera.position.lerpVectors(fly.p0, fly.p1, k); controls.target.lerpVectors(fly.c0, fly.c1, k);
    if (fly.t >= 1) fly = null;
  }
  controls.update();
  if (rain.visible) stepRain(dt);
  if (state.mode === 'rain' && state.rising && state.flood < 4000) {
    const mm = RAIN.find(c => c.id === state.city).mm[state.month];
    state.flood = Math.min(4000, state.flood + dt * (25 + mm * 0.6) * (state.flood < 200 ? 0.6 : 1.6));
    if ((floodTick += dt) > 0.1) { floodTick = 0; updateFlood(); }
  }
  if (++frame % 12 === 0) declutter();
  // 遠近調整標籤：太遠時隱藏小景點文字
  const dist = camera.position.distanceTo(controls.target);
  document.body.classList.toggle('far', dist > 420);
  renderer.render(scene, camera); labelR.render(scene, camera);
});
window.__tw = { state, M, SPOTS, camera, controls, setMode, setColor, flyTo, updateFlood };
