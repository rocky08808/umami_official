import { Fragment } from "react";
import type { ComparisonSection } from "@/lib/i18n/pricing-types";
import { CellValue } from "./cell-value";

type PricingComparisonProps = {
  planNames: [string, string, string, string];
  sections: ComparisonSection[];
};

export function PricingComparison({
  planNames,
  sections,
}: PricingComparisonProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-card">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="sticky left-0 z-10 min-w-[180px] bg-surface px-4 py-4 font-semibold sm:px-6" />
            {planNames.map((name) => (
              <th
                key={name}
                className="min-w-[120px] px-4 py-4 text-center font-semibold sm:px-6"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <Fragment key={section.title}>
              <tr className="bg-surface-raised/60">
                <td
                  colSpan={5}
                  className="sticky left-0 px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted sm:px-6"
                >
                  {section.title}
                </td>
              </tr>
              {section.rows.map((row) => (
                <tr
                  key={`${section.title}-${row.label}`}
                  className="border-t border-border"
                >
                  <td className="sticky left-0 z-10 bg-surface px-4 py-3 text-muted sm:px-6">
                    {row.label}
                  </td>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className="px-4 py-3 text-center sm:px-6"
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
  );
}
