# FOSSEE Workshop Portal: Redesign

### 📺 [Live Demo Walkthrough](./docs/recordings/demo.webp)
![Live Demo Walkthrough](./docs/recordings/demo.webp)

A high-performance, mobile-first student platform designed to discover and book technical workshops in under 20 seconds. Built as part of the FOSSEE UI/UX Enhancement screening task.

---

## 🛠️ Local Setup & Installation

### 1. Frontend (React + Vite)
1. **Navigate to the frontend directory**: `cd frontend`
2. **Install dependencies**: `npm install`
3. **Run the development server**: `npm run dev`
4. **Build for production**: `npm run build`

### 2. Backend (Django)
1. **Create and activate a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. **Install dependencies**: `pip install -r requirements.txt`
3. **Environment Setup**: Copy `.sampleenv` to `.env` and configure your database/secret keys.
4. **Database Migration**: `python manage.py migrate`
5. **Start the server**: `python manage.py runserver`

---

## 🏗️ Project Architecture

```text
.
├── workshop_portal/       # Core Django project configuration
├── workshop_app/          # Primary workshop management & logic
├── statistics_app/        # Analytical dashboards and reporting
├── cms/                   # Content Management System logic
├── frontend/              # Modern React (Vite) Single Page Application
│   ├── src/
│   │   ├── components/    # Reusable UI micro-components
│   │   ├── pages/         # Conversion-optimized student routes
│   │   └── data/          # Mock data structures for rapid UI development
└── docs/                  # Documentation assets & visual evidence
```

---

## 📸 Visual Showcase (Before vs. After)

### 1. Home / Landing Page
| Before (Organizer Dashboard) | After (Student Entry) |
| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

### 2. Workshop Discovery & Booking
| Discovery Hub (After) | Booking Stepper (After) |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Flow](./docs/screenshots/after_booking.png) |

---

## 🧠 Reasoning & Professional Design Rationale

### 1. What design principles guided your improvements?
My primary guiding principle was **"Cognitive Load Reduction."** I shifted the portal's focus from a data-heavy management tool into a streamlined conversion engine designed for students.
- **Conversion Journey**: I mapped the student flow to prioritize "Discovery-to-Booking" speed. The UI now guides users through a linear path: Landing -> Find -> Detail -> Book -> Success.
- **Information Density**: I removed the clutter of the legacy dashboard, using scale and color (Emerald for success, Indigo for primary actions) to emphasize the most critical data points first.

### 2. How did you ensure responsiveness across devices?
I adopted a **"Mobile-First, Optimized for Scanning"** strategy:
- **Thumb-Zone UX**: On small screens, critical navigation is migrated to a glass-bar at the bottom of the viewport, which is objectively more reachable for mobile users.
- **Vertical Hierarchy**: Traditional horizontal tables are a known pain point on mobile. I replaced them with vertical "Discovery Cards" that allow for rapid vertical scrolling and faster decision-making.
- **Sticky Conversion**: I implemented a persistent "Book Now" bar on the mobile detail page, ensuring the primary CTA is never buried by content scrolling.

---

## ♿ Accessibility & SEO Implementation

### 1. Accessibility (WCAG 2.1)
- **Contrast**: All text colors pass AA/AAA contrast ratios against their respective backgrounds.
- **Landmarks**: Uses semantic HTML5 landmarks (`<nav>`, `<main>`, `<footer>`) for screen reader orientation.
- **Expressive ARIA**: Added explicit `aria-label` to all interactive icons and navigation links.
- **Interactions**: Implemented `touch-action: manipulation` for mobile responsiveness and used 48px+ touch targets.

### 2. SEO (Search Engine Optimization)
- **Dynamic Metadata**: Integrated `react-helmet-async` to provide unique, keyword-rich `<title>` and `<meta>` tags for every page.
- **Semantic Structure**: Proper H1-H3 heading hierarchy maintained throughout for automated crawlers.

---

## 📜 Git Workflow & Standards

I adhered to the **Conventional Commits** standard to maintain a professional, readable git history:
- `feat:` for granular feature additions (e.g., `feat: implement 3-step booking stepper`).
- `style:` for CSS/design system refactors.
- `docs:` for documentation and asset updates.

Work is split into **atomic, focused commits** rather than large "monolith" dumps, facilitating clear review and regression testing.

---

## 📝 Code Documentation
All complex logic, including state management for the multi-step booking stepper and the search-filtering algorithms, is documented using **JSDoc standards** to ensure codebase maintainability and readability for other developers.

---
*Developed with Passion for the FOSSEE Project & IIT Bombay.*
