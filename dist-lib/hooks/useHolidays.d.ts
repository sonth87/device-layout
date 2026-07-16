import { HolidayEntry } from '../services/holidays-service';
export interface UseHolidaysResult {
    /** True while the ICS feed is being fetched */
    loading: boolean;
    /** All merged holiday entries for the currently loaded years */
    holidays: HolidayEntry[];
    /** Returns the holiday name for a given Date, or null */
    getHolidayName: (d: Date) => string | null;
    /** Returns true if the date is a red-letter holiday */
    isRedHoliday: (d: Date) => boolean;
    /** Returns all holiday entries for a given Date (may be multiple) */
    getHolidaysForDate: (d: Date) => HolidayEntry[];
}
/**
 * @param years  Array of years to load. Defaults to [currentYear, currentYear+1].
 *               Pass additional years when the user navigates far into the future.
 */
export declare function useHolidays(years?: number[]): UseHolidaysResult;
