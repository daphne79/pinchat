import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Bot, BarChart, FileText } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const CustomerFeedbackAnalytics = () => {
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
                {t('solutions.customerFeedbackAnalyticsPage.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('solutions.customerFeedbackAnalyticsPage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('solutions.customerFeedbackAnalyticsPage.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.customerFeedbackAnalyticsPage.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/c4bdeedf-e89d-4da0-8aa9-7836171381e3.png" 
                alt="Customer feedback analytics dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 1: 挑戰 */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.customerFeedbackAnalyticsPage.challenges.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.customerFeedbackAnalyticsPage.challenges.items.scatteredData')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.customerFeedbackAnalyticsPage.challenges.items.identifyRepeatedIssues')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.customerFeedbackAnalyticsPage.challenges.items.lowResponseRate')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">{t('solutions.customerFeedbackAnalyticsPage.challenges.items.lackActionableInsights')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: PinChat 如何協助 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.autoIntegration.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.autoIntegration.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.conversationalSurvey.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.conversationalSurvey.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.centralizedView.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.customerFeedbackAnalyticsPage.howPinChatHelps.centralizedView.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/c4bdeedf-e89d-4da0-8aa9-7836171381e3.png" 
                  alt="PinChat customer feedback analytics solution" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 使用 PinChat 的效益 */}
        <section className="py-24 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/c4bdeedf-e89d-4da0-8aa9-7836171381e3.png" 
                  alt="PinChat benefits dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('solutions.customerFeedbackAnalyticsPage.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.customerFeedbackAnalyticsPage.benefits.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.customerFeedbackAnalyticsPage.benefits.reduceTime.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.customerFeedbackAnalyticsPage.benefits.reduceTime.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.customerFeedbackAnalyticsPage.benefits.improveConsistency.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.customerFeedbackAnalyticsPage.benefits.improveConsistency.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.customerFeedbackAnalyticsPage.benefits.supportDecision.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.customerFeedbackAnalyticsPage.benefits.supportDecision.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 推薦相關功能 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/features/ai-pinbot" className="p-6 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.aiPinBot.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.aiPinBot.subtitle')}
                </p>
              </Link>
              <Link to="/solutions/lead-capture-surveys" className="p-6 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.survey.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.survey.subtitle')}
                </p>
              </Link>
              <Link to="/features/analytics" className="p-6 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.dataAnalysis.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.customerFeedbackAnalyticsPage.recommendedFeatures.dataAnalysis.subtitle')}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 探索其他使用情境 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                    alt={t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.customerServiceAutomation.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.customerServiceAutomation.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.customerServiceAutomation.subtitle')}
                  </p>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                    alt={t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.messageIntegration.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.messageIntegration.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.messageIntegration.subtitle')}
                  </p>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                    alt={t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.leadCapture.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.leadCapture.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.customerFeedbackAnalyticsPage.exploreUseCases.leadCapture.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary/10 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto rounded-2xl bg-card border p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">
                {t('solutions.customerFeedbackAnalyticsPage.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.customerFeedbackAnalyticsPage.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerFeedbackAnalytics;