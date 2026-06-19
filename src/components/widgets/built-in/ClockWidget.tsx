'use client';

import { useState, useEffect } from 'react';
import type { WidgetSize } from '@/types/widget';

interface Props { size: WidgetSize }

function AnalogFace({ date, dim }: { date: Date; dim: number }) {
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours() % 12;
  const secDeg  = s * 6;
  const minDeg  = m * 6 + s * 0.1;
  const hourDeg = h * 30 + m * 0.5;
  const cx = 100; const cy = 100;
  const ray = (deg: number, r: number) => ({
    x: cx + r * Math.sin((deg * Math.PI) / 180),
    y: cy - r * Math.cos((deg * Math.PI) / 180),
  });

  return (
    <svg viewBox="0 0 200 200" style={{ width: dim, height: dim }}>
      <circle cx={cx} cy={cy} r="95" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.12)" strokeWidth="2"/>
      {Array.from({ length: 12 }, (_, i) => {
        const a = i * 30;
        const p1 = ray(a, 80); const p2 = ray(a, 90);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>;
      })}
      {/* Hour */}
      <line x1={cx} y1={cy} x2={ray(hourDeg, 50).x} y2={ray(hourDeg, 50).y} stroke="white" strokeWidth="5" strokeLinecap="round"/>
      {/* Minute */}
      <line x1={cx} y1={cy} x2={ray(minDeg, 68).x} y2={ray(minDeg, 68).y} stroke="white" strokeWidth="3" strokeLinecap="round"/>
      {/* Second */}
      <line x1={cx} y1={cy} x2={ray(secDeg, 72).x} y2={ray(secDeg, 72).y} stroke="#ff3b30" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r="4" fill="white"/>
      <circle cx={cx} cy={cy} r="2" fill="#ff3b30"/>
    </svg>
  );
}

export function ClockWidget({ size }: Props) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="w-full h-full flex items-center justify-center bg-black/60 rounded-[20px] overflow-hidden">
      <AnalogFace date={now} dim={size === 'small' ? 140 : 150} />
      {size !== 'small' && (
        <div className="flex flex-col ml-3">
          <p className="text-white text-2xl font-light tabular-nums">{timeStr}</p>
          <p className="text-white/50 text-[11px] mt-0.5">
            {now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
        </div>
      )}
    </div>
  );
}

const CITIES = [
  { city: 'New York', tz: 'America/New_York' },
  { city: 'London',   tz: 'Europe/London' },
  { city: 'Tokyo',    tz: 'Asia/Tokyo' },
];

export function ClockWorldWidget({ size: _size }: Props) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-1.5 bg-black/60 rounded-[20px] px-4 overflow-hidden">
      {CITIES.map(({ city, tz }) => {
        const t = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(now);
        return (
          <div key={city} className="flex items-center justify-between">
            <p className="text-white/60 text-[12px]">{city}</p>
            <p className="text-white text-[14px] font-medium tabular-nums">{t}</p>
          </div>
        );
      })}
    </div>
  );
}
