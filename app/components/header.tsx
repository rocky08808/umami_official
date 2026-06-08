"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ButtonLink } from "./button";

const navLinks = [
  { label: "功能", href: "#features" },
  { label: "定价", href: "#pricing" },
  { label: "文档", href: "#docs" },
  { label: "博客", href: "#blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-4 md:px-6">
        <Logo />

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

        <div className="flex items-center gap-2">
          <ButtonLink
            href="https://cloud.webscount.com/"
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            登录
          </ButtonLink>
          <ButtonLink
            href="https://cloud.webscount.com/"
            variant="primary"
            size="sm"
          >
            免费开始
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
