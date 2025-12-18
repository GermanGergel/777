
import { useState } from 'react';

export const useTeamAssignment = () => {
  const [favTeam, setFavTeam] = useState<string | null>(null);
  
  const assign = (teamId: string) => setFavTeam(teamId);
  
  return { favTeam, assign };
};
