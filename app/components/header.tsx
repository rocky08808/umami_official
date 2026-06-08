import { Logo } from "./logo";

const navLinks = [
  { label: "功能", href: "#features" },
  { label: "定价", href: "#pricing" },
  { label: "文档", href: "#docs" },
  { label: "博客", href: "#blog" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://cloud.webscount.com/"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            登录
          </a>
          <a
            href="https://cloud.webscount.com/"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            免费开始
          </a>
        </div>
      </div>
    </header>
  );
}
