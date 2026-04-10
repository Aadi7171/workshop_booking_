# Project Architecture

## Overview

The FOSSEE Workshop Portal is a modern Single Page Application (SPA) built with React. It focuses on modularity, performance, and accessibility to provide a seamless experience for both organizers and participants.

## Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/) for fast development and optimized production bundles.
- **Routing**: [React Router](https://reactrouter.com/) for client-side navigation.
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async) for dynamic metadata management.
- **Icons**: [Lucide React](https://lucide.dev/) for consistent, lightweight iconography.
- **Styling**: Vanilla CSS with a global design system and component-level isolation.

## Folder Structure

The project follows a modular structure to ensure maintainability and scalability:

```text
frontend/
├── public/              # Static assets (logo, favicon)
├── src/
│   ├── components/      # Reusable UI micro-components
│   ├── pages/           # High-level route components and page styles
│   ├── App.jsx          # Main routing and layout integration
│   ├── index.css        # Global CSS design system and tokens
│   └── main.jsx         # Entry point
├── ARCHITECTURE.md      # This document
├── CONTRIBUTING.md      # Contribution guidelines
└── README.md            # Project overview
```

