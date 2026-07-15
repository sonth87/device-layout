import { CalEvent } from './types';
interface DayViewProps {
    selectedDate: Date;
    setSelectedDate: (d: Date) => void;
    filteredEvents: CalEvent[];
    onEventClick: (ev: CalEvent, el: HTMLElement) => void;
}
export declare function DayView({ selectedDate, setSelectedDate, filteredEvents, onEventClick }: DayViewProps): import("react/jsx-runtime").JSX.Element;
export {};
