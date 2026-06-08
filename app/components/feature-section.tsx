import type { ReactNode } from "react";
import { Screenshot } from "./screenshot";

type FeatureSectionProps = {
  question: string;
  description: ReactNode;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  reversed?: boolean;
};

export function FeatureSection({
  question,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-muted">
            {question}
          </p>
          <div className="text-base leading-relaxed text-muted md:text-lg">
            {description}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />
          <Screenshot
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </section>
  );
}
