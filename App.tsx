
import React, { useState } from 'react';
import { AppProvider } from './context';
import { Heading, Card } from './components/ui';
import { WeatherWidget } from './components/WeatherWidget';
import { PlayerCardAnalytics } from './components/PlayerCardAnalytics';
import { GoalAlertFeature } from './features';
import { 
  HomeIcon, 
  ChartBarIcon, 
  SparklesIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('HOME');

  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 pb-24">
        <header className="p-4 border-b border-slate-900 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Heading>FootyStats <span className="text-emerald-500">AI</span></Heading>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <span className="text-xs font-bold">JD</span>
            </div>
          </div>
        </header>

        <main className="p-4 max-w-2xl mx-auto space-y-6">
          <WeatherWidget location="Santiago Bernabéu, Madrid" />
          
          <GoalAlertFeature />

          <section className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Player Analysis</h3>
              <button className="text-xs text-emerald-400">View All</button>
            </div>
            <PlayerCardAnalytics 
              player={{
                name: "Vinícius Júnior",
                stats: { goals: 82, assists: 64, xG: 75, passes: 88 }
              }} 
            />
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trending Topics</h3>
            <Card className="p-4 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10">
              <p className="text-sm leading-relaxed">
                <span className="text-indigo-400 font-bold">#AIInsight:</span> Analysis suggests Lamine Yamal's expected assist (xA) rate is higher than Messi's was at the same age.
              </p>
            </Card>
          </section>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-2xl border-t border-slate-900 px-8 py-4 flex justify-between safe-area-bottom">
          <NavItem active={activeTab === 'HOME'} icon={<HomeIcon className="w-6 h-6"/>} onClick={() => setActiveTab('HOME')} />
          <NavItem active={activeTab === 'LIVE'} icon={<ChartBarIcon className="w-6 h-6"/>} onClick={() => setActiveTab('LIVE')} />
          <NavItem active={activeTab === 'AI'} icon={<SparklesIcon className="w-6 h-6"/>} onClick={() => setActiveTab('AI')} />
          <NavItem active={activeTab === 'LEAGUE'} icon={<TrophyIcon className="w-6 h-6"/>} onClick={() => setActiveTab('LEAGUE')} />
        </nav>
      </div>
    </AppProvider>
  );
};

const NavItem = ({ active, icon, onClick }: any) => (
  <button onClick={onClick} className={`transition-all duration-300 ${active ? 'text-emerald-500 scale-125' : 'text-slate-600'}`}>
    {icon}
  </button>
);

export default App;
