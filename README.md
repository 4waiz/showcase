# Awaiz Ahmed | Portfolio

Starter for Awaiz Ahmed's personal portfolio website, built with Create React App and Tailwind CSS. The project is still an early scaffold.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Create React App](https://img.shields.io/badge/Create_React_App-5-09D3AC?logo=createreactapp&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)

## Overview

This repository holds the initial setup for a portfolio site. The page metadata describes Awaiz Ahmed as a Roblox developer, UI/UX designer, GFX artist and web developer.

**Current status:** `src/App.js` still renders the default Create React App welcome screen. The Tailwind theme and global styles are configured, and placeholder component files exist but are empty.

## What's Set Up

- **Tailwind CSS theme** (`tailwind.config.js`): class-based dark mode, a custom palette (purple primary, gold secondary, light/dark background and text colors), Poppins and Montserrat font families, and `fade-in-up` / `slide-in-left` animations.
- **Global styles** (`src/index.css`): Google Fonts import, themed body colors for light and dark, smooth scrolling and a custom scrollbar.
- **HTML shell** (`public/index.html`): portfolio title, meta description, theme color, custom favicon and app icons.
- **Placeholder components** in `src/components/common/`: `Navbar`, `Footer`, `Button`, `Section`, `AccordionItem` and `ThemeToggle`. All six files are currently empty.
- **Installed but not yet used:** React Router, Framer Motion, Heroicons, EmailJS (`@emailjs/browser`) and `gh-pages`.

## Tech Stack

- [React 19](https://react.dev) with [Create React App](https://create-react-app.dev) (`react-scripts` 5)
- [Tailwind CSS 3.4](https://tailwindcss.com) with PostCSS and Autoprefixer
- Jest and React Testing Library (via `react-scripts`) and `web-vitals`

## Getting Started

Prerequisites: Node.js and npm.

```bash
npm install
npm start          # dev server on http://localhost:3000
npm test           # Jest in watch mode (default CRA test)
npm run build      # production build to build/
npm run eject      # one-way CRA eject (not usually needed)
```

## Project Structure

```
public/
├── index.html           # title, meta description, theme color
├── favicon.ico, logo192.png, logo512.png
├── manifest.json
└── robots.txt
src/
├── App.js               # default CRA component (to be replaced)
├── App.css
├── App.test.js          # default CRA test
├── index.js             # entry point; calls reportWebVitals
├── index.css            # Tailwind directives, fonts, global styles
├── components/common/   # empty placeholder components
├── reportWebVitals.js
└── setupTests.js
tailwind.config.js
postcss.config.js
```

## Deployment

No deployment is configured yet. `gh-pages` is a dev dependency, but `package.json` has no `homepage` field or `deploy` script. `npm run build` produces a static `build/` folder that any static host can serve.

---

Built by [Awaiz Ahmed](https://github.com/4waiz) · Kanban Studios
