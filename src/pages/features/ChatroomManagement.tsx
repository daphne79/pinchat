import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { FolderOpen, Tag, Download, Search, MessageCircle, BarChart3 } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const ChatroomManagement = () => {
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
                Organize Conversations and Customers Effortlessly
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Use folders, labels, and directories to structure chats, manage contacts, and export customer lists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                  Organize Conversations
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/chat_management.png" 
                alt="Organized chatroom management interface" 
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
              />
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
                <Tag className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Smart Organization</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Tag and folder-based organization system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FolderOpen className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Auto Customer Lists</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Auto-generate and update customer database</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Easy Export</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Export customer lists for CRM import</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{t('common.quickSearch')}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t('common.quickSearchDescription')}</p>
            </div>
          </div>
          </div>
        </section>

        {/* Feature in Action */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center mb-16">Organization Made Simple</h2>
          <div className="space-y-24">
            {/* Scenario 1: Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Project-Based Organization</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Organize conversations by project, customer type, or any custom category system.
                </p>
              </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/project-based-folders.png" 
                  alt="Chatroom organization with tags and folders interface" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            {/* Scenario 2: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/conversation-archive.png" 
                  alt="Advanced chatroom management with folder organization" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Conversation Archive</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Archive completed conversations while keeping them searchable for future reference.
                </p>
              </div>
            </div>
            
            {/* Scenario 3: Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Customer Data Export</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Export customer lists with conversation history for follow-up campaigns and CRM integration.
                </p>
              </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/customer-export.png" 
                  alt="Customer data export interface" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            {/* Scenario 4: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/vip-customer-tracking.png" 
                  alt="VIP customer tracking interface" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">VIP Customer Tracking</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Tag and track VIP customers for priority support and personalized service.
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
                <CardDescription>The conversations you'll be managing</CardDescription>
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
                  <BarChart3 className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Analyze conversation and customer data</CardDescription>
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
                  <Tag className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Sub-account</CardTitle>
                <CardDescription>Team access to organized conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/sub-account">{t('common.learnMore')}</Link>
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
                <FolderOpen className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                Ready to Organize Your Conversations?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start managing your customer communications more effectively.
              </p>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Setup Management
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ChatroomManagement;