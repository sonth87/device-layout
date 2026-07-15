'use client';

/**
 * useHolidays hook
 *
 * Reactive hook that:
 *  - Reads `country` from the global store (NOT language — holiday data is
 *    country-specific, language-independent)
 *  - Fetches & caches merged holiday data (JSON base + Apple ICS)
 *  - Re-fetches automatically when country changes
 *  - Exposes helpers: getHolidayName(), isRedHoliday(), getHolidaysForDate()
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useStore } from '@/store';
import {
  getHolidaysForYear,
  invalidateHolidayCache,
  type HolidayEntry,
} from '@/services/holidays-service';

// ─── Types ───────────────────────────────────────────────────────────────────

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

// ─── Helper ──────────────────────────────────────────────────────────────────

function dateToKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ─── Hook ────────────────────────────────────────────────────────────────────

/**
 * @param years  Array of years to load. Defaults to [currentYear, currentYear+1].
 *               Pass additional years when the user navigates far into the future.
 */
export function useHolidays(years?: number[]): UseHolidaysResult {
  const country = useStore((s) => s.country) ?? 'vn';
  const prevCountryRef = useRef<string>(country);

  const defaultYears = [
    new Date().getFullYear(),
    new Date().getFullYear() + 1,
  ];
  const targetYears = years ?? defaultYears;

  const [loading, setLoading] = useState(true);
  const [holidays, setHolidays] = useState<HolidayEntry[]>([]);

  // Build a lookup map for O(1) access: date → entries[]
  const holidayMapRef = useRef<Map<string, HolidayEntry[]>>(new Map());

  const load = useCallback(
    async (c: string, ys: number[]) => {
      setLoading(true);
      try {
        const results = await Promise.all(ys.map((y) => getHolidaysForYear(c, y)));
        const flat = results.flat();
        setHolidays(flat);

        const map = new Map<string, HolidayEntry[]>();
        for (const entry of flat) {
          const list = map.get(entry.date) ?? [];
          list.push(entry);
          map.set(entry.date, list);
        }
        holidayMapRef.current = map;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Initial load & reload when years change
  useEffect(() => {
    load(country, targetYears);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, targetYears.join(',')]);

  // When country changes: invalidate old cache then reload
  useEffect(() => {
    if (prevCountryRef.current !== country) {
      invalidateHolidayCache(prevCountryRef.current);
      prevCountryRef.current = country;
    }
  }, [country]);

  // ── Accessors ──────────────────────────────────────────────────────────────

  const getHolidaysForDate = useCallback((d: Date): HolidayEntry[] => {
    return holidayMapRef.current.get(dateToKey(d)) ?? [];
  }, []);

  const getHolidayName = useCallback(
    (d: Date): string | null => {
      const entries = getHolidaysForDate(d);
      if (entries.length === 0) return null;
      // Prefer the red-letter holiday name if multiple on same day
      const red = entries.find((e) => e.isRed);
      return (red ?? entries[0]).name;
    },
    [getHolidaysForDate]
  );

  const isRedHoliday = useCallback(
    (d: Date): boolean => {
      return getHolidaysForDate(d).some((e) => e.isRed);
    },
    [getHolidaysForDate]
  );

  return { loading, holidays, getHolidayName, isRedHoliday, getHolidaysForDate };
}
