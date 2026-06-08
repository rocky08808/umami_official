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
    <section className="group">
      <div
        className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="space-y-4 md:pr-4">
          <h3 className="text-xl font-bold leading-snug tracking-tight md:text-2xl lg:text-[1.75rem]">
            {question}
          </h3>
          <p className="text-base leading-relaxed text-muted md:text-lg md:leading-8">
            {description}
          </p>
        </div>

        <div className="relative transition-transform duration-500 group-hover:translate-y-[-2px]">
          <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-black/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
