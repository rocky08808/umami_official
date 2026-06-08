import type { DocsContent } from "../docs-types";

const SCRIPT = "https://cloud.webscount.com/script.js";

const docs: DocsContent = {
  meta: {
    title: "Documentation – webscount Integration Guide",
    description:
      "Learn how to integrate webscount analytics in minutes. Sign up, add the tracking script, and start collecting privacy-friendly website statistics.",
    keywords: [
      "webscount docs",
      "analytics integration",
      "tracking script setup",
      "website statistics guide",
      "Next.js analytics",
    ],
    ogImageAlt: "webscount integration documentation",
  },
  title: "Documentation",
  subtitle: "Get webscount running on your site in a few minutes",
  stepsTitle: "Integration steps",
  steps: [
    {
      title: "Create an account",
      description:
        "Sign up at webscount Cloud and log in to your dashboard. The free Hobby plan is enough to get started.",
    },
    {
      title: "Add your website",
      description:
        'Go to Settings → Websites → Add website. Enter your domain (e.g. example.com) and save. Copy the Website ID — you will need it in the next step.',
    },
    {
      title: "Install the tracking script",
      description:
        "Paste the snippet below into the <head> of every page you want to track. Replace YOUR_WEBSITE_ID with the ID from your dashboard.",
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
      title: "Verify your data",
      description:
        "Visit your website, then open the webscount dashboard. You should see a pageview within a few seconds. If nothing appears, check that the Website ID is correct and the script is not blocked by an ad blocker.",
    },
  ],
  customEvents: {
    title: "Track custom events (optional)",
    description:
      "Use webscount.track() to record button clicks, signups, or any custom interaction. Call it from your click handlers:",
    codes: [
      {
        label: "JavaScript",
        code: `// Track a simple event
webscount.track("signup-button");

// Track with extra data
webscount.track("purchase", { plan: "pro", amount: 20 });`,
      },
    ],
  },
  cta: {
    title: "Ready to get started?",
    button: "Open webscount Cloud",
  },
};

export default docs;
