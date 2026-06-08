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
      <dl className="mx-auto mt-10 max-w-3xl divide-y divide-border">
        {items.map((item) => (
          <div key={item.question} className="py-6">
            <dt className="text-base font-semibold">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
