'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type ClockTab = 'worldclock' | 'alarm' | 'stopwatch' | 'timer';

const WORLD_CITIES = [
  { city: 'New York', tz: 'America/New_York', flag: '🇺🇸' },
  { city: 'London', tz: 'Europe/London', flag: '🇬🇧' },
  { city: 'Paris', tz: 'Europe/Paris', flag: '🇫🇷' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', flag: '🇯🇵' },
  { city: 'Sydney', tz: 'Australia/Sydney', flag: '🇦🇺' },
  { city: 'Dubai', tz: 'Asia/Dubai', flag: '🇦🇪' },
  { city: 'Singapore', tz: 'Asia/Singapore', flag: '🇸🇬' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', flag: '🇺🇸' },
];

function AnalogClock({ date }: { date: Date }) {
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours() % 12;

  const secDeg = s * 6;
  const minDeg = m * 6 + s * 0.1;
  const hourDeg = h * 30 + m * 0.5;

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Face */}
        <circle cx="100" cy="100" r="95" fill="var(--window-body-bg, #1c1c1e)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        {/* Hour marks */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + 80 * Math.sin(angle);
          const y1 = 100 - 80 * Math.cos(angle);
          const x2 = 100 + 90 * Math.sin(angle);
          const y2 = 100 - 90 * Math.cos(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />;
        })}
        {/* Hour hand */}
        <line
          x1="100" y1="100"
          x2={100 + 50 * Math.sin((hourDeg * Math.PI) / 180)}
          y2={100 - 50 * Math.cos((hourDeg * Math.PI) / 180)}
          stroke="white" strokeWidth="5" strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          x1="100" y1="100"
          x2={100 + 68 * Math.sin((minDeg * Math.PI) / 180)}
          y2={100 - 68 * Math.cos((minDeg * Math.PI) / 180)}
          stroke="white" strokeWidth="3" strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          x1="100" y1="100"
          x2={100 + 72 * Math.sin((secDeg * Math.PI) / 180)}
          y2={100 - 72 * Math.cos((secDeg * Math.PI) / 180)}
          stroke="#ff3b30" strokeWidth="1.5" strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="4" fill="white" />
        <circle cx="100" cy="100" r="2" fill="#ff3b30" />
      </svg>
    </div>
  );
}

function WorldClockTab() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-6">
        <AnalogClock date={now} />
        <p className="mt-3 text-4xl font-thin tabular-nums text-white/90">
          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </p>
        <p className="text-sm text-white/50">
          {now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
      <div className="space-y-1">
        {WORLD_CITIES.map(({ city, tz, flag }) => {
          const cityTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit', minute: '2-digit', timeZone: tz,
          }).format(now);
          const offset = new Intl.DateTimeFormat('en-US', {
            timeZoneName: 'short', timeZone: tz,
          }).format(now).split(' ').pop();
          return (
            <div key={city} className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">{flag}</span>
                <div>
                  <p className="text-sm font-medium text-white/90">{city}</p>
                  <p className="text-[11px] text-white/40">{offset}</p>
                </div>
              </div>
              <p className="text-lg font-light tabular-nums text-white/80">{cityTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StopwatchTab() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [accumulated, setAccumulated] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed(accumulated + Date.now() - startTime), 50);
    return () => clearInterval(id);
  }, [running, startTime, accumulated]);

  const toggle = () => {
    if (running) {
      setAccumulated(elapsed);
    } else {
      setStartTime(Date.now());
    }
    setRunning(!running);
  };

  const lap = () => {
    if (running) setLaps((l) => [elapsed, ...l]);
  };

  const reset = () => {
    setRunning(false);
    setElapsed(0);
    setAccumulated(0);
    setLaps([]);
  };

  const fmt = (ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <p className="text-6xl font-thin tabular-nums text-white/90 tracking-tight">{fmt(elapsed)}</p>
      <div className="flex gap-4">
        <button onClick={lap} disabled={!running}
          className="w-16 h-16 rounded-full border border-white/20 text-white/80 text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-colors">
          Lap
        </button>
        <button onClick={toggle}
          className={cn('w-16 h-16 rounded-full text-sm font-semibold transition-colors',
            running ? 'bg-red-500/20 border border-red-500/50 text-red-400' : 'bg-green-500/20 border border-green-500/50 text-green-400')}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset} disabled={elapsed === 0 && !running}
          className="w-16 h-16 rounded-full border border-white/20 text-white/80 text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-colors">
          Reset
        </button>
      </div>
      {laps.length > 0 && (
        <div className="w-full space-y-1 max-h-48 overflow-y-auto">
          {laps.map((lap, i) => (
            <div key={i} className="flex justify-between px-4 py-2 rounded-lg bg-white/5 text-sm text-white/70 tabular-nums">
              <span>Lap {laps.length - i}</span>
              <span>{fmt(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TimerTab() {
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);

  const presets = [30, 60, 120, 300, 600, 900, 1800, 3600];

  useEffect(() => {
    if (!running) return;
    if (remaining <= 0) { setRunning(false); return; }
    const id = setInterval(() => setRemaining((r) => {
      if (r <= 1) { setRunning(false); return 0; }
      return r - 1;
    }), 1000);
    return () => clearInterval(id);
  }, [running, remaining]);

  const start = () => {
    if (remaining === 0 && seconds > 0) setRemaining(seconds);
    setRunning(true);
  };

  const fmt = (s: number) => `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <p className="text-6xl font-thin tabular-nums text-white/90 tracking-tight">{fmt(running ? remaining : seconds)}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((p) => (
          <button key={p} onClick={() => { setSeconds(p); setRemaining(p); setRunning(false); }}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-sm text-white/70 hover:bg-white/20 transition-colors">
            {p < 60 ? `${p}s` : p < 3600 ? `${p / 60}m` : `${p / 3600}h`}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={() => { setRunning(false); setRemaining(seconds); }}
          className="w-16 h-16 rounded-full border border-white/20 text-sm font-medium text-white/70 hover:bg-white/10 transition-colors">
          Reset
        </button>
        <button onClick={running ? () => setRunning(false) : start}
          className={cn('w-16 h-16 rounded-full text-sm font-semibold transition-colors',
            running ? 'bg-red-500/20 border border-red-500/50 text-red-400' : 'bg-green-500/20 border border-green-500/50 text-green-400')}>
          {running ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}

export function Clock() {
  const [tab, setTab] = useState<ClockTab>('worldclock');

  const tabs: { id: ClockTab; label: string }[] = [
    { id: 'worldclock', label: 'World Clock' },
    { id: 'alarm', label: 'Alarm' },
    { id: 'stopwatch', label: 'Stopwatch' },
    { id: 'timer', label: 'Timer' },
  ];

  return (
    <div className="h-full flex flex-col bg-black/80">
      {/* Tab bar */}
      <div className="flex border-b border-white/10 px-3 pt-2 gap-1 shrink-0">
        {tabs.map(({ id, label }) => (
          <button key={id} onClick={() => setTab(id)}
            className={cn('px-4 py-1.5 text-sm rounded-t-lg transition-colors',
              tab === id
                ? 'bg-white/10 text-white font-medium border-b-2 border-orange-400'
                : 'text-white/50 hover:text-white/80')}>
            {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === 'worldclock' && <WorldClockTab />}
        {tab === 'alarm' && (
          <div className="flex items-center justify-center h-full text-white/30 text-sm">No alarms set</div>
        )}
        {tab === 'stopwatch' && <StopwatchTab />}
        {tab === 'timer' && <TimerTab />}
      </div>
    </div>
  );
}
