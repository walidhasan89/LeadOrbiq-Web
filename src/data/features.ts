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
    title: "Faster list preparation",
    description: "Reduce the routine tab switching and manual entry involved in list building.",
    verified: true,
  },
  {
    title: "Cleaner prospect review",
    description: "Keep the businesses you're researching easier to compare and manage.",
    verified: true,
  },
  {
    title: "Reduced tab switching",
    description: "Keep the workflow close to your browser research instead of a separate platform.",
    verified: true,
  },
  {
    title: "Export-ready structure",
    description: "Prepare a list built for handoff to your outreach workflow.",
    verified: false,
  },
  {
    title: "Duplicate control",
    description: "Avoid re-reviewing prospects you've already collected.",
    verified: false,
  },
  {
    title: "Saved searches or projects",
    description: "Pick up a niche and city you've researched before.",
    verified: false,
  },
];

export const detailedFeatures: Feature[] = [
  {
    title: "Google Maps-centered research",
    description: "Work from the place where many local prospecting campaigns begin.",
    verified: true,
  },
  {
    title: "Organized lead collection",
    description: "Turn scattered listing information into a clearer prospecting view.",
    verified: true,
  },
  {
    title: "Less repetitive copying",
    description: "Reduce the routine tab switching and manual entry involved in list building.",
    verified: true,
  },
  {
    title: "Cleaner prospect review",
    description: "Keep the businesses you are researching easier to compare and manage.",
    verified: true,
  },
  {
    title: "Better campaign preparation",
    description: "Create a more consistent foundation for personalized outreach.",
    verified: true,
  },
  {
    title: "Designed as a Chrome extension",
    description:
      "Keep the workflow close to your browser research instead of moving into a complex separate platform.",
    verified: true,
  },
];
