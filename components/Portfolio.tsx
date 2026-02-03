
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Proof in the Performance</h2>
            <p className="text-lg text-slate-600">
              Explore the results I've delivered for clients across diverse industries. Every campaign is backed by data.
            </p>
          </div>
          <a href="#" className="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-8">
            View All Projects
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-8 line-clamp-3 italic">"{project.description}"</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl">
                      <div className="text-indigo-600 font-bold text-xl">{stat.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-tight font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
