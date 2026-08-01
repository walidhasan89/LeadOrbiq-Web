export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export const howItWorksSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Search your target market",
    description: "Choose the service, industry, and location you want to research in Google Maps.",
  },
  {
    step: 2,
    title: "Review relevant businesses",
    description: "Look through the results and focus on companies that match your campaign.",
  },
  {
    step: 3,
    title: "Collect and organize details",
    description:
      "Use LeadOrbiq to reduce repetitive copying and keep prospect information in a more consistent structure.",
  },
  {
    step: 4,
    title: "Continue your outreach workflow",
    description:
      "Review your list, verify important details, and use the information to create relevant, personalized outreach.",
  },
];

export const stickyStorySteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Find the right market",
    description: "Start with the niche, service, and location that match your offer.",
  },
  {
    step: 2,
    title: "Review before collecting",
    description: "Good outreach begins with relevant prospects, not the largest possible list.",
  },
  {
    step: 3,
    title: "Organize useful details",
    description: "Keep the information you need in a consistent, reviewable structure.",
  },
  {
    step: 4,
    title: "Verify and personalize",
    description:
      "Check important details before contacting a business and tailor every message to the prospect.",
  },
];

export const manualWorkflow: string[] = [
  "Search for businesses",
  "Open each listing",
  "Copy information",
  "Switch to a spreadsheet",
  "Paste and clean each row",
  "Repeat",
];

export const leadOrbiqWorkflow: string[] = [
  "Search your target market",
  "Review relevant businesses",
  "Collect useful details",
  "Organize your list",
  "Prepare for outreach",
];

export const comparisonManual: string[] = [
  "Repetitive copy and paste",
  "Inconsistent spreadsheet rows",
  "Too many open tabs",
  "Easy-to-miss details",
  "Slow list preparation",
];

export const comparisonLeadOrbiq: string[] = [
  "Guided lead collection",
  "More consistent organization",
  "Fewer repeated actions",
  "Easier list review",
  "Clearer campaign preparation",
];

export const outcomeRail: string[] = [
  "Research faster",
  "Organize consistently",
  "Reduce repetitive copying",
  "Prepare better outreach",
];

export interface DataField {
  label: string;
  verified: boolean;
}

/**
 * Only "Business name" and "Category" reflect confirmed positioning from
 * docs/01-PRODUCT-BRIEF.md (business info organized around Maps prospecting).
 * Every other field is unverified and rendered with an explicit badge.
 */
export const dataFields: DataField[] = [
  { label: "Business name", verified: true },
  { label: "Category", verified: true },
  { label: "Location", verified: false },
  { label: "Website", verified: false },
  { label: "Phone", verified: false },
  { label: "Rating", verified: false },
  { label: "Review count", verified: false },
  { label: "Social links", verified: false },
  { label: "Email", verified: false },
  { label: "Notes", verified: false },
  { label: "Collection status", verified: false },
];
