# SEO, Accessibility, Performance, and QA

## SEO

### Page metadata

Every route requires:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Open Graph URL
- X/Twitter card metadata
- Indexing instruction where relevant

Suggested homepage title:

**LeadOrbiq — Google Maps Lead Collection Chrome Extension**

Suggested homepage description:

**Collect and organize local-business lead information from Google Maps with LeadOrbiq, a Chrome extension built for faster, cleaner prospecting workflows.**

Verify wording against actual capability before launch.

### Technical SEO

Implement:

- XML sitemap
- Robots.txt
- Canonical URL helper
- Consistent trailing slash
- Correct language attribute
- 404 response
- Breadcrumbs on inner pages
- Semantic landmarks
- Logical heading hierarchy
- Descriptive anchor text
- Internal linking
- Optimized social image
- Web manifest
- Favicons
- Correct status codes

### Structured data

Potential schema:

- `SoftwareApplication`
- `Organization`
- `WebSite`
- `BreadcrumbList`
- `FAQPage`, only when visible FAQ content meets current search-engine requirements

Do not include:
- Fake ratings
- Fake reviews
- Fake pricing
- Unsupported operating-system claims
- Unsupported application category

### Content strategy

Use Astro Content Collections for:

- Help articles
- Product updates
- Responsible outreach guides
- Prospecting workflow guides
- Google Maps research guides
- Local agency outreach resources

Do not create thin articles merely for keywords.

---

## Accessibility

Target WCAG 2.2 AA.

### Required

- Skip-to-content link
- Correct landmarks
- One clear H1 per page
- Logical heading order
- Keyboard-operable interface
- Visible focus
- Sufficient contrast
- Accessible names
- Form labels
- Error association
- Proper status announcements
- Accessible menus
- Accessible dialogs
- Accessible accordions
- Sufficient touch targets
- Text zoom support
- Reduced-motion support
- Reflow without horizontal scrolling
- No color-only communication
- No flashing content
- Correct alt text
- Decorative SVGs hidden

### Focus style

Use a strong theme-aware focus ring that is not removed by hover states.

### Menu accessibility

- Use buttons for menu triggers
- Use links for navigation destinations
- Maintain `aria-expanded`
- Associate controls with panels
- Restore focus after close

### Form accessibility

- Labels always visible
- Placeholder is not a label
- Errors use plain language
- Focus first invalid field or provide error summary
- Announce success and error states

---

## Performance

### Strategy

- Static HTML first
- Minimal hydration
- Avoid large client bundles
- Optimize SVGs
- Avoid unnecessary image assets
- Lazy-load below the fold
- Limit blur and shadow cost
- Use transform and opacity for motion
- Use IntersectionObserver
- Avoid continuous layout reads
- Avoid large DOM trees
- Defer noncritical scripts
- Respect data-saving conditions where practical

### Fonts

- Use supplied licensed Satoshi files
- Prefer WOFF2
- Subset when legally and technically appropriate
- Preload only critical weights
- Use `font-display: swap`
- Provide metric-compatible fallbacks where practical
- Avoid loading every weight

Suggested weights:
- 400
- 500
- 600
- 700

### Core Web Vitals

Prioritize:

- Fast LCP
- Low CLS
- Responsive INP

Avoid:
- Late hero sizing
- Font-induced layout shifts
- Unbounded images
- Large client hydration
- Heavy scroll handlers
- Excessive third-party scripts

### Lighthouse goals

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## Security and privacy

- Do not expose secrets
- Sanitize form input
- Validate input server-side or at endpoint
- Add appropriate security headers through hosting configuration
- Use CSP compatible with actual scripts
- Avoid unnecessary third-party trackers
- Do not load analytics before consent where consent is legally required
- Document extension permissions accurately
- Align privacy copy with actual data flow
- Never claim "we never store data" without technical confirmation

---

## QA commands

Use the repository's actual commands. Expected examples:

```bash
npm install
npm run dev
npm run astro check
npm run lint
npm run build
npm run preview
```

Do not invent commands that do not exist. Add missing useful scripts to `package.json` when appropriate.

## Manual QA

Check:

- All routes
- Navigation
- Mobile menu
- Dropdowns
- Section rail
- Theme persistence
- No-theme-flash behavior
- Anchor offsets
- FAQ
- Contact form
- Pricing CTA
- Chrome Store CTA
- External links
- Legal links
- 404 page
- Keyboard-only use
- Screen-reader labels
- Reduced motion
- High zoom
- Dark mode
- Light mode
- Mobile landscape
- Short viewport
- Slow network behavior
- Console
- Build output

## Completion report

Record:

- Build command result
- Type-check result
- Lint result
- Routes tested
- Browser widths tested
- Remaining verified placeholders
- Known limitations

Do not say "fully tested" without listing the actual tests.
