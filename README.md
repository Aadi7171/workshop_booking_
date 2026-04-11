# FOSSEE Workshop Booking — React UI/UX Redesign

> A mobile-first React SPA redesign of the [FOSSEE Workshop Booking](https://github.com/FOSSEE/workshop_booking) portal by IIT Bombay, built for the FOSSEE Python Screening Task.

---

## 🔗 Live Demo

👉 **[fossee-workshop-booking.vercel.app](https://fossee-workshop-booking.vercel.app)**

---

## 📸 Visual Showcase — Before & After

### Home Page
| Before (Django template) | After (React redesign) |
|---|---|
| ![Before - Home](./screenshots/before_home.png) | ![After - Home](./screenshots/after_home.png) |

### Workshop Listing
| Before | After |
|---|---|
| ![Before - Workshops](./screenshots/before_workshops.png) | ![After - Workshops](./screenshots/after_workshops.png) |

### Mobile View (375px)
| Before | After |
|---|---|
| ![Before - Mobile](./screenshots/before_mobile.png) | ![After - Mobile](./screenshots/after_mobile.png) |

### Booking Form (Multi-step)
| Before | After |
|---|---|
| ![Before - Booking](./screenshots/before_booking.png) | ![After - Booking](./screenshots/after_booking.png) |

> Screenshots taken at 375px (iPhone SE) and 1440px. All screenshots in `/screenshots/`.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/Aadi7171/workshop_booking_.git
cd workshop_booking_/frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app starts at **http://localhost:5173**

### Production build

```bash
npm run build    # Outputs to frontend/dist/
npm run preview  # Preview the production build locally
```

---

## 🧠 Reasoning

### 1. What design principles guided your improvements?

**Mobile-first layout over desktop shrinkage.** Since the primary users are students on smartphones, I designed every component starting at 320px and expanded upward — not the reverse. The navigation is a bottom tab bar on mobile (ergonomic thumb reach) that transforms into a top bar on desktop, mirroring patterns students already know from apps like YouTube and Swiggy.

**Visual hierarchy through typography and spacing.** The original Django templates had flat, dense text with no clear reading path. I introduced a two-font system: `Syne` (display, weight 800) for headings to create strong anchors, and `DM Sans` for body text for clean readability. Type sizes scale with `clamp()` so they adjust fluidly — no awkward jumps between breakpoints.

**Opaque surfaces over glassmorphism for accessibility.** Early drafts used glassmorphism throughout, but `backdrop-filter` blurs create contrast failures on complex backgrounds — violating WCAG 1.4.3 (minimum contrast 4.5:1). I switched to solid white cards (#ffffff) with subtle box-shadows. The effect is still modern and clean, but every text element now passes WCAG AA contrast checks.

**Purposeful colour.** One primary colour (`#4f46e5`, indigo) is used consistently for all interactive elements — links, buttons, active states. The accent colour (`#d97706`, amber) appears only for warnings. Status colours (green for available, amber for low seats, red for full) use both colour *and* an icon, satisfying WCAG 1.4.1 (colour not the sole means of conveying information).

**Reduce cognitive load through progressive disclosure.** The booking flow is a 3-step wizard instead of a single long form. Users only process what's relevant at each stage — personal info, academic details, then review — matching the mental model of a checkout flow students already understand.

---

### 2. How did you ensure responsiveness across devices?

- **CSS Grid with `auto-fill` and `minmax`** for the workshop card grid — columns reflow naturally from 1 → 2 → 3 without explicit breakpoints everywhere.
- **`clamp()` for typography** — `font-size: clamp(1.75rem, 5vw, 2.5rem)` means headings scale proportionally with viewport width, never too large on mobile or too small on desktop.
- **Fluid container** — `max-width: 680px` on mobile (single-column reading width), expanding to `1200px` on desktop. Padding uses `1.25rem` at all sizes so content never hits the viewport edge.
- **44px minimum touch targets** — all buttons, links, and inputs have `min-height: 44px`, meeting Apple HIG and WCAG 2.5.5 guidelines for mobile tap targets.
- **Bottom nav on mobile, top nav on desktop** — detected via `@media (min-width: 768px)`, no JS required.
- **Tested manually** at 320px, 375px, 390px, 768px, 1024px, and 1440px using Chrome DevTools device simulation, and on a physical Android device (Chrome 124).

---

### 3. What trade-offs did you make between design and performance?

| Decision | Design benefit | Performance cost | How I resolved it |
|---|---|---|---|
| Google Fonts (Syne + DM Sans) | Distinctive, readable typography | Extra network request | `rel="preconnect"` + `font-display: swap` — text remains visible during font load |
| Per-component CSS files | Modular, easy to maintain | Slight bundle fragmentation | Vite tree-shakes and minifies all CSS at build time — negligible real cost |
| Lucide-react icons | Consistent, accessible SVG icons | Potential large import | Used named imports (`import { Home } from 'lucide-react'`) — only used icons are bundled |
| Vanilla CSS over Tailwind | Zero runtime overhead, explicit | More authoring effort | Accepted — keeps bundle tiny, no purge config needed |
| No heavy UI library (MUI, Bootstrap) | Total control over styling | More CSS to write | Accepted — final CSS bundle is ~18KB vs 300KB+ for MUI |
| Animations | Polished feel, reduces perceived latency | CPU for compositing | CSS-only transitions (`transform`, `opacity`) — GPU composited, no layout reflow. Respects `prefers-reduced-motion`. |

The biggest deliberate trade-off: **no lazy loading** for the current scale (6 workshops). At production scale with hundreds of workshops, I would add React `Suspense` with a skeleton loader and paginate the API response.

---

### 4. What was the most challenging part of the task and how did you approach it?

**Retrofitting accessibility onto an inherited design.** The FOSSEE original had no ARIA attributes, no visible focus states, form inputs without labels (only placeholders), and a navigation with no landmark roles. These aren't cosmetic — they're WCAG violations that exclude keyboard-only users, screen reader users, and users with motor disabilities.

My approach was systematic:

1. **Audit first.** I ran the original Django templates through axe DevTools and listed every violation by WCAG criterion.
2. **Fix by principle, not by component.** Rather than patching each component ad-hoc, I fixed the root cause in `index.css` (focus rings, colour variables that guarantee contrast) so every component inherits correct behaviour.
3. **Key fixes applied:**
   - `<a href="#main-content">Skip to main content</a>` — WCAG 2.4.1
   - All inputs now have `<label>` elements (not placeholder-only) — WCAG 1.3.1
   - Disabled "full" booking action is a `<button disabled>` not a `disabled` anchor — anchors can't be truly disabled in HTML, causing confusing screen reader behaviour
   - Seat-count badges use both colour + icon (not colour alone) — WCAG 1.4.1
   - `aria-live="polite"` on the search results count — screen reader users hear the count update
   - `role="progressbar"` with `aria-valuenow/min/max` on the booking stepper — WCAG 4.1.2
   - `aria-label` on every `<nav>` landmark — WCAG 2.4.6
   - `<time datetime="...">` on all dates — machine-readable for search engines and assistive tech

4. **SEO.** Every page has a unique `<title>` and `<meta description>` via `react-helmet-async`. The home page and each workshop detail page have JSON-LD structured data (`Organization` and `EducationEvent` schemas) so Google can display rich results. The `index.html` has Open Graph and Twitter Card tags for social sharing. A `<link rel="canonical">` prevents duplicate content issues.

---

## ✅ Submission Checklist

- [x] Code is readable and well-structured
- [x] Git history shows progressive work (no single commit dumps)
- [x] README includes reasoning answers and setup instructions
- [x] Screenshots and live demo link included
- [x] Code is documented where necessary (JSDoc on all components)

---

## 🗂 Project Structure

```
frontend/
├── index.html              ← SEO meta, OG tags, structured data, fonts
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            ← App entry, BrowserRouter
    ├── App.jsx             ← Routes, HelmetProvider, skip link
    ├── index.css           ← Global tokens, WCAG-compliant colours, utilities
    ├── components/
    │   ├── Navigation.jsx  ← Bottom tab (mobile) / top bar (desktop), ARIA
    │   ├── Layout.jsx      ← Shell: nav + <main id="main-content"> + footer
    │   ├── WorkshopCard.jsx← <article>, semantic seat indicator
    │   ├── Footer.jsx      ← Footer landmark, meaningful links
    │   └── *.css
    ├── pages/
    │   ├── Home.jsx        ← Helmet SEO, feature grid
    │   ├── Workshops.jsx   ← Search with <label>, aria-live results
    │   ├── WorkshopDetail.jsx ← JSON-LD schema, <dl> info grid
    │   ├── Booking.jsx     ← Multi-step form, fieldset/legend, progress bar
    │   ├── Confirmation.jsx
    │   ├── Status.jsx
    │   ├── Statistics.jsx
    │   ├── ProposeWorkshop.jsx
    │   ├── About.jsx
    │   ├── FAQ.jsx
    │   └── Pages.css       ← Shared page styles
    └── data/
        └── workshops.js    ← Mock data (ISO dates, rich descriptions)
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| React Router | v7 | Client-side routing |
| react-helmet-async | 3 | Per-page SEO metadata |
| Lucide React | 1.8 | Accessible SVG icon set |
| Vite | 8 | Build tool, dev server |
| Vanilla CSS | — | Styling (no runtime overhead) |

---

## ♿ Accessibility (WCAG 2.1 AA)

| Criterion | Implementation |
|---|---|
| 1.3.1 Info and Relationships | `<label>` on all inputs, `<fieldset>/<legend>` on forms, `<dl>` for definition lists |
| 1.4.1 Use of Color | Seat status uses icon + colour + text |
| 1.4.3 Contrast (Minimum) | All text colours verified ≥4.5:1 against backgrounds |
| 2.1.1 Keyboard | All interactive elements keyboard-accessible; no keyboard traps |
| 2.4.1 Bypass Blocks | Skip-to-content link on every page |
| 2.4.6 Headings and Labels | All `<nav>` elements have `aria-label`; heading hierarchy preserved |
| 4.1.2 Name, Role, Value | `aria-label`, `aria-hidden`, `aria-live`, `aria-busy`, `role="progressbar"` applied throughout |

---

## 🔍 SEO Implementation

| Feature | Where |
|---|---|
| Unique `<title>` per page | `react-helmet-async` in every page component |
| `<meta name="description">` | Per page, keyword-relevant |
| Open Graph tags | `index.html` (global) + per page |
| Twitter Card | `index.html` |
| `<link rel="canonical">` | `index.html` |
| JSON-LD Organization schema | `index.html` |
| JSON-LD EducationEvent schema | Each `WorkshopDetail` page |
| Semantic HTML (`<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`) | Throughout |
| `<time datetime="...">` on all dates | `WorkshopCard`, `WorkshopDetail` |

---

## 📄 Original Project

This is a UI/UX redesign of [FOSSEE/workshop_booking](https://github.com/FOSSEE/workshop_booking), a Django-based workshop management portal by IIT Bombay. Core functionality is preserved; only the frontend has been reimagined as a React SPA.

**License:** GPL-3.0 (same as original FOSSEE project)
