import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { getAssetPath } from '@/lib/assetPath';

const ForHealthcare = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();

  return (
    <div className={`min-h-screen bg-background ${fontClass}`}>
      <FeatureNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                {t('healthcare.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('healthcare.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('healthcare.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('healthcare.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 overflow-hidden">
              <img 
                src={getAssetPath("/lovable-uploads/83071566-9a01-4643-a61a-b6e2437b6199.png")} 
                alt="Healthcare communication interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Healthcare Use PinChat */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('healthcare.whyUse.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('healthcare.whyUse.items.reduceBurden')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('healthcare.whyUse.items.aiInfo')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('healthcare.whyUse.items.multilingual')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">{t('healthcare.whyUse.items.focusOnValue')}</p>
            </div>
          </div>
          </div>
        </section>

        {/* PinChat Usage - Left/Right Layout */}
        {/* useCase1 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('healthcare.usage.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('healthcare.usage.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('healthcare.usage.step1.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('healthcare.usage.step1.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('healthcare.usage.step2.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('healthcare.usage.step2.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('healthcare.usage.step3.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('healthcare.usage.step3.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/83071566-9a01-4643-a61a-b6e2437b6199.png")} 
                  alt="Healthcare communication dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Right/Left Layout */}
        {/* useCase2 */}
        <section className="py-24 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/83071566-9a01-4643-a61a-b6e2437b6199.png")} 
                  alt="Healthcare management dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('healthcare.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('healthcare.benefits.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('healthcare.benefits.benefit1.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('healthcare.benefits.benefit1.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('healthcare.benefits.benefit2.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('healthcare.benefits.benefit2.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('healthcare.benefits.benefit3.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('healthcare.benefits.benefit3.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore more ways to use PinChat */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('healthcare.exploreMore.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/industries/service-industries" 
              className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-white overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/8816cd40-a898-4f73-91de-ea0b84f6aeac.png")} 
                  alt="Service Industries" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('healthcare.exploreMore.serviceIndustries.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('healthcare.exploreMore.serviceIndustries.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/industries/education" 
              className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-white overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/325ad0e3-2e4d-41f2-bba0-d068115d2b8e.png")} 
                  alt="Education" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('healthcare.exploreMore.education.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('healthcare.exploreMore.education.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/industries/events" 
              className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-white overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/a1960abd-93f1-4a03-b109-230d06508316.png")} 
                  alt="Events" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('healthcare.exploreMore.events.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('healthcare.exploreMore.events.description')}
                </p>
              </div>
            </Link>
          </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary/10 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-card border p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">
                {t('healthcare.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('healthcare.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForHealthcare;
