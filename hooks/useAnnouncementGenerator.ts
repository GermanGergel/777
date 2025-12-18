
import { useState } from 'react';
import { fetchAIInsight } from '../lib';

export const useAnnouncementGenerator = () => {
  const [announcement, setAnnouncement] = useState('');
  const [loading, setLoading] = useState(false);

  const generateLiveUpdate = async (matchDetails: string) => {
    setLoading(true);
    const result = await fetchAIInsight(
      `Generate a 1-sentence hype commentary for this match event: ${matchDetails}. Be energetic like a real football commentator.`
    );
    setAnnouncement(result || '');
    setLoading(false);
  };

  return { announcement, generateLiveUpdate, loading };
};
