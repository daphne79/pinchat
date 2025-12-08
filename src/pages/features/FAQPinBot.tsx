import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { HelpCircle, Zap, Users, RefreshCw, Bot, MessageCircle } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
const FAQPinBot = () => {
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
                Provide Instant Answers to FAQs
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Automate repetitive questions like hours, pricing, or service details, saving time for both you and your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                  Setup FAQ Bot
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img src="/lovable-uploads/0dca5dad-cf11-450c-97cd-79537e02a5e0.png" alt="FAQ bot with seamless human handover capabilities" className="max-h-full max-w-full object-contain rounded-lg shadow-lg" />
            </div>
          </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Multiple Reply Formats</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Support text+image, buttons, and carousel responses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Keyword Triggers</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Keyword-triggered precise replies for accurate responses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Human Handover</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Let your staff step in when the bot can't resolve a query</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Quick Switch</h3>
              <p className="text-sm sm:text-base text-muted-foreground">One-click switch to live agent when needed</p>
            </div>
          </div>
          </div>
        </section>

        {/* Feature in Action */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center mb-16">FAQ Automation Examples</h2>
          <div className="space-y-24">
            {/* Scenario 1: Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Auto-Reply Common Questions</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Automatically reply to "shipping", "payment", "return" and other common customer queries.
                </p>
              </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/7e3c3830-86cf-4b91-ae9e-ec7bf56de25a.png" alt={t('common.faqBotMobileAlt')} className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            
            {/* Scenario 2: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/626b0247-c0f1-4673-9231-bbccd2042958.png" alt="FAQ bot carousel interface for visitor guidance" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">First-time Visitor Guidance</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Guide new visitors with helpful information and navigation assistance.
                </p>
              </div>
            </div>
            
            {/* Scenario 3: Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Human Follow-up for Complex Queries</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">Let your team handle questions that go beyond the bot's FAQ coverage.</p>
              </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/575cab91-ce4c-4419-b8bd-ea875c76e455.png" alt="Smart bot to human routing system" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            
            {/* Scenario 4: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/5dd106f6-74cd-41eb-b094-1010426a14b0.png" alt="FAQ bot event support automation interface" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Event Support Automation</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Auto-answer FAQs during events and promotions to handle increased inquiries.
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
                  <Bot className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>AI PinBot</CardTitle>
                <CardDescription>Advanced AI conversations with human handover</CardDescription>
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
                  <Users className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Chatroom Management</CardTitle>
                <CardDescription>Organize and manage all conversations</CardDescription>
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
                <HelpCircle className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
                Ready to Automate Your FAQ Responses?
              </h2>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Setup FAQ Bot Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default FAQPinBot;