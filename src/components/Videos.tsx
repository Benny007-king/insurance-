import React from 'react';
import { motion } from 'motion/react';

export default function Videos() {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'הדרכה פיננסית: איך לנהל תזרים מזומנים' },
    { id: 'jNQXAC9IVRw', title: 'מושגי יסוד בשוק ההון ופנסיה' },
    { id: 'M7lc1UVf-VE', title: 'תכנון מס חכם לעסקים קטנים ובינוניים' }
  ];

  return (
    <section id="videos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">תוכן מקצועי</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">סרטונים והדרכות</h3>
          <p className="text-lg text-slate-600">צפו במגוון סרטונים מקצועיים שיעזרו לכם להבין טוב יותר את העולם הפיננסי.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div 
              key={idx} 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{ once: true }}
              transition={{delay: idx*0.1}} 
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-slate-900 text-lg">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
