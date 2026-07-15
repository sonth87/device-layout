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

import vnHolidayData from "@/data/holidays-data.json";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HolidayEntry {
  /** YYYY-MM-DD */
  date: string;
  name: string;
  isRed: boolean;
  /** 'json' = from static file, 'ics' = from Apple feed, 'merged' = both */
  source: "json" | "ics" | "merged";
}

interface JsonHoliday {
  month: number;
  day: number;
  name: string;
  isRed?: boolean;
}

interface JsonHolidayData {
  solar: JsonHoliday[];
  lunar: JsonHoliday[];
}

// ─── Country → ICS URL map ───────────────────────────────────────────────────
// Key   = ISO 3166-1 alpha-2 country code (lowercase)
// Value = Apple iCloud holiday calendar URL for that country (native language)

export const COUNTRY_ICS_MAP: Record<string, string> = {
  vn: "https://calendars.icloud.com/holidays/vn_vi.ics/",
  us: "https://calendars.icloud.com/holidays/us_en.ics/",
  gb: "https://calendars.icloud.com/holidays/gb_en.ics/",
  jp: "https://calendars.icloud.com/holidays/jp_ja.ics/",
  kr: "https://calendars.icloud.com/holidays/kr_ko.ics/",
  cn: "https://calendars.icloud.com/holidays/cn_zh.ics/",
  th: "https://calendars.icloud.com/holidays/th_th.ics/",
  fr: "https://calendars.icloud.com/holidays/fr_fr.ics/",
  de: "https://calendars.icloud.com/holidays/de_de.ics/",
  sg: "https://calendars.icloud.com/holidays/sg_en.ics/",
};

export const COUNTRY_LABELS: Record<string, { flag: string; name: string }> = {
  vn: { flag: "🇻🇳", name: "Vietnam" },
  us: { flag: "🇺🇸", name: "United States" },
  gb: { flag: "🇬🇧", name: "United Kingdom" },
  jp: { flag: "🇯🇵", name: "Japan" },
  kr: { flag: "🇰🇷", name: "South Korea" },
  cn: { flag: "🇨🇳", name: "China" },
  th: { flag: "🇹🇭", name: "Thailand" },
  fr: { flag: "🇫🇷", name: "France" },
  de: { flag: "🇩🇪", name: "Germany" },
  sg: { flag: "🇸🇬", name: "Singapore" },
};

// ─── Country → JSON base data map ───────────────────────────────────────────
// Only VN has a bundled JSON base for now; other countries rely solely on ICS.

const COUNTRY_JSON_MAP: Record<string, JsonHolidayData | null> = {
  vn: vnHolidayData as JsonHolidayData,
};

// ─── ICS Parser ──────────────────────────────────────────────────────────────

interface ICSEvent {
  date: string; // YYYY-MM-DD
  name: string;
}

/**
 * Minimal ICS parser — extracts DTSTART and SUMMARY from VEVENT blocks.
 * Does NOT expand RRULE (Apple already lists each occurrence explicitly).
 */
