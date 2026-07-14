#!/usr/bin/env node
// fetch-raw.mjs — מושך פריטים חדשים גולמיים (בלי סיכום) לקובץ, כדי ש-Claude יסכם אותם "דרכו".
// מיקוד: מקורות tier "start" (הליבה) עם RSS. הפלט נכתב ל-OUT (ברירת מחדל: scratchpad).
//
// הרצה:  node scripts/fetch-raw.mjs [outPath] [--days N] [--all]
//   --all  = כל המקורות (לא רק start)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Parser from "rss-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");

const OUT = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2]
  : path.join(ROOT, "raw-inbox.json");
const argDays = (() => { const i = process.argv.indexOf("--days"); return i > -1 ? parseInt(process.argv[i + 1], 10) || 10 : 10; })();
const ALL = process.argv.includes("--all");
const SINCE = Date.now() - argDays * 864e5;
const PER_FEED = 2;

const readWindowFile = (file, key) => { try { const w = {}; new Function("window", fs.readFileSync(path.join(DATA, file), "utf8"))(w); return w[key] || {}; } catch { return {}; } };
const stripHtml = h => (h || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

const SOURCES = (readWindowFile("sources.js", "SOURCES").items || []).filter(s => s.rss && (ALL || s.tier === "start"));
const existing = readWindowFile("digest.js", "DIGEST").items || [];
const seen = new Set(existing.map(x => x.sourceUrl));
const parser = new Parser({ timeout: 15000, headers: { "User-Agent": "learning-os/1.0" }, customFields: { item: ["content:encoded"] } });

const items = [];
for (const s of SOURCES) {
  process.stdout.write(`• ${s.name} … `);
  try {
    const feed = await parser.parseURL(s.rss);
    let n = 0;
    for (const it of feed.items || []) {
      if (n >= PER_FEED) break;
      const link = it.link || it.guid; if (!link || seen.has(link)) continue;
      const ts = it.isoDate ? Date.parse(it.isoDate) : (it.pubDate ? Date.parse(it.pubDate) : Date.now());
      if (ts < SINCE) continue;
      seen.add(link);
      const excerpt = stripHtml(it["content:encoded"] || it.content || it.contentSnippet || "").slice(0, 1100);
      items.push({ domain: s.domain, source: s.name, region: s.region || null, title: (it.title || "").trim(),
        url: link, date: new Date(ts).toISOString().slice(0, 10), excerpt });
      n++;
    }
    console.log(`${n}`);
  } catch (e) { console.log(`שגיאה (${e.message})`); }
}
items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
fs.writeFileSync(OUT, JSON.stringify(items, null, 1));
console.log(`\n✓ ${items.length} פריטים גולמיים → ${OUT}`);
