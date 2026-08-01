MASTER PROMPT — BUILD THE LEADORBIQ WEBSITE
You are a senior product designer, conversion strategist, UX writer, brand designer, accessibility specialist, technical SEO engineer, motion designer, and Astro frontend engineer.
Build a complete, production-ready marketing website for LeadOrbiq, a Chrome extension designed to help users collect and organize local-business lead information, primarily from Google Maps.
The website must feel custom, highly attractive, glossy, futuristic, premium, and current for 2026. It must also remain clear, trustworthy, fast, accessible, conversion-focused, and easy to use.
Do not create a generic SaaS template.
1. Mandatory framework
Use the same framework and architecture as the Inoviqa website:

* Astro
* TypeScript
* Tailwind CSS
* Astro Content Collections
* Static Site Generation
* Vite
* Semantic HTML
* Reusable Astro layouts and components
* Minimal client-side JavaScript
* React islands only when an interaction genuinely cannot be handled cleanly with Astro, CSS, or lightweight TypeScript

Do not migrate the project to Next.js, Nuxt, Remix, Laravel, WordPress, Webflow, or another framework.
If the existing repository already uses this stack, preserve its conventions where sensible. If it is empty, initialize a clean Astro project using the architecture described in `02-TECHNICAL-ARCHITECTURE.md`.
2. Inspect before editing
Before changing code:

1. Inspect the complete repository.
2. Identify the existing routes, components, layouts, utilities, styles, packages, content collections, and assets.
3. Read every Markdown file in this package.
4. Preserve useful existing code.
5. Do not overwrite unrelated files.
6. Create a concise implementation checklist in `docs/IMPLEMENTATION-STATUS.md`.
7. Record completed items and remaining verified placeholders in that file.
8. Run the existing project before major changes when possible.
9. Fix existing build errors that block the requested work, but do not perform unrelated rewrites.

Do not ask routine questions. Use the supplied specifications and make strong professional decisions. Mark genuinely unknown business facts with `[VERIFY]`.
3. Primary business objective
The website must make these points clear within five seconds:

* LeadOrbiq is a Chrome extension.
* It helps users collect local-business lead information from Google Maps.
* It reduces repetitive prospecting work.
* It organizes prospect data for outreach or sales workflows.
* It is useful for agencies, freelancers, sales teams, recruiters, local-service marketers, and B2B prospectors.
* The visitor should install or try the extension.

Primary CTA:
Add to Chrome
Use:
`[INSERT_CHROME_WEB_STORE_URL]`
Secondary CTA:
See How It Works
This must scroll smoothly to the workflow section or open an accessible product-demo panel.
Never use fake scarcity, fake user counts, fake reviews, fake ratings, or unsupported performance claims.
4. Visual direction
Create a sophisticated 2026 interface using:

* Satoshi as the primary typeface
* Premium glassmorphism
* Glossy surfaces
* Carefully controlled gradients
* Thin luminous borders
* Layered depth
* Subtle noise or grain
* Bento-style product storytelling
* Large, confident typography
* Asymmetric but balanced compositions
* Floating product UI
* Parallax depth
* Scroll-triggered reveals
* Smooth micro-interactions
* Light and dark modes
* Data-product visual language
* Modern menu and footer design
* A custom responsive section-navigation sidebar

The design must feel:

* Advanced but understandable
* Energetic but credible
* Futuristic but practical
* Glossy but clean
* High-end but not excessive
* Original, not copied from another company

Avoid:

* Generic purple SaaS templates
* Excessive blur
* Weak contrast
* Tiny text
* Random visual decoration
* Too many cards
* Huge empty areas
* Stock photography
* Emoji as interface icons
* Fake browser screenshots
* Heavy video backgrounds
* Continuous distracting motion
* Scroll hijacking
* Visual effects that reduce performance

5. Required pages
Build all pages in `03-SITEMAP-AND-SECTIONS.md`.
Minimum routes:

* `/`
* `/features/`
* `/use-cases/`
* `/pricing/`
* `/help/`
* `/contact/`
* `/privacy-policy/`
* `/terms-of-service/`
* `/404.html` or equivalent Astro 404 route

Use shared layouts, SEO components, navigation, footer, buttons, cards, section headings, and form elements.
Do not build the entire website inside one component.
6. Homepage requirements
Build every homepage section in the order specified in `03-SITEMAP-AND-SECTIONS.md`.
The homepage must include:

