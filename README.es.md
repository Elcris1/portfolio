# Portfolio Personal

Un sitio web de portfolio moderno construido con Astro y Tailwind CSS, con soporte multiidioma y un diseño limpio y responsivo.

## Características

- **Soporte Multiidioma**: Español, Inglés y Catalán
- **Modo Oscuro**: Alternar entre temas claro y oscuro
- **Diseño Responsivo**: Optimizado para todos los tamaños de pantalla
- **Galería de Proyectos**: Exhibición de proyectos basada en modales con imágenes
- **Visualización de Tech Stack**: Grid visual de tecnologías por categoría

## Requisitos Previos

- Node.js 18+
- pnpm (recomendado)

## Primeros Pasos

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`

## Estructura del Proyecto

```
src/
├── components/   # Componentes Astro
├── data/         # Configuración de contenido
│   ├── config.ts    # Información personal, redes, stack tecnológico
│   ├── career.ts    # Experiencia laboral y educación
│   └── projects.ts  # Portafolio de proyectos
├── i18n/         # Traducciones y utilidades de i18n
├── layouts/      # Layouts base
└── pages/        # Rutas dinámicas [lang]
```

## Personalización

### Actualizar Información Personal

Edita `src/data/config.ts` para actualizar:
- Nombre, título y eslogan
- Correo electrónico y ubicación
- Enlaces a redes sociales
- Categorías y tecnologías del stack

### Añadir Proyectos

Edita `src/data/projects.ts` para añadir nuevos proyectos. Cada proyecto soporta:
- Título y descripción (traducible)
- Array de imágenes para la galería
- Etiquetas y stack tecnológico
- Enlaces a repositorio/demo

### Traducir Contenido

Edita `src/i18n/translations.ts` para traducir:
- Elementos de la UI (navegación, botones, etiquetas)
- Títulos de secciones
- Campos de contenido personalizado en config

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Iniciar servidor de desarrollo |
| `pnpm build` | Compilar para producción |
| `pnpm preview` | Previsualizar compilación de producción |

## Despliegue

El proyecto está configurado para despliegue estático. Compila con `pnpm build` y despliega en cualquier servicio de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

Se incluye workflow de GitHub Actions para despliegue automático al hacer push a `master`.