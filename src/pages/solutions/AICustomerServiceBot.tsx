import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Bot, FolderTree, MessageSquare } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const AICustomerServiceBot = () => {
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
                {t('solutions.aiCustomerServicePage.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('solutions.aiCustomerServicePage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('solutions.aiCustomerServicePage.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.aiCustomerServicePage.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/f841ccd3-3ed7-4baf-89d3-f7cd498203dc.png" 
                alt="AI chatbot interface showing automated responses" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 1: 挑戰 */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.aiCustomerServicePage.challenges.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.aiCustomerServicePage.challenges.items.repetitive')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.aiCustomerServicePage.challenges.items.scalability')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.aiCustomerServicePage.challenges.items.fragmentation')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">{t('solutions.aiCustomerServicePage.challenges.items.scatteredInfo')}</p>
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
                  {t('solutions.aiCustomerServicePage.howPinChatHelps.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.aiCustomerServicePage.howPinChatHelps.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.aiCustomerServicePage.howPinChatHelps.consolidateInfo.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.aiCustomerServicePage.howPinChatHelps.consolidateInfo.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.aiCustomerServicePage.howPinChatHelps.aiHandling.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.aiCustomerServicePage.howPinChatHelps.aiHandling.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.aiCustomerServicePage.howPinChatHelps.unifiedInbox.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.aiCustomerServicePage.howPinChatHelps.unifiedInbox.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f841ccd3-3ed7-4baf-89d3-f7cd498203dc.png" 
                  alt="PinChat customer service solution" 
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
                  src="/lovable-uploads/f841ccd3-3ed7-4baf-89d3-f7cd498203dc.png" 
                  alt="PinChat benefits dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('solutions.aiCustomerServicePage.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.aiCustomerServicePage.benefits.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.aiCustomerServicePage.benefits.reduceCosts.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.aiCustomerServicePage.benefits.reduceCosts.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.aiCustomerServicePage.benefits.consistentQuality.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.aiCustomerServicePage.benefits.consistentQuality.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.aiCustomerServicePage.benefits.satisfaction.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.aiCustomerServicePage.benefits.satisfaction.description')}
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
              {t('solutions.aiCustomerServicePage.recommendedFeatures.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/features/ai-pinbot" className="p-6 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.aiCustomerServicePage.recommendedFeatures.aiPinBot.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.aiCustomerServicePage.recommendedFeatures.aiPinBot.description')}
                </p>
              </Link>
              <Link to="/features/chatroom-management" className="p-6 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FolderTree className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.aiCustomerServicePage.recommendedFeatures.chatroomManagement.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.aiCustomerServicePage.recommendedFeatures.chatroomManagement.description')}
                </p>
              </Link>
              <Link to="/features/chat-widget" className="p-6 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.aiCustomerServicePage.recommendedFeatures.chatWidget.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.aiCustomerServicePage.recommendedFeatures.chatWidget.description')}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 探索其他使用情境 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.aiCustomerServicePage.exploreUseCases.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                    alt={t('solutions.aiCustomerServicePage.exploreUseCases.leadCapture.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.aiCustomerServicePage.exploreUseCases.leadCapture.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.aiCustomerServicePage.exploreUseCases.leadCapture.description')}
                  </p>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                    alt={t('solutions.aiCustomerServicePage.exploreUseCases.feedbackCollection.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.aiCustomerServicePage.exploreUseCases.feedbackCollection.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.aiCustomerServicePage.exploreUseCases.feedbackCollection.description')}
                  </p>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png" 
                    alt={t('solutions.aiCustomerServicePage.exploreUseCases.workflowManagement.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.aiCustomerServicePage.exploreUseCases.workflowManagement.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.aiCustomerServicePage.exploreUseCases.workflowManagement.description')}
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
                {t('solutions.aiCustomerServicePage.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.aiCustomerServicePage.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AICustomerServiceBot;