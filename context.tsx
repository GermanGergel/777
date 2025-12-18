
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
  userRole: 'fan' | 'analyst';
  selectedLeague: string;
  isNotificationsEnabled: boolean;
}

const AppContext = createContext<{
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
} | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>({
    userRole: 'fan',
    selectedLeague: 'pl',
    isNotificationsEnabled: true
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
