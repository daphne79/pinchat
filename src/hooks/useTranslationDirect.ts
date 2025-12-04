import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Hook to get translations directly from resources without fallback issues
 * This ensures the correct language is used regardless of resolvedLanguage
 */
export const useTranslationDirect = () => {
  const { i18n } = useTranslation();
  
  const t = useMemo(() => {
    return (key: string) => {
      const currentLang = i18n.language;
      const resource = i18n.store.data[currentLang];
      if (resource?.translation) {
        const keys = key.split('.');
        let value: any = resource.translation;
        for (const k of keys) {
          value = value?.[k];
          if (value === undefined) return key;
        }
        if (typeof value === 'string') return value;
      }
      // Fallback to English if not found in current language
      const enResource = i18n.store.data['en'];
      if (enResource?.translation) {
        const keys = key.split('.');
        let value: any = enResource.translation;
        for (const k of keys) {
          value = value?.[k];
          if (value === undefined) return key;
        }
        if (typeof value === 'string') return value;
      }
      return key;
    };
  }, [i18n.language]);
  
  return { t, i18n };
};





