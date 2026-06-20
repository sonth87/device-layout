'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { useTranslation } from '@/hooks/useTranslation';

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

const CLOCK_LOCALE = {
  en: {
    worldClock: 'World Clock',
    alarm: 'Alarm',
    stopwatch: 'Stopwatch',
    timer: 'Timer',
    noAlarms: 'No alarms set',
    lap: 'Lap',
    start: 'Start',
    stop: 'Stop',
    reset: 'Reset',
    pause: 'Pause',
    lapPrefix: 'Lap',
  },
  vi: {
    worldClock: 'Đồng hồ thế giới',
    alarm: 'Báo thức',
    stopwatch: 'Bấm giờ',
    timer: 'Hẹn giờ',
    noAlarms: 'Không có báo thức',
    lap: 'Vòng',
    start: 'Bắt đầu',
    stop: 'Dừng',
    reset: 'Đặt lại',
    pause: 'Tạm dừng',
    lapPrefix: 'Vòng',
  },
  ja: {
    worldClock: '世界時計',
    alarm: 'アラーム',
    stopwatch: 'ストップウォッチ',
    timer: 'タイマー',
    noAlarms: 'アラームなし',
    lap: 'ラップ',
    start: '開始',
    stop: '停止',
    reset: 'リセット',
    pause: '一時停止',
    lapPrefix: 'ラップ',
  },
  ko: {
    worldClock: '세계 시계',
    alarm: '알람',
    stopwatch: '스톱워치',
    timer: '타이머',
    noAlarms: '설정된 알람 없음',
    lap: '랩',
    start: '시작',
    stop: '중단',
    reset: '재설정',
    pause: '일시정지',
    lapPrefix: '랩',
  },
  zh: {
    worldClock: '世界时钟',
    alarm: '闹钟',
    stopwatch: '秒表',
    timer: '计时器',
    noAlarms: '未设置闹钟',
    lap: '计次',
    start: '启动',
    stop: '停止',
    reset: '复位',
    pause: '暂停',
    lapPrefix: '计次',
  },
  th: {
    worldClock: 'นาฬิกาโลก',
    alarm: 'เตือนความจำ',
    stopwatch: 'จับเวลา',
    timer: 'จับเวลาถอยหลัง',
    noAlarms: 'ไม่มีการตั้งปลุก',
    lap: 'รอบ',
    start: 'เริ่ม',
    stop: 'หยุด',
    reset: 'รีเซ็ต',
    pause: 'หยุดชั่วคราว',
    lapPrefix: 'รอบ',
  },
} as const;

const localeMap: Record<string, string> = {
  en: 'en-US',
  vi: 'vi-VN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  th: 'th-TH',
};

function AnalogClock({ date, size = 192 }: { date: Date; size?: number }) {
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours() % 12;

  const secDeg = s * 6;
  const minDeg = m * 6 + s * 0.1;
  const hourDeg = h * 30 + m * 0.5;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Face */}
        <circle cx="100" cy="100" r="95" className="fill-neutral-100 dark:fill-[#1c1c1e] stroke-black/10 dark:stroke-white/10" strokeWidth="2" />
        {/* Hour marks */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + 80 * Math.sin(angle);
          const y1 = 100 - 80 * Math.cos(angle);
          const x2 = 100 + 90 * Math.sin(angle);
          const y2 = 100 - 90 * Math.cos(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-black/50 dark:stroke-white/50" strokeWidth="2" strokeLinecap="round" />;
        })}
        {/* Hour hand */}
        <line
          x1="100" y1="100"
          x2={100 + 50 * Math.sin((hourDeg * Math.PI) / 180)}
          y2={100 - 50 * Math.cos((hourDeg * Math.PI) / 180)}
          className="stroke-black dark:stroke-white" strokeWidth="5" strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          x1="100" y1="100"
          x2={100 + 68 * Math.sin((minDeg * Math.PI) / 180)}
          y2={100 - 68 * Math.cos((minDeg * Math.PI) / 180)}
          className="stroke-black dark:stroke-white" strokeWidth="3" strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          x1="100" y1="100"
          x2={100 + 72 * Math.sin((secDeg * Math.PI) / 180)}
          y2={100 - 72 * Math.cos((secDeg * Math.PI) / 180)}
          stroke="#ff3b30" strokeWidth="1.5" strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="4" className="fill-black dark:fill-white" />
        <circle cx="100" cy="100" r="2" fill="#ff3b30" />
      </svg>
    </div>
  );
}

