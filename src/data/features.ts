export interface Feature {
  title: string;
  description: string;
  verified: boolean;
}

/**
 * Homepage feature bento grid. Items marked verified: false render a visible
 * "In development" badge and must stay out of any marketing claim until the
 * capability is confirmed against the shipped extension.
 */
export const bentoFeatures: Feature[] = [
  {
    title: "Advanced search filters",
    description: "Narrow Google Maps results by the criteria that matter before you start collecting.",
    verified: true,
  },
  {
    title: "Automatic map expansion",
    description:
      "When a niche runs low in one area, LeadOrbiq automatically expands the map to keep surfacing leads.",
    verified: true,
  },
  {
    title: "Scan Website for contact details",
    description:
      "Click Scan Website and AI reads the business's site to pull email, phone, and social links automatically.",
    verified: true,
  },
  {
    title: "Export to CSV or Excel",
    description: "Send your finished list straight to CSV or Excel for outreach or your CRM.",
    verified: true,
  },
  {
    title: "Google Maps-centered workflow",
    description: "Work from the place where many local prospecting campaigns already begin.",
    verified: true,
  },
  {
    title: "Organized lead collection",
    description: "Turn scattered listing information into a clearer prospecting view.",
    verified: true,
  },
  {
    title: "Cleaner prospect review",
    description: "Keep the businesses you're researching easier to compare and manage.",
    verified: true,
  },
  {
    title: "Duplicate control",
    description: "Avoid re-reviewing prospects you've already collected.",
    verified: false,
  },
];

export const detailedFeatures: Feature[] = [
  {
    title: "Advanced search filters",
    description:
      "Filter Google Maps results by the criteria that matter for your campaign before you start collecting.",
    verified: true,
  },
  {
    title: "Automatic map expansion",
    description:
      "LeadOrbiq automatically expands the map area once a niche is exhausted nearby, so you keep finding leads without restarting your search.",
    verified: true,
  },
  {
    title: "Scan Website for contact details",
    description:
      "Click Scan Website on any lead and AI reads that business's site to pull its email, phone number, and social media links automatically.",
    verified: true,
  },
  {
    title: "Export to CSV or Excel",
    description: "Export your organized list to CSV or Excel whenever you're ready for outreach.",
    verified: true,
  },
  {
    title: "Organized lead collection",
    description: "Turn scattered listing information into a clearer prospecting view.",
    verified: true,
  },
  {
    title: "Designed as a Chrome extension",
    description:
      "Keep the workflow close to your browser research instead of moving into a complex separate platform.",
    verified: true,
  },
];
