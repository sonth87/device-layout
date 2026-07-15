export interface CalEvent {
    id: string;
    title: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    calendarId: string;
}
export declare const dateKey: (d: Date) => string;
declare class LunarDate {
    day: number;
    month: number;
    year: number;
    leap: number;
    jd: number;
    constructor(dd: number, mm: number, yy: number, leap: number, jd: number);
}
export declare function getLunarDate(dd: number, mm: number, yyyy: number): LunarDate;
export declare function getLunarYearName(lunarYear: number): string;
export declare const getLunarDateString: (d: Date) => string;
export declare const isFirstDayOfLunarMonth: (d: Date) => boolean;
export declare const getLunarDateFullString: (d: Date) => string;
export interface Holiday {
    month: number;
    day: number;
    name: string;
    isRed?: boolean;
}
export declare const getHolidayForDate: (d: Date) => string | null;
export declare const isRedHoliday: (d: Date) => boolean;
export declare function getHolidayEventsForYear(year: number): CalEvent[];
export {};
