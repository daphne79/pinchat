import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { FolderOpen, Tag, Search, BarChart3, LifeBuoy, Users, Archive, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const ChatroomManagement = () => {
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
                {t('features.chatroomManagementPage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                {t('features.chatroomManagementPage.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                  {t('features.chatroomManagementPage.hero.cta')}
                </Button>
              </div>
            </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/chat_management.png" 
                alt={t('features.chatroomManagementPage.hero.imageAlt')} 
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
              {t('features.chatroomManagementPage.sectionTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.chatroomManagementPage.sectionSubtitle')}
            </p>
          </div>

          {/* Feature 1: Chat Labels - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Tag className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatroomManagementPage.features.chatLabels.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatroomManagementPage.features.chatLabels.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.chatLabels.benefits.markByCategory')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.chatLabels.benefits.quickSearch')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.chatLabels.benefits.improveEfficiency')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/chat_management.png" 
                alt={t('features.chatroomManagementPage.features.chatLabels.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 2: Folder Grouping - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <FolderOpen className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatroomManagementPage.features.folderGrouping.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatroomManagementPage.features.folderGrouping.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.folderGrouping.benefits.categorizeByScenario')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.folderGrouping.benefits.supportLargeVolume')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.folderGrouping.benefits.fasterAccess')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src="/lovable-uploads/project-based-folders.png" 
                alt={t('features.chatroomManagementPage.features.folderGrouping.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 3: Quick Search - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 animate-fade-in">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatroomManagementPage.features.quickSearch.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatroomManagementPage.features.quickSearch.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.quickSearch.benefits.searchByName')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.quickSearch.benefits.quickCustomerList')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.quickSearch.benefits.rapidAccess')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/conversation-archive.png" 
                alt={t('features.chatroomManagementPage.features.quickSearch.imageAlt')} 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Feature 4: Clean Space - Text Right, Visual Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
            <div className="order-2">
              <div className="w-14 h-14 bg-[#02B13F]/10 rounded-2xl flex items-center justify-center mb-6">
                <Archive className="w-7 h-7 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {t('features.chatroomManagementPage.features.cleanSpace.title')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {t('features.chatroomManagementPage.features.cleanSpace.description')}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.cleanSpace.benefits.deleteChatrooms')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.cleanSpace.benefits.hideConversations')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#02B13F] mt-1">✓</span>
                  <span>{t('features.chatroomManagementPage.features.cleanSpace.benefits.maintainWorkflow')}</span>
                </li>
              </ul>
            </div>
            <div className="order-1">
              <img 
                src="/lovable-uploads/vip-customer-tracking.png" 
                alt={t('features.chatroomManagementPage.features.cleanSpace.imageAlt')} 
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
              {t('features.chatroomManagementPage.useCases.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <LifeBuoy className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatroomManagementPage.useCases.customerServiceCenter.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatroomManagementPage.useCases.customerServiceCenter.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatroomManagementPage.useCases.salesManagement.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatroomManagementPage.useCases.salesManagement.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#02B13F]" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {t('features.chatroomManagementPage.useCases.crossTeamCollaboration.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('features.chatroomManagementPage.useCases.crossTeamCollaboration.description')}
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
              {t('features.chatroomManagementPage.cta.title')}
            </h2>
            <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
              {t('features.chatroomManagementPage.cta.button')}
            </Button>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default ChatroomManagement;