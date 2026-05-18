import type { Language } from "./config"

export interface ProjectImage {
  url: string
  alt: {
    [key in Language]: string
  }
}

export interface Project {
  title: {
    [key in Language]: string
  }
  shortDescription: {
    [key in Language]: string
  }
  description: {
    [key in Language]: string
  }
  tags: string[]
  images?: ProjectImage[]
  repo?: string
  demo?: string
  featured: boolean
  private?: boolean
}

export const projects: Project[] = [
  {
    title: {
      es: "Plataforma E-commerce",
      en: "E-commerce Platform",
      ca: "Plataforma E-commerce",
    },
    shortDescription: {
      es: "Plataforma de comercio electrónico completa con carrito, pagos y panel de administración.",
      en: "Complete e-commerce platform with cart, payments and admin panel.",
      ca: "Plataforma de comerç electrònic completa amb carret, pagaments i panell d'administració.",
    },
    description: {
      es: "Desarrollé una plataforma de comercio electrónico completa desde cero. La aplicación incluye un carrito de compras funcional, integración con Stripe para pagos, panel de administración para gestionar productos e inventario, sistema de usuarios con roles (cliente/admin), búsqueda avanzada de productos, filtrado por categorías y notificaciones por email.\n\nEl backend está construido con Node.js y Express, utilizando PostgreSQL como base de datos y Prisma como ORM. El frontend está desarrollado con Astro para máxima velocidad de carga y SEO optimizado.",
      en: "I developed a complete e-commerce platform from scratch. The application includes a functional shopping cart, Stripe integration for payments, admin panel to manage products and inventory, user system with roles (client/admin), advanced product search, category filtering and email notifications.\n\nThe backend is built with Node.js and Express, using PostgreSQL as the database and Prisma as ORM. The frontend is developed with Astro for maximum loading speed and optimized SEO.",
      ca: "Vaig desenvolupar una plataforma de comerç electrònic completa des de zero. L'aplicació inclou un carret de compres funcional, integració amb Stripe per a pagaments, panell d'administració per gestionar productes i inventari, sistema d'usuaris amb rols (client/admin), cerca avançada de productes, filtratge per categories i notificacions per email.\n\nEl backend està construït amb Node.js i Express, utilitzant PostgreSQL com a base de dades i Prisma com ORM. El frontend està desenvolupat amb Astro per a màxima velocitat de càrrega i SEO optimitzat.",
    },
    tags: ["Astro", "TypeScript", "Stripe", "Node.js", "PostgreSQL", "Prisma"],
    images: [
      { url: "/projects/ecommerce/hero.jpg", alt: { es: "Vista principal de la tienda", en: "Main store view", ca: "Vista principal de la botiga" } },
      { url: "/projects/ecommerce/cart.jpg", alt: { es: "Carrito de compras", en: "Shopping cart", ca: "Carret de compres" } },
      { url: "/projects/ecommerce/admin.jpg", alt: { es: "Panel de administración", en: "Admin panel", ca: "Panell d'administració" } },
    ],
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
    shortDescription: {
      es: "Aplicación de gestión de tareas en tiempo real con colaboración en equipo.",
      en: "Real-time task management application with team collaboration.",
      ca: "Aplicació de gestió de tasques en temps real amb col·laboració en equip.",
    },
    description: {
      es: "Apliación de gestión de tareas diseñada para equipos ágiles. Permite crear tableros Kanban, asignar tareas a miembros del equipo, establecer fechas límite, comentar en tareas y recibir notificaciones en tiempo real.\n\nLa colaboración en tiempo real está implementada con WebSockets (Socket.io), lo que permite ver los cambios de otros usuarios instantáneamente. El sistema de autenticación utiliza JWT y permite login con Google.",
      en: "Task management application designed for agile teams. Allows creating Kanban boards, assigning tasks to team members, setting deadlines, commenting on tasks and receiving real-time notifications.\n\nReal-time collaboration is implemented with WebSockets (Socket.io), allowing to see other users' changes instantly. The authentication system uses JWT and allows login with Google.",
      ca: "Aplicació de gestió de tasques dissenyada per a equips àgils. Permet crear taulers Kanban, assignar tasques a membres de l'equip, establir terminis, comentar en tasques i rebre notificacions en temps real.\n\nLa col·laboració en temps real està implementada amb WebSockets (Socket.io), permetent veure els canvis d'altres usuaris instantàniament. El sistema d'autenticació utilitza JWT i permet login amb Google.",
    },
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
    images: [
      { url: "/projects/tasks/board.jpg", alt: { es: "Tablero Kanban", en: "Kanban board", ca: "Tauler Kanban" } },
      { url: "/projects/tasks/task.jpg", alt: { es: "Detalle de tarea", en: "Task detail", ca: "Detall de tasca" } },
    ],
    repo: "https://github.com/",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: {
      es: "Sistema de Gestión Empresarial",
      en: "Enterprise Management System",
      ca: "Sistema de Gestió Empresarial",
    },
    shortDescription: {
      es: "Sistema interno de gestión para una empresa de logística con módulos de inventario, pedidos y reporting.",
      en: "Internal management system for a logistics company with inventory, orders and reporting modules.",
      ca: "Sistema intern de gestió per a una empresa de logística amb mòduls d'inventari, comandes i reporting.",
    },
    description: {
      es: "Desarrollé un sistema de gestión empresarial completo para una empresa de logística. El sistema incluye módulos de:\n\n- **Inventario**: Control de stock en tiempo real, alertas de stock mínimo, gestión de almacén\n- **Pedidos**: Creación y seguimiento de pedidos, estados de envío, integración con transportistas\n- **Reporting**: Dashboard con métricas clave, gráficos de ventas, informes exportables a PDF/Excel\n- **Usuarios**: Sistema de roles y permisos, historial de acciones\n\nEste fue un proyecto privado para un cliente, por lo que el código no está disponible públicamente.",
      en: "I developed a complete enterprise management system for a logistics company. The system includes modules for:\n\n- **Inventory**: Real-time stock control, minimum stock alerts, warehouse management\n- **Orders**: Order creation and tracking, shipping statuses, carrier integration\n- **Reporting**: Dashboard with key metrics, sales charts, reports exportable to PDF/Excel\n- **Users**: Role and permission system, action history\n\nThis was a private project for a client, so the code is not publicly available.",
      ca: "Vaig desenvolupar un sistema de gestió empresarial complet per a una empresa de logística. El sistema inclou mòduls de:\n\n- **Inventari**: Control d'estoc en temps real, alertes d'estoc mínim, gestió d'emmagatzematge\n- **Comandes**: Creació i seguiment de comandes, estats d'enviament, integració amb transportistes\n- **Reporting**: Dashboard amb mètriques clau, gràfics de vendes, informes exportables a PDF/Excel\n- **Usuaris**: Sistema de rols i permisos, historial d'accions\n\nAquest va ser un projecte privat per a un client, per la qual cosa el codi no està disponible públiquement.",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    images: [
      { url: "/projects/enterprise/dashboard.jpg", alt: { es: "Dashboard principal", en: "Main dashboard", ca: "Dashboard principal" } },
      { url: "/projects/enterprise/inventory.jpg", alt: { es: "Gestión de inventario", en: "Inventory management", ca: "Gestió d'inventari" } },
      { url: "/projects/enterprise/orders.jpg", alt: { es: "Seguimiento de pedidos", en: "Order tracking", ca: "Seguiment de comandes" } },
    ],
    featured: true,
    private: true,
  },
  {
    title: {
      es: "Dashboard de APIs",
      en: "API Dashboard",
      ca: "Dashboard d'APIs",
    },
    shortDescription: {
      es: "Dashboard para monitoreo y análisis de APIs con métricas en tiempo real.",
      en: "Dashboard for API monitoring and analysis with real-time metrics.",
      ca: "Dashboard per a monitorització i anàlisi d'APIs amb mètriques en temps real.",
    },
    description: {
      es: "Dashboard de monitoreo para APIs internas. Permite visualizar métricas de uso, latencia, errores y uptime. Incluye alertas configurables por email y Slack, y generación de informes periódicos.\n\nLa interfaz utiliza gráficos interactivos con D3.js para visualización de datos.",
      en: "Monitoring dashboard for internal APIs. Allows visualizing usage metrics, latency, errors and uptime. Includes configurable alerts via email and Slack, and periodic report generation.\n\nThe interface uses interactive charts with D3.js for data visualization.",
      ca: "Dashboard de monitorització per a APIs internes. Permet visualitzar mètriques d'ús, latència, errors i uptime. Inclou alertes configurables per email i Slack, i generació d'informes periòdics.\n\nLa interfície utilitza gràfics interactius amb D3.js per a visualització de dades.",
    },
    tags: ["Next.js", "PostgreSQL", "D3.js", "TypeScript"],
    images: [
      { url: "/projects/api/metrics.jpg", alt: { es: "Métricas en tiempo real", en: "Real-time metrics", ca: "Mètriques en temps real" } },
    ],
    repo: "https://github.com/",
    featured: false,
  },
]