export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type TermsContent = LegalPageContent;
export type PrivacyContent = LegalPageContent;
