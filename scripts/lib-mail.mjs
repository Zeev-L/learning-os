// lib-mail.mjs — קריאת ניוזלטרים מ-Gmail דרך IMAP (תווית ייעודית).
// מופעל רק אם IMAP_USER + IMAP_APP_PASSWORD מוגדרים ב-.env. אחרת מדלג בשקט.
import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";

const readMin = (t) => Math.max(1, Math.round((t || "").split(/\s+/).length / 200));

// סיווג ניוזלטר לתחום לפי התאמה למקורות הידועים, אחרת ניחוש קל מהנושא/שולח.
function classify(sources, senderName, senderAddr, subject) {
  const hay = `${senderName} ${senderAddr} ${subject}`.toLowerCase();
  for (const s of sources) {
    const name = (s.name || "").toLowerCase().split("—")[0].trim();
    if (name && name.length > 3 && hay.includes(name)) return s.domain;
    try { const host = new URL(s.url).host.replace(/^www\./, ""); if (host && senderAddr && senderAddr.includes(host.split(".")[0])) return s.domain; } catch {}
  }
  if (/\bproduct|\bpm\b|roadmap|discovery/.test(hay)) return "pm";
  if (/engineer|developer|devops|infra|coding|backend/.test(hay)) return "rd";
  if (/strateg|market|vc|funding|business/.test(hay)) return "st";
  return "ai";
}

// חילוץ לינק "קריאה מקוונת" מגוף המייל (מדלג על unsubscribe/tracking).
function extractLink(text, html) {
  const src = html || text || "";
  const m = src.match(/https?:\/\/[^\s"'<>)]+/g) || [];
  for (const u of m) {
    if (/unsub|list-manage|mailchi|beehiiv\.com\/subscribe|sendgrid|utm_|\.gif|\.png|pixel|open\?/i.test(u)) continue;
    return u.replace(/[.,)]+$/, "");
  }
  return null;
}

export async function fetchMailItems({ since, sources, summarize }) {
  const user = process.env.IMAP_USER, pass = process.env.IMAP_APP_PASSWORD;
  if (!user || !pass) return [];
  const label = process.env.LO_MAIL_LABEL || "Learning";
  const client = new ImapFlow({ host: "imap.gmail.com", port: 993, secure: true, auth: { user, pass }, logger: false });
  const items = [];
  process.stdout.write(`• מייל (${label}) … `);
  try {
    await client.connect();
    let lock;
    try { lock = await client.getMailboxLock(label); }
    catch { console.log(`התווית "${label}" לא נמצאה ב-Gmail — צור אותה ונתב אליה ניוזלטרים`); await client.logout(); return []; }
    try {
      const uids = await client.search({ since: new Date(since) }, { uid: true });
      const recent = (uids || []).slice(-40);
      for (const uid of recent) {
        const msg = await client.fetchOne(uid, { source: true }, { uid: true });
        if (!msg || !msg.source) continue;
        const p = await simpleParser(msg.source);
        const from = (p.from && p.from.value && p.from.value[0]) || {};
        const source = (from.name || from.address || "ניוזלטר").replace(/\s*<.*>$/, "");
        const title = (p.subject || "(ללא נושא)").trim();
        const body = p.text || (p.html ? p.html.replace(/<[^>]+>/g, " ") : "");
        const ts = p.date ? p.date.getTime() : Date.now();
        const mid = (p.messageId || "").replace(/[<>]/g, "");
        const url = mid ? `https://mail.google.com/mail/u/0/#search/rfc822msgid:${encodeURIComponent(mid)}` : "https://mail.google.com/mail/u/0/";
        const online = extractLink(p.text, p.html);
        const s = await summarize(title, body);
        items.push({ domain: classify(sources, from.name, from.address, title), title, source, sourceUrl: url,
          date: new Date(ts).toISOString().slice(0, 10), readMin: readMin(body),
          bottomLine: s.bottomLine, tldr: s.tldr, implications: s.implications, actions: s.actions, actionsKind: s.actionsKind,
          links: online ? [{ label: "קריאה מקוונת", url: online }] : [], mail: true });
      }
    } finally { if (lock) lock.release(); }
    console.log(`${items.length} ניוזלטרים`);
  } catch (e) { console.log(`שגיאה (${e.message})`); }
  finally { try { await client.logout(); } catch {} }
  return items;
}
