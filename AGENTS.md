# Portfolio - Astro + Tailwind

## Stack
- **Framework**: Astro (static site)
- **Package manager**: pnpm
- **Styling**: Tailwind CSS v3 (`@astrojs/tailwind`)
- **Language**: TypeScript

## Commands
```bash
pnpm dev     # Development server
pnpm build   # Production build
```

## Deployment
- GitHub Actions auto-deploys on push to `main`
- Workflow creates `.env` with `ENV=prod` for production build
- Config uses `site` and `base` only when `ENV=prod`

### Environment Variables
Create `.env` or `.env.example` with:
```
ENV=dev              # or 'prod' for production
SITE_URL=...
BASE_PATH=...
```

## Key Structure

### Routes & i18n
- Page routes use `[lang]` dynamic route: `src/pages/[lang].astro`
- Languages: `es`, `en`, `ca` (defined in `src/i18n/translations.ts`)
- Root `/` redirects to `/es/`
- Use `getLangFromUrl(Astro.url)` to get current language in components

### Data Files
All editable content is in `/src/data/`:
- `config.ts` - Personal info, social links, stack (translatable fields use `{es, en, ca}` object)
- `career.ts` - Experience/education with `startYear`, `endYear`
- `projects.ts` - Projects with `shortDescription`, `description`, `images` array

### Translations
- `/src/i18n/translations.ts` - UI strings for nav, hero, sections
- `/src/i18n/utils.ts` - `getLangFromUrl()`, `useTranslations()`, `languages`

### Components
Components receive language from URL, not props. Use:
```ts
const lang = getLangFromUrl(Astro.url) as Language
const t = useTranslations(lang)
```

### Dark Mode
- Uses Tailwind `dark:` classes with `darkMode: 'class'`
- Toggle persists to `localStorage.theme`
- Include `dark` class on `<html>` to activate

### Tailwind Version
Must use **Tailwind v3** (not v4) for `@astrojs/tailwind` compatibility:
```json
"@astrojs/tailwind": "^5",
"tailwindcss": "^3"
```

## Important Notes
- Career section has two columns: education (left, green) and work (right, blue)
- Projects have modal with detailed description and gallery (click to open)
- Private projects (`private: true`) hide repo/demo links
- Images go in `public/projects/[name]/[file].jpg`