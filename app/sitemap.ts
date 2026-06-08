import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { buildAlternates, localePath, siteUrl } from "@/lib/seo";

const paths = ["", "pricing"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path ? 0.8 : locale === "zh" ? 1 : 0.9,
      alternates: {
        languages: buildAlternates(locale, path).languages,
      },
    }))
  );
}
