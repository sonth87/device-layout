"use client";

import { cn } from "@/lib/utils";
import { dateKey, getLunarDateString, isRedHoliday, type CalEvent } from "./types";
import calendarData from "@/data/calendar-data.json";

const CALENDARS = calendarData.calendars;

interface WeekViewProps {
  currentDate: Date;
  setSelectedDate: (d: Date) => void;
  setCurrentView: (v: "day" | "week" | "month" | "year") => void;
  filteredEvents: CalEvent[];
  onEventClick: (ev: CalEvent, el: HTMLElement) => void;
}

export function WeekView({ currentDate, setSelectedDate, setCurrentView, filteredEvents, onEventClick }: WeekViewProps) {
  // Find start of week (Monday)
  const startOfWeek = new Date(currentDate);
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
  startOfWeek.setDate(diff);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  const hours = Array.from({ length: 25 }, (_, i) => i); // 00:00 to 24:00 (next day)

  return (
    <div className="border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col overflow-hidden h-full min-h-[500px]">
      {/* Weekday headers */}
      <div className="grid grid-cols-[60px_1fr] border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1b1e] shrink-0">
        <div className="border-r border-black/10 dark:border-white/10" />
        <div className="grid grid-cols-7 text-center py-2.5">
          {days.map((d, idx) => {
            const isToday =
              d.getDate() === 14 &&
              d.getMonth() === 6 &&
              d.getFullYear() === 2026;
            const isHoliday = isRedHoliday(d);
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-0.5 select-none"
              >
                <span className="text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase">
                  {d.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <button
                  onClick={() => {
                    setSelectedDate(d);
                    setCurrentView("day");
                  }}
                  className={cn(
                    "text-sm font-semibold h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer",
                    isToday && "bg-red-500 text-white font-bold",
                    !isToday && isHoliday && "text-red-500 dark:text-red-400 font-bold",
                  )}
                >
                  {d.getDate()}
                </button>
                {(() => {
                  const rawLunar = getLunarDateString(d);
                  if (!rawLunar) return null;
                  const isFirstDay = rawLunar.startsWith("1/");
                  const isRamm = rawLunar.startsWith("15/");
                  const isSpecial = isFirstDay || isRamm;
                  const displayVal = isFirstDay ? rawLunar : rawLunar.split("/")[0];
                  return (
                    <span
                      className={cn(
                        "text-[9px] font-semibold select-none",
                        isSpecial
                          ? "text-red-500 font-bold underline decoration-red-500/40"
                          : "text-black/35 dark:text-white/35 font-normal"
                      )}
                    >
                      {displayVal}
                    </span>
                  );
                })()}
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid Scroll Area */}
      <div className="flex-1 overflow-y-auto relative grid grid-cols-[60px_1fr] pt-4" style={{ minHeight: "500px" }}>
        {/* Time labels column */}
        <div className="border-r border-black/10 dark:border-white/10 text-right pr-3 relative" style={{ height: `${25 * 48}px` }}>
          {hours.map((hr, idx) => (
            <div
              key={hr}
              className="absolute right-3 text-[10px] font-semibold text-black/35 dark:text-white/35"
              style={{ top: `${idx * 48}px` }}
            >
              {String(hr === 24 ? 0 : hr).padStart(2, "0")}:00
            </div>
          ))}
        </div>

        {/* Time grid container */}
        <div className="grid grid-cols-7 relative" style={{ height: `${25 * 48}px` }}>
          {/* Vertical day separators */}
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="absolute h-full w-px bg-black/5 dark:bg-white/5"
              style={{ left: `${(idx + 1) * (100 / 7)}%` }}
            />
          ))}

          {/* Horizontal hour lines */}
          {hours.map((_, idx) => (
            <div
              key={idx}
              className="absolute w-full h-px bg-black/5 dark:bg-white/5"
              style={{ top: `${idx * 48 + 6}px` }}
            />
          ))}

          {/* Red time indicator line running across */}
          {days.some(
            (d) =>
              d.getDate() === 14 &&
              d.getMonth() === 6 &&
              d.getFullYear() === 2026,
          ) && (
            <div
              className="absolute left-0 right-0 z-10 flex items-center gap-1.5"
              style={{ top: `${(10 + 25 / 60) * 48 + 6}px` }} // Positioned exactly at 10:25
            >
              <span className="text-[9px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0 -ml-12 z-20">
                10:25
              </span>
              <div className="flex-1 h-0.5 bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" />
            </div>
          )}

          {/* Draw events */}
          {days.map((day, dIdx) => {
            const dKey = dateKey(day);
            const dayEvs = filteredEvents.filter((ev) => ev.date === dKey);

            return (
              <div key={dIdx} className="relative h-full">
                {dayEvs.map((ev) => {
                  const cal = CALENDARS.find((c) => c.id === ev.calendarId);
                  const startHour = parseInt(ev.timeStart.split(":")[0]) + parseInt(ev.timeStart.split(":")[1]) / 60;
                  const endHour = parseInt(ev.timeEnd.split(":")[0]) + parseInt(ev.timeEnd.split(":")[1]) / 60;
                  const topPos = startHour * 48 + 6;
                  const eventHeight = Math.max(20, (endHour - startHour) * 48);

                  return (
                    <button
                      key={ev.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick(ev, e.currentTarget);
                      }}
                      className="absolute left-1 right-1 rounded p-1 text-[9px] font-semibold text-white shadow-sm border border-white/10 truncate hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer text-left block focus:outline-none"
                      style={{
                        top: `${topPos}px`,
                        backgroundColor: cal?.color || "#007afe",
                        height: `${eventHeight}px`,
                      }}
                    >
                      <p className="truncate">{ev.title}</p>
                      <p className="opacity-75">{ev.timeStart}</p>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
