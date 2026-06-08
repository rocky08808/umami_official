import { Logo } from "./logo";

const footerLinks = {
  产品: ["功能", "定价", "更新日志", "路线图"],
  资源: ["文档", "博客", "API", "社区"],
  公司: ["关于", "招聘", "隐私政策", "服务条款"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-raised/50">
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              注重隐私的网站分析工具，帮助你理解用户行为，无需追踪个人数据。
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold">{category}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
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
            © {new Date().getFullYear()} webscount. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "Discord"].map((name) => (
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
