#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 PWA 的 head 區塊注入 repo 內所有 HTML（可重複執行，已注入的會跳過）。

題本頁是由 exam-books/build_book.py 產生的，每次重新產生、複製過來以後
再跑一次這支腳本就好：

    python3 tools/inject-pwa.py
"""
import pathlib, sys

BLOCK = """<!-- EFETL-PWA -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#4c5fd5">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="星光舞台">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<script>if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}</script>
<!-- /EFETL-PWA -->
"""

def main():
    root = pathlib.Path(__file__).resolve().parent.parent
    added = skipped = 0
    problems = []
    for p in sorted(root.rglob('*.html')):
        if '.git' in p.parts:
            continue
        s = p.read_text(encoding='utf-8')
        if '<!-- EFETL-PWA -->' in s:
            skipped += 1
            continue
        if s.count('</head>') != 1:
            problems.append(f'{p.relative_to(root)}：找到 {s.count("</head>")} 個 </head>，略過')
            continue
        p.write_text(s.replace('</head>', BLOCK + '</head>', 1), encoding='utf-8')
        added += 1
    print(f'注入 {added} 個檔案，跳過 {skipped} 個（已有 PWA 區塊）')
    for m in problems:
        print('  ⚠️', m)
    return 1 if problems else 0

if __name__ == '__main__':
    sys.exit(main())
