"use client";

import { MiniCalendar } from "./MiniCalendar";

interface YearViewProps {
  currentDate: Date;
  selectedDate: Date;
  setCurrentDate: (d: Date) => void;
  setCurrentView: (v: "day" | "week" | "month" | "year") => void;
}

export function YearView({
  currentDate,
  selectedDate,
  setCurrentDate,
  setCurrentView,
}: YearViewProps) {
  const year = currentDate.getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-4 h-full min-h-0 flex-1 select-none pb-0">
      {months.map((mDate, mIdx) => {
        const monthName = mDate.toLocaleDateString("en-US", { month: "long" });
        return (
          <div
            key={mIdx}
            className="flex flex-col cursor-pointer"
            onClick={() => {
              setCurrentDate(mDate);
              setCurrentView("month");
            }}
          >
            <h3 className="text-xs font-semibold text-red-500 mb-1.5 capitalize px-1">
              {monthName}
            </h3>
            <div className="flex-1 min-h-0">
              <MiniCalendar targetDate={mDate} selectedDate={selectedDate} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
