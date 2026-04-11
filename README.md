# FOSSEE Workshop Booking — UI/UX Redesign

A mobile-first student platform for discovering and booking technical workshops with less friction. Built as a React (Vite) SPA layered on top of the existing Django backend, as part of the FOSSEE UI/UX Enhancement screening task.

---

## Visual Showcase

### Home / Landing Page

| Before | After |
| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

> **Before** is a screenshot of the live production site at `python-workshops.fossee.in` — Bootstrap 3, imgur-hosted carousel images, and a single Login link in the navbar with no visible workshop listings for unauthenticated users.

### Workshop Discovery & Booking Flow

| Discovery | Booking Stepper |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Flow](./docs/screenshots/after_booking.png) |

### Live Demo

🔗 **[View deployed demo →](https://your-vercel-url.vercel.app)**

> To run locally: `cd frontend && npm install && npm run dev`, then open `http://localhost:5173`.

---

## Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev       # Development server at http://localhost:5173
npm run build     # Production build
```

### Backend

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .sampleenv .env              # Fill in your DB and SECRET_KEY values
python manage.py migrate
python manage.py runserver
```

---

## Project Structure

```
.
├── workshop_portal/       # Core Django project configuration
├── workshop_app/          # Workshop management and booking logic
├── statistics_app/        # Reporting and analytics
├── cms/                   # Content management features
├── frontend/              # React + Vite student-facing UI
│   └── src/
│       ├── components/    # Reusable UI pieces
│       ├── pages/         # Route-level pages
│       └── data/          # Mock data for UI development
└── docs/                  # Screenshots and demo assets
```

---

## Design Rationale

### 1. What design principles guided your improvements?

When I opened `python-workshops.fossee.in` on my phone, the first thing I saw was a Login button and nothing else — no workshops listed, no search, no indication of what the site even did without an account first. That became the core problem to solve.

I focused on clarity, hierarchy, and reduced noise. Each page is built around a single primary action: discover, view details, then book. Spacing, typography weight, and button emphasis guide attention rather than crowding everything into one view.

For visual style, I used dark indigo tones, frosted card surfaces, and subtle CSS-based motion to give the interface a modern feel without making it heavy. The system font stack was kept intentionally — it loads instantly and feels native across operating systems without an extra web font request.

### 2. How did you ensure responsiveness across devices?

The original site's navbar collapses on mobile into a hamburger that still requires two taps to reach anything. I replaced that pattern with a bottom tab bar so the four main actions are always one thumb-tap away.

The UI was built mobile-first: the smallest screen defines the base layout, and larger breakpoints add structure on top. Fixed widths were avoided throughout; Flexbox and CSS Grid let cards, forms, and grids adapt naturally to any screen width.

For content-heavy areas like workshop listings, stacked cards replaced the original horizontal table layout. That eliminates sideways scrolling entirely and keeps the experience clean on small screens.

### 3. What trade-offs did you make between design and performance?

The glassmorphism frosted-card effect looks polished but `backdrop-filter` can be expensive on older phones. I limited it strictly to card surfaces and tested on a mid-range Android device to make sure scroll performance stayed smooth — if it caused jank I would have removed it entirely.

Heavy UI libraries like Bootstrap or Material-UI were avoided. Writing plain CSS per component took more initial time but keeps the production bundle lean with zero runtime CSS-in-JS overhead.

All animations are CSS `transition` and `@keyframes` based rather than JavaScript-driven, which keeps the interface smooth without the weight of a motion library like Framer.

### 4. What was the most challenging part of the task and how did you approach it?

The hardest part was that the original codebase has two distinct user types — coordinators and instructors — with their own flows baked into the Django templates. I did not want to break that, but I also needed the new student-facing experience to feel complete on its own.

The approach was to leave all existing organizer routes untouched and introduce the student experience entirely through React routes in the new `frontend/` layer. That way both user types get a navigation pattern suited to them without either being forced into the other's flow.

The trickiest detail was making the two navigation systems — the React bottom tab bar for students and the existing Django nav for organizers — feel intentional rather than bolted together. I solved it by keeping the two surfaces visually distinct and routing between them cleanly.

---

## Accessibility

- Semantic HTML landmarks (`<main>`, `<nav>`, `<header>`) used throughout for screen reader navigation
- Text contrast meets WCAG AA requirements
- All interactive elements carry explicit `aria-label` attributes
- Touch targets sized to a minimum of 44×44px for mobile use
- Navigation works with keyboard input on desktop

## SEO

- Unique `<title>` and meta description set per route via React Helmet
- Heading hierarchy is semantic and consistent (`h1` → `h2` → `h3`)
- Meaningful content structure for crawler readability

## Git Workflow

Commits follow conventional commit style to keep history reviewable:

- `feat:` — new features
- `style:` — UI and CSS updates
- `docs:` — README and asset changes
- `fix:` — bug fixes

Work is split into focused commits rather than a single large push so progress is easy to follow.

---

*Built for the FOSSEE screening task with a focus on usability, responsiveness, and clean execution.*
