# Portfolio Configuration Guide

## Config File Location
`src/data/config.ts`

## What is Stored

### Personal Info
- `name`, `title`, `tagline` (translatable: es/en/ca)
- `email`, `location` (translatable)
- `avatar` (URL or null)
- `social` (github, linkedin, twitter URLs)

### About Section
- `about` - Personal bio (translatable)

### Tech Stack (`config.stack`)
Categories: `Frontend`, `Backend`, `Databases`, `DevOps`, `Tools`, `Other`

Each technology entry has:
- `name` - Display name
- `icon` - Icon identifier (see below)

### Languages
Array of languages with `shortName`, `name`, `level` (all translatable), `badge`, `certification`

## How to Modify Data

Edit `src/data/config.ts`. Translatable fields use object format:
```ts
{ es: "Spanish", en: "English", ca: "Catalan" }
```

## Setting Icons for Tech Stack

### simpleicons.org (most common)
Use the slug from simpleicons.org:
```ts
{ name: "InfluxDB", icon: "influxdb" }
```

### Local icons (in `public/logos/`)
Use path without extension:
```ts
{ name: "Redis", icon: "logos/redis" }
```
Requires both `public/logos/redis.svg` and `public/logos/redis.white.svg` for light/dark mode.

### No icon
Omit the `icon` property or set to `null`:
```ts
{ name: "Scrum", icon: null }
```

## Projects Data (`src/data/projects.ts`)

Each project requires a unique `id` (used for `?project=id` URL-based modal opening):

```ts
{
  id: "my-project",        // unique slug, used in URL
  title: { es, en, ca },
  shortDescription: { es, en, ca },
  description: { es, en, ca },  // use \n\n for paragraph breaks
  tags: string[],
  mainImage?: ProjectImage,
  images?: ProjectImage[],
  repo?: string,
  demo?: string,
  featured: boolean,
  private?: boolean,
}
```

To open a project detail via URL: `?project=ecofruit`
