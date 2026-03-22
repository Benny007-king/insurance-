import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Shield, PiggyBank, HeartPulse, Home, LineChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <LineChart size={32} />,
      title: 'תכנון פיננסי מקיף',
      description: 'בניית אסטרטגיה כלכלית ארוכת טווח למשפחה ולעסק, ניהול תזרים מזומנים והשקעות חכמות.',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: <PiggyBank size={32} />,
      title: 'ייעוץ פנסיוני',
      description: 'התאמת קרנות פנסיה, ביטוחי מנהלים וקופות גמל, מקסום הטבות מס והכנה מיטבית לפרישה.',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      icon: <HeartPulse size={32} />,
      title: 'ביטוחי בריאות וחיים',
      description: 'הגנה מקיפה למקרי מחלה, אובדן כושר עבודה וביטוח חיים למשכנתא ולמשפחה.',
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      icon: <Home size={32} />,
      title: 'ביטוחי רכוש ודירה',
      description: 'כיסוי מלא לנכסים היקרים לכם ביותר, ביטוח מבנה, תכולה וצד ג\'.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'ביטוח עסקי',
      description: 'פתרונות ביטוח מותאמים אישית לעסקים, חבויות, אחריות מקצועית וביטוח דירקטורים.',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: <Shield size={32} />,
      title: 'בדיקת תיק ביטוחי',
      description: 'ניתוח מעמיק של התיק הקיים, איתור כפילויות, הוזלת עלויות ושיפור כיסויים.',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">תחומי התמחות</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              סוגי הייעוץ והשירותים שלנו
            </h3>
            <p className="text-lg text-slate-600">
              אנו מציעים מעטפת שירותים מלאה תחת קורת גג אחת, המותאמת באופן אישי לצרכים הייחודיים של כל לקוח.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${service.color} transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
