import { CalEvent } from './types';
interface WeekViewProps {
    currentDate: Date;
    setSelectedDate: (d: Date) => void;
    setCurrentView: (v: "day" | "week" | "month" | "year") => void;
    filteredEvents: CalEvent[];
    onEventClick: (ev: CalEvent, el: HTMLElement) => void;
}
export declare function WeekView({ currentDate, setSelectedDate, setCurrentView, filteredEvents, onEventClick }: WeekViewProps): import("react/jsx-runtime").JSX.Element;
export {};
