import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Palette, Link2, MessageCircle, BarChart3, Sparkles, Globe, Users, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const PinBoard = () => {
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
                  {t('features.chatPage.relatedFeatures.pinBoardPage.hero.title')}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    {t('features.chatPage.relatedFeatures.pinBoardPage.hero.cta')}
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    {t('features.chatPage.relatedFeatures.pinBoardPage.hero.ctaSecondary')}
                  </Button>
                </div>
              </div>
              <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
                <img 
                  src="/lovable-uploads/a943b569-9b16-4e87-8372-5c99b676e584.png" 
                  alt={t('features.chatPage.relatedFeatures.pinBoardPage.hero.imageAlt')} 
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
              {t('features.chatPage.relatedFeatures.pinBoardPage.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.chatPage.relatedFeatures.pinBoardPage.sectionSubtitle')}
            </p>
          </div>

          {/* Feature 1: Flexible Branded Layouts - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.flexibleBrandedLayouts.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.flexibleBrandedLayouts.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.flexibleBrandedLayouts.benefits.multipleLayouts')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.flexibleBrandedLayouts.benefits.fullControl')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.flexibleBrandedLayouts.benefits.mobileFirst')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/89dcdb0f-d1e9-43b5-b79d-2af42fb8cdcf.png" 
                alt={t('features.chatPage.relatedFeatures.pinBoardPage.features.flexibleBrandedLayouts.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 2: Centralized Actions - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Link2 className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.centralizedActions.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.centralizedActions.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.centralizedActions.benefits.showcaseLinks')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.centralizedActions.benefits.reduceFriction')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.centralizedActions.benefits.perfectForCampaigns')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src="/lovable-uploads/d7d8f729-883d-4769-9c7d-ee5b6d044222.png" 
                alt={t('features.chatPage.relatedFeatures.pinBoardPage.features.centralizedActions.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 3: Built-In Chat Entry - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.builtInChatEntry.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.builtInChatEntry.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.builtInChatEntry.benefits.launchInstantChat')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.builtInChatEntry.benefits.supportAIOrHuman')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.builtInChatEntry.benefits.minimizeDropOff')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/a943b569-9b16-4e87-8372-5c99b676e584.png" 
                alt={t('features.chatPage.relatedFeatures.pinBoardPage.features.builtInChatEntry.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 4: Insightful Analytics - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.insightfulAnalytics.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatPage.relatedFeatures.pinBoardPage.features.insightfulAnalytics.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.insightfulAnalytics.benefits.viewLinkEngagement')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.insightfulAnalytics.benefits.identifyHighPerforming')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatPage.relatedFeatures.pinBoardPage.features.insightfulAnalytics.benefits.makeDataDriven')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src="/lovable-uploads/9a684b2b-549b-40c9-9241-1630df37fe86.png" 
                alt={t('features.chatPage.relatedFeatures.pinBoardPage.features.insightfulAnalytics.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Use Case Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
              {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.socialMediaBioLink.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.socialMediaBioLink.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.campaignLandingPage.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.campaignLandingPage.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.customerOnboardingHub.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatPage.relatedFeatures.pinBoardPage.useCases.customerOnboardingHub.description')}
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
              {t('features.chatPage.relatedFeatures.pinBoardPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.chatPage.relatedFeatures.pinBoardPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default PinBoard;