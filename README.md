# MENMED - Medical Equipment Procurement Platform

Professional B2B medical equipment sales and procurement platform for healthcare facilities in Nigeria.

## Overview

MENMED is built with modern web technologies to provide a seamless experience for healthcare facility procurement professionals. The platform features a professional interface for browsing, comparing, and ordering medical equipment at wholesale prices.

## Features

- **Professional Navbar**: Logo, navigation links, and Request Quote CTA
- **Hero Section**: Compelling headline and value proposition with dual CTAs
- **Stats Showcase**: Key metrics (500+ Equipment Models, 48hr Delivery, 200+ Facilities)
- **Feature Highlights**: Quality, speed, pricing, and support
- **Mobile Responsive**: Fully responsive design with hamburger menu for mobile devices
- **Modern Styling**: Navy blue (#0369a1) and white color scheme with Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd menmed-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
menmed-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with logo and menu
│   │   ├── HomePage.jsx        # Main page with hero and features
│   │   └── HeroSection.jsx     # Hero banner section
│   ├── App.jsx                 # Main app component with footer
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies and scripts
```

## Color Scheme

- **Primary Blue**: #0369a1
- **Primary Dark**: #0284c7
- **Primary Light**: #06b6d4
- **White**: #ffffff

## Navigation Links

- Medical Equipment
- Imaging Systems
- Point of Care
- Support & Parts

## Key Statistics

- 500+ Equipment Models
- 48 Hour Delivery
- 200+ Healthcare Facilities Served

## Customization

### Adding New Pages

1. Create a new component in `src/components/`
2. Import and use it in `App.jsx` or set up routing

### Modifying Colors

Edit the color values in `tailwind.config.js` to customize the theme:
```javascript
colors: {
  primary: '#0369a1',
  'primary-dark': '#0284c7',
  'primary-light': '#06b6d4',
}
```

### Responsive Design

All components are built mobile-first and responsive. The navbar includes a hamburger menu that automatically appears on smaller screens.

## Development

- Edit components in `src/components/`
- Styles are applied using Tailwind CSS classes
- Global styles are in `src/index.css`
- Changes automatically refresh in the browser

## Deployment

The built application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## License

© 2026 MENMED. All rights reserved.

## Support

For questions or support, contact: info@menmed.com
