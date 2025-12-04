import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Link2, Globe, BarChart3, Palette, MessageCircle, Users } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
const PinBoard = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  return <>
      <FeatureNavigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide mb-6 text-foreground leading-normal lg:leading-[1.2]">
                  Share Everything With One Branded Link
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  Create a mobile-friendly multi-link page to showcase your content, products, and contact options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    Create Your PinBoard
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img src="/lovable-uploads/a943b569-9b16-4e87-8372-5c99b676e584.png" alt="PinBoard link hub with chat integration and customization" className="max-h-full max-w-full object-contain rounded-lg shadow-lg" />
            </div>
          </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link2 className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">One-Click Creation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Create your brand link page with just one click</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Click Tracking</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Track click-through rates and optimize performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Custom Themes</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Customize theme colors and button styles to match your brand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature in Action */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center mb-16">PinBoard in Action</h2>
            <div className="space-y-24">
              {/* Scenario 1: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Create a Branded Page That Reflects Your Identity</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">Design a professional landing page tailored to your brand's look and feel, showcasing your products, services, and contact options in one place.</p>
                </div>
              <div className="min-h-80 sm:min-h-96 flex items-center justify-center">
                <img src="/lovable-uploads/89dcdb0f-d1e9-43b5-b79d-2af42fb8cdcf.png" alt="PinBoard background customization interface" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            
            {/* Scenario 2: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 min-h-80 sm:min-h-96 flex items-center justify-center">
                <img src="/lovable-uploads/d7d8f729-883d-4769-9c7d-ee5b6d044222.png" alt="Centralized link hub with multiple colorful link buttons" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Centralize All Your Links in One Powerful Hub</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">Consolidate your social, website, and contact links into a single page — perfect as a link-in-bio for Instagram, TikTok, and other social platforms.</p>
              </div>
            </div>
            
              {/* Scenario 3: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Optimize Your Page With Click Insights</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">Use simple click analytics to understand visitor behavior, refine your link layout, and maximize engagement.</p>
                </div>
              <div className="min-h-80 sm:min-h-96 flex items-center justify-center">
                <img src="/lovable-uploads/9a684b2b-549b-40c9-9241-1630df37fe86.png" alt="PinBoard click analytics dashboard with performance metrics" className="max-h-full max-w-full object-contain" />
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
                  <BarChart3 className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track clicks and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/analytics">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-[#02B13F]" />
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
          </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-[#02B13F]/10 via-[#02B13F]/5 to-background rounded-3xl p-12 sm:p-16 text-center max-w-4xl mx-auto shadow-lg">
              <div className="w-16 h-16 bg-[#02B13F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Link2 className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                Ready to Create Your Link Hub?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build your professional PinBoard in minutes and start tracking results.
              </p>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Create PinBoard Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default PinBoard;