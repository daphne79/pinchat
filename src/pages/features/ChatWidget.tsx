import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Code, Palette, TrendingUp, Zap, MessageCircle, Settings } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const ChatWidget = () => {
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
                  Engage Website Visitors in Real Time
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  Add a chat button to your site and answer questions instantly, turning visitors into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    Add Widget to Site
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/567624dd-5545-4f61-8e0d-86f4513f673d.png" 
                alt="Website chat widget integration with professional design" 
                loading="eager"
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Auto-generated Code</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Get embed code directly from your dashboard, copy and paste</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Full Customization</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Customize button text, colors, and icons to match your brand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Boost Engagement</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Increase visitor engagement and inquiry conversion rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature in Action */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center mb-16">Transform Your Website with Widgets</h2>
            <div className="space-y-24">
              {/* Scenario 1: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Instant Support Access</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Add an instant support button at the bottom-right of your website for immediate customer assistance.
                  </p>
                </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/9c291ddb-6f79-4def-a631-bacb9ba5ae36.png" 
                  alt="Customer support chat widget on website" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            {/* Scenario 2: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/80bf9a84-1b53-4ce8-a90d-e35b64f9bede.png" 
                  alt="Multiple chat widget styles and color variations" 
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Product Inquiry Button</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Place inquiry buttons on blog posts or product pages to capture interested visitors instantly.
                </p>
              </div>
            </div>
            
              {/* Scenario 3: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Event Page Integration</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Enable live chat access on event pages for real-time Q&A and engagement.
                  </p>
                </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8dbcaac0-c9fe-4b49-b27d-23157b741613.png" 
                  alt="Custom chat widget styles for different page types" 
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            {/* Scenario 4: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/81870951-e839-4774-880b-90919b651eae.png" 
                  alt="Multi-platform chat widget styles and customization options" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Custom Styling</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Customize widget appearance for different pages to match your content style.
                </p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center mb-12">Related Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Chat</CardTitle>
                <CardDescription>Instant one-on-one and group conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/chat">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Branding & Customization</CardTitle>
                <CardDescription>Customize appearance and domain settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/branding">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track engagement and performance metrics</CardDescription>
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
                <Code className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
                Ready to Add Chat to Your Website?
              </h2>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Get Widget Code
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ChatWidget;