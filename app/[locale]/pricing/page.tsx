import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { ButtonLink } from "@/app/components/button";
import { PricingCards } from "@/app/components/pricing/pricing-cards";
import { PricingComparison } from "@/app/components/pricing/pricing-comparison";
import { PricingFaq } from "@/app/components/pricing/pricing-faq";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { JsonLd } from "@/app/components/json-ld";
import { buildPageMetadata, buildPricingJsonLd } from "@/lib/seo";
import { cloudUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return buildPageMetadata(locale, "pricing", dict.pricing.meta);
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const { pricing } = dict;

  return (
    <div className="min-h-full bg-background text-foreground">
      <JsonLd data={buildPricingJsonLd(locale, dict, pricing)} />
      <Header locale={locale} dict={dict} />
      <main id="main-content">
        <section className="relative overflow-hidden pt-24 pb-10 md:pt-[140px] md:pb-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]" />
          <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl md:leading-[1.1]">
                {pricing.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {pricing.subtitle}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <ScrollReveal>
            <PricingCards plans={pricing.plans} />
          </ScrollReveal>

          <div className="mt-20 md:mt-28">
            <ScrollReveal>
              <PricingComparison
                title={pricing.compareTitle}
                planNames={pricing.planNames}
                sections={pricing.comparison}
              />
            </ScrollReveal>
          </div>

          <div className="mt-20 md:mt-28">
            <ScrollReveal>
              <PricingFaq title={pricing.faqTitle} items={pricing.faq} />
            </ScrollReveal>
          </div>

          <div className="py-16 md:py-24">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl bg-foreground px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 md:px-16 md:py-20">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
                <div className="relative">
                  <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
                    {pricing.cta.title}
                  </h2>
                  <ButtonLink
                    href={cloudUrl}
                    trackSource="pricing-cta"
                    variant="outline"
                    size="lg"
                    className="mt-6 w-full max-w-sm border-white/20 bg-white text-foreground hover:bg-white/90 sm:mt-8 sm:w-auto"
                  >
                    {pricing.cta.button}
                  </ButtonLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
