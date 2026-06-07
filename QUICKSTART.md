# Quick Start Guide

## Get Started in 5 Minutes

### 1. Install Dependencies
```bash
cd c:\Users\USER\menmed-website
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173`

## Build for Production
```bash
npm run build
```

## What's Inside

✅ Professional navbar with MENMED logo and navigation
✅ Hero section with compelling headline and CTAs
✅ Stats showcase (500+ Equipment, 48hr Delivery, 200+ Facilities)
✅ Features section highlighting value propositions
✅ Call-to-action banner
✅ Complete footer with links
✅ Mobile responsive design with hamburger menu
✅ Navy blue (#0369a1) and white color scheme
✅ Fully configured Tailwind CSS setup

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Responsive navigation
│   ├── HomePage.jsx    # Main page with stats & features
│   └── HeroSection.jsx # Hero banner
├── App.jsx             # Root component + footer
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Customize Content

### Navigation Links
Edit `src/components/Navbar.jsx` - Update the `navLinks` array

### Hero Content
Edit `src/components/HeroSection.jsx` - Update headline and subtext

### Stats
Edit `src/components/HomePage.jsx` - Modify the `stats` array

### Colors
Edit `tailwind.config.js` - Update color definitions

### Footer
Edit `src/App.jsx` - Update footer content

## Need Help?

See [SETUP.md](.github/SETUP.md) for detailed setup instructions and troubleshooting.
