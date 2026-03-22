import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">צור קשר</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                בואו נדבר על העתיד שלכם
              </h3>
              <p className="text-lg text-slate-600">
                השאירו פרטים ונחזור אליכם בהקדם לתיאום פגישת היכרות ללא התחייבות.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">טלפון</h4>
                  <a href="tel:0587610758" className="text-slate-600 hover:text-indigo-600 transition-colors" dir="ltr">
                    058-7610758
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">דוא"ל</h4>
                  <a href="mailto:financeme100@gmail.com" className="text-slate-600 hover:text-indigo-600 transition-colors">
                    financeme100@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">משרד</h4>
                  <p className="text-slate-600">
                    פגישות ייעוץ מתקיימות במשרדנו, בזום או בבית הלקוח בתיאום מראש.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">שעות פעילות</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex justify-between"><span>ראשון - חמישי:</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between"><span>שישי:</span> <span>09:00 - 13:00</span></li>
                <li className="flex justify-between"><span>שבת:</span> <span>סגור</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                  className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">תודה רבה!</h3>
                <p className="text-slate-600">
                  פנייתך התקבלה בהצלחה. נחזור אליך בהקדם האפשרי.
                </p>
              </div>
            ) : null}

            <h3 className="text-2xl font-bold text-slate-900 mb-6">קביעת פגישה</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">שם מלא *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">טלפון *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="050-0000000"
                    dir="ltr"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">דוא"ל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">נושא הפנייה</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                >
                  <option value="">בחרו נושא...</option>
                  <option value="תכנון פיננסי">תכנון פיננסי</option>
                  <option value="ייעוץ פנסיוני">ייעוץ פנסיוני</option>
                  <option value="ביטוח חיים ובריאות">ביטוח חיים ובריאות</option>
                  <option value="בדיקת תיק ביטוחי">בדיקת תיק ביטוחי</option>
                  <option value="אחר">אחר</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">הודעה (אופציונלי)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="איך נוכל לעזור לכם?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50"
              >
                שליחת פנייה
                <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
