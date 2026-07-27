interface MiniCalendarProps {
    targetDate: Date;
    selectedDate: Date;
    onDaySelect?: (d: Date) => void;
    /** Dynamic isRedHoliday from useHolidays hook. Falls back to static JSON-only check. */
    isRedHoliday?: (d: Date) => boolean;
}
export declare function MiniCalendar({ targetDate, selectedDate, onDaySelect, isRedHoliday }: MiniCalendarProps): import("react").JSX.Element;
export {};
