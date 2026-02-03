
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">How I help your brand grow</h2>
          <p className="text-lg text-slate-600">
            A comprehensive suite of services tailored to your brand's unique needs and audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
