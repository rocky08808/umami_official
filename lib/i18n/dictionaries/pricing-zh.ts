import type { PricingContent } from "../pricing-types";

const pricing: PricingContent = {
  meta: {
    title: "定价",
    description:
      "webscount 按用量计费，简单透明。免费 Hobby 起步，Pro 与 Business 随业务扩展，Enterprise 可联系我们定制方案。",
  },
  title: "定价",
  subtitle: "按用量计费，简单透明",
  compareTitle: "方案对比",
  planNames: ["Hobby", "Pro", "Business", "Enterprise"],
  plans: [
    {
      name: "Hobby",
      price: "$0",
      period: "/ 月",
      cta: "免费开始",
      intro: "包含：",
      features: [
        "每月最多 10 万事件",
        "最多 3 个网站",
        "6 个月数据保留",
        "社区支持",
      ],
    },
    {
      name: "Pro",
      price: "$20",
      period: "/ 月",
      cta: "14 天免费试用",
      includes: "包含 Hobby 全部功能，另加：",
      features: [
        "每月 100 万事件",
        "超出部分 $0.00003/事件",
        "最多 20 个网站",
        "最多 10 名团队成员",
        "2 年数据保留",
        "邮件支持",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "$200",
      period: "/ 月",
      cta: "14 天免费试用",
      includes: "包含 Pro 全部功能，另加：",
      features: [
        "每月 1000 万事件",
        "超出部分 $0.00002/事件",
        "无限网站",
        "无限团队成员",
        "5 年数据保留",
        "会话回放",
        "热力图",
        "白标定制",
        "流式 API",
        "邮件与在线聊天支持",
      ],
    },
    {
      name: "Enterprise",
      price: "定制",
      period: "",
      cta: "联系我们",
      includes: "包含 Business 全部功能，另加：",
      features: [
        "单点登录（SAML SSO）",
        "上线协助",
        "可用性 SLA",
        "定制定价",
        "定制数据保留",
        "发票结算",
        "企业级支持",
      ],
    },
  ],
  comparison: [
    {
      title: "数据",
      rows: [
        {
          label: "事件（含）",
          values: ["10 万", "100 万", "1000 万", "定制"],
        },
        {
          label: "额外事件",
          values: ["-", "$0.00003/事件", "$0.00002/事件", "定制"],
        },
        {
          label: "数据保留",
          values: ["6 个月", "2 年", "5 年", "定制"],
        },
        {
          label: "数据导出",
          values: ["yes", "yes", "yes", "yes"],
        },
        {
          label: "数据导入",
          values: ["-", "yes", "yes", "yes"],
        },
        {
          label: "会话回放（含）",
          values: ["-", "-", "5,000", "定制"],
        },
        {
          label: "额外回放",
          values: ["-", "-", "$0.005/回放", "定制"],
        },
      ],
    },
    {
      title: "分析",
      rows: [
        {
          label: "网站数量",
          values: ["最多 3 个", "最多 20 个", "无限", "无限"],
        },
        { label: "团队", values: ["-", "yes", "yes", "yes"] },
        {
          label: "团队成员",
          values: ["-", "最多 10 人", "无限", "无限"],
        },
        { label: "自定义事件", values: ["yes", "yes", "yes", "yes"] },
        { label: "事件属性", values: ["yes", "yes", "yes", "yes"] },
        { label: "会话属性", values: ["yes", "yes", "yes", "yes"] },
        { label: "会话回放", values: ["-", "-", "yes", "yes"] },
        { label: "热力图", values: ["-", "-", "yes", "yes"] },
        {
          label: "API 访问",
          values: ["有限", "yes", "yes", "yes"],
        },
        { label: "流式 API", values: ["-", "-", "yes", "yes"] },
      ],
    },
    {
      title: "报表",
      rows: [
        { label: "维度拆解", values: ["yes", "yes", "yes", "yes"] },
        { label: "漏斗分析", values: ["yes", "yes", "yes", "yes"] },
        { label: "用户留存", values: ["yes", "yes", "yes", "yes"] },
        { label: "UTM 参数", values: ["yes", "yes", "yes", "yes"] },
        { label: "目标", values: ["yes", "yes", "yes", "yes"] },
        { label: "用户旅程", values: ["yes", "yes", "yes", "yes"] },
        { label: "收入", values: ["yes", "yes", "yes", "yes"] },
        { label: "归因", values: ["yes", "yes", "yes", "yes"] },
      ],
    },
    {
      title: "监控",
      rows: [
        { label: "实时事件", values: ["yes", "yes", "yes", "yes"] },
        { label: "自定义仪表盘", values: ["yes", "yes", "yes", "yes"] },
        { label: "邮件报告", values: ["-", "yes", "yes", "yes"] },
      ],
    },
    {
      title: "定制",
      rows: [{ label: "白标定制", values: ["-", "-", "yes", "yes"] }],
    },
    {
      title: "隐私",
      rows: [
        { label: "GDPR 合规", values: ["yes", "yes", "yes", "yes"] },
        { label: "CCPA 合规", values: ["yes", "yes", "yes", "yes"] },
        {
          label: "无需 Cookie 横幅",
          values: ["yes", "yes", "yes", "yes"],
        },
      ],
    },
    {
      title: "支持",
      rows: [
        { label: "社区支持", values: ["yes", "yes", "yes", "yes"] },
        { label: "邮件支持", values: ["-", "yes", "yes", "yes"] },
        {
          label: "邮件与在线聊天",
          values: ["-", "-", "yes", "yes"],
        },
        { label: "可用性 SLA", values: ["-", "-", "-", "yes"] },
        { label: "企业级支持", values: ["-", "-", "-", "yes"] },
        { label: "上线协助", values: ["-", "-", "-", "yes"] },
        {
          label: "专属支持工程师",
          values: ["-", "-", "-", "yes"],
        },
      ],
    },
    {
      title: "安全",
      rows: [
        {
          label: "单点登录（SAML SSO）",
          values: ["-", "-", "-", "yes"],
        },
        { label: "审计日志", values: ["-", "-", "-", "yes"] },
      ],
    },
  ],
  faqTitle: "常见问题",
  faq: [
    {
      question: "用量如何计算？",
      answer:
        "用量按每月追踪的事件数量计算。事件包括页面浏览、自定义事件等网站上被追踪的交互。",
    },
    {
      question: "超出事件上限会怎样？",
      answer:
        "付费方案会按方案标注的单价对超出部分计费，接近上限时我们会提前通知你。",
    },
    {
      question: "免费试用如何运作？",
      answer:
        "Pro 和 Business 提供 14 天免费试用，无需信用卡。可随时升级、降级或取消。",
    },
    {
      question: "如何计费？",
      answer: "付费方案按月计费。Enterprise 客户可协商年付或发票结算。",
    },
    {
      question: "可以随时更改或取消方案吗？",
      answer: "可以。你可在账户设置中随时升级、降级或取消订阅。",
    },
    {
      question: "可以导出数据吗？",
      answer: "可以。所有方案均支持数据导出，数据始终归你所有。",
    },
    {
      question: "webscount 是否符合 GDPR？",
      answer:
        "符合。webscount 注重隐私设计，不使用 Cookie，也不收集个人数据。",
    },
    {
      question: "服务器在哪里？",
      answer:
        "webscount Cloud 运行在安全的多区域基础设施上。Enterprise 客户可联系我们了解数据驻留要求。",
    },
    {
      question: "使用 webscount 需要 Cookie 同意横幅吗？",
      answer: "通常不需要。webscount 不使用 Cookie。",
    },
    {
      question: "webscount Cloud 和自托管有什么区别？",
      answer:
        "Cloud 是完全托管服务，我们负责托管、更新与扩容。自托管则在你自己的基础设施上运行，拥有完全控制权。",
    },
  ],
  cta: {
    title: "立即体验 webscount。",
    button: "14 天免费试用",
  },
};

export default pricing;
