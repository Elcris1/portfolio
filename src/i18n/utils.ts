import { defaultLang, translations, type Language } from './translations'

export function getLangFromUrl(url: URL): Language {
  const lang = url.pathname.split(/[\/#]/).filter(elm => elm in translations);
  if (lang.length > 0) return lang[0] as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return translations[lang]
}

export const languages = Object.keys(translations) as Language[]

export function basePath(): string {
  return import.meta.env.BASE_URL || ""
  
}
export function getBasePath(): string {
  return import.meta.env.BASE_URL || '/'
}

export function getPath(lang: Language, path: string = ""): string {
  const base = basePath()
  const baseWithoutSlash = base.endsWith('/') ? base.slice(0, -1) : base
  return `${baseWithoutSlash}/${lang}${path}`
}