import type { Dictionary } from "@/lib/i18n/types";
import { ButtonLink } from "./button";
import { ScrollReveal } from "./scroll-reveal";

type CTAProps = {
  dict: Dictionary;
};

export function CTA({ dict }: CTAProps) {
  const { cta } = dict;

  return (
    <ScrollReveal>
    <section className="py-14 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-foreground px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl md:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-background/70 sm:mt-4 sm:text-base md:text-lg">
              {cta.description}
            </p>
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="outline"
              size="lg"
              className="mt-6 w-full max-w-sm border-white/20 bg-white text-foreground hover:bg-white/90 sm:mt-8 sm:w-auto"
            >
              {cta.button}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
