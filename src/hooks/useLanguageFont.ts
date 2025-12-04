import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageFont = () => {
  const { i18n } = useTranslation();
  
  const fontClass = useMemo(() => {
    switch (i18n.language) {
      case 'zh-cn':
        return 'font-noto-sc';
      case 'zh-tw':
        return 'font-noto-tc';
      case 'ja':
        return 'font-noto-jp';
      case 'ko':
        return 'font-noto-kr';
      case 'th':
        return 'font-noto-thai';
      case 'vi':
        return 'font-noto-sans';
      default:
        return 'font-sans'; // DM Sans for Latin languages
    }
  }, [i18n.language]);

  return { fontClass };
};