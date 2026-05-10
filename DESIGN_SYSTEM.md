# Portfolio 2026 Design System

This document reflects the current UI system implemented across all `.jsx` files in `src/`.
It focuses on reusable patterns, tokens, and component behaviors that are actively used.

---

## 1) Foundations

### Brand Principles
- Clarity-first hierarchy with strong content readability.
- Soft minimal surfaces (light borders, subtle shadows, muted backgrounds).
- Motion that supports orientation, not decoration.
- Reusable section templates across work and case-study pages.

### Core Tokens
- **Font stack:** `"Hanken Grotesk", Inter, system-ui, sans-serif`
- **Base colors (`tailwind.config.js`):**
  - `canvas`: `#f8f9fb`
  - `ink`: `#313743`
  - `muted`: `#8f97a3`
  - `line`: `#e4e8ee`
  - `accent`: `#b8f8c8`
- **Primary hard-coded utility colors in active use:**
  - Orange CTA/active: `#FF4F00`
  - Body slate: `#64748B`
  - Heading slate: `#334155`
  - Label/meta blue: `#8899B2`
  - Loader blue range: `#889DBB`, `#8ea3c1`

### Shadow + Radius Language
- **Shadow token:** `shadow-soft`
- **Frequently used radii:** `rounded-[16px]`, `rounded-2xl`, `rounded-[22px]`, `rounded-[28px]`
- **Guideline:** rounded corners + thin line borders are the default visual container style.

---

## 2) Typography System

### Type Roles
- **Display hero:** `text-[36px]` to `text-[40px]`, medium weight.
- **Section heading:** `text-[24px]`, medium.
- **Block label/meta:** `text-[12px]` with uppercase tracking.
- **Body copy:** `text-[16px]` to `text-[18px]`.
- **Card/supporting copy:** `text-[14px]` to `text-[16px]`.

### Tracking + Leading
- Tight tracking for headings (`tracking-[-0.02em]` and nearby values).
- Comfortable body rhythm (`leading-[1.55]` to `leading-[1.7]`).

---

## 3) Layout System

### Page Container
- Primary container pattern:
  - `mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px]`
- Consistent vertical section dividers via `border-b border-line`.

### Main Content Split
- Case-study content pattern:
  - `grid grid-cols-1 md:grid-cols-[220px_1fr]`
  - Left sticky TOC + right content stream.

### Content Block Pattern
- Repeated article block template:
  - `grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8`
  - Left label + right body.

---

## 4) Navigation + Orientation

### Top Navigation (`NavBar`)
- Work/Art/About/Resume links.
- Route-aware active state (`Work` active on `/` and `/work/*`).
- Active color: orange `#FF4F00`.

### Breadcrumbs (`Breadcrumbs`)
- Always shown below Nav on main and case-study pages.
- Small-size breadcrumb text (`12px`) with subdued separators.

### Table of Contents (`TableOfContents`)
- Sticky desktop sidebar.
- Scroll spy active-state behavior.
- Supports optional nested subsections.

---

## 5) Motion System

### Entry Motion
- `motion-page-enter` / `motion-page-stagger` for staged section reveals.
- Motion delay controlled by CSS custom property `--motion-delay`.

### Interaction Motion
- Hover transitions generally `200ms` to `300ms`, mostly `ease-out`.
- Card/video hover uses subtle lift + scale + overlay fade.

### Reduced Motion
- Key transitions include `motion-reduce` safeguards.

---

## 6) Media Loading System

### Reusable Primitives (`MediaWithSkeleton.jsx`)
- `ImageWithSkeleton`
- `VideoWithSkeleton`
- `MediaWithSkeleton` alias for image skeleton behavior.

### Behavior
- Shimmer skeleton while media loads.
- Fade/blur reveal variants.
- Priority-aware loading (`fetchPriority`, `loading`, `preload`).

---

## 7) Startup Loading Experience

### Loader Component (`FirstVisitLoadingScreen.jsx`)
- Full viewport overlay.
- Animated percent value.
- Horizontal bar sequence visualization.
- Branded startup copy: "Preparing to solve next problem using design".

### Loader Control (`App.jsx`)
- First-visit gate persisted in `localStorage`.
- Test override with query param `?loader=1`.
- Scroll lock while loader is visible.
- Route content fades in after loader completion.

### Asset Preload Strategy (`assetPreloader.js`)
- Tier 1: homepage media first.
- Tier 2: case-study media next.
- Tier 3: remaining art/about imagery.

---

## 8) Homepage UI Patterns (`WorkPage.jsx`)

### Hero
- Profile avatar tile (`100x100`, rounded).
- Status dot + tooltip microinteraction.
- Intro copy + smooth-scroll "work" anchor.

