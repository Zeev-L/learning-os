// sources.js — ספריית המקורות המסודרת (אומת יולי 2026). הסקריפט משתמש ב-rss למשיכת digest.
// domain: ai | pm | rd | st   (AI / Product / R&D-Eng Ops / Project-Strategy)
// tier:   start (התחל כאן) | deep (עומק)   |  region: "il" למקורות ישראליים
// rss:    כתובת feed אם קיים, אחרת false (חברתי/מייל/ידני)
// emailValue: low (RSS מכסה) | high (הגרסה במייל/בתשלום מוסיפה הרבה) | email-only (אין RSS — רק מייל)
window.SOURCES = {
  updatedAt: "2026-07-02",
  items: [
    // ================= AI (עדיפות עליונה) =================
    { domain: "ai", tier: "start", name: "Anthropic — News", author: "Anthropic", platform: "בלוג חברה", url: "https://www.anthropic.com/news", rss: false, emailValue: "email-only", why: "השקות מודלים ומחקר בטיחות/מדיניות ממקור ראשון. אין RSS — הרשמה במייל." },
    { domain: "ai", tier: "start", name: "OpenAI — News", author: "OpenAI", platform: "בלוג חברה", url: "https://openai.com/news/", rss: "https://openai.com/news/rss.xml", emailValue: "low", why: "השקות ומחקר רשמיים. feed אומת חי." },
    { domain: "ai", tier: "start", name: "Google DeepMind", author: "Google DeepMind", platform: "בלוג חברה", url: "https://deepmind.google/blog/", rss: "https://deepmind.google/blog/rss.xml", emailValue: "low", why: "Gemini ומחקר frontier. feed אומת חי." },
    { domain: "ai", tier: "deep", name: "AI at Meta", author: "Meta", platform: "בלוג חברה", url: "https://ai.meta.com/blog/", rss: false, emailValue: "email-only", why: "Llama ומחקר open-model. אין feed — מייל בלבד." },
    { domain: "ai", tier: "deep", name: "Mistral AI", author: "Mistral", platform: "בלוג חברה", url: "https://mistral.ai/news/", rss: false, emailValue: "email-only", why: "מעבדת open-weights אירופית מובילה. אין feed." },
    { domain: "ai", tier: "start", name: "The Batch", author: "Andrew Ng / DeepLearning.AI", platform: "ניוזלטר", url: "https://www.deeplearning.ai/the-batch/", rss: false, emailValue: "email-only", why: "הסיכום השבועי המאוזן הטוב ביותר + מכתב של Ng. מייל בלבד." },
    { domain: "ai", tier: "start", name: "Import AI", author: "Jack Clark", platform: "Substack", url: "https://importai.substack.com/", rss: "https://importai.substack.com/feed", emailValue: "low", why: "ניתוח מחקר ומדיניות מעומק ממייסד-שותף של Anthropic." },
    { domain: "ai", tier: "start", name: "One Useful Thing", author: "Ethan Mollick", platform: "Substack", url: "https://www.oneusefulthing.org/", rss: "https://www.oneusefulthing.org/feed", emailValue: "low", why: "איך להשתמש ב-AI בעבודה בפועל — הכי טוב ללא-מהנדסים." },
    { domain: "ai", tier: "start", name: "Latent Space", author: "swyx & Alessio", platform: "Substack + פודקאסט", url: "https://www.latent.space/", rss: "https://www.latent.space/feed", emailValue: "low", why: "ה-publication של מהנדסי AI. feed אומת חי." },
    { domain: "ai", tier: "deep", name: "Interconnects", author: "Nathan Lambert", platform: "Substack", url: "https://www.interconnects.ai/", rss: "https://www.interconnects.ai/feed", emailValue: "low", why: "עומק על post-training ו-open models." },
    { domain: "ai", tier: "deep", name: "AI as Normal Technology", author: "Narayanan & Kapoor", platform: "Substack", url: "https://www.normaltech.ai/", rss: "https://www.normaltech.ai/feed", emailValue: "low", why: "מיתוג מחדש של 'AI Snake Oil' — קול המפוכח/ריאלי המוביל." },
    { domain: "ai", tier: "start", name: "Simon Willison's Weblog", author: "Simon Willison", platform: "בלוג", url: "https://simonwillison.net/", rss: "https://simonwillison.net/atom/everything/", emailValue: "low", why: "התיעוד המעשי הכי תדיר של כלי LLM ויכולות חדשות." },
    { domain: "ai", tier: "deep", name: "Chain of Thought", author: "Dan Shipper (Every)", platform: "Every / Substack", url: "https://every.to/chain-of-thought", rss: "https://every.substack.com/feed", emailValue: "high", why: "AI וכלים-לחשיבה. ל-every.to אין feed — mirror של Substack." },
    { domain: "ai", tier: "deep", name: "The Rundown AI", author: "Rowan Cheung", platform: "ניוזלטר", url: "https://www.therundown.ai/", rss: false, emailValue: "email-only", why: "הניוזלטר היומי הגדול ביותר (2M+). רוחב על פני עומק. מייל בלבד." },
    { domain: "ai", tier: "start", name: "Ahead of AI", author: "Sebastian Raschka", platform: "Substack", url: "https://magazine.sebastianraschka.com/", rss: "https://magazine.sebastianraschka.com/feed", emailValue: "high", why: "ההסברים הכי טובים על ארכיטקטורת LLM עם קוד." },
    { domain: "ai", tier: "deep", name: "Lil'Log", author: "Lilian Weng", platform: "בלוג", url: "https://lilianweng.github.io/", rss: "https://lilianweng.github.io/index.xml", emailValue: "low", why: "deep dives קנוניים (agents, test-time compute). נדיר אך מוחלט." },
    { domain: "ai", tier: "deep", name: "Chip Huyen", author: "Chip Huyen", platform: "בלוג", url: "https://huyenchip.com/blog/", rss: "https://huyenchip.com/feed.xml", emailValue: "low", why: "הנדסת מערכות AI לפרודקשן (מחברת AI Engineering)." },
    { domain: "ai", tier: "start", name: "Dwarkesh Podcast", author: "Dwarkesh Patel", platform: "פודקאסט", url: "https://www.dwarkesh.com/podcast", rss: "https://api.substack.com/feed/podcast/69345.rss", emailValue: "high", why: "הראיונות הכי מעמיקים (Amodei, Musk). מייל = תמלולים/מסות." },
    { domain: "ai", tier: "deep", name: "No Priors", author: "Sarah Guo & Elad Gil", platform: "פודקאסט", url: "https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688", rss: false, emailValue: "low", why: "עדשת מייסדים/משקיעים על frontier AI. feed מ-Apple/Spotify." },
    { domain: "ai", tier: "deep", name: "The Cognitive Revolution", author: "Nathan Labenz", platform: "פודקאסט", url: "https://www.cognitiverevolution.ai/", rss: "https://www.cognitiverevolution.ai/feed", emailValue: "low", why: "ראיונות builders/חוקרים עם דגש על כלים." },

    // ================= Product Management =================
    { domain: "pm", tier: "start", name: "Lenny's Newsletter", author: "Lenny Rachitsky", platform: "Substack", url: "https://www.lennysnewsletter.com/", rss: "https://www.lennysnewsletter.com/feed", emailValue: "high", why: "ברירת המחדל ל-PM/growth/career. הרבה תוכן במייל/בתשלום." },
    { domain: "pm", tier: "start", name: "Product Growth", author: "Aakash Gupta", platform: "Substack", url: "https://www.news.aakashg.com/", rss: "https://www.news.aakashg.com/feed", emailValue: "high", why: "ה-newsletter הייעודי ל-'AI PM' — הכי רלוונטי לתפקיד שלך." },
    { domain: "pm", tier: "start", name: "SVPG — Articles", author: "Marty Cagan", platform: "בלוג", url: "https://www.svpg.com/articles/", rss: "https://www.svpg.com/articles/feed/", emailValue: "low", why: "מודל-הפעלה של מוצר: empowered teams." },
    { domain: "pm", tier: "deep", name: "Product Talk", author: "Teresa Torres", platform: "בלוג", url: "https://www.producttalk.org/", rss: "https://www.producttalk.org/feed/", emailValue: "low", why: "המקור הקנוני ל-continuous discovery." },
    { domain: "pm", tier: "deep", name: "Product Thinking", author: "Melissa Perri", platform: "פודקאסט", url: "https://melissaperri.com/podcast", rss: false, emailValue: "low", why: "מגשר בין PM ל-Product Ops (Escaping the Build Trap)." },
    { domain: "pm", tier: "deep", name: "Shreyas Doshi", author: "Shreyas Doshi", platform: "X (חברתי)", url: "https://x.com/shreyas", rss: false, emailValue: "low", why: "product sense, prioritization, high-agency. מעקב ידני." },

    // ================= R&D / Eng Ops & Dev =================
    { domain: "rd", tier: "start", name: "The Pragmatic Engineer", author: "Gergely Orosz", platform: "Substack", url: "https://newsletter.pragmaticengineer.com/", rss: "https://newsletter.pragmaticengineer.com/feed", emailValue: "high", why: "#1 לתפקיד. ה-deep-dives בתשלום מגיעים במלואם רק במייל." },
    { domain: "rd", tier: "start", name: "Software Lead Weekly", author: "Oren Ellenbogen", platform: "ניוזלטר", url: "https://softwareleadweekly.com/", rss: "https://softwareleadweekly.com/feed/", emailValue: "low", why: "ה-curator הכי טוב — לינקים נבחרים על ניהול ותרבות." },
    { domain: "rd", tier: "start", name: "Engineering Enablement (DX)", author: "Abi Noda & Laura Tacho", platform: "Substack", url: "https://newsletter.getdx.com/", rss: "https://newsletter.getdx.com/feed", emailValue: "low", why: "מקור המחקר על DevEx ופרודוקטיביות — בית DX Core 4." },
    { domain: "rd", tier: "deep", name: "Irrational Exuberance", author: "Will Larson", platform: "בלוג", url: "https://lethain.com/", rss: "https://lethain.com/feeds/", emailValue: "low", why: "עומק eng-exec על org design ואסטרטגיה." },
    { domain: "rd", tier: "deep", name: "LeadDev", author: "LeadDev", platform: "פרסום + כנסים", url: "https://leaddev.com/", rss: "https://leaddev.com/content/rss", emailValue: "low", why: "פרסום רחב על ניהול הנדסה + קהילה ואירועים." },
    { domain: "rd", tier: "deep", name: "Swarmia Blog", author: "Swarmia", platform: "בלוג", url: "https://www.swarmia.com/blog/", rss: "https://www.swarmia.com/blog/rss.xml", emailValue: "low", why: "תוכן פרקטי על פרודוקטיביות R&D — flow, metrics." },

    // ================= Project / Program & Strategy =================
    { domain: "st", tier: "start", name: "Stratechery", author: "Ben Thompson", platform: "פלטפורמה עצמאית", url: "https://stratechery.com/", rss: false, emailValue: "high", why: "ניתוח אסטרטגיית טק-עסקים המוביל. RSS רק לחשבון בתשלום." },
    { domain: "st", tier: "deep", name: "First Round Review", author: "First Round Capital", platform: "בלוג", url: "https://review.firstround.com/", rss: "https://review.firstround.com/feed.xml", emailValue: "low", why: "playbooks תפעוליים ארוכי-טווח ממיטב ה-operators." },
    { domain: "st", tier: "deep", name: "a16z", author: "Andreessen Horowitz", platform: "בלוג", url: "https://a16z.com/", rss: "https://a16z.com/feed/", emailValue: "low", why: "תזות ומגמות ברמת שוק (לקרוא כדעה של VC)." },
    { domain: "st", tier: "deep", name: "The Digital Project Manager", author: "Ben Aston", platform: "ניוזלטר", url: "https://thedigitalprojectmanager.com/", rss: "https://thedigitalprojectmanager.com/feed/", emailValue: "low", why: "הפרסום המעשי ביותר ל-delivery/PM מודרני." },
    { domain: "st", tier: "deep", name: "Acquired", author: "Ben Gilbert & David Rosenthal", platform: "פודקאסט", url: "https://www.acquired.fm/", rss: "https://feeds.transistor.fm/acquired", emailValue: "low", why: "נרטיבים עמוקים על איך חברות טק מנצחות." },

    // ===== ניוזלטרים שזוהו מהמייל שלך ועברו למשיכת RSS (יציב יותר) =====
    { domain: "ai", tier: "deep", name: "MarTech AI (Charlie Hills)", author: "Charlie Hills", platform: "Substack", url: "https://charliehills.substack.com", rss: "https://charliehills.substack.com/feed", emailValue: "low", why: "פרומפטינג ו-AI פרקטי לשיווק. היית רשום במייל — עכשיו נמשך ב-RSS." },
    { domain: "ai", tier: "deep", name: "AI Adopters Club", author: "AI Adopters", platform: "Substack", url: "https://aiadopters.club", rss: "https://aiadopters.club/feed", emailValue: "low", why: "אימוץ AI מעשי בארגונים. נמשך ב-RSS במקום מהמייל." },
    { domain: "pm", tier: "deep", name: "The Gap (Claudia)", author: "Claudia", platform: "Substack", url: "https://npxgetclaudia.substack.com", rss: "https://npxgetclaudia.substack.com/feed", emailValue: "low", why: "מוצר/leadership — 'החלטות בגובה הנכון'. נמשך ב-RSS." },
    { domain: "rd", tier: "deep", name: "Leadership in Change (Joel)", author: "Joel", platform: "Substack", url: "https://leadershipinchange.com", rss: "https://leadershipinchange.com/feed", emailValue: "low", why: "מנהיגות וניהול שינוי. נמשך ב-RSS במקום מהמייל." },

    // ================= ישראל — חדשות (region: il) =================
    { domain: "st", tier: "start", region: "il", name: "GeekTime", author: "GeekTime", platform: "אתר (עברית)", url: "https://www.geektime.co.il", rss: "https://www.geektime.co.il/feed/", emailValue: "low", why: "אתר הטק/הייטק המרכזי בעברית. feed אומת חי." },
    { domain: "st", tier: "start", region: "il", name: "Globes Tech", author: "Globes", platform: "אתר (עברית)", url: "https://www.globes.co.il/news/home.aspx?fid=594", rss: "https://www.globes.co.il/webservice/rss/rssfeeder.asmx/FeederNode?iID=594", emailValue: "low", why: "מדור הטכנולוגיה של גלובס. feed אומת חי." },
    { domain: "st", tier: "deep", region: "il", name: "VC Cafe / Firgun", author: "Eze Vidra", platform: "בלוג", url: "https://www.vccafe.com", rss: "https://www.vccafe.com/feed/", emailValue: "high", why: "הקול האנליטי הטוב ביותר על VC/AI ישראלי." },
    { domain: "st", tier: "deep", region: "il", name: "Israel Tech Insider", author: "Amir Mizroch", platform: "Substack", url: "https://www.israeltechinsider.com", rss: "https://www.israeltechinsider.com/feed", emailValue: "high", why: "פענוח חד של הטק הישראלי מעורך לשעבר ב-WSJ." },
    { domain: "st", tier: "start", region: "il", name: "CTech", author: "Calcalist", platform: "אתר (אנגלית)", url: "https://www.calcalistech.com/ctechnews", rss: false, emailValue: "email-only", why: "חדשות הטק הישראלי באנגלית. אין RSS שמיש — הרשמה במייל." },
    { domain: "st", tier: "deep", region: "il", name: "Startup Nation Central", author: "SNC", platform: "אתר", url: "https://startupnationcentral.org", rss: false, emailValue: "email-only", why: "דאטה ודוחות אקוסיסטם. אין feed — ניוזלטר/אתר." },
    { domain: "pm", tier: "deep", region: "il", name: "Startup for Startup", author: "monday.com", platform: "פודקאסט (עברית)", url: "https://www.startupforstartup.com", rss: "https://www.omnycontent.com/d/playlist/5065d512-1eb7-465b-8dd5-aab100df53d1/a4e98e7b-23d2-43d1-8c4a-aaf60091bfa0/ca90681b-3bb0-4e4c-a0e7-aaf60091bfae/podcast.rss", emailValue: "low", why: "הפודקאסט הטוב ביותר בעברית על product/startup ops." },

    // ================= ישראל — אנשים (חברתי, ידני) =================
    { domain: "ai", tier: "deep", region: "il", name: "Yoav Goldberg", author: "Yoav Goldberg", platform: "X (חברתי)", url: "https://x.com/yoavgo", rss: false, emailValue: "low", why: "חוקר NLP/LLM מוביל (AI2 ישראל). דעות חדות על AI." },
    { domain: "ai", tier: "deep", region: "il", name: "Amnon Shashua", author: "Amnon Shashua", platform: "LinkedIn (חברתי)", url: "https://www.linkedin.com/in/amnon-shashua-b8b6b21", rss: false, emailValue: "low", why: "'אבי ה-AI בישראל' — מייסד Mobileye/AI21/OrCam." },
    { domain: "st", tier: "deep", region: "il", name: "Gil Dibner", author: "Gil Dibner", platform: "Substack / X", url: "https://x.com/gdibner", rss: false, emailValue: "high", why: "Angular Ventures — תזות B2B/deep-tech קפדניות." },
    { domain: "st", tier: "deep", region: "il", name: "Eze Vidra", author: "Eze Vidra", platform: "LinkedIn (חברתי)", url: "https://www.linkedin.com/in/ezevidra", rss: false, emailValue: "low", why: "הפרשן הישראלי המוביל ל-VC/AI (משלים את VC Cafe)." },
    { domain: "st", tier: "start", region: "il", name: "Hillel Fuld", author: "Hillel Fuld", platform: "X (חברתי)", url: "https://x.com/hilzfuld", rss: false, emailValue: "low", why: "אוונגליסט סטארטאפים ישראלי בנפח גבוה." },

    // ================= ישראל — קהילות ואירועים (Luma, ידני) =================
    { domain: "st", tier: "start", region: "il", name: "Luma — Tel Aviv", author: "Luma", platform: "יומן אירועים", url: "https://luma.com/tel-aviv", rss: false, emailValue: "low", why: "מרכז גילוי האירועים המרכזי של TLV. לבדוק שבועית." },
    { domain: "ai", tier: "deep", region: "il", name: "AI Salon Tel Aviv", author: "AI Salon", platform: "Luma", url: "https://luma.com/AI-Salon-TelAviv-June-2026", rss: false, emailValue: "low", why: "סלון builders של AI, high-signal (Google for Startups TLV)." },
    { domain: "st", tier: "start", region: "il", name: "Israel Tech Week", author: "Israel Tech Week", platform: "יומן אירועים", url: "https://luma.com/israeltechweek", rss: false, emailValue: "low", why: "יומן-על לשבוע הטק השנתי בתל אביב." },
    { domain: "st", tier: "deep", region: "il", name: "TechAviv Meetup", author: "TechAviv", platform: "Meetup", url: "https://www.meetup.com/techaviv", rss: false, emailValue: "low", why: "קבוצת מייסדים ותיקה ומובילה." },

    // ===== תוספות ממחקר העומק (יולי 2026) — gems ומקורות חובה שחסרו =====
    // -- AI גלובלי --
    { domain: "ai", tier: "start", name: "Don't Worry About the Vase", author: "Zvi Mowshowitz", platform: "Substack", url: "https://thezvi.substack.com", rss: "https://thezvi.substack.com/feed", emailValue: "high", why: "💎 הסיכום השבועי הכי מקיף של 'מה באמת קרה ב-AI' — מקום אחד לראות הכל ולהחליט למה להעמיק." },
    { domain: "ai", tier: "start", name: "AI News (smol.ai)", author: "swyx & team", platform: "אתר/מייל", url: "https://news.smol.ai", rss: "https://news.smol.ai/rss.xml", emailValue: "low", why: "💎 דייג'סט יומי מסוכם-AI של ~356 פידים ו-21 Discords. הבחירה של Karpathy למעקב." },
    { domain: "ai", tier: "start", name: "Epoch AI", author: "Epoch AI", platform: "Substack", url: "https://epoch.ai/latest", rss: "https://epochai.substack.com/feed", emailValue: "high", why: "💎 דאטה אמין על compute, scaling, benchmarks — המספרים מאחורי ההייפ." },
    { domain: "ai", tier: "deep", name: "SemiAnalysis", author: "Dylan Patel", platform: "Substack", url: "https://newsletter.semianalysis.com", rss: "https://newsletter.semianalysis.com/feed", emailValue: "high", why: "הסמכות על compute/שבבים ושרשרת אספקה של AI (חלקי בתשלום)." },
    { domain: "ai", tier: "start", name: "Hamel's Blog", author: "Hamel Husain", platform: "בלוג", url: "https://hamel.dev", rss: "https://hamel.dev/index.xml", emailValue: "high", why: "💎 המקור הפרקטי על evals-as-product ל-AI. 'המוצר שלך צריך evals'." },
    { domain: "ai", tier: "deep", name: "Eugene Yan", author: "Eugene Yan", platform: "בלוג", url: "https://eugeneyan.com", rss: "https://eugeneyan.com/rss/", emailValue: "high", why: "💎 דפוסי ML/LLM applied ממישהו שמשלח ב-scale — recsys, evals, agents." },
    { domain: "ai", tier: "deep", name: "The Power Law", author: "Peter Wildeford", platform: "Substack", url: "https://blog.peterwildeford.com", rss: "https://blog.peterwildeford.com/feed", emailValue: "high", why: "💎 חוזה top-1% על timelines, מדיניות וביטחון לאומי של AI." },

    // -- Product / Product Ops (הליבה שלך) --
    { domain: "pm", tier: "start", name: "Product Ops Confidential", author: "Graham Reed & Antonia Landi", platform: "Substack", url: "https://productopsconfidential.com", rss: "https://productopsconfidential.com/feed", emailValue: "high", why: "💎 הפרסום הייעודי הכי חזק ל-Product Ops — בדיוק התפקיד שלך. מכותבי ה-Manifesto." },
    { domain: "pm", tier: "deep", name: "The Overlap", author: "Tim Casasola", platform: "Substack", url: "https://theoverlap.substack.com", rss: "https://theoverlap.substack.com/feed", emailValue: "high", why: "💎 הצומת של product × org design — מבני ארגון, operating models, זכויות החלטה." },
    { domain: "pm", tier: "deep", name: "The Beautiful Mess", author: "John Cutler", platform: "Substack", url: "https://cutlefish.substack.com", rss: "https://cutlefish.substack.com/feed", emailValue: "high", why: "💎 המוח הכי חד על מודלי-הפעלה של מוצר, תמריצים ו'האמצע המבולגן'." },
    { domain: "pm", tier: "start", name: "AI Product Academy", author: "Marily Nika", platform: "Substack", url: "https://marily.substack.com", rss: "https://marily.substack.com/feed", emailValue: "high", why: "💎 ה-newsletter הכי טוב ל-AI-PM טהור — craft ולא הייפ." },
    { domain: "pm", tier: "deep", name: "Product Ops Podcast", author: "Gerisha Nadaraju", platform: "פודקאסט", url: "https://productopspod.com", rss: false, emailValue: "low", why: "💎 הפודקאסט היחיד לתפקיד Product Ops — איך להפוך את הערך של הפונקציה לנראה." },

    // -- R&D / Eng Ops --
    { domain: "rd", tier: "start", name: "Refactoring", author: "Luca Rossi", platform: "Substack", url: "https://refactoring.fm", rss: "https://refactoring.fm/feed", emailValue: "high", why: "💎 הצומת של product × engineering × AI, פעמיים בשבוע, ברמת practitioner." },
    { domain: "rd", tier: "start", name: "Engineering Leadership", author: "Gregor Ojstersek", platform: "Substack", url: "https://newsletter.eng-leadership.com", rss: "https://newsletter.eng-leadership.com/feed", emailValue: "high", why: "מנהיגות הנדסה ובניית ארגון (למשל 'איך OpenAI בונה צוותי infra')." },
    { domain: "rd", tier: "deep", name: "Software Design: Tidy First?", author: "Kent Beck", platform: "Substack", url: "https://newsletter.kentbeck.com", rss: "https://newsletter.kentbeck.com/feed", emailValue: "high", why: "💎 לחשוב כמו מהנדס — design, כלכלת tech-debt, אמון. לא-מובן-מאליו למנהל product/ops." },

    // -- Project/Program & אסטרטגיה --
    { domain: "st", tier: "start", name: "The Art of Doing TPM", author: "Aadil Maan", platform: "Substack", url: "https://artoftpm.substack.com", rss: "https://artoftpm.substack.com/feed", emailValue: "high", why: "💎 מקור נדיר-איכות על program management ו-delivery בקנה מידה (תחום דל, זה בראשו)." },
    { domain: "st", tier: "deep", name: "Not Boring", author: "Packy McCormick", platform: "Substack", url: "https://notboring.co", rss: "https://notboring.co/feed", emailValue: "high", why: "deep-dives אסטרטגיים על חברות/קטגוריות עם עדשה נרטיבית חזקה." },
    { domain: "st", tier: "start", name: "Benedict Evans", author: "Benedict Evans", platform: "בלוג", url: "https://ben-evans.com", rss: "https://ben-evans.com/benedictevans?format=rss", emailValue: "high", why: "זיהוי דפוסים חוצה-תעשיות; מצגות המאקרו השנתיות שלו קנוניות." },

    // -- ישראל (gems) --
    { domain: "ai", tier: "deep", region: "il", name: "DiamantAI", author: "Nir Diamant", platform: "Substack", url: "https://diamantai.substack.com", rss: "https://diamantai.substack.com/feed", emailValue: "high", why: "💎 מחנך AI ישראלי; מדריכי RAG/agents עמוקים מבוססי-קוד (80k+ כוכבי GitHub)." },
    { domain: "ai", tier: "start", region: "il", name: "Don't Panic", author: "Eyal Marcus", platform: "מייל (עברית)", url: "https://eyalmarcus.com/ai-newsletter", rss: false, emailValue: "email-only", why: "💎 השבועון העברי הכי טוב: כלי אחד חובה + חדשות מסוננות, בלי הייפ/FOMO." },
    { domain: "rd", tier: "deep", region: "il", name: "Wix Engineering", author: "צוות Wix", platform: "Medium", url: "https://wix.engineering/blog", rss: "https://medium.com/feed/wix-engineering", emailValue: "low", why: "💎 בלוג הנדסה ישראלי עם feed אמיתי — scaling, agents-in-org, מיגרציות DB בקנה מידה." },
    { domain: "ai", tier: "start", region: "il", name: "MDLI — Machine & Deep Learning Israel", author: "Uri Eliabayev", platform: "Telegram + מיטאפים", url: "https://machinelearning.co.il", rss: false, emailValue: "low", why: "💎 הקהילה הישראלית הגדולה והפעילה ביותר ל-AI (20k+) — מיטאפים, ג'obs, דיון ground-truth." },
    { domain: "rd", tier: "deep", region: "il", name: "Reversim (רברס עם פלטפורמה)", author: "Ori Lahav & Ran Tavory", platform: "פודקאסט/כנס", url: "https://www.reversim.com", rss: false, emailValue: "low", why: "💎 300+ פרקים — השיחות העמוקות ביותר בעברית על תוכנה/ארכיטקטורה/מנהיגות הנדסה." },
    { domain: "ai", tier: "start", region: "il", name: "בינה מלאכותית בגובה העיניים", author: "בר שאלתיאל", platform: "פודקאסט", url: "https://open.spotify.com/show/5bt0qGN6KIFkrH3kg5hw5J", rss: false, emailValue: "low", why: "הפודקאסט העברי הפופולרי ל-AI יישומי — לעסקים/שיווק/אופרציה, ניפוץ מיתוסים." },
    { domain: "st", tier: "deep", region: "il", name: "Passov's Newsletter", author: "Yuval Passov", platform: "Substack", url: "https://passov.substack.com", rss: "https://passov.substack.com/feed", emailValue: "low", why: "יזם ישראלי (40k+) — פרודוקטיביות, פרומפטינג פרקטי, ותובנות אקוסיסטם. זוהה מהמייל שלך." },
  ],
};
