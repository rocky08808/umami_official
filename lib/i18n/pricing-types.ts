export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  cta: string;
  intro?: string;
  includes?: string;
  features: string[];
  highlighted?: boolean;
};

export type ComparisonRow = {
  label: string;
  values: [string, string, string, string];
};

export type ComparisonSection = {
  title: string;
  rows: ComparisonRow[];
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export type PricingContent = {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  subtitle: string;
  planNames: [string, string, string, string];
  plans: PricingPlan[];
  comparison: ComparisonSection[];
  faqTitle: string;
  faq: PricingFaq[];
  cta: {
    title: string;
    button: string;
  };
};
