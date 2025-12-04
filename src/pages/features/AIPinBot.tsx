import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Bot, MessageCircle, Settings, Users, Zap, Globe, LifeBuoy, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
const AIPinBot = () => {
  const { t } = useTranslation();

  return <>
      <FeatureNavigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide mb-6 text-foreground leading-normal lg:leading-[1.2]">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.hero.cta')}
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.hero.ctaSecondary')}
                </Button>
              </div>
            </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/ai-customer-service-bot-hero.png" 
                alt={t('features.chatPage.relatedFeatures.aiPinbotPage.hero.imageAlt')} 
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
              {t('features.chatPage.relatedFeatures.aiPinbotPage.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.chatPage.relatedFeatures.aiPinbotPage.sectionSubtitle')}
            </p>
          </div>

          {/* Feature 1: Smart FAQ Automation - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.smartFAQ.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.smartFAQ.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.smartFAQ.benefits.autoReply')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.smartFAQ.benefits.consistent')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.smartFAQ.benefits.quality')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/chat_management.png" 
                alt={t('features.chatPage.relatedFeatures.aiPinbotPage.features.smartFAQ.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 2: Seamless Human Handoff - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.humanHandoff.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.humanHandoff.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.humanHandoff.benefits.agentJoin')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.humanHandoff.benefits.noRepeat')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.humanHandoff.benefits.smooth')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src="/lovable-uploads/chatroom-team-management-hero.png" 
                alt={t('features.chatPage.relatedFeatures.aiPinbotPage.features.humanHandoff.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 3: Multilingual Support - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.multilingual.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.multilingual.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.multilingual.benefits.autoDetect')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.multilingual.benefits.multiLang')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.multilingual.benefits.global')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/customer-feedback-analytics-hero.png" 
                alt={t('features.chatPage.relatedFeatures.aiPinbotPage.features.multilingual.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 4: No-Code Setup - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.noCode.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.aiPinbotPage.features.noCode.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.noCode.benefits.quickSetup')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.noCode.benefits.easyConnect')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.aiPinbotPage.features.noCode.benefits.update')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src="/lovable-uploads/lead-capture-survey-hero.png" 
                alt={t('features.chatPage.relatedFeatures.aiPinbotPage.features.noCode.imageAlt')} 
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
              {t('features.chatPage.relatedFeatures.aiPinbotPage.integrations.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t('features.chatPage.relatedFeatures.aiPinbotPage.integrations.subtitle')}
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
              {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.websiteChat.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.websiteChat.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.supportFlow.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.supportFlow.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <LifeBuoy className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.postPurchase.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatPage.relatedFeatures.aiPinbotPage.useCases.postPurchase.description')}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
              {t('features.chatPage.relatedFeatures.aiPinbotPage.cta.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('features.chatPage.relatedFeatures.aiPinbotPage.cta.subtitle')}
            </p>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.chatPage.relatedFeatures.aiPinbotPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default AIPinBot;