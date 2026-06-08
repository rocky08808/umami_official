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
    <section className="relative overflow-hidden pt-[120px] pb-12 md:pt-[140px] md:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl animate-fade-up flex-col items-center gap-7 text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted shadow-sm">
            {hero.badge}
          </span>

          <h1 className="max-w-[820px] text-4xl font-bold tracking-tight text-balance md:text-6xl md:leading-[1.08] lg:text-[4.25rem]">
            {hero.title}
            <br />
            <span className="text-muted">{hero.titleAccent}</span>
          </h1>

          <p className="max-w-[560px] text-lg leading-relaxed text-muted md:text-xl">
            {hero.description}
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="primary"
              size="lg"
            >
              {hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="#features" variant="outline" size="lg">
              {hero.ctaSecondary}
            </ButtonLink>
          </div>

          <div className="mx-auto w-full max-w-[860px] pt-8">
            <div className="rounded-2xl bg-gradient-to-b from-black/[0.04] to-transparent p-1">
              <Image
                src="/images/app.jpg"
                alt={hero.imageAlt}
                width={1483}
                height={1258}
                priority
                className="h-auto w-full rounded-[14px] border border-border bg-surface shadow-elevated"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 w-full border-t border-border pt-10">
          <TrustedBy label={trusted.label} />
        </div>
      </div>
    </section>
  );
}
