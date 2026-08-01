# Technical Architecture

## Required stack

This website must use the same core stack as Inoviqa:

- Astro
- TypeScript
- Tailwind CSS
- Content Collections
- Static Site Generation
- Vite

## Architecture principles

- Static-first
- Minimal JavaScript
- Reusable components
- Strong typing
- Centralized design tokens
- Content separated from layout
- Progressive enhancement
- Accessible native HTML first
- Clear folder organization
- Easy future maintenance

## Suggested project structure

```text
/
├─ public/
│  ├─ fonts/
│  ├─ icons/
│  ├─ images/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ site.webmanifest
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ common/
│  │  ├─ navigation/
│  │  ├─ sections/
│  │  ├─ product-visuals/
│  │  ├─ forms/
│  │  └─ seo/
│  ├─ content/
│  │  ├─ config.ts
│  │  ├─ resources/
│  │  └─ help/
│  ├─ data/
│  │  ├─ navigation.ts
│  │  ├─ features.ts
│  │  ├─ use-cases.ts
│  │  ├─ pricing.ts
│  │  └─ faq.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ MarketingLayout.astro
│  │  └─ LegalLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ features.astro
│  │  ├─ use-cases.astro
│  │  ├─ pricing.astro
│  │  ├─ help/
│  │  ├─ contact.astro
│  │  ├─ privacy-policy.astro
│  │  ├─ terms-of-service.astro
│  │  └─ 404.astro
│  ├─ scripts/
│  ├─ styles/
│  │  ├─ global.css
│  │  ├─ tokens.css
│  │  └─ utilities.css
│  ├─ types/
│  └─ utils/
├─ docs/
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ tsconfig.json
└─ package.json
```

Adapt this structure to the existing repository rather than duplicating established conventions.

## Astro rules

- Prefer `.astro` components for static UI.
- Use client directives only where required.
- Avoid hydrating complete sections for one small interaction.
- Use view transitions only if they remain accessible and stable.
- Keep all route metadata centralized through an SEO component.
- Use Astro's built-in asset optimization when appropriate.
- Use content collections for help articles and resources.
- Generate static pages at build time.

## TypeScript rules

- Enable strict mode.
- Avoid `any`.
- Type component props.
- Type structured data objects.
- Validate content collections.
- Keep event-handler code small and testable.
- Guard browser-only APIs.

## Tailwind rules

- Use Tailwind for layout and component styling.
- Use CSS custom properties for theme tokens.
- Do not fill templates with unreadable repeated utility strings.
- Extract reusable patterns into components.
- Use arbitrary values sparingly.
- Keep responsive rules intentional.
- Maintain consistent container and spacing utilities.

## JavaScript policy

Use JavaScript only for:

- Theme persistence
- Mobile navigation
- Accessible dropdown behavior
- Dialogs
- Active section tracking
- Scroll progress
- Tabs
- FAQ enhancement
- Form validation and submission
- Product-demo controls
- Motion that cannot be achieved responsibly with CSS

Do not add JavaScript for basic layout or visual decoration.

## Recommended components

- `SiteHeader.astro`
- `DesktopNavigation.astro`
- `MobileNavigation.astro`
- `SectionRail.astro`
- `ThemeToggle.astro`
- `SiteFooter.astro`
- `Container.astro`
- `SectionHeading.astro`
- `Button.astro`
- `GlassPanel.astro`
- `FeatureCard.astro`
- `UseCaseCard.astro`
- `PricingCard.astro`
- `FAQAccordion.astro`
- `ContactForm.astro`
- `SEOHead.astro`
- `Breadcrumbs.astro`
- `BrowserFrame.astro`
- `MapLeadVisual.astro`
- `ExtensionPanelVisual.astro`
- `ExportFlowVisual.astro`
- `GlowBackground.astro`
- `LogoMark.astro`

## Environment variables

Use environment variables for:

- Public site URL
- Chrome Web Store URL
- Contact form endpoint
- Analytics ID
- Optional error-monitoring ID

Provide `.env.example` without secrets.

Suggested names:

```env
PUBLIC_SITE_URL=https://leadorbiq.com
PUBLIC_CHROME_STORE_URL=
PUBLIC_CONTACT_ENDPOINT=
PUBLIC_ANALYTICS_ID=
```

## Package discipline

- Prefer existing dependencies.
- Add a dependency only when it produces a clear benefit.
- Avoid a heavy animation framework for simple reveals.
- Avoid a full component library that makes the design generic.
- Do not add multiple libraries that solve the same problem.
- Document all newly added packages.
