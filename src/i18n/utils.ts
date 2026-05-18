import { translations, type Language } from './translations'

export function getLangFromUrl(url: URL): Language {
  const pathParts = url.pathname.split('/').filter(Boolean)
  if (pathParts.length > 0 && pathParts[0] in translations) {
    return pathParts[0] as Language
  }
  return 'es'
}

export function useTranslations(lang: Language) {
  return translations[lang]
}

export const languages = Object.keys(translations) as Language[]

export function getBasePath(): string {
  return import.meta.env.BASE_URL || '/'
}

export function getPath(lang: Language, path?: string): string {
  const base = getBasePath()
  const baseWithoutSlash = base.endsWith('/') ? base.slice(0, -1) : base
  const langPath = `${baseWithoutSlash}/${lang}`
  if (!path) return langPath
  if (path.startsWith('#')) return `${langPath}${path}`
  return `${langPath}/${path}`
}