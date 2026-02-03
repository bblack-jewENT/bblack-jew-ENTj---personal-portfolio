
import React, { useState } from 'react';
import { generateContentStrategy } from '../services/gemini';
import { ContentIdea } from '../types';

const AIContentTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ContentIdea[] | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;
    
    setIsLoading(true);
    try {
      const ideas = await generateContentStrategy(niche, platform);
      setResults(ideas);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 bg-indigo-800 text-indigo-300 rounded-full text-sm font-semibold mb-6">
              AI Strategy Preview
            </span>
            <h2 className="text-4xl font-serif font-bold mb-8">Get a FREE Content Strategy in Seconds</h2>
            <p className="text-indigo-200 text-lg mb-10">
              Want a sneak peek at how I think? Tell my AI strategist your niche and platform, and I'll generate a 3-day high-engagement content plan just for you.
            </p>
            
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">What's your brand niche?</label>
                <input 
                  type="text" 
                  placeholder="e.g. Luxury Skincare, Eco-friendly Fashion, SaaS Startup"
                  className="w-full bg-indigo-800/50 border border-indigo-700 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder:text-indigo-400/50"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Target Platform</label>
                <select 
                  className="w-full bg-indigo-800/50 border border-indigo-700 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-indigo-900 border-t-transparent rounded-full animate-spin"></div>
                    Developing your strategy...
                  </>
                ) : 'Generate Strategy'}
              </button>
            </form>
          </div>

          <div className="bg-indigo-800/30 backdrop-blur-sm border border-indigo-700 rounded-3xl p-8 min-h-[400px]">
            {!results && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 opacity-50">
                <div className="text-5xl mb-4">✨</div>
                <p>Your custom strategy will appear here.</p>
              </div>
            )}
            
            {isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-12">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-xl font-medium">Analyzing market trends...</p>
                <p className="text-indigo-300 mt-2">Gemini is thinking of your next viral post.</p>
              </div>
            )}

            {results && (
              <div className="space-y-8 animate-fadeIn">
                {results.map((idea, idx) => (
                  <div key={idx} className="bg-indigo-900/40 p-6 rounded-2xl border border-indigo-700/50">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">{idea.day}</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-[10px] font-bold">TOPIC</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{idea.topic}</h4>
                    <p className="text-indigo-100 text-sm mb-4 leading-relaxed line-clamp-2 italic">"{idea.caption}"</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {idea.hashtags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-indigo-300">#{tag}</span>
                      ))}
                    </div>
                    <div className="text-xs p-3 bg-indigo-950/50 rounded-lg text-indigo-200 border-l-2 border-indigo-500">
                      <strong>Visual Hook:</strong> {idea.visualSuggestion}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContentTool;
