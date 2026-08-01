export interface UseCase {
  slug: string;
  audience: string;
  summary: string;
  workflow: string[];
}

export const useCases: UseCase[] = [
  {
    slug: "local-seo-agencies",
    audience: "Local SEO agencies",
    summary:
      "Research businesses by service and city, then organize prospects for audit-based outreach.",
    workflow: [
      "Search a service and city combination that matches your target package",
      "Review listings for signs of weak local SEO",
      "Collect and organize the businesses worth auditing",
      "Hand the list to your outreach or audit workflow",
    ],
  },
  {
    slug: "web-design-agencies",
    audience: "Web design agencies",
    summary:
      "Find businesses with outdated or underperforming websites and prepare a focused prospect list.",
    workflow: [
      "Search your target industry and service area",
      "Review each business's web presence as you go",
      "Organize the prospects that fit your ideal client profile",
      "Prepare a shortlist for personalized outreach",
    ],
  },
  {
    slug: "freelancers",
    audience: "Freelancers",
    summary: "Spend less time preparing lists and more time creating relevant offers and messages.",
    workflow: [
      "Search a niche you already understand",
      "Review businesses that match your ideal project",
      "Collect the details you need for a tailored pitch",
      "Move straight into writing outreach instead of data entry",
    ],
  },
  {
    slug: "b2b-sales-teams",
    audience: "B2B sales teams",
    summary: "Organize local-market research before qualification and outreach.",
    workflow: [
      "Search target accounts by market and territory",
      "Review relevant businesses against your ICP",
      "Collect and organize details for the qualification stage",
      "Pass a consistent list into your outreach or CRM workflow",
    ],
  },
  {
    slug: "lead-generation-specialists",
    audience: "Lead-generation specialists",
    summary: "Create more consistent prospecting workflows across niches, cities, and campaigns.",
    workflow: [
      "Repeat the same structured search across niches and cities",
      "Review results with a consistent standard each time",
      "Collect and organize leads the same way for every campaign",
      "Deliver predictable, ready-to-use lists to clients or teams",
    ],
  },
  {
    slug: "consultants",
    audience: "Consultants",
    summary:
      "Research potential clients and prepare a structured starting point for personalized conversations.",
    workflow: [
      "Search the industry and location you specialize in",
      "Review businesses that could benefit from your services",
      "Organize prospect details before your first conversation",
      "Walk into outreach with real context, not a blank page",
    ],
  },
];
