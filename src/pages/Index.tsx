import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Bot, MessageSquare, Link2, Palette, Users, Globe } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useMemo } from 'react';
import { getAssetPath } from '@/lib/assetPath';

const Index = () => {
  const { t, i18n } = useTranslation();
  const { fontClass } = useLanguageFont();
  // Use direct resource access to ensure correct language is used
  // Use useMemo to ensure it updates when language changes
  const tFixed = useMemo(() => {
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
      return key;
    };
  }, [i18n.language]);
  
  return <div className={`min-h-screen bg-background text-foreground ${fontClass}`}>
      <FeatureNavigation />

      <main>
        {/* Hero */}
        <section className="container mx-auto flex flex-col gap-6 py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl font-bold tracking-wide text-center leading-normal lg:leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] max-w-4xl mx-auto">
            {tFixed('hero.title')}
          </h1>
          <p className="text-base text-muted-foreground text-center sm:text-lg max-w-4xl mx-auto">
            {tFixed('hero.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            <Button size="lg" className="text-base sm:text-lg" asChild>
              <Link to="/pricing">{tFixed('hero.startFree')}</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg" asChild>
              <a href="#solutions">{tFixed('hero.watchDemo')}</a>
            </Button>
          </div>
          <div className="relative mt-6">
            <img src={getAssetPath("/lovable-uploads/41f11286-f5a0-47b2-9b1b-90be39b7b6d1.png")} alt="PinChat business messaging interface with conversations and stickers" loading="lazy" className="block mx-auto max-w-full w-auto h-auto object-contain" />
          </div>
        </section>

        {/* Core Values */}
        <section id="solutions" className="border-t py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mt-2 space-y-16 md:space-y-20">
              {/* First: One-Click Connection */}
              <article>
                <div className="grid items-center md:grid-cols-2 gap-8 md:gap-12">
                  <div className="px-4 md:px-0">
                    <div className="flex flex-col">
                      <Link2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-12 lg:w-12 text-primary mb-3 sm:mb-4 md:mb-5" />
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">
                        {tFixed('homepage.valueBlock1Title')}
                      </div>
                    </div>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                      {tFixed('homepage.valueBlock1Desc')}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={getAssetPath("/lovable-uploads/4d4918e0-370f-4455-984a-0f7c3a652a9b.png")} alt="PinChat quick connect via link or QR code" loading="lazy" className="block max-w-full max-h-[600px] md:max-h-[700px] w-auto h-auto object-contain" />
                  </div>
                </div>
              </article>

              {/* Second: Cross-Platform Integration */}
              <article>
                <div className="grid items-center md:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex items-center justify-center order-1 md:order-1">
                    <img src={getAssetPath("/lovable-uploads/e90160c2-2914-4cb8-98c3-b8153ca9bddc.png")} alt="PinChat cross-platform integration" loading="lazy" className="block max-w-full max-h-[600px] md:max-h-[700px] w-auto h-auto object-contain" />
                  </div>
                  <div className="px-4 md:px-0 order-2 md:order-2">
                    <div className="flex flex-col">
                      <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-12 lg:w-12 text-primary mb-3 sm:mb-4 md:mb-5" />
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">
                        {tFixed('homepage.valueBlock2Title')}
                      </div>
                    </div>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                      {tFixed('homepage.valueBlock2Desc')}
                    </p>
                  </div>
                </div>
              </article>

              {/* Third: AI Customer Support */}
              <article>
                <div className="grid items-center md:grid-cols-2 gap-8 md:gap-12">
                  <div className="px-4 md:px-0">
                    <div className="flex flex-col">
                      <Bot className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-12 lg:w-12 text-primary mb-3 sm:mb-4 md:mb-5" />
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">
                        {tFixed('homepage.valueBlock3Title')}
                      </div>
                    </div>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                      {tFixed('homepage.valueBlock3Desc')}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={getAssetPath("/lovable-uploads/2b911e4f-407b-43af-83ac-4186949b6a14.png")} alt="PinChat AI chatbot" loading="lazy" className="block max-w-full max-h-[600px] md:max-h-[700px] w-auto h-auto object-contain" />
                  </div>
                </div>
              </article>

              {/* Fourth: Data Management */}
              <article>
                <div className="grid items-center md:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex items-center justify-center order-1 md:order-1">
                    <img src={getAssetPath("/lovable-uploads/folder_and_tags.png")} alt="PinChat conversation and customer data management" loading="lazy" className="block max-w-full max-h-[600px] md:max-h-[700px] w-auto h-auto object-contain" />
                  </div>
                  <div className="px-4 md:px-0 order-2 md:order-2">
                    <div className="flex flex-col">
                      <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-12 lg:w-12 text-primary mb-3 sm:mb-4 md:mb-5" />
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">
                        {tFixed('homepage.valueBlock4Title')}
                      </div>
                    </div>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                      {tFixed('homepage.valueBlock4Desc')}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">{tFixed('features_section.title')}</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">{tFixed('features_section.subtitle')}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Link2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{tFixed('features_section.items.quickConnectLinks')}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{tFixed('features_section.items.quickConnectDesc')}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{tFixed('features_section.items.aiChatbot')}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{tFixed('features_section.items.aiChatbotDesc')}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{tFixed('features_section.items.unifiedInbox')}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{tFixed('features_section.items.unifiedInboxDesc')}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{tFixed('features_section.items.noCodeSetup')}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{tFixed('features_section.items.noCodeSetupDesc')}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{tFixed('features_section.items.customizationBranding')}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{tFixed('features_section.items.customizationBrandingDesc')}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{tFixed('features_section.items.clientList')}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{tFixed('features_section.items.clientListDesc')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-primary/5 py-16">
          <div className="container mx-auto text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2]">{tFixed('cta.title')}</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                {tFixed('cta.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="min-w-[200px] text-base sm:text-lg">
                  {tFixed('cta.startFreeTrial')}
                </Button>
                <Button variant="outline" size="lg" className="min-w-[200px] text-base sm:text-lg" asChild>
                  <Link to="/contact">{tFixed('cta.contactSales')}</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {tFixed('cta.noCardRequired')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;