# Portfolio Personal

Un lloc web de portfolio modern construït amb Astro i Tailwind CSS, amb suport multilingüe i un disseny net i adaptatiu.

## Característiques

- **Suport Multilingüe**: Espanyol, Anglès i Català
- **Mode Fosc**: Alternar entre temes clar i fosc
- **Disseny Adaptatiu**: Optimitzat per a totes les mides de pantalla
- **Galeria de Projectes**: Exhibició de projectes basada en modals amb imatges
- **Visualització del Tech Stack**: Grid visual de tecnologies per categoria

## Requisits Previs

- Node.js 18+
- pnpm (recomanat)

## Primers Passos

```bash
# Instal·lar dependències
pnpm install

# Iniciar servidor de desenvolupament
pnpm dev
```

El servidor de desenvolupament estarà disponible a `http://localhost:4321`

## Estructura del Projecte

```
src/
├── components/   # Components Astro
├── data/         # Configuració del contingut
│   ├── config.ts    # Informació personal, xarxes socials, stack tecnològic
│   ├── career.ts    # Experiència laboral i educació
│   └── projects.ts  # Portafoli de projectes
├── i18n/         # Traduccions i utilitats d'i18n
├── layouts/      # Layouts base
└── pages/        # Rutes dinàmiques [lang]
```

## Personalització

### Actualitzar Informació Personal

Edita `src/data/config.ts` per actualitzar:
- Nom, títol i eslògan
- Correu electrònic i ubicació
- Enllaços a xarxes socials
- Categories i tecnologies del stack

### Afegir Projectes

Edita `src/data/projects.ts` per afegir nous projectes. Cada projecte suporta:
- Títol i descripció (traduïble)
- Array d'imatges per la galeria
- Etiquetes i stack tecnològic
- Enllaços al repositori/demo

### Traduir Contingut

Edita `src/i18n/translations.ts` per traduir:
- Elements de la UI (navegació, botons, etiquetes)
- Títols de seccions
- Camps de contingut personalitzat a config

## Scripts Disponibles

| Comanda | Descripció |
|---------|-------------|
| `pnpm dev` | Iniciar servidor de desenvolupament |
| `pnpm build` | Compilar per a producció |
| `pnpm preview` | Previsualitzar compilació de producció |

## Desplegament

El projecte està configurat per a desplegament estàtic. Compila amb `pnpm build` i desplega a qualsevol servei d'allotjament estàtic (Vercel, Netlify, GitHub Pages, etc.).

S'inclou workflow de GitHub Actions per a desplegament automàtic en fer push a `master`.