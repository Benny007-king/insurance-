import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, TrendingUp, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="ייעוץ פיננסי"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-indigo-200">
              <ShieldCheck size={16} />
              <span>הביטחון הפיננסי שלך בידיים טובות</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              תכנון פיננסי חכם <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                לעתיד בטוח יותר
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              אריאל ישמח משה - מומחה בייעוץ פיננסי, פנסיוני וביטוח. 
              ליווי אישי ומקצועי המותאם בדיוק לצרכים ולמטרות שלך, כדי להבטיח שקט נפשי ויציבות כלכלית.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50"
              >
                קביעת פגישת ייעוץ
                <ArrowLeft size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white text-indigo-900 hover:bg-slate-100 transition-all shadow-lg"
              >
                השירותים שלנו
              </a>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 text-indigo-300">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">צמיחה פיננסית</h3>
              <p className="text-slate-300 text-sm">תכנון אסטרטגי להגדלת ההון האישי והמשפחתי לאורך זמן.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-cyan-300">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">הגנה ביטוחית</h3>
              <p className="text-slate-300 text-sm">התאמת פוליסות ביטוח מדויקות למניעת כפל ביטוחים וחיסכון בעלויות.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors col-span-2 mt-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 text-emerald-300">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">שקט נפשי</h3>
              <p className="text-slate-300 text-sm">ליווי צמוד במקרי תביעה וניהול סיכונים מקיף למשפחה ולעסק.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.15,192.75,105.7Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
}
