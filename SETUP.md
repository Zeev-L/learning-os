# הרצה במכונה / יוזר חדשים

המערכת **RSS-only ונייד לחלוטין** — אין תלות ב-Gmail, בתיבת מייל, או ביוזר אישי.
כל המקורות נוסעים עם ה-repo, אז זה עובד זהה בכל מכונה.

## רק לצפייה — אפס הגדרה
פתח בדפדפן: **https://zeev-l.github.io/learning-os/**
עובד מכל מכונה/דפדפן, מיד. אין מה להתקין.

## כדי גם לרענן (למשוך מקורות חדשים ולעדכן) — הגדרה חד-פעמית
1. **Clone:** `git clone https://github.com/Zeev-L/learning-os.git`
2. **תלויות מנוע ה-RSS:** `cd learning-os && npm install`
3. **גיט:** ודא ש-`gh` מחובר — `gh auth login` (נדרש כדי לדחוף עדכונים חזרה ל-repo).
4. **רענון:** בשיחת Claude Code בתיקיית הפרויקט, בקש **"רענן את ה-Digest"**.
   הרענון מושך **RSS** (מ-`data/sources.js`) **+ GitHub Trending**, מסכם לעברית, ומעדכן את `data/digest.js`.
   לעדכון הגרסה החיה: `git add -A && git commit -m "refresh" && git push`.

## רענון אוטומטי שבועי (אופציונלי — בלי מפתח API)
כדי שהרענון ירוץ לבד כל שבוע:
1. ודא ש-claude CLI מותקן: `npm install -g @anthropic-ai/claude-code`, והתחבר: `claude`.
2. **בדיקה ידנית ראשונה:** `bash scripts/auto-refresh.sh` (צפה ב-`auto-refresh.log` ובאתר החי).
3. אם הצליח — הפעל תזמון: `bash scripts/install-schedule.sh` (רץ כל ראשון 08:00).
ה-plist נוצר **דינמית לפי היוזר/הנתיב**, אז עובד בכל מכונה/יוזר בלי עריכה. דורש: המחשב דלוק בזמן הריצה.
להסרה: `launchctl unload ~/Library/LaunchAgents/com.zeev.learningos.plist`.

## המקורות נשמרים אוטומטית
כל המקורות (`data/sources.js`), הבייסליין, וההיסטוריה (`data/digest.js`) יושבים ב-repo —
ה-clone מביא את הכל, אז המערכת ממשיכה למשוך **בדיוק את אותם מקורות**, בכל מכונה, בלי שום התחברות.

## הוספת/הסרת מקורות
לערוך את `data/sources.js` (מקור עם `rss` = נמשך אוטומטית). זהו — אין תלות חיצונית.
