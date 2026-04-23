# Cakery Website

A modern bakery website built with React and Vite.

## Features

- **Home Page** - Hero section with featured products and newsletter signup
- **About Page** - Company information and bento-style showcase
- **Products Page** - Product catalog with filtering and detailed product cards
- **Contact Page** - Contact form for customer inquiries

## Tech Stack

- React 19
- Vite 8
- React Router DOM 6
- Tailwind CSS 4

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # Static data (products, etc.)
├── routes/         # Page components
├── assets/        # Images and static assets
├── App.jsx         # Main app component
├── main.jsx        # Entry point
└── index.css      # Global styles
```