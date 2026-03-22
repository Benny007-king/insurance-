import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock, User, X } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: 'איך להתכונן נכון לפרישה: המדריך המלא לשנת 2026',
      excerpt: 'תכנון פרישה הוא אחד השלבים החשובים בחיים. גלו אילו צעדים עליכם לנקוט היום כדי להבטיח רמת חיים נאותה מחר.',
      fullContent: [
        'תכנון פרישה הוא אחד השלבים החשובים והקריטיים ביותר בחיים הפיננסיים של כל אדם. רבים נוטים לדחות את הטיפול בנושא זה לגיל מבוגר, אך האמת היא שככל שמתחילים מוקדם יותר, כך ניתן להבטיח רמת חיים נאותה וביטחון כלכלי בגיל השלישי.',
        'הצעד הראשון בתכנון פרישה נכון הוא הבנת המצב הקיים. יש למפות את כלל הנכסים הפנסיוניים: קרנות פנסיה, ביטוחי מנהלים, קופות גמל וקרנות השתלמות. חשוב לבדוק את דמי הניהול, מסלולי ההשקעה והתשואות שהושגו לאורך השנים.',
        'שנית, יש להגדיר יעדים ברורים. מהי רמת החיים לה אתם מצפים בפרישה? האם יש לכם תוכניות מיוחדות כמו טיולים מסביב לעולם או עזרה לילדים ברכישת דירה? הגדרת היעדים תעזור לגזור אחורה את סכום החיסכון הנדרש.',
        'בנוסף, חשוב לתת את הדעת לסוגיית המיסוי. משיכת כספי פנסיה כרוכה לעיתים בתשלומי מס גבוהים, אך תכנון נכון ושימוש בהטבות מס המגיעות לכם על פי חוק (כמו קיבוע זכויות) יכולים לחסוך לכם מאות אלפי שקלים.',
        'לסיכום, תכנון פרישה אינו זבנג וגמרנו, אלא תהליך מתמשך הדורש מעקב והתאמות לאורך השנים. מומלץ להיעזר באיש מקצוע בעל רישיון שיוכל ללוות אתכם ולבנות עבורכם אסטרטגיה מותאמת אישית.'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: '15 במרץ, 2026',
      author: 'אריאל ישמח משה',
      category: 'פנסיה',
    },
    {
      id: 2,
      title: 'ביטוח חיים למשכנתא: טעויות נפוצות ואיך להימנע מהן',
      excerpt: 'רכשתם דירה? מזל טוב! אבל האם ביטוח החיים שלכם באמת מגן עליכם או רק על הבנק? כל מה שצריך לדעת.',
      fullContent: [
        'רכישת דירה היא לרוב העסקה הכלכלית הגדולה ביותר בחייו של אדם, ולקיחת משכנתא היא חלק בלתי נפרד ממנה. הבנק מחייב אותנו לרכוש ביטוח חיים למשכנתא כדי להבטיח את החזר ההלוואה במקרה של פטירת אחד הלווים חלילה. אך האם הביטוח הזה באמת מגן עלינו?',
        'הטעות הנפוצה ביותר היא רכישת הביטוח ישירות דרך הבנק או סוכנות הביטוח של הבנק, מבלי לבצע השוואת מחירים. לעיתים קרובות, הפוליסות המוצעות דרך הבנק יקרות משמעותית מאלו שניתן להשיג בשוק החופשי.',
        'טעות נוספת היא חוסר התאמה של סכום הביטוח ליתרת ההלוואה. ביטוח חיים למשכנתא אמור לקטון ככל שיתרת ההלוואה קטנה. אם לא מעדכנים את הפוליסה בהתאם, אתם עלולים לשלם פרמיות גבוהות ומיותרות על סכום ביטוח שכבר אינכם חייבים לבנק.',
        'כמו כן, חשוב להבין שביטוח חיים למשכנתא מגן אך ורק על הבנק. במקרה פטירה, חברת הביטוח תשלם את יתרת המשכנתא לבנק, והמשפחה תישאר עם הדירה ללא חוב. עם זאת, הביטוח אינו מספק פיצוי כספי למשפחה לצורך מחיה שוטפת. לכן, חשוב לבחון רכישת ביטוח חיים פרטי בנוסף לביטוח המשכנתא.',
        'מומלץ לבדוק את פוליסת ביטוח המשכנתא שלכם אחת למספר שנים, ולבחון אפשרויות להוזלת עלויות ושיפור התנאים, במיוחד אם חל שיפור במצבכם הבריאותי או אם הפסקתם לעשן.'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: '28 בפברואר, 2026',
      author: 'אריאל ישמח משה',
      category: 'ביטוח',
    },
    {
      id: 3,
      title: 'השקעות אלטרנטיביות: האם זה מתאים לתיק שלכם?',
      excerpt: 'בעידן של ריביות משתנות ושוק תנודתי, השקעות אלטרנטיביות מציעות פיזור סיכונים. מתי כדאי לשלב אותן?',
      fullContent: [
        'בשנים האחרונות אנו עדים למגמה הולכת וגוברת של שילוב השקעות אלטרנטיביות בתיקי ההשקעות של הציבור הרחב. אך מהן בעצם השקעות אלטרנטיביות והאם הן מתאימות לכל אחד?',
        'השקעות אלטרנטיביות הן כל השקעה שאינה נכללת באפיקים המסורתיים של מניות, איגרות חוב ומזומן. קטגוריה זו כוללת מגוון רחב של אפיקים, כגון: נדל"ן (ישיר או דרך קרנות), קרנות השקעה פרטיות (Private Equity), קרנות גידור, תשתיות, הלוואות חברתיות (P2P) ועוד.',
        'היתרון המרכזי של השקעות אלטרנטיביות הוא פיזור הסיכונים. בניגוד לשוק ההון המסורתי שנוטה לתנודתיות גבוהה, השקעות אלטרנטיביות לרוב אינן קורלטיביות (מתואמות) באופן ישיר לשוק המניות. משמעות הדבר היא שגם כאשר הבורסה יורדת, ההשקעות האלטרנטיביות עשויות לשמור על יציבות או אף להניב תשואה חיובית.',
        'עם זאת, חשוב להיות מודעים גם לחסרונות. השקעות אלטרנטיביות מתאפיינות לרוב בנזילות נמוכה (הכסף "סגור" לתקופה מוגדרת), רף כניסה גבוה יחסית, וחוסר שקיפות בהשוואה למוצרים הנסחרים בבורסה. בנוסף, חלק מההשקעות הללו כרוכות בסיכון גבוה יותר.',
        'ההחלטה האם לשלב השקעות אלטרנטיביות בתיק צריכה להתקבל לאחר בחינה מדוקדקת של הצרכים הפיננסיים, טווח ההשקעה, רמת הסיכון המבוקשת וצרכי הנזילות. שילוב נכון ומושכל יכול לשפר משמעותית את פרופיל הסיכון-סיכוי של התיק הכולל.'
      ],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: '10 בינואר, 2026',
      author: 'אריאל ישמח משה',
      category: 'פיננסים',
    },
  ];

  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="articles" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">ידע מקצועי</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              מאמרים וטיפים פיננסיים
            </h3>
            <p className="text-lg text-slate-600">
              הישארו מעודכנים עם המידע החשוב ביותר בעולם הביטוח והפיננסים. קראו את המאמרים האחרונים שלנו.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h4>
                
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                
                <button
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors mt-auto"
                >
                  המשך קריאה
                  <ArrowLeft size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative overflow-hidden text-slate-800"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 left-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-800 hover:bg-white transition-colors shadow-sm"
                aria-label="סגור מאמר"
              >
                <X size={24} />
              </button>
              
              <div className="overflow-y-auto flex-grow">
                <div className="h-64 sm:h-80 relative">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                      {selectedArticle.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{selectedArticle.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{selectedArticle.author}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
                    {selectedArticle.fullContent.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
