import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Code, Bot, BarChart3, Link2, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAssetPath } from '@/lib/assetPath';

const ChatWidget = () => {
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
                  {t('features.chatWidgetPage.hero.title')}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('features.chatWidgetPage.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    {t('features.chatWidgetPage.hero.cta')}
                  </Button>
                </div>
              </div>
              <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
                <img
                  src={getAssetPath("/lovable-uploads/567624dd-5545-4f61-8e0d-86f4513f673d.png")}
                  alt="Chat Widget 介面"
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
              {t('features.chatWidgetPage.keyFeatures.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.chatWidgetPage.keyFeatures.subtitle')}
            </p>
          </div>

          {/* Feature 1: One Line of Code - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatWidgetPage.keyFeatures.feature1.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatWidgetPage.keyFeatures.feature1.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature1.benefits.quickInstall')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature1.benefits.draggable')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature1.benefits.userExperience')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getAssetPath("/lovable-uploads/chat-widget-setting.png")}
                alt="一行程式碼安裝"
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 2: Full Customization - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatWidgetPage.keyFeatures.feature2.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatWidgetPage.keyFeatures.feature2.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature2.benefits.customization')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature2.benefits.branding')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature2.benefits.consistency')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img
                src={getAssetPath("/lovable-uploads/chat-widget-customization.png")}
                alt="全面客製化"
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 3: AI Integration - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatWidgetPage.keyFeatures.feature3.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatWidgetPage.keyFeatures.feature3.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature3.benefits.aiResponse')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature3.benefits.handoff')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature3.benefits.efficiency')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getAssetPath("/lovable-uploads/chat-widget-ai-bot.png")}
                alt="AI 聊天機器人整合"
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 4: Conversion Optimization - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatWidgetPage.keyFeatures.feature4.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatWidgetPage.keyFeatures.feature4.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature4.benefits.engagement')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature4.benefits.tracking')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatWidgetPage.keyFeatures.feature4.benefits.conversion')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img
                src={getAssetPath("/lovable-uploads/chat-widget-analysis.png")}
                alt="提升轉換"
                className="w-full"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Explore Other Features Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
              {t('features.chatWidgetPage.exploreFeatures.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Link2 className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatWidgetPage.exploreFeatures.pinBoard.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatWidgetPage.exploreFeatures.pinBoard.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatWidgetPage.exploreFeatures.aiPinBot.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatWidgetPage.exploreFeatures.aiPinBot.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatWidgetPage.exploreFeatures.dataAnalysis.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatWidgetPage.exploreFeatures.dataAnalysis.description')}
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
              <MessageSquare className="w-8 h-8 text-[#02B13F]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
              {t('features.chatWidgetPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.chatWidgetPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      
        {/* feature1 */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <img 
              src={getAssetPath("/lovable-uploads/50299fb5-4a7e-41a7-8d52-1f79b652d31c.png")} 
              alt="50299fb5-4a7e-41a7-8d52-1f79b652d31c" 
              className="w-full h-auto" 
              loading="lazy" 
            />
          </div>
        </section>
</main>
      <Footer />
    </>;
};

export default ChatWidget;
