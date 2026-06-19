'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { WidgetSize } from '@/types/widget';

interface Props { size: WidgetSize }

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function MiniGrid({ year, month, today }: { year: number; month: number; today: Date }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className="grid grid-cols-7 gap-0.5 text-[11px]">
      {DAYS.map((d) => (
        <div key={d} className="text-center text-white/30 font-medium py-0.5">{d}</div>
      ))}
      {cells.map((day, i) => {
        const isToday = day !== null && today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
        return (
          <div key={i} className={cn(
            'text-center py-0.5 rounded-full tabular-nums',
            day === null ? '' : 'text-white/70',
            isToday && 'bg-red-500 text-white font-bold',
          )}>
            {day ?? ''}
          </div>
        );
      })}
    </div>
  );
}

export function CalendarWidget({ size }: Props) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const prev = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else setViewMonth(m => m - 1); };
  const next = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else setViewMonth(m => m + 1); };

  if (size === 'small') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-[20px] overflow-hidden">
        <p className="text-red-400 text-[11px] font-medium uppercase tracking-widest">{MONTHS[today.getMonth()].slice(0,3)}</p>
        <p className="text-white text-5xl font-thin leading-none">{today.getDate()}</p>
        <p className="text-white/50 text-[11px] mt-1">{today.toLocaleDateString([], { weekday: 'long' })}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white/10 backdrop-blur-md rounded-[20px] overflow-hidden p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-white text-[13px] font-semibold">{MONTHS[viewMonth]} {viewYear}</p>
        <div className="flex gap-1">
          <button onClick={prev} className="p-0.5 rounded hover:bg-white/10 text-white/60 hover:text-white">
            <ChevronLeft className="w-3.5 h-3.5"/>
          </button>
          <button onClick={next} className="p-0.5 rounded hover:bg-white/10 text-white/60 hover:text-white">
            <ChevronRight className="w-3.5 h-3.5"/>
          </button>
        </div>
      </div>
      <MiniGrid year={viewYear} month={viewMonth} today={today}/>
    </div>
  );
}
