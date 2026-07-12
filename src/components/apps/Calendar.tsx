'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileSplitView, useMobileSplitBack } from './MobileSplitView';
import { useTranslation } from '@/hooks/useTranslation';
import type { AppContentProps } from './AppRegistry';

interface CalEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  color: string;
}

const SAMPLE_EVENTS: CalEvent[] = [
  { id: '1', title: 'Team standup',    date: toDateStr(new Date()),         time: '09:00', color: 'bg-blue-500' },
  { id: '2', title: 'Lunch with David',date: toDateStr(addDays(new Date(),2)), time: '12:30', color: 'bg-green-500' },
  { id: '3', title: 'Sprint review',   date: toDateStr(addDays(new Date(),4)), time: '15:00', color: 'bg-purple-500' },
  { id: '4', title: 'Weekly sync',     date: toDateStr(addDays(new Date(),7)), time: '10:00', color: 'bg-orange-500' },
];

const CALENDAR_LOCALE = {
  en: {
    today: 'Today',
    noEvents: 'No events',
    eventTitle: 'Event title:',
    eventTime: 'Time (HH:MM):',
  },
  vi: {
    today: 'Hôm nay',
    noEvents: 'Không có sự kiện',
    eventTitle: 'Tiêu đề sự kiện:',
    eventTime: 'Thời gian (Giờ:Phút):',
  },
  ja: {
    today: '今日',
    noEvents: 'イベントなし',
    eventTitle: 'イベント名:',
    eventTime: '時間 (HH:MM):',
  },
  ko: {
    today: '오늘',
    noEvents: '일정 없음',
    eventTitle: '일정 제목:',
    eventTime: '시간 (HH:MM):',
  },
  zh: {
    today: '今天',
    noEvents: '无日程',
    eventTitle: '日程标题:',
    eventTime: '时间 (HH:MM):',
  },
  th: {
    today: 'วันนี้',
    noEvents: 'ไม่มีกิจกรรม',
    eventTitle: 'ชื่อกิจกรรม:',
    eventTime: 'เวลา (HH:MM):',
  },
} as const;

function toDateStr(d: Date) { return d.toISOString().slice(0, 10); }
function addDays(d: Date, n: number) { const r = new Date(d); r.setDate(r.getDate() + n); return r; }

const localeMap: Record<string, string> = {
  en: 'en-US',
  vi: 'vi-VN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  th: 'th-TH',
};

