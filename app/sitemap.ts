import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { localePath, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}${localePath(locale)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "zh" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [
          l === "zh" ? "zh-CN" : "en",
          `${siteUrl}${localePath(l)}`,
        ])
      ),
    },
  }));
}
