import type { LegalSection } from "@/lib/i18n/legal-types";

type LegalDocumentProps = {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocument({
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="prose-legal">
      <p className="text-sm text-muted">{lastUpdated}</p>
      <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.title} aria-labelledby={section.title}>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {section.title}
            </h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
