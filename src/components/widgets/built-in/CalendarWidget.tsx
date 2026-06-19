'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { WidgetSize } from '@/types/widget';

interface Props { size: WidgetSize }

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getMondayFirstMonthCells(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon, ...
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells: { day: number; isCurrent: boolean; monthOffset: number }[] = [];

  // Previous month padding
  for (let i = startOffset - 1; i >= 0; i--) {
    cells.push({
      day: prevMonthDays - i,
      isCurrent: false,
      monthOffset: -1,
    });
  }

  // Current month
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({
      day: i,
      isCurrent: true,
      monthOffset: 0,
    });
  }

  // Next month padding to fill exactly 42 cells (6 rows of 7 columns)
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push({
      day: i,
      isCurrent: false,
      monthOffset: 1,
    });
  }

  return cells;
}

export function CalendarTodayWidget() {
  const today = new Date();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center select-none p-4">
      <p className="text-red-500 dark:text-red-400 text-[11px] font-bold uppercase tracking-widest leading-none">
        {MONTHS[today.getMonth()].slice(0, 3)}
      </p>
      <p className="text-zinc-800 dark:text-white text-5xl font-light leading-none mt-1.5">
        {today.getDate()}
      </p>
      <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium mt-2.5">
        {today.toLocaleDateString([], { weekday: 'long' })}
      </p>
    </div>
  );
}

export function CalendarWidget({ size }: Props) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const prev = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else setViewMonth(m => m - 1); };
  const next = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else setViewMonth(m => m + 1); };

  const cells = getMondayFirstMonthCells(viewYear, viewMonth);

  // Helper render for the month grid cells
  const renderGrid = (cellTextSize: string, circleSize: string) => (
    <div className="grid grid-cols-7 grid-rows-6 flex-1 w-full mt-1">
      {cells.map((cell, idx) => {
        const isToday = cell.isCurrent &&
          today.getFullYear() === viewYear &&
          today.getMonth() === viewMonth &&
          today.getDate() === cell.day;
        return (
          <div key={idx} className="h-full w-full flex items-center justify-center">
            <span className={cn(
              "flex items-center justify-center rounded-full font-medium tabular-nums transition-colors",
              cellTextSize,
              circleSize,
              isToday
                ? "bg-red-500 text-white font-bold shadow-[0_2px_6px_rgba(239,68,68,0.3)]"
                : !cell.isCurrent
                  ? "text-zinc-400/30 dark:text-zinc-600/30 font-normal"
                  : "text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
            )}>
              {cell.day}
            </span>
          </div>
        );
      })}
    </div>
  );

  // Small size layout
  if (size === 'small') {
    return (
      <div className="w-full h-full flex flex-col p-2.5 select-none justify-between">
        {/* Header */}
        <div className="flex items-center justify-center mb-1 shrink-0">
          <p className="text-zinc-800 dark:text-zinc-200 text-[10px] font-bold tracking-wider uppercase">
            {MONTHS[viewMonth].slice(0, 3)} {viewYear}
          </p>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 w-full text-center shrink-0">
          {DAYS.map((d, i) => (
            <div key={i} className="text-[8px] font-bold text-zinc-400 dark:text-zinc-500 py-0.5">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        {renderGrid("text-[9px]", "w-[18px] h-[18px]")}
      </div>
    );
  }

  // Medium size layout (split layout)
  if (size === 'medium') {
    return (
      <div className="w-full h-full flex p-3 select-none justify-between">
        {/* Left side: Today's detailed date & agenda */}
        <div className="w-[40%] pr-3 border-r border-zinc-200 dark:border-zinc-850 flex flex-col justify-between shrink-0">
          <div>
            <p className="text-red-500 dark:text-red-400 text-[9px] font-bold uppercase tracking-widest leading-none">
              {today.toLocaleDateString([], { weekday: 'long' })}
            </p>
            <p className="text-zinc-800 dark:text-white text-[40px] font-light leading-none mt-1.5">
              {today.getDate()}
            </p>
          </div>

          {/* Agenda items for widgets */}
          <div className="mt-2 text-[10px]">
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-1.5" />
            <p className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider text-[8px]">UPCOMING</p>
            <div className="flex items-center gap-1.5 mt-1 text-zinc-700 dark:text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span className="truncate font-semibold text-zinc-800 dark:text-zinc-250">Weekly Sync</span>
              <span className="text-[8px] text-zinc-450 dark:text-zinc-500 ml-auto shrink-0">10:00</span>
            </div>
          </div>
        </div>

        {/* Right side: Calendar month grid */}
        <div className="flex-1 pl-3 flex flex-col justify-between min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1 shrink-0">
            <p className="text-zinc-800 dark:text-white text-[11px] font-bold">
              {MONTHS[viewMonth]} {viewYear}
            </p>
            <div className="flex gap-0.5">
              <button onClick={prev} className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors">
                <ChevronLeft className="w-3 h-3"/>
              </button>
              <button onClick={next} className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3"/>
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 w-full text-center shrink-0">
            {DAYS.map((d, i) => (
              <div key={i} className="text-[8px] font-bold text-zinc-400 dark:text-zinc-500 py-0.5">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          {renderGrid("text-[10px]", "w-[18px] h-[18px]")}
        </div>
      </div>
    );
  }

  // Large size layout
  return (
    <div className="w-full h-full flex flex-col p-3 select-none justify-between">
      {/* Top half: Month calendar */}
      <div className="flex flex-col h-[180px] shrink-0 justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-1.5 shrink-0">
          <p className="text-zinc-800 dark:text-white text-[12px] font-bold">
            {MONTHS[viewMonth]} {viewYear}
          </p>
          <div className="flex gap-0.5">
            <button onClick={prev} className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors">
              <ChevronLeft className="w-3.5 h-3.5"/>
            </button>
            <button onClick={next} className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors">
              <ChevronRight className="w-3.5 h-3.5"/>
            </button>
          </div>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 w-full text-center shrink-0">
          {DAYS.map((d, i) => (
            <div key={i} className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 py-0.5">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        {renderGrid("text-[11px]", "w-6 h-6")}
      </div>

      {/* Bottom half: Detailed events agenda */}
      <div className="flex-1 pt-3 flex flex-col justify-between min-h-0">
        <p className="text-zinc-400 dark:text-zinc-500 text-[9px] font-bold uppercase tracking-widest leading-none shrink-0 mb-1">
          Today's Schedule
        </p>

        <div className="flex flex-col gap-1.5 flex-1 min-h-0 overflow-y-auto mt-1">
          <div className="flex items-center gap-2.5 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate">Weekly Sync Meeting</p>
              <p className="text-[9px] text-zinc-450 dark:text-zinc-500">10:00 AM - 10:45 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate">Lunch with Product Team</p>
              <p className="text-[9px] text-zinc-450 dark:text-zinc-500">12:30 PM - 1:30 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate">Sprint Planning & Review</p>
              <p className="text-[9px] text-zinc-450 dark:text-zinc-500">3:00 PM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
