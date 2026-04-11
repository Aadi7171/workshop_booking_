# FOSSEE Workshop Portal: Redesign
# FOSSEE Workshop Booking — UI/UX Redesign

### 📺 Live Demo Walkthrough
[![Live Demo Walkthrough](./docs/recordings/demo.webp)](./docs/recordings/demo.webp)
A mobile-first student platform for discovering and booking technical workshops with less friction. Built as a React (Vite) SPA layered on top of the existing Django backend, as part of the FOSSEE UI/UX Enhancement screening task.

---

A mobile-first student platform for discovering and booking technical workshops faster and with less friction. Built for the FOSSEE UI/UX Enhancement screening task.
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

## 🛠️ Local Setup
## Setup Instructions

### Frontend
1. Go to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Build for production: `npm run build`

```bash
cd frontend
npm install
npm run dev       # Development server at http://localhost:5173
npm run build     # Production build
```

### Backend
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```
2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Copy `.sampleenv` to `.env` and set your database and secret key values.
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .sampleenv .env              # Fill in your DB and SECRET_KEY values
python manage.py migrate
python manage.py runserver
```

---

## 🏗️ Project Structure
## Project Structure

```text
```
.
├── workshop_portal/       # Core Django project configuration
├── workshop_app/          # Workshop management and booking logic
├── statistics_app/        # Reporting and analytics
├── cms/                   # Content management features
├── frontend/              # React + Vite student-facing UI
│   ├── src/
│   │   ├── components/    # Reusable UI pieces
│   │   ├── pages/         # Route-level pages
│   │   └── data/          # Mock data for UI development
│   └── src/
│       ├── components/    # Reusable UI pieces
│       ├── pages/         # Route-level pages
│       └── data/          # Mock data for UI development
└── docs/                  # Screenshots and demo assets
```

---

## 📸 Visual Showcase

### Home / Landing Page

| Before | After |
| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

### Workshop Discovery & Booking

| Discovery | Booking Flow |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Stepper](./docs/screenshots/after_booking.png) |

---

## 🧠 Design Rationale
## Design Rationale

### 1. What design principles guided your improvements?
The original site works, but it was clearly built around organizers and instructors. For students, the path to a workshop was not obvious. My main goal was to make the next step clear on every screen.

I focused on clarity, hierarchy, and fewer distractions. Each page has one main action: discover workshops, view details, then book. I used spacing, typography, and button emphasis to guide attention instead of packing everything into one screen.
The original site was built around organizers and instructors — the student path to finding and booking a workshop was not clear. The core design goal was to make the next action obvious on every screen.

I focused on clarity, hierarchy, and reduced noise. Each page is built around a single primary action: discover, view details, then book. Spacing, typography weight, and button emphasis guide attention rather than crowding everything into one view.

For the visual style, I used dark indigo tones, frosted cards, and simple motion to make the interface feel modern without making it busy. I also kept the system font stack so the page loads quickly and feels native across devices.
For visual style, I used dark indigo tones, frosted card surfaces, and subtle motion to give the interface a modern feel without making it heavy. The system font stack was kept intentionally — it loads instantly and feels native across operating systems.

### 2. How did you ensure responsiveness across devices?
I built the UI mobile-first, so the smallest screens define the base layout and larger screens add more structure on top. That made it easier to keep the interface readable on phones, which is the main target for this project.

I replaced desktop-style navigation with a bottom tab bar on mobile so the main actions are easier to reach with one hand. I also avoided fixed widths and used flexible layouts so cards, grids, and forms adapt naturally to different screen sizes.
The UI was built mobile-first: the smallest screen defines the base layout, and larger breakpoints add structure on top. This made it easier to stay readable on phones, which are the primary device for students using this platform.

For content-heavy areas, I used stacked cards instead of horizontal tables. That keeps scrolling simple and prevents the user from having to zoom or swipe sideways.
Desktop-style navigation was replaced with a bottom tab bar on mobile so the main actions are reachable with one hand. Fixed widths were avoided throughout; flexible Flexbox and Grid layouts let cards, forms, and grids adapt naturally.

### 3. What trade-offs did you make between design and performance?
I used a light glassmorphism effect, but kept it limited to card surfaces so it would not affect the whole page. That keeps the design polished without overloading weaker devices.
For content-heavy areas like workshop lists, stacked cards replaced horizontal tables. This eliminates sideways scrolling and keeps the experience simple on small screens.

I also avoided heavy UI libraries because they would add unnecessary weight for a task like this. Writing the styles in plain CSS took more time, but it gave me more control and kept the build lean.
### 3. What trade-offs did you make between design and performance?

Animations were kept simple and CSS-based. That way the interface feels smooth without relying on JavaScript for motion.
A light glassmorphism effect was used, but limited strictly to card surfaces so it does not affect the overall page render cost. This keeps the design polished without overloading lower-end devices.

### 4. What was the most challenging part of the task and how did you approach it?
The hardest part was balancing the existing organizer flow with the new student flow. I did not want to break the original structure, but I also needed to make the student journey feel complete and intentional.
Heavy UI libraries like Bootstrap or Material-UI were avoided entirely. Writing plain, modular CSS per component took more time but gave full control over the output and kept the bundle lean with no runtime CSS-in-JS overhead.

To handle that, I kept the existing organizer pages accessible through their original paths and introduced the new student-facing experience through React routes. That let me modernize the interface without forcing both user types into the same navigation pattern.
All animations are CSS-based rather than JavaScript-driven, so the interface stays smooth without the overhead of a motion library.

The main challenge was making the navigation feel coherent for both audiences. I solved that by giving students a simple bottom tab bar and keeping organizer actions in a separate, less intrusive area.
### 4. What was the most challenging part of the task and how did you approach it?

---
The hardest part was balancing the existing organizer flow with the new student-facing experience without breaking either. The original structure needed to stay functional for instructors while the student journey needed to feel intentional and complete.

## ♿ Accessibility
The approach was to keep organizer pages accessible through their existing Django routes and introduce the student experience through React routes in the new `frontend/` layer. That kept both user types from being forced into the same navigation pattern.

- Semantic landmarks are used for better screen reader navigation.
- Text contrast is kept high for readability.
- Interactive elements have clear labels.
- Touch targets are sized for mobile use.
- Navigation is designed to work well on small screens and with keyboard input.
Making the navigation feel coherent across both audiences was the trickiest detail. It was resolved by giving students a focused bottom tab bar while keeping organizer-specific actions in a separate, less prominent area.

---

## 🔎 SEO
## Accessibility

- Unique page titles and metadata are set for each route.
- Heading structure is kept semantic and predictable.
- The React pages use meaningful content structure for better crawlability.
- Semantic HTML landmarks used throughout for screen reader navigation
- Text contrast meets WCAG AA requirements
- All interactive elements carry explicit labels
- Touch targets sized to a minimum of 44×44px for mobile use
- Navigation works with keyboard input on desktop

---
## SEO

## 📜 Git Workflow
- Unique `<title>` and meta description set per route
- Heading hierarchy is semantic and consistent
- Meaningful content structure for crawler readability

I followed a conventional commit style to keep the history readable:
- `feat:` for new features.
- `style:` for UI and CSS updates.
- `docs:` for README and asset changes.
## Git Workflow

The work is split into smaller commits instead of one large dump, so the progress is easier to review.

---
Commits follow conventional commit style to keep history reviewable:

## 📝 Documentation
- `feat:` — new features
- `style:` — UI and CSS updates
- `docs:` — README and asset changes
- `fix:` — bug fixes

Key logic such as the booking stepper and filtering behavior is documented with JSDoc where needed to keep the code easier to understand and maintain.
Work is split into focused commits rather than a single large push so progress is easy to follow.

---
