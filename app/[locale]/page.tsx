import { notFound } from "next/navigation";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { FeatureSection } from "../components/feature-section";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { ButtonLink } from "../components/button";
import { JsonLd } from "../components/json-ld";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildJsonLd } from "@/lib/seo";

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

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const { features } = dict;

  return (
    <div className="min-h-full bg-background text-foreground">
      <JsonLd data={buildJsonLd(locale, dict)} />
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />

        <div id="features" className="mx-auto max-w-[1000px] px-4 md:px-6">
          <section className="flex flex-col items-center gap-4 py-16 text-center md:py-24">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted">
              {features.eyebrow}
            </span>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {features.title}
            </h2>
            <p className="max-w-[640px] text-lg leading-relaxed text-muted">
              {features.description}
            </p>
          </section>

          <div className="flex flex-col gap-28 md:gap-36">
            {features.items.map((item, index) => (
              <FeatureSection
                key={item.question}
                question={item.question}
                description={item.description}
                image={featureImages[index]}
                imageAlt={item.imageAlt}
                imageWidth={480}
                imageHeight={480}
                reversed={index % 2 === 1}
              />
            ))}
          </div>

          <div className="flex justify-center py-20 md:py-24">
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="outline"
              size="md"
            >
              {features.explore}
            </ButtonLink>
          </div>
        </div>

        <CTA dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
