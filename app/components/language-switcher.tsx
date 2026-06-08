"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchedPath = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium">
      {locales.map((l) => (
        <Link
          key={l}
          href={switchedPath(l)}
          hrefLang={l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}
