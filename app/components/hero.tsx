import Image from "next/image";
import { TrustedBy } from "./trusted-by";
import { ButtonLink } from "./button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-12 md:pt-[140px] md:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl animate-fade-up flex-col items-center gap-7 text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted shadow-sm">
            注重隐私 · 无需 Cookie · 开源友好
          </span>

          <h1 className="max-w-[820px] text-4xl font-bold tracking-tight text-balance md:text-6xl md:leading-[1.08] lg:text-[4.25rem]">
            强大的数据分析，
            <br />
            <span className="text-muted">无需复杂配置</span>
          </h1>

          <p className="max-w-[560px] text-lg leading-relaxed text-muted md:text-xl">
            几分钟完成部署，立即获取洞察。轻量、快速、尊重用户隐私。
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="primary"
              size="lg"
            >
              免费开始使用
            </ButtonLink>
            <ButtonLink href="#features" variant="outline" size="lg">
              了解功能
            </ButtonLink>
          </div>

          <div className="mx-auto w-full max-w-[860px] pt-8">
            <div className="rounded-2xl bg-gradient-to-b from-black/[0.04] to-transparent p-1">
              <Image
                src="/images/app.jpg"
                alt="webscount 分析仪表盘预览"
                width={1483}
                height={1258}
                priority
                className="h-auto w-full rounded-[14px] border border-border bg-surface shadow-elevated"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 w-full border-t border-border pt-10">
          <TrustedBy />
        </div>
      </div>
    </section>
  );
}
