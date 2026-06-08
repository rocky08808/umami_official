import type { Dictionary } from "@/lib/i18n/types";
import { ButtonLink } from "./button";

type CTAProps = {
  dict: Dictionary;
};

export function CTA({ dict }: CTAProps) {
  const { cta } = dict;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-background md:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-background/70 md:text-lg">
              {cta.description}
            </p>
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="outline"
              size="lg"
              className="mt-8 border-white/20 bg-white text-foreground hover:bg-white/90"
            >
              {cta.button}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
