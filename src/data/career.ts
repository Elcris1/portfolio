import type { Language } from "../i18n/translations"

export type CareerType = "work" | "education"

export interface CareerItem {
  type: CareerType
  title: {
    [key in Language]: string
  }
  organization: string
  period: string
  startYear: number
  endYear: number | null
  description: {
    [key in Language]: string
  }
}

export interface CareerGroup {
  years: string
  startYear: number
  endYear: number | null
  items: CareerItem[]
}

export const career: CareerItem[] = [
  {
    type: "education",
    title: {
      es: "Ingeniería en Sistemas",
      en: "Systems Engineering",
      ca: "Enginyeria en Informàtica",
    },
    organization: "Universidad de Barcelona",
    period: "2016 — 2020",
    startYear: 2016,
    endYear: 2020,
    description: {
      es: "Formación integral en desarrollo de software, bases de datos y arquitectura de sistemas.",
      en: "Comprehensive training in software development, databases and systems architecture.",
      ca: "Formació integral en desenvolupament de software, bases de dades i arquitectura de sistemes.",
    },
  },
  {
    type: "work",
    title: {
      es: "Junior Developer",
      en: "Junior Developer",
      ca: "Desenvolupador Junior",
    },
    organization: "Startup Local",
    period: "2018 — 2020",
    startYear: 2018,
    endYear: 2020,
    description: {
      es: "Desarrollo web frontend y backend. Primer contacto con el mundo profesional.",
      en: "Frontend and backend web development. First contact with the professional world.",
      ca: "Desenvolupament web frontend i backend. Primer contacte amb el món professional.",
    },
  },
  {
    type: "work",
    title: {
      es: "Fullstack Developer",
      en: "Fullstack Developer",
      ca: "Desenvolupador Fullstack",
    },
    organization: "Tech Corp",
    period: "2020 — 2022",
    startYear: 2020,
    endYear: 2022,
    description: {
      es: "Desarrollo de aplicaciones web escalables. Gestión de equipos pequeños.",
      en: "Development of scalable web applications. Small team management.",
      ca: "Desenvolupament d'aplicacions web escalables. Gestió d'equips petits.",
    },
  },
  {
    type: "work",
    title: {
      es: "Senior Fullstack Developer",
      en: "Senior Fullstack Developer",
      ca: "Desenvolupador Fullstack Senior",
    },
    organization: "Enterprise Solutions",
    period: "2022 — Actualidad",
    startYear: 2022,
    endYear: null,
    description: {
      es: "Liderando el desarrollo de aplicaciones web escalables. Implementación de arquitecturas modernas y mentoring de equipos junior.",
      en: "Leading the development of scalable web applications. Implementing modern architectures and mentoring junior teams.",
      ca: "Liderant el desenvolupament d'aplicacions web escalables. Implementació d'arquitectures modernes i mentoria d'equips junior.",
    },
  },
  {
    type: "education",
    title: {
      es: "Certificación Cloud",
      en: "Cloud Certification",
      ca: "Certificació Cloud",
    },
    organization: "AWS",
    period: "2023 — 2024",
    startYear: 2023,
    endYear: 2024,
    description: {
      es: "Certificación AWS Solutions Architect Associate.",
      en: "AWS Solutions Architect Associate certification.",
      ca: "Certificació AWS Solutions Architect Associate.",
    },
  },
]

export function groupCareerByPeriod(careerItems: CareerItem[]): CareerGroup[] {
  const groups: Map<string, CareerGroup> = new Map()
  
  careerItems.forEach(item => {
    const endYear = item.endYear || new Date().getFullYear()
    const yearRange = `${item.startYear}${item.endYear ? ` — ${item.endYear}` : ' — ...'}`
    
    if (!groups.has(yearRange)) {
      groups.set(yearRange, {
        years: yearRange,
        startYear: item.startYear,
        endYear: item.endYear,
        items: [],
      })
    }
    
    groups.get(yearRange)!.items.push(item)
  })
  
  return Array.from(groups.values()).sort((a, b) => b.startYear - a.startYear)
}