interface YearViewProps {
    currentDate: Date;
    selectedDate: Date;
    setCurrentDate: (d: Date) => void;
    setCurrentView: (v: "day" | "week" | "month" | "year") => void;
}
export declare function YearView({ currentDate, selectedDate, setCurrentDate, setCurrentView, }: YearViewProps): import("react/jsx-runtime").JSX.Element;
export {};
