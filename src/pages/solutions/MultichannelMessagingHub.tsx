import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Inbox, Users, Zap } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const MultichannelMessagingHub = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  return (
    <div className="min-h-screen bg-background">
      <FeatureNavigation />
      
      {/* Hero Section */}
      <main className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-4 leading-normal lg:leading-[1.2]">
              Manage All Messages in One Place
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect LINE, Messenger, WhatsApp, and your website into a single inbox.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="text-base sm:text-lg">
                Get Started
              </Button>
            </div>
          </section>

          {/* Hero Image */}
          <section className="mb-16 text-center">
            <img 
              src="/lovable-uploads/a61b9a5a-7234-4e21-b05a-03750511fa6b.png" 
              alt="Multi-channel messaging dashboard interface" 
              className="mx-auto max-w-4xl w-full h-auto"
            />
          </section>

          {/* Key Benefits */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Inbox className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Unified Inbox</h3>
                <p className="text-sm sm:text-base text-muted-foreground">All channels in one place for easy management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Faster Replies</h3>
                <p className="text-sm sm:text-base text-muted-foreground">No platform switching, respond instantly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Consistent Experience</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Same quality service across all channels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Multi-user Access</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Team collaboration with sub-account management</p>
              </div>
            </div>
          </section>

          {/* Usage Scenarios */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Small Business Daily Operations</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Small business answering messages from multiple platforms daily.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">E-commerce Customer Service</h3>
                <p className="text-sm sm:text-base text-muted-foreground">E-commerce store handling pre-sales and after-sales chats.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Event & Campaign Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Event or campaign live Q&A.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Social Media Campaigns</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Social media promotion replies and inquiries.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/50 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">{t('solutions.multichannelMessagingPage.cta.title')}</h2>
            <Button size="lg" className="text-base sm:text-lg">
              {t('solutions.multichannelMessagingPage.cta.button')}
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MultichannelMessagingHub;