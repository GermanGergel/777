
import React, { useState } from 'react';
import { Match } from '../types';
import MatchCard from '../components/MatchCard';

const MOCK_ALL_MATCHES: Match[] = [
  { id: '1', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeScore: 2, awayScore: 1, status: 'LIVE', time: "74'", league: 'La Liga' },
  { id: '2', homeTeam: 'Chelsea', awayTeam: 'Arsenal', homeScore: 1, awayScore: 1, status: 'LIVE', time: "12'", league: 'Premier League' },
  { id: '3', homeTeam: 'Juventus', awayTeam: 'Inter', homeScore: 0, awayScore: 2, status: 'LIVE', time: "44'", league: 'Serie A' },
  { id: '4', homeTeam: 'PSG', awayTeam: 'Monaco', status: 'UPCOMING', time: '20:45', league: 'Ligue 1' },
  { id: '5', homeTeam: 'Liverpool', awayTeam: 'Man City', status: 'UPCOMING', time: '21:00', league: 'Premier League' },
];

const MatchesView: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'LIVE' | 'UPCOMING'>('ALL');

  const filteredMatches = MOCK_ALL_MATCHES.filter(m => {
    if (filter === 'ALL') return true;
    return m.status === filter;
  });

  return (
    <div className="p-4 space-y-6">
      <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-2xl w-full">
        {(['ALL', 'LIVE', 'UPCOMING'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${filter === f ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))
        ) : (
          <div className="py-20 text-center space-y-3">
             <div className="text-4xl">⚽</div>
             <p className="text-slate-500 text-sm">No {filter.toLowerCase()} matches currently.</p>
          </div>
        )}
      </div>

      <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-4 flex items-center justify-between">
         <div className="space-y-1">
           <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Smart Alerts</h4>
           <p className="text-[11px] text-slate-400">Get notified about goals in these matches.</p>
         </div>
         <div className="w-12 h-6 bg-slate-800 rounded-full relative p-1 cursor-pointer">
            <div className="w-4 h-4 bg-indigo-500 rounded-full absolute right-1" />
         </div>
      </div>
    </div>
  );
};

export default MatchesView;
