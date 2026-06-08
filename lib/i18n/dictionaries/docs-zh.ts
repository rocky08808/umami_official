import type { DocsContent } from "../docs-types";

const SCRIPT = "https://cloud.webscount.com/script.js";

const docs: DocsContent = {
  meta: {
    title: "文档 – webscount 接入指南",
    description:
      "了解如何在几分钟内接入 webscount 网站统计。注册账号、添加追踪代码，即可开始收集注重隐私的网站访问数据。",
    keywords: [
      "webscount 文档",
      "网站统计接入",
      "追踪代码安装",
      "网站分析教程",
      "Next.js 统计",
    ],
    ogImageAlt: "webscount 接入文档",
  },
  title: "文档",
  subtitle: "几分钟内完成 webscount 接入",
  stepsTitle: "接入流程",
  steps: [
    {
      title: "注册账号",
      description:
        "前往 webscount Cloud 注册并登录控制台。免费 Hobby 方案即可开始使用。",
    },
    {
      title: "添加网站",
      description:
        "进入 设置 → 网站 → 添加网站，填写域名（如 example.com）并保存。复制生成的 Website ID，下一步会用到。",
    },
    {
      title: "安装追踪代码",
      description:
        "将以下代码粘贴到需要统计的每个页面的 <head> 中，并将 YOUR_WEBSITE_ID 替换为控制台中的 Website ID。",
      codes: [
        {
          label: "HTML",
          code: `<script defer src="${SCRIPT}" data-website-id="YOUR_WEBSITE_ID"></script>`,
        },
        {
          label: "Next.js (App Router)",
          code: `import Script from "next/script";

<Script
  defer
  src="${SCRIPT}"
  data-website-id="YOUR_WEBSITE_ID"
  strategy="afterInteractive"
/>`,
        },
      ],
    },
    {
      title: "验证数据",
      description:
        "访问你的网站，然后打开 webscount 控制台。几秒内应能看到页面浏览记录。若无数据，请检查 Website ID 是否正确，或是否被广告拦截插件屏蔽。",
    },
  ],
  customEvents: {
    title: "自定义事件（可选）",
    description:
      "使用 webscount.track() 记录按钮点击、注册等自定义行为，在点击回调中调用即可：",
    codes: [
      {
        label: "JavaScript",
        code: `// 记录简单事件
webscount.track("signup-button");

// 附带额外数据
webscount.track("purchase", { plan: "pro", amount: 20 });`,
      },
    ],
  },
  cta: {
    title: "准备好开始了吗？",
    button: "打开 webscount Cloud",
  },
};

export default docs;
