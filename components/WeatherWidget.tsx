
import React from 'react';
import { CloudIcon, SunIcon } from '@heroicons/react/24/outline';
import { Card } from './ui';

export const WeatherWidget = ({ location }: { location: string }) => {
  return (
    <Card className="p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SunIcon className="w-5 h-5 text-amber-400" />
        <div className="text-xs">
          <p className="font-bold text-slate-200">18°C Sunny</p>
          <p className="text-slate-500">{location}</p>
        </div>
      </div>
      <div className="text-[10px] text-slate-500 text-right">
        <p>Humidity: 45%</p>
        <p>Wind: 12 km/h</p>
      </div>
    </Card>
  );
};
