import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Palette, Globe, Share2, Search, MessageCircle, Link2 } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const Branding = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  return (
    <>
      <FeatureNavigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide mb-6 text-foreground leading-normal lg:leading-[1.2]">
                  Make Every Chat Reflect Your Brand
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  Personalize chat appearance, domain, and meta settings to deliver a consistent, professional experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    Customize Your Brand
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/0f86e706-3c73-418b-828f-4952b0f9ade6.png" 
                alt="Brand customization with multiple chat interface color themes" 
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
                Complete Brand Control
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Customize every aspect of your chat experience to match your brand identity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Full Visual Control</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Custom avatar, nickname, background, and text colors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link2 className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Custom Chat URL</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Create branded chat links that match your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Custom Domain</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Bind custom domain like chat.yourbrand.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">SEO Optimization</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Custom meta title, description, and preview images</p>
              </div>
            </div>

            {/* Feature Examples */}
            <div className="space-y-32">
              {/* Scenario 1: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Brand-Matched Appearance</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Match your chat interface appearance perfectly with your brand website design.
                  </p>
                </div>
                <div className="h-80 sm:h-96 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/dbcc8025-ef88-46dd-80cc-6de6c3dc2e5e.png" 
                    alt="Professional workspace setup with custom UI branding" 
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              </div>
              
              {/* Scenario 2: Image left, Text right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/6439e1b7-b813-4217-8c9b-c19291cb92c5.png" 
                    alt="Custom domain URLs for professional branding" 
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Professional Custom Domain</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Use your own domain for a professional appearance that builds customer trust.
                  </p>
                </div>
              </div>
              
              {/* Scenario 3: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Social Media Integration</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Show branded preview images when sharing your chat links on social media.
                  </p>
                </div>
                <div className="h-80 sm:h-96 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4a477088-32cc-47e1-a04a-1b540d456ddd.png" 
                    alt="Branded chat interface with social media integration" 
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
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
                Related Features
              </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Chat Widget</CardTitle>
                <CardDescription>Branded chat widgets for your website</CardDescription>
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
                  <Link2 className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>PinBoard</CardTitle>
                <CardDescription>Branded link pages with custom themes</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/pinboard">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track performance of branded experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/analytics">{t('common.learnMore')}</Link>
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
                <Palette className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                Ready to Create Your Branded Experience?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start customizing your brand appearance and domain today.
              </p>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Start Customizing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Branding;