#!/usr/bin/env bash
# 平行錄製所有短片（3 段同時），成品集中到 OUT/final/
set -u
OUT=${1:?output dir}; mkdir -p "$OUT/final"
cd "$(dirname "$0")/.."
ls clips/*.json | sort -V | xargs -P 3 -I{} bash -c '
  f="{}"; name=$(basename "$f" .json); d="'"$OUT"'/work/$name"; mkdir -p "$d"
  if [ -f "'"$OUT"'/final/$name.mp4" ]; then exit 0; fi
  python3 tools/make_episode.py "$f" "$d" > "$d/log.txt" 2>&1 && cp "$d"/*.mp4 "'"$OUT"'/final/" && echo "OK $name" || echo "FAIL $name"
'
