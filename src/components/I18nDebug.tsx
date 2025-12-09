import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

/**
 * Debug component to help diagnose i18n issues
 * Add this component to any page to see translation status
 */
export const I18nDebug = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('[I18nDebug] Current language:', i18n.language);
    console.log('[I18nDebug] Resolved language:', i18n.resolvedLanguage);
    console.log('[I18nDebug] Available languages:', Object.keys(i18n.store.data));
    console.log('[I18nDebug] localStorage i18nextLng:', localStorage.getItem('i18nextLng'));

    // Test a few translations
    const testKeys = [
      'nav.features',
      'features.chatPage.hero.title',
      'footer.language'
    ];

    testKeys.forEach(key => {
      const value = t(key);
      console.log(`[I18nDebug] t('${key}'):`, value);

      // Also check direct access
      const lang = i18n.language;
      const resource = i18n.store.data[lang];
      const keys = key.split('.');
      let directValue: any = resource?.translation;
      for (const k of keys) {
        directValue = directValue?.[k];
      }
      console.log(`[I18nDebug] Direct access [${lang}].${key}:`, directValue);
    });
  }, [i18n.language, t, i18n]);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 10,
      right: 10,
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <div><strong>i18n Debug</strong></div>
      <div>Language: {i18n.language}</div>
      <div>Resolved: {i18n.resolvedLanguage}</div>
      <div>Test: {t('nav.features')}</div>
    </div>
  );
};
