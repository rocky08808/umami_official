export type DocsCodeBlock = {
  label: string;
  code: string;
};

export type DocsStep = {
  title: string;
  description: string;
  codes?: DocsCodeBlock[];
};

export type DocsContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  title: string;
  subtitle: string;
  stepsTitle: string;
  steps: DocsStep[];
  customEvents: {
    title: string;
    description: string;
    codes: DocsCodeBlock[];
  };
  cta: {
    title: string;
    button: string;
  };
};
