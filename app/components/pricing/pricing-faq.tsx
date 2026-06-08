import type { PricingFaq } from "@/lib/i18n/pricing-types";

type PricingFaqProps = {
  title: string;
  items: PricingFaq[];
};

export function PricingFaq({ title, items }: PricingFaqProps) {
  return (
    <section aria-labelledby="pricing-faq-heading">
      <h2
        id="pricing-faq-heading"
        className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <dl className="mx-auto mt-10 grid max-w-3xl gap-3 sm:gap-4">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-xl border border-border bg-surface px-5 py-5 shadow-card sm:px-6 sm:py-6"
          >
            <dt className="text-base font-semibold leading-snug">
              {item.question}
            </dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
