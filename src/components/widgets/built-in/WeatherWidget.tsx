'use client';

import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import type { WidgetSize } from '@/types/widget';

interface Props { size: WidgetSize }

const MOCK = {
  city: 'Ho Chi Minh City',
  temp: 33,
  condition: 'Partly Cloudy',
  high: 36, low: 28,
  humidity: 72,
  wind: 14,
  forecast: [
    { day: 'Mon', icon: 'sun',   hi: 36, lo: 28 },
    { day: 'Tue', icon: 'cloud', hi: 34, lo: 27 },
    { day: 'Wed', icon: 'rain',  hi: 31, lo: 26 },
    { day: 'Thu', icon: 'sun',   hi: 35, lo: 28 },
    { day: 'Fri', icon: 'cloud', hi: 33, lo: 27 },
  ],
};

function WeatherIcon({ icon, className }: { icon: string; className?: string }) {
  if (icon === 'sun')   return <Sun   className={className} />;
  if (icon === 'rain')  return <CloudRain className={className} />;
  return <Cloud className={className} />;
}

export function WeatherWidget({ size }: Props) {
  if (size === 'small') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/80 to-cyan-400/80 backdrop-blur-md rounded-[20px] overflow-hidden">
        <p className="text-white/70 text-[10px] font-medium">{MOCK.city.split(' ').slice(-2).join(' ')}</p>
        <p className="text-white text-4xl font-thin leading-none">{MOCK.temp}°</p>
        <Cloud className="w-8 h-8 text-white/60 my-1"/>
        <p className="text-white/70 text-[10px]">{MOCK.condition}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-blue-500/80 to-cyan-400/80 backdrop-blur-md rounded-[20px] overflow-hidden p-4">
      <div className="flex items-start justify-between mb-auto">
        <div>
          <p className="text-white/80 text-[11px]">{MOCK.city}</p>
          <p className="text-white text-5xl font-thin leading-none mt-1">{MOCK.temp}°</p>
          <p className="text-white/70 text-[11px] mt-1">{MOCK.condition}</p>
        </div>
        <Cloud className="w-10 h-10 text-white/70 mt-1"/>
      </div>
      <div className="flex items-center gap-1 mt-2 text-white/60 text-[10px]">
        <Wind className="w-3 h-3"/> {MOCK.wind}km/h
        <span className="mx-1">·</span>
        H:{MOCK.high}° L:{MOCK.low}°
      </div>
      <div className="flex justify-between mt-2 pt-2 border-t border-white/20">
        {MOCK.forecast.map(f => (
          <div key={f.day} className="flex flex-col items-center gap-0.5">
            <p className="text-white/60 text-[9px]">{f.day}</p>
            <WeatherIcon icon={f.icon} className="w-3.5 h-3.5 text-white/70"/>
            <p className="text-white text-[10px] font-medium">{f.hi}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
