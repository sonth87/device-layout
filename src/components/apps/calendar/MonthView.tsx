"use client";

import { cn } from "@/lib/utils";
import { dateKey, getLunarDateString, isRedHoliday as isRedHolidayStatic, type CalEvent } from "./types";
import calendarData from "@/data/calendar-data.json";

const CALENDARS = calendarData.calendars;

interface MonthViewProps {
  currentDate: Date;
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
  setCurrentView: (v: "day" | "week" | "month" | "year") => void;
  filteredEvents: CalEvent[];
  onEventClick: (ev: CalEvent, el: HTMLElement) => void;
  isRedHoliday?: (d: Date) => boolean;
}

export function MonthView({
  currentDate,
  selectedDate,
  setSelectedDate,
  setCurrentView,
  filteredEvents,
  onEventClick,
  isRedHoliday = isRedHolidayStatic,
}: MonthViewProps) {
  const yr = currentDate.getFullYear();
  const mth = currentDate.getMonth();

  const firstDay = new Date(yr, mth, 1).getDay(); // 0 is Sunday
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(yr, mth + 1, 0).getDate();

  // Populate cells with actual dates from adjacent months to completely fill the 42-day grid (6 rows * 7 columns)
  const prevMonthDays = new Date(yr, mth, 0).getDate();
  const cells: Date[] = [];

  for (let i = adjustedFirstDay - 1; i >= 0; i--) {
    cells.push(new Date(yr, mth - 1, prevMonthDays - i));
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push(new Date(yr, mth, i));
  }
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push(new Date(yr, mth + 1, i));
  }

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex flex-col h-full min-h-0 bg-transparent">
      {/* Calendar Day names */}
      <div className="grid grid-cols-7 text-center border-b border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#1c1d20]/50 py-2 select-none shrink-0">
        {daysOfWeek.map((d) => (
          <span
            key={d}
            className="text-xs font-semibold text-black/55 dark:text-white/55"
          >
            {d}
          </span>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 grid grid-cols-7 grid-rows-6 divide-x divide-y divide-black/10 dark:divide-white/10 select-none min-h-0 border-t border-black/10 dark:border-white/10">
        {cells.map((cell, idx) => {
          const dKey = dateKey(cell);
          const isMuted = cell.getMonth() !== mth;
          const isToday =
            cell.getDate() === 14 &&
            cell.getMonth() === 6 &&
            cell.getFullYear() === 2026;
          const isSel =
            cell.getDate() === selectedDate.getDate() &&
            cell.getMonth() === selectedDate.getMonth() &&
            cell.getFullYear() === selectedDate.getFullYear();
          const dayEvs = filteredEvents.filter((ev) => ev.date === dKey);
          const isHoliday = isRedHoliday(cell);

          return (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelectedDate(cell);
              }}
              onDoubleClick={() => {
                setSelectedDate(cell);
                setCurrentView("day");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedDate(cell);
                }
              }}
              className={cn(
                "p-2 text-left flex flex-col justify-between hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus:outline-none h-full min-h-0 cursor-pointer",
                isSel && "bg-black/[0.01] dark:bg-white/[0.01]",
              )}
            >
              <div className="flex items-start justify-between w-full">
                {/* Lunar date indicator for Vietnamese users (shown left, smaller) */}
                {(() => {
                  const rawLunar = getLunarDateString(cell);
                  if (!rawLunar) return null;
                  const isFirstDay = rawLunar.startsWith("1/");
                  const isRamm = rawLunar.startsWith("15/");
                  const isSpecial = isFirstDay || isRamm;
                  const displayVal = isFirstDay ? rawLunar : rawLunar.split("/")[0];
                  return (
                    <span
                      className={cn(
                        "text-[10px] font-semibold pl-1 select-none",
                        isSpecial
                          ? "text-red-500 font-bold"
                          : "text-black/35 dark:text-white/35 font-normal"
                      )}
                    >
                      {displayVal}
                    </span>
                  );
                })()}
                {/* Solar date indicator (shown top right, larger) */}
                <span
                  className={cn(
                    "text-sm h-6 w-6 rounded-full flex items-center justify-center transition-all",
                    isMuted && (isHoliday ? "text-red-500/40 dark:text-red-400/40 font-bold" : "text-black/25 dark:text-white/25 font-normal"),
                    !isMuted && !isToday && !isSel && (isHoliday ? "text-red-500 dark:text-red-400 font-bold" : "text-black/75 dark:text-white/75 font-semibold"),
                    isToday && "bg-red-500 text-white font-bold shadow-sm",
                    isSel && "bg-accent-active text-white font-bold shadow-sm",
                  )}
                >
                  {cell.getDate()}
                </span>
              </div>
 
              {/* Day events badges */}
              <div className="mt-1 space-y-1 w-full overflow-hidden flex-1 flex flex-col justify-end">
                {dayEvs.map((ev) => {
                  const cal = CALENDARS.find((c) => c.id === ev.calendarId);
                  return (
                    <button
                      key={ev.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick(ev, e.currentTarget);
                      }}
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-white truncate w-full text-left hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer block border-none focus:outline-none"
                      style={{ backgroundColor: cal?.color || "#007afe" }}
                    >
                      {ev.title}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
