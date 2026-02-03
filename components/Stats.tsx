
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Followers Gained', value: '500K+' },
    { label: 'Content Created', value: '5,000+' },
    { label: 'Avg. ROI', value: '4.5x' },
    { label: 'Client Retention', value: '98%' },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
