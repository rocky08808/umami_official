import { Fragment } from "react";
import type { ComparisonSection } from "@/lib/i18n/pricing-types";
import { CellValue } from "./cell-value";

type PricingComparisonProps = {
  title: string;
  planNames: [string, string, string, string];
  sections: ComparisonSection[];
};

const HIGHLIGHT_COL = 1;

export function PricingComparison({
  title,
  planNames,
  sections,
}: PricingComparisonProps) {
  return (
    <section aria-labelledby="pricing-compare-heading">
      <h2
        id="pricing-compare-heading"
        className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-surface shadow-card [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-raised/80">
              <th className="sticky left-0 z-20 min-w-[200px] bg-surface-raised/95 px-5 py-4 shadow-[4px_0_12px_-6px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:px-6" />
              {planNames.map((name, i) => (
                <th
                  key={name}
                  className={`min-w-[130px] px-4 py-4 text-center text-sm font-bold sm:px-5 ${
                    i === HIGHLIGHT_COL
                      ? "bg-foreground/[0.03] text-foreground"
                      : ""
                  }`}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <Fragment key={section.title}>
                <tr>
                  <td
                    colSpan={5}
                    className="sticky left-0 bg-surface-raised px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted sm:px-6"
                  >
                    {section.title}
                  </td>
                </tr>
                {section.rows.map((row) => (
                  <tr
                    key={`${section.title}-${row.label}`}
                    className="border-t border-border transition-colors hover:bg-surface-raised/40"
                  >
                    <td className="sticky left-0 z-10 bg-surface px-5 py-3.5 text-[13px] text-muted shadow-[4px_0_12px_-6px_rgba(0,0,0,0.06)] sm:px-6">
                      {row.label}
                    </td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3.5 text-center sm:px-5 ${
                          i === HIGHLIGHT_COL ? "bg-foreground/[0.02]" : ""
                        }`}
                      >
                        <CellValue value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
