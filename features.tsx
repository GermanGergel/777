
import React from 'react';
import { useAnnouncementGenerator } from './hooks/useAnnouncementGenerator';

export const GoalAlertFeature = () => {
  const { announcement, generateLiveUpdate } = useAnnouncementGenerator();
  
  return (
    <div className="bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl">
       <button 
         onClick={() => generateLiveUpdate('Real Madrid scores a header')}
         className="text-xs font-bold text-emerald-400"
       >
         Simulate Goal Event
       </button>
       {announcement && <p className="mt-2 text-sm italic">"{announcement}"</p>}
    </div>
  );
};
