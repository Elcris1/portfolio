export interface Project {
  title: {
    es: string
    en: string
    ca: string
  }
  description: {
    es: string
    en: string
    ca: string
  }
  tags: string[]
  repo?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: {
      es: "Plataforma E-commerce",
      en: "E-commerce Platform",
      ca: "Plataforma E-commerce",
    },
    description: {
      es: "Plataforma de comercio electrónico completa con carrito, pagos y panel de administración.",
      en: "Complete e-commerce platform with cart, payments and admin panel.",
      ca: "Plataforma de comerç electrònic completa amb carret, pagaments i panell d'administració.",
    },
    tags: ["Astro", "TypeScript", "Stripe"],
    repo: "https://github.com/",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: {
      es: "App de Gestión de Tareas",
      en: "Task Management App",
      ca: "App de Gestió de Tasques",
    },
    description: {
      es: "Aplicación de gestión de tareas en tiempo real con colaboración en equipo.",
      en: "Real-time task management application with team collaboration.",
      ca: "Aplicació de gestió de tasques en temps real amb col·laboració en equip.",
    },
    tags: ["React", "Node.js", "Socket.io"],
    repo: "https://github.com/",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: {
      es: "Dashboard de APIs",
      en: "API Dashboard",
      ca: "Dashboard d'APIs",
    },
    description: {
      es: "Dashboard para monitoreo y análisis de APIs con métricas en tiempo real.",
      en: "Dashboard for API monitoring and analysis with real-time metrics.",
      ca: "Dashboard per a monitorització i anàlisi d'APIs amb mètriques en temps real.",
    },
    tags: ["Next.js", "PostgreSQL", "D3.js"],
    repo: "https://github.com/",
    featured: false,
  },
  {
    title: {
      es: "Generador de Portfolios",
      en: "Portfolio Generator",
      ca: "Generador de Portfolios",
    },
    description: {
      es: "Herramienta para generar portfolios personalizados desde una plantilla.",
      en: "Tool to generate custom portfolios from a template.",
      ca: "Eina per generar portfolios personalitzats des d'una plantilla.",
    },
    tags: ["Astro", "Tailwind CSS"],
    repo: "https://github.com/",
    demo: "https://demo.com",
    featured: false,
  },
]