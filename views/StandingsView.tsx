
import React, { useState } from 'react';
import { Standing } from '../types';

const MOCK_STANDINGS: Standing[] = [
  { rank: 1, team: 'Liverpool', played: 24, wins: 16, draws: 6, losses: 2, points: 54, gd: 32 },
  { rank: 2, team: 'Man City', played: 23, wins: 16, draws: 4, losses: 3, points: 52, gd: 31 },
  { rank: 3, team: 'Arsenal', played: 24, wins: 16, draws: 4, losses: 4, points: 52, gd: 31 },
  { rank: 4, team: 'Tottenham', played: 24, wins: 14, draws: 5, losses: 5, points: 47, gd: 13 },
  { rank: 5, team: 'Aston Villa', played: 24, wins: 14, draws: 4, losses: 6, points: 46, gd: 16 },
];

const StandingsView: React.FC = () => {
  const [league, setLeague] = useState('Premier League');

  return (
    <div className="p-4 space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['Premier League', 'La Liga', 'Serie A', 'Bundesliga'].map(l => (
          <button 
            key={l}
            onClick={() => setLeague(l)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${league === l ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-slate-500 border border-slate-800'}`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 p-4 bg-slate-800/50 text-[10px] font-bold text-slate-500 uppercase">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Team</div>
          <div className="col-span-1 text-center">P</div>
          <div className="col-span-1 text-center">W</div>
          <div className="col-span-1 text-center">D</div>
          <div className="col-span-1 text-center">L</div>
          <div className="col-span-2 text-right">PTS</div>
        </div>

        {MOCK_STANDINGS.map((row) => (
          <div key={row.rank} className="grid grid-cols-12 gap-2 p-4 items-center border-t border-slate-800/50 hover:bg-white/5 transition-colors">
            <div className={`col-span-1 text-xs font-bold ${row.rank <= 4 ? 'text-emerald-400' : 'text-slate-500'}`}>{row.rank}</div>
            <div className="col-span-5 flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center text-[8px] font-black">
                {row.team[0]}
              </div>
              <span className="text-sm font-semibold truncate">{row.team}</span>
            </div>
            <div className="col-span-1 text-center text-xs text-slate-400">{row.played}</div>
            <div className="col-span-1 text-center text-xs text-slate-400">{row.wins}</div>
            <div className="col-span-1 text-center text-xs text-slate-400">{row.draws}</div>
            <div className="col-span-1 text-center text-xs text-slate-400">{row.losses}</div>
            <div className="col-span-2 text-right text-sm font-black text-slate-100">{row.points}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-[10px] text-slate-500 px-1 font-medium">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          <span>Champions League</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-rose-500 rounded-full" />
          <span>Relegation</span>
        </div>
      </div>
    </div>
  );
};

export default StandingsView;
