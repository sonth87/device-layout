/**
 * useAppTranslation — App-Level Language Hook
 *
 * Reads the current SYSTEM language from the store and returns the
 * matching locale from the app's own locale dictionary.
 *
 * Fallback order:
 *   1. App locale for the current system language (e.g. 'vi')
 *   2. App locale for 'en' (required in every AppLocale)
 *   3. Returns empty object if no locale is defined
 *
 * @example
 * ```ts
 * const LOCALE = {
 *   en: { newNote: 'New Note', search: 'Search' },
 *   vi: { newNote: 'Ghi chú mới', search: 'Tìm kiếm' },
 * } as const;
 *
 * function MyApp({ appId }: { appId: string }) {
 *   const { t } = useAppTranslation(appId, LOCALE);
 *   return <input placeholder={t.search} />;
 * }
 * ```
 */
import { useStore } from '@/store';
import type { SupportedLang } from '@/types/locale';

type AnyLocaleDict = Record<string, string>;

interface AnyAppLocale {
  en: AnyLocaleDict;
  vi?: AnyLocaleDict;
  ja?: AnyLocaleDict;
  ko?: AnyLocaleDict;
  zh?: AnyLocaleDict;
  th?: AnyLocaleDict;
}

/**
 * Returns translated strings for the given app, using system language,
 * falling back to `en` if the app doesn't support the current language.
 *
 * @param appId - The app's ID (used to look up locale from AppConfig.locale if no inline locale)
 * @param inlineLocale - Optional inline locale dictionary (takes precedence over AppConfig.locale)
 */
export function useAppTranslation<T extends AnyLocaleDict>(
  appId: string,
  inlineLocale?: { en: T } & Partial<Record<Exclude<SupportedLang, 'en'>, AnyLocaleDict>>
): { t: T; lang: SupportedLang; isSystemLang: boolean } {
  const systemLang = (useStore((s) => s.language) || 'en') as SupportedLang;
  const apps = useStore((s) => s.apps);

  // Prefer inline locale, then app config locale
  const locale = (inlineLocale ?? apps[appId]?.locale) as AnyAppLocale | undefined;

  if (!locale) {
    return { t: {} as T, lang: systemLang, isSystemLang: true };
  }

  // Pick locale for system language, fallback to en
  const langDict = locale[systemLang as keyof AnyAppLocale];
  const hasLang = langDict != null;
  const resolved = (hasLang ? langDict : locale.en) as T;

  return {
    t: resolved,
    lang: hasLang ? systemLang : 'en',
    isSystemLang: hasLang,
  };
}