export function Calendar({ appId }: AppContentProps) {
  const { language } = useTranslation();
  const currentLocale = localeMap[language] || 'en-US';
  const tCal = CALENDAR_LOCALE[language as keyof typeof CALENDAR_LOCALE] || CALENDAR_LOCALE.en;
  void appId;

  const today = new Date();
  const [year, setYear]     = useState(today.getFullYear());
  const [month, setMonth]   = useState(today.getMonth());
  const [selected, setSelected] = useState<string | null>(null);
  const [events, setEvents] = useState<CalEvent[]>(SAMPLE_EVENTS);

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const monthEvents = events.reduce<Record<string, CalEvent[]>>((acc, e) => {
    (acc[e.date] ??= []).push(e); return acc;
  }, {});

  const addEvent = (dateStr: string) => {
    const title = prompt(tCal.eventTitle);
    if (!title) return;
    const time = prompt(tCal.eventTime) ?? undefined;
    const colors = ['bg-blue-500','bg-green-500','bg-purple-500','bg-red-500','bg-orange-500'];
    setEvents((prev) => [...prev, {
      id: crypto.randomUUID(), title, date: dateStr, time,
      color: colors[Math.floor(Math.random() * colors.length)],
    }]);
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2026, 5, 21 + i); // Sunday
    return d.toLocaleDateString(currentLocale, { weekday: 'short' });
  });

  const monthYearLabel = new Date(year, month, 1).toLocaleDateString(currentLocale, { month: 'long', year: 'numeric' });

  // ── Calendar grid (always visible) ───────────────────────────────────────
  const calendarPanel = (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white">
      {/* Month nav */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10 shrink-0">
        <button onClick={prevMonth} className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h2 className="flex-1 text-center font-semibold">{monthYearLabel}</h2>
        <button onClick={nextMonth} className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => { setYear(today.getFullYear()); setMonth(today.getMonth()); }}
          className="text-xs px-2 py-1 rounded-lg bg-red-500 text-white font-medium hover:opacity-80"
        >
          {tCal.today}
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 border-b border-black/10 dark:border-white/10 shrink-0">
        {daysOfWeek.map((d) => (
          <div key={d} className="py-2 text-center text-xs font-medium text-black/50 dark:text-white/50">{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-7 grid-rows-6 overflow-hidden">
        {cells.map((day, idx) => {
          if (day === null) return <div key={idx} className="border-b border-r border-black/5 dark:border-white/5 bg-black/2" />;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const isToday    = dateStr === toDateStr(today);
          const isSelected = dateStr === selected;
          const dots       = monthEvents[dateStr] ?? [];
          return (
            <button
              key={idx}
              onClick={() => setSelected(dateStr)}
              className={cn(
                'border-b border-r border-black/5 dark:border-white/5 p-1 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5',
                isSelected && 'bg-blue-500/15 dark:bg-blue-500/20',
              )}
            >
              <span className={cn(
                'inline-flex w-6 h-6 items-center justify-center rounded-full text-sm font-medium',
                isToday && 'bg-red-500 text-white',
              )}>
                {day}
              </span>
              <div className="flex gap-0.5 mt-0.5 flex-wrap">
                {dots.slice(0, 3).map((e) => (
                  <div key={e.id} className={cn('h-1 rounded-full flex-1', e.color, 'opacity-70')} />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── Day agenda (detail panel) ─────────────────────────────────────────────
  const agendaPanel = selected ? <AgendaPanel
    selected={selected}
    events={events}
    onAddEvent={addEvent}
    locale={currentLocale}
    tCal={tCal}
  /> : null;

  return (
    <MobileSplitView
      list={calendarPanel}
      detail={agendaPanel}
      onBack={() => setSelected(null)}
      detailTitle={selected
        ? new Date(selected + 'T00:00:00').toLocaleDateString(currentLocale, { month: 'short', day: 'numeric' })
        : ''}
      className="bg-white dark:bg-[#0F1115]"
      sidebarWidth="w-52"
    />
  );
}

// Separate component so it can call useMobileSplitBack
function AgendaPanel({ selected, events, onAddEvent, locale, tCal }: {
  selected: string;
  events: CalEvent[];
  onAddEvent: (date: string) => void;
  locale: string;
  tCal: { today: string; noEvents: string; eventTitle: string; eventTime: string };
}) {
  const mobileBack = useMobileSplitBack();
  const dayEvents  = events.filter((e) => e.date === selected);
  const dateLabel  = new Date(selected + 'T00:00:00').toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-black/10 dark:border-white/10 shrink-0">
        {mobileBack && (
          <button
            onClick={mobileBack}
            className="flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <p className="flex-1 text-sm font-semibold truncate">{dateLabel}</p>
        <button
          onClick={() => onAddEvent(selected)}
          className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-80 shrink-0"
        >
          <Plus className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Events list */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {dayEvents.length === 0 ? (
          <p className="text-xs text-black/30 dark:text-white/30 text-center mt-4">{tCal.noEvents}</p>
        ) : dayEvents.map((e) => (
          <div key={e.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
            <div className={cn('w-2 h-2 rounded-full mt-1.5 shrink-0', e.color)} />
            <div>
              <p className="text-xs font-medium text-black/90 dark:text-white/90">{e.title}</p>
              {e.time && <p className="text-[11px] text-black/40 dark:text-white/40">{e.time}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
