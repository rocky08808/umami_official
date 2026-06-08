import type { PricingPlan } from "@/lib/i18n/pricing-types";
import { cloudUrl } from "@/lib/site";
import { ButtonLink } from "../button";

type PricingCardsProps = {
  plans: PricingPlan[];
};

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex flex-col rounded-2xl border bg-surface p-6 shadow-card sm:p-7 ${
            plan.highlighted
              ? "border-foreground/20 ring-1 ring-foreground/10"
              : "border-border"
          }`}
        >
          <h3 className="text-lg font-bold">{plan.name}</h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-sm text-muted">{plan.period}</span>
            )}
          </div>

          <ButtonLink
            href={cloudUrl}
            variant={plan.highlighted ? "primary" : "outline"}
            size="md"
            className="mt-6 w-full"
          >
            {plan.cta}
          </ButtonLink>

          {(plan.intro || plan.includes) && (
            <p className="mt-6 text-sm font-medium text-foreground">
              {plan.intro ?? plan.includes}
            </p>
          )}

          <ul className="mt-4 flex flex-1 flex-col gap-2.5">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm leading-relaxed text-muted"
              >
                <svg
                  className="mt-0.5 size-4 shrink-0 text-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
