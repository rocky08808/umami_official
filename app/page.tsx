import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { FeatureSection } from "./components/feature-section";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Hero />

        <div id="features" className="mx-auto max-w-[1000px] px-6">
          <section className="flex flex-col items-center gap-5 py-12 text-center md:py-20">
            <header className="text-sm font-bold uppercase tracking-[0.24em] text-muted">
              更快找到答案
            </header>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              webscount 帮你找到需要的答案
            </h2>
            <p className="max-w-[720px] text-lg text-muted">
              从流量和营销活动到漏斗、收入和用户行为，webscount
              让你轻松了解网站动态，无需在繁杂的报表中翻找。
            </p>
          </section>

          <div className="flex flex-col gap-32 md:gap-40">
            <FeatureSection
              question="上周有多少访客？"
              description="浏览量、访客数、跳出率和平均访问时长——全部汇聚在一个仪表盘。选择任意日期范围，按国家或设备筛选，几秒钟内掌握全局。"
              image="/images/screenshot-dashboard.jpg"
              imageAlt="关键指标仪表盘"
              imageWidth={480}
              imageHeight={480}
            />

            <FeatureSection
              question="访客从哪里来？"
              description="精确掌握受众的地理位置、使用的设备和浏览器，以及流量来源网站。在不了解个人身份的前提下，深入理解你的用户群体。"
              image="/images/screenshot-location.jpg"
              imageAlt="地理位置与设备分析"
              imageWidth={480}
              imageHeight={480}
              reversed
            />

            <FeatureSection
              question="用户在网站上做了什么？"
              description="不止于页面浏览。追踪按钮点击、表单提交、注册、下载——任何对业务有意义的行为。只需几行代码即可设置自定义事件，或通过会话回放观看真实用户操作。"
              image="/images/screenshot-events.jpg"
              imageAlt="自定义事件追踪"
              imageWidth={480}
              imageHeight={480}
            />

            <FeatureSection
              question="最新的营销活动有效吗？"
              description="并排对比任意两个时间段，即时发现趋势变化。自动追踪 UTM 参数，通过归因分析了解各渠道转化效果，衡量营销活动是否真正带来增长。"
              image="/images/screenshot-compare.jpg"
              imageAlt="时间段对比分析"
              imageWidth={480}
              imageHeight={480}
              reversed
            />

            <FeatureSection
              question="用户为什么放弃结账？"
              description="通过用户旅程追踪访客在网站中的完整路径，发现流失节点。然后观看会话回放——了解用户在哪里困惑、点击了什么、为何离开。"
              image="/images/screenshot-user-journey.jpg"
              imageAlt="用户旅程与会话回放"
              imageWidth={480}
              imageHeight={480}
            />

            <FeatureSection
              question="网站产生了多少收入？"
              description="将事件与金额关联，在 webscount 内直接追踪收入。了解哪些页面、营销活动和用户群体为你的业务带来最大价值。"
              image="/images/screenshot-revenue.jpg"
              imageAlt="收入追踪"
              imageWidth={480}
              imageHeight={480}
              reversed
            />
          </div>

          <div className="flex justify-center py-20">
            <a
              href="#features"
              className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              探索全部功能
            </a>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
