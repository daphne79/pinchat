import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Tags, FolderTree, Shield, Users, BarChart3, Bot, MessageSquare, TrendingUp } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { getAssetPath } from '@/lib/assetPath';

const ChatroomTeamManagement = () => {
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
                {t('solutions.chatroomTeamManagementPage.hero.breadcrumb')}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                {t('solutions.chatroomTeamManagementPage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('solutions.chatroomTeamManagementPage.hero.subtitle')}
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.chatroomTeamManagementPage.hero.cta')}
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 overflow-hidden">
              <img 
                src={getAssetPath("/lovable-uploads/6da4b416-cb61-490c-97f0-0b99b7589ba0.png")} 
                alt="Team management dashboard with organized chat folders" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 1: 挑戰 */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.chatroomTeamManagementPage.challenges.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.chatroomTeamManagementPage.challenges.items.hardToFind')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.chatroomTeamManagementPage.challenges.items.collaborationChaos')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{t('solutions.chatroomTeamManagementPage.challenges.items.lackConsistentWorkflow')}</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">{t('solutions.chatroomTeamManagementPage.challenges.items.noPermissionControl')}</p>
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
                  {t('solutions.chatroomTeamManagementPage.howPinChatHelps.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.chatroomTeamManagementPage.howPinChatHelps.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.chatroomTeamManagementPage.howPinChatHelps.unifiedTags.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.chatroomTeamManagementPage.howPinChatHelps.unifiedTags.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.chatroomTeamManagementPage.howPinChatHelps.folderOrganization.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.chatroomTeamManagementPage.howPinChatHelps.folderOrganization.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.chatroomTeamManagementPage.howPinChatHelps.rolePermissions.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.chatroomTeamManagementPage.howPinChatHelps.rolePermissions.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/6da4b416-cb61-490c-97f0-0b99b7589ba0.png")} 
                  alt="PinChat team management solution" 
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
              <div className="order-2 lg:order-1 overflow-hidden">
                <img 
                  src={getAssetPath("/lovable-uploads/6da4b416-cb61-490c-97f0-0b99b7589ba0.png")} 
                  alt="PinChat benefits dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-6">
                  {t('solutions.chatroomTeamManagementPage.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  {t('solutions.chatroomTeamManagementPage.benefits.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.chatroomTeamManagementPage.benefits.improveCollaboration.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.chatroomTeamManagementPage.benefits.improveCollaboration.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.chatroomTeamManagementPage.benefits.reduceMissedRepeats.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.chatroomTeamManagementPage.benefits.reduceMissedRepeats.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      {t('solutions.chatroomTeamManagementPage.benefits.scalableWorkflow.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('solutions.chatroomTeamManagementPage.benefits.scalableWorkflow.description')}
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
              {t('solutions.chatroomTeamManagementPage.recommendedFeatures.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/features/sub-account" className="p-6 bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.chatroomTeamManagementPage.recommendedFeatures.teamPermissions.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.chatroomTeamManagementPage.recommendedFeatures.teamPermissions.description')}
                </p>
              </Link>
              <Link to="/features/chatroom-management" className="p-6 bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tags className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.chatroomTeamManagementPage.recommendedFeatures.tagsFolders.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.chatroomTeamManagementPage.recommendedFeatures.tagsFolders.description')}
                </p>
              </Link>
              <Link to="/features/analytics" className="p-6 bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  {t('solutions.chatroomTeamManagementPage.recommendedFeatures.customerServiceLoad.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('solutions.chatroomTeamManagementPage.recommendedFeatures.customerServiceLoad.description')}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 探索其他使用情境 */}
        <section className="py-24 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              {t('solutions.chatroomTeamManagementPage.exploreUseCases.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={getAssetPath("/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png")} 
                    alt={t('solutions.chatroomTeamManagementPage.exploreUseCases.streamlineService.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.chatroomTeamManagementPage.exploreUseCases.streamlineService.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.chatroomTeamManagementPage.exploreUseCases.streamlineService.description')}
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={getAssetPath("/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png")} 
                    alt={t('solutions.chatroomTeamManagementPage.exploreUseCases.unifiedMessages.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.chatroomTeamManagementPage.exploreUseCases.unifiedMessages.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.chatroomTeamManagementPage.exploreUseCases.unifiedMessages.description')}
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={getAssetPath("/lovable-uploads/f4f43fc8-86f7-459a-8ba8-a97d9cc3610d.png")} 
                    alt={t('solutions.chatroomTeamManagementPage.exploreUseCases.analyzeFeedback.title')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {t('solutions.chatroomTeamManagementPage.exploreUseCases.analyzeFeedback.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('solutions.chatroomTeamManagementPage.exploreUseCases.analyzeFeedback.description')}
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
                {t('solutions.chatroomTeamManagementPage.cta.title')}
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                {t('solutions.chatroomTeamManagementPage.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChatroomTeamManagement;
