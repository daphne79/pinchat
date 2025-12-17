import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import ExploreFeatures from "@/components/ExploreFeatures";
import { HelpCircle, Zap, Users, Image, Bot, MessageCircle, LifeBuoy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAssetPath } from '@/lib/assetPath';

const FAQPinBot = () => {
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
                  {t('features.faqPinbotPage.hero.title')}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('features.faqPinbotPage.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    {t('features.faqPinbotPage.hero.cta')}
                  </Button>
                </div>
              </div>
              <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
                <img
                  src={getAssetPath("/lovable-uploads/0dca5dad-cf11-450c-97cd-79537e02a5e0.png")}
                  alt={t('features.faqPinbotPage.hero.imageAlt')}
                  className="max-h-full max-w-full object-contain"
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
              {t('features.faqPinbotPage.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.faqPinbotPage.sectionSubtitle')}
            </p>
          </div>

          {/* Feature 1: Structured FAQ Management - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <HelpCircle className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.faqPinbotPage.features.structuredFAQ.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.faqPinbotPage.features.structuredFAQ.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.structuredFAQ.benefits.fixedInfo')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.structuredFAQ.benefits.keywordTrigger')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.structuredFAQ.benefits.consistency')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getAssetPath("/lovable-uploads/faq-chatbot-auto-reply.png")}
                alt={t('features.faqPinbotPage.features.structuredFAQ.imageAlt')}
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 2: Multi-format Reply Capability - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Image className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.faqPinbotPage.features.multiFormat.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.faqPinbotPage.features.multiFormat.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.multiFormat.benefits.richMedia')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.multiFormat.benefits.buttons')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.multiFormat.benefits.carousel')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img
                src={getAssetPath("/lovable-uploads/chatroom-team-management-hero.png")}
                alt={t('features.faqPinbotPage.features.multiFormat.imageAlt')}
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 3: Seamless Human Handoff - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.faqPinbotPage.features.humanHandoff.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.faqPinbotPage.features.humanHandoff.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.humanHandoff.benefits.autoDetect')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.humanHandoff.benefits.contextView')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.humanHandoff.benefits.noLoss')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getAssetPath("/lovable-uploads/customer-feedback-analytics-hero.png")}
                alt={t('features.faqPinbotPage.features.humanHandoff.imageAlt')}
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 4: Event & Traffic Design - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.faqPinbotPage.features.eventDesign.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.faqPinbotPage.features.eventDesign.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.eventDesign.benefits.quickEdit')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.eventDesign.benefits.integration')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.faqPinbotPage.features.eventDesign.benefits.reduceLoad')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img
                src={getAssetPath("/lovable-uploads/faq-chatbot-event-support-automation.png")}
                alt={t('features.faqPinbotPage.features.eventDesign.imageAlt')}
                className="w-full"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Explore Other Features Section */}
        <ExploreFeatures currentFeature="faqPinbot" />

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-[#02B13F]/10 via-[#02B13F]/5 to-background rounded-3xl p-12 sm:p-16 text-center max-w-4xl mx-auto shadow-lg">
            <div className="w-16 h-16 bg-[#02B13F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-[#02B13F]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
              {t('features.faqPinbotPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.faqPinbotPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};

export default FAQPinBot;
