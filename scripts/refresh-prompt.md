רענן את ה-Digest של מערכת הלמידה (learning-os). אתה רץ headless בתיקיית ה-repo. עבוד אוטונומית עד הסוף.

1. הרץ: `node scripts/fetch-raw.mjs` — מושך פריטי RSS גולמיים לקובץ `raw-inbox.json`.
2. קרא את `raw-inbox.json`. נקה כפילויות (אותו סיפור מכמה מקורות; דלג על פריטים דלים כמו "not much happened"). בחר ~12-15 פריטים מאוזנים בין התחומים (ai/pm/rd/st).
3. לכל פריט נבחר כתוב **בעברית**: `bottomLine` (שורה תחתונה חדה, משפט אחד), `tldr` (2-4 משפטים עם התוכן והמספרים האמיתיים), `implications` (משמעות), ו-`actions` (2-3 המלצות פרקטיות עם "איך", `actionsKind`: practical/deepen). קבע `domain` ו-`date` (מה-raw), `source` = שם המקור, `sourceUrl` = הלינק, `readMin` (הערכה). `links`: רק אם יש משאב שונה מהמקור (אחרת []).
4. משוך GitHub Trending: WebFetch על `https://github.com/trending?since=weekly`. בחר עד 3 repos רלוונטיים ל-AI/Product/R&D (דלג על C++/k8s/pentesting/רעש). הוסף כפריטים: `source`="GitHub Trending · owner/name", `sourceUrl`=לינק ה-repo, `trending`:true, `date`=היום.
5. מזג ל-`data/digest.js`: פריטים חדשים למעלה, **שמור את כל פריטי `manual:true` הקיימים**, מיין לפי `date` יורד, `generatedAt`=תאריך היום. פורמט: `window.DIGEST = {...}` תקין.
6. תחזוקה: אם עברו **מעל 90 יום** מ-`updatedAt` שב-`data/sources.js` — כתוב בפלט "MAINTENANCE DUE: quarterly source audit".
7. **אימות לפני דחיפה:** הרץ `node -e "const w={};new Function('window',require('fs').readFileSync('data/digest.js','utf8'))(w);if(!w.DIGEST||!w.DIGEST.items.length)process.exit(1);console.log('digest OK:',w.DIGEST.items.length)"`. אם נכשל — תקן, ואל תדחוף קובץ שבור.
8. `git add -A && git commit -m "auto-refresh $(date +%Y-%m-%d)" && git push`.
9. הדפס שורת סיכום: כמה פריטים חדשים נוספו וכמה סה"כ.
