import type { MetadataRoute } from "next";
import { defaultLocale } from "@/lib/i18n/config";
import { localePath, siteUrl } from "@/lib/seo";
import { siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} – Privacy-Focused Web Analytics`,
    short_name: siteName,
    description:
      "Powerful analytics without the complexity. Privacy-focused web analytics with no cookies required.",
    start_url: `${siteUrl}${localePath(defaultLocale)}`,
    scope: siteUrl,
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#fafafa",
    orientation: "portrait-primary",
    lang: "zh-CN",
    dir: "ltr",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/umami-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
