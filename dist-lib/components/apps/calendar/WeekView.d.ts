import { CalEvent } from './types';
interface WeekViewProps {
    currentDate: Date;
    setSelectedDate: (d: Date) => void;
    setCurrentView: (v: "day" | "week" | "month" | "year") => void;
    filteredEvents: CalEvent[];
    onEventClick: (ev: CalEvent, el: HTMLElement) => void;
    isRedHoliday?: (d: Date) => boolean;
}
export declare function WeekView({ currentDate, setSelectedDate, setCurrentView, filteredEvents, onEventClick, isRedHoliday }: WeekViewProps): import("react").JSX.Element;
export {};
