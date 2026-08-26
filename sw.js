/* 星光教學舞台 class.efetl.com — service worker
   導覽頁走 network-first（永遠拿到最新的題本與教案），離線時退回快取；
   靜態資源走 stale-while-revalidate（先給快取秒開、背景更新）。
   影音的 Range 請求一律直送網路，不進快取。
   VERSION 只有在要「強制清空所有舊快取」時才需要往上加。 */
const VERSION = 'v1';
const SHELL = 'class-shell-' + VERSION;
const RUNTIME = 'class-runtime-' + VERSION;

const SHELL_FILES = [
  '/',
  '/index.html',
  '/exams.html',
  '/low.html',
  '/stage.html',
  '/english.html',
  '/toolbox.html',
  '/offline.html',
  '/manifest.json',
  '/assets/css/site.css',
  '/assets/img/logo.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(SHELL)
      .then((c) => Promise.allSettled(SHELL_FILES.map((f) => c.add(f))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== SHELL && k !== RUNTIME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // 影音的 Range 請求（206）不能進 Cache Storage，直接走網路
  if (req.headers.has('range')) return;

  // 題本頁面：先連網拿最新版，成功就順手存起來，離線時再拿出來用
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req)
          .then((hit) => hit || caches.match('/offline.html')))
    );
    return;
  }

  // 靜態資源：stale-while-revalidate —— 先給快取（秒開），同時在背景抓新版，
  // 所以就算用同一個檔名覆蓋圖片或 CSS，下次開啟就會是新的。
  e.respondWith(
    caches.match(req).then((hit) => {
      const fresh = fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || fresh;
    })
  );
});
