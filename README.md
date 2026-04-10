# **Workshop Booking - UI/UX Redesign**

This repository contains the prototype for the UI/UX redesign of the FOSSEE Workshop Booking website. The application was rebuilt as a modern **React (Vite) Single Page Application** to radically improve performance, mobile responsiveness, and overall aesthetics.

## UI/UX Redesign Reasoning

**1. What design principles guided your improvements?**
The redesign was guided by "Rich Aesthetics" and simplicity. I focused on a modern glassmorphism UI framework overlaid on subtle gradients. Instead of overloading the user with dense data, I aimed for clear visual hierarchy: important actions (like "Propose Workshop") are highlighted with distinct styling (primary button colors and highlighted borders). The typography defaults to a standard, clean sans-serif system font stack for maximum legibility. The codebase itself prioritizes simple, standard React without over-engineering complex global state or prop drilling where unnecessary.

**2. How did you ensure responsiveness across devices?**
A strictly mobile-first approach was taken. To dramatically improve navigation on small screens, the traditional top header was replaced with a bottom tab navigation bar for mobile devices, which is much more ergonomic for thumb reach. The CSS relies heavily on Flexbox and Grid layouts that map to a single column by default, gracefully expanding into multi-column layouts at desktop breakpoints (`min-width: 768px`).

**3. What trade-offs did you make between the design and performance?**
To keep load times fast (and since this is optimized for Vite), I avoided heavy pre-processors and gigantic UI libraries like Bootstrap or Material-UI. Instead, I hand-wrote modular, vanilla CSS (`.css` files per component domain). The trade-off is a slightly higher initial authoring effort, but it pays off with zero runtime CSS-in-JS overhead, producing a highly performant and accessible app that loads instantly.

**4. What was the most challenging part of the task and how did you approach it?**
The most challenging part of the task was breaking down the legacy Django templates into purely structural, stateful React components without losing the essence of the "Workshop Booking" dashboard flow. To solve this, I mapped out the core features first (Statistics, Status, Proposing) and constructed a clean router system. I then mocked the data explicitly to focus entirely on layout, semantics, and mobile usability without getting bogged down by immediate backend integration bottlenecks.

---

### Setup Instructions

1. Navigate to the `frontend/` directory.
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies.
   ```bash
   npm install
   ```
3. Run the Vite development server.
   ```bash
   npm run dev
   ```

### Live Demo / Visual Showcase

Since this is a local repository redesign, a **live development preview** is the best way to interact with the responsive layouts and micro-animations. 

* **Desktop View**: Open `http://localhost:5173/` on your computer.
* **Mobile View**: Open the browser's Developer Tools (F12) and toggle the Device Toolbar (Ctrl+Shift+M) to explicitly review the bottom app-bar navigation constraints.
