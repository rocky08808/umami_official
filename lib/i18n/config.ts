export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
};

export const localeHtmlLang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
