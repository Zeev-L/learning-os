// digest.js — סיכומי התוכן. פריטים עם manual:true נכתבו ידנית ונשמרים בכל ריצת סקריפט.
// שדות: domain, title, source, sourceUrl, date, readMin, bottomLine, tldr, implications, actions[], actionsKind, links[], mail?, trending?, linkedin?
window.DIGEST = {
  "generatedAt": "2026-07-13",
  "items": [
    {
      "manual": true,
      "trending": true,
      "domain": "rd",
      "date": "2026-07-13",
      "title": "OmniRoute — AI gateway לניתוב בין LLMs עם דחיסת טוקנים",
      "source": "GitHub Trending · diegosouzapw/OmniRoute",
      "sourceUrl": "https://github.com/diegosouzapw/OmniRoute",
      "bottomLine": "gateway אחד שמנתב בקשות בין כמה ספקי LLM ודוחס טוקנים — בול לנושא ניהול עלות/ניתוב.",
      "tldr": "כלי open-source חם השבוע ב-GitHub Trending (~4.3k כוכבים): gateway שמחבר כמה ספקי LLM מאחורי ממשק אחד, עם ניתוב חכם ודחיסת טוקנים. מתחבר ישירות לתובנות שראית (Coinbase שחתכו ~50% מעלות ה-AI, בחירת מודל) — תשתית לניהול עלות AI בארגון.",
      "implications": "אם הצוותים שלך מפזרים בקשות בין מודלים — gateway מרכזי עם ניתוב+דחיסה יכול לחתוך עלות משמעותית בלי להגביל מפתחים.",
      "actionsKind": "practical",
      "actions": [
        "לבחון כ-gateway לניהול עלות/ניתוב בין מודלים בצוותי R&D",
        "להשוות מול פתרונות gateway קיימים (LiteLLM וכו') לפני אימוץ"
      ],
      "links": []
    },
    {
      "manual": true,
      "trending": true,
      "domain": "rd",
      "date": "2026-07-13",
      "title": "DesktopCommander MCP — שליטה בטרמינל וקבצים לקלוד",
      "source": "GitHub Trending · wonderwhy-er/DesktopCommanderMCP",
      "sourceUrl": "https://github.com/wonderwhy-er/DesktopCommanderMCP",
      "bottomLine": "MCP server שנותן לקלוד גישה לטרמינל ולמערכת הקבצים — הרחבה פופולרית ל-Claude Code.",
      "tldr": "MCP server חם השבוע: מאפשר לקלוד לשלוט בטרמינל ולגשת לקבצים מחוץ לפרויקט. דוגמה מעשית לסעיף ה-MCP בבייסליין — הרחבת יכולות הסוכן מעבר לצ'אט.",
      "implications": "ממחיש איך MCP הופך את קלוד מ'עוזר בצ'אט' ל'סוכן שפועל במערכת'. אבטחה: גישת מערכת דורשת אמון מלא במקור.",
      "actionsKind": "practical",
      "actions": [
        "לנסות כדוגמה מעשית ל-MCP (חיבור קלוד לטרמינל/קבצים)",
        "לבצע audit לפני התקנה — MCP עם גישת מערכת = הרשאות רחבות"
      ],
      "links": []
    },
    {
      "manual": true,
      "trending": true,
      "domain": "ai",
      "date": "2026-07-13",
      "title": "claude-video — ניתוח וידאו לקלוד (פריימים + תמלול)",
      "source": "GitHub Trending · bradautomates/claude-video",
      "sourceUrl": "https://github.com/bradautomates/claude-video",
      "bottomLine": "נותן לקלוד לנתח וידאו ע\"י חילוץ פריימים ותמלול — רלוונטי ישירות לפרויקט conversation-insights שלך.",
      "tldr": "כלי חם השבוע שמעניק לקלוד יכולת ניתוח וידאו (חילוץ פריימים + תמלול אודיו). רלוונטי ישירות ל-conversation-insights שלך (תמלול פגישות→תובנות) — שווה לבחון אם הוא משלים או מייתר חלק מהזרימה הקיימת.",
      "implications": "כלים קהילתיים שמרחיבים את קלוד לווידאו יכולים לחסוך לך בנייה עצמית — אבל צריך לבדוק איכות ותמיכה בעברית.",
      "actionsKind": "practical",
      "actions": [
        "לבחון אם משלים/מייתר חלק מ-conversation-insights (תמלול)",
        "לבדוק תמיכה בעברית ואיכות התמלול לפני אימוץ"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "st",
      "readMin": 4,
      "date": "2026-07-13",
      "title": "Cursor עובדת על 'Sand' — מתחרה ל-Claude Cowork",
      "source": "גיקטיים",
      "sourceUrl": "https://www.geektime.co.il/cursor-works-on-claude-cowork-competitor/",
      "bottomLine": "Cursor (נרכשה ע\"י SpaceXAI ב-‏$60B) מפתחת סוכן 'Sand' שיתחרה ב-Claude Cowork — מעבר לכתיבת קוד.",
      "tldr": "לפי The Information, Cursor — שנרכשה לפני חודש ע\"י SpaceXAI (לשעבר xAI) בכ-$60 מיליארד — מפתחת סוכן חדש בשם 'Sand' שיתחרה ב-Claude Cowork של Anthropic וב-ChatGPT Work של OpenAI. הסוכן יבצע משימות כמו מענה למיילים, עבודה על מסמכים ואקסל. הפיתוח החל באפריל ורץ פנימית כבר חודש לקראת השקה אפשרית.",
      "implications": "המרוץ על 'סוכן עבודה כללי' (לא רק קוד) מתחמם — שלושה שחקנים גדולים. איתות לכיוון שאליו הולכים כלי הפרודוקטיביות.",
      "actionsKind": "deepen",
      "actions": [
        "לעקוב אחרי מרוץ 'סוכני העבודה' (Cowork / ChatGPT Work / Sand)",
        "לחשוב אילו משימות משרדיות כדאי להתחיל להאציל לסוכנים"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "st",
      "readMin": 3,
      "date": "2026-07-13",
      "title": "רדיס מפטרת כ-27% מעובדיה בישראל",
      "source": "גלובס",
      "sourceUrl": "https://www.globes.co.il/news/article.aspx?did=1001549085",
      "bottomLine": "רדיס (הוערכה בשיאה ב-‏$2B+) מפטרת ~80 מ-300 עובדיה בישראל, אחרי עזיבת המייסדים.",
      "tldr": "חברת רדיס, שבשיאה הוערכה ביותר מ-$2 מיליארד וגייסה מאות מיליונים מ-SoftBank ו-Tiger Global, מפטרת כ-27% מעובדיה בישראל (~80 מתוך ~300), על רקע עזיבת המייסדים.",
      "implications": "עוד סימן לסביבה מאתגרת גם לחברות תשתית בוגרות ומוערכות — רלוונטי לתמונת שוק העבודה בהייטק הישראלי.",
      "actionsKind": "deepen",
      "actions": [
        "לעקוב אחרי גל ההתייעלות גם בחברות בוגרות, לא רק צעירות"
      ],
      "links": []
    },
    {
      "manual": true,
      "mail": true,
      "domain": "st",
      "readMin": 4,
      "date": "2026-07-12",
      "title": "Apple is suing OpenAI — over its hardware ambitions",
      "source": "The Neuron",
      "sourceUrl": "https://www.theneurondaily.com/",
      "bottomLine": "Apple תובעת את OpenAI על גניבת סודות מסחריים סביב מכשיר החומרה — הופך ממאבק גיוס עובדים למלחמת פלטפורמות.",
      "tldr": "Apple הגישה תביעה נגד OpenAI, io Products וכמה עובדי Apple לשעבר, בטענה שהשתמשו בסודות מסחריים כדי להאיץ את כניסת OpenAI לחומרה (המכשיר בהובלת Jony Ive). לפי התלונה: מהנדס לשעבר ניצל באג אימות כדי לגשת לקבצים סודיים, ו-OpenAI קיבלה מסמכי ייצור של מעגלים. השניים עדיין שותפים ב-Apple Intelligence — מה שמחדד את המתח.",
      "implications": "OpenAI רוצה לשלוט ב-interface (אפליקציות, browser, agents, ובהמשך מכשירים) — בדיוק מה ש-Apple בנתה עליו אימפריה. אם Apple תאט את מאמץ החומרה, זו הופכת ממאבק HR למלחמת פלטפורמות.",
      "actionsKind": "deepen",
      "actions": [
        "לעקוב אחרי המעבר של OpenAI לשליטה ב-interface (מכשירים/agents) כווקטור אסטרטגי",
        "לשים לב למתח 'שותף שהופך למתחרה' בין ספקי AI לפלטפורמות"
      ],
      "links": []
    },
    {
      "manual": true,
      "mail": true,
      "domain": "st",
      "region": "il",
      "readMin": 5,
      "date": "2026-07-12",
      "title": "The meta habit, the caveman prompt, and where AI value lands",
      "source": "Passov's Newsletter · Yuval Passov",
      "sourceUrl": "https://passov.substack.com/",
      "bottomLine": "שלוש תובנות: 'מטא-הרגל' (5 דק' רפלקציה יומית), פרומפט 'Caveman' לחיסכון בטוקנים, ו-Huang: הערך ב-AI בשכבת האפליקציה.",
      "tldr": "יובל פסוב (יזם ישראלי, 40k+ עוקבים): (1) 'מטא-הרגל' — 5 דקות רפלקציה בסוף היום ('מה עבד, מה לא, ולמה') שמשפרות כל הרגל אחר. (2) פרויקט 'Caveman' (14k כוכבי GitHub) — לבקש מ-AI לענות במינימום מילים חוסך טוקנים ועלות. (3) Jensen Huang: הערך ב-AI מצטבר בשכבת ה-application, לא בשכבת המודל שכולם רצים אליה.",
      "implications": "שתי תובנות פרקטיות מיידיות (רפלקציה יומית + פרומפט חסכוני) + מסר אסטרטגי: ההזדמנות היא בבניית אפליקציות מעל המודלים, לא בתחרות עם המעבדות.",
      "actionsKind": "practical",
      "actions": [
        "להוסיף שורת 'Caveman' לכלי AI יומי: 'Answer in as few words as possible. No introductions, no summaries. Keep code, numbers, and commands exact.'",
        "לאמץ 5 דקות רפלקציה יומית — מה עבד, מה לא, ולמה",
        "לחשוב היכן לבנות — שכבת האפליקציה מעל המודלים, לא מולם"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "pm",
      "readMin": 6,
      "date": "2026-07-12",
      "title": "How tech workers actually feel about AI in 2026",
      "source": "Lenny's Newsletter · Noam Segal",
      "sourceUrl": "https://www.lennysnewsletter.com/p/how-tech-workers-actually-feel-about",
      "bottomLine": "סקר ענק: ה-AI פיצל את עובדי הטק לחצי משגשג וחצי מזועזע; burnout קפץ 11 נקודות בשנה.",
      "tldr": "סקר הסנטימנט השנתי (אלפי עובדי טק ממוצר, הנדסה, עיצוב, דאטה ומכירות) מגלה: ה-AI פיצל את כוח העבודה כמעט בדיוק לחצי — חצי משגשג, חצי מזועזע. ארבעה ארכיטיפים רגשיים (Energized, Conflicted, Disoriented, Resentful). Burnout זינק ב-11 נקודות בשנה, וכמעט אף אחד לא ימליץ על התחום למצטרף חדש.",
      "implications": "הפער הרגשי סביב AI הוא סיכון ניהולי אמיתי — מורל, שימור ואימוץ. הפחד המוביל אינו אובדן משרה ל-AI (משהו אחר).",
      "actionsKind": "practical",
      "actions": [
        "למפות באיזה ארכיטיפ נמצא הצוות שלך ולנהל בהתאם",
        "לטפל ב-burnout כ-KPI — קפיצה של 11 נקודות היא דגל אדום"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-07-12",
      "readMin": 2,
      "title": "הפתרון הזול ל-Fable: מעטפת Auto-Pi סביב Pi",
      "source": "LinkedIn · Rom Iluz",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7481979752111792128",
      "bottomLine": "במקום לשרוף 20-30K טוקנים על ה-harness — מעטפת לולאה מוגדרת (Plan→Build→Review→Verify→Ship) עם מודל זול לכל שלב.",
      "tldr": "רום בנה מעטפת Auto-Pi סביב מודל Pi: שולחים פרומפט, בוחרים Workflow, והלופ רץ עם סקילים מוגדרים לכל שלב — בלי להסתמך על יוזמת המודל. מחליף מודלים לפי צורך (Fable לתכנון, GLM 5.2 למימוש).",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להשתמש במעטפת לולאה מוגדרת במקום harness כבד לחיסכון טוקנים",
        "להפריד מודל תכנון (Fable) ממודל מימוש (זול)"
      ],
      "links": [
        {
          "label": "auto-pi (GitHub)",
          "url": "https://github.com/romiluz13/auto-pi"
        }
      ]
    },
    {
      "manual": true,
      "domain": "ai",
      "readMin": 5,
      "date": "2026-07-11",
      "title": "Introduction for and Reactions to Plan A",
      "source": "Don't Worry About the Vase · Zvi",
      "sourceUrl": "https://thezvi.substack.com/p/introduction-for-and-reactions-to",
      "bottomLine": "יוצרי 'AI 2027' פרסמו 'Plan A' — חזון חיובי איך *כן* לנהל את מעבר ה-AI. שווה קריאה גם בלי להסכים.",
      "tldr": "הצוות שמאחורי 'AI 2027' (תחזית שהתבררה כמדויקת להפתיע) פרסם 'Plan A' — חזון פוזיטיבי של מה שכדאי לעשות בהמשך. הכותבים (Kokotajlo, ו-Greenblatt — החוזה המדויק #2 ב-2025 מתוך 413) בעלי track record חזק. Zvi לא מאמץ את התוכנית אבל ממליץ בחום לקרוא ולהתייחס אליה ברצינות.",
      "implications": "מסמך שיעצב את השיח על מדיניות ובטיחות AI — שווה להכיר את המסגרת גם אם חולקים עליה.",
      "actionsKind": "deepen",
      "actions": [
        "לקרוא את Plan A כמסגרת לחשיבה על תרחישי AI",
        "לעקוב אחרי הכיסוי המלא של Zvi על GPT-5.6 בשבוע הבא"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "ai",
      "readMin": 6,
      "date": "2026-07-11",
      "title": "Do Automated Evals Work?",
      "source": "Hamel's Blog · Hamel Husain",
      "sourceUrl": "https://hamel.dev/",
      "bottomLine": "אם ה-eval האוטומטי עצמו לא מדויק — אתה עף בעיוורון. חובה לכייל אותו מול שיפוט אנושי.",
      "tldr": "Hamel השווה 100 traces שתויגו ידנית מול מערכות eval אוטומטיות, כדי לבדוק עד כמה אפשר לסמוך עליהן. המאמר מפרט מתי ה-evaluator האוטומטי מסכים עם אדם ומתי הוא מטעה.",
      "implications": "evals הם התשתית לאיכות מוצרי AI — אבל evaluator לא-מכויל נותן ביטחון שווא. מדד ההסכמה evaluator↔אדם הוא מדד איכות בפני עצמו.",
      "actionsKind": "practical",
      "actions": [
        "לתקף כל eval אוטומטי מול מדגם traces מתויגי-אדם לפני שסומכים עליו",
        "למדוד agreement בין ה-evaluator לאדם כ-KPI"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "ai",
      "readMin": 4,
      "date": "2026-07-10",
      "title": "OpenAI launches GPT-5.6 Sol / Terra / Luna",
      "source": "AI News (smol.ai)",
      "sourceUrl": "https://news.smol.ai/issues/26-07-09-gpt-56/",
      "bottomLine": "OpenAI השיקה משפחת GPT-5.6 בשלושה גדלים ותמחור מדורג — סוף למודל-פיקר, התחלה של 'סולם' עלות/ביצועים.",
      "tldr": "OpenAI השיקה את GPT-5.6 בשלושה גדלים — Sol (דגל), Terra (כמו 5.5 בזול), Luna (הזול) — עם תמחור מדורג: Sol ‏$5/$30, Terra ‏$2.5/$15, Luna ‏$1/$6 למיליון טוקן, ורמת מאמץ חדשה 'ultra' שמריצה 4 סוכנים במקביל. Codex הפך ל-superapp ב-ChatGPT. הקהילה מעורבת: שבחים על השליטה, ביקורת על 30+ קומבינציות והיעדר 'Auto'.",
      "implications": "המעבר מ'מודל אחד' ל'סולם דגמים + מאמץ' מעביר את ההחלטה אליך — צריך לבחור גודל/מאמץ פר-משימה. עלות/ביצועים הופכים לכפתור מכוונן, לא נתון.",
      "actionsKind": "practical",
      "actions": [
        "למפות משימות לגדלים: Luna לזול/רוטיני, Sol למורכב",
        "להתחיל ברמת מאמץ נמוכה מ-5.5 ולעלות לפי צורך"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "rd",
      "readMin": 7,
      "date": "2026-07-10",
      "title": "Adopting the product operating model at Priceline",
      "source": "Engineering Enablement (DX)",
      "sourceUrl": "https://newsletter.getdx.com/p/adopting-the-product-operating-model",
      "bottomLine": "Priceline עבר ממודל פרויקטים למודל-הפעלה של מוצר — ומדדי DevEx חשפו את צווארי הבקבוק הארגוניים.",
      "tldr": "ה-CTO של Priceline מספר איך החברה עברה מגישת פרויקטים ל-product operating model, ואיך DevEx שיחק תפקיד מרכזי. מדדי DX וחווית מפתחים חשפו צווארי בקבוק ארגוניים שמדדי הנדסה מסורתיים מפספסים; rollout מדורג, תקשורת ברורה, ומנהלי הנדסה מוסמכים בנו אמון.",
      "implications": "בדיוק התפקיד שלך: DevEx כמנוע לשינוי ארגוני. דאטה של חווית מפתחים מגלה בעיות ש-KPIs רגילים לא רואים.",
      "actionsKind": "practical",
      "actions": [
        "להשתמש בדאטה של DevEx כדי לחשוף צווארי בקבוק ארגוניים",
        "לתכנן מעבר למודל-מוצר כ-rollout מדורג עם מנהלים מוסמכים"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "rd",
      "readMin": 6,
      "date": "2026-07-10",
      "title": "Five studies changing how I think about AI in software engineering",
      "source": "Engineering Enablement (DX) · Abi Noda",
      "sourceUrl": "https://newsletter.getdx.com/p/five-studies-that-are-changing-how",
      "bottomLine": "חמישה מחקרים עצמאיים מתכנסים לסיפור אחד על השפעת AI על פרודוקטיביות הנדסה.",
      "tldr": "Abi Noda מסכם 5 מחקרים עדכניים שמשנים את חשיבתו: מדידת השפעת עוזרי קוד, איך הרווחים מתפשטים (או לא) בתהליך המסירה, מה מפתחים באמת רוצים ממערכות עתידיות, וסוגי ה-'debt' שצריך לשים לב אליהם בעולם AI-assisted. למרות מתודולוגיות שונות — מתכנסים למסקנה משותפת.",
      "implications": "עדות מבוססת-מחקר (לא אנקדוטות) על היכן AI באמת עוזר בהנדסה ואיפה לא — בסיס להחלטות השקעה בכלים.",
      "actionsKind": "deepen",
      "actions": [
        "להיכנס ל-readout של דוח 'State of AI Impact in Engineering Q2' (23/7)",
        "להעמיק בסוגי ה-'debt' החדשים בעולם AI-assisted"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "rd",
      "readMin": 6,
      "date": "2026-07-10",
      "title": "How OpenAI Builds Infrastructure Teams",
      "source": "Engineering Leadership · Gregor Ojstersek",
      "sourceUrl": "https://newsletter.eng-leadership.com/p/how-openai-builds-infrastructure",
      "bottomLine": "צוותי infra ב-OpenAI: פחות קוד-AI מצוותי מוצר, ו'לפתוח חסימות' של אחרים הוא ליבת התיעדוף.",
      "tldr": "ראיון עם Venkat Venkataramani (VP Applied Infra) ו-Emma Tang (Data Infra) ב-OpenAI: 5 עמודי התשתית, למה צוותי infra קריטיים להצלחה, שכמות הקוד שנוצר-AI נמוכה יותר מבצוותי מוצר, ואיך מתעדפים — 'שחרור חסימות' לצוותים אחרים הוא חלק מרכזי. האתגר הגדול: קצב הצמיחה וחוסר-הצפי.",
      "implications": "בעולם AI-assisted, תשתית עדיין נשענת פחות על קוד-AI ויותר על שיפוט אנושי; תפקיד ה-infra = enabler שמפנה חסימות.",
      "actionsKind": "practical",
      "actions": [
        "למדוד תיעדוף infra לפי 'כמה צוותים זה משחרר', לא רק פיצ'רים",
        "לא להניח ש-AI כותב תשתית כמו מוצר — שם השיפוט האנושי קריטי"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "pm",
      "readMin": 6,
      "date": "2026-07-09",
      "title": "The PM's Guide to AI Design that isn't Slop",
      "source": "Product Growth · Aakash Gupta (w/ Meng To)",
      "sourceUrl": "https://www.news.aakashg.com/p/pm-guide-ai-design",
      "bottomLine": "לייצר עיצובי AI שאינם 'slop' — masterclass בעיצוב עם Codex (מומחה עיצוב שנטש את Claude לטובתו).",
      "tldr": "Meng To (מוביל דעה בעיצוב AI, 170K+ עוקבים) מסביר איך לייצר עיצובים שאינם 'slop'. תובנה מפתיעה: הוא כמעט לא משתמש ב-Claude יותר — מעדיף Codex לעיצוב. הפרק צולל שכבה עמוקה מעבר ל-harness ול-use-cases הבסיסיים.",
      "implications": "עיצוב-AI איכותי עם כלי קוד (Codex) הופך לכישור PM — היכולת להוציא אב-טיפוס עיצובי טוב בעצמך, לא רק להזמין מספק.",
      "actionsKind": "practical",
      "actions": [
        "לנסות Codex ל-prototyping עיצובי (לא רק Claude)",
        "לפתח קריטריונים ל'מה זה עיצוב AI טוב' מול 'slop'"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "rd",
      "readMin": 5,
      "date": "2026-07-09",
      "title": "The Pulse: What can we learn from Bun's rapid Rust rewrite with AI?",
      "source": "The Pragmatic Engineer · Gergely Orosz",
      "sourceUrl": "https://newsletter.pragmaticengineer.com/p/the-pulse-what-can-we-learn-from",
      "bottomLine": "Bun קיצר מיגרציה של 1-2 שנים ל-11 ימים עם AI (‏$165K) — אבל רק כי היה כיסוי בדיקות יסודי.",
      "tldr": "Bun שכתב את עצמו מ-Zig ל-Rust ב-11 ימים בעזרת Fable (עלות $165K). המפתח להצלחה: פרויקט מכוסה-בדיקות היטב. בנוסף: מלחמות ה-LLM לקוד מתחממות (Fable, GPT-5.6 Sol, Grok 4.5 של Cursor, Muse של Meta), והאקרים צפון-קוריאנים ממשיכים לחדור לחברות remote.",
      "implications": "AI הופך מיגרציות ענק ל-feasible — אבל רק על בסיס בדיקות מוצק. 'תשתית בדיקות' הופכת ל-enabler האסטרטגי לשכתובים מהירים.",
      "actionsKind": "practical",
      "actions": [
        "להשקיע בכיסוי בדיקות כתנאי מקדים למיגרציות AI-assisted",
        "לעקוב אחרי מלחמת מודלי הקוד — הנוף משתנה חודשית"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "st",
      "readMin": 6,
      "date": "2026-07-09",
      "title": "Ways to think about token pricing",
      "source": "Benedict Evans",
      "sourceUrl": "https://www.ben-evans.com/benedictevans/2026/7/9/ways-to-think-about-token-pricing",
      "bottomLine": "מחירי הטוקנים ב-supply crunch ולא יציבים — השאלה אם מודלי היסוד ישמרו כוח תמחור או יהפכו לסחורה.",
      "tldr": "Evans: על מחירי טוקנים אפשר לומר בוודאות רק שניים — אנחנו ב-supply crunch, וזה לא יציב. טריליון דולר+ של capex מרכזי-נתונים בדרך, ויעילות inference משתפרת מהר. השאלה האמיתית: האם מודלי היסוד ישמרו כוח תמחור ומינוף אסטרטגי, או יהפכו לספקי תשתית שולית-רווח (commodity). כרגע כל הדינמיקות מצביעות על האחרון.",
      "implications": "אם מודלי היסוד הופכים לסחורה — הערך והמרווחים נודדים למעלה (אפליקציות) ולמטה (חומרה/ענן). שיקול אסטרטגי לתכנון תלות ועלויות AI.",
      "actionsKind": "deepen",
      "actions": [
        "לתכנן תקצוב AI בהנחה שמחירי טוקנים יירדו וישתנו מהר",
        "לחשוב היכן הערך נלכד — לא בהכרח בשכבת המודל"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "ai",
      "readMin": 5,
      "date": "2026-07-08",
      "title": "The Epoch Brief — July 8, 2026",
      "source": "Epoch AI",
      "sourceUrl": "https://epochai.substack.com/p/the-epoch-brief-july-8-2026",
      "bottomLine": "בנצ'מרק חדש (EBR-bench): AI עדיין כמעט לא לומד מניסיון חוזר — שאלת מפתח ליכולת ולבטיחות.",
      "tldr": "Epoch השיקה את EBR-bench — בנצ'מרק שבודק אם מודלים משתפרים במשחק לוח מורכב ע\"י ניסיון חוזר. הממצא: מעט מאוד עדות ל'למידה מניסיון'. בנוסף: סימנים ש-AI מוצא חולשות אבטחה בקנה מידה, ו-GPT-4 בשיא ה-Epoch Capabilities Index.",
      "implications": "'למידה מניסיון' היא שאלה כלכלית/בטיחותית מהגדולות. כרגע זה חסם — כלי כמו EBR-bench יזהו מתי זה משתנה. משפיע על הציפיות מסוכנים אוטונומיים.",
      "actionsKind": "deepen",
      "actions": [
        "לעקוב אחרי EBR-bench כמדד ל'מתי AI מתחיל ללמוד מניסיון'",
        "לשים לב לסימני AI שמוצא חולשות אבטחה בקנה מידה"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "pm",
      "date": "2026-07-07",
      "readMin": 2,
      "title": "5 סוכני AI שכל מנהל מוצר צריך",
      "source": "LinkedIn · Yaniv Yaakubovich",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7480233581110476800",
      "bottomLine": "5 סוכני PM (מדייק בעיות, יועץ החלטות, מתרגם, קורא סיגנלים, מאמן) — הכוח מתגלה כשהם מערכת שכותבת למקום משותף, לא צ'אטבוט בודד.",
      "tldr": "יניב מציג 5 סוכני AI-SHIPR שעונים על שאלות שבועיות של מנהלי מוצר. לכל סוכן טריגר, כלל מנחה ופלט מוגדר. הערך האמיתי: הסוכנים קוראים זה לזה וכותבים למקום מרכזי משותף.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "לבנות/להשיג 5 סוכני PM עם טריגר+כלל+פלט מוגדרים",
        "לחבר ביניהם דרך מקום מרכזי משותף"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "ai",
      "readMin": 7,
      "date": "2026-07-06",
      "title": "Import AI 464: Fable writes GPU kernels; the start of an RSI loop",
      "source": "Import AI · Jack Clark",
      "sourceUrl": "https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels",
      "bottomLine": "Fable כתבה את ה-megakernel המהיר ביותר אי-פעם (18.7x) — סימן ל-AI שמאיץ מחקר AI (RSI loop).",
      "tldr": "Fable (Anthropic) כתבה את ה-megakernel הראשון והמהיר ביותר שהוגש ל-KernelBench-Mega — האצה של 18.71x מול baseline של PyTorch (מול 14.4x של Opus 4.8 ו-4.34x של GPT-5.5). סימן ש-AI משתפר במשימות יסוד של מחקר AI עצמו — תחילת לולאת שיפור-עצמי רקורסיבי (RSI).",
      "implications": "כש-AI מתחיל לייעל את התשתית של AI (kernels), זה מאיץ את קצב ההתקדמות עצמו — וקטור אסטרטגי מהמעלה הראשונה.",
      "actionsKind": "deepen",
      "actions": [
        "לעקוב אחרי AI שמאיץ מחקר AI (kernel design, RSI) כאינדיקטור קצב",
        "להשוות ביצועי מודלים במשימות הנדסיות אמיתיות, לא רק בנצ'מרקים כלליים"
      ],
      "links": []
    },
    {
      "manual": true,
      "domain": "st",
      "readMin": 6,
      "date": "2026-07-06",
      "title": "Good Judgment Beats Good Prompts",
      "source": "The Art of Doing TPM · Aadil Maan",
      "sourceUrl": "https://artoftpm.substack.com/p/good-judgment-beats-good-prompts",
      "bottomLine": "בניית agent ל'בריפינג בוקר' לימדה: מיפוי כל ה-inputs לא חשף מה באמת חשוב — שיפוט מנצח פרומפט.",
      "tldr": "הכותב התחיל לבנות agent שמסכם כל בוקר מסמכים, Slack, פגישות ויומן. הוא מיפה בגיליון כל input אפשרי — וחצי-דרך עצר, כי הגיליון לא חשף מה *באמת* ראוי לתשומת ליבו. המסקנה: שיפוט (מה חשוב) מנצח פרומפט טכני (איך לשאול). (רלוונטי ישירות למערכת שאנחנו בונים כאן.)",
      "implications": "בבניית agents הבעיה הקשה אינה טכנית אלא שיפוטית — להחליט מה חשוב. פוקוס גובר על כיסוי.",
      "actionsKind": "practical",
      "actions": [
        "להתחיל agent מ'מה חשוב באמת', לא מ'רשימת כל ה-inputs'",
        "להשקיע בשיפוט/אצירה יותר מאשר בהנדסת פרומפט"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-07-06",
      "readMin": 2,
      "title": "כמה עולה למודל AI לענות \"שלום\"?",
      "source": "LinkedIn · Yuval Avidani",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7479757294516273154",
      "bottomLine": "'שלום' = 2-10 טוקנים בד\"כ, אבל בקלוד קוד קופץ ל-43,483 בגלל ה-harness. עברית יקרה פי 1.4-4 מאנגלית.",
      "tldr": "יובל מראה את עלות ה-harness: תשובה קצרה בקלוד קוד שורפת עשרות אלפי טוקנים. עברית עולה פי 1.4-4 מאנגלית, ו-thinking על קלט קצר מבזבז טוקנים לשווא.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להימנע משיחות קצרות בהרנסים כבדים כמו קלוד קוד",
        "לכבות thinking על פרומפטים קצרים",
        "לשקול אנגלית כשעלות טוקנים קריטית"
      ],
      "links": [
        {
          "label": "המאמר המלא",
          "url": "https://lnkd.in/dfEa9xT3"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-07-05",
      "readMin": 2,
      "title": "איך לא לשרוף את כל הטוקנים על Fable 5",
      "source": "LinkedIn · Omer Mayost",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7479391115503157248",
      "bottomLine": "Fable מתכנן ומפקח, מודל זול מבצע, Fable סוגר QA — עם עצירה לאישור לפני כל שלב.",
      "tldr": "עומר מתאר תהליך חסכוני: להכין קונטקסט מראש, לבקש מ-Fable תוכנית מפורטת לכל שלב עם המלצת מודל+רמת חשיבה, ולעצור לאישור לפני החלפת מודל. לתעד הכל בריפו משותף ולמפות תלות לעבודה מקבילית.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "לתכנן עם Fable, לבצע עם מודלים זולים, QA בחזרה עם Fable",
        "לעצור לאישור לפני החלפת מודל בכל שלב",
        "לתעד את התהליך בריפו משותף"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-07-02",
      "readMin": 2,
      "title": "סקיל dataviz חדש בקלוד קוד לגרפים ודאשבורדים",
      "source": "LinkedIn · Alon Wolenitz",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7478385195797164033",
      "bottomLine": "סקיל מובנה (מגרסה 2.1.198) שקובע סוג גרף, צבעים, layout ונגישות — ללא תלות בטכנולוגיה.",
      "tldr": "אלון מציג את הסקיל dataviz שעושה לגרפים את מה ש-frontend-design עשה לעיצוב: בוחר סוג גרף, צבעים, layout, היררכיה ונגישות — ב-React/SVG/matplotlib/Plotly/d3. מגיע עם palette מאומת-נגישות ל-light/dark.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להשתמש בסקיל dataviz לפני בניית גרפים/דאשבורדים",
        "להחליף לפלטת brand ולהריץ validator נגישות"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "st",
      "date": "2026-06-30",
      "readMin": 2,
      "title": "AI מעלה את הרף: הפער בין תפיסת סניוריות למציאות",
      "source": "LinkedIn · David Golan",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7477619177432813568",
      "bottomLine": "סניוריות היא לא ידע אלא שיקול דעת מהיר באי-ודאות — וזה מה שצריך למדוד בגיוס.",
      "tldr": "דיוויד מזהה פער גדל בין איך מועמדים תופסים את הסניוריות שלהם לרמה שהם מביאים. AI מבצע היום הרבה ממה שהיה 'עבודה', כך שמצפים ליותר ערך מ-ChatGPT.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "בגיוס לתפקידים סניוריים — לבחון שיקול דעת בתנאי אי-ודאות, לא רק ניסיון טכני"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-06-30",
      "readMin": 2,
      "title": "וייב קודינג זה לא העתיד, זו הלוויית הקריירה שלכם",
      "source": "LinkedIn · Dima Vishnevetsky",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7477594319638474752",
      "bottomLine": "מי ש'מנהל את המכונה' בלי להבין ארכיטקטורה — ראשון בתור להחלפה. להבחין בין האצה עם AI לתלות טפילית.",
      "tldr": "דימה טוען שמי שמזהה עצמו 'מפתח על' בזכות כמה פרומפטים בלי הבנת ארכיטקטורה — הכי חשוף. ממליץ ללכת לבעיות מסובכות ש-AI גרוע בהן ולהעמיק ביסודות.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להתמקד בבעיות מורכבות ש-AI גרוע בהן (ארכיטקטורה, תשתיות)",
        "להעמיק ביסודות טכניים (OS, DB, רשתות)",
        "לחשוב כפותר בעיות עסקיות, לא רק ככותב קוד"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "pm",
      "date": "2026-06-29",
      "readMin": 2,
      "title": "קרוסלת פרומפטים לרוטינות Claude Co-work לכל שדרת הניהול",
      "source": "LinkedIn · Asaf Rozanes",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7477379862031241216",
      "bottomLine": "פרומפטים מוכנים להעתקה ליצירת רוטינות Claude Co-work לפי תפקיד (CEO/VP HR/Marketing/Sales/CS/R&D/Product).",
      "tldr": "קרוסלה עם פרומפטים מוכנים להקמת רוטינות בוקר ב-Claude Co-work לפי תפקיד ניהולי.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להקים רוטינת בוקר ב-Co-work לפי תפקידך מהפרומפטים המוכנים"
      ],
      "links": [
        {
          "label": "Set up routines (docs)",
          "url": "https://share.google/dtaX9g9L8JbHkUFwM"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-29",
      "readMin": 2,
      "title": "זיכרון עבודה אמיתי לסוכני קוד: retrieval לפני שהסוכן יוצא לדרך",
      "source": "LinkedIn · Ron Izraeli",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7477334361109942272",
      "bottomLine": "retrieval קטן מיד אחרי הפרומפט ולפני טעינת כלים (hook על UserPromptSubmit) — הצלחה עלתה מ-20% ל-80-100%.",
      "tldr": "רון מתאר גישה: hook על UserPromptSubmit שמחפש 3 כרטיסי ידע רלוונטיים (החלטות/לקחים) לפני שהסוכן טוען כלים — כרטיסיות קצרות, לא מסמכים שלמים. חציון 44ms.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להוסיף hook על UserPromptSubmit שמריץ retrieval קטן (3 כרטיסים) לפני טעינת כלים"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "st",
      "date": "2026-06-29",
      "readMin": 2,
      "title": "סקיל \"מועצת מנטורים\" בקלוד",
      "source": "LinkedIn · Charlie Hills",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7477299849722277888",
      "bottomLine": "סקיל שהופך את קלוד למועצת מנטורים מדומיינת — כל אחד פרספקטיבה, ו'יו\"ר' מסנתז לפסק דין עם צעד ראשון.",
      "tldr": "צ'רלי מציע סקיל חינמי: 4 מנטורים (Hormozi/Naval וכו') נותנים זוויות שונות ו'יו\"ר' מסנתז. מותקן ב-4 שלבים.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להתקין ולהקליד 'convene my board' לקבלת משוב מרובה-פרספקטיבות על החלטה"
      ],
      "links": [
        {
          "label": "הסקיל",
          "url": "https://lnkd.in/eM89acTy"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-29",
      "readMin": 2,
      "title": "5 טיפים לסוכן עם יותר חופש ופחות גבולות",
      "source": "LinkedIn · Tom Even",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7477269480558022658",
      "bottomLine": "\"אוטומציה עושה מה שאמרת; אוטונומיה עושה מה שלא תכננת.\"",
      "tldr": "תום מציע 5 טיפים לסוכן אוטונומי יותר: מסמך נשמה, לשאול אותו הרבה שאלות, לתת לו לפגוש עולם 'חצי אפוי', להיות הקהל האוהב שלו, ולמחוק את שלב האישור.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "לתת לסוכן מסמך נשמה",
        "לשאול אותו הרבה שאלות",
        "חשיפה מוקדמת לעולם האמיתי",
        "עידוד חיובי",
        "הסרת שלב אישור ידני (בזהירות)"
      ],
      "links": [
        {
          "label": "הכתבה",
          "url": "https://www.agentsandme.com/p/neo-and-me"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-06-28",
      "readMin": 2,
      "title": "סקיל לבידוד פרויקטים ולחיסכון בטוקנים",
      "source": "LinkedIn · Guy Cohen",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7476887044074422275",
      "bottomLine": "סקיל שמסדר תיקייה מבולגנת לפרויקטים נפרדים עם CLAUDE.md/SESSION_BRIEF/AGENTS.md — כך שכל סשן טוען רק את הרלוונטי.",
      "tldr": "גיא בנה סקיל שסורק תיקייה, מזהה לאיזה פרויקט כל קובץ שייך, ובונה תיקייה מסודרת עם קבצי ניהול — תחת אישור ידני. חוסך טוקנים.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "לבודד קבצי כל פרויקט בתיקייה עם CLAUDE.md/SESSION_BRIEF/AGENTS.md משלה"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-28",
      "readMin": 2,
      "title": "3 הסמכות Claude חינמיות מ-Anthropic",
      "source": "LinkedIn · Ruben Hassid",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7476861943346126848",
      "bottomLine": "Claude 101, AI Fluency, ו-Intro to Cowork — הסמכות רשמיות חינמיות ב-anthropic.skilljar.com.",
      "tldr": "רובן מפרט 3 הסמכות רשמיות חינמיות: Claude 101 (שעה), AI Fluency (3 שעות), Intro to Cowork (שעתיים). רוב האנשים משלמים על מדריכים לא-רשמיים בזמן שאלה בחינם.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להירשם ל-3 ההסמכות החינמיות לפי הסדר ולהוסיף ללינקדאין"
      ],
      "links": [
        {
          "label": "anthropic.skilljar.com",
          "url": "https://anthropic.skilljar.com"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-28",
      "readMin": 2,
      "title": "מפרומפט בודד לאוטופיילוט מלא: מפת דרכים ב-3 רמות",
      "source": "LinkedIn · Charlie Hills",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7476937458824351744",
      "bottomLine": "רמה 1 Skills בצ'אט → רמה 2 Scheduled Tasks ב-Cowork → רמה 3 קלוד קוד עם /schedule בענן.",
      "tldr": "צ'רלי מציג 3 רמות אוטומציה עם Claude, כשאותם קבצים עוברים בין הרמות בלי שכתוב. לכל רמה דוגמת פרומפט להעתקה.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "רמה 1: Skill בצ'אט למשימה שבועית",
        "רמה 2: Scheduled Task ב-Cowork",
        "רמה 3: קלוד קוד + /schedule בענן"
      ],
      "links": [
        {
          "label": "המדריך",
          "url": "https://lnkd.in/erkbUHH8"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "st",
      "date": "2026-06-28",
      "readMin": 2,
      "title": "מה הופך הרצאה טכנית לבלתי נשכחת — 6 דפוסים",
      "source": "LinkedIn · Udi Menkes (Intuit)",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7476861961574658048",
      "bottomLine": "כותרת=פוזיציה, פתיחה יוצרת מתח, מונח אחד שנדבק, מספרים במקום שמות תואר, כישלון כהוכחה, ודמו שנושא משקל.",
      "tldr": "אודי ניתח 24 הרצאות מ-AI Engineer וזיהה 6 דפוסים חוזרים לבניית הרצאה טכנית שנדבקת.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "כותרת שאפשר לצטט",
        "פתיחה שיוצרת מתח",
        "מונח מרכזי אחד",
        "מספרים במקום שמות תואר",
        "שקיפות על כישלון",
        "דמו שמחזיק את הטענה"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-06-28",
      "readMin": 2,
      "title": "איך Coinbase חתכו כמעט חצי מהוצאות ה-AI בלי להגביל מפתחים",
      "source": "LinkedIn · Amit Shafnir",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7476855261987659776",
      "bottomLine": "בלי מכסות (91% ממילא לא הגיעו): ברירת מחדל למודלים זולים דרך gateway עם ניתוב חכם + השקעה ב-cache (5%→60% hit).",
      "tldr": "עמית מתאר איך Coinbase חתכו ~חצי מעלות ה-AI: שינו ברירת מחדל למודלים זולים (GLM 5.2, Kimi 2.7) דרך gateway פנימי עם ניתוב חכם, והעלו שיעור פגיעות cache.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להחליף ברירת מחדל למודלים זולים במקום להטיל מכסות",
        "ניתוב חכם: מודל חזק לתכנון, זול לביצוע",
        "להשקיע ב-cache-awareness לחיתוך עלויות"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-06-28",
      "readMin": 2,
      "title": "Loop Engineering: מתכננים לולאה במקום להריץ פרומפט",
      "source": "LinkedIn · Asaf Rozanes",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7476853425469620224",
      "bottomLine": "במקום להפעיל את הסוכן בכל איטרציה — בונים מערכת שעושה זאת. 5 אבני בניין.",
      "tldr": "אסף מציג את Loop Engineering: מטרה מדידה, פיצול לתת-סוכנים, בדיקה עצמית, זיכרון מתמשך, ולוגיקת hand-off לבן אדם.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להגדיר מטרה מדידה",
        "לפצל לתת-סוכנים",
        "verification עצמי",
        "state חיצוני מתמשך",
        "להגדיר מתי הסוכן מחזיר הגה לאדם"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-23",
      "readMin": 2,
      "title": "OpenAI שחררו את הצד-פרויקט שלי כפיצ'ר רשמי (Codex Import)",
      "source": "LinkedIn · Omri Ariav (Taboola)",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7475128147030663168",
      "bottomLine": "קונטקסט (שיחות, CLAUDE.md, MCPs, skills) הופך לנכס נייד ראשון-במעלה — לא רק הקוד.",
      "tldr": "עומרי (Taboola) בנה ai-handoff להעברת קונטקסט בין כלי קידוד AI; OpenAI השיקו 'Codex Import' רשמי שעושה בדיוק את זה. אימות לתזה שקונטקסט הוא נכס נייד.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להשתמש ב-Codex Import / ai-handoff להעברת קונטקסט בין סוכני קידוד"
      ],
      "links": [
        {
          "label": "ai-cli-handoff",
          "url": "https://github.com/omriariav/ai-cli-handoff"
        },
        {
          "label": "Codex Import",
          "url": "https://developers.openai.com/codex/import"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-23",
      "readMin": 2,
      "title": "תוכנית למידה אישית מ-2300+ שיעורי AI חינמיים (Maven)",
      "source": "LinkedIn · Ben Rotenberg",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7475057602486530048",
      "bottomLine": "איך לבנות תוכנית למידה אישית ממאגר של 2300+ שיעורי AI חינמיים ומקצועיים.",
      "tldr": "בן הכין מדריך וידאו לבניית תוכנית למידה אישית מתוך שיעורי Maven החינמיים — תשובה ל'איפה ללמוד AI בחינם'.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "לבנות תוכנית למידה אישית מתוך שיעורי Maven החינמיים"
      ],
      "links": [
        {
          "label": "Maven — free AI lessons",
          "url": "https://maven.com/free-lessons?sort=trending&category=ai"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "rd",
      "date": "2026-06-22",
      "readMin": 2,
      "title": "הבעיה עם Copilot היא לא הכלי, היא ההטמעה",
      "source": "LinkedIn · Nadav Rimon",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7474733053312032768",
      "bottomLine": "רכישת רישיונות בלי הדרכה ותרגול לא משנה הרגלים — ההבדל הוא מי לקח אחריות על שינוי ההתנהגות.",
      "tldr": "נדב מתאר עובד ותיק שדחה Copilot אחרי ניסיון שטחי בזמן ששולט בקלוד קוד. הבעיה כמעט אף פעם לא הכלי אלא ההטמעה. ההבדל בין 'ניסינו, לא עבד' לצוות שקפץ מדרגה — אחריות על שינוי התנהגות, לא רק רכש.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להשקיע בהטמעה ותרגול בפועל, לא רק ברכישת רישיון",
        "לקחת אחריות ארגונית על שינוי הרגלי עבודה"
      ],
      "links": []
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "pm",
      "date": "2026-06-07",
      "readMin": 2,
      "title": "7 טיפים פרקטיים למנהלי מוצר AI-Native",
      "source": "LinkedIn · Amitay Boneh",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:share:7469369382788542464",
      "bottomLine": "מהות תפקיד ה-PM לא השתנתה — אבל שיטות העבודה כן: Coding Agent, קונטקסט, Skills, אוטומציות, גישה לקוד ולדאטה, פרוטוטייפ לפני PRD.",
      "tldr": "עמיתי מפרט 7 שינויים בשיטת העבודה של PM בעידן AI, מהמעבר מצ'אט ל-Coding Agent ועד בניית פרוטוטייפ לפני כתיבת PRD.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "לעבוד עם Coding Agent ולא צ'אט",
        "לנהל קונטקסט בקנאות",
        "לבנות Skills לתהליכים חוזרים",
        "לבנות אוטומציות ולא פרומפטים חד-פעמיים",
        "לבקש גישה לריפו הקוד",
        "להתחבר לדאטה (Mixpanel/BigQuery)",
        "לבנות פרוטוטייפ לפני PRD"
      ],
      "links": [
        {
          "label": "AI with Amitay",
          "url": "https://www.aiwithamitay.com/"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "ai",
      "date": "2026-06-03",
      "readMin": 2,
      "title": "3 דברים שחייבים לעשות ברגע שמתחילים עם קלוד",
      "source": "LinkedIn · Bar Shealtiel",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7467802524796805120",
      "bottomLine": "(1) להדליק Memory בהגדרות capabilities; (2) לייבא היסטוריה מ-ChatGPT/Gemini; (3) להתקין Skills.",
      "tldr": "בר מפרט 3 צעדי פתיחה מדויקים בקלוד: הדלקת Memory (Settings>capabilities>memory), ייבוא היסטוריה (start import), והתקנת Skills לתהליכים חוזרים.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "להדליק Memory בהגדרות capabilities",
        "לייבא היסטוריה מצ'אטבוטים אחרים דרך start import",
        "להתקין/לבנות Skills לתהליכים חוזרים"
      ],
      "links": [
        {
          "label": "איך יוצרים סקיל",
          "url": "https://lnkd.in/dWFjPDCC"
        }
      ]
    },
    {
      "manual": true,
      "linkedin": true,
      "domain": "st",
      "date": "2026-02-09",
      "readMin": 2,
      "title": "טיפ למו\"מ על שכר: איך קיבלתי הצעה 20% גבוהה יותר",
      "source": "LinkedIn · Emil Rozenblat",
      "sourceUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7426580711064715265",
      "bottomLine": "כשנשאלים על ציפיות שכר — להחזיר את השאלה: קודם התאמה, ואז לשאול מה טווח התקציב למשרה.",
      "tldr": "אמיל משתף טיפ מו\"מ: במקום לצטט מספר ראשון, לענות שהתאמה מקצועית חשובה יותר כרגע, ואז לשאול מה טווח התקציב שהוגדר למשרה.",
      "implications": null,
      "actionsKind": "practical",
      "actions": [
        "כשנשאלים 'מה ציפיות השכר' — קודם התאמה, ואז לשאול מה טווח התקציב למשרה, במקום מספר ראשון"
      ],
      "links": []
    }
  ]
};
