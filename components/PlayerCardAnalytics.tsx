
import React from 'react';
import { Card, Badge } from './ui';

interface PlayerData {
  name: string;
  stats: { goals: number; assists: number; xG: number; passes: number };
}

export const PlayerCardAnalytics = ({ player }: { player: PlayerData }) => {
  const maxValue = 100;
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-slate-500 font-bold uppercase">Performance Radar</p>
          <h3 className="font-black text-lg">{player.name}</h3>
        </div>
        <Badge color="indigo">AI Rating: 8.4</Badge>
      </div>
      
      <div className="space-y-3">
        {Object.entries(player.stats).map(([key, val]) => (
          <div key={key}>
            <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
              <span>{key}</span>
              <span>{val}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-1000" 
                style={{ width: `${(val / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
