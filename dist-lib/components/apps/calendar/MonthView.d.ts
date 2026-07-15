import { CalEvent } from './types';
interface MonthViewProps {
    currentDate: Date;
    selectedDate: Date;
    setSelectedDate: (d: Date) => void;
    setCurrentView: (v: "day" | "week" | "month" | "year") => void;
    filteredEvents: CalEvent[];
    onEventClick: (ev: CalEvent, el: HTMLElement) => void;
}
export declare function MonthView({ currentDate, selectedDate, setSelectedDate, setCurrentView, filteredEvents, onEventClick, }: MonthViewProps): import("react/jsx-runtime").JSX.Element;
export {};
