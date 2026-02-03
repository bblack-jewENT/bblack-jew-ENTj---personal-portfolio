
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Kind Words from Happy Clients</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-10 rounded-[40px] relative">
              <div className="absolute top-8 right-8 text-6xl text-slate-200 font-serif">"</div>
              <p className="text-lg text-slate-700 mb-8 relative z-10 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role} @ {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
