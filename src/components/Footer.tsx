import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { fontClass } = useLanguageFont();

  const supported = ['en','zh-tw','zh-cn','fr','es','pt-br','vi','th','de','ro','ja','ko'] as const;
  const normalizeLang = (lng: string) => {
    const l = lng?.replace('_','-').toLowerCase();
    const mapped = l === 'zh-hant' ? 'zh-tw' : l === 'zh-hans' ? 'zh-cn' : l === 'pt' ? 'pt-br' : l;
    const candidates = [mapped, mapped?.split('-')[0]];
    for (const c of candidates) {
      if (supported.includes(c as any)) return c;
    }
    return 'en';
  };

  const currentLang = normalizeLang(i18n.language);
  // Use getTranslation to ensure correct language is used without fallback
  const getTranslation = (key: string) => {
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
    return key;
  };
  const tFixed = getTranslation;
  
  const changeLanguage = async (language: string) => {
    try {
      console.log('[Footer] Changing language to:', language);
      await i18n.changeLanguage(language);
      // Save to localStorage
      localStorage.setItem('i18nextLng', language);
      console.log('[Footer] Language changed. Current:', i18n.language);
      const testResource = i18n.store.data[language];
      const testValue = testResource?.translation?.nav?.features;
      console.log('[Footer] Test translation:', testValue);
    } catch (err) {
      console.error('Failed to change language:', err);
    }
  };

  return (
    <footer className={`border-t py-10 ${fontClass}`}>
      <div className="container mx-auto grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/25304deb-b462-4c04-a4a7-b39375759f10.png" alt="PinChat Logo" className="h-8 w-auto" />
          </div>
              <p className="mt-3 text-sm text-muted-foreground">{tFixed('footer.description')}</p>
            </div>
            <div>
              <h4 className="font-medium">{tFixed('footer.legal')}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">{tFixed('footer.privacyPolicy')}</Link></li>
                <li><Link to="/terms" className="hover:text-foreground">{tFixed('footer.termsOfService')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">{tFixed('footer.company')}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">{tFixed('footer.about')}</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">{tFixed('footer.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">{tFixed('footer.language')}</h4>
          <div className="mt-3">
            <Select value={currentLang} onValueChange={changeLanguage}>
              <SelectTrigger className="w-full bg-background border-border justify-start text-left">
                <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                    <SelectValue placeholder="Select language">
                      {tFixed(`languages.${currentLang}`)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-[9999] text-left">
                    <SelectItem value="en" className="text-left">{tFixed('languages.en')}</SelectItem>
                    <SelectItem value="zh-tw" className="text-left">{tFixed('languages.zh-tw')}</SelectItem>
                    <SelectItem value="zh-cn" className="text-left">{tFixed('languages.zh-cn')}</SelectItem>
                    <SelectItem value="fr" className="text-left">{tFixed('languages.fr')}</SelectItem>
                    <SelectItem value="es" className="text-left">{tFixed('languages.es')}</SelectItem>
                    <SelectItem value="pt-br" className="text-left">{tFixed('languages.pt-br')}</SelectItem>
                    <SelectItem value="vi" className="text-left">{tFixed('languages.vi')}</SelectItem>
                    <SelectItem value="th" className="text-left">{tFixed('languages.th')}</SelectItem>
                    <SelectItem value="de" className="text-left">{tFixed('languages.de')}</SelectItem>
                    <SelectItem value="ro" className="text-left">{tFixed('languages.ro')}</SelectItem>
                    <SelectItem value="ja" className="text-left">{tFixed('languages.ja')}</SelectItem>
                    <SelectItem value="ko" className="text-left">{tFixed('languages.ko')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8 border-t pt-6 text-center text-xs text-muted-foreground">{tFixed('footer.copyright', { year: new Date().getFullYear() })}</div>
    </footer>
  );
};

export default Footer;