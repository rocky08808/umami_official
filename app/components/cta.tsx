export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_70%)]" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              立即体验 webscount
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              14 天免费试用，无需信用卡。几分钟内即可看到第一批数据。
            </p>
            <a
              href="https://cloud.webscount.com/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              开始 14 天免费试用
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
