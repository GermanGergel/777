
export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'LIVE' | 'FINISHED' | 'UPCOMING';
  time: string;
  league: string;
}

export interface Player {
  name: string;
  team: string;
  position: string;
  stats: {
    goals: number;
    assists: number;
    rating: number;
    matches: number;
  };
}

export interface Standing {
  rank: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  gd: number;
}

export type TabType = 'HOME' | 'MATCHES' | 'STANDINGS' | 'AI_INSIGHTS';