### Project Cards
- 2x2 responsive grid.
- Video-backed cards (except map card visual treatment).
- Hover chips, gradient overlays, and subtle elevation.

---

## 9) Case Study System (Shared Patterns)

Used in `ChatbotCaseStudy`, `ServiceDesignCaseStudy`, `ArthAiCaseStudy`, `MapCaseStudy`.

### Shared Anatomy
- Hero section with title, metadata, and cover media.
- TOC + content grid split.
- Repeating labeled content articles.
- Footer CTA continuity.

### Reusable Visual Rules
- Containers: light border + rounded corners.
- Labels: muted uppercase micro-type.
- Body copy: slate text with generous line-height.

---

## 10) Arth AI: Newly Introduced UI Modules

`ArthAiCaseStudy.jsx` contains the most extensive new design modules:

### 10.1 Insights Grid
- 8-card responsive findings layout.
- Neutral surface cards (`#f4f4f6`) with border.

### 10.2 Persona Composite Block
- Avatar, demographic stats, narrative summary, seeking/difficulty lists.
- Structured with multi-column responsive behavior.

### 10.3 Empathy + HMW Sequence
- Empathy map media block.
- HMW section with:
  - banner image
  - 3-column question layout on desktop

### 10.4 Idea Feature Chips
- 6-card feature set in compact rounded containers.

### 10.5 Prototype Sequence Renderer
- Ordered prototype flow rendered from config data.
- Figure + caption + image pattern reused per screen.
- Includes newly added prototype screens:
  - `Arth AI account`
  - `Networth`
  - `AutoMode`
  - `CopilotMode`
  - `ManualMode`

### 10.6 Embedded Figma Frames
- IA section embed.
- Process section embed.
- Both use consistent framed `iframe` container treatment.

### 10.7 Closing Section Enhancements
- Deliverable with user-flow image.
- Learnings with 5-point list + learnings image.

---

## 11) Overlay + Drawer System

### Resume Drawer (`ResumeDrawer.jsx`)
- Right-side off-canvas panel with backdrop.
- Header actions and CV download CTA.
- Scroll lock coordinated with app-level overlays.

### Art Gallery Drawer (`ArtGalleryDrawer.jsx`)
- Modal-like media detail view.
- Shared border and spacing language for consistency.

---

## 12) Footer System (`SiteFooter.jsx`)

- Link cluster aligned with top navigation structure.
- Contact CTA with clipboard action.
- Toast-style "Email copied" feedback panel.

---

## 13) Accessibility Patterns In Use

Implemented patterns:
- Route-aware nav state.
- `aria-live` toast feedback for copy action.
- Reduced-motion-aware transitions.
- Progressive media fallback handling.

Areas to continue improving:
- Ensure all light text variants meet contrast in every context.
- Prefer semantic buttons over `href="#"` interactions.
- Ensure keyboard-first parity for all hover-revealed affordances.

---

## 14) Component Inventory (Current)

- Global shell: `App`, `NavBar`, `Breadcrumbs`, `SiteFooter`
- Loading system: `FirstVisitLoadingScreen`, `assetPreloader`
- Media primitives: `ImageWithSkeleton`, `VideoWithSkeleton`, `MediaWithSkeleton`
- Navigation aid: `TableOfContents`
- Overlays: `ResumeDrawer`, `ArtGalleryDrawer`
- Pages: `WorkPage`, `AboutPage`, `ArtPage`
- Case studies: `ChatbotCaseStudy`, `ServiceDesignCaseStudy`, `ArthAiCaseStudy`, `MapCaseStudy`

---

## 15) Maintenance Rules

When adding new UI:
- Prefer existing section/article templates before creating one-off layouts.
- Reuse existing label, heading, and body text roles.
- Use `MediaWithSkeleton`/`VideoWithSkeleton` for all heavy media.
- Keep color/radius choices aligned with current system set.
- Document new modules in this file when introducing new reusable patterns.
# Portfolio 2026 Design System

## Introduction

This document captures the **current visual language** implemented in the codebase and translates it into a structured, scalable design system.  
It is inferred from:

- `src/index.css`
- `tailwind.config.js`
- `src/App.jsx`
- `src/components/ResumeDrawer.jsx`
- `src/App.css` (legacy styles, currently unused by app components)

The goal is to preserve the current aesthetic while improving consistency and tokenization for long-term scale.

---

## Design Principles

1. **Clarity First**
   - Prioritize readable typography, high contrast text, and simple structure.
2. **Soft Minimalism**
   - Use subtle borders, muted surfaces, and restrained shadows.
