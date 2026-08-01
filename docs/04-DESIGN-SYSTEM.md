# LeadOrbiq Design System

## Design concept

**Intelligent Orbit**

Lead discovery is represented as information moving from scattered local search results into a controlled, structured orbit.

Visual language:

- Search radius
- Location markers
- Connected nodes
- Data cards
- Circular progress
- Controlled motion
- Luminous edges
- Glass layers
- Structured grids

## Typography

Primary typeface:

**Satoshi**

Use self-hosted files only when proper licensed font files are supplied. Do not download or redistribute unlicensed font files.

Fallback:

```css
font-family:
  "Satoshi",
  "Inter",
  "Segoe UI",
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  sans-serif;
```

Suggested type scale:

- Display XL: `clamp(3.5rem, 8vw, 7.5rem)`
- Display: `clamp(3rem, 6vw, 6rem)`
- H1: `clamp(2.75rem, 5vw, 5rem)`
- H2: `clamp(2.1rem, 4vw, 3.75rem)`
- H3: `clamp(1.5rem, 2.5vw, 2.25rem)`
- H4: `1.25rem`
- Body large: `1.125rem–1.25rem`
- Body: `1rem`
- Small: `0.875rem`
- Micro: `0.75rem`

Typography principles:

- Tight display line height
- Comfortable body line height
- Controlled letter spacing
- Avoid ultra-thin weights
- Maximum readable paragraph width around 65–72 characters
- Use one H1 per page

## Recommended color direction

### Core dark palette

- Ink 950: `#050816`
- Ink 900: `#081020`
- Ink 850: `#0B1428`
- Surface dark: `rgba(14, 24, 46, 0.72)`
- Border dark: `rgba(159, 178, 214, 0.16)`
- Text dark primary: `#F6F8FF`
- Text dark secondary: `#AEBBD4`

### Core light palette

- Cloud 50: `#F7F9FF`
- Cloud 100: `#EEF3FF`
- Surface light: `rgba(255, 255, 255, 0.72)`
- Border light: `rgba(30, 55, 100, 0.12)`
- Text light primary: `#081020`
- Text light secondary: `#53627A`

### Brand colors

- Orbit Blue: `#4D7CFF`
- Electric Cyan: `#38D6FF`
- Signal Violet: `#8B5CFF`
- Mint Signal: `#4CF0C4`
- Warm Highlight: `#FFCC66`

Primary gradient:

```css
linear-gradient(
  120deg,
  #4D7CFF 0%,
  #8B5CFF 48%,
  #38D6FF 100%
)
```

Secondary glow:

```css
radial-gradient(
  circle,
  rgba(56, 214, 255, 0.28),
  rgba(77, 124, 255, 0.10) 48%,
  transparent 72%
)
```

Use warm highlight sparingly for important status or conversion details.

Do not make every element a gradient.

## CSS tokens

Create centralized custom properties for:

- Background
- Elevated background
- Glass background
- Text primary
- Text secondary
- Border
- Brand primary
- Brand secondary
- Accent
- Success
- Warning
- Danger
- Shadow
- Glow
- Radius
- Container width
- Section spacing
- Navigation height
- Transition timing
- Focus ring

## Containers

Suggested widths:

- Narrow content: `720px`
- Content: `960px`
- Main: `1200px`
- Wide visual: `1440px`

Use responsive side padding:

```css
clamp(1rem, 3vw, 2rem)
```

## Spacing

Use a consistent spacing system.

Suggested section spacing:

- Desktop: `clamp(6rem, 10vw, 10rem)`
- Tablet: `5rem–7rem`
- Mobile: `4rem–5rem`

Avoid overusing giant 200px gaps.

## Radius

- Small controls: `10px`
- Buttons: `14px–18px`
- Cards: `20px–28px`
- Large panels: `28px–40px`
- Pill controls: `999px`

## Glass surfaces

A good glass panel includes:

- Theme-aware translucent background
- Subtle backdrop blur
- Thin border
- Inner highlight
- Soft shadow
- Optional restrained glow

Do not place glass over visually busy backgrounds without a readable fallback.

## Shadows

Use layered shadows rather than one heavy shadow:

- Ambient shadow
- Directional elevation
- Inner highlight
- Optional colored glow

Reduce shadows in light mode.

## Buttons

Primary:
- Brand gradient or strong solid brand color
- High contrast
- Clear hover lift
- Pressed state
- Visible focus ring
- Minimum comfortable target size

Secondary:
- Glass surface
- Clear border
- Strong text contrast

Text button:
- Underline or directional indicator
- Do not rely only on color

Do not place decorative icons in every button. Use an arrow only when it adds directional meaning.

## Cards

Card styles:

- Feature card
- Product demo card
- Use-case card
- Comparison card
- Pricing card
- Trust card

Every card style must have a reason to exist.

## Iconography

Use custom line icons or a consistent open-source icon set already installed.

Rules:
- Consistent stroke width
- Rounded geometry
- No mixed icon families
- No emoji
- Meaningful labels for controls
- Decorative icons hidden from assistive technology

## Background system

Build depth with:

- Base color
- Subtle grid
- Large radial glows
- Fine grain
- Orbit lines
- Content surface

Keep backgrounds lightweight.

## Theme modes

Light mode:
- Bright cloud background
- White glass panels
- Blue-violet-cyan accents
- Soft gray-blue borders
- Restrained shadow

Dark mode:
- Near-black blue background
- Deep translucent panels
- Brighter luminous borders
- Controlled colored glow
- Strong readable text

Do not simply invert colors.

## Responsive behavior

Desktop:
- Full floating header
- Custom side rail
- Multi-column bento sections
- Sticky narrative

Tablet:
- Simplified rail
- Two-column layouts
- Reduced parallax

Mobile:
- Single-column composition
- Bottom progress pill
- Large touch controls
- Simplified product visuals
- No horizontal drag unless clearly implemented as an accessible carousel
- Reduced glow and blur

## Motion timing

Suggested timing:

- Micro interaction: `120–180ms`
- Control transition: `180–240ms`
- Card transition: `240–360ms`
- Section reveal: `450–700ms`
- Ambient loop: `8–20s`

Suggested easing:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Use spring-like motion sparingly.

## Reduced motion

With `prefers-reduced-motion: reduce`:

- Disable parallax
- Disable continuous orbit movement
- Remove large entrance movement
- Keep simple opacity transitions where appropriate
- Ensure all information is immediately available
