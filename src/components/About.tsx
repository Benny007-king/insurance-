import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, BookOpen, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users size={24} />, value: '1000+', label: 'לקוחות מרוצים' },
    { icon: <Award size={24} />, value: '15+', label: 'שנות ניסיון' },
    { icon: <BookOpen size={24} />, value: '100%', label: 'מקצועיות ושקיפות' },
  ];

  const features = [
    'רישיון פנסיוני וביטוחי מטעם משרד האוצר',
    'התמחות בתכנון פרישה ומיסוי',
    'ניתוח תיק ביטוחי מקיף לאיתור כפילויות',
    'ליווי אישי וזמינות גבוהה לכל לקוח',
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="אריאל ישמח משה"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-800">15+</p>
                  <p className="text-sm font-medium text-slate-500">שנות ניסיון בתחום</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">אודות אריאל ישמח משה</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                השותף שלך להצלחה פיננסית וביטחון כלכלי
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                אריאל ישמח משה - רו"ח סמנכל כספים
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                רואה חשבון CPA וסמנכ"ל כספים CFO מומחה בניהול ושיפור מערך הכספים תוך הובלת תהליכי בקרה תקציבית, התייעלות פיננסית חוצי ארגון ודיווח כספי בחברות גלובליות פרטיות וציבוריות מורכבות רב חברתיות.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                בעל ניסיון בהובלת צוות ומערך הכספים תוך מעורבות בקבלת החלטות עם ההנהלה הבכירה והדירקטוריון, ניהול תזרימי מזומנים וגביה מורכבים, ממשקים עם המערכת הבנקאית מקורות מימון וחברות האשראי, טיפול בסוגיות מס ותקני דיווח כספי בינלאומי IFRS, הטמעת מערכות מידע ERP ו BI מתקדמות, מיזוגי חברות, הקמת חברות, ניהול סיכונים, גידורי מטבע ביבוא סחורות, בניית תקציב מול ביצוע, שינויים מבניים ומגזרי פעילות, עמידה בתנאי רגולציה משתנים, תמחור, והסדרת נהלים בארגון.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                ידע והיכרות מעמיקה במגוון תחומים מתפקידי ליבה בחברות פרטיות וציבוריות בתחומי המסחר, קמעונאות, שירותים, תעשיה ויצור, נדלן מניב, פיננסים, שוק ההון, תעופה ותרבות הפנאי.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                בעל תואר ראשון B.A בחשבונאות ומערכות מידע מרכז אקדמי לב JCT. מוסמך לראיית חשבון ורישיון ממועצת רו"ח. ותואר שני M.B.A במנהל עסקים מאוניברסיטה העברית HUJI בהתמחות מימון וניהול פיננסי. מתגורר בפתח תקווה.
              </p>
              <p className="text-xl font-medium text-indigo-900 leading-relaxed border-r-4 border-indigo-600 pr-4">
                מאמין שהמפתח להצלחה נבנה על התמדה ודבקות במטרה.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center text-indigo-600 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
