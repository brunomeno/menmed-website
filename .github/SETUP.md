# MENMED Project Setup Guide

## Prerequisites

Before you can run this project, you need to have the following installed on your system:

### Required
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (usually comes with Node.js)

### Recommended
- **Git** - for version control
- **VS Code** - for development

## Installation Steps

### 1. Install Node.js

If you haven't already installed Node.js:
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```

### 2. Install Project Dependencies

Navigate to the project directory and install dependencies:

```bash
cd c:\Users\USER\menmed-website
npm install
```

This will install all required packages including:
- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

### 3. Start Development Server

Run the development server:

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:5173`

## Available Commands

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deploying.

## Using VS Code Tasks

The project includes pre-configured tasks in `.vscode/tasks.json`:

1. **MENMED: Dev Server** - Press `Ctrl+Shift+B` or go to Terminal → Run Task
2. **MENMED: Build** - Builds the project for production
3. **MENMED: Preview** - Previews the production build locally

## Project Structure

```
menmed-website/
├── .github/
│   └── copilot-instructions.md    # Project documentation
├── .vscode/
│   ├── tasks.json                 # VS Code tasks
│   ├── launch.json                # Debugger configuration
│   └── settings.json              # Editor settings
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation component
│   │   ├── HomePage.jsx           # Main page
│   │   └── HeroSection.jsx        # Hero banner
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies
└── README.md                      # Project documentation
```

## Features

### Navbar
- MENMED logo
- Navigation links (Medical Equipment, Imaging Systems, Point of Care, Support & Parts)
- Request Quote CTA button
- Mobile hamburger menu

### Hero Section
- Headline: "Direct Procurement for Healthcare Facilities"
- Subtext: Wholesale pricing information
- Two CTA buttons (Browse Equipment, Request Catalog)
- Visual placeholder

### Stats Section
- 500+ Equipment Models
- 48hr Delivery
- 200+ Facilities Served

### Features Section
- Wholesale Pricing
- Fast Delivery
- Quality Assured
- Expert Support

### CTA Section
- Call-to-action banner
- Request Quote button

### Footer
- Company information
- Product links
- Support links
- Contact information
- Legal links

## Customization

### Colors
Edit `tailwind.config.js` to change colors:
```javascript
colors: {
  primary: '#0369a1',        // Navy blue
  'primary-dark': '#0284c7', // Darker blue
  'primary-light': '#06b6d4',// Lighter blue
  white: '#ffffff',          // White
}
```

### Content
- Update text in component files in `src/components/`
- Edit footer links in `src/App.jsx`
- Modify navigation links in `src/components/Navbar.jsx`

### Styling
- Global styles: `src/index.css`
- Component classes: Tailwind CSS classes directly in JSX
- Custom utilities: Defined in `@layer` sections in `index.css`

## Troubleshooting

### "npm command not found"
- Node.js is not installed or not in your PATH
- Restart your terminal or system after installing Node.js

### Port 5173 already in use
- Another application is using port 5173
- Kill the process or configure Vite to use a different port in `vite.config.js`

### Build errors
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Styling not working
- Ensure Tailwind CSS is properly installed: `npm install`
- Check that `src/index.css` is imported in `src/main.jsx`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Vite and deploys

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Manual Deployment
1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting
3. Ensure server is configured to serve `index.html` for all routes

## Development Tips

1. **Hot Module Replacement (HMR)**: Changes to components automatically reflect in the browser
2. **Browser DevTools**: Use React DevTools and Tailwind CSS IntelliSense for debugging
3. **Tailwind Classes**: All styling uses Tailwind utility classes for consistency
4. **Component Reusability**: Extract common patterns into reusable components

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Support

For issues or questions, refer to:
- Project README.md
- Component documentation in code comments
- Official documentation of frameworks used

## Next Steps

1. Install Node.js if not already installed
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start development
4. Open `http://localhost:5173` in your browser
5. Begin customizing the project for your needs
