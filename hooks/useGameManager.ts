
import { useState } from 'react';

export const useGameManager = () => {
  const [liveMatches, setLiveMatches] = useState([
    { id: 'm1', home: 'RMA', away: 'BAR', score: '2-1', phase: '2nd Half' }
  ]);

  const updateScore = (id: string, newScore: string) => {
    setLiveMatches(prev => prev.map(m => m.id === id ? { ...m, score: newScore } : m));
  };

  return { liveMatches, updateScore };
};
