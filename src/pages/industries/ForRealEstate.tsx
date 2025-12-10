import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useTranslationDirect } from '@/hooks/useTranslationDirect';

const ForRealEstate = () => {
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
                {t('realEstate.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('realEstate.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('realEstate.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('realEstate.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png" 
                alt="Real estate agent consultation interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Real Estate teams use PinChat */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('realEstate.whyUse.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('realEstate.whyUse.items.integratePlatforms')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('realEstate.whyUse.items.aiReply')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('realEstate.whyUse.items.conversationalSurvey')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">{t('realEstate.whyUse.items.manageLeads')}</p>
            </div>
          </div>
          </div>
        </section>

        {/* PinChat 在此情境下的使用方式 - Left/Right Layout */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('realEstate.planEngagement.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('realEstate.planEngagement.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('realEstate.planEngagement.aiReply.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('realEstate.planEngagement.aiReply.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('realEstate.planEngagement.bookingLink.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('realEstate.planEngagement.bookingLink.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('realEstate.planEngagement.manageRecords.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('realEstate.planEngagement.manageRecords.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png" 
                  alt="Real estate customer service dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PinChat 在此情境下帶來的效益 - Right/Left Layout */}
        <section className="py-24 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png" 
                  alt="Real estate engagement dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('realEstate.salesAcceleration.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('realEstate.salesAcceleration.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('realEstate.salesAcceleration.fasterResponse.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('realEstate.salesAcceleration.fasterResponse.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('realEstate.salesAcceleration.reduceWork.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('realEstate.salesAcceleration.reduceWork.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('realEstate.salesAcceleration.organizedTracking.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('realEstate.salesAcceleration.organizedTracking.description')}
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
              {t('realEstate.exploreMore.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/features/ai-pinbot" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png" 
                  alt="AI Customer Service Bot" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('realEstate.exploreMore.aiPinbot.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('realEstate.exploreMore.aiPinbot.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/features/chat-widget" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png" 
                  alt="Chat Widget" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('realEstate.exploreMore.chatWidget.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('realEstate.exploreMore.chatWidget.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/features/pinboard" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/b1eef0e6-e922-4863-bc03-f92dd32f0f46.png" 
                  alt="PinBoard Multi-link Page" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('realEstate.exploreMore.pinBoard.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('realEstate.exploreMore.pinBoard.description')}
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
                {t('realEstate.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('realEstate.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForRealEstate;