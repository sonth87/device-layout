import { CalEvent } from './types';
interface MonthViewProps {
    currentDate: Date;
    selectedDate: Date;
    setSelectedDate: (d: Date) => void;
    setCurrentView: (v: "day" | "week" | "month" | "year") => void;
    filteredEvents: CalEvent[];
    onEventClick: (ev: CalEvent, el: HTMLElement) => void;
    isRedHoliday?: (d: Date) => boolean;
}
export declare function MonthView({ currentDate, selectedDate, setSelectedDate, setCurrentView, filteredEvents, onEventClick, isRedHoliday, }: MonthViewProps): import("react").JSX.Element;
export {};
