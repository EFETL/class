#!/usr/bin/env bash
# 重新打包臺灣 3D 地形教室：taiwan3d/src/*.js → taiwan3d/app.js（單一檔案、可離線、可直接雙擊開啟）
# 需要 Node.js。第一次執行會在 tools/taiwan3d-build 安裝 three.js 與 esbuild。
set -euo pipefail
cd "$(dirname "$0")/.."
B=tools/taiwan3d-build
if [ ! -d "$B/node_modules/three" ]; then
  mkdir -p "$B" && (cd "$B" && echo "{\"name\":\"taiwan3d-build\",\"private\":true}" > package.json && npm i --no-audit --no-fund three@0.170.0 esbuild@0.24 >/dev/null)
fi
NODE_PATH="$B/node_modules" "$B/node_modules/.bin/esbuild" taiwan3d/src/main.js \
  --bundle --minify --format=iife --target=es2019 --legal-comments=eof --outfile=taiwan3d/app.js
