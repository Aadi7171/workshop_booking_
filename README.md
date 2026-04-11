# FOSSEE Workshop Portal — UI/UX Redesign

A mobile-first student platform for discovering and booking technical workshops with less friction. Built as a React (Vite) SPA layered on top of the existing Django backend, as part of the FOSSEE UI/UX Enhancement screening task.

---

## 🎬 Live Demo Walkthrough

**[▶ Watch the demo walkthrough on YouTube](https://youtu.be/your-video-id-here)**
> *Note: Please replace the link above with your actual walkthrough recording before final submission.*

---

## 📸 Visual Showcase

### Home / Landing Page
The redesign shifts from a dense, organizer-centric layout to a high-impact, student-first discovery hub.

| Before | After |
| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

### Discovery & Booking Flow
Interactive search and a progressive 3-step booking flow simplify the student journey.

| Workshop Discovery | Booking Stepper |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Flow](./docs/screenshots/after_booking.png) |

---

## 🛠️ Setup Instructions

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev       # Development server at http://localhost:5173
```

### Backend (Django)
```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver      # Backend API at http://localhost:8000
```

---

## 🏗️ Project Structure

```text
.
├── workshop_portal/       # Core Django project configuration
├── workshop_app/          # Workshop management and booking logic
├── statistics_app/        # Reporting and analytics
├── cms/                   # Content management features
├── frontend/              # React + Vite student-facing SPA
│   └── src/
│       ├── components/    # Reusable UI pieces (Glassmorphism based)
│       ├── pages/         # Route-level page components
│       └── data/          # Mock data for UI development
└── docs/                  # Screenshots and demo assets
```

---

## 🧠 Design Rationale

### 1. What design principles guided your improvements?
The original site was built around organizers and instructors — the student path to finding and booking a workshop was not clear. The core design goal was to make the **next action obvious** on every screen.

I focused on **Clarity, Hierarchy, and Cognitive Load reduction**. Spacing, typography weight, and primary button emphasis guide attention rather than crowding everything into one view. For visual style, I used "Glassmorphism" (dark indigo tones and frosted card surfaces) to provide a premium, modern feel that aligns with current educational app standards.

### 2. How did you ensure responsiveness across devices?
The UI was built **Mobile-First**: the smallest screen defines the base layout, and larger breakpoints add structure on top. This ensures readability on phones, which are the primary devices for students.

- **Bottom Navigation**: Replaced desktop sidebars with a bottom tab bar on mobile for ergonomic thumb-reach.
- **Adaptive Grids**: Used Flexbox and CSS Grid to transition from stacked mobile cards to multi-column desktop layouts naturally.
- **No Side-Scrolling**: Converted horizontal data tables into vertical status cards for better mobile consumption.

### 3. What trade-offs did you make between design and performance?
- **Selective Glass**: A light glassmorphism effect was used, but limited strictly to card surfaces to minimize GPU render costs on lower-end mobile devices.
- **Zero UI Libraries**: Avoided heavy frameworks like Bootstrap or Material UI. Writing modular Vanilla CSS kept the bundle lean and eliminated runtime CSS-in-JS overhead.
- **Native Fonts**: Used a system font stack for instant loading and a native OS feel across all platforms.

### 4. What was the most challenging part of the task and how did you approach it?
The main challenge was making the navigation feel coherent for two distinct audiences: organizers and students. I solved this by decoupling the routes — students receive a focused, modern SPA experience via the React frontend, while organizer actions remain accessible through the stable legacy layout. This prevents both user types from being forced into a "one-size-fits-all" pattern that would serve neither well.

---

## ♿ Accessibility & SEO
- **Accessibility**: Semantic HTML landmarks, WCAG-compliant text contrast, and 44x44px mobile touch targets.
- **SEO**: Dynamic route-based metadata management using `react-helmet-async` and semantic heading hierarchies.

---

## 📜 Git Workflow
Commits follow the conventional commit style to keep history reviewable and progressive:
- `feat:` (New features) | `style:` (UI/UX updates) | `docs:` (Documentation) | `fix:` (Bug fixes)
