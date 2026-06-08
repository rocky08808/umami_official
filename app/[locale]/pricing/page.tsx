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
import { buildAlternates } from "@/lib/seo";
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
  const { meta } = dict.pricing;

  return {
    title: meta.title,
    description: meta.description,
    alternates: buildAlternates(locale, "pricing"),
  };
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const { pricing } = dict;

  return (
    <div className="min-h-full bg-background text-foreground">
      <Header locale={locale} dict={dict} />
      <main id="main-content" className="pt-24 md:pt-[140px]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {pricing.title}
            </h1>
            <p className="mt-3 text-base text-muted sm:text-lg">
              {pricing.subtitle}
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <ScrollReveal>
              <PricingCards plans={pricing.plans} />
            </ScrollReveal>
          </div>

          <div className="mt-20 md:mt-28">
            <ScrollReveal>
              <PricingComparison
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

          <div className="py-16 text-center md:py-24">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {pricing.cta.title}
              </h2>
              <ButtonLink
                href={cloudUrl}
                variant="primary"
                size="lg"
                className="mt-6 w-full max-w-xs sm:w-auto"
              >
                {pricing.cta.button}
              </ButtonLink>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
