export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  billingNote: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

/**
 * LeadOrbiq is one product sold on three billing terms, not three feature
 * tiers — every plan gets full access to the extension.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$6.99",
    period: "/month",
    billingNote: "Billed monthly. Cancel anytime.",
    description: "Full access, billed month to month.",
    features: [
      "Full access to the LeadOrbiq Chrome extension",
      "Google Maps-centered lead collection",
      "Organized, review-ready prospect lists",
      "Cancel anytime — no long-term commitment",
    ],
    ctaLabel: "Add to Chrome",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "$49.99",
    period: "/year",
    billingNote: "About $4.17/month — save over paying monthly",
    description: "The best ongoing value for regular prospecting.",
    features: [
      "Everything in Monthly",
      "Lower effective monthly cost",
      "Priority email support",
      "Early access to new features",
    ],
    ctaLabel: "Add to Chrome",
    featured: true,
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: "$99.99",
    period: "one-time",
    billingNote: "Pay once. No recurring charges.",
    description: "One payment, lifetime access to LeadOrbiq.",
    features: [
      "Everything in Yearly",
      "One-time payment — no renewals, ever",
      "All future updates included",
      "Best long-term value",
    ],
    ctaLabel: "Add to Chrome",
  },
];
