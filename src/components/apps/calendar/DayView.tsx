"use client";

import { MiniCalendar } from "./MiniCalendar";
import { dateKey, type CalEvent } from "./types";
import calendarData from "@/data/calendar-data.json";

const CALENDARS = calendarData.calendars;

interface DayViewProps {
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
  filteredEvents: CalEvent[];
  onEventClick: (ev: CalEvent, el: HTMLElement) => void;
}

export function DayView({ selectedDate, setSelectedDate, filteredEvents, onEventClick }: DayViewProps) {
  const activeDateKey = dateKey(selectedDate);
  const dayEvs = filteredEvents.filter((e) => e.date === activeDateKey);
  const hours = Array.from({ length: 25 }, (_, i) => i); // 00:00 to 24:00 (next day)

  return (
    <div className="grid grid-cols-[1fr_240px] gap-6 h-full min-h-[500px]">
      {/* Day hours view */}
      <div className="border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 relative overflow-y-auto p-4 select-none">
        {/* Timeline header */}
        <div className="text-xs font-semibold text-black/40 dark:text-white/40 pb-2 border-b border-black/5 dark:border-white/5 mb-4 uppercase tracking-wider">
          All-day
        </div>

        {/* Simulated hours grid */}
        <div className="relative pt-4" style={{ height: `${25 * 40}px` }}>
          {/* Red Current Time indicator line (Exactly as requested for Tuesday July 14 10:24) */}
          {selectedDate.getDate() === 14 &&
            selectedDate.getMonth() === 6 &&
            selectedDate.getFullYear() === 2026 && (
              <div
                className="absolute left-0 right-0 z-10 flex items-center gap-1.5"
                style={{ top: `${(10 + 24 / 60) * 40 + 10}px` }} // Positioned exactly at 10:24
              >
                <span className="text-[10px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0">
                  10:24
                </span>
                <div className="flex-1 h-0.5 bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" />
              </div>
            )}

          {hours.map((hr, idx) => (
            <div
              key={hr}
              className="absolute left-0 right-0 flex gap-4 items-center"
              style={{ top: `${idx * 40}px`, height: "20px" }}
            >
              <span className="text-[11px] font-semibold text-black/35 dark:text-white/35 w-10 text-right">
                {String(hr === 24 ? 0 : hr).padStart(2, "0")}:00
              </span>
              <div className="flex-1 h-px bg-black/5 dark:bg-white/5" />
            </div>
          ))}

          {/* Render Day Events overlay */}
          {dayEvs.map((ev) => {
            const cal = CALENDARS.find((c) => c.id === ev.calendarId);
            const startHour = parseInt(ev.timeStart.split(":")[0]) + parseInt(ev.timeStart.split(":")[1]) / 60;
            const endHour = parseInt(ev.timeEnd.split(":")[0]) + parseInt(ev.timeEnd.split(":")[1]) / 60;

            const topPos = startHour * 40 + 10;
            const eventHeight = Math.max(24, (endHour - startHour) * 40);

            return (
              <button
                key={ev.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onEventClick(ev, e.currentTarget);
                }}
                className="absolute left-16 right-4 rounded-lg p-2 text-xs font-semibold text-white shadow-sm border border-white/10 shrink-0 text-left hover:scale-[1.01] active:scale-95 transition-all cursor-pointer focus:outline-none"
                style={{
                  top: `${topPos}px`,
                  backgroundColor: cal?.color || "#007afe",
                  height: `${eventHeight}px`,
                }}
              >
                <p className="font-semibold truncate">{ev.title}</p>
                <p className="text-[10px] opacity-75">
                  {ev.timeStart} - {ev.timeEnd}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right sidebar: mini calendar + event status */}
      <div className="flex flex-col gap-6">
        <div className="border border-black/10 dark:border-white/10 rounded-xl p-4 bg-neutral-50 dark:bg-[#1c1d20]/50 shrink-0">
          <MiniCalendar
            targetDate={selectedDate}
            selectedDate={selectedDate}
            onDaySelect={setSelectedDate}
          />
        </div>
        <div className="flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold text-black/35 dark:text-white/35 font-sans">
            {dayEvs.length === 0
              ? "No Event Selected"
              : `${dayEvs.length} Events Scheduled`}
          </p>
        </div>
      </div>
    </div>
  );
}