function parseICS(text: string): ICSEvent[] {
  const events: ICSEvent[] = [];
  const blocks = text.split("BEGIN:VEVENT");

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];

    // DTSTART;VALUE=DATE:20260430  or  DTSTART:20260430
    const dateMatch = block.match(/DTSTART(?:;[^:]+)?:(\d{8})/);
    // SUMMARY;LANGUAGE=vi:Tết Nguyên đán  or  SUMMARY:...
    const nameMatch = block.match(/SUMMARY(?:;[^:]+)?:(.+)/);

    if (!dateMatch || !nameMatch) continue;

    const raw = dateMatch[1]; // "20260430"
    const date = `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
    const name = nameMatch[1].replace(/\r/g, "").trim();

    events.push({ date, name });
  }

  return events;
}

// ─── In-memory ICS cache ─────────────────────────────────────────────────────

const icsCache: Record<string, { events: ICSEvent[]; fetchedAt: number }> = {};
const ICS_CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

async function fetchICSForCountry(country: string): Promise<ICSEvent[]> {
  const url = COUNTRY_ICS_MAP[country];
  if (!url) return [];

  const cached = icsCache[country];
  if (cached && Date.now() - cached.fetchedAt < ICS_CACHE_TTL_MS) {
    return cached.events;
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const text = await res.text();
    const events = parseICS(text);
    icsCache[country] = { events, fetchedAt: Date.now() };
    return events;
  } catch {
    return [];
  }
}

// ─── Lunar conversion (re-exported from types.ts dependency-free) ────────────
// We import the pure function from types.ts to avoid duplication.
import { getLunarDate } from "@/components/apps/calendar/types";

// ─── JSON base → dated entries ───────────────────────────────────────────────

function expandJsonHolidaysForYear(
  data: JsonHolidayData,
  year: number
): HolidayEntry[] {
  const entries: HolidayEntry[] = [];

  // Solar holidays — fixed month/day each year
  for (const h of data.solar) {
    const mm = String(h.month).padStart(2, "0");
    const dd = String(h.day).padStart(2, "0");
    entries.push({
      date: `${year}-${mm}-${dd}`,
      name: h.name,
      isRed: h.isRed ?? false,
      source: "json",
    });
  }

  // Lunar holidays — convert each day of the year to find matches
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const solarDay = d.getDate();
    const solarMonth = d.getMonth() + 1;
    const lunar = getLunarDate(solarDay, solarMonth, year);
    if (lunar.day === 0) continue;

    for (const h of data.lunar) {
      // Match lunar month/day, skip leap months to avoid duplicates
      if (h.month === lunar.month && h.day === lunar.day && lunar.leap === 0) {
        const mm = String(solarMonth).padStart(2, "0");
        const dd = String(solarDay).padStart(2, "0");
        entries.push({
          date: `${year}-${mm}-${dd}`,
          name: h.name,
          isRed: h.isRed ?? false,
          source: "json",
        });
        break;
      }
    }
  }

  return entries;
}

// ─── Merge logic ─────────────────────────────────────────────────────────────

/**
 * Merges JSON base entries with Apple ICS entries for a given year.
 *
 * Rules:
 * - JSON entries are the base
 * - ICS entries for the same date → Apple name wins (overrides JSON name)
 * - ICS-only dates (e.g. makeup holidays) → added with isRed: true
 * - Per-date, multiple entries are allowed (e.g. a solar + a lunar on same day)
 *   but ICS overrides JSON for the SAME conceptual event detected by date match.
 */
function mergeHolidays(
  jsonEntries: HolidayEntry[],
  icsEvents: ICSEvent[],
  year: number
): HolidayEntry[] {
  // Build a map: date → ICS event list
  const icsYear = icsEvents.filter((e) => e.date.startsWith(`${year}-`));
  const icsMap = new Map<string, ICSEvent[]>();
  for (const ev of icsYear) {
    const list = icsMap.get(ev.date) ?? [];
    list.push(ev);
    icsMap.set(ev.date, list);
  }

  const result: HolidayEntry[] = [];
  const coveredIcsDates = new Set<string>();

  for (const entry of jsonEntries) {
    const icsOnDate = icsMap.get(entry.date);
    if (icsOnDate && icsOnDate.length > 0) {
      // Apple has data for this date — use Apple name, keep JSON isRed
      // Pick the best ICS match: prefer an event whose name resembles the JSON name
      const best = icsOnDate[0];
      result.push({
        date: entry.date,
        name: best.name,
        isRed: entry.isRed,
        source: "merged",
      });
      coveredIcsDates.add(entry.date);
    } else {
      // Apple has no data for this date — keep JSON as-is
      result.push(entry);
    }
  }

  // Add Apple-only entries (makeup days, extra official holidays) not covered by JSON
  for (const [date, events] of icsMap) {
    if (coveredIcsDates.has(date)) continue;
    for (const ev of events) {
      result.push({
        date,
        name: ev.name,
        isRed: true, // Apple entries are official public holidays
        source: "ics",
      });
    }
  }

  // Sort by date
  result.sort((a, b) => a.date.localeCompare(b.date));
  return result;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** Cache of merged results, keyed by `${country}-${year}` */
const mergedCache: Record<string, HolidayEntry[]> = {};

/**
 * Returns merged holiday entries for the given country and year.
 * Falls back gracefully: if ICS fetch fails or year is outside Apple's range,
 * returns JSON-only entries.
 *
 * @param country  ISO 3166-1 alpha-2 code, e.g. 'vn'
 * @param year     Gregorian year, e.g. 2026
 */
export async function getHolidaysForYear(
  country: string,
  year: number
): Promise<HolidayEntry[]> {
  const cacheKey = `${country}-${year}`;
  if (mergedCache[cacheKey]) return mergedCache[cacheKey];

  const jsonData = COUNTRY_JSON_MAP[country] ?? null;
  const jsonEntries = jsonData
    ? expandJsonHolidaysForYear(jsonData, year)
    : [];

  const icsEvents = await fetchICSForCountry(country);
  const result = mergeHolidays(jsonEntries, icsEvents, year);

  mergedCache[cacheKey] = result;
  return result;
}

/**
 * Clears the merged cache for a country (call when country changes in Settings).
 */
export function invalidateHolidayCache(country?: string) {
  if (country) {
    for (const key of Object.keys(mergedCache)) {
      if (key.startsWith(`${country}-`)) delete mergedCache[key];
    }
    delete icsCache[country];
  } else {
    // Clear all
    for (const key of Object.keys(mergedCache)) delete mergedCache[key];
    for (const key of Object.keys(icsCache)) delete icsCache[key];
  }
}
