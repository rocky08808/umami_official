import type { ReactNode } from "react";
import { Screenshot } from "./screenshot";

type FeatureSectionProps = {
  id: string;
  question: string;
  description: ReactNode;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  reversed?: boolean;
};

export function FeatureSection({
  id,
  question,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="group" aria-labelledby={id}>
      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-14 lg:gap-20">
        <div
          className={`order-2 space-y-3 md:order-none md:space-y-4 md:pr-4 ${
            reversed ? "md:order-2" : ""
          }`}
        >
          <h3
            id={id}
            className="text-lg font-bold leading-snug tracking-tight sm:text-xl md:text-2xl lg:text-[1.75rem]"
          >
            {question}
          </h3>
          <p className="text-sm leading-relaxed text-muted sm:text-base md:text-lg md:leading-8">
            {description}
          </p>
        </div>

        <div
          className={`relative order-1 transition-transform duration-500 md:order-none md:group-hover:translate-y-[-2px] ${
            reversed ? "md:order-1" : ""
          }`}
        >
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-black/[0.04] to-transparent opacity-0 transition-opacity duration-500 md:-inset-3 md:group-hover:opacity-100" />
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