3. **Motion with Purpose**
   - Keep interactions short and gentle; avoid decorative animation.
4. **Progressive Disclosure**
   - Secondary content appears in overlays/drawers rather than cluttering the main canvas.
5. **Consistency over novelty**
   - Reuse spacing/typography patterns across sections before introducing new variants.

---

## Style Foundations

## Typography System

### Font Family

| Token | Value | Usage |
|---|---|---|
| `font.family.sans` | `"Hanken Grotesk", Inter, system-ui, sans-serif` | Global body and components |

### Type Scale (in use)

| Size | Tailwind/Class Usage | Common Context |
|---|---|---|
| `12px` | `text-xs` | Dot tooltip, metadata |
| `14px` | `text-sm` | Resume rows, helper text |
| `15px` | `text-[15px]` | Resume section headings |
| `16px` | `text-base`, `text-[16px]` | Nav, body text, links |
| `22px` | `text-[22px]` | Resume drawer title |
| `24px` | `text-[24px]` | Footer callout (desktop adjusted in places) |
| `28px` | `text-[28px]` | Hero heading, email in some contexts |

### Weights & Line Heights

| Weight | Usage |
|---|---|
| `400` (`font-normal`) | Most body and nav text |
| `500` (`font-medium`) | Active nav, section headers, callouts |

| Line Height | Usage |
|---|---|
| `leading-[1.1]` | Dense footer callout |
| `leading-[1.5]` | Hero heading, resume rows |
| `leading-[1.55]` | Summary paragraph in resume card |

### Typography Notes

- Hero and body hierarchy is readable and calm.
- There is mixed usage of arbitrary values (`text-[15px]`, `text-[28px]`) and scale-based classes (`text-sm`, `text-base`).

---

## Color System

### Base Tokens (defined in Tailwind config)

| Token | Hex | Intent |
|---|---|---|
| `canvas` | `#f8f9fb` | App background |
| `ink` | `#313743` | Primary text |
| `muted` | `#8f97a3` | Secondary text |
| `line` | `#e4e8ee` | Borders/dividers |
| `accent` | `#b8f8c8` | Accent green (legacy dot token) |

### Extended Practical Palette (currently used directly in components)

| Role | Hex |
|---|---|
| Brand orange / CTA | `#FF4F00` |
| Nav neutral | `#374151` |
| Nav hover | `#1f2937` |
| Hero text | `#64748B` |
| Secondary hero text | `#8899B2` |
| Success green dot | `#34C759` |
| Tooltip bg green tint | `#eaf9ea` |
| Tooltip border green tint | `#cfeecf` |
| Tooltip success text | `#3f7f54` |
| Footer/subtle text | `#7f8794` |

### State Colors

| State | Current Pattern |
|---|---|
| Hover (text) | Slightly darker neutral (`#1f2937`, `#475569`) |
| Active (text) | Orange or darker slate |
| Hover (surface) | Soft elevation/shadow |
| Overlay | `black` alpha gradients |

---

## Spacing System

Current UI generally follows an 8px rhythm with selective arbitrary values.

### Common spacing in use

| Value | Tailwind class | Usage |
|---|---|---|
| `4px` | `gap-1`, `p-1` variants indirectly | Micro spacing |
| `8px` | `gap-2`, `p-2` | Icon-text, compact control padding |
| `12px` | `px-3`, `py-3` | Row and control spacing |
| `16px` | `p-4`, `mt-4`, `gap-4` | Card internals |
| `20px` | `gap-5`, `py-5` | Nav spacing, section gutters |
| `24px` | `px-6`, `py-6`, `pt-6` | Drawer and page rhythm |
| `28px` | `pb-7`, `pt-7` | Hero/section spacing |
| `40px` | `pb-10`, `gap-10` | Footer major spacing |
| `48px` | `pt-12` | Hero top spacing |
| `120px` | `lg:px-[120px]` | Desktop horizontal gutter |

### Layout constraints

- Main content uses centered layout with breakpoint-based horizontal paddings.
- Desktop horizontal edge spacing currently enforced via `lg:px-[120px]`.

---

## Component Guidelines

## Navbar

**Current behavior**
- 16px regular nav text.
- Active item in orange (`#FF4F00`) with medium weight.
- Resume item triggers drawer.

**Guideline**
- Keep one active state pattern across all nav items.
- Use semantic route-based active state when routing is introduced.

## Hero Section

**Current behavior**
- 100x100 profile image with 16px radius.
- Subtitle + live-status dot + tooltip.
- 28px hero title with ~550px max width.
- “work” sub-link smooth-scrolls to projects.

**Guideline**
- Keep headline width constrained for readability.
- Maintain status dot + tooltip as semantic status indicator.

