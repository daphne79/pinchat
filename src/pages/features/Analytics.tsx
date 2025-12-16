import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import ExploreFeatures from "@/components/ExploreFeatures";
import { BarChart3, TrendingUp, Globe, Link2, FileText, Settings, Target, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAssetPath } from '@/lib/assetPath';

const Analytics = () => {
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
                  {t('features.analyticsPage.hero.title')}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('features.analyticsPage.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    {t('features.analyticsPage.hero.cta')}
                  </Button>
                </div>
              </div>
              <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
                <img 
                  src={getAssetPath("/lovable-uploads/b1acf01e-622e-46d0-be79-527db756bbf9.png")} 
                  alt={t('features.analyticsPage.hero.imageAlt')} 
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
              {t('features.analyticsPage.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.analyticsPage.sectionSubtitle')}
            </p>
          </div>

          {/* Feature 1: 聊天量與互動指標 - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.analyticsPage.features.chatInsights.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.analyticsPage.features.chatInsights.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.chatInsights.benefits.dailyTrends')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.chatInsights.benefits.peakHours')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.chatInsights.benefits.sourceTracking')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={getAssetPath("/lovable-uploads/b11af36d-c1ef-4c17-a61b-b399d92b755f.png")} 
                alt={t('features.analyticsPage.features.chatInsights.imageAlt')} 
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 2: 訪客屬性與流量概況 - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.analyticsPage.features.trafficSource.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.analyticsPage.features.trafficSource.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.trafficSource.benefits.sourceTracking')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.trafficSource.benefits.engagementDepth')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.trafficSource.benefits.conversionEffect')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src={getAssetPath("/lovable-uploads/db797c1d-b1f5-4add-a175-18f58f93b1b1.png")} 
                alt={t('features.analyticsPage.features.trafficSource.imageAlt')} 
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 3: 連結與導流表現 - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <Link2 className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.analyticsPage.features.linkPerformance.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.analyticsPage.features.linkPerformance.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.linkPerformance.benefits.clickTracking')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.linkPerformance.benefits.behaviorAnalysis')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.linkPerformance.benefits.effectEvaluation')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={getAssetPath("/lovable-uploads/9cb91d42-3650-4d07-a90f-93eabef1199a.png")} 
                alt={t('features.analyticsPage.features.linkPerformance.imageAlt')} 
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 4: 問卷回覆與滿意度洞察 - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.analyticsPage.features.surveyAnalytics.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.analyticsPage.features.surveyAnalytics.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.surveyAnalytics.benefits.responseDistribution')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.surveyAnalytics.benefits.completionRate')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.analyticsPage.features.surveyAnalytics.benefits.feedbackSummary')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src={getAssetPath("/lovable-uploads/b1acf01e-622e-46d0-be79-527db756bbf9.png")} 
                alt={t('features.analyticsPage.features.surveyAnalytics.imageAlt')} 
                className="w-full"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Explore Other Features Section */}
        <ExploreFeatures currentFeature="analytics" />

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-[#02B13F]/10 via-[#02B13F]/5 to-background rounded-3xl p-12 sm:p-16 text-center max-w-4xl mx-auto shadow-lg">
            <div className="w-16 h-16 bg-[#02B13F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#02B13F]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
              {t('features.analyticsPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.analyticsPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Analytics;