# FOSSEE Workshop Portal: Redesign

### 📺 [Live Demo Walkthrough](./docs/recordings/demo.webp)
![Live Demo Walkthrough](./docs/recordings/demo.webp)

A high-performance, mobile-first student platform designed to discover and book technical workshops in under 20 seconds.

## Key Features
- **Student-First Flow**: Optimized discovery-to-booking journey.
- **Glassmorphism UI**: Modern, premium aesthetic with deep indigo accents.
- **Micro-interactions**: Smooth transitions and loading states for perceived speed.
- **Multi-step Booking**: Structured stepper to reduce cognitive friction.
- **Sticky Actions**: Persistent mobile CTAs for high conversion.

---

## Visual Showcase (Before vs. After)

### 1. Home / Landing Page
The original landing page was a functional dashboard for organizers. The redesign pivots to a high-impact discovery engine for students.

| Before (Organizer Dashboard) | After (Student Entry) |
| :---: | :---: |
| ![Original Home](./docs/screenshots/before_home.png) | ![Redesigned Home](./docs/screenshots/after_home.png) |

### 2. Workshop Discovery & Booking
Discovery was previously hidden / manual. We introduced a dedicated Discovery Hub and a frictionless multi-step booking flow.

| Discovery Hub (After) | Booking Stepper (After) |
| :---: | :---: |
| ![Workshops List](./docs/screenshots/after_discovery.png) | ![Booking Flow](./docs/screenshots/after_booking.png) |

---

## Reasoning & Design Decisions

### 1. What design principles guided your improvements?
My primary guiding principle was **"Cognitive Load Reduction."** I shifted the portal's focus from a data-heavy management tool into a streamlined conversion engine. 
- **Journey Mapping**: Landing -> Find -> Detail -> Book -> Success.
- **Visual Hierarchy**: Using scale and color (Emerald for success, Indigo for primary actions) to guide the student's eye to the most critical information first (Title > Availability > Date).

### 2. How did you ensure responsiveness across devices?
I followed a **"Mobile-First, Desktop-Second"** approach:
- **Thumb-Zone UX**: Placed critical navigation items in a bottom glass-bar on mobile.
- **Vertical Scannability**: Discarded horizontal tables in favor of vertical cards for better readability on small screens.
- **Sticky CTAs**: Implemented a fixed conversion bar on the detail page to ensure the "Book" button is always accessible without scrolling.

### 3. What trade-offs did you make between the design and performance?
- **Glassmorphism vs. Bundle Size**: We used native CSS `backdrop-filter` which provides premium aesthetics with near-zero bundle size cost, unlike heavy SVG-based blur libraries.
- **No Heavy Frameworks**: I specifically avoided utility frameworks like Tailwind or Bootstrap to keep the CSS footprint minimal, ensuring rapid load times on throttled campus networks.
- **Simulated Latency**: I added mock loading states to the booking flow to improve *perceived* speed, ensuring the user feels the system is working even while simulating backend processing.

### 4. What was the most challenging part of the task and how did you approach it?
The most challenging part was **maintaining core structure while radically changing the user journey.** 
- **The Approach**: Instead of deleting the existing organizer pages, I refactored the global CSS and Navigation to make them look modern, while layering the *new* student routes on top. This preserved the original functionality while creating a high-performance entry point for the primary user (the student).

---

## Installation & Setup
1. **Navigate to the frontend directory**: `cd frontend`
2. **Install dependencies**: `npm install`
3. **Run the development server**: `npm run dev`
4. **Build for production**: `npm run build`

---
*Developed for the FOSSEE Project & IIT Bombay.*
