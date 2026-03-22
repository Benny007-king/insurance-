import React, { useState, useEffect } from 'react';
import { Accessibility, X, Type, Contrast, Monitor, Eye, Volume2 } from 'lucide-react';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [readingMode, setReadingMode] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    extraLargeText: false,
    grayscale: false,
  });

  useEffect(() => {
    // Apply settings to body
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (settings.grayscale) {
      document.body.classList.add('grayscale-mode');
    } else {
      document.body.classList.remove('grayscale-mode');
    }

    if (settings.extraLargeText) {
      document.body.classList.add('extra-large-text');
      document.body.classList.remove('large-text');
    } else if (settings.largeText) {
      document.body.classList.add('large-text');
      document.body.classList.remove('extra-large-text');
    } else {
      document.body.classList.remove('large-text');
      document.body.classList.remove('extra-large-text');
    }
  }, [settings]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (!readingMode) return;
      
      const target = e.target as HTMLElement;
      // Don't read if clicking inside the accessibility menu itself
      if (target.closest('.accessibility-menu-container')) return;

      e.preventDefault();
      e.stopPropagation();

      const textToRead = target.innerText || target.textContent;
      if (textToRead) {
        window.speechSynthesis.cancel(); // Stop current reading
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'he-IL';
        window.speechSynthesis.speak(utterance);
      }
    };

    if (readingMode) {
      document.addEventListener('click', handleGlobalClick, { capture: true });
      document.body.style.cursor = 'help';
    } else {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      document.body.style.cursor = 'default';
      window.speechSynthesis.cancel();
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      document.body.style.cursor = 'default';
    };
  }, [readingMode]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: !prev[key] };
      // Handle mutually exclusive text sizes
      if (key === 'largeText' && newSettings.largeText) {
        newSettings.extraLargeText = false;
      }
      if (key === 'extraLargeText' && newSettings.extraLargeText) {
        newSettings.largeText = false;
      }
      return newSettings;
    });
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      extraLargeText: false,
      grayscale: false,
    });
    setReadingMode(false);
  };

  return (
    <div className="fixed top-24 left-4 z-50 accessibility-menu-container">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        aria-label="תפריט נגישות"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </button>

      {/* Menu Modal */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Accessibility size={20} />
              תפריט נגישות
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="סגור תפריט נגישות"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <button
              onClick={() => toggleSetting('highContrast')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                settings.highContrast
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Contrast size={20} />
              <span className="font-medium">ניגודיות גבוהה</span>
            </button>

            <button
              onClick={() => toggleSetting('grayscale')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                settings.grayscale
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Monitor size={20} />
              <span className="font-medium">גווני אפור</span>
            </button>

            <button
              onClick={() => toggleSetting('largeText')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                settings.largeText
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Type size={20} />
              <span className="font-medium">טקסט גדול</span>
            </button>

            <button
              onClick={() => toggleSetting('extraLargeText')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                settings.extraLargeText
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Eye size={20} />
              <span className="font-medium">טקסט ענק</span>
            </button>

            <button
              onClick={() => setReadingMode(!readingMode)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                readingMode
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Volume2 size={20} />
              <span className="font-medium">מצב הקראה (לחץ על טקסט)</span>
            </button>

            <div className="pt-3 mt-3 border-t border-slate-100">
              <button
                onClick={resetSettings}
                className="w-full py-2 text-slate-500 hover:text-slate-800 font-medium transition-colors underline decoration-slate-300 underline-offset-4"
              >
                איפוס הגדרות
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
