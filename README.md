# Portfolio Personal

Portfolio personal construido con Astro y Tailwind CSS.

## Idiomas disponibles

- **Español** (`/es/`)
- **English** (`/en/`)
- **Català** (`/ca/`)

El idioma por defecto es español. Cambia el idioma usando los selectores en el header.

## Personalización

Edita los archivos en `/src/data/` para actualizar el contenido:

- **`config.ts`**: Información personal, redes sociales, stack tecnológico
- **`career.ts`**: Experiencia laboral y formación
- **`projects.ts`**: Lista de proyectos

Para traducir contenido personalizado, edita `/src/i18n/translations.ts`.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Estructura

```
src/
├── components/   # Componentes Astro
├── data/          # Archivos de configuración
├── i18n/          # Traducciones
├── layouts/      # Layout principal
└── pages/         # Páginas con rutas dinámicas [lang]
```

## Despliegue

El proyecto está listo para desplegar en Vercel, Netlify o cualquier hosting estático.

```bash
pnpm build
```