import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { Users, Shield, Bell, UserCheck, MessageCircle, Settings } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const SubAccount = () => {
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
                  Scale Support With Team Collaboration
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  Assign team members to specific links so multiple agents can manage customer chats together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    Add Team Members
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/6ae22272-9807-4c3d-bbae-315dca582a9d.png" 
                alt="Team collaboration and sub-account management" 
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Multiple Agents</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Multiple team members via one chat link</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Permission Control</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Three levels: reply, edit, view analytics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Custom Notifications</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Personalized notification settings per member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature in Action */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center mb-16">Team Collaboration Examples</h2>
            <div className="space-y-24">
              {/* Scenario 1: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">24/7 Customer Service</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Set up customer service shifts with multiple agents covering different time zones.
                  </p>
                </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d1ad25e5-2193-4b5d-878b-bbc0164990b0.png" 
                  alt="Team notification and shift management workflow" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            {/* Scenario 2: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/63b5db4a-d281-4ef4-9cd3-df8a81abf9c7.png" 
                  alt="Data security control and permission management" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Data Security Control</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Control access permissions to prevent sensitive data leaks and ensure security.
                </p>
              </div>
            </div>
            
              {/* Scenario 3: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Conversation Assignment</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Assign specific customer conversations to the most suitable team members.
                  </p>
                </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b6ba0595-a6d8-41b5-a24a-f050e7100d45.png" 
                  alt="Conversation assignment and multiple agents management" 
                  className="max-h-full max-w-full object-contain"
                />
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
                <CardDescription>Team collaboration on customer conversations</CardDescription>
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
                <CardTitle>Chatroom Management</CardTitle>
                <CardDescription>Organize team conversations and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/chatroom-management">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>AI PinBot</CardTitle>
                <CardDescription>AI assistance for your support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/ai-pinbot">{t('common.learnMore')}</Link>
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
                <Users className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-8">
                Ready to Scale Your Customer Support?
              </h2>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Invite Team Members
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SubAccount;