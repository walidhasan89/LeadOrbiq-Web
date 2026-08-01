import type { APIRoute } from "astro";
import { siteConfig } from "@data/site";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", siteConfig.url).toString()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
