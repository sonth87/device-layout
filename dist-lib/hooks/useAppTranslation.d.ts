import { SupportedLang } from '../types/locale';
type AnyLocaleDict = Record<string, string>;
/**
 * Returns translated strings for the given app, using system language,
 * falling back to `en` if the app doesn't support the current language.
 *
 * @param appId - The app's ID (used to look up locale from AppConfig.locale if no inline locale)
 * @param inlineLocale - Optional inline locale dictionary (takes precedence over AppConfig.locale)
 */
export declare function useAppTranslation<T extends AnyLocaleDict>(appId: string, inlineLocale?: {
    en: T;
} & Partial<Record<Exclude<SupportedLang, 'en'>, AnyLocaleDict>>): {
    t: T;
    lang: SupportedLang;
    isSystemLang: boolean;
};
export {};
