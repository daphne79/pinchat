#!/usr/bin/env node
// Test script to verify all translation keys exist
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const localesPath = join(__dirname, '../src/i18n/locales');

// Required keys to test
const requiredKeys = [
  'nav.features',
  'nav.solutions',
  'nav.pricing',
  'nav.login',
  'nav.startFree',
  'footer.description',
  'footer.legal',
  'footer.privacyPolicy',
  'footer.termsOfService',
  'footer.company',
  'footer.about',
  'footer.contact',
  'footer.language',
  'footer.copyright',
  'languages.en',
  'languages.zh-tw',
  'languages.zh-cn',
  'languages.fr',
  'languages.es',
  'languages.pt-br',
  'languages.vi',
  'languages.th',
  'languages.de',
  'languages.ro',
  'languages.ja',
  'languages.ko',
  'hero.title',
  'hero.subtitle',
  'hero.startFree',
  'hero.watchDemo',
  'features_section.title',
  'features_section.subtitle',
  'features_section.items.quickConnectLinks',
  'features_section.items.quickConnectDesc',
  'features_section.items.aiChatbot',
  'features_section.items.aiChatbotDesc',
  'features_section.items.unifiedInbox',
  'features_section.items.unifiedInboxDesc',
  'features_section.items.noCodeSetup',
  'features_section.items.noCodeSetupDesc',
  'features_section.items.customizationBranding',
  'features_section.items.customizationBrandingDesc',
  'features_section.items.clientList',
  'features_section.items.clientListDesc',
  'homepage.valueBlock1Title',
  'homepage.valueBlock1Desc',
  'homepage.valueBlock2Title',
  'homepage.valueBlock2Desc',
  'homepage.valueBlock3Title',
  'homepage.valueBlock3Desc',
  'homepage.valueBlock4Title',
  'homepage.valueBlock4Desc',
  'pricing_section.readyToGetStarted',
  'pricing_section.choosePerfectPlan',
  'pricing_section.planSubtitle',
  'cta.title',
  'cta.subtitle',
  'cta.startFreeTrial',
  'cta.contactSales',
  'cta.noCardRequired'
];

const languages = ['en', 'zh-tw', 'zh-cn', 'pt-br', 'fr', 'es', 'vi', 'th', 'de', 'ro', 'ja', 'ko'];

console.log('🧪 Testing i18n translation files...\n');

let allPassed = true;
let totalMissing = 0;

languages.forEach(lang => {
  const filePath = join(localesPath, `${lang}.json`);
  
  try {
    const content = readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    const missingKeys = [];
    
    requiredKeys.forEach(key => {
      const keys = key.split('.');
      let value = data;
      let found = true;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          found = false;
          break;
        }
      }
      
      if (!found || value === undefined || value === null) {
        missingKeys.push(key);
        totalMissing++;
      }
    });
    
    if (missingKeys.length > 0) {
      console.log(`❌ ${lang.toUpperCase()}: Missing ${missingKeys.length} keys`);
      missingKeys.forEach(k => console.log(`   - ${k}`));
      allPassed = false;
    } else {
      console.log(`✅ ${lang.toUpperCase()}: All ${requiredKeys.length} required keys present`);
    }
  } catch (e) {
    console.log(`❌ ${lang.toUpperCase()}: Error - ${e.message}`);
    allPassed = false;
    totalMissing += requiredKeys.length;
  }
});

console.log('\n' + '='.repeat(60));
if (allPassed) {
  console.log(`✅ All translation files are valid and complete!`);
  console.log(`   Tested ${languages.length} languages, ${requiredKeys.length} keys each`);
  process.exit(0);
} else {
  console.log(`❌ Translation test failed`);
  console.log(`   Total missing keys: ${totalMissing}`);
  console.log(`\n💡 Fix the missing keys in the translation files above.`);
  process.exit(1);
}





