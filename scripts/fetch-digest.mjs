#!/usr/bin/env node
// fetch-digest.mjs — מנוע ה-RSS.
// מושך פריטים חדשים, מושך את התוכן המלא (content:encoded), ממזג ל-data/digest.js.
// פריטים עם manual:true (נכתבו ידנית) נשמרים תמיד ומופיעים ראשונים.
// בלי מפתח: tldr = תקציר נקי מהתוכן. עם ANTHROPIC_API_KEY ב-.env → tldr עברי + משמעויות + המלצות.
//
// הרצה:  node scripts/fetch-digest.mjs            (14 יום אחורה)
//        node scripts/fetch-digest.mjs --days 3   (סריקה קצרה)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Parser from "rss-parser";
import { fetchMailItems } from "./lib-mail.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");

const argDays = (() => { const i = process.argv.indexOf("--days"); return i > -1 ? parseInt(process.argv[i + 1], 10) || 14 : 14; })();
const SINCE = Date.now() - argDays * 864e5;
const MAX_ITEMS = 80;
const PER_FEED = 4;

// --- .env (optional) ---
try {
  for (const line of fs.readFileSync(path.join(ROOT, ".env"), "utf8").split("\n")) {
    const m = line.match(/^\s*([\w]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}
const HAS_KEY = !!process.env.ANTHROPIC_API_KEY;

function readWindowFile(file, key) {
  try { const win = {}; new Function("window", fs.readFileSync(path.join(DATA, file), "utf8"))(win); return win[key] || {}; }
  catch { return {}; }
}
const SOURCES = readWindowFile("sources.js", "SOURCES").items || [];
const existing = readWindowFile("digest.js", "DIGEST").items || [];
const seen = new Set(existing.map(x => x.sourceUrl));

const stripHtml = (h) => (h || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&rsquo;|&lsquo;/g, "'")
  .replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim();
const readMin = (text) => Math.max(1, Math.round((text || "").split(/\s+/).length / 200));

const parser = new Parser({ timeout: 15000, headers: { "User-Agent": "learning-os/1.0" }, customFields: { item: ["content:encoded"] } });

async function summarize(title, fullText) {
  const clean = stripHtml(fullText);
  if (!HAS_KEY) {
    // fallback ללא מפתח: תקציר נקי אמיתי מהתוכן (לא רק הכותרת)
    const tldr = clean.slice(0, 420) + (clean.length > 420 ? "…" : "");
    return { tldr: tldr || title, bottomLine: null, implications: null, actions: [], actionsKind: "deepen", links: [] };
  }
  try {
    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const r = await client.messages.create({
      model: process.env.LO_MODEL || "claude-sonnet-5", max_tokens: 800,
      messages: [{ role: "user", content:
`אתה עוזר ל-R&D & Product Ops Director להתעדכן. סכם את המאמר לעברית. החזר JSON בלבד:
{"bottomLine":"משפט אחד חד — השורה התחתונה, מה לקחת מזה","tldr":"2-4 משפטים עם התוכן האמיתי והמספרים החשובים","implications":"1-2 משפטים — מה המשמעות","actions":["2-3 המלצות פרקטיות; אם אין פרקטי — נקודות שכדאי להעמיק בהן"],"actionsKind":"practical או deepen"}

כותרת: ${title}
תוכן: ${clean.slice(0, 6000)}` }]
    });
    const txt = r.content?.[0]?.text || "{}";
    const j = JSON.parse(txt.slice(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
    return { tldr: j.tldr || clean.slice(0, 300), bottomLine: j.bottomLine || null, implications: j.implications || null, actions: j.actions || [], actionsKind: j.actionsKind || "deepen", links: [] };
  } catch (e) {
    console.warn("  ⚠ summarize:", e.message);
    return { tldr: clean.slice(0, 420), bottomLine: null, implications: null, actions: [], actionsKind: "deepen", links: [] };
  }
}

const fresh = [];
for (const s of SOURCES) {
  if (!s.rss) continue;
  process.stdout.write(`• ${s.name} … `);
  try {
    const feed = await parser.parseURL(s.rss);
    let count = 0;
    for (const it of feed.items || []) {
      if (count >= PER_FEED) break;
      const link = it.link || it.guid;
      if (!link || seen.has(link)) continue;
      const ts = it.isoDate ? Date.parse(it.isoDate) : (it.pubDate ? Date.parse(it.pubDate) : Date.now());
      if (ts < SINCE) continue;
      seen.add(link);
      const full = it["content:encoded"] || it.content || it.contentSnippet || it.summary || "";
      const { tldr, bottomLine, implications, actions, actionsKind, links } = await summarize(it.title || "", full);
      fresh.push({ domain: s.domain, title: (it.title || "").trim(), source: s.name, sourceUrl: link,
        date: new Date(ts).toISOString().slice(0, 10), readMin: readMin(stripHtml(full)),
        bottomLine, tldr, implications, actions, actionsKind, links });
      count++;
    }
    console.log(`${count} חדשים`);
  } catch (e) { console.log(`שגיאה (${e.message})`); }
}

// ניוזלטרים מהמייל (אם IMAP מוגדר ב-.env)
const mailItems = await fetchMailItems({ since: SINCE, sources: SOURCES, summarize });
fresh.push(...mailItems);

// מיזוג: manual תמיד נשמרים וראשונים; השאר לפי תאריך
const freshFiltered = fresh.filter(f => !existing.some(e => e.sourceUrl === f.sourceUrl));
const manual = existing.filter(x => x.manual);
const rest = [...freshFiltered, ...existing.filter(x => !x.manual)].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
// הסרת כפילויות לפי כותרת מנורמלת (אותו סיפור מכמה מקורות). manual תמיד ראשונים ונשמרים.
const norm = t => (t || "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim().slice(0, 50);
const seenTitles = new Set();
const merged = [...manual, ...rest].filter(x => {
  const k = norm(x.title); if (!k) return true;
  if (seenTitles.has(k)) return false; seenTitles.add(k); return true;
}).slice(0, MAX_ITEMS);

const out = `// digest.js — עודכן ${new Date().toISOString().slice(0, 10)} ע"י scripts/fetch-digest.mjs. פריטי manual:true נכתבו ידנית ונשמרים.
window.DIGEST = ${JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), items: merged }, null, 2)};
`;
fs.writeFileSync(path.join(DATA, "digest.js"), out);
console.log(`\n✓ ${freshFiltered.length} חדשים · ${manual.length} ידניים נשמרו · סה"כ ${merged.length} · ${HAS_KEY ? "תקצור עברי (API)" : "תקצירי RSS (ללא API)"}`);
