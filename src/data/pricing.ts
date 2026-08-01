export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceIsVerified: false;
  billingNote: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

/**
 * No pricing has been confirmed for LeadOrbiq. Every value here is a
 * verified placeholder — see docs/09-VERIFICATION-AND-LAUNCH-CHECKLIST.md.
 * `priceIsVerified` is typed `false` on purpose so a real value can't be
 * dropped in without a corresponding type update, forcing a deliberate
 * review before this ships as fact.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "[VERIFY]",
    priceIsVerified: false,
    billingNote: "Pricing not yet confirmed",
    description: "For trying LeadOrbiq on a small, occasional research workflow.",
    features: [
      "Core Google Maps lead collection [VERIFY]",
      "Usage limits apply [VERIFY]",
      "Community support [VERIFY]",
    ],
    ctaLabel: "Add to Chrome",
  },
  {
    id: "solo",
    name: "Solo",
    price: "[VERIFY]",
    priceIsVerified: false,
    billingNote: "Pricing not yet confirmed",
    description: "For freelancers and individual prospectors running regular campaigns.",
    features: [
      "Everything in Free [VERIFY]",
      "Higher usage limits [VERIFY]",
      "Priority support [VERIFY]",
    ],
    ctaLabel: "Add to Chrome",
    featured: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: "[VERIFY]",
    priceIsVerified: false,
    billingNote: "Pricing not yet confirmed",
    description: "For agencies and teams building lead lists at scale.",
    features: [
      "Everything in Solo [VERIFY]",
      "Team features [VERIFY]",
      "Highest usage limits [VERIFY]",
    ],
    ctaLabel: "Add to Chrome",
  },
];
