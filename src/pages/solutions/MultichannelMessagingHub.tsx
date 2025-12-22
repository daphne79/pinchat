import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Bot, FolderTree, Inbox, MessageSquare, Search, Zap } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { getAssetPath } from '@/lib/assetPath';

const MultichannelMessagingHub = () => {
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
                {t('solutions.multichannelMessagingPage.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('solutions.multichannelMessagingPage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('solutions.multichannelMessagingPage.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.multichannelMessagingPage.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 overflow-hidden">
              <img 
                src={getAssetPath("/lovable-uploads/a61b9a5a-7234-4e21-b05a-03750511fa6b.png")} 
                alt="Multi-channel messaging dashboard interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 1: 挑戰 */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.multichannelMessagingPage.challenges.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.multichannelMessagingPage.challenges.items.dispersed')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.multichannelMessagingPage.challenges.items.efficiency')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.multichannelMessagingPage.challenges.items.context')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">{t('solutions.multichannelMessagingPage.challenges.items.consistency')}</p>
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
                  {t('solutions.multichannelMessagingPage.howPinChatHelps.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.multichannelMessagingPage.howPinChatHelps.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.multichannelMessagingPage.howPinChatHelps.integrateAll.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.multichannelMessagingPage.howPinChatHelps.integrateAll.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.multichannelMessagingPage.howPinChatHelps.improveEfficiency.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.multichannelMessagingPage.howPinChatHelps.improveEfficiency.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.multichannelMessagingPage.howPinChatHelps.smartReply.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.multichannelMessagingPage.howPinChatHelps.smartReply.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                src={getAssetPath("/lovable-uploads/multichannel-feat1.png")} 
                alt="multichannel-feat1" 
                className="w-full h-auto" 
                loading="lazy" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 使用 PinChat 的效益 */}
        <section className="py-24 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/a61b9a5a-7234-4e21-b05a-03750511fa6b.png")} 
                  alt="PinChat benefits dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('solutions.multichannelMessagingPage.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.multichannelMessagingPage.benefits.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.multichannelMessagingPage.benefits.reduceGaps.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.multichannelMessagingPage.benefits.reduceGaps.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.multichannelMessagingPage.benefits.reduceTime.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.multichannelMessagingPage.benefits.reduceTime.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.multichannelMessagingPage.benefits.consistentBrand.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.multichannelMessagingPage.benefits.consistentBrand.description')}
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
              {t('solutions.multichannelMessagingPage.recommendedFeatures.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/features/ai-pinbot" className="p-6 bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.multichannelMessagingPage.recommendedFeatures.aiBot.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.multichannelMessagingPage.recommendedFeatures.aiBot.description')}
                </p>
              </Link>
              <Link to="/features/chat-widget" className="p-6 bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.multichannelMessagingPage.recommendedFeatures.websiteChat.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.multichannelMessagingPage.recommendedFeatures.websiteChat.description')}
                </p>
              </Link>
              <Link to="/features/chatroom-management" className="p-6 bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FolderTree className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.multichannelMessagingPage.recommendedFeatures.chatroomManagement.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.multichannelMessagingPage.recommendedFeatures.chatroomManagement.description')}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 探索其他使用情境 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.multichannelMessagingPage.exploreUseCases.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={getAssetPath("/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png")} 
                    alt={t('solutions.multichannelMessagingPage.exploreUseCases.customerAutomation.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.multichannelMessagingPage.exploreUseCases.customerAutomation.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.multichannelMessagingPage.exploreUseCases.customerAutomation.description')}
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={getAssetPath("/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png")} 
                    alt={t('solutions.multichannelMessagingPage.exploreUseCases.leadCapture.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.multichannelMessagingPage.exploreUseCases.leadCapture.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.multichannelMessagingPage.exploreUseCases.leadCapture.description')}
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={getAssetPath("/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png")} 
                    alt={t('solutions.multichannelMessagingPage.exploreUseCases.teamCollaboration.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.multichannelMessagingPage.exploreUseCases.teamCollaboration.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.multichannelMessagingPage.exploreUseCases.teamCollaboration.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary/10 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-card border p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">
                {t('solutions.multichannelMessagingPage.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.multichannelMessagingPage.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MultichannelMessagingHub;