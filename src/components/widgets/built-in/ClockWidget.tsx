'use client';

import { useState, useEffect } from 'react';
import type { WidgetSize } from '@/types/widget';
import { useTranslation } from '@/hooks/useTranslation';

interface Props { size: WidgetSize }

const localeMap: Record<string, string> = {
  en: 'en-US',
  vi: 'vi-VN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  th: 'th-TH',
};

const WIDGET_CLOCK_LOCALE = {
  en: {
    flipTime: 'FLIP TIME',
    currentTime: 'CURRENT TIME',
    today: 'TODAY',
    hours: 'HOURS',
    minutes: 'MINUTES',
  },
  vi: {
    flipTime: 'ĐỒNG HỒ LẬT',
    currentTime: 'GIỜ HIỆN TẠI',
    today: 'HÔM NAY',
    hours: 'GIỜ',
    minutes: 'PHÚT',
  },
  ja: {
    flipTime: 'フリップ時計',
    currentTime: '現在時刻',
    today: '今日',
    hours: '時',
    minutes: '分',
  },
  ko: {
    flipTime: '플립 시계',
    currentTime: '현재 시간',
    today: '오늘',
    hours: '시간',
    minutes: '분',
  },
  zh: {
    flipTime: '翻页时间',
    currentTime: '当前时间',
    today: '今天',
    hours: '时',
    minutes: '分',
  },
  th: {
    flipTime: 'เวลาพับ',
    currentTime: 'เวลาปัจจุบัน',
    today: 'วันนี้',
    hours: 'ชั่วโมง',
    minutes: 'นาที',
  },
} as const;

