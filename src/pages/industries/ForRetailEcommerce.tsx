import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Star, Heart, Check, ShoppingCart, TrendingUp, Users } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useTranslationDirect } from '@/hooks/useTranslationDirect';

const ForRetailEcommerce = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();

  return (
    <div className={`min-h-screen bg-background ${fontClass}`}>
      <FeatureNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                {t('retailEcommerce.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('retailEcommerce.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('retailEcommerce.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('retailEcommerce.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                alt="Retail and e-commerce customer service interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Retail teams use PinChat */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('retailEcommerce.whyUse.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('retailEcommerce.whyUse.items.engage')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('retailEcommerce.whyUse.items.instantAnswers')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{t('retailEcommerce.whyUse.items.orderUpdates')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">{t('retailEcommerce.whyUse.items.campaigns')}</p>
            </div>
          </div>
          </div>
        </section>

        {/* Plan your customer engagement - Left/Right Layout */}
        <section className="py-20 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('retailEcommerce.planEngagement.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('retailEcommerce.planEngagement.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.planEngagement.alignTeam.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.planEngagement.alignTeam.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.planEngagement.respondFaster.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.planEngagement.respondFaster.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.planEngagement.diveDetails.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.planEngagement.diveDetails.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                  alt="Customer service dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('retailEcommerce.features.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('retailEcommerce.features.productInquiries.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('retailEcommerce.features.productInquiries.description')}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('retailEcommerce.features.orderTracking.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('retailEcommerce.features.orderTracking.description')}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('retailEcommerce.features.campaigns.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('retailEcommerce.features.campaigns.description')}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.features.loyalty.title')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t('retailEcommerce.features.loyalty.description')}
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Don't let communication slow down sales - Right/Left Layout */}
        <section className="py-20 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                  alt="Customer engagement dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('retailEcommerce.salesAcceleration.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('retailEcommerce.salesAcceleration.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.salesAcceleration.swiftExecution.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.salesAcceleration.swiftExecution.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.salesAcceleration.productive.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.salesAcceleration.productive.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.salesAcceleration.responseCycles.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.salesAcceleration.responseCycles.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">{t('retailEcommerce.salesAcceleration.returns.title')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('retailEcommerce.salesAcceleration.returns.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore more ways to use PinChat */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('retailEcommerce.exploreMore.title')}
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/industries/service-industries" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                  alt="Service Industries" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('retailEcommerce.exploreMore.serviceIndustries.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('retailEcommerce.exploreMore.serviceIndustries.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/industries/education" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                  alt="Education" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('retailEcommerce.exploreMore.education.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('retailEcommerce.exploreMore.education.description')}
                </p>
              </div>
            </Link>
            
            <Link 
              to="/industries/healthcare" 
              className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                  alt="Healthcare" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {t('retailEcommerce.exploreMore.healthcare.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('retailEcommerce.exploreMore.healthcare.description')}
                </p>
              </div>
            </Link>
          </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary/5 py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto rounded-2xl bg-card border p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">
                {t('retailEcommerce.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('retailEcommerce.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForRetailEcommerce;