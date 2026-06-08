import type { PricingPlan } from "@/lib/i18n/pricing-types";
import { cloudUrl } from "@/lib/site";
import { ButtonLink } from "../button";

type PricingCardsProps = {
  plans: PricingPlan[];
};

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-2xl border bg-surface p-6 transition-shadow duration-300 sm:p-7 ${
            plan.highlighted
              ? "z-10 border-foreground/15 shadow-elevated xl:-translate-y-1"
              : "border-border shadow-card hover:shadow-elevated"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
          </div>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-sm text-muted">{plan.period}</span>
            )}
          </div>

          <ButtonLink
            href={cloudUrl}
            trackSource={`pricing-${plan.name.toLowerCase()}`}
            variant={plan.highlighted ? "primary" : "outline"}
            size="md"
            className="mt-6 w-full"
          >
            {plan.cta}
          </ButtonLink>

          {(plan.intro || plan.includes) && (
            <>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground">
                  {plan.intro ?? plan.includes}
                </p>
              </div>
            </>
          )}

          <ul className="mt-4 flex flex-1 flex-col gap-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2.5 text-sm leading-relaxed text-muted"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-raised">
                  <svg
                    className="size-3 text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
