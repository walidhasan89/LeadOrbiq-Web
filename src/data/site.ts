/**
 * Central, typed site configuration. Values sourced from environment
 * variables fall back to safe, clearly-labeled placeholders so the site
 * still builds when `.env` is not configured — see `.env.example`.
 */

const FALLBACK_CHROME_STORE_URL = "https://chrome.google.com/webstore/category/extensions";

export const siteConfig = {
  name: "LeadOrbiq",
  tagline: "Turn Google Maps research into organized prospect lists.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://leadorbiq.com",
  chromeStoreUrl: import.meta.env.PUBLIC_CHROME_STORE_URL || FALLBACK_CHROME_STORE_URL,
  chromeStoreUrlIsVerified: Boolean(import.meta.env.PUBLIC_CHROME_STORE_URL),
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT || "",
  analyticsId: import.meta.env.PUBLIC_ANALYTICS_ID || "",
  supportEmail: "support@leadorbiq.com",
  social: {
    // No verified, active social profiles were supplied with this build.
    // Do not publish placeholder social icons that link nowhere real.
  },
} as const;

export type SiteConfig = typeof siteConfig;
