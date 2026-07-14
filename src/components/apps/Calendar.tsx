"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import type { AppContentProps } from "./AppRegistry";
import { useStore } from "@/store";

interface CalEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  timeStart: string; // HH:MM
  timeEnd: string; // HH:MM
  calendarId: string; // 'personal' | 'work' | 'reminders' | 'birthdays' | 'holidays' | 'siri'
}

import calendarData from "@/data/calendar-data.json";

const CALENDARS = calendarData.calendars;
const INITIAL_EVENTS: CalEvent[] = calendarData.events;

import lunarData from "@/data/lunar-data.json";

const LUNAR_MAP_2026: Record<string, string> = lunarData;

const dateKey = (d: Date) => {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// Mini-calendar render helper (used in Sidebar, DayView, YearView)
function MiniCalendar({
  targetDate,
  selectedDate,
  onDaySelect,
}: {
  targetDate: Date;
  selectedDate: Date;
  onDaySelect?: (d: Date) => void;
}) {
  const yr = targetDate.getFullYear();
  const mth = targetDate.getMonth();

  const firstDay = new Date(yr, mth, 1).getDay(); // 0 is Sunday
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(yr, mth + 1, 0).getDate();

  const cells: (Date | null)[] = [
    ...Array(adjustedFirstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(yr, mth, i + 1)),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

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
          if (!cell) return <div key={idx} className="h-5" />;
          const isToday =
            cell.getDate() === 14 &&
            cell.getMonth() === 6 &&
            cell.getFullYear() === 2026;
          const isSel =
            cell.getDate() === selectedDate.getDate() &&
            cell.getMonth() === selectedDate.getMonth() &&
            cell.getFullYear() === selectedDate.getFullYear();

          return (
            <button
              key={idx}
              onClick={() => onDaySelect?.(cell)}
              className={cn(
                "h-5 w-5 mx-auto rounded-full flex items-center justify-center font-semibold transition-all focus:outline-none",
                isToday && !isSel && "bg-red-500 text-white font-bold",
                isSel &&
                  "bg-black dark:bg-white text-white dark:text-black shadow-sm",
              )}
            >
              {cell.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Calendar({ appId }: AppContentProps) {
  const { language } = useTranslation();
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  void appId;

  // Set default starting date exactly to July 14, 2026 as in user request screenshots
  const [currentDate, setCurrentDate] = useState<Date>(
    () => new Date(2026, 6, 14),
  );
  const [selectedDate, setSelectedDate] = useState<Date>(
    () => new Date(2026, 6, 14),
  );
  const [currentView, setCurrentView] = useState<
    "day" | "week" | "month" | "year"
  >("month");

  // Sidebar checklist state
  const [activeCalendars, setActiveCalendars] = useState<string[]>(() =>
    CALENDARS.map((c) => c.id),
  );
  const [events, setEvents] = useState<CalEvent[]>(INITIAL_EVENTS);

  const toggleCalendar = (id: string) => {
    setActiveCalendars((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const filteredEvents = useMemo(() => {
    return events.filter((e) => activeCalendars.includes(e.calendarId));
  }, [events, activeCalendars]);

  // Handle navigate next/prev based on active view
  const navigate = (direction: "prev" | "next") => {
    const diff = direction === "next" ? 1 : -1;
    const nextDate = new Date(currentDate);

    if (currentView === "day") {
      nextDate.setDate(nextDate.getDate() + diff);
    } else if (currentView === "week") {
      nextDate.setDate(nextDate.getDate() + diff * 7);
    } else if (currentView === "month") {
      nextDate.setMonth(nextDate.getMonth() + diff);
    } else if (currentView === "year") {
      nextDate.setFullYear(nextDate.getFullYear() + diff);
    }
    setCurrentDate(nextDate);
  };

  const jumpToToday = () => {
    const today = new Date(2026, 6, 14); // Locked to screenshot today date
    setCurrentDate(today);
    setSelectedDate(today);
  };

  return (
    <div className="flex h-full bg-white dark:bg-[#1a1b1e] text-black dark:text-white font-sans overflow-hidden">
      {/* ── SIDEBAR ── */}
      <aside className="w-56 shrink-0 border-r border-black/10 dark:border-white/10 bg-[#f3f3f3]/95 dark:bg-[#1f2023]/95 p-3 flex flex-col justify-between select-none">
        <div>
          {/* Traffic Lights Spacer */}
          <div className="h-6 flex items-center justify-between mb-4">
            <div className="flex gap-1.5 pl-1">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            {/* Top Toolbar Action Icons */}
            <div className="flex items-center gap-2 pr-1">
              <button className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <button className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar checklists */}
          <div className="space-y-4">
            {["iCloud", "Other"].map((group) => (
              <div key={group}>
                <p className="px-2 text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider mb-1">
                  {group}
                </p>
                <div className="space-y-0.5">
                  {CALENDARS.filter((c) => c.group === group).map((cal) => {
                    const isChecked = activeCalendars.includes(cal.id);
                    const isHovered = cal.id === "reminders"; // Mock hover state from screenshot
                    return (
                      <button
                        key={cal.id}
                        onClick={() => toggleCalendar(cal.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-2 py-1 rounded-md text-xs transition-all focus:outline-none text-left",
                          isHovered
                            ? "bg-black/[0.04] dark:bg-white/[0.04]"
                            : "hover:bg-black/5 dark:hover:bg-white/5",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {/* Checkbox custom */}
                          <div
                            className={cn(
                              "w-3.5 h-3.5 rounded flex items-center justify-center text-white shrink-0 border transition-all",
                              isChecked
                                ? "border-transparent"
                                : "border-black/25 dark:border-white/25 bg-transparent",
                            )}
                            style={{
                              backgroundColor: isChecked
                                ? cal.color
                                : "transparent",
                            }}
                          >
                            {isChecked && (
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            )}
                          </div>
                          <span
                            className="truncate"
                            style={{
                              color: isHovered ? cal.color : "inherit",
                              fontWeight: isHovered ? 500 : 400,
                            }}
                          >
                            {cal.name}
                          </span>
                        </div>
                        {cal.hasFeed && (
                          <svg
                            className="w-3.5 h-3.5 opacity-40 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar mini calendar */}
        <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-[11px] font-semibold text-black/60 dark:text-white/60">
              {currentDate.toLocaleDateString(
                language === "vi" ? "vi-VN" : "en-US",
                { month: "long", year: "numeric" },
              )}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  const d = new Date(currentDate);
                  d.setMonth(d.getMonth() - 1);
                  setCurrentDate(d);
                }}
                className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <button
                onClick={() => {
                  const d = new Date(currentDate);
                  d.setMonth(d.getMonth() + 1);
                  setCurrentDate(d);
                }}
                className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <MiniCalendar
            targetDate={currentDate}
            selectedDate={selectedDate}
            onDaySelect={(d) => {
              setSelectedDate(d);
              setCurrentDate(d);
            }}
          />
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a1b1e]">
        {/* Main Header */}
        <header className="flex shrink-0 items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 select-none">
          {/* Add event button */}
          <button
            onClick={() => {
              const title = prompt("Event title:");
              if (title) {
                const newEv: CalEvent = {
                  id: crypto.randomUUID(),
                  title,
                  date: dateKey(selectedDate),
                  timeStart: "12:00",
                  timeEnd: "13:00",
                  calendarId: "personal",
                };
                setEvents((prev) => [...prev, newEv]);
              }
            }}
            className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none"
          >
            <Plus className="w-4 h-4 text-black/75 dark:text-white/75" />
          </button>

          {/* View switcher capsule */}
          <div className="bg-black/5 dark:bg-white/10 p-0.5 rounded-full flex items-center shrink-0">
            {(["day", "week", "month", "year"] as const).map((view) => (
              <button
                key={view}
                onClick={() => {
                  setCurrentView(view);
                  if (view === "day") {
                    // Sync currentDate with selectedDate to make sure Day view lands on correct date
                    setCurrentDate(new Date(selectedDate));
                  }
                }}
                className={cn(
                  "px-4 py-1 text-xs font-semibold rounded-full transition-all focus:outline-none capitalize",
                  currentView === view
                    ? "bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm"
                    : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white",
                )}
              >
                {view}
              </button>
            ))}
          </div>

          {/* Search Button */}
          <button className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none">
            <Search className="w-4 h-4 text-black/75 dark:text-white/75" />
          </button>
        </header>

        {/* View content panels */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
          {/* Subheader: Month navigation & title */}
          <div className="flex shrink-0 items-center justify-between px-6 py-4 select-none">
            <h1 className="text-2xl font-bold tracking-tight">
              {currentView === "year" ? (
                currentDate.getFullYear()
              ) : currentView === "day" ? (
                <div className="flex items-baseline gap-2">
                  <span>
                    {selectedDate.getDate()}{" "}
                    {selectedDate.toLocaleDateString(
                      language === "vi" ? "vi-VN" : "en-US",
                      { month: "long", year: "numeric" },
                    )}
                  </span>
                  <span className="text-sm font-normal text-black/40 dark:text-white/40">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </span>
                  {LUNAR_MAP_2026[dateKey(selectedDate)] && (
                    <span className="text-xs text-red-500 font-semibold border border-red-500/20 px-1.5 py-0.5 rounded bg-red-500/5">
                      {LUNAR_MAP_2026[dateKey(selectedDate)]}
                    </span>
                  )}
                </div>
              ) : (
                currentDate.toLocaleDateString(
                  language === "vi" ? "vi-VN" : "en-US",
                  { month: "long", year: "numeric" },
                )
              )}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/10 p-0.5 rounded-lg border border-black/5 dark:border-white/5">
                <button
                  onClick={() => navigate("prev")}
                  className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={jumpToToday}
                  className="px-3 py-0.5 text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/85 dark:text-white/85"
                >
                  Today
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Render Active View */}
          <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
            {currentView === "day" && (
              <DayView
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                filteredEvents={filteredEvents}
              />
            )}
            {currentView === "week" && (
              <WeekView
                currentDate={currentDate}
                setSelectedDate={setSelectedDate}
                setCurrentView={setCurrentView}
                filteredEvents={filteredEvents}
              />
            )}
            {currentView === "month" && (
              <MonthView
                currentDate={currentDate}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setCurrentView={setCurrentView}
                filteredEvents={filteredEvents}
              />
            )}
            {currentView === "year" && (
              <YearView
                currentDate={currentDate}
                selectedDate={selectedDate}
                setCurrentDate={setCurrentDate}
                setCurrentView={setCurrentView}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SUB-COMPONENT DAY VIEW ──
function DayView({
  selectedDate,
  setSelectedDate,
  filteredEvents,
}: {
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
  filteredEvents: CalEvent[];
}) {
  const activeDateKey = dateKey(selectedDate);
  const dayEvs = filteredEvents.filter((e) => e.date === activeDateKey);
  const hours = Array.from({ length: 13 }, (_, i) => i + 9); // 09:00 to 21:00

  return (
    <div className="grid grid-cols-[1fr_240px] gap-6 h-full min-h-[500px]">
      {/* Day hours view */}
      <div className="border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 relative overflow-y-auto p-4 select-none">
        {/* Timeline header */}
        <div className="text-xs font-semibold text-black/40 dark:text-white/40 pb-2 border-b border-black/5 dark:border-white/5 mb-4 uppercase tracking-wider">
          All-day
        </div>

        {/* Simulated hours grid */}
        <div className="relative space-y-6 pt-4">
          {/* Red Current Time indicator line (Exactly as requested for Tuesday July 14 10:24) */}
          {selectedDate.getDate() === 14 &&
            selectedDate.getMonth() === 6 &&
            selectedDate.getFullYear() === 2026 && (
              <div
                className="absolute left-0 right-0 z-10 flex items-center gap-1.5"
                style={{ top: "68px" }} // Positioned exactly at 10:24
              >
                <span className="text-[10px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0">
                  10:24
                </span>
                <div className="flex-1 h-0.5 bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" />
              </div>
            )}

          {hours.map((hr) => (
            <div key={hr} className="flex gap-4 items-center">
              <span className="text-[11px] font-semibold text-black/35 dark:text-white/35 w-10 text-right">
                {String(hr).padStart(2, "0")}:00
              </span>
              <div className="flex-1 h-px bg-black/5 dark:bg-white/5" />
            </div>
          ))}

          {/* Render Day Events overlay */}
          {dayEvs.map((ev) => {
            const cal = CALENDARS.find((c) => c.id === ev.calendarId);
            const startHour = parseInt(ev.timeStart.split(":")[0]);
            const startMin = parseInt(ev.timeStart.split(":")[1]);

            const topPos = (startHour - 9) * 41 + (startMin / 60) * 41 + 18;

            return (
              <div
                key={ev.id}
                className="absolute left-16 right-4 rounded-lg p-2 text-xs font-semibold text-white shadow-sm border border-white/10 shrink-0"
                style={{
                  top: `${topPos}px`,
                  backgroundColor: cal?.color || "#007afe",
                  height: "48px",
                }}
              >
                <p className="font-semibold">{ev.title}</p>
                <p className="text-[10px] opacity-75">
                  {ev.timeStart} - {ev.timeEnd}
                </p>
              </div>
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
          <p className="text-sm font-semibold text-black/35 dark:text-white/35">
            {dayEvs.length === 0
              ? "No Event Selected"
              : `${dayEvs.length} Events Scheduled`}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── SUB-COMPONENT WEEK VIEW ──
function WeekView({
  currentDate,
  setSelectedDate,
  setCurrentView,
  filteredEvents,
}: {
  currentDate: Date;
  setSelectedDate: (d: Date) => void;
  setCurrentView: (v: "day" | "week" | "month" | "year") => void;
  filteredEvents: CalEvent[];
}) {
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

  const hours = Array.from({ length: 13 }, (_, i) => i + 9); // 09:00 to 21:00

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
                    "text-sm font-semibold h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10",
                    isToday && "bg-red-500 text-white font-bold",
                  )}
                >
                  {d.getDate()}
                </button>
                {LUNAR_MAP_2026[dateKey(d)] && (
                  <span className="text-[9px] text-red-500 font-semibold underline decoration-red-500/40">
                    {LUNAR_MAP_2026[dateKey(d)].split(" ")[0]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid Scroll Area */}
      <div className="flex-1 overflow-y-auto relative grid grid-cols-[60px_1fr] pt-4">
        {/* Time labels column */}
        <div className="border-r border-black/10 dark:border-white/10 text-right pr-3 space-y-9 select-none">
          {hours.map((hr) => (
            <div
              key={hr}
              className="text-[10px] font-semibold text-black/35 dark:text-white/35"
            >
              {String(hr).padStart(2, "0")}:00
            </div>
          ))}
        </div>

        {/* Time grid container */}
        <div className="grid grid-cols-7 relative">
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
              style={{ top: `${idx * 48}px` }}
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
              style={{ top: "78px" }} // Positioned exactly at 10:25
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
                  const startHour = parseInt(ev.timeStart.split(":")[0]);
                  const startMin = parseInt(ev.timeStart.split(":")[1]);
                  const topPos = (startHour - 9) * 48 + (startMin / 60) * 48;

                  return (
                    <div
                      key={ev.id}
                      className="absolute left-1 right-1 rounded p-1 text-[9px] font-semibold text-white shadow-sm border border-white/10 truncate select-none hover:scale-105 active:scale-95 transition-all shrink-0"
                      style={{
                        top: `${topPos}px`,
                        backgroundColor: cal?.color || "#007afe",
                        height: "36px",
                      }}
                    >
                      <p className="truncate">{ev.title}</p>
                      <p className="opacity-75">{ev.timeStart}</p>
                    </div>
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

// ── SUB-COMPONENT MONTH VIEW ──
function MonthView({
  currentDate,
  selectedDate,
  setSelectedDate,
  setCurrentView,
  filteredEvents,
}: {
  currentDate: Date;
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
  setCurrentView: (v: "day" | "week" | "month" | "year") => void;
  filteredEvents: CalEvent[];
}) {
  const yr = currentDate.getFullYear();
  const mth = currentDate.getMonth();

  const firstDay = new Date(yr, mth, 1).getDay(); // 0 is Sunday
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(yr, mth + 1, 0).getDate();

  const cells: (Date | null)[] = [
    ...Array(adjustedFirstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(yr, mth, i + 1)),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="border border-black/10 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-[#1a1b1e] flex flex-col h-full min-h-[500px]">
      {/* Calendar Day names */}
      <div className="grid grid-cols-7 text-center border-b border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#1c1d20]/50 py-2 select-none">
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
      <div className="flex-1 grid grid-cols-7 grid-rows-6 divide-x divide-y divide-black/10 dark:divide-white/10 select-none">
        {cells.map((cell, idx) => {
          if (!cell) {
            return (
              <div
                key={idx}
                className="bg-black/[0.01] dark:bg-white/[0.01] p-1.5"
              />
            );
          }

          const dKey = dateKey(cell);
          const isToday =
            cell.getDate() === 14 &&
            cell.getMonth() === 6 &&
            cell.getFullYear() === 2026;
          const isSel =
            cell.getDate() === selectedDate.getDate() &&
            cell.getMonth() === selectedDate.getMonth() &&
            cell.getFullYear() === selectedDate.getFullYear();
          const dayEvs = filteredEvents.filter((ev) => ev.date === dKey);

          return (
            <button
              key={idx}
              onClick={() => {
                setSelectedDate(cell);
              }}
              onDoubleClick={() => {
                setSelectedDate(cell);
                setCurrentView("day");
              }}
              className={cn(
                "p-2 text-left flex flex-col justify-between hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus:outline-none h-full min-h-[72px]",
                isSel && "bg-black/[0.01] dark:bg-white/[0.01]",
              )}
            >
              <div className="flex items-center justify-between w-full">
                {/* Lunar date indicator for Vietnamese users */}
                {LUNAR_MAP_2026[dKey] && (
                  <span className="text-[10px] text-red-500 font-semibold underline decoration-red-500/30">
                    {LUNAR_MAP_2026[dKey].split(" ")[0]}
                  </span>
                )}
                <span
                  className={cn(
                    "text-xs font-semibold h-6 w-6 rounded-full flex items-center justify-center",
                    isToday && "bg-red-500 text-white font-bold shadow-sm",
                    isSel &&
                      !isToday &&
                      "bg-black dark:bg-white text-white dark:text-black font-bold",
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
                    <div
                      key={ev.id}
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-white truncate w-full"
                      style={{ backgroundColor: cal?.color || "#007afe" }}
                    >
                      {ev.title}
                    </div>
                  );
                })}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── SUB-COMPONENT YEAR VIEW ──
function YearView({
  currentDate,
  selectedDate,
  setCurrentDate,
  setCurrentView,
}: {
  currentDate: Date;
  selectedDate: Date;
  setCurrentDate: (d: Date) => void;
  setCurrentView: (v: "day" | "week" | "month" | "year") => void;
}) {
  const year = currentDate.getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

  return (
    <div className="grid grid-cols-3 gap-6 h-full min-h-[500px]">
      {months.map((mDate, mIdx) => {
        const monthName = mDate.toLocaleDateString("en-US", { month: "long" });
        return (
          <div
            key={mIdx}
            className="border border-black/10 dark:border-white/10 rounded-xl p-3 bg-neutral-50 dark:bg-[#1c1d20]/50 select-none hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => {
              setCurrentDate(mDate);
              setCurrentView("month");
            }}
          >
            <h3 className="text-sm font-bold text-red-500 mb-2 capitalize px-1">
              {monthName}
            </h3>
            <MiniCalendar targetDate={mDate} selectedDate={selectedDate} />
          </div>
        );
      })}
    </div>
  );
}
