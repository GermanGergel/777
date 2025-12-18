
import React from 'react';
import { Match, Standing } from '../types';
import MatchCard from '../components/MatchCard';

const MOCK_MATCHES: Match[] = [
  { id: '1', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeScore: 2, awayScore: 1, status: 'LIVE', time: "74'", league: 'La Liga' },
  { id: '2', homeTeam: 'Liverpool', awayTeam: 'Man City', homeScore: 0, awayScore: 0, status: 'UPCOMING', time: '21:00', league: 'Premier League' },
  { id: '3', homeTeam: 'Bayern Munich', awayTeam: 'Dortmund', homeScore: 3, awayScore: 0, status: 'FINISHED', time: 'FT', league: 'Bundesliga' },
];

const HomeView: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Featured Matches</h2>
          <button className="text-emerald-400 text-sm font-medium">See All</button>
        </div>
        <div className="space-y-3">
          {MOCK_MATCHES.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🔥</span>
          </div>
          <div>
            <h3 className="font-bold text-slate-100">AI Daily Pick</h3>
            <p className="text-xs text-slate-400">Based on recent tactical trends</p>
          </div>
        </div>
        <p className="text-sm text-slate-300 italic mb-4">
          "Real Madrid are showing strong defensive transitions. Expect a high-press game against Barcelona tonight with Vinicius Jr being the difference maker."
        </p>
        <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-sm font-semibold transition-colors">
          View Deep Analysis
        </button>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">News Highlights</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
            <img src="https://picsum.photos/seed/football1/400/250" className="w-full h-24 object-cover" alt="news" />
            <div className="p-3">
              <p className="text-xs font-semibold text-emerald-400 mb-1">TRANSFERS</p>
              <p className="text-sm font-bold line-clamp-2">Mbappe's first weeks at Real Madrid: The data...</p>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
            <img src="https://picsum.photos/seed/football2/400/250" className="w-full h-24 object-cover" alt="news" />
            <div className="p-3">
              <p className="text-xs font-semibold text-emerald-400 mb-1">PREMIER LEAGUE</p>
              <p className="text-sm font-bold line-clamp-2">Arsenal's injury update before derby...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
