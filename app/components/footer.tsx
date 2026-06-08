import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Logo } from "./logo";
import { ScrollReveal } from "./scroll-reveal";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

function resolveFooterHref(locale: Locale, href: string): string {
  if (href.startsWith("http")) return href;
  if (href.startsWith("#")) return `/${locale}${href}`;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function Footer({ locale, dict }: FooterProps) {
  const { footer } = dict;

  return (
    <ScrollReveal>
    <footer className="border-t border-border bg-surface-raised/50 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <Logo locale={locale} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {footer.description}
            </p>
          </div>

          {footer.categories.map((category) => (
            <div key={category.title}>
              <p className="text-sm font-semibold">{category.title}</p>
              <ul className="mt-3 space-y-2.5 md:mt-4 md:space-y-3">
                {category.links.map((link) => {
                  const resolved = resolveFooterHref(locale, link.href);
                  const external = link.href.startsWith("http");

                  return (
                    <li key={link.label}>
                      <a
                        href={resolved}
                        {...(external
                          ? { rel: "noopener noreferrer", target: "_blank" }
                          : {})}
                        className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-8 md:mt-14">
          <p className="text-center text-sm text-muted sm:text-left">
            © {new Date().getFullYear()} webscount. {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
    </ScrollReveal>
  );
}
