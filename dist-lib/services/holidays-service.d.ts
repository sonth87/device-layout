/**
 * holidays-service.ts
 *
 * Provides merged holiday data by combining:
 *   1. A static JSON base (country-specific, bundled with the app)
 *   2. Apple's iCloud Holiday ICS feed (country-specific, fetched at runtime)
 *
 * Strategy:
 *   - JSON is the base layer (always available offline, covers extra cultural dates)
 *   - Apple ICS data is overlaid on top (wins on name conflicts, adds makeup holidays)
 *   - `isRed` flag is preserved from JSON; Apple-only additions default to isRed: true
 *     since they represent official public holidays / makeup days
 *   - Country change → re-fetch ICS + reload JSON base
 *   - Language change → no effect on holidays
 */
export interface HolidayEntry {
    /** YYYY-MM-DD */
    date: string;
    name: string;
    isRed: boolean;
    /** 'json' = from static file, 'ics' = from Apple feed, 'merged' = both */
    source: "json" | "ics" | "merged";
}
export declare const COUNTRY_ICS_MAP: Record<string, string>;
export declare const COUNTRY_LABELS: Record<string, {
    flag: string;
    name: string;
}>;
/**
 * Returns merged holiday entries for the given country and year.
 * Falls back gracefully: if ICS fetch fails or year is outside Apple's range,
 * returns JSON-only entries.
 *
 * @param country  ISO 3166-1 alpha-2 code, e.g. 'vn'
 * @param year     Gregorian year, e.g. 2026
 */
export declare function getHolidaysForYear(country: string, year: number): Promise<HolidayEntry[]>;
/**
 * Clears the merged cache for a country (call when country changes in Settings).
 */
export declare function invalidateHolidayCache(country?: string): void;
