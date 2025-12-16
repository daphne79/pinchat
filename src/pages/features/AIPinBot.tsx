import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Bot, MessageCircle, Settings, Users, Zap, Globe, LifeBuoy, Sparkles, FileText, Brain } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAssetPath } from '@/lib/assetPath';
const AIPinBot = () => {
  const { t } = useTranslation();

  return <>
      <FeatureNavigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide mb-6 text-foreground leading-normal lg:leading-[1.2]">
                  {t('features.aiPinbotPage.hero.title')}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('features.aiPinbotPage.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    {t('features.aiPinbotPage.hero.cta')}
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    {t('features.aiPinbotPage.hero.ctaSecondary')}
                  </Button>
                </div>
              </div>
              <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
                <img 
                  src={getAssetPath("/lovable-uploads/ai-customer-service-bot-hero.png")} 
                  alt={t('features.aiPinbotPage.hero.imageAlt')} 
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-4">
              {t('features.aiPinbotPage.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.aiPinbotPage.sectionSubtitle')}
            </p>
          </div>

          {/* Feature 1: Unified Knowledge Sources - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.aiPinbotPage.features.unifiedKnowledge.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.aiPinbotPage.features.unifiedKnowledge.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.unifiedKnowledge.benefits.autoCrawl')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.unifiedKnowledge.benefits.uploadFiles')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.unifiedKnowledge.benefits.manualQA')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={getAssetPath("/lovable-uploads/chat_management.png")} 
                alt={t('features.aiPinbotPage.features.unifiedKnowledge.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 2: Smart FAQ Automation - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.aiPinbotPage.features.smartFAQ.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.aiPinbotPage.features.smartFAQ.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.smartFAQ.benefits.reduceWorkload')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.smartFAQ.benefits.fastConsistent')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.smartFAQ.benefits.aiMaintained')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src={getAssetPath("/lovable-uploads/chatroom-team-management-hero.png")} 
                alt={t('features.aiPinbotPage.features.smartFAQ.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 3: Context-Aware AI Memory - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.aiPinbotPage.features.contextAwareMemory.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.aiPinbotPage.features.contextAwareMemory.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.contextAwareMemory.benefits.multiStepContext')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.contextAwareMemory.benefits.avoidRepeat')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.contextAwareMemory.benefits.guidedFlows')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={getAssetPath("/lovable-uploads/customer-feedback-analytics-hero.png")} 
                alt={t('features.aiPinbotPage.features.contextAwareMemory.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 4: Seamless Human Handoff - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.aiPinbotPage.features.humanHandoff.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.aiPinbotPage.features.humanHandoff.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.humanHandoff.benefits.agentJoin')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.humanHandoff.benefits.fullContext')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.aiPinbotPage.features.humanHandoff.benefits.smooth')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src={getAssetPath("/lovable-uploads/lead-capture-survey-hero.png")} 
                alt={t('features.aiPinbotPage.features.humanHandoff.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
              {t('features.aiPinbotPage.integrations.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t('features.aiPinbotPage.integrations.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {['LINE', 'Messenger', 'Instagram', 'WhatsApp', 'Web Chat'].map((platform, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">{platform}</span>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Use Case Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
              {t('features.aiPinbotPage.useCases.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.aiPinbotPage.useCases.websiteEngagement.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.aiPinbotPage.useCases.websiteEngagement.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.aiPinbotPage.useCases.customerSupportFlow.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.aiPinbotPage.useCases.customerSupportFlow.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <LifeBuoy className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.aiPinbotPage.useCases.postPurchaseHelp.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.aiPinbotPage.useCases.postPurchaseHelp.description')}
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-[#02B13F]/10 via-[#02B13F]/5 to-background rounded-3xl p-12 sm:p-16 text-center max-w-4xl mx-auto shadow-lg">
            <div className="w-16 h-16 bg-[#02B13F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#02B13F]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
              {t('features.aiPinbotPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.aiPinbotPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default AIPinBot;