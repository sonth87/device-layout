interface MiniCalendarProps {
    targetDate: Date;
    selectedDate: Date;
    onDaySelect?: (d: Date) => void;
}
export declare function MiniCalendar({ targetDate, selectedDate, onDaySelect }: MiniCalendarProps): import("react/jsx-runtime").JSX.Element;
export {};
