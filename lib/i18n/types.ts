export type FeatureItem = {
  question: string;
  description: string;
  imageAlt: string;
};

export type FooterCategory = {
  title: string;
  links: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  nav: {
    features: string;
    pricing: string;
    docs: string;
    login: string;
    signup: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  trusted: {
    label: string;
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    explore: string;
    items: FeatureItem[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    categories: FooterCategory[];
    copyright: string;
  };
};
