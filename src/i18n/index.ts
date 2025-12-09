import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zhTW from './locales/zh-tw.json';
import zhCN from './locales/zh-cn.json';

const resources = {
  en: { translation: en },
  'zh-tw': { translation: zhTW },
  'zh-TW': { translation: zhTW }, // Support uppercase variant
  'zh-cn': { translation: zhCN },
  'zh-CN': { translation: zhCN }, // Support uppercase variant
  'zh': { translation: zhTW }, // Default Chinese to Traditional
};

// Get initial language from localStorage or default to zh-tw
let initialLang = 'zh-tw';
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('i18nextLng');
  if (stored && Object.keys(resources).includes(stored)) {
    initialLang = stored;
  } else {
    localStorage.setItem('i18nextLng', initialLang);
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: initialLang,
    supportedLngs: ['en', 'zh-tw', 'zh-TW', 'zh-cn', 'zh-CN', 'zh'],
    nonExplicitSupportedLngs: true,
    load: 'currentOnly',
    debug: true,
    saveMissing: false,
    keySeparator: '.',
    nsSeparator: ':',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
    returnObjects: false,
    returnEmptyString: false,
    returnNull: false,
  })
  .then(() => {
    console.log('[i18n] Initialization complete');
    console.log('[i18n] Current language:', i18n.language);
    console.log('[i18n] Resolved language:', i18n.resolvedLanguage);
    console.log('[i18n] Available resources:', Object.keys(i18n.store.data));
  });

// Make i18n available globally for debugging (only in development)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).i18n = i18n;
}

// Helper function to get translation directly from resources without fallback
export const getTranslation = (key: string, lang?: string): string => {
  const language = lang || i18n.language;
  const resource = i18n.store.data[language];
  if (resource?.translation) {
    const keys = key.split('.');
    let value: any = resource.translation;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    if (typeof value === 'string') {
      return value;
    }
  }
  // If not found in specified language, return key or fallback to English
  const enResource = i18n.store.data['en'];
  if (enResource?.translation) {
    const keys = key.split('.');
    let value: any = enResource.translation;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    if (typeof value === 'string') {
      return value;
    }
  }
  return key;
};

// Compatibility exports for old components
export const t = (key: string, locale?: string) => {
  if (locale && i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }
  return getTranslation(key, locale || i18n.language);
};

export const getLocale = () => i18n.language;
export const setLocale = (locale: string) => i18n.changeLanguage(locale);
export const locales = Object.keys(resources);

export default i18n;