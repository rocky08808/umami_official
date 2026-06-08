import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import { TrustedBy } from "./trusted-by";
import { ButtonLink } from "./button";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  const { hero, trusted } = dict;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 pb-10 md:pt-[140px] md:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl animate-fade-up flex-col items-center gap-5 text-center md:gap-7">
          <span className="inline-flex max-w-full items-center rounded-full border border-border bg-surface px-3 py-1.5 text-center text-[11px] font-medium leading-snug tracking-wide text-muted shadow-sm sm:px-4 sm:text-xs">
            {hero.badge}
          </span>

          <h1
            id="hero-heading"
            className="max-w-[820px] text-[1.75rem] font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-6xl md:leading-[1.08] lg:text-[4.25rem]"
          >
            {hero.title}
            <br />
            <span className="text-muted">{hero.titleAccent}</span>
          </h1>

          <p className="max-w-[560px] text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {hero.description}
          </p>

          <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink
              href="#features"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {hero.ctaSecondary}
            </ButtonLink>
          </div>

          <div className="mx-auto w-full max-w-[860px] pt-4 md:pt-8">
            <div className="rounded-2xl bg-gradient-to-b from-black/[0.04] to-transparent p-0.5 sm:p-1">
              <Image
                src="/images/app.jpg?v=3"
                alt={hero.imageAlt}
                width={1483}
                height={1258}
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 860px"
                className="h-auto w-full rounded-[12px] border border-border bg-surface shadow-elevated sm:rounded-[14px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full border-t border-border pt-8 md:mt-14 md:pt-10">
          <TrustedBy label={trusted.label} />
        </div>
      </div>
    </section>
  );
}
