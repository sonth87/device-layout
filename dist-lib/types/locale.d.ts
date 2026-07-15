export type SupportedLang = 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th';
/**
 * App-level locale dictionary.
 * - `en` is **required** and used as the fallback when the current system language
 *   is not available in this app's locale.
 * - All other language keys are optional.
 * - Using `as const` in component files is fine; the type is intentionally loose.
 *
 * @example
 * ```ts
 * const myLocale = {
 *   en: { title: 'My App', search: 'Search...' },
 *   vi: { title: 'Ứng dụng của tôi', search: 'Tìm kiếm...' },
 * } satisfies AppLocale;
 * ```
 */
export interface AppLocale<T extends Record<string, string> = Record<string, string>> {
    en: T;
    vi?: Record<string, string>;
    ja?: Record<string, string>;
    ko?: Record<string, string>;
    zh?: Record<string, string>;
    th?: Record<string, string>;
}
/** Human-readable display name for each language (native name). */
export declare const LANG_LABELS: Record<SupportedLang, string>;
/** Flag emoji for each language. */
export declare const LANG_FLAGS: Record<SupportedLang, string>;
