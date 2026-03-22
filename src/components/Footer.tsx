import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'accessibility' | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleCloseModal = () => {
    if (activeModal === 'privacy' && !privacyAccepted) {
      return; // Cannot close until accepted
    }
    setActiveModal(null);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <a href="#home" className="text-2xl font-bold tracking-tight text-white">
                אריאל ישמח משה
                <span className="block text-sm font-normal text-indigo-400">ייעוץ פיננסי וביטוח</span>
              </a>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              ליווי אישי ומקצועי המותאם בדיוק לצרכים ולמטרות שלך, כדי להבטיח שקט נפשי ויציבות כלכלית לאורך שנים.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ניווט מהיר</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">ראשי</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">אודות אריאל</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">סוגי ייעוץ</a></li>
              <li><a href="#articles" className="hover:text-indigo-400 transition-colors">מאמרים מקצועיים</a></li>
              <li><a href="#videos" className="hover:text-indigo-400 transition-colors">תוכן מקצועי (וידאו)</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">קביעת פגישה</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">השירותים שלנו</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">תכנון פיננסי מקיף</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">ייעוץ פנסיוני</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">ביטוחי בריאות וחיים</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">בדיקת תיק ביטוחי</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">ביטוח עסקי</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">יצירת קשר</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-indigo-400 mt-1 shrink-0" />
                <a href="tel:0587610758" className="hover:text-white transition-colors" dir="ltr">058-7610758</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-indigo-400 mt-1 shrink-0" />
                <a href="mailto:financeme100@gmail.com" className="hover:text-white transition-colors break-all">financeme100@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-400 mt-1 shrink-0" />
                <span>פגישות במשרדנו, בזום או בבית הלקוח בתיאום מראש.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} אריאל ישמח משה. כל הזכויות שמורות.</p>
          <div className="flex gap-6">
            <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors">תנאי שימוש</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors">מדיניות פרטיות</button>
            <button onClick={() => setActiveModal('accessibility')} className="hover:text-white transition-colors">הצהרת נגישות</button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col relative overflow-hidden text-slate-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 relative">
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeModal === 'terms' && 'תנאי שימוש'}
                  {activeModal === 'privacy' && 'מדיניות פרטיות'}
                  {activeModal === 'accessibility' && 'הצהרת נגישות'}
                </h3>
                
                {/* Close Button - Top Left */}
                <button
                  onClick={handleCloseModal}
                  disabled={activeModal === 'privacy' && !privacyAccepted}
                  className={`absolute top-5 left-5 p-2 rounded-full transition-colors ${
                    activeModal === 'privacy' && !privacyAccepted 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  aria-label="סגור חלון"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto flex-grow space-y-4 text-slate-600">
                {activeModal === 'terms' && (
                  <>
                    <p>ברוכים הבאים לאתר של אריאל ישמח משה. השימוש באתר כפוף לתנאים המפורטים להלן. אנא קראו אותם בקפידה.</p>
                    <h4 className="font-bold text-slate-900 mt-4">1. כללי</h4>
                    <p>האתר נועד לספק מידע אודות שירותי ייעוץ פיננסי וביטוח. המידע באתר אינו מהווה תחליף לייעוץ מקצועי המותאם אישית לצרכי הלקוח.</p>
                    <h4 className="font-bold text-slate-900 mt-4">2. קניין רוחני</h4>
                    <p>כל זכויות הקניין הרוחני באתר, לרבות טקסטים, עיצובים ותמונות, שייכות לאריאל ישמח משה ואין לעשות בהם שימוש ללא אישור מראש ובכתב.</p>
                    <h4 className="font-bold text-slate-900 mt-4">3. הגבלת אחריות</h4>
                    <p>בעל האתר לא יישא באחריות לכל נזק ישיר או עקיף שייגרם כתוצאה משימוש במידע המופיע באתר.</p>
                    <h4 className="font-bold text-slate-900 mt-4">4. שינויים בתקנון</h4>
                    <p>אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש מעת לעת, על פי שיקול דעתנו הבלעדי וללא הודעה מוקדמת.</p>
                  </>
                )}
                {activeModal === 'accessibility' && (
                  <>
                    <p>אנו רואים חשיבות עליונה בהנגשת האתר לאנשים עם מוגבלויות, מתוך אמונה כי לכל אדם מגיעה הזכות לשוויון, כבוד, נוחות ועצמאות.</p>
                    <h4 className="font-bold text-slate-900 mt-4">אמצעי הנגישות באתר</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>תפריט נגישות מתקדם המאפשר שינוי גודל גופן, ניגודיות צבעים ועוד.</li>
                      <li>תמיכה בניווט באמצעות מקלדת.</li>
                      <li>התאמה לקוראי מסך (Screen Readers).</li>
                      <li>טקסט חלופי (Alt) לתמונות משמעותיות.</li>
                      <li>מבנה סמנטי תקין והיררכיית כותרות ברורה.</li>
                    </ul>
                    <h4 className="font-bold text-slate-900 mt-4">יצירת קשר בנושא נגישות</h4>
                    <p>אם נתקלתם בבעיית נגישות כלשהי, נשמח אם תעדכנו אותנו בכתובת המייל: financeme100@gmail.com ונעשה את מירב המאמצים לטפל בבעיה בהקדם.</p>
                  </>
                )}
                {activeModal === 'privacy' && (
                  <>
                    <p>אנו מכבדים את פרטיותך ומחויבים להגן על המידע האישי שאתה משתף איתנו.</p>
                    <h4 className="font-bold text-slate-900 mt-4">איסוף מידע</h4>
                    <p>אנו אוספים מידע שאתה מוסר לנו מרצונך החופשי, כגון שם, מספר טלפון וכתובת דוא"ל, בעת מילוי טופס יצירת קשר באתר.</p>
                    <h4 className="font-bold text-slate-900 mt-4">שימוש במידע</h4>
                    <p>המידע שנאסף משמש אך ורק לצורך יצירת קשר עמך, מתן שירותים ומענה לפניותיך. איננו מעבירים את המידע לצדדים שלישיים ללא הסכמתך המפורשת, אלא אם נידרש לכך על פי חוק.</p>
                    <h4 className="font-bold text-slate-900 mt-4">אבטחת מידע</h4>
                    <p>אנו נוקטים באמצעי אבטחה מקובלים כדי להגן על המידע שלך מפני גישה בלתי מורשית, שינוי או חשיפה.</p>
                    <h4 className="font-bold text-slate-900 mt-4">עוגיות (Cookies)</h4>
                    <p>האתר עושה שימוש בעוגיות לצורך תפעולו השוטף ולשיפור חווית המשתמש. ניתן לשנות את הגדרות העוגיות בדפדפן שלך בכל עת.</p>
                  </>
                )}
              </div>
              
              {/* Footer / Actions */}
              {activeModal === 'privacy' && (
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <span className="text-slate-700 font-medium select-none">קראתי ואישרתי את מדיניות הפרטיות</span>
                  </label>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
