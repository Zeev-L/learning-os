# חיבור ניוזלטרים מהמייל (Gmail אישי) — מדריך חד-פעמי

מטרה: שהניוזלטרים שמגיעים אליך במייל ייכנסו אוטומטית ל-Digest, לצד ה-RSS.
כל השלבים נעשים פעם אחת. זמן משוער: ~5 דקות.

## שלב 1 — ודא ש-2-Step Verification פעיל
App Password דורש אימות דו-שלבי.
1. היכנס ל-**myaccount.google.com** → **Security** (אבטחה).
2. אם **2-Step Verification** לא פעיל — הפעל אותו (עקוב אחרי ההוראות).

## שלב 2 — הפעל IMAP ב-Gmail
1. פתח **Gmail** → גלגל השיניים ⚙️ למעלה → **See all settings**.
2. לשונית **Forwarding and POP/IMAP**.
3. תחת **IMAP access** → בחר **Enable IMAP** → **Save Changes**.

## שלב 3 — צור App Password
1. לך ל-**myaccount.google.com/apppasswords** (או Security → App passwords).
2. תן שם: `learning-os` → **Create**.
3. Google יציג סיסמה בת 16 תווים. **העתק אותה.**
4. ⚠️ הדבק אותה **רק** בקובץ `.env` (שלב 5) — לא בצ'אט, לא בשום מקום אחר.

## שלב 4 — צור תווית "Learning" ונתב אליה ניוזלטרים
1. ב-Gmail, בסרגל הצד השמאלי → **More** → **Create new label** → שם: `Learning`.
2. נתב ניוזלטרים לתווית (שתי דרכים):
   - **מהיר לבדיקה:** סמן כמה מיילים של ניוזלטרים → כפתור התווית (🏷️) → `Learning`.
   - **לשוטף (מומלץ):** פתח ניוזלטר → תפריט ⋮ → **Filter messages like these** →
     **Create filter** → סמן **Apply the label: Learning** (ואפשר גם **Also apply to matching conversations**).
   חזור על כך למספר שולחים, או צור פילטר רחב.

## שלב 5 — הדבק את הסיסמה בקובץ .env
1. פתח את הקובץ `~/Desktop/learning-os/.env` (למשל ב-TextEdit).
2. בשורה `IMAP_APP_PASSWORD=` הדבק את הסיסמה מהשלב 3 (אפשר עם או בלי רווחים).
3. שמור.

## סיום — רענן
לחיצה כפולה על `עדכן-digest.command`. הניוזלטרים מהתווית `Learning` יופיעו ב-Digest
עם תגית **✉ מייל**. אם משהו לא עובד — הסקריפט ידפיס הודעה ברורה (למשל "התווית לא נמצאה").
