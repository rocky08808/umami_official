import type { Dictionary } from "../types";
import pricing from "./pricing-en";

const en: Dictionary = {
  meta: {
    title: "webscount – Privacy-Focused Website Statistics Analytics Tool",
    description:
      "webscount is a privacy-focused web analytics platform. Deploy in minutes, track traffic, conversions, and revenue in real time — no cookies required. A lightweight Google Analytics alternative.",
    keywords: [
      "webscount",
      "web analytics",
      "website analytics",
      "privacy analytics",
      "cookie-free analytics",
      "website statistics",
      "visitor analytics",
      "Google Analytics alternative",
      "traffic analysis",
      "conversion tracking",
    ],
    ogImageAlt: "webscount analytics dashboard preview",
  },
  nav: {
    features: "Features",
    pricing: "Pricing",
    docs: "Docs",
    login: "Log in",
    signup: "Get started",
  },
  hero: {
    badge: "Privacy-first · No cookies",
    title: "Powerful analytics,",
    titleAccent: "without the complexity",
    description:
      "Set up in minutes and get insights immediately. Lightweight, fast, and respectful of user privacy.",
    ctaPrimary: "Get started for free",
    ctaSecondary: "Explore features",
    imageAlt: "webscount analytics dashboard preview",
  },
  trusted: {
    label: "Trusted by thousands of companies",
  },
  features: {
    eyebrow: "Answers, faster",
    title: "webscount helps you get the answers you need",
    description:
      "From traffic and campaigns to funnels, revenue, and user behavior — understand what's happening on your site without digging through cluttered reports.",
    explore: "Explore all features",
    items: [
      {
        question: "How many visitors did I get last week?",
        description:
          "Pageviews, visitors, bounce rate, and average visit time — all on one dashboard. Pick any date range, filter by country or device, and get the full picture in seconds.",
        imageAlt: "Key metrics dashboard",
      },
      {
        question: "Where are my visitors coming from?",
        description:
          "See where your audience is located, what devices and browsers they use, and which sites send you traffic — without tracking individual users.",
        imageAlt: "Location and device analytics",
      },
      {
        question: "What are people doing on my site?",
        description:
          "Go beyond pageviews. Track clicks, form submissions, signups, and downloads. Set up custom events with a few lines of code, or watch session replays.",
        imageAlt: "Custom event tracking",
      },
      {
        question: "Is my latest campaign working?",
        description:
          "Compare any two time periods side by side. Track UTM parameters automatically and see which channels drive the most conversions.",
        imageAlt: "Period comparison analytics",
      },
      {
        question: "Why did users abandon checkout?",
        description:
          "Trace the exact path visitors take through your site and spot where they drop off. Then watch session replays to see what happened.",
        imageAlt: "User journey and session replay",
      },
      {
        question: "How much revenue is my site generating?",
        description:
          "Tie events to dollar amounts and track revenue inside webscount. See which pages, campaigns, and segments drive the most value.",
        imageAlt: "Revenue tracking",
      },
    ],
  },
  cta: {
    title: "Try webscount now",
    description:
      "Start a 14-day free trial. No credit card required. See your first data in minutes.",
    button: "Start 14-day free trial",
  },
  footer: {
    description:
      "Privacy-focused website statistics analytics tool that helps you understand user behavior without tracking personal data.",
    categories: [
      { title: "Product", links: ["Features", "Pricing"] },
      { title: "Resources", links: ["Docs", "API"] },
      { title: "Company", links: ["About", "Privacy", "Terms"] },
    ],
    copyright: "All rights reserved.",
  },
  pricing,
};

export default en;
