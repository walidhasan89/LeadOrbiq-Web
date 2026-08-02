export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaq: FAQItem[] = [
  {
    question: "What is LeadOrbiq?",
    answer:
      "LeadOrbiq is a Chrome extension designed to help users collect and organize business lead information during local-market research.",
  },
  {
    question: "Is LeadOrbiq a Chrome extension?",
    answer:
      "Yes. LeadOrbiq is designed to work as a Chrome extension rather than a separate standalone web application.",
  },
  {
    question: "Does LeadOrbiq work with Google Maps?",
    answer:
      "LeadOrbiq is primarily positioned around local-business prospecting through Google Maps. Exact compatibility and supported workflows should match the current extension release.",
  },
  {
    question: "What business information can it collect?",
    answer:
      "LeadOrbiq is built to collect and organize useful business details as you research prospects on Google Maps, starting with business name and category. Check the Features page for the current confirmed field list.",
  },
  {
    question: "Can I export my lead list?",
    answer:
      "Exporting your organized list is part of the LeadOrbiq roadmap. Supported formats will be published here as soon as they're finalized.",
  },
  {
    question: "Does LeadOrbiq find email addresses?",
    answer: "Email discovery isn't a confirmed capability yet. We'll update this answer as soon as it is.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "There's no free plan, but every paid plan gets full access to LeadOrbiq. Pricing starts at $6.99/month, with Yearly and Lifetime options available — see the Pricing page for details.",
  },
  {
    question: "Does LeadOrbiq store my data?",
    answer:
      "Our Privacy Policy covers what's confirmed about data handling today. We'd rather point you there than overstate it here.",
  },
  {
    question: "Can teams use LeadOrbiq?",
    answer:
      "Team seats aren't part of the current plans. If you need multiple people using LeadOrbiq, reach out through the Contact page and we'll help.",
  },
  {
    question: "How should I use collected lead data responsibly?",
    answer:
      "Use business information only for lawful purposes. Verify important details, follow relevant marketing and privacy laws, respect platform terms, avoid bulk spam, personalize messages, and honor opt-out requests.",
  },
];