1. Announcement or trust strip
2. Premium hero
3. Product demonstration visual
4. Problem-to-outcome section
5. How it works
6. Feature bento grid
7. Sticky product storytelling section
8. Use cases
9. Data collected or organized
10. Workflow comparison
11. Trust, privacy, and responsible-use section
12. Pricing teaser
13. FAQ
14. Final conversion CTA

Each section must:

* Have a clear purpose
* Use meaningful content
* Work in both themes
* Be responsive
* Be keyboard accessible
* Have complete hover, focus, active, and disabled states
* Avoid layout shifts
* Use consistent spacing
* Respect reduced-motion preferences
* Be visually distinct without feeling disconnected
* Contain no broken buttons or placeholder interactions

7. Navigation
Top navigation
Desktop:

* LeadOrbiq logo
* Product
* How It Works
* Use Cases
* Pricing
* Resources
* Theme control
* Add to Chrome CTA

Behavior:

* Transparent in the initial hero state
* Converts into a compact floating glass bar after scroll
* Includes active-route and active-section states
* Uses accessible dropdowns where needed
* Supports keyboard navigation
* Has no layout jump
* Maintains strong contrast in both themes

Mobile:

* Logo
* Theme control
* Menu button
* Large rounded glass menu panel or full-screen menu
* Visible close button
* Focus trap
* Escape-key support
* Background scroll lock
* Close after route selection
* Correct ARIA state

Custom floating sidebar
Create a distinctive responsive section-navigation rail:

* Fixed or sticky on desktop
* Numbered section markers or dots
* Current section indication
* Scroll progress
* Hover and focus labels
* Smooth section navigation
* Does not cover content
* Does not overlap browser controls
* Hides or simplifies on tablets
* Becomes a compact bottom progress pill on mobile

The sidebar and top navigation should complement each other rather than duplicate the same visual treatment.
8. Product visuals
Do not rely on stock images.
Create original visuals with:

* SVG
* HTML
* CSS
* Astro components
* Lightweight TypeScript
* Canvas only when necessary

The hero visual must communicate:

1. Open Google Maps
2. Find target businesses
3. Collect useful lead details
4. Organize the leads
5. Export or use them for outreach

Possible interface elements:

* Abstract map panel
* Search result cards
* Lead selection checkboxes
* Browser extension side panel
* Structured data rows
* Export tray
* Orbit and node motifs
* Animated cursor path
* Location markers
* Domain, phone, category, rating, and social-field examples clearly labeled as demonstrations

Do not show data fields as actual capabilities unless verified in `01-PRODUCT-BRIEF.md`.
9. Light and dark mode
Implement:

* Light mode
* Dark mode
* System preference
* Persistent selection
* No flash of incorrect theme
* Correct `color-scheme`
* Theme-aware browser color
* Theme-aware logo, shadows, SVGs, gradients, borders, and illustrations
* Accessible contrast in both themes

The theme toggle must be polished but simple. It must work with keyboard input and assistive technology.
10. Motion and parallax
Implement refined motion with CSS, native browser APIs, or a lightweight library only if justified.
Use:

* Hero depth parallax
* Slow background gradient movement
* Scroll reveal
* Card lift
* Product workflow motion
* Sticky narrative transitions
* Section progress
* Button micro-interactions
* Navigation state transitions
* Data-row collection animation
* Export confirmation animation

Rules:

* Motion must support comprehension.
* Do not hijack scrolling.
* Do not disable native browser behavior.
* Do not make essential information animation-dependent.
* Disable or simplify motion with `prefers-reduced-motion`.
* Avoid expensive blur, filter, and paint operations on mobile.
* Use transform and opacity where possible.
* Do not cause cumulative layout shift.
* Do not autoplay sound.

11. Content and copy
Use `05-WEBSITE-COPY.md` as the base copy.
Improve minor wording where needed for clarity, consistency, conversion, or layout, but do not invent capabilities.
Writing style:

* Clear
* Human
* Professional
* Confident
* Concise
* Everyday vocabulary
* Short paragraphs
* Outcome-focused
* Specific rather than vague
* No bloated AI language
* No excessive em dashes
* No unsupported superlatives

