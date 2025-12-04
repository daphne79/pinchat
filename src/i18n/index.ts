import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zhTW from './locales/zh-tw.json';

const resources = {
  en: { translation: en },
  'zh-tw': { translation: zhTW },
};

// Verify resources structure before init
const verifyResources = () => {
  Object.keys(resources).forEach(lang => {
    const resource = resources[lang];
    if (!resource.translation || typeof resource.translation !== 'object') {
      console.error(`[i18n] Invalid resource for ${lang}:`, resource);
    }
  });
};
verifyResources();

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
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['zh-tw', 'en'],
    lng: initialLang,
    supportedLngs: Object.keys(resources),
    debug: false,
    saveMissing: false,
    keySeparator: '.',
    nsSeparator: ':',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
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
    // After init, ensure resolvedLanguage matches language
    const currentLang = i18n.language;
    
    console.log('[i18n] After init - Language:', currentLang);
    console.log('[i18n] After init - Resolved Language:', i18n.resolvedLanguage);
    console.log('[i18n] After init - Test nav.features:', i18n.t('nav.features'));
    
    // If resolvedLanguage is wrong, manually fix it
    if (i18n.resolvedLanguage !== currentLang) {
      console.log('[i18n] Fixing resolvedLanguage mismatch...');
      
      // Manually set the resource as active
      const resource = i18n.store.data[currentLang];
      if (resource && resource.translation) {
        // Force reload the language
        i18n.changeLanguage(currentLang).then(() => {
          // Sometimes we need to manually trigger the store update
          if (i18n.store && i18n.store.data && i18n.store.data[currentLang]) {
            // Directly check what the store has
            const testValue = i18n.store.data[currentLang]?.translation?.nav?.features;
            console.log('[i18n] Store direct access nav.features:', testValue);
            
            // Use the t function with explicit lng parameter
            const explicitTranslation = i18n.getFixedT(currentLang, 'translation');
            console.log('[i18n] Using getFixedT with lang:', explicitTranslation('nav.features'));
            
            // Also test with direct resource access
            const directT = (key: string) => {
              const resource = i18n.store.data[currentLang];
              if (resource?.translation) {
                const keys = key.split('.');
                let value: any = resource.translation;
                for (const k of keys) {
                  value = value?.[k];
                }
                return value || key;
              }
              return key;
            };
            console.log('[i18n] Direct resource access:', directT('nav.features'));
          }
        });
      }
    }
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