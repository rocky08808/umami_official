import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Logo } from "./logo";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const { footer } = dict;

  return (
    <footer className="border-t border-border bg-surface-raised/50">
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo locale={locale} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footer.description}
            </p>
          </div>

          {footer.categories.map((category) => (
            <div key={category.title}>
              <p className="text-sm font-semibold">{category.title}</p>
              <ul className="mt-4 space-y-3">
                {category.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} webscount. {footer.copyright}
          </p>
          <div className="flex gap-6">
            {footer.social.map((name) => (
              <a
                key={name}
                href="#"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
