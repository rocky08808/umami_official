import { ButtonLink } from "./button";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-background md:text-4xl">
              立即体验 webscount
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-background/70 md:text-lg">
              14 天免费试用，无需信用卡。几分钟内即可看到第一批数据。
            </p>
            <ButtonLink
              href="https://cloud.webscount.com/"
              variant="outline"
              size="lg"
              className="mt-8 border-white/20 bg-white text-foreground hover:bg-white/90"
            >
              开始 14 天免费试用
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
