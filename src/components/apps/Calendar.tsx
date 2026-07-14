"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Check, CalendarDays, ListTodo } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import type { AppContentProps } from "./AppRegistry";

import { MiniCalendar } from "./calendar/MiniCalendar";
import { DayView } from "./calendar/DayView";
import { WeekView } from "./calendar/WeekView";
import { MonthView } from "./calendar/MonthView";
import { YearView } from "./calendar/YearView";
import { dateKey, getLunarDateFullString, getHolidayEventsForYear, type CalEvent } from "./calendar/types";

import calendarData from "@/data/calendar-data.json";

const CALENDARS = calendarData.calendars;
const INITIAL_EVENTS: CalEvent[] = calendarData.events;

export function Calendar({ appId }: AppContentProps) {
  const { language } = useTranslation();
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

  // Responsive layout tracking
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [containerHeight, setContainerHeight] = useState(600);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const lastWidth = useRef(800);
  const scrollResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Add event popover state
  const [showAddPopover, setShowAddPopover] = useState(false);
  const [quickTitle, setQuickTitle] = useState("");

  // Event details popover state
  const [activePopoverEvent, setActivePopoverEvent] = useState<CalEvent | null>(null);
  const [popoverCoords, setPopoverCoords] = useState<{
    top: number;
    left: number;
    arrowSide: "left" | "right";
  } | null>(null);

  const handleEventClick = (ev: CalEvent, targetEl: HTMLElement) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    const popoverWidth = 280;
    const popoverHeight = 160;

    let left = targetRect.right - containerRect.left + 12;
    let arrowSide: "left" | "right" = "left";

    if (left + popoverWidth > containerRect.width - 12) {
      left = targetRect.left - containerRect.left - popoverWidth - 12;
      arrowSide = "right";
    }

    let top = (targetRect.top + targetRect.bottom) / 2 - containerRect.top - popoverHeight / 2;
    if (top < 12) top = 12;
    if (top + popoverHeight > containerRect.height - 12) {
      top = containerRect.height - popoverHeight - 12;
    }

    setPopoverCoords({ top, left, arrowSide });
    setActivePopoverEvent(ev);
  };

  const handleUnsubscribeOrDelete = () => {
    if (!activePopoverEvent) return;
    if (activePopoverEvent.calendarId === "holidays") {
      toggleCalendar("holidays");
    } else {
      setEvents((prev) => prev.filter((e) => e.id !== activePopoverEvent.id));
    }
    setActivePopoverEvent(null);
  };

  const popoverFormattedDate = useMemo(() => {
    if (!activePopoverEvent) return "";
    const d = new Date(activePopoverEvent.date);
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }, [activePopoverEvent]);

  const popoverCalendar = useMemo(() => {
    if (!activePopoverEvent) return null;
    return CALENDARS.find((c) => c.id === activePopoverEvent.calendarId);
  }, [activePopoverEvent]);

  // ResizeObserver to detect small window size and auto-hide sidebar
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
        setContainerHeight(entry.contentRect.height);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // If container shrinks below 680px, auto-close sidebar, otherwise auto-open
    if (containerWidth < 680 && lastWidth.current >= 680) {
      setIsSidebarOpen(false);
    } else if (containerWidth >= 680 && lastWidth.current < 680) {
      setIsSidebarOpen(true);
    }
    lastWidth.current = containerWidth;
  }, [containerWidth]);

  const toggleCalendar = (id: string) => {
    setActiveCalendars((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // Dynamically compute holiday events for current, previous, and next year
  const holidayEvents = useMemo(() => {
    const y = currentDate.getFullYear();
    return [
      ...getHolidayEventsForYear(y - 1),
      ...getHolidayEventsForYear(y),
      ...getHolidayEventsForYear(y + 1),
    ];
  }, [currentDate]);

  const allEvents = useMemo(() => {
    return [...events, ...holidayEvents];
  }, [events, holidayEvents]);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((e) => activeCalendars.includes(e.calendarId));
  }, [allEvents, activeCalendars]);

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
    <div
      ref={containerRef}
      className="flex h-full bg-white dark:bg-[#1a1b1e] text-black dark:text-white font-sans overflow-hidden relative"
    >
      {/* ── SIDEBAR ── */}
      {isSidebarOpen && (
        <aside className="w-56 shrink-0 border-r border-black/10 dark:border-white/10 bg-[#f3f3f3]/95 dark:bg-[#1f2023]/95 p-3 flex flex-col justify-between select-none">
          <div>
            {/* Traffic Lights Spacer */}
            <div className="h-6 flex items-center justify-between mb-4">
              <div className="flex gap-1.5 pl-1">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              </div>
              {/* Top Toolbar Action Icons */}
              <div className="flex items-center gap-2 pr-1">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer"
                >
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
                <button className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer">
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
                            "w-full flex items-center justify-between px-2 py-1 rounded-md text-xs transition-all focus:outline-none text-left cursor-pointer",
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
                  className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  onClick={() => {
                    const d = new Date(currentDate);
                    d.setMonth(d.getMonth() + 1);
                    setCurrentDate(d);
                  }}
                  className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
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
      )}

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a1b1e]">
        {/* Main Header */}
        <header className="flex shrink-0 items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 select-none">
          <div className="flex items-center gap-3">
            {/* Show traffic lights and toolbar action icons if sidebar is hidden */}
            {!isSidebarOpen && (
              <>
                <div className="flex gap-1.5 pl-1 mr-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1.5 mr-1">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer"
                  >
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
                  <button className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer">
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
              </>
            )}

            {/* Add event button with custom popover */}
            <div className="relative">
              <button
                onClick={() => setShowAddPopover(!showAddPopover)}
                className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              >
                <Plus className="w-4 h-4 text-black/75 dark:text-white/75" />
              </button>

              {showAddPopover && (
                <div className="absolute top-9 left-0 z-50 w-72 bg-white/95 dark:bg-[#2c2d30]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-black dark:text-white">
                  {/* Notch */}
                  <div className="absolute -top-1.5 left-2.5 w-3 h-3 bg-white dark:bg-[#2c2d30] rotate-45 border-t border-l border-black/10 dark:border-white/10" />

                  {/* Buttons: New Event, New Reminder */}
                  <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                    <button
                      onClick={() => {
                        const title = quickTitle.trim() || "New Event";
                        const newEv: CalEvent = {
                          id: crypto.randomUUID(),
                          title,
                          date: dateKey(selectedDate),
                          timeStart: "12:00",
                          timeEnd: "13:00",
                          calendarId: "personal",
                        };
                        setEvents((prev) => [...prev, newEv]);
                        setQuickTitle("");
                        setShowAddPopover(false);
                      }}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
                        <CalendarDays className="w-5 h-5 text-black/70 dark:text-white/70" />
                      </div>
                      <span className="text-xs font-semibold">New Event</span>
                    </button>

                    <button
                      onClick={() => {
                        const title = quickTitle.trim() || "New Reminder";
                        const newEv: CalEvent = {
                          id: crypto.randomUUID(),
                          title,
                          date: dateKey(selectedDate),
                          timeStart: "12:00",
                          timeEnd: "13:00",
                          calendarId: "reminders",
                        };
                        setEvents((prev) => [...prev, newEv]);
                        setQuickTitle("");
                        setShowAddPopover(false);
                      }}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
                        <ListTodo className="w-5 h-5 text-black/70 dark:text-white/70" />
                      </div>
                      <span className="text-xs font-semibold">New Reminder</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-black/10 dark:border-white/10 my-3" />

                  {/* Create Quick Event Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider pl-1">
                      Create Quick Event
                    </label>
                    <input
                      type="text"
                      value={quickTitle}
                      onChange={(e) => setQuickTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && quickTitle.trim()) {
                          const newEv: CalEvent = {
                            id: crypto.randomUUID(),
                            title: quickTitle.trim(),
                            date: dateKey(selectedDate),
                            timeStart: "12:00",
                            timeEnd: "13:00",
                            calendarId: "personal",
                          };
                          setEvents((prev) => [...prev, newEv]);
                          setQuickTitle("");
                          setShowAddPopover(false);
                        }
                      }}
                      placeholder="Movie at 7pm on Friday"
                      className="w-full px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs focus:outline-none caret-[#ff3b30] text-black dark:text-white"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

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
                  "px-4 py-1 text-xs font-semibold rounded-full transition-all focus:outline-none capitalize cursor-pointer",
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
          <button className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer">
            <Search className="w-4 h-4 text-black/75 dark:text-white/75" />
          </button>
        </header>

        {/* View content panels */}
        <div
          onWheel={(e) => {
            if (currentView !== "year" && currentView !== "month") return;

            setScrollOffset((prev) => {
              const next = prev + e.deltaY;
              const threshold = containerHeight / 2 || 250;
              if (next > threshold) {
                setTimeout(() => navigate("next"), 0);
                return 0;
              } else if (next < -threshold) {
                setTimeout(() => navigate("prev"), 0);
                return 0;
              }
              return next;
            });

            if (scrollResetTimeout.current) clearTimeout(scrollResetTimeout.current);
            scrollResetTimeout.current = setTimeout(() => {
              setScrollOffset(0);
            }, 250);
          }}
          className="flex-1 flex flex-col min-h-0"
        >
          {/* Subheader: Month navigation & title */}
          <div className="flex shrink-0 items-center justify-between px-6 py-4 select-none">
            <h1 className="text-2xl font-bold tracking-tight">
              {currentView === "year" ? (
                <div className="flex items-center gap-6">
                  <span>{currentDate.getFullYear()}</span>
                  {currentDate.getFullYear() === 2026 && (
                    <div className="hidden sm:flex items-center gap-4 text-xs font-normal">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-red-500 rounded animate-pulse" />
                        <span className="text-black/50 dark:text-white/50 font-sans">Bính Ngọ 2026</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-red-500 rounded animate-pulse" />
                        <span className="text-black/50 dark:text-white/50 font-sans">Ngày đầu tiên của tháng âm lịch</span>
                      </span>
                    </div>
                  )}
                </div>
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
                  {getLunarDateFullString(selectedDate) && (
                    <span className="text-xs text-red-500 font-semibold border border-red-500/20 px-1.5 py-0.5 rounded bg-red-500/5">
                      {getLunarDateFullString(selectedDate)}
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
                  className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={jumpToToday}
                  className="px-3 py-0.5 text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/85 dark:text-white/85 cursor-pointer"
                >
                  Today
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Render Active View */}
          <div
            className={cn(
              "flex-1 min-h-0",
              currentView === "year" ? "px-6 pb-2" : "px-0",
              (currentView === "year" || currentView === "month")
                ? "overflow-hidden h-full flex flex-col pb-0"
                : "overflow-y-auto pb-4"
            )}
          >
            <div
              style={{
                transform: `translateY(${-scrollOffset * 0.8}px)`,
                opacity: 1 - Math.abs(scrollOffset) / (containerHeight || 500),
                transition: scrollOffset === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease" : "none",
              }}
              className="h-full flex flex-col"
            >
              {currentView === "day" && (
                <DayView
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  filteredEvents={filteredEvents}
                  onEventClick={handleEventClick}
                />
              )}
              {currentView === "week" && (
                <WeekView
                  currentDate={currentDate}
                  setSelectedDate={setSelectedDate}
                  setCurrentView={setCurrentView}
                  filteredEvents={filteredEvents}
                  onEventClick={handleEventClick}
                />
              )}
              {currentView === "month" && (
                <MonthView
                  currentDate={currentDate}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  setCurrentView={setCurrentView}
                  filteredEvents={filteredEvents}
                  onEventClick={handleEventClick}
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

      {/* Event Details Popover Overlay */}
      {activePopoverEvent && popoverCoords && (
        <>
          <div
            className="absolute inset-0 z-40 bg-transparent"
            onClick={() => setActivePopoverEvent(null)}
          />
          <div
            className="absolute z-50 w-[280px] bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-md text-black dark:text-white border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transition-all duration-150 ease-out"
            style={{
              top: `${popoverCoords.top}px`,
              left: `${popoverCoords.left}px`,
            }}
          >
            {/* Popover Arrow */}
            <div
              className={cn(
                "absolute w-0 h-0 border-8 border-transparent",
                popoverCoords.arrowSide === "left" && "top-1/2 -translate-y-1/2 -left-[16px] border-r-8 border-r-white/95 dark:border-r-[#1c1c1e]/95",
                popoverCoords.arrowSide === "right" && "top-1/2 -translate-y-1/2 -right-[16px] border-l-8 border-l-white/95 dark:border-l-[#1c1c1e]/95",
              )}
            />

            {/* Header: Title + Category dot */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold text-base text-black/90 dark:text-white/95 truncate flex-1">
                {activePopoverEvent.title}
              </h3>
              {popoverCalendar && (
                <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-semibold text-black/70 dark:text-white/90 shrink-0 border border-black/5 dark:border-white/5">
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: popoverCalendar.color }} />
                  <span className="text-[9px] text-black/40 dark:text-white/50 select-none">↕</span>
                </div>
              )}
            </div>

            {/* Body: Date & repeat info */}
            <div className="bg-black/[0.03] dark:bg-white/5 rounded-xl p-3 space-y-1 text-xs text-black/80 dark:text-white/90 border border-black/5 dark:border-white/5">
              <p className="font-semibold text-black/90 dark:text-white/95">{popoverFormattedDate}</p>
              <div className="flex items-center justify-between text-[11px] text-black/50 dark:text-white/60">
                <span>{activePopoverEvent.calendarId === "holidays" ? "Repeats yearly" : "Does not repeat"}</span>
                {activePopoverEvent.calendarId === "holidays" && (
                  <span className="text-[10px]">🔄</span>
                )}
              </div>
            </div>

            {/* Footer: Action button */}
            <div className="flex justify-end pt-1">
              <button
                onClick={handleUnsubscribeOrDelete}
                className="bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/10 dark:hover:bg-white/20 active:scale-95 px-4 py-1.5 rounded-lg text-xs font-semibold text-black/80 dark:text-white/90 transition-all cursor-pointer border border-black/10 dark:border-white/10"
              >
                {activePopoverEvent.calendarId === "holidays" ? "Unsubscribe" : "Delete"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