function WorldClockTab({ currentLocale }: { currentLocale: string }) {
  const [now, setNow] = useState(new Date());
  const { isNarrow } = useAppLayout();
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-6">
        <AnalogClock date={now} size={isNarrow ? 148 : 192} />
        <p className="mt-3 text-4xl font-thin tabular-nums text-black/90 dark:text-white/90">
          {now.toLocaleTimeString(currentLocale, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </p>
        <p className="text-sm text-black/50 dark:text-white/50">
          {now.toLocaleDateString(currentLocale, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
      <div className="space-y-1">
        {WORLD_CITIES.map(({ city, tz, flag }) => {
          const cityTime = new Intl.DateTimeFormat(currentLocale, {
            hour: '2-digit', minute: '2-digit', timeZone: tz,
          }).format(now);
          const offset = new Intl.DateTimeFormat(currentLocale, {
            timeZoneName: 'short', timeZone: tz,
          }).format(now).split(' ').pop();
          return (
            <div key={city} className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/5 dark:border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xl">{flag}</span>
                <div>
                  <p className="text-sm font-medium text-black/90 dark:text-white/90">{city}</p>
                  <p className="text-[11px] text-black/40 dark:text-white/40">{offset}</p>
                </div>
              </div>
              <p className="text-lg font-light tabular-nums text-black/80 dark:text-white/80">{cityTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type ClockLocaleDict = Record<keyof typeof CLOCK_LOCALE['en'], string>;

function StopwatchTab({ tCal }: { tCal: ClockLocaleDict }) {
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
      <p className="text-6xl font-thin tabular-nums text-black/90 dark:text-white/90 tracking-tight">{fmt(elapsed)}</p>
      <div className="flex gap-4">
        <button onClick={lap} disabled={!running}
          className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 text-black/80 dark:text-white/80 text-sm font-medium disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          {tCal.lap}
        </button>
        <button onClick={toggle}
          className={cn('w-16 h-16 rounded-full text-sm font-semibold transition-colors',
            running ? 'bg-red-500/20 border border-red-500/50 text-red-400' : 'bg-green-500/20 border border-green-500/50 text-green-400')}>
          {running ? tCal.stop : tCal.start}
        </button>
        <button onClick={reset} disabled={elapsed === 0 && !running}
          className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 text-black/80 dark:text-white/80 text-sm font-medium disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          {tCal.reset}
        </button>
      </div>
      {laps.length > 0 && (
        <div className="w-full space-y-1 max-h-48 overflow-y-auto">
          {laps.map((lap, i) => (
            <div key={i} className="flex justify-between px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-sm text-black/70 dark:text-white/70 tabular-nums border border-black/5 dark:border-white/5">
              <span>{tCal.lapPrefix} {laps.length - i}</span>
              <span>{fmt(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TimerTab({ tCal }: { tCal: ClockLocaleDict }) {
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
      <p className="text-6xl font-thin tabular-nums text-black/90 dark:text-white/90 tracking-tight">{fmt(running ? remaining : seconds)}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((p) => (
          <button key={p} onClick={() => { setSeconds(p); setRemaining(p); setRunning(false); }}
            className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 text-sm text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20 transition-colors border border-black/5 dark:border-white/5">
            {p < 60 ? `${p}s` : p < 3600 ? `${p / 60}m` : `${p / 3600}h`}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={() => { setRunning(false); setRemaining(seconds); }}
          className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          {tCal.reset}
        </button>
        <button onClick={running ? () => setRunning(false) : start}
          className={cn('w-16 h-16 rounded-full text-sm font-semibold transition-colors',
            running ? 'bg-red-500/20 border border-red-500/50 text-red-400' : 'bg-green-500/20 border border-green-500/50 text-green-400')}>
          {running ? tCal.pause : tCal.start}
        </button>
      </div>
    </div>
  );
}

export function Clock() {
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const tCal = CLOCK_LOCALE[language as keyof typeof CLOCK_LOCALE] || CLOCK_LOCALE.en;

  const [tab, setTab] = useState<ClockTab>('worldclock');
  const { isNarrow } = useAppLayout();

  const tabs: { id: ClockTab; label: string; short: string }[] = [
    { id: 'worldclock', label: tCal.worldClock, short: tCal.worldClock.split(' ')[0] },
    { id: 'alarm',      label: tCal.alarm,       short: tCal.alarm },
    { id: 'stopwatch',  label: tCal.stopwatch,   short: tCal.stopwatch },
    { id: 'timer',      label: tCal.timer,       short: tCal.timer },
  ];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#0F1115] text-black dark:text-white transition-colors">
      {/* Tab bar */}
      <div className="flex border-b border-black/10 dark:border-white/10 px-2 pt-2 gap-0.5 shrink-0 bg-neutral-50 dark:bg-black/20">
        {tabs.map(({ id, label, short }) => (
          <button key={id} onClick={() => setTab(id)}
            className={cn(
              'flex-1 py-1.5 text-sm rounded-t-lg transition-colors truncate',
              isNarrow ? 'text-xs px-1' : 'px-3',
              tab === id
                ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white font-medium border-b-2 border-orange-500'
                : 'text-black/50 dark:text-white/50 hover:text-black/80 hover:dark:text-white/80')}>
            {isNarrow ? short : label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === 'worldclock' && <WorldClockTab currentLocale={currentLocale} />}
        {tab === 'alarm' && (
          <div className="flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm">{tCal.noAlarms}</div>
        )}
        {tab === 'stopwatch' && <StopwatchTab tCal={tCal} />}
        {tab === 'timer' && <TimerTab tCal={tCal} />}
      </div>
    </div>
  );
}
