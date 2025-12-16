import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { getAssetPath } from '@/lib/assetPath';

const ForProfessionalServices = () => {
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
                {t('professionalServices.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('professionalServices.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('professionalServices.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('professionalServices.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 rounded-lg overflow-hidden">
              <img 
                src={getAssetPath("/lovable-uploads/0c488cfa-6ba1-4c50-b52e-2437906a8102.png")} 
                alt="Professional services customer service interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Professional Services Use PinChat */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('professionalServices.whyUse.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('professionalServices.whyUse.items.centralizeInquiries')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('professionalServices.whyUse.items.aiReply')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('professionalServices.whyUse.items.consistentInfo')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">{t('professionalServices.whyUse.items.trackOnboarding')}</p>
            </div>
          </div>
          </div>
        </section>

        {/* PinChat Usage in This Scenario - Left/Right Layout */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('professionalServices.usage.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('professionalServices.usage.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('professionalServices.usage.quickReply.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('professionalServices.usage.quickReply.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('professionalServices.usage.consistentService.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('professionalServices.usage.consistentService.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('professionalServices.usage.centralizeMessages.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('professionalServices.usage.centralizeMessages.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/0c488cfa-6ba1-4c50-b52e-2437906a8102.png")} 
                  alt="Professional services customer service dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Right/Left Layout */}
        <section className="py-24 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/0c488cfa-6ba1-4c50-b52e-2437906a8102.png")} 
                  alt="Professional services onboarding dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('professionalServices.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('professionalServices.benefits.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('professionalServices.benefits.improveResponse.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('professionalServices.benefits.improveResponse.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('professionalServices.benefits.enhanceTrust.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('professionalServices.benefits.enhanceTrust.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('professionalServices.benefits.reduceCosts.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('professionalServices.benefits.reduceCosts.description')}
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
              {t('professionalServices.exploreMore.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/industries/b2b-commercial" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/48658c77-a953-49d3-8bc6-b3b56379bea1.png")} 
                  alt="B2B Commercial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('professionalServices.exploreMore.b2bCommercial.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('professionalServices.exploreMore.b2bCommercial.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/industries/real-estate" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png")} 
                  alt="Real Estate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('professionalServices.exploreMore.realEstate.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('professionalServices.exploreMore.realEstate.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/industries/events" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/a1960abd-93f1-4a03-b109-230d06508316.png")} 
                  alt="Events" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('professionalServices.exploreMore.events.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('professionalServices.exploreMore.events.description')}
                </p>
              </div>
            </Link>
          </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary/10 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto rounded-2xl bg-card border p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">
                {t('professionalServices.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('professionalServices.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForProfessionalServices;