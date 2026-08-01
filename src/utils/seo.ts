import { siteConfig } from "@data/site";

/** Builds an absolute, trailing-slash-normalized canonical URL for a route. */
export function canonicalUrl(pathname: string): string {
  const path = pathname.endsWith("/") || pathname.includes(".") ? pathname : `${pathname}/`;
  return new URL(path, siteConfig.url).toString();
}

export interface BreadcrumbEntry {
  label: string;
  href: string;
}

export function breadcrumbSchema(entries: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.label,
      item: canonicalUrl(entry.href),
    })),
  };
}

interface FAQLike {
  question: string;
  answer: string;
}

/** Only pass FAQ items that are also rendered as visible page content. */
export function faqSchema(items: FAQLike[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
