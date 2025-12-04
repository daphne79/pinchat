import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { MessageCircle, Users, Globe, Zap, Image, FileText } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
const Chat = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  return (
    <div className={`min-h-screen bg-background ${fontClass}`}>
      <FeatureNavigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide mb-6 text-foreground leading-normal lg:leading-[1.2]">
                {t('features.chatPage.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                {t('features.chatPage.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                  {t('features.chatPage.hero.cta')}
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img src="/lovable-uploads/aa66a1b3-b7b1-4897-a7b7-c7f85c930a5a.png" alt={t('features.chatPage.hero.imageAlt')} className="max-h-full max-w-full object-contain rounded-lg shadow-lg" />
            </div>
          </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-4">
                {t('features.chatPage.benefits.title') || 'Powerful Chat Features'}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('features.chatPage.benefits.subtitle') || 'Everything you need for seamless communication'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{t('features.chatPage.benefits.oneOnOne.title')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t('features.chatPage.benefits.oneOnOne.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{t('features.chatPage.benefits.groupChat.title')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t('features.chatPage.benefits.groupChat.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{t('features.chatPage.benefits.richMessages.title')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t('features.chatPage.benefits.richMessages.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{t('features.chatPage.benefits.messageActions.title')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t('features.chatPage.benefits.messageActions.description')}</p>
            </div>
          </div>

            {/* Feature Examples */}
            <div className="space-y-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{t('features.chatPage.inAction.oneOnOne.title')}</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  {t('features.chatPage.inAction.oneOnOne.description')}
                </p>
              </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/c0e52f15-f0bd-4bf4-97f0-11a3cc31b0c2.png" alt={t('features.chatPage.inAction.oneOnOne.imageAlt')} className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            
            {/* Group Chat Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/4e6f8ffe-76b4-4455-9e52-ca1d102a8247.png" alt={t('features.chatPage.inAction.groupChat.imageAlt')} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{t('features.chatPage.inAction.groupChat.title')}</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  {t('features.chatPage.inAction.groupChat.description')}
                </p>
              </div>
            </div>
            
            {/* Rich Messages Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{t('features.chatPage.inAction.richMessages.title')}</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">{t('features.chatPage.inAction.richMessages.description')}</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.richMessages.textMessages')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.richMessages.freeStickers')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.richMessages.voiceMessages')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.richMessages.filesVideos')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.richMessages.locationLink')}</span>
                  </div>
                </div>
              </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/754a4248-0d54-4240-bda0-4fa19180bda5.png" alt={t('features.chatPage.inAction.richMessages.imageAlt')} className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            
            {/* Message Actions Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/05e51b6c-6cdf-4411-8dab-c74e9d4c41f0.png" alt={t('features.chatPage.inAction.messageActions.imageAlt')} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{t('features.chatPage.inAction.messageActions.title')}</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  {t('features.chatPage.inAction.messageActions.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.messageActions.react')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.messageActions.reply')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.messageActions.unsend')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#02B13F] rounded-full"></div>
                    <span className="text-sm">{t('features.chatPage.inAction.messageActions.copy')}</span>
                  </div>
                </div>
              </div>
            </div>

              {/* Stickers Section */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-4">{t('features.chatPage.stickers.title')}</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">{t('features.chatPage.stickers.description')}</p>
                <div className="flex justify-center">
                  <img src="/lovable-uploads/0559d273-47c7-4eb8-a015-b83a02db361d.png" alt={t('features.chatPage.stickers.imageAlt')} className="w-full max-w-2xl h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                {t('features.chatPage.relatedFeatures.title')}
              </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>{t('features.chatPage.relatedFeatures.chatWidget.title')}</CardTitle>
                <CardDescription>{t('features.chatPage.relatedFeatures.chatWidget.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/chat-widget">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>{t('features.chatPage.relatedFeatures.aiPinbot.title')}</CardTitle>
                <CardDescription>{t('features.chatPage.relatedFeatures.aiPinbot.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/ai-pinbot">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>{t('features.chatPage.relatedFeatures.chatroomManagement.title')}</CardTitle>
                <CardDescription>{t('features.chatPage.relatedFeatures.chatroomManagement.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/chatroom-management">{t('common.learnMore')}</Link>
                </Button>
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
                <MessageCircle className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                {t('features.chatPage.cta.title')}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('features.chatPage.cta.subtitle')}
              </p>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                {t('features.chatPage.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Chat;