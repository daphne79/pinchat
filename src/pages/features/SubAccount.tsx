import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { UserPlus, Shield, Users, Lock, Bot, MessageSquare, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAssetPath } from '@/lib/assetPath';

const SubAccount = () => {
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
                  {t('features.subAccountPage.hero.title')}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('features.subAccountPage.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    {t('features.subAccountPage.hero.cta')}
                  </Button>
                </div>
              </div>
              <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
                <img
                  src={getAssetPath("/lovable-uploads/6ae22272-9807-4c3d-bbae-315dca582a9d.png")}
                  alt={t('features.subAccountPage.hero.imageAlt')}
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
              {t('features.subAccountPage.keyFeatures.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subAccountPage.keyFeatures.subtitle')}
            </p>
          </div>

          {/* Feature 1: Quick Member Addition - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <UserPlus className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.subAccountPage.keyFeatures.feature1.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.subAccountPage.keyFeatures.feature1.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature1.benefits.step')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature1.benefits.assign')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature1.benefits.reduce')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getAssetPath("/lovable-uploads/d1ad25e5-2193-4b5d-878b-bbc0164990b0.png")}
                alt={t('features.subAccountPage.keyFeatures.feature1.imageAlt')}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 2: Roles and Permissions - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.subAccountPage.keyFeatures.feature2.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.subAccountPage.keyFeatures.feature2.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature2.benefits.setRole')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature2.benefits.control')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature2.benefits.maintain')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img
                src={getAssetPath("/lovable-uploads/63b5db4a-d281-4ef4-9cd3-df8a81abf9c7.png")}
                alt={t('features.subAccountPage.keyFeatures.feature2.imageAlt')}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 3: Cross-team Support - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.subAccountPage.keyFeatures.feature3.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.subAccountPage.keyFeatures.feature3.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature3.benefits.suitable')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature3.benefits.collaborate')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature3.benefits.maintain')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getAssetPath("/lovable-uploads/b6ba0595-a6d8-41b5-a24a-f050e7100d45.png")}
                alt={t('features.subAccountPage.keyFeatures.feature3.imageAlt')}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 4: Data and Account Security - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.subAccountPage.keyFeatures.feature4.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.subAccountPage.keyFeatures.feature4.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature4.benefits.prevent')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature4.benefits.maintain')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.subAccountPage.keyFeatures.feature4.benefits.enhance')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img
                src={getAssetPath("/lovable-uploads/6ae22272-9807-4c3d-bbae-315dca582a9d.png")}
                alt={t('features.subAccountPage.keyFeatures.feature4.imageAlt')}
                className="w-full rounded-2xl shadow-xl"
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
              {t('features.subAccountPage.exploreFeatures.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.subAccountPage.exploreFeatures.aiPinBot.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.subAccountPage.exploreFeatures.aiPinBot.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.subAccountPage.exploreFeatures.chatroomManagement.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.subAccountPage.exploreFeatures.chatroomManagement.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.subAccountPage.exploreFeatures.analytics.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.subAccountPage.exploreFeatures.analytics.description')}
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
              <Users className="w-8 h-8 text-[#02B13F]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
              {t('features.subAccountPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.subAccountPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};

export default SubAccount;