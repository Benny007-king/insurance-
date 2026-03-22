import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Check, Settings } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if consent exists and is not expired (48 hours)
    const consentData = localStorage.getItem('cookieConsent');
    if (consentData) {
      const { timestamp } = JSON.parse(consentData);
      const now = new Date().getTime();
      const hoursPassed = (now - timestamp) / (1000 * 60 * 60);
      
      if (hoursPassed < 48) {
        return; // Still valid
      }
    }
    
    // Show banner if no valid consent
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      accepted: true,
      preferences: { essential: true, analytics: true, marketing: true },
      timestamp: new Date().getTime(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      accepted: true,
      preferences,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {isVisible && !showSettings && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            
            <div className="flex-1 flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">אנו משתמשים בעוגיות (Cookies)</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  אתר זה עושה שימוש בעוגיות כדי לשפר את חווית הגלישה שלך, להציג תוכן מותאם אישית ולנתח את התנועה באתר. 
                  בלחיצה על "אישור הכל", את/ה מסכים/ה לשימוש שלנו בכל סוגי העוגיות. הבחירה תישמר למשך 48 שעות.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                אישור הכל
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-colors border border-slate-700 whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Settings size={18} />
                הגדרות עוגיות
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-800"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Settings size={20} className="text-indigo-600" />
                הגדרות פרטיות ועוגיות
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Essential Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">עוגיות חיוניות (הכרחי)</h4>
                  <p className="text-sm text-slate-500">עוגיות אלו נדרשות לפעילות התקינה של האתר ולא ניתן לכבות אותן.</p>
                </div>
                <div className="relative inline-flex items-center cursor-not-allowed">
                  <input type="checkbox" checked disabled className="sr-only peer" />
                  <div className="w-11 h-6 bg-indigo-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">עוגיות סטטיסטיקה ואנליטיקה</h4>
                  <p className="text-sm text-slate-500">עוזרות לנו להבין כיצד מבקרים משתמשים באתר, כדי שנוכל לשפר את החוויה.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">עוגיות שיווק ופרסום</h4>
                  <p className="text-sm text-slate-500">משמשות להצגת פרסומות רלוונטיות עבורך באתרים אחרים.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3 justify-end">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
              >
                שמירת העדפות
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
