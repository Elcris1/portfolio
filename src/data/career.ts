export type CareerType = "work" | "education"

export interface CareerItem {
  type: CareerType
  title: {
    es: string
    en: string
    ca: string
  }
  organization: string
  period: string
  description: {
    es: string
    en: string
    ca: string
  }
}

export const career: CareerItem[] = [
  {
    type: "work",
    title: {
      es: "Senior Fullstack Developer",
      en: "Senior Fullstack Developer",
      ca: "Desenvolupador Fullstack Senior",
    },
    organization: "Empresa Tech S.A.",
    period: "2022 — Actualidad",
    description: {
      es: "Liderando el desarrollo de aplicaciones web escalables. Implementación de arquitecturas modernas y mentoring de equipos junior.",
      en: "Leading the development of scalable web applications. Implementing modern architectures and mentoring junior teams.",
      ca: "Liderant el desenvolupament d'aplicacions web escalables. Implementació d'arquitectures modernes i mentoria d'equips junior.",
    },
  },
  {
    type: "work",
    title: {
      es: "Fullstack Developer",
      en: "Fullstack Developer",
      ca: "Desenvolupador Fullstack",
    },
    organization: "Startup Innovadora",
    period: "2020 — 2022",
    description: {
      es: "Desarrollo de producto desde cero hasta producción. Gestión de bases de datos, APIs REST y interfaces de usuario.",
      en: "Product development from scratch to production. Database management, REST APIs and user interfaces.",
      ca: "Desenvolupament de producte des de zero fins a producció. Gestió de bases de dades, APIs REST i interfícies d'usuari.",
    },
  },
  {
    type: "education",
    title: {
      es: "Ingeniería en Sistemas",
      en: "Systems Engineering",
      ca: "Enginyeria en Informàtica",
    },
    organization: "Universidad Nacional",
    period: "2016 — 2020",
    description: {
      es: "Formación integral en desarrollo de software, bases de datos y arquitectura de sistemas.",
      en: "Comprehensive training in software development, databases and systems architecture.",
      ca: "Formació integral en desenvolupament de software, bases de dades i arquitectura de sistemes.",
    },
  },
]