## Project Cards

**Current behavior**
- Rounded visual cards with autoplay looping videos.
- Hover micro-interaction:
  - slight lift
  - slight video zoom
  - overlay fade
  - “View” chip reveal

**Guideline**
- Keep hover effects subtle and short.
- Respect reduced-motion preferences (already implemented on transform transitions).

## Resume Drawer

**Current behavior**
- Right-side off-canvas panel with backdrop.
- Download button in brand orange.
- Content organized into simple cards and table-like rows.

**Guideline**
- Preserve compact information density.
- Keep row labels short; move long prose to content column.

## Buttons

**Current types in use**
- Circular icon close button (neutral)
- Primary rounded pill download button (orange)

**Guideline**
- Define explicit button variants: `primary`, `secondary`, `icon`, `text`.

## Inputs

- No form inputs currently implemented.
- If added, align with `line` border token, 16px text, and 8/12px spacing system.

---

## Interaction Patterns

### Motion standards currently used

| Pattern | Duration | Easing | Notes |
|---|---|---|---|
| Color/text transitions | `200ms` | default/ease | Nav, links, tooltip |
| Surface hover transitions | `300ms` | `ease-out` | Cards, overlays |
| Video scale | `500ms` | `ease-out` | Subtle emphasis |
| Drawer open/close | `300ms` | `ease-out` | Off-canvas slide |

### Behavior patterns

- Smooth scroll to section with reduced-motion fallback.
- Tooltip reveal through opacity + slight translation.
- Modal-style drawer with body scroll lock and backdrop click-to-close.

---

## Accessibility Notes

### Implemented well

- `prefers-reduced-motion` considered for project card transforms and smooth scroll behavior.
- `aria-current="page"` on active nav link.
- `aria-label` for status dot and close controls.

### Gaps to improve

- Color contrast should be validated for lighter text (`#8899B2`) on `canvas`.
- Drawer should support `Esc` key close and initial focus management.
- Some anchors use `href="#"`; convert to buttons when no navigation occurs.
- Tooltip should be keyboard-triggerable if it conveys important state.

---

## Inconsistencies Found

1. **Token vs hard-coded color mismatch**
   - Many component colors are hard-coded hex values instead of shared tokens.
2. **Mixed typography scale**
   - Combination of semantic classes (`text-sm`) and arbitrary (`text-[15px]`, `text-[28px]`) without token mapping.
3. **Legacy stylesheet present**
   - `src/App.css` contains Vite starter styles and is not aligned with current system.
4. **Spacing strategy mixed**
   - Mostly 8px rhythm, but several arbitrary one-off values exist (e.g., custom widths/heights/radii).
5. **Border radius variants**
   - Uses `rounded-md`, `rounded-xl`, `rounded-2xl`, and exact `rounded-[16px]` without a declared radius scale.

---

## Recommendations for a Scalable Token-Based System

## 1) Introduce semantic design tokens

Create token layers:
- **Primitive**: raw palette (`slate-700`, `orange-500`, `green-500`, etc.)
- **Semantic**: `text.primary`, `text.secondary`, `surface.base`, `border.default`, `status.success`
- **Component**: `button.primary.bg`, `nav.link.active`, `drawer.overlay.bg`

## 2) Normalize typography scale

Define consistent steps and map utilities:
- `xs=12`, `sm=14`, `md=16`, `lg=20`, `xl=24`, `2xl=28`
- Map line-heights and weights to named tokens.

## 3) Standardize spacing & radius

- Spacing token set: `4, 8, 12, 16, 24, 32, 40, 48`.
- Radius token set: `sm=8`, `md=12`, `lg=16`, `xl=24`, `full`.
- Avoid arbitrary values unless documented exceptions.

## 4) Componentize repeated patterns

Extract reusable primitives:
- `Button` (primary/secondary/icon)
- `Card`
- `SectionHeader`
- `NavLink`
- `IconLabelLink`

## 5) Consolidate motion tokens

Define motion primitives:
- `duration.fast=150ms`
- `duration.base=200ms`
- `duration.slow=300ms`
- `easing.standard=ease-out`
- `easing.emphasized=cubic-bezier(...)`

## 6) Remove deprecated styles

- Delete or archive `src/App.css` to prevent accidental regressions and style drift.

---

## Suggested Next Deliverables

1. `src/styles/tokens.css` (CSS variables for semantic tokens)
2. Tailwind extension mapped to token variables
3. `src/components/ui/` primitives (Button, Card, Tag, DrawerHeader)
4. Story-like visual reference page (`/design-system`) for token/component preview

---

This documentation reflects the current implementation and provides a practical path to mature it into a maintainable, token-driven design system.
