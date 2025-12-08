import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tags, Folder, Download, Users } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
const ChatroomTeamManagement = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  return <div className="min-h-screen bg-background">
      <FeatureNavigation />
      
      {/* Hero Section */}
      <main className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-4 leading-normal lg:leading-[1.2]">
              Organize Your Customer Conversations
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Keep your team and chats in order.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="text-base sm:text-lg">
                Get Started
              </Button>
            </div>
          </section>

          {/* Hero Image */}
          <section className="mb-16 text-center">
            <img src="/lovable-uploads/6da4b416-cb61-490c-97f0-0b99b7589ba0.png" alt="Team management dashboard with organized chat folders" className="mx-auto max-w-4xl w-full h-auto" />
          </section>

          {/* Key Benefits */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tags className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Custom Tags</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Tag chats by topic or customer type</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Folder className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Easy Organization</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Create folders for seamless navigation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Export Customer Lists</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Export data for follow-up campaigns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Sub-account Assignment</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Assign teams to specific chat entry points</p>
              </div>
            </div>
          </section>

          {/* Usage Scenarios */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Customer Follow-up</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Tagging and grouping customers for personalized follow-up.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Chat Organization</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Organizing chats by campaign or service type.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Customer List Export</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Exporting customer list for outreach.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Team Collaboration</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Assigning multiple team members to handle chats from one link.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/50 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">{t('solutions.chatroomTeamManagementPage.cta.title')}</h2>
            <Button size="lg" className="text-base sm:text-lg">
              {t('solutions.chatroomTeamManagementPage.cta.button')}
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};
export default ChatroomTeamManagement;