
import React from 'react';
import { Match } from '../types';

interface Props {
  match: Match;
}

const MatchCard: React.FC<Props> = ({ match }) => {
  const isLive = match.status === 'LIVE';

  return (
    <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 hover:border-slate-700 transition-all">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{match.league}</span>
        <div className={`flex items-center gap-1.5 ${isLive ? 'text-rose-500' : 'text-slate-400'}`}>
          {isLive && <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />}
          <span className="text-xs font-bold">{match.time}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center p-2">
             <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${match.homeTeam}`} className="w-full h-full" alt="home" />
          </div>
          <span className="text-sm font-bold text-center leading-tight">{match.homeTeam}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black">{match.homeScore ?? '-'}</span>
            <span className="text-slate-600 font-bold">:</span>
            <span className="text-2xl font-black">{match.awayScore ?? '-'}</span>
          </div>
          <span className="text-[10px] font-medium text-slate-500 uppercase">Match Score</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center p-2">
            <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${match.awayTeam}`} className="w-full h-full" alt="away" />
          </div>
          <span className="text-sm font-bold text-center leading-tight">{match.awayTeam}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
