// Test script to run in browser console
console.log('=== i18n Debug Info ===');
console.log('Language:', window.i18n?.language || 'NOT FOUND');
console.log('Available languages:', window.i18n?.languages || 'NOT FOUND');
console.log('Resources:', Object.keys(window.i18n?.store?.data || {}));
console.log('Test nav.features:', window.i18n?.t('nav.features'));
console.log('Test hero.title:', window.i18n?.t('hero.title'));
console.log('Current resource:', window.i18n?.store?.data?.[window.i18n?.language]?.translation ? 'FOUND' : 'NOT FOUND');
