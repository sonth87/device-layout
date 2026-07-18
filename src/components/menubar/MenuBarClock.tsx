'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store';

export function MenuBarClock({ forceDark = false }: { forceDark?: boolean } = {}) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const wallpaperTextTheme = useStore((s) => s.wallpaperTextTheme);
  const cls = forceDark || wallpaperTextTheme === 'dark' ? 'text-white/85' : 'text-black/80';

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex items-center gap-1.5 text-[12px] font-medium ${cls} select-none tabular-nums`}>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
}
