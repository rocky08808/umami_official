import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { LegalDocument } from "@/app/components/legal/legal-document";
import { JsonLd } from "@/app/components/json-ld";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata, buildTermsJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return buildPageMetadata(locale, "terms", dict.terms.meta);
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const { terms } = dict;

  return (
    <div className="min-h-full bg-background text-foreground">
      <JsonLd data={buildTermsJsonLd(locale, terms)} />
      <Header locale={locale} dict={dict} />
      <main id="main-content">
        <section className="relative overflow-hidden pt-24 pb-10 md:pt-[140px] md:pb-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]" />
          <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl md:leading-[1.1]">
                {terms.title}
              </h1>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 pb-16 md:px-6 md:pb-24">
          <ScrollReveal>
            <LegalDocument
              lastUpdated={terms.lastUpdated}
              intro={terms.intro}
              sections={terms.sections}
            />
          </ScrollReveal>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
