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
      "LeadOrbiq collects business name and category from Google Maps, and can pull a business's website, email, phone number, and social media links by scanning its site with AI. Check the Features page for the current confirmed field list.",
  },
  {
    question: "Can I export my lead list?",
    answer:
      "Yes. Export your organized list to CSV or Excel whenever you're ready to move into outreach or your CRM.",
  },
  {
    question: "Does LeadOrbiq find email addresses?",
    answer:
      "Yes. Click Scan Website on a collected lead and LeadOrbiq's AI reads that business's site to pull its email address, phone number, and social media links automatically.",
  },
  {
    question: "Can I filter my search results?",
    answer:
      "Yes. LeadOrbiq adds advanced filters on top of your Google Maps search so you can narrow results down before you start collecting.",
  },
  {
    question: "What happens when a niche runs out of businesses in an area?",
    answer:
      "LeadOrbiq automatically expands the map area to keep surfacing new businesses in that niche, so you don't have to restart your search manually.",
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
