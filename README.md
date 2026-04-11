| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

> **Before** is a screenshot of the live production site at `python-workshops.fossee.in` — Bootstrap 3, imgur-hosted carousel images, and a single Login link in the navbar with no visible workshop listings for unauthenticated users.

### Workshop Discovery & Booking Flow

| Discovery | Booking Stepper |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Flow](./docs/screenshots/after_booking.png) |

### Demo Walkthrough
### Live Demo

🔗 **[View deployed demo →](https://your-vercel-url.vercel.app)**

[![Live Demo Walkthrough](./docs/recordings/demo.webp)](./docs/recordings/demo.webp)
> To run locally: `cd frontend && npm install && npm run dev`, then open `http://localhost:5173`.

---

@@ -70,50 +74,50 @@ python manage.py runserver

### 1. What design principles guided your improvements?

The original site was built around organizers and instructors — the student path to finding and booking a workshop was not clear. The core design goal was to make the next action obvious on every screen.
When I opened `python-workshops.fossee.in` on my phone, the first thing I saw was a Login button and nothing else — no workshops listed, no search, no indication of what the site even did without an account first. That became the core problem to solve.

I focused on clarity, hierarchy, and reduced noise. Each page is built around a single primary action: discover, view details, then book. Spacing, typography weight, and button emphasis guide attention rather than crowding everything into one view.

For visual style, I used dark indigo tones, frosted card surfaces, and subtle motion to give the interface a modern feel without making it heavy. The system font stack was kept intentionally — it loads instantly and feels native across operating systems.
For visual style, I used dark indigo tones, frosted card surfaces, and subtle CSS-based motion to give the interface a modern feel without making it heavy. The system font stack was kept intentionally — it loads instantly and feels native across operating systems without an extra web font request.

### 2. How did you ensure responsiveness across devices?

The UI was built mobile-first: the smallest screen defines the base layout, and larger breakpoints add structure on top. This made it easier to stay readable on phones, which are the primary device for students using this platform.
The original site's navbar collapses on mobile into a hamburger that still requires two taps to reach anything. I replaced that pattern with a bottom tab bar so the four main actions are always one thumb-tap away.

Desktop-style navigation was replaced with a bottom tab bar on mobile so the main actions are reachable with one hand. Fixed widths were avoided throughout; flexible Flexbox and Grid layouts let cards, forms, and grids adapt naturally.
The UI was built mobile-first: the smallest screen defines the base layout, and larger breakpoints add structure on top. Fixed widths were avoided throughout; Flexbox and CSS Grid let cards, forms, and grids adapt naturally to any screen width.

For content-heavy areas like workshop lists, stacked cards replaced horizontal tables. This eliminates sideways scrolling and keeps the experience simple on small screens.
For content-heavy areas like workshop listings, stacked cards replaced the original horizontal table layout. That eliminates sideways scrolling entirely and keeps the experience clean on small screens.

### 3. What trade-offs did you make between design and performance?

A light glassmorphism effect was used, but limited strictly to card surfaces so it does not affect the overall page render cost. This keeps the design polished without overloading lower-end devices.
The glassmorphism frosted-card effect looks polished but `backdrop-filter` can be expensive on older phones. I limited it strictly to card surfaces and tested on a mid-range Android device to make sure scroll performance stayed smooth — if it caused jank I would have removed it entirely.

Heavy UI libraries like Bootstrap or Material-UI were avoided entirely. Writing plain, modular CSS per component took more time but gave full control over the output and kept the bundle lean with no runtime CSS-in-JS overhead.
Heavy UI libraries like Bootstrap or Material-UI were avoided. Writing plain CSS per component took more initial time but keeps the production bundle lean with zero runtime CSS-in-JS overhead.

All animations are CSS-based rather than JavaScript-driven, so the interface stays smooth without the overhead of a motion library.
All animations are CSS `transition` and `@keyframes` based rather than JavaScript-driven, which keeps the interface smooth without the weight of a motion library like Framer.

### 4. What was the most challenging part of the task and how did you approach it?

The hardest part was balancing the existing organizer flow with the new student-facing experience without breaking either. The original structure needed to stay functional for instructors while the student journey needed to feel intentional and complete.
The hardest part was that the original codebase has two distinct user types — coordinators and instructors — with their own flows baked into the Django templates. I did not want to break that, but I also needed the new student-facing experience to feel complete on its own.

The approach was to keep organizer pages accessible through their existing Django routes and introduce the student experience through React routes in the new `frontend/` layer. That kept both user types from being forced into the same navigation pattern.
The approach was to leave all existing organizer routes untouched and introduce the student experience entirely through React routes in the new `frontend/` layer. That way both user types get a navigation pattern suited to them without either being forced into the other's flow.

Making the navigation feel coherent across both audiences was the trickiest detail. It was resolved by giving students a focused bottom tab bar while keeping organizer-specific actions in a separate, less prominent area.
The trickiest detail was making the two navigation systems — the React bottom tab bar for students and the existing Django nav for organizers — feel intentional rather than bolted together. I solved it by keeping the two surfaces visually distinct and routing between them cleanly.

---

## Accessibility

- Semantic HTML landmarks used throughout for screen reader navigation
- Semantic HTML landmarks (`<main>`, `<nav>`, `<header>`) used throughout for screen reader navigation
- Text contrast meets WCAG AA requirements
- All interactive elements carry explicit labels
- All interactive elements carry explicit `aria-label` attributes
- Touch targets sized to a minimum of 44×44px for mobile use
- Navigation works with keyboard input on desktop

## SEO

- Unique `<title>` and meta description set per route
- Heading hierarchy is semantic and consistent
- Unique `<title>` and meta description set per route via React Helmet
- Heading hierarchy is semantic and consistent (`h1` → `h2` → `h3`)
- Meaningful content structure for crawler readability

## Git Workflow
