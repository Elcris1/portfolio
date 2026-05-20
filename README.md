# Personal Portfolio

A modern portfolio website built with Astro and Tailwind CSS, featuring multi-language support and a clean, responsive design.

## Features

- **Multi-language Support**: Spanish, English, and Catalan
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all device sizes
- **Project Gallery**: Modal-based project showcase with images
- **Tech Stack Display**: Visual grid of technologies by category

## Prerequisites

- Node.js 18+
- pnpm (recommended)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will be available at `http://localhost:4321`

## Project Structure

```
src/
├── components/   # Astro components
├── data/         # Content configuration
│   ├── config.ts    # Personal info, social links, tech stack
│   ├── career.ts    # Work experience & education
│   └── projects.ts  # Project portfolio
├── i18n/         # Translations & i18n utilities
├── layouts/      # Base layouts
└── pages/        # Dynamic routes [lang]
```

## Customization

### Update Personal Information

Edit `src/data/config.ts` to update:
- Name, title, and tagline
- Email and location
- Social media links
- Tech stack categories and technologies

### Add Projects

Edit `src/data/projects.ts` to add new projects. Each project supports:
- Title and description (translatable)
- Images array for gallery
- Tags and tech stack
- Links to repo/demo

### Translate Content

Edit `src/i18n/translations.ts` to translate:
- UI elements (navigation, buttons, labels)
- Section titles
- Custom content fields in config

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |

## Deployment

The project is configured for static deployment. Build with `pnpm build` and deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

GitHub Actions workflow is included for automatic deployment on push to `master`.