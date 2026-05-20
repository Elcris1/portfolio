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
      es: "Grado en Ingeniería Informática",
      en: "Computer Engineering Degree",
      ca: "Grau enEnginyeria Informàtica",
    },
    organization: "Universidad de Lleida",
    period: "2022 — 2026",
    startYear: 2022,
    endYear: 2026,
    description: {
      es: "Formación integral en el mundo informatico, abarcando desde los fundamentos de la programación hasta la arquitectura de sistemas complejos. Se enseñan habilidades en desarrollo de software, bases de datos, redes y seguridad informática.",
      en: "Comprehensive training in the field of computer science, covering from programming fundamentals to complex system architecture. Skills in software development, databases, networks and information security are taught.",
      ca: "Formació integral en el món informàtic, abarcant des dels fonamentals de la programació fins a l'arquitectura de sistemes complexos. S'ensenyan habilitats en desenvolupament de software, bases de dades, xarxes i seguretat informàtica.",
    },
  },
  {
    type: "work",
    title: {
      es: "Tecnico Informático",
      en: "Computer Technician",
      ca: "Tècnic Informàtic",
    },
    organization: "Electra Homedes",
    period: "06/2020 — 06/2025",
    startYear: 2020,
    endYear: 2025,
    description: {
      es: "Desarrollo aplicaciones frontend y backend para productos industriales, junto con el mantenimiento de los sistemas y aplicaciones de soporte. Tenologias como: Angular, NodeJS, SQL, Firebase, Modbus, Python, etc.",
      en: "Frontend and backend development for industrial products, along with maintenance of systems and support applications. Technologies include: Angular, NodeJS, SQL, Firebase, Modbus, Python, etc.",
      ca: "Desenvolupament d'aplicacions frontend i backend per a productes industrials, juntament amb el manteniment dels sistemes i aplicacions de suport. Tecnologies com: Angular, NodeJS, SQL, Firebase, Modbus, Python, etc.",
    },
  },
  {
    type: "work",
    title: {
      es: "Junior Fullstack Developer - Prácticas Curriculares",
      en: "Junior Fullstack Developer Internship",
      ca: "Desenvolupador Fullstack Junior - Pràctiques Curriculars",
    },
    organization: "Hiberus",
    period: "06/2025 — 08/2025",
    startYear: 2025,
    endYear: 2025,
    description: {
      es: "Desarrollo Full-Stack para el proyecto de Sportium con ASP.NET Core y Angular con SQLServer y PostgreSQL. Metodología Scrum con CI/CD.",
      en: "Full-Stack development for the Sportium project with ASP.NET Core and Angular using SQLServer and PostgreSQL. Scrum methodology with CI/CD.",
      ca: "Desenvolupament Full-Stack per al projecte de Sportium amb ASP.NET Core i Angular amb SQLServer i PostgreSQL. Metodologia Scrum amb CI/CD.",
    },
  },
  {
    type: "work",
    title: {
      es: "Junior Fullstack Developer - Prácticas Extracurriculares",
      en: "Junior Fullstack Developer Internship",
      ca: "Desenvolupador Fullstack Junior - Pràctiques Extracurriculars",
    },
    organization: "Hiberus",
    period: "04/2026 — ",
    startYear: 2026,
    endYear: null,
    description: {
      es: "AI Strategy centrado en el desarrollo impulsado por IA en aplicaciones Full-Stack internas con Spring Boot y React. TDD y SDD para garantizar la calidad del código y la eficiencia del desarrollo.",
      en: "AI Strategy focused on AI-driven development on internal Full-Stack applications with Spring Boot and React. TDD and SDD to ensure code quality and development efficiency.",
      ca: "AI Strategy centrat en desenvolupament impulsat per IA en aplicacions internes Full-Stack amb Spring Boot i React. TDD i SDD per garantir la qualitat del codi i l'eficiència del desenvolupament.",
    },
  },

  {
    type: "education",
    title: {
      es: "ICT & Cybersecurity Essentials",
      en: "ICT & Cybersecurity Essentials",
      ca: "ICT & Cybersecurity Essentials",
    },
    organization: "Fontys University of Applied Sciences",
    period: "2025 — 2026",
    startYear: 2025,
    endYear: 2026,
    description: {
      es: "Curso de especialización en ciberseguridad y tecnologías de la información realizado con el programa Erasmus+. Enfocado en proteger aplicaciones y sistemas",
      en: "Specialization course in cybersecurity and information technologies conducted with the Erasmus+ program. Focused on protecting applications and systems.",
      ca: "Curs de especialització en ciberseguretat i tecnologies de la informació realitzat amb el programa Erasmus+. Centrat en protegir aplicacions i sistemes.",
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