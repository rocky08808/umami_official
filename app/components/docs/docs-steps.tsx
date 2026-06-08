import type { DocsStep } from "@/lib/i18n/docs-types";
import { CodeBlock } from "./code-block";

type DocsStepsProps = {
  title: string;
  steps: DocsStep[];
};

export function DocsSteps({ title, steps }: DocsStepsProps) {
  return (
    <section aria-labelledby="docs-steps-heading">
      <h2
        id="docs-steps-heading"
        className="text-2xl font-bold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <ol className="mt-10 flex flex-col gap-10">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-5 sm:gap-6">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background sm:size-10">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {step.description}
                </p>
              </div>
              {step.codes?.map((block) => (
                <CodeBlock
                  key={block.label}
                  label={block.label}
                  code={block.code}
                />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
