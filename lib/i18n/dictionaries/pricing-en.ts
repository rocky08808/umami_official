import type { PricingContent } from "../pricing-types";

const pricing: PricingContent = {
  meta: {
    title: "Pricing",
    description:
      "Simple usage-based pricing for webscount. Start free with Hobby, scale with Pro and Business, or contact us for Enterprise.",
  },
  title: "Pricing",
  subtitle: "Simple usage based pricing",
  compareTitle: "Compare plans",
  planNames: ["Hobby", "Pro", "Business", "Enterprise"],
  plans: [
    {
      name: "Hobby",
      price: "$0",
      period: "/ month",
      cta: "Get started",
      intro: "Get started:",
      features: [
        "Up to 100K events per month",
        "Up to 3 websites",
        "6 month data retention",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "$20",
      period: "/ month",
      cta: "Try 14-day free trial",
      includes: "Everything in Hobby, plus:",
      features: [
        "1 million events per month included",
        "$0.00003 per additional event",
        "Up to 20 websites",
        "Up to 10 team members",
        "2 year data retention",
        "Email support",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "$200",
      period: "/ month",
      cta: "Try 14-day free trial",
      includes: "Everything in Pro, plus:",
      features: [
        "10 million events per month included",
        "$0.00002 per additional event",
        "Unlimited websites",
        "Unlimited team members",
        "5 year data retention",
        "Session replays",
        "Heatmaps",
        "White-labeling",
        "Streaming API",
        "Email and chat support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      cta: "Contact us",
      includes: "Everything in Business, plus:",
      features: [
        "Single sign on (SAML SSO)",
        "Onboarding support",
        "Uptime SLA",
        "Custom pricing",
        "Custom data retention",
        "Invoice billing",
        "Enterprise support",
      ],
    },
  ],
  comparison: [
    {
      title: "Data",
      rows: [
        {
          label: "Events (included)",
          values: ["100K", "1 million", "10 million", "Custom"],
        },
        {
          label: "Additional events",
          values: ["-", "$0.00003 per event", "$0.00002 per event", "Custom"],
        },
        {
          label: "Data retention",
          values: ["6 months", "2 years", "5 years", "Custom"],
        },
        {
          label: "Data export",
          values: ["yes", "yes", "yes", "yes"],
        },
        {
          label: "Data import",
          values: ["-", "yes", "yes", "yes"],
        },
        {
          label: "Session replays (included)",
          values: ["-", "-", "5,000", "Custom"],
        },
        {
          label: "Additional replays",
          values: ["-", "-", "$0.005 per replay", "Custom"],
        },
      ],
    },
    {
      title: "Analytics",
      rows: [
        {
          label: "Websites",
          values: ["Up to 3", "Up to 20", "Unlimited", "Unlimited"],
        },
        {
          label: "Teams",
          values: ["-", "yes", "yes", "yes"],
        },
        {
          label: "Team members",
          values: ["-", "Up to 10", "Unlimited", "Unlimited"],
        },
        {
          label: "Custom events",
          values: ["yes", "yes", "yes", "yes"],
        },
        {
          label: "Event properties",
          values: ["yes", "yes", "yes", "yes"],
        },
        {
          label: "Session properties",
          values: ["yes", "yes", "yes", "yes"],
        },
        {
          label: "Session replays",
          values: ["-", "-", "yes", "yes"],
        },
        {
          label: "Heatmaps",
          values: ["-", "-", "yes", "yes"],
        },
        {
          label: "API access",
          values: ["Limited", "yes", "yes", "yes"],
        },
        {
          label: "Streaming API",
          values: ["-", "-", "yes", "yes"],
        },
      ],
    },
    {
      title: "Reports",
      rows: [
        { label: "Breakdown", values: ["yes", "yes", "yes", "yes"] },
        { label: "Funnel Analysis", values: ["yes", "yes", "yes", "yes"] },
        { label: "User Retention", values: ["yes", "yes", "yes", "yes"] },
        { label: "UTM parameters", values: ["yes", "yes", "yes", "yes"] },
        { label: "Goals", values: ["yes", "yes", "yes", "yes"] },
        { label: "User Journey", values: ["yes", "yes", "yes", "yes"] },
        { label: "Revenue", values: ["yes", "yes", "yes", "yes"] },
        { label: "Attribution", values: ["yes", "yes", "yes", "yes"] },
      ],
    },
    {
      title: "Monitoring",
      rows: [
        { label: "Realtime events", values: ["yes", "yes", "yes", "yes"] },
        { label: "Custom dashboards", values: ["yes", "yes", "yes", "yes"] },
        { label: "Email reports", values: ["-", "yes", "yes", "yes"] },
      ],
    },
    {
      title: "Customization",
      rows: [
        { label: "White-labeling", values: ["-", "-", "yes", "yes"] },
      ],
    },
    {
      title: "Privacy",
      rows: [
        { label: "GDPR compliant", values: ["yes", "yes", "yes", "yes"] },
        { label: "CCPA compliant", values: ["yes", "yes", "yes", "yes"] },
        {
          label: "No cookie banners required",
          values: ["yes", "yes", "yes", "yes"],
        },
      ],
    },
    {
      title: "Support",
      rows: [
        {
          label: "Community support",
          values: ["yes", "yes", "yes", "yes"],
        },
        { label: "Email support", values: ["-", "yes", "yes", "yes"] },
        {
          label: "Email and chat support",
          values: ["-", "-", "yes", "yes"],
        },
        { label: "Uptime SLA", values: ["-", "-", "-", "yes"] },
        { label: "Enterprise support", values: ["-", "-", "-", "yes"] },
        {
          label: "Onboarding assistance",
          values: ["-", "-", "-", "yes"],
        },
        {
          label: "Designated support engineer",
          values: ["-", "-", "-", "yes"],
        },
      ],
    },
    {
      title: "Security",
      rows: [
        {
          label: "Single sign on (SAML SSO)",
          values: ["-", "-", "-", "yes"],
        },
        { label: "Audit log", values: ["-", "-", "-", "yes"] },
      ],
    },
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    {
      question: "How is usage measured?",
      answer:
        "Usage is measured by the number of events tracked per month. An event is any tracked interaction on your website, such as a pageview or custom event.",
    },
    {
      question: "What happens if I exceed my event limit?",
      answer:
        "On paid plans, additional events are billed at the per-event rate listed for your plan. We'll notify you as you approach your limit.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "Pro and Business plans include a 14-day free trial. No credit card is required to start. You can upgrade, downgrade, or cancel at any time.",
    },
    {
      question: "How will I be billed?",
      answer:
        "Paid plans are billed monthly. Enterprise customers can arrange annual or invoice-based billing.",
    },
    {
      question: "Can I change or cancel my plan at any time?",
      answer:
        "Yes. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes. All plans support data export so you always own your analytics data.",
    },
    {
      question: "Is webscount GDPR compliant?",
      answer:
        "Yes. webscount is designed with privacy in mind and does not use cookies or collect personal data.",
    },
    {
      question: "Where are your servers located?",
      answer:
        "webscount Cloud runs on secure infrastructure with data centers in multiple regions. Contact us for Enterprise data residency requirements.",
    },
    {
      question: "Do I need a cookie consent banner with webscount?",
      answer:
        "No. webscount does not use cookies, so you typically don't need a cookie consent banner.",
    },
    {
      question: "What's the difference between webscount Cloud and self-hosting?",
      answer:
        "webscount Cloud is a fully managed service — we handle hosting, updates, and scaling. Self-hosting gives you full control by running webscount on your own infrastructure.",
    },
  ],
  cta: {
    title: "Try webscount now.",
    button: "Try 14-day free trial",
  },
};

export default pricing;
