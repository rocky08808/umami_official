import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { FeatureSection } from "../components/feature-section";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { ButtonLink } from "../components/button";
import { JsonLd } from "../components/json-ld";
import { ScrollReveal } from "../components/scroll-reveal";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildJsonLd, buildMetadata } from "@/lib/seo";
import { cloudUrl } from "@/lib/site";

const featureImages = [
  "/images/screenshot-dashboard.jpg",
  "/images/screenshot-location.jpg",
  "/images/screenshot-events.jpg",
  "/images/screenshot-compare.jpg",
  "/images/screenshot-user-journey.jpg",
  "/images/screenshot-revenue.jpg",
];

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = await getDictionary(locale);
  return buildMetadata(locale, dict);
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const { features } = dict;

  return (
    <div className="min-h-full bg-background text-foreground">
      <JsonLd data={buildJsonLd(locale, dict)} />
      <Header locale={locale} dict={dict} />
      <main id="main-content">
        <Hero dict={dict} />

        <div id="features" className="mx-auto max-w-[1000px] px-4 md:px-6">
          <ScrollReveal>
            <section
              aria-labelledby="features-heading"
              className="flex flex-col items-center gap-3 px-1 py-12 text-center sm:gap-4 sm:py-16 md:py-24"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:text-xs sm:tracking-[0.24em]">
                {features.eyebrow}
              </span>
              <h2
                id="features-heading"
                className="max-w-2xl text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl"
              >
                {features.title}
              </h2>
              <p className="max-w-[640px] text-base leading-relaxed text-muted sm:text-lg">
                {features.description}
              </p>
            </section>
          </ScrollReveal>

          <div className="flex flex-col gap-16 sm:gap-24 md:gap-36">
            {features.items.map((item, index) => (
              <FeatureSection
                key={item.question}
                id={`feature-${index}`}
                question={item.question}
                description={item.description}
                image={featureImages[index]}
                imageAlt={item.imageAlt}
                imageWidth={480}
                imageHeight={480}
                reversed={index % 2 === 1}
                revealDelay={index * 80}
              />
            ))}
          </div>

          <ScrollReveal>
            <div className="flex justify-center px-2 py-14 sm:py-20 md:py-24">
            <ButtonLink
              href={cloudUrl}
              trackSource="features-explore"
              variant="outline"
              size="md"
              className="w-full max-w-xs sm:w-auto"
            >
                {features.explore}
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>

        <CTA dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
