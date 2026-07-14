#!/usr/bin/env node
// check-feeds.mjs — בדיקת בריאות של כל ה-RSS ב-sources.js. מסמן feeds מתים/תקועים.
// הרצה: node scripts/check-feeds.mjs   (מומלץ אחת לחודש)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Parser from "rss-parser";

const DATA = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "data");
const readWin = (file, key) => { try { const w = {}; new Function("window", fs.readFileSync(path.join(DATA, file), "utf8"))(w); return w[key] || {}; } catch { return {}; } };
const SOURCES = (readWin("sources.js", "SOURCES").items || []).filter(s => s.rss);
const STALE_DAYS = 60;
const parser = new Parser({ timeout: 15000, headers: { "User-Agent": "learning-os/1.0" } });

const dead = [], stale = []; let ok = 0;
console.log(`בודק ${SOURCES.length} feeds…\n`);
for (const s of SOURCES) {
  try {
    const feed = await parser.parseURL(s.rss);
    const items = feed.items || [];
    if (!items.length) { dead.push(`${s.name} — feed ריק`); continue; }
    const newest = items.reduce((m, it) => { const t = Date.parse(it.isoDate || it.pubDate || 0) || 0; return t > m ? t : m; }, 0);
    const ageDays = newest ? Math.round((Date.now() - newest) / 864e5) : 999;
    if (ageDays > STALE_DAYS) { stale.push(`${s.name} — פריט אחרון לפני ${ageDays} ימים`); }
    else ok++;
  } catch (e) { dead.push(`${s.name} — שגיאה (${e.message})`); }
}

console.log(`\n===== סיכום בריאות =====`);
console.log(`✓ תקינים: ${ok}/${SOURCES.length}`);
if (stale.length) { console.log(`\n⚠ תקועים (>${STALE_DAYS} יום ללא פריט חדש):`); stale.forEach(x => console.log("  · " + x)); }
if (dead.length) { console.log(`\n✗ מתים / שגיאה:`); dead.forEach(x => console.log("  · " + x)); }
if (!stale.length && !dead.length) console.log("\n🎉 כל ה-feeds תקינים.");
console.log(`\nהמלצה: לגזור/להחליף את המתים ב-data/sources.js.`);
