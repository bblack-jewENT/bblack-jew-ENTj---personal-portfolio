
import React from 'react';
import { AI_SUCCESS_STORIES } from '../constants';

const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.17-1.35 2.01-.11.83.13 1.71.71 2.33.51.58 1.28.89 2.04.86 1.08-.02 2.04-.71 2.48-1.69.21-.55.26-1.14.25-1.74-.01-4.71-.01-9.43-.01-14.15z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    default:
      return <span>{platform}</span>;
  }
};

const AIImpactSection: React.FC = () => {
  return (
    <section className="pb-24 bg-indigo-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-16 border-t border-indigo-800">
          <div className="mb-12 text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold mb-4">Real Results from AI Strategies</h3>
            <p className="text-indigo-300 max-w-2xl">
              I don't just use AI to save time; I use it to uncover insights that drive actual growth. 
              Here is how my AI-enhanced approach has transformed accounts recently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SUCCESS_STORIES.map((story) => (
              <div 
                key={story.id} 
                className={`p-8 rounded-3xl border transition-all duration-300 ${
                  story.brandName === 'Darxkin' 
                    ? 'bg-indigo-800/60 border-indigo-400 shadow-xl shadow-indigo-500/20 scale-105 md:scale-100 lg:scale-105 z-20' 
                    : 'bg-indigo-950/30 border-indigo-800 hover:border-indigo-700'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold">{story.brandName}</h4>
                    {story.handle && (
                      <a 
                        href={`https://instagram.com/${story.handle}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-400 text-sm hover:underline"
                      >
                        @{story.handle}
                      </a>
                    )}
                  </div>
                  <div className="p-2.5 bg-indigo-900/80 rounded-xl text-indigo-300 border border-indigo-700 flex items-center justify-center" title={story.platform}>
                    <PlatformIcon platform={story.platform} />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter mb-1">Winning Strategy</div>
                  <div className="text-lg font-medium leading-tight">{story.strategyName}</div>
                </div>

                <p className="text-indigo-200 text-sm mb-8 leading-relaxed italic">
                  "{story.impact}"
                </p>

                <div className="flex gap-4">
                  {story.stats.map((stat, i) => (
                    <div key={i} className="flex-1">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] uppercase text-indigo-400 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-indigo-800/20 rounded-[2rem] border border-indigo-700/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">🚀</div>
              <div>
                <h4 className="text-xl font-bold">Ready for your own viral strategy?</h4>
                <p className="text-indigo-300">My AI strategist is calibrated daily with the latest algorithm shifts.</p>
              </div>
            </div>
            <a href="#contact" className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-indigo-50 transition-all whitespace-nowrap">
              Get My Strategy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImpactSection;
