#!/bin/bash
# לחיצה כפולה כדי לרענן את ה-Digest ולפתוח את הדשבורד.
cd "$(dirname "$0")" || exit 1
echo "מרענן את ה-Digest…"
node scripts/fetch-digest.mjs
open index.html
