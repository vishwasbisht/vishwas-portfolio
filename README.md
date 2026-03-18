# Vishwas Bisht — Portfolio

A premium, glassmorphic single-page portfolio built with **React + Vite**.

## ✨ Features

- 🌙 / ☀️ Dark & Light theme toggle
- 🎨 Glassmorphic UI with animated canvas background
- ⌨️ Typewriter hero effect
- 🃏 3D-tilt hover cards (Projects, Skills, Services, Contact)
- 📱 Fully responsive with hamburger menu
- 🔭 Scroll-reveal animations via IntersectionObserver
- 🎯 Sections: Hero · About · Skills · Projects · Services · Contact

## 🗂 Project Structure

```
vishwas-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # Global styles & keyframes
    ├── theme.js           # Dark / light token objects
    ├── hooks/
    │   ├── useTypewriter.js
    │   └── useInView.js
    └── components/
        ├── AnimatedBG.jsx
        ├── GlowOrbs.jsx
        ├── GlassCard.jsx
        ├── Section.jsx
        ├── ThemeToggle.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Services.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- React 18
- Vite 5
- Lucide React (icons)
- Pure CSS animations (no extra animation library needed)

## 🎨 Color Palette

| Token | Dark | Light |
|-------|------|-------|
| Background | `#020617` | `#eef4ff` |
| Accent Blue | `#3b82f6` | `#3b82f6` |
| Accent Cyan | `#22d3ee` | `#22d3ee` |
