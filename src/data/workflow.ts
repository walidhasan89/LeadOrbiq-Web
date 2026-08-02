export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export const howItWorksSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Search your target market",
    description:
      "Choose the service, industry, and location you want to research in Google Maps, then narrow results with advanced filters.",
  },
  {
    step: 2,
    title: "Review relevant businesses",
    description:
      "Look through the results and focus on companies that match your campaign. When a niche runs low in one area, LeadOrbiq automatically expands the map to keep surfacing leads.",
  },
  {
    step: 3,
    title: "Collect details and scan websites",
    description:
      "Collect business details, then click Scan Website to have LeadOrbiq's AI pull email, phone, and social media links from each site automatically.",
  },
  {
    step: 4,
    title: "Export and continue outreach",
    description:
      "Export your organized list to CSV or Excel, verify important details, and use the information to create relevant, personalized outreach.",
  },
];

export const stickyStorySteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Find the right market",
    description: "Start with the niche, service, and location that match your offer, then apply filters to focus the results.",
  },
  {
    step: 2,
    title: "Review before collecting",
    description:
      "Good outreach begins with relevant prospects, not the largest possible list — LeadOrbiq expands the map automatically once a niche is exhausted nearby.",
  },
  {
    step: 3,
    title: "Scan websites for contact details",
    description:
      "Click Scan Website and LeadOrbiq's AI reads the business's site to pull email, phone, and social media links for you.",
  },
  {
    step: 4,
    title: "Export and personalize",
    description:
      "Export your list to CSV or Excel, verify important details, and tailor every message to the prospect.",
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
  "Search your target market with advanced filters",
  "Review relevant businesses (map auto-expands when a niche runs low)",
  "Collect useful details",
  "Scan websites for email, phone, and social links",
  "Organize your list",
  "Export to CSV or Excel",
];

export const comparisonManual: string[] = [
  "Repetitive copy and paste",
  "Inconsistent spreadsheet rows",
  "Too many open tabs",
  "Manually digging through every website for contact info",
  "Stuck once one area runs out of leads",
  "Easy-to-miss details",
  "Slow list preparation",
];

export const comparisonLeadOrbiq: string[] = [
  "Guided lead collection",
  "More consistent organization",
  "Fewer repeated actions",
  "AI scans each website for email, phone, and social links",
  "Map auto-expands to keep finding leads",
  "Easier list review",
  "Export to CSV or Excel in a click",
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
 * "Business name" and "Category" come from Google Maps listing data.
 * "Website", "Phone", "Email", and "Social links" are confirmed via the
 * Scan Website feature, which reads each business's site with AI to pull
 * those details automatically. Remaining fields are still unverified and
 * rendered with an explicit badge.
 */
export const dataFields: DataField[] = [
  { label: "Business name", verified: true },
  { label: "Category", verified: true },
  { label: "Website", verified: true },
  { label: "Email", verified: true },
  { label: "Phone", verified: true },
  { label: "Social links", verified: true },
  { label: "Location", verified: false },
  { label: "Rating", verified: false },
  { label: "Review count", verified: false },
  { label: "Notes", verified: false },
  { label: "Collection status", verified: false },
];
