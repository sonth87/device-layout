'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

interface CalEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time?: string;
  color: string;
}

const SAMPLE_EVENTS: CalEvent[] = [
  { id: '1', title: 'Team standup', date: toDateStr(new Date()), time: '09:00', color: 'bg-blue-500' },
  { id: '2', title: 'Lunch with David', date: toDateStr(addDays(new Date(), 2)), time: '12:30', color: 'bg-green-500' },
  { id: '3', title: 'Sprint review', date: toDateStr(addDays(new Date(), 4)), time: '15:00', color: 'bg-purple-500' },
  { id: '4', title: 'Weekly sync', date: toDateStr(addDays(new Date(), 7)), time: '10:00', color: 'bg-orange-500' },
];

function toDateStr(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number) {
  const r = new Date(d); r.setDate(r.getDate() + n); return r;
}

export function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState(toDateStr(today));
  const [events, setEvents] = useState<CalEvent[]>(SAMPLE_EVENTS);

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const dayEvents = events.filter((e) => e.date === selected);
  const monthEvents = events.reduce<Record<string, CalEvent[]>>((acc, e) => {
    if (!acc[e.date]) acc[e.date] = [];
    acc[e.date].push(e);
    return acc;
  }, {});

  const addEvent = () => {
    const title = prompt('Event title:');
    if (!title) return;
    const time = prompt('Time (HH:MM):') ?? undefined;
    const colors = ['bg-blue-500','bg-green-500','bg-purple-500','bg-red-500','bg-orange-500'];
    setEvents((prev) => [...prev, {
      id: crypto.randomUUID(), title, date: selected, time,
      color: colors[Math.floor(Math.random() * colors.length)],
    }]);
  };

  return (
    <div className="h-full flex bg-white dark:bg-[#1c1c1e] text-black dark:text-white">
      {/* Left: monthly grid */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10 shrink-0">
          <button onClick={prevMonth} className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10"><ChevronLeft className="w-4 h-4" /></button>
          <h2 className="flex-1 text-center font-semibold">{MONTHS[month]} {year}</h2>
          <button onClick={nextMonth} className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10"><ChevronRight className="w-4 h-4" /></button>
          <button onClick={() => { setYear(today.getFullYear()); setMonth(today.getMonth()); setSelected(toDateStr(today)); }}
            className="text-xs px-2 py-1 rounded-lg bg-red-500 text-white font-medium hover:opacity-80 transition-opacity">
            Today
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-black/10 dark:border-white/10">
          {DAYS.map((d) => (
            <div key={d} className="py-2 text-center text-xs font-medium text-black/50 dark:text-white/50">{d}</div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-7 grid-rows-6 overflow-hidden">
          {cells.map((day, idx) => {
            if (day === null) return <div key={idx} className="border-b border-r border-black/5 dark:border-white/5 bg-black/2" />;
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isToday = dateStr === toDateStr(today);
            const isSelected = dateStr === selected;
            const dots = monthEvents[dateStr] ?? [];
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

      {/* Right: day agenda */}
      <div className="w-52 shrink-0 border-l border-black/10 dark:border-white/10 flex flex-col">
        <div className="px-3 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between shrink-0">
          <p className="text-sm font-semibold">
            {new Date(selected + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
          <button onClick={addEvent} className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-80 transition-opacity">
            <Plus className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {dayEvents.length === 0 ? (
            <p className="text-xs text-black/30 dark:text-white/30 text-center mt-4">No events</p>
          ) : dayEvents.map((e) => (
            <div key={e.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
              <div className={cn('w-2 h-2 rounded-full mt-1.5 shrink-0', e.color)} />
              <div>
                <p className="text-xs font-medium">{e.title}</p>
                {e.time && <p className="text-[11px] text-black/40 dark:text-white/40">{e.time}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
