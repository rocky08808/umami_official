import type { Metadata } from "next";
import { locales, localeHtmlLang, type Locale } from "./i18n/config";
import type { Dictionary } from "./i18n/types";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://webscount.com";

const featureImages = [
  "/images/screenshot-dashboard.jpg",
  "/images/screenshot-location.jpg",
  "/images/screenshot-events.jpg",
  "/images/screenshot-compare.jpg",
  "/images/screenshot-user-journey.jpg",
  "/images/screenshot-revenue.jpg",
];

export function localePath(locale: Locale, path = ""): string {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${suffix}`;
}

export function buildAlternates(locale: Locale) {
  return {
    canonical: `${siteUrl}${localePath(locale)}`,
    languages: Object.fromEntries(
      locales.map((l) => [localeHtmlLang[l], `${siteUrl}${localePath(l)}`])
    ),
  };
}

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const { meta } = dict;

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: buildAlternates(locale),
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/images/umami-logo.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      url: localePath(locale),
      siteName: "webscount",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/opengraph-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const url = `${siteUrl}${localePath(locale)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "webscount",
      url: siteUrl,
      logo: `${siteUrl}/images/umami-logo.png`,
      description: dict.meta.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "webscount",
      url,
      inLanguage: localeHtmlLang[locale],
      description: dict.meta.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "webscount",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url,
      description: dict.meta.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: dict.cta.description,
      },
      featureList: dict.features.items.map((item) => item.question),
      screenshot: featureImages.map((img) => `${siteUrl}${img}`),
    },
  ];
}
