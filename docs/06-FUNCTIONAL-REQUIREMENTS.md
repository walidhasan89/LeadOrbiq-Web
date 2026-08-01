# Functional Requirements

## Global rules

Every visible interactive element must perform a real function.

No:
- Dead buttons
- Empty links
- Fake toggles
- Hover-only functionality
- Inaccessible custom controls
- Placeholder forms presented as functional production forms

## Header

Requirements:

- Sticky or fixed behavior without content overlap
- Transparent hero state
- Scrolled glass state
- Active route indication
- Active anchor indication where appropriate
- Accessible dropdowns
- Keyboard navigation
- Escape to close
- Click outside to close
- Correct ARIA state
- No layout shift

## Mobile navigation

Requirements:

- Opens and closes reliably
- Focus enters menu when opened
- Focus remains inside while open
- Focus returns to trigger after closing
- Escape closes it
- Overlay click closes it
- Route selection closes it
- Body scroll locks
- Theme toggle remains usable
- Fits short mobile heights
- Does not hide close control

## Theme system

Requirements:

- Light
- Dark
- System
- Persisted setting
- No flash of wrong theme
- Keyboard accessible
- Screen-reader label
- Updates `color-scheme`
- Updates theme-color metadata when possible

## Custom sidebar or section rail

Requirements:

- Detect current homepage section
- Update marker state
- Support keyboard selection
- Show readable labels on hover and focus
- Smooth-scroll with correct fixed-header offset
- Update URL hash without disruptive page jumps
- Avoid covering content
- Collapse at appropriate breakpoints
- Convert to bottom progress pill on mobile
- Disable expensive tracking when not needed

Use IntersectionObserver rather than continuous scroll calculations where possible.

## FAQ

Requirements:

- Native `details/summary` or accessible accordion pattern
- Keyboard operable
- Correct expanded state
- Deep-link support where reasonable
- No content clipping
- Works without JavaScript when possible

## Tabs

When used:

- Proper tab roles only when needed
- Arrow-key navigation
- Active state
- Associated panel
- Visible focus
- Usable fallback content

## Product demo

The demo must:

- Clearly state it is an illustrative interface
- Use fictional business names and data
- Never imply access to real private information
- Support reduced motion
- Have manual controls if auto-advancing
- Pause when hidden
- Remain understandable without animation

## Pricing

Until pricing is confirmed:

- Keep plan data in one typed data file
- Hide unverified public values in production
- Use development warnings
- Do not show a billing toggle unless multiple billing periods exist
- CTA destination must match actual purchase or installation flow

## Contact form

Fields:

- Name
- Email
- Topic
- Message
- Optional company
- Privacy acknowledgment if required

Validation:

- Client-side enhancement
- Server or endpoint validation
- Accessible inline errors
- Error summary when useful
- Loading state
- Success state
- Submission failure state
- Prevent duplicate submissions
- Preserve entered content after recoverable errors
- Spam protection placeholder
- No secrets in client code

If no endpoint is supplied:

- Build the complete UI and validation
- Disable production submission or use a transparent placeholder
- Document the missing endpoint
- Do not pretend a message was sent

## External links

- Chrome Store link opens appropriately
- Use descriptive labels
- Use `rel="noopener noreferrer"` where relevant
- Do not force all external links into new tabs
- Clearly identify downloads if any

## Footer

Requirements:

- All links valid
- Current year generated automatically
- Legal routes present
- Theme-safe logo
- Install CTA
- No placeholder social icons unless actual URLs exist

## Error handling

Create:
- 404 page
- Form error state
- Missing content fallback
- Safe handling for invalid route params
- Helpful empty states

## Responsive testing widths

At minimum test:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Also test landscape mobile and short viewport heights.

## Browser coverage

Test modern stable versions of:

- Chrome
- Edge
- Firefox
- Safari

The extension CTA may be Chrome-focused, but the marketing site should still render correctly elsewhere.

## Acceptance criteria for every section

A section is complete only when:

- Content is final or visibly marked for verification
- Layout works at all breakpoints
- Theme styles are complete
- Keyboard behavior works
- Focus states exist
- Motion respects user settings
- Links and controls work
- No overflow occurs
- No console error occurs
- No invalid heading hierarchy occurs
- Visuals have proper accessibility treatment