Use "Chrome extension" prominently. Do not position LeadOrbiq as a standalone web SaaS unless a web application actually exists.
12. Functional completeness
Everything must work properly and perfectly.
This includes:

* Navigation links
* Dropdown menus
* Mobile navigation
* Theme switcher
* Custom sidebar
* Smooth anchor navigation
* Active section detection
* CTA buttons
* Pricing controls, if present
* FAQ accordion
* Contact form validation
* Success and error states
* Copy buttons
* Tabs
* Demo controls
* Tooltips
* Back-to-top control
* Footer links
* Legal-page links
* 404 navigation
* External link handling
* Keyboard navigation
* Responsive layout
* Reduced-motion behavior
* Form labels and error messages

No visual-only controls. No dead links. No buttons that do nothing.
When a real endpoint is not available, implement an honest, clearly marked local placeholder and document the required integration in `IMPLEMENTATION-STATUS.md`.
13. Technical quality
Follow `06-FUNCTIONAL-REQUIREMENTS.md` and `07-SEO-ACCESSIBILITY-PERFORMANCE-QA.md`.
Requirements:

* Strict TypeScript
* No avoidable `any`
* No console errors
* No hydration mismatch
* No broken imports
* No missing assets
* No invalid HTML
* No duplicate IDs
* No inaccessible controls
* No horizontal overflow
* No content hidden behind fixed navigation
* No unstable responsive layout
* No unused heavy dependency
* No inline duplication that belongs in a component
* No hardcoded repeated content that belongs in data files
* No hidden SEO text
* No keyword stuffing

Use Astro Content Collections for resources, help content, and any scalable structured content.
14. SEO implementation
Implement:

* Unique title and meta description for every page
* Canonical URLs
* Open Graph metadata
* X/Twitter metadata
* Favicon and web manifest support
* XML sitemap
* Robots.txt
* Structured data where truthful
* Organization or SoftwareApplication schema only with verified values
* Breadcrumbs on inner pages
* Logical headings
* Descriptive internal links
* Social preview placeholder asset
* Clean trailing-slash behavior consistent with the repository
* Proper 404 page
* Indexing controls for pages that should not be indexed

Do not add fabricated aggregate ratings or review schema.
15. Accessibility
Target WCAG 2.2 AA.
Implement:

* Semantic landmarks
* Skip link
* Visible focus states
* Proper heading hierarchy
* Keyboard-operable navigation
* Accessible dialogs
* Accessible accordions
* Form labels and error association
* Sufficient contrast
* Touch targets of suitable size
* Reduced-motion support
* Alternative text where required
* Decorative image hiding
* Correct ARIA only when native HTML is insufficient
* Focus restoration when menus or dialogs close

16. Performance
Target excellent real-world performance.
Priorities:

* Static rendering
* Minimal JavaScript
* Component-level code splitting
* Optimized font loading
* Self-hosted Satoshi only when properly licensed and supplied
* Strong fallback font stack
* Inline only genuinely critical CSS
* Responsive images
* SVG optimization
* Lazy-load below-the-fold media
* Preload only critical assets
* Avoid large animation libraries
* Avoid unnecessary React hydration
* Avoid oversized DOM trees
* Avoid expensive mobile effects

Target:

* Lighthouse Performance: 95+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 95+

Do not sacrifice usability merely to chase a score.
17. Testing and completion
Before declaring the website complete:

1. Run formatting.
2. Run type checking.
3. Run linting if configured.
4. Run the production build.
5. Test all routes.
6. Test all navigation links.
7. Test light and dark modes.
8. Test common mobile, tablet, laptop, and wide desktop widths.
9. Test keyboard navigation.
10. Test reduced-motion mode.
11. Check for horizontal overflow.
12. Check 404 behavior.
13. Check forms and errors.
14. Check console output.
15. Check metadata.
16. Check sitemap and robots.
17. Check accessibility labels.
18. Check fixed navigation offsets.
19. Check that each section works independently.
20. Update `docs/IMPLEMENTATION-STATUS.md`.

Resolve all blocking issues before finishing.
18. Final response format
When the build is complete, report:

* What was built
* Main routes
* Major components
* Design-system decisions
* Functional interactions
* SEO and accessibility work
* Tests run
* Build result
* Files created or changed
* Remaining `[VERIFY]` items
* Exact local development command
* Exact production build command

Do not claim that something was tested unless it was actually tested.
