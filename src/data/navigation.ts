export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const primaryNav: NavItem[] = [
  {
    label: "Product",
    href: "/features/",
    description: "How LeadOrbiq organizes Google Maps prospecting.",
    children: [
      { label: "Features", href: "/features/", description: "What LeadOrbiq helps you do." },
      { label: "Use Cases", href: "/use-cases/", description: "Workflows by team and role." },
      { label: "Pricing", href: "/pricing/", description: "Plans and installation." },
    ],
  },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Use Cases", href: "/use-cases/" },
  { label: "Pricing", href: "/pricing/" },
  {
    label: "Resources",
    href: "/help/",
    description: "Guides and answers for using LeadOrbiq.",
    children: [
      { label: "Help Center", href: "/help/", description: "Installation and workflow guides." },
      { label: "FAQ", href: "/#faq", description: "Common questions, answered plainly." },
      { label: "Contact", href: "/contact/", description: "Reach the LeadOrbiq team." },
    ],
  },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features/" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Use Cases", href: "/use-cases/" },
    { label: "Pricing", href: "/pricing/" },
  ],
  resources: [
    { label: "Help Center", href: "/help/" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact/" },
  ],
  company: [
    { label: "Product Story", href: "/#problem" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ],
} satisfies Record<string, NavLink[]>;

export const homepageSections = [
  { id: "hero", label: "Overview" },
  { id: "outcomes", label: "Outcomes" },
  { id: "problem", label: "Problem" },
  { id: "how-it-works", label: "How It Works" },
  { id: "features", label: "Features" },
  { id: "story", label: "Workflow" },
  { id: "use-cases", label: "Use Cases" },
  { id: "data", label: "Data" },
  { id: "comparison", label: "Comparison" },
  { id: "trust", label: "Trust" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Get Started" },
] as const;
