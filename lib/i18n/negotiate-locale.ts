import { defaultLocale, type Locale } from "./config";

type LanguagePreference = {
  tag: string;
  q: number;
};

function parseAcceptLanguage(header: string): LanguagePreference[] {
  if (!header.trim()) return [];

  return header
    .split(",")
    .map((part, index) => {
      const [rawTag, ...params] = part.trim().split(";").map((s) => s.trim());
      const tag = rawTag.toLowerCase();
      let q = 1;

      for (const param of params) {
        const [key, value] = param.split("=").map((s) => s.trim());
        if (key === "q" && value !== undefined) {
          const parsed = Number.parseFloat(value);
          if (!Number.isNaN(parsed)) q = parsed;
        }
      }

      return { tag, q: q === 0 ? 0.1 ** index : q };
    })
    .filter((pref) => pref.q > 0)
    .sort((a, b) => b.q - a.q);
}

function matchLocale(tag: string): Locale | null {
  if (tag === "zh" || tag.startsWith("zh-")) return "zh";
  if (tag === "en" || tag.startsWith("en-")) return "en";
  return null;
}

export function negotiateLocale(acceptLanguage: string | null): Locale {
  for (const { tag } of parseAcceptLanguage(acceptLanguage ?? "")) {
    const locale = matchLocale(tag);
    if (locale) return locale;
  }

  return defaultLocale;
}
