"use client";

import { cn } from "@/lib/utils";
import { isFirstDayOfLunarMonth, isRedHoliday } from "./types";

interface MiniCalendarProps {
  targetDate: Date;
  selectedDate: Date;
  onDaySelect?: (d: Date) => void;
}

export function MiniCalendar({ targetDate, selectedDate, onDaySelect }: MiniCalendarProps) {
  const yr = targetDate.getFullYear();
  const mth = targetDate.getMonth();

  const firstDay = new Date(yr, mth, 1).getDay(); // 0 is Sunday
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(yr, mth + 1, 0).getDate();

  // Populate cells with actual dates from adjacent months
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

  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="text-[10px] sm:text-xs">
      <div className="grid grid-cols-7 text-center font-medium text-black/30 dark:text-white/30 mb-1">
        {weekdays.map((w, idx) => (
          <div key={idx} className="h-5 flex items-center justify-center">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center">
        {cells.map((cell, idx) => {
          const isMuted = cell.getMonth() !== mth;
          const isToday =
            cell.getDate() === 14 &&
            cell.getMonth() === 6 &&
            cell.getFullYear() === 2026;
          const isSel =
            cell.getDate() === selectedDate.getDate() &&
            cell.getMonth() === selectedDate.getMonth() &&
            cell.getFullYear() === selectedDate.getFullYear();
          const isLunarFirst = isFirstDayOfLunarMonth(cell);
          const isHoliday = isRedHoliday(cell);

          return (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                onDaySelect?.(cell);
              }}
              className={cn(
                "h-5 w-5 mx-auto rounded-full flex items-center justify-center transition-all focus:outline-none relative text-[9px] sm:text-[10px] cursor-pointer",
                isMuted && (isHoliday ? "text-red-500/40 dark:text-red-400/40 font-semibold" : "text-black/25 dark:text-white/25 font-normal"),
                !isMuted && !isToday && !isSel && (isHoliday ? "text-red-500 dark:text-red-400 font-semibold" : "text-black/75 dark:text-white/75 font-normal"),
                isToday && !isSel && "bg-red-500 text-white font-bold",
                isSel && "bg-accent-active text-white shadow-sm font-semibold",
              )}
            >
              <span className={isToday || isSel ? "relative z-10" : ""}>{cell.getDate()}</span>
              {isLunarFirst && (
                <span
                  className={cn(
                    "absolute bottom-0.5 left-1 right-1 h-0.5 rounded-full z-20",
                    isToday || isSel ? "bg-white" : "bg-red-500"
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
