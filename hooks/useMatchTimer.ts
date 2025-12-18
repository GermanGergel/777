
import { useState, useEffect } from 'react';

export const useMatchTimer = (initialSeconds = 0, isRunning = false) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const gameMinute = Math.min(90, Math.floor(seconds / 60) + 1);
  const isStoppage = seconds > 5400; // 90 mins

  return { seconds, gameMinute, isStoppage };
};
