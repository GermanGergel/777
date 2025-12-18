
import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children, color = 'emerald' }: { children: React.ReactNode, color?: string }) => {
  const colors: Record<string, string> = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${colors[color]}`}>
      {children}
    </span>
  );
};

export const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-extrabold tracking-tight text-slate-100">{children}</h2>
);
