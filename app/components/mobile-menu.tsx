"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { ButtonLink } from "./button";
import { LanguageSwitcher } from "./language-switcher";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
  navLinks: { label: string; href: string }[];
};

export function MobileMenu({
  open,
  onClose,
  locale,
  dict,
  navLinks,
}: MobileMenuProps) {
  const { nav } = dict;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <nav className="absolute top-14 right-0 left-0 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-border bg-background px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-lg md:top-[70px]">
        <ul className="flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="flex min-h-11 items-center rounded-xl px-4 text-base font-medium text-foreground transition-colors active:bg-surface-raised"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <div className="flex justify-center">
            <LanguageSwitcher locale={locale} />
          </div>
          <ButtonLink
            href="https://cloud.webscount.com/"
            variant="outline"
            size="md"
            className="w-full"
          >
            {nav.login}
          </ButtonLink>
          <ButtonLink
            href="https://cloud.webscount.com/"
            variant="primary"
            size="md"
            className="w-full"
          >
            {nav.signup}
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}