function AnalogFace({ date, dim, forceDark = false }: { date: Date; dim: number; forceDark?: boolean }) {
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
      {/* Face circle: white/translucent in light mode, dark/translucent in dark mode */}
      <circle
        cx={cx}
        cy={cy}
        r="95"
        className={forceDark ? "fill-black/55 stroke-white/12" : "fill-white/90 dark:fill-black/55 stroke-black/10 dark:stroke-white/12"}
        strokeWidth="2"
      />
      {Array.from({ length: 12 }, (_, i) => {
        const a = i * 30;
        const p1 = ray(a, 80); const p2 = ray(a, 90);
        return (
          <line
            key={i}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            className={forceDark ? "stroke-white/40" : "stroke-black/40 dark:stroke-white/40"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      {/* Hour hand */}
      <line
        x1={cx}
        y1={cy}
        x2={ray(hourDeg, 50).x}
        y2={ray(hourDeg, 50).y}
        className={forceDark ? "stroke-white" : "stroke-black dark:stroke-white"}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Minute hand */}
      <line
        x1={cx}
        y1={cy}
        x2={ray(minDeg, 68).x}
        y2={ray(minDeg, 68).y}
        className={forceDark ? "stroke-white" : "stroke-black dark:stroke-white"}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Second hand */}
      <line x1={cx} y1={cy} x2={ray(secDeg, 72).x} y2={ray(secDeg, 72).y} stroke="#ff3b30" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r="4" className={forceDark ? "fill-white" : "fill-black dark:fill-white"}/>
      <circle cx={cx} cy={cy} r="2" fill="#ff3b30"/>
    </svg>
  );
}

export function ClockWidget({ size }: Props) {
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString(currentLocale, { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <AnalogFace date={now} dim={size === 'small' ? 140 : 150} />
      {size !== 'small' && (
        <div className="flex flex-col ml-3">
          <p className="text-zinc-800 dark:text-white text-2xl font-light tabular-nums">{timeStr}</p>
          <p className="text-zinc-500 dark:text-white/50 text-[11px] mt-0.5">
            {now.toLocaleDateString(currentLocale, { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
        </div>
      )}
    </div>
  );
}

export function ClockDarkWidget({ size }: Props) {
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString(currentLocale, { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-950/15 dark:bg-[#151518]/20">
      <AnalogFace date={now} dim={size === 'small' ? 140 : 150} forceDark={true} />
      {size !== 'small' && (
        <div className="flex flex-col ml-3">
          <p className="text-white text-2xl font-light tabular-nums">{timeStr}</p>
          <p className="text-white/50 text-[11px] mt-0.5">
            {now.toLocaleDateString(currentLocale, { weekday: 'short', month: 'short', day: 'numeric' })}
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
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-1.5 bg-transparent px-4">
      {CITIES.map(({ city, tz }) => {
        const t = new Intl.DateTimeFormat(currentLocale, { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(now);
        return (
          <div key={city} className="flex items-center justify-between">
            <p className="text-zinc-500 dark:text-white/60 text-[12px]">{city}</p>
            <p className="text-zinc-800 dark:text-white text-[14px] font-medium tabular-nums">{t}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ClockDigitalWidget({ size }: Props) {
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

  const dayName = now.toLocaleDateString(currentLocale, { weekday: 'long' });
  const dateStr = now.toLocaleDateString(currentLocale, { month: 'short', day: 'numeric' });

  const secRatio = now.getSeconds() / 60;
  const circ = 2 * Math.PI * 30; // radius is 30
  const offset = circ * (1 - secRatio);

  if (size === 'small') {
    return (
      <div className="w-full h-full flex flex-col justify-center p-4 bg-transparent select-none">
        <p className="text-red-500 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest leading-none">
          {dayName}
        </p>
        <div className="flex items-baseline mt-1.5 text-zinc-800 dark:text-white">
          <p className="text-4xl font-light leading-none tracking-tight tabular-nums">
            {hours}:{minutes}
          </p>
          <span className="text-[12px] font-semibold text-zinc-400 dark:text-zinc-500 ml-1.5 tabular-nums">
            {seconds}
          </span>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-[12px] font-semibold mt-3">
          {dateStr}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-between p-4 bg-transparent select-none">
      <div className="flex flex-col justify-center">
        <p className="text-red-500 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest leading-none">
          {dayName}
        </p>
        <div className="flex items-baseline mt-1 text-zinc-800 dark:text-white">
          <p className="text-5xl font-light leading-none tracking-tight tabular-nums">
            {hours}:{minutes}
          </p>
          <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase ml-1.5">
            {ampm}
          </span>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold mt-2.5">
          {now.toLocaleDateString(currentLocale, { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* SVG Seconds ring graphic */}
      <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="none" className="stroke-black/5 dark:stroke-white/5" strokeWidth="4" />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#ff3b30"
            strokeWidth="4"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
          <text x="50" y="55" textAnchor="middle" className="fill-zinc-800 dark:fill-white text-[12px] font-bold tabular-nums">
            {seconds}s
          </text>
        </svg>
      </div>
    </div>
  );
}

function FlipCard({ val, label }: { val: string | number; label?: string }) {
  const displayVal = String(val).padStart(2, '0');
  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative bg-zinc-900 dark:bg-black border border-white/5 rounded-lg w-13 h-15 flex flex-col items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Top half */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-850 dark:bg-[#1E1E20] border-b border-black/40" />
        {/* Bottom half */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-900 dark:bg-[#121214]" />
        {/* Split line */}
        <div className="absolute top-[29px] left-0 w-full h-[1px] bg-black/45 z-20" />
        {/* Value */}
        <span className="relative z-10 text-zinc-100 text-2xl font-black tracking-tight tabular-nums leading-none">
          {displayVal}
        </span>
      </div>
      {label && <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">{label}</span>}
    </div>
  );
}

function FlipCalendarCard({ month, day }: { month: string; day: number }) {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative bg-zinc-900 dark:bg-black border border-white/5 rounded-lg w-18 h-20 flex flex-col items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Top half: Month (Red background) */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 dark:bg-red-700 flex items-center justify-center pb-1">
          <span className="text-white text-[9px] font-extrabold tracking-widest uppercase mt-2">
            {month}
          </span>
        </div>
        {/* Bottom half: Day */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-850 dark:bg-[#121214]" />
        {/* Split line */}
        <div className="absolute top-[39px] left-0 w-full h-[1px] bg-black/45 z-20" />
        {/* Large day number */}
        <span className="relative z-10 text-zinc-100 text-3xl font-black tracking-tight tabular-nums leading-none mt-4">
          {day}
        </span>
      </div>
    </div>
  );
}

export function ClockFlipWidget({ size }: Props) {
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const t = WIDGET_CLOCK_LOCALE[language as keyof typeof WIDGET_CLOCK_LOCALE] || WIDGET_CLOCK_LOCALE.en;
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const MONTHS_SHORT = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  if (size === 'small') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-transparent p-3 select-none">
        <p className="text-zinc-500 dark:text-zinc-400 text-[8px] font-bold uppercase tracking-widest mb-2">
          {t.flipTime}
        </p>
        <div className="flex items-center gap-1.5">
          <FlipCard val={hours} />
          <span className="text-zinc-400 dark:text-zinc-600 animate-pulse font-bold text-xl mb-1">:</span>
          <FlipCard val={minutes} />
        </div>
        <p className="text-zinc-500 dark:text-zinc-450 text-[10px] font-bold mt-2">
          {now.toLocaleDateString(currentLocale, { weekday: 'short', day: 'numeric' })}
        </p>
      </div>
    );
  }

  // Medium layout: flip clock + flip calendar
  return (
    <div className="w-full h-full flex items-center justify-between bg-transparent px-6 py-4 select-none">
      {/* Time Flip */}
      <div className="flex flex-col">
        <p className="text-zinc-500 dark:text-zinc-400 text-[8px] font-bold uppercase tracking-widest mb-1.5 ml-1">
          {t.currentTime}
        </p>
        <div className="flex items-center gap-2">
          <FlipCard val={hours} label={t.hours} />
          <span className="text-zinc-450 dark:text-zinc-600 animate-pulse font-bold text-2xl mb-5">:</span>
          <FlipCard val={minutes} label={t.minutes} />
        </div>
      </div>

      {/* Vertical divider */}
      <div className="h-16 w-px bg-zinc-350 dark:bg-zinc-800 shrink-0" />

      {/* Calendar Flip */}
      <div className="flex flex-col items-end">
        <p className="text-zinc-500 dark:text-zinc-400 text-[8px] font-bold uppercase tracking-widest mb-1.5 mr-1">
          {t.today}
        </p>
        <FlipCalendarCard month={MONTHS_SHORT[now.getMonth()]} day={now.getDate()} />
      </div>
    </div>
  );
}
