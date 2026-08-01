export interface SEOProps {
  title: string;
  description: string;
  pathname: string;
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
}

export type ThemePreference = "light" | "dark" | "system";
