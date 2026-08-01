/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_CHROME_STORE_URL: string;
  readonly PUBLIC_CONTACT_ENDPOINT: string;
  readonly PUBLIC_ANALYTICS_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
