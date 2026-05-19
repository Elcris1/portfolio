import type { Language } from "../i18n/translations"

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
  mainImage?: ProjectImage,
  images?: ProjectImage[]
  repo?: string
  demo?: string
  featured: boolean
  private?: boolean
}

export const projects: Project[] = [
  {
    title: {
      es: "EcoFruit - MarketPlace de productos agrícolas",
      en: "EcoFruit - Marketplace for farm products",
      ca: "EcoFruit - MarketPlace de productes agrícoles",
    },
    shortDescription: {
      es: "Aplicación nativa para Android que conecta agricultores locales con consumidores, facilitando la compra de productos frescos y sostenibles directamente desde el campo.",
      en: "Native Android application that connects local farmers with consumers, easing the purchase of fresh and sustainable products directly from the field.",
      ca: "Aplicació nativa per a Android que connecta agricultors locals amb consumidors, facilitant la compra de productes frescos i sostenibles directament des del camp.",
    },
    description: {
      es: "Proyecto realizado para la universidad como parte del trabajo de una asignatura. És una aplicación nativa para Android que conecta agricultores locales con consumidores, facilitando la compra de productos frescos y sostenibles directamente desde el campo. \n\nLa aplicación incluye algoritmo de recomendación basico de productos, seguir a agricultores y productos favoritos, añadir reviews tanto al producto como al productor así como un sistema de chat entre el cliente y el agricultor para resolver dudas sobre el producto o la entrega.\n\nEl backend está construido con Firebase y cloud Functions para las notificaciones push, mientras que el frontend está desarrollado con JetPack Compose para una experiencia de usuario fluida e intuitiva.\n\nTanto Firebase Cloud Functions como los scripts de sopoerte para generar datos mockeados en Firebase han sido implementados en Python. \n\nLa aplicación esta disponible en un tema oscuro y claro, así como la traducción al ingles, español y catalán.",
      en: "Project completed for university as part of the coursework. It is a native Android application that connects local farmers with consumers, easing the purchase of fresh and sustainable products directly from the field. \n\nThe application includes a basic product recommendation algorithm, following farmers and favorite products, adding reviews both to the product and the producer as well as a chat system between the customer and the farmer to resolve doubts about the product or delivery.\n\nThe backend is built with Firebase and cloud Functions for push notifications, while the frontend is developed with JetPack Compose for a smooth and intuitive user experience.\n\n Firebase Cloud Functions and some support scripts for generating mock data in Firebase have been implemented in Python. \n\nThe application is available with both dark and light themes and is translated into English, Spanish, and Catalan.",
      ca: "Projecte realitzat per a la universitat com a part del treball de una assignatura. És una aplicació nativa per a Android que connecta agricultors locals amb consumidors, facilitant la compra de productes frescos i sostenibles directament des del camp. \n\nL'aplicació inclou un algoritme de recomanació bàsic de productes, seguir agricultors i productes favorits, afegir ressenyes tant al producte com al productor així com un sistema de xat entre el client i l'agricultor per resoldre dubtes sobre el producte o l'entrega.\n\nEl backend està construït amb Firebase i cloud Functions per a les notificacions push, mentre que el frontend està desenvolupat amb JetPack Compose per a una experiència d'usuari fluida i intuïtiva.\n\n Tant Firebase Cloud Functions com els scripts de suport per generar dades mockeades en Firebase han estat implementats en Python. \n\nL'aplicació està disponible amb un tema fosc i clar, així com la traducció en anglès, castellà i català.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Python", "Firebase", "Cloud Functions"],
    mainImage: {
      url: "projects/ecofruit/view-product.png", alt: {
        es: "Producto detallado",
        en: "Detailed Product view",
        ca: "Producte detallat"
      }
    }, 
    images: [
      {url: "projects/ecofruit/init.png", alt: {
        es: "Página incicial",
        en: "Launcher page",
        ca: "Pàgina inicial"
      }},
      {url: "projects/ecofruit/login.png", alt: {
        es: "Página de inicio de sesión",
        en: "Login page",
        ca: "Pàgina d&apos;inici de sessió"
      }},
      {url: "projects/ecofruit/home.png", alt: {
        es: "Menú principal",
        en: "Main menu",
        ca: "Menú principal"
      }},
      {url: "projects/ecofruit/search-products.png", alt: {
        es: "Búsqueda de productos",
        en: "Product search",
        ca: "Cerca de productes"
      }},
      {url: "projects/ecofruit/view-product.png", alt: {
        es: "Producto detallado",
        en: "Detailed Product view",
        ca: "Producte detallat"
      }},
      {url: "projects/ecofruit/add-reviews.png", alt: {
        es: "Agregar reseña a productos",
        en: "Add Review to products",
        ca: "Afegir ressenya a productes"
      }},
      {url: "projects/ecofruit/product-reviews.png", alt: {
        es: "Ver reseñas de los productos",
        en: "View Product Reviews",
        ca: "Veure ressenyes dels productes"
      }},
      {url: "projects/ecofruit/set-product-location.png", alt: {
        es: "Establecer ubicación del producto",
        en: "Set Product Location",
        ca: "Establir ubicació del producte"
      }},
      {url: "projects/ecofruit/edit-user-profile.png", alt: {
        es: "Editar perfil del usuario",
        en: "Edit User Profile",
        ca: "Editar perfil de l&apos;usuari"
      }},
      {url: "projects/ecofruit/view-profile-products.png", alt: {
        es: "Ver productos del usuario",
        en: "View User Products",
        ca: "Veure productes de l&apos;usuari"
      }},
      {url: "projects/ecofruit/view-profile-reviews.png", alt: {
        es: "Ver reseñas del usuario",
        en: "View User Reviews",
        ca: "Veure ressenyes de l&apos;usuari"
      }},
      {url: "projects/ecofruit/conversation.png", alt: {
        es: "Chat integrado",
        en: "Integrated chat",
        ca: "Xat integrat"
      }},
      {url: "projects/ecofruit/notification.png", alt: {
        es: "Notificaciones",
        en: "Notifications",
        ca: "Notificacions"
      }},
    ],
    repo: "https://github.com/Elcris1/PEX-EcoFruit",
    featured: true,
  },
//   {
//     title: {
//       es: "App de Gestión de Tareas",
//       en: "Task Management App",
//       ca: "App de Gestió de Tasques",
//     },
//     shortDescription: {
//       es: "Aplicación de gestión de tareas en tiempo real con colaboración en equipo.",
//       en: "Real-time task management application with team collaboration.",
//       ca: "Aplicació de gestió de tasques en temps real amb col·laboració en equip.",
//     },
//     description: {
//       es: "Apliación de gestión de tareas diseñada para equipos ágiles. Permite crear tableros Kanban, asignar tareas a miembros del equipo, establecer fechas límite, comentar en tareas y recibir notificaciones en tiempo real.\n\nLa colaboración en tiempo real está implementada con WebSockets (Socket.io), lo que permite ver los cambios de otros usuarios instantáneamente. El sistema de autenticación utiliza JWT y permite login con Google.",
//       en: "Task management application designed for agile teams. Allows creating Kanban boards, assigning tasks to team members, setting deadlines, commenting on tasks and receiving real-time notifications.\n\nReal-time collaboration is implemented with WebSockets (Socket.io), allowing to see other users' changes instantly. The authentication system uses JWT and allows login with Google.",
//       ca: "Aplicació de gestió de tasques dissenyada per a equips àgils. Permet crear taulers Kanban, assignar tasques a membres de l'equip, establir terminis, comentar en tasques i rebre notificacions en temps real.\n\nLa col·laboració en temps real està implementada amb WebSockets (Socket.io), permetent veure els canvis d'altres usuaris instantàniament. El sistema d'autenticació utilitza JWT i permet login amb Google.",
//     },
//     tags: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
//     images: [],
//     repo: "https://github.com/",
//     demo: "https://demo.com",
//     featured: true,
//   },
//   {
//     title: {
//       es: "Sistema de Gestión Empresarial",
//       en: "Enterprise Management System",
//       ca: "Sistema de Gestió Empresarial",
//     },
//     shortDescription: {
//       es: "Sistema interno de gestión para una empresa de logística con módulos de inventario, pedidos y reporting.",
//       en: "Internal management system for a logistics company with inventory, orders and reporting modules.",
//       ca: "Sistema intern de gestió per a una empresa de logística amb mòduls d'inventari, comandes i reporting.",
//     },
//     description: {
//       es: "Desarrollé un sistema de gestión empresarial completo para una empresa de logística. El sistema incluye módulos de:\n\n- **Inventario**: Control de stock en tiempo real, alertas de stock mínimo, gestión de almacén\n\n- **Pedidos**: Creación y seguimiento de pedidos, estados de envío, integración con transportistas\n- **Reporting**: Dashboard con métricas clave, gráficos de ventas, informes exportables a PDF/Excel\n- **Usuarios**: Sistema de roles y permisos, historial de acciones\n\nEste fue un proyecto privado para un cliente, por lo que el código no está disponible públicamente.",
//       en: "I developed a complete enterprise management system for a logistics company. The system includes modules for:\n\n- **Inventory**: Real-time stock control, minimum stock alerts, warehouse management\n\n- **Orders**: Order creation and tracking, shipping statuses, carrier integration\n- **Reporting**: Dashboard with key metrics, sales charts, reports exportable to PDF/Excel\n- **Users**: Role and permission system, action history\n\nThis was a private project for a client, so the code is not publicly available.",
//       ca: "Vaig desenvolupar un sistema de gestió empresarial complet per a una empresa de logística. El sistema inclou mòduls de:\n\n- **Inventari**: Control d'estoc en temps real, alertes d'estoc mínim, gestió d'emmagatzematge\n- **Comandes**: Creació i seguiment de comandes, estats d'enviament, integració amb transportistes\n- **Reporting**: Dashboard amb mètriques clau, gràfics de vendes, informes exportables a PDF/Excel\n\n- **Usuaris**: Sistema de rols i permisos, historial d'accions\n\nAquest va ser un projecte privat per a un client, per la qual cosa el codi no està disponible públiquement.",
//     },
//     tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
//     images: [],
//     featured: true,
//     private: true,
//   },
//   {
//     title: {
//       es: "Dashboard de APIs",
//       en: "API Dashboard",
//       ca: "Dashboard d'APIs",
//     },
//     shortDescription: {
//       es: "Dashboard para monitoreo y análisis de APIs con métricas en tiempo real.",
//       en: "Dashboard for API monitoring and analysis with real-time metrics.",
//       ca: "Dashboard per a monitorització i anàlisi d'APIs amb mètriques en temps real.",
//     },
//     description: {
//       es: "Dashboard de monitoreo para APIs internas. Permite visualizar métricas de uso, latencia, errores y uptime. Incluye alertas configurables por email y Slack, y generación de informes periódicos.\n\nLa interfaz utiliza gráficos interactivos con D3.js para visualización de datos.",
//       en: "Monitoring dashboard for internal APIs. Allows visualizing usage metrics, latency, errors and uptime. Includes configurable alerts via email and Slack, and periodic report generation.\n\nThe interface uses interactive charts with D3.js for data visualization.",
//       ca: "Dashboard de monitorització per a APIs internes. Permet visualitzar mètriques d'ús, latència, errors i uptime. Inclou alertes configurables per email i Slack, i generació d'informes periòdics.\n\nLa interfície utilitza gràfics interactius amb D3.js per a visualització de dades.",
//     },
//     tags: ["Next.js", "PostgreSQL", "D3.js", "TypeScript"],
//     mainImage: { url: "/projects/api/metrics.svg", alt: { es: "Métricas en tiempo real", en: "Real-time metrics", ca: "Mètriques en temps real" } },
//     images: [
//       { url: "/projects/api/metrics.svg", alt: { es: "Métricas en tiempo real", en: "Real-time metrics", ca: "Mètriques en temps real" } },
//     ],
//     repo: "https://github.com/",
//     featured: false,
//   },
//   {
//     title: {
//       es: "Proyecto Template",
//       en: "Template Project",
//       ca: "Projecte Template",
//     },
//     shortDescription: {
//       es: "Proyecto de prueba con galería de imágenes para demostrar la funcionalidad.",
//       en: "Test project with image gallery to demonstrate functionality.",
//       ca: "Projecte de prova amb galeria d'imatges per demostrar la funcionalitat.",
//     },
//     description: {
//       es: "Este es un proyecto de prueba creado para demostrar la funcionalidad de la galería de imágenes.\n\nLa galería permite:\n- Ver múltiples imágenes del proyecto\n- Navegar entre ellas fácilmente\n- Ver descripciones de cada imagen\n\nTodas las imágenes están organizadas en la carpeta `public/projects/`.",
//       en: "This is a test project created to demonstrate the image gallery functionality.\n\nThe gallery allows:\n- View multiple project images\n- Navigate between them easily\n- See descriptions for each image\n\nAll images are organized in the `public/projects/` folder.",
//       ca: "Aquest és un projecte de prova creat per demostrar la funcionalitat de la galeria d'imatges.\n\nLa galeria permet:\n- Veure múltiples imatges del projecte\n- Navegar entre elles fàcilment\n- Veure descripcions de cada imatge\n\nTotes les imatges estan organitzades a la carpeta `public/projects/`.",
//     },
//     tags: ["Astro", "TypeScript", "Template"],
//     mainImage: { url: "/projects/template/hero.svg", alt: { es: "Vista principal del proyecto", en: "Main project view", ca: "Vista principal del projecte" } },
//     images: [
//       { url: "/projects/template/hero.svg", alt: { es: "Vista principal del proyecto", en: "Main project view", ca: "Vista principal del projecte" } },
//       { url: "/projects/template/dashboard.svg", alt: { es: "Vista del dashboard", en: "Dashboard view", ca: "Vista del dashboard" } },
//       { url: "/projects/template/settings.svg", alt: { es: "Panel de configuración", en: "Settings panel", ca: "Panell de configuració" } },
//     ],
//     repo: "https://github.com/Elcris1/portfolio",
//     demo: "http://localhost:4321",
//     featured: true,
//   },
]