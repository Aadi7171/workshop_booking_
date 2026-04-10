# FOSSEE Workshop Portal: Redesign

### 📺 Live Demo Walkthrough
[![Live Demo Walkthrough](./docs/recordings/demo.webp)](./docs/recordings/demo.webp)

A mobile-first student platform for discovering and booking technical workshops faster and with less friction. Built for the FOSSEE UI/UX Enhancement screening task.

---

## 🛠️ Local Setup

### Frontend
1. Go to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Build for production: `npm run build`

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

---

## 🏗️ Project Structure

```text
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

### 1. What design principles guided your improvements?
The original site works, but it was clearly built around organizers and instructors. For students, the path to a workshop was not obvious. My main goal was to make the next step clear on every screen.

I focused on clarity, hierarchy, and fewer distractions. Each page has one main action: discover workshops, view details, then book. I used spacing, typography, and button emphasis to guide attention instead of packing everything into one screen.

For the visual style, I used dark indigo tones, frosted cards, and simple motion to make the interface feel modern without making it busy. I also kept the system font stack so the page loads quickly and feels native across devices.

### 2. How did you ensure responsiveness across devices?
I built the UI mobile-first, so the smallest screens define the base layout and larger screens add more structure on top. That made it easier to keep the interface readable on phones, which is the main target for this project.

I replaced desktop-style navigation with a bottom tab bar on mobile so the main actions are easier to reach with one hand. I also avoided fixed widths and used flexible layouts so cards, grids, and forms adapt naturally to different screen sizes.

For content-heavy areas, I used stacked cards instead of horizontal tables. That keeps scrolling simple and prevents the user from having to zoom or swipe sideways.

### 3. What trade-offs did you make between design and performance?
I used a light glassmorphism effect, but kept it limited to card surfaces so it would not affect the whole page. That keeps the design polished without overloading weaker devices.

I also avoided heavy UI libraries because they would add unnecessary weight for a task like this. Writing the styles in plain CSS took more time, but it gave me more control and kept the build lean.

Animations were kept simple and CSS-based. That way the interface feels smooth without relying on JavaScript for motion.

### 4. What was the most challenging part of the task and how did you approach it?
The hardest part was balancing the existing organizer flow with the new student flow. I did not want to break the original structure, but I also needed to make the student journey feel complete and intentional.

To handle that, I kept the existing organizer pages accessible through their original paths and introduced the new student-facing experience through React routes. That let me modernize the interface without forcing both user types into the same navigation pattern.

The main challenge was making the navigation feel coherent for both audiences. I solved that by giving students a simple bottom tab bar and keeping organizer actions in a separate, less intrusive area.

---

## ♿ Accessibility

- Semantic landmarks are used for better screen reader navigation.
- Text contrast is kept high for readability.
- Interactive elements have clear labels.
- Touch targets are sized for mobile use.
- Navigation is designed to work well on small screens and with keyboard input.

---

## 🔎 SEO

- Unique page titles and metadata are set for each route.
- Heading structure is kept semantic and predictable.
- The React pages use meaningful content structure for better crawlability.

---

## 📜 Git Workflow

I followed a conventional commit style to keep the history readable:
- `feat:` for new features.
- `style:` for UI and CSS updates.
- `docs:` for README and asset changes.

The work is split into smaller commits instead of one large dump, so the progress is easier to review.

---

## 📝 Documentation

Key logic such as the booking stepper and filtering behavior is documented with JSDoc where needed to keep the code easier to understand and maintain.

---

*Built for the FOSSEE screening task with a focus on usability, responsiveness, and clean execution.*
