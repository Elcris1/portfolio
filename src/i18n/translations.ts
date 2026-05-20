export type Language = 'es' | 'en' | 'ca'

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      career: "Carrera",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      viewProjects: "Ver proyectos",
      contact: "Contactar",
    },
    about: {
      title: "Sobre mí",
      location: "Ubicación",
      languagesTitle: "Idiomas",
      certification: "Certificación",
    },
    career: {
      title: "Carrera",
      work: "Trabajo",
      education: "Educación",
      present: "Actualidad"
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de proyectos en los que he trabajado",
      featured: "Destacado",
      repo: "Repositorio",
      demo: "Demo",
    },
    contact: {
      title: "Hablemos",
      subtitle: "¿Tienes un proyecto en mente o simplemente quieres saludar? Escríbeme y te responderé lo antes posible.",
      copyEmail: "Copiar email",
      copied: "¡Copiado!",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
    },
    todo: {
      title: "Próximamente",
      description: "Estoy trabajando en esta sección. Mientras tanto, puedes echar un vistazo a mis proyectos o contactarme.",
      section: "Esta sección está en construcción"
    },
    gallery: {
      description:  "Descripción", 
      technologies: "Tecnologías", 
      links: "Enlaces",
      gallery:  "Galería",
      noImages: "No hay imágenes disponibles" 
    }
  },
  en: {
    nav: {
      about: "About",
      career: "Career",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      viewProjects: "View projects",
      contact: "Contact",
    },
    about: {
      title: "About",
      location: "Location",
      languagesTitle: "Languages",
      certification: "Certification",
    },
    career: {
      title: "Career",
      work: "Work",
      education: "Education",
      present: "Present"
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of projects I've worked on",
      featured: "Featured",
      repo: "Repository",
      demo: "Demo",
    },
    contact: {
      title: "Let's talk",
      subtitle: "Have a project in mind or just want to say hi? Send me a message and I'll get back to you as soon as possible.",
      copyEmail: "Copy email",
      copied: "Copied!",
    },
    footer: {
      rights: "All rights reserved.",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    todo: {
      title: "Coming soon",
      description: "I'm working on this section. In the meantime, you can take a look at my projects or contact me.",
      section: "This section is under construction"
    },
    gallery: {
      description: "Description",
      technologies: "Technologies",
      links: "Links",
      gallery: "Gallery",
      noImages: "No images available"
    }
  },
  ca: {
    nav: {
      about: "Sobre mi",
      career: "Carrera",
      projects: "Projectes",
      contact: "Contacte",
    },
    hero: {
      greeting: "Hola, sóc",
      viewProjects: "Veure projectes",
      contact: "Contactar",
    },
    about: {
      title: "Sobre mi",
      location: "Ubicació",
      languagesTitle: "Idiomes",
      certification: "Certificació",
    },
    career: {
      title: "Carrera",
      work: "Treball",
      education: "Educació",
      present: "Actualitat"
    },
    projects: {
      title: "Projectes",
      subtitle: "Una selecció de projectes en els quals he treballat",
      featured: "Destacat",
      repo: "Repostori",
      demo: "Demo",
    },
    contact: {
      title: "Parlem",
      subtitle: "Tens un projecte en ment o simplement vols saludar? Escriu-me i et respondré el més aviat possible.",
      copyEmail: "Copiar email",
      copied: "Copiat!",
    },
    footer: {
      rights: "Tots els drets reservats.",
    },
    theme: {
      light: "Clar",
      dark: "Fosc",
    },
    todo: {
      title: "Proíximament",
      description: "Estic treballant en aquesta secció. Mentrestant, pots fer un cop d'ull als meus projectes o contactar-me.",
      section: "Aquesta secció està en construcció"
    },
    gallery: {
      description: "Descripció",
      technologies: "Tecnologies",
      links: "Enllaços",
      gallery: "Galeria",
      noImages: "No hi ha imatges disponibles"
    }
  },
} as const

export type TranslationKeys = typeof translations
export const defaultLang: Language = 'en'