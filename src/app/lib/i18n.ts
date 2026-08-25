import en from '../locales/en.json';
import ps from '../locales/ps.json';
import fa from '../locales/fa.json';

export type Language = 'en' | 'ps' | 'fa';

export const SUPPORTED_LANGUAGES: { code: Language; label: string; nativeLabel: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'ps', label: 'Pashto', nativeLabel: 'پښتو', dir: 'rtl' },
  { code: 'fa', label: 'Dari', nativeLabel: 'دری', dir: 'rtl' },
];

const translations: Record<Language, typeof en> = { en, ps: ps as typeof en, fa: fa as typeof en };

export function getTranslations(language: Language): typeof en {
  return translations[language] || translations.en;
}

export function getLanguageDir(language: Language): 'ltr' | 'rtl' {
  return SUPPORTED_LANGUAGES.find(l => l.code === language)?.dir || 'ltr';
}
