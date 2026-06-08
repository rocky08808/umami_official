import Image from "next/image";
import { TrustedBy } from "./trusted-by";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-10 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="max-w-[800px] text-4xl font-bold tracking-tight md:text-6xl md:leading-[1.1] lg:text-7xl">
            强大的数据分析，
            <br />
            无需复杂配置
          </h1>
          <p className="max-w-[600px] text-lg text-muted md:text-xl">
            几分钟完成部署，立即获取洞察。无需 Cookie。
          </p>
          <a
            href="#signup"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            免费开始使用
          </a>

          <div className="mx-auto w-full max-w-[800px] pt-6">
            <Image
              src="/images/app.jpg"
              alt="webscount 分析仪表盘预览"
              width={1483}
              height={1258}
              priority
              className="h-auto w-full rounded-xl border border-border shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        <div className="mt-10 w-full">
          <TrustedBy />
        </div>
      </div>
    </section>
  );
}
