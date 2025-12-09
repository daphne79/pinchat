import { useTranslation as useI18nTranslation } from 'react-i18next';

/**
 * Hook to get translations directly from resources without fallback issues
 * This ensures the correct language is used regardless of resolvedLanguage
 *
 * Note: This is now just a wrapper around react-i18next's useTranslation
 * since the issue was with missing zh-cn in resources, which has been fixed.
 */
export const useTranslationDirect = () => {
  return useI18nTranslation();
};





