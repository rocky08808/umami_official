"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Logo } from "./logo";
import { ButtonLink } from "./button";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { nav } = dict;

  const navLinks = [
    { label: nav.features, href: "#features" },
    { label: nav.pricing, href: "#pricing" },
    { label: nav.docs, href: "#docs" },
    { label: nav.blog, href: "#blog" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-border bg-background/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-2 px-4 md:h-[70px] md:gap-3 md:px-6">
          <Logo locale={locale} />

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface-raised/80 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher locale={locale} />
            </div>
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
            >
              {nav.login}
            </ButtonLink>
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              {nav.signup}
            </ButtonLink>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-surface-raised/80 md:hidden"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 5h16M4 12h16M4 19h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        dict={dict}
        navLinks={navLinks}
      />
    </>
  );
}
