import { translations, type Language } from './translations'

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in translations) return lang as Language
  return 'en'
}

export function useTranslations(lang: Language) {
  return translations[lang]
}

export const languages = Object.keys(translations) as Language[]