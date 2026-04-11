# FOSSEE Workshop Booking — UI/UX Redesign

A mobile-first student platform for discovering and booking technical workshops faster and with less friction. Built as a React (Vite) SPA layered on top of the existing Django backend, as part of the FOSSEE UI/UX Enhancement screening task.

### 📺 Live Demo Walkthrough

🔗 **[View deployed demo →](https://your-vercel-url.vercel.app)**

[![Live Demo Walkthrough](./docs/recordings/demo.webp)](./docs/recordings/demo.webp)
> To run locally: `cd frontend && npm install && npm run dev`, then open `http://localhost:5173`.

---

## 🛠️ Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev       # Development server at http://localhost:5173
npm run build     # Production build

## 🏗️ Project Structure

```text
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
