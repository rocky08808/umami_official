import type { Metadata } from "next";
import {
  defaultLocale,
  locales,
  localeHtmlLang,
  type Locale,
} from "./i18n/config";
import type { Dictionary } from "./i18n/types";
import { cloudUrl, siteName } from "./site";

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

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

export function buildLanguageAlternates() {
  const languages = Object.fromEntries(
    locales.map((l) => [localeHtmlLang[l], absoluteUrl(localePath(l))])
  );

  return {
    ...languages,
    "x-default": absoluteUrl(localePath(defaultLocale)),
  };
}

export function buildAlternates(locale: Locale, path = "") {
  const suffix = path ? `/${path}` : "";
  const languages = Object.fromEntries(
    locales.map((l) => [
      localeHtmlLang[l],
      absoluteUrl(localePath(l, suffix)),
    ])
  );

  return {
    canonical: absoluteUrl(localePath(locale, suffix)),
    languages: {
      ...languages,
      "x-default": absoluteUrl(localePath(defaultLocale, suffix)),
    },
  };
}

function buildVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const yandex = process.env.YANDEX_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;

  if (!google && !yandex && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const { meta } = dict;
  const pageUrl = absoluteUrl(localePath(locale));

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: `%s | ${siteName}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "technology",
    alternates: buildAlternates(locale),
    manifest: "/manifest.webmanifest",
    verification: buildVerification(),
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
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
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => (l === "zh" ? "zh_CN" : "en_US")),
      url: pageUrl,
      siteName,
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: {
        url: "/opengraph-image.png",
        alt: meta.ogImageAlt,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "apple-mobile-web-app-title": siteName,
    },
  };
}

export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const pageUrl = absoluteUrl(localePath(locale));
  const { meta, features } = dict;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/umami-logo.png"),
          width: 512,
          height: 512,
        },
        description: meta.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: [localeHtmlLang.zh, localeHtmlLang.en],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        inLanguage: localeHtmlLang[locale],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/app.jpg"),
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: siteName,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Web Analytics",
        operatingSystem: "Web",
        url: cloudUrl,
        description: meta.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: dict.cta.description,
          url: cloudUrl,
        },
        featureList: features.items.map((item) => item.question),
        screenshot: featureImages.map((img) => absoluteUrl(img)),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: features.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.description,
          },
        })),
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: siteName,
        description: meta.description,
        brand: { "@id": `${siteUrl}/#organization` },
        image: absoluteUrl("/opengraph-image.png"),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: cloudUrl,
        },
      },
    ],
  };
}
