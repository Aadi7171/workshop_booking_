# FOSSEE Workshop Booking — UI/UX Redesign

A mobile-first student platform for discovering and booking technical workshops with less friction. Built as a React (Vite) SPA layered on top of the existing Django backend, as part of the FOSSEE UI/UX Enhancement screening task.

---

## Visual Showcase

### Home / Landing Page

| Before | After |
| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

### Workshop Discovery & Booking Flow

| Discovery | Booking Stepper |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Flow](./docs/screenshots/after_booking.png) |

### Demo Walkthrough

[![Live Demo Walkthrough](./docs/recordings/demo.webp)](./docs/recordings/demo.webp)

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

The original site was built around organizers and instructors — the student path to finding and booking a workshop was not clear. The core design goal was to make the next action obvious on every screen.

I focused on clarity, hierarchy, and reduced noise. Each page is built around a single primary action: discover, view details, then book. Spacing, typography weight, and button emphasis guide attention rather than crowding everything into one view.

For visual style, I used dark indigo tones, frosted card surfaces, and subtle motion to give the interface a modern feel without making it heavy. The system font stack was kept intentionally — it loads instantly and feels native across operating systems.

### 2. How did you ensure responsiveness across devices?

The UI was built mobile-first: the smallest screen defines the base layout, and larger breakpoints add structure on top. This made it easier to stay readable on phones, which are the primary device for students using this platform.

Desktop-style navigation was replaced with a bottom tab bar on mobile so the main actions are reachable with one hand. Fixed widths were avoided throughout; flexible Flexbox and Grid layouts let cards, forms, and grids adapt naturally.

For content-heavy areas like workshop lists, stacked cards replaced horizontal tables. This eliminates sideways scrolling and keeps the experience simple on small screens.

### 3. What trade-offs did you make between design and performance?

A light glassmorphism effect was used, but limited strictly to card surfaces so it does not affect the overall page render cost. This keeps the design polished without overloading lower-end devices.

Heavy UI libraries like Bootstrap or Material-UI were avoided entirely. Writing plain, modular CSS per component took more time but gave full control over the output and kept the bundle lean with no runtime CSS-in-JS overhead.

All animations are CSS-based rather than JavaScript-driven, so the interface stays smooth without the overhead of a motion library.

### 4. What was the most challenging part of the task and how did you approach it?

The hardest part was balancing the existing organizer flow with the new student-facing experience without breaking either. The original structure needed to stay functional for instructors while the student journey needed to feel intentional and complete.

The approach was to keep organizer pages accessible through their existing Django routes and introduce the student experience through React routes in the new `frontend/` layer. That kept both user types from being forced into the same navigation pattern.

Making the navigation feel coherent across both audiences was the trickiest detail. It was resolved by giving students a focused bottom tab bar while keeping organizer-specific actions in a separate, less prominent area.

---

## Accessibility

- Semantic HTML landmarks used throughout for screen reader navigation
- Text contrast meets WCAG AA requirements
- All interactive elements carry explicit labels
- Touch targets sized to a minimum of 44×44px for mobile use
- Navigation works with keyboard input on desktop

## SEO

- Unique `<title>` and meta description set per route
- Heading hierarchy is semantic and consistent
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
