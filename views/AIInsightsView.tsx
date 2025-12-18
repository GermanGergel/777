
import React, { useState } from 'react';
import { getMatchAnalysis } from '../services/geminiService';
import { SparklesIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const AIInsightsView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<any[]>([]);

  const handleAnalyze = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setAnalysis(null);
    const result = await getMatchAnalysis(query);
    setAnalysis(result.text || "No analysis available.");
    setSources(result.sources || []);
    setLoading(false);
  };

  const suggestions = [
    "Real Madrid vs Man City",
    "Champions League final prediction",
    "Current state of Chelsea FC",
    "Leverkusen's tactical evolution"
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-br from-indigo-900/40 to-emerald-900/40 rounded-3xl p-6 border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <SparklesIcon className="w-8 h-8 text-emerald-400" />
          <h2 className="text-xl font-bold">AI Tactical Coach</h2>
        </div>
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          Get real-time tactical insights, player scouting, and match predictions powered by Gemini 3 Flash.
        </p>

        <form onSubmit={handleAnalyze} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about a match or team..."
            className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 aspect-square bg-emerald-500 text-white rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <PaperAirplaneIcon className="w-5 h-5" />
            )}
          </button>
        </form>
      </div>

      {!analysis && !loading && (
        <div className="space-y-3">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1">Try these:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => { setQuery(s); }}
                className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <div className="space-y-4">
          <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
          <div className="h-4 w-full bg-slate-800 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse" />
        </div>
      )}

      {analysis && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 animate-in fade-in slide-in-from-bottom-4">
          <div className="prose prose-invert prose-sm max-w-none">
            {analysis.split('\n').map((para, i) => (
              <p key={i} className="mb-4 text-slate-300 leading-relaxed last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {sources.length > 0 && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-3">Verified Sources:</p>
              <div className="flex flex-col gap-2">
                {sources.map((chunk, i) => chunk.web && (
                  <a 
                    key={i} 
                    href={chunk.web.uri} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-emerald-400 hover:underline line-clamp-1"
                  >
                    • {chunk.web.title || chunk.web.uri}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIInsightsView;
