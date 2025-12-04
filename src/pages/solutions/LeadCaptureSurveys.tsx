import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, FileText, Download } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const LeadCaptureSurveys = () => {
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
              Capture Leads While You Chat
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conversational forms that feel natural.
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
              src="/lovable-uploads/e56b55a0-a523-4d27-89ec-f87622f38283.png" 
              alt="Lead capture survey interface in chat conversation" 
              className="mx-auto max-w-4xl w-full h-auto"
            />
          </section>

          {/* Key Benefits */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Seamless Data Collection</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Gather customer details without leaving chat</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Custom Survey Questions</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Create surveys tailored to your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Smart Follow-ups</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Respond based on customer answers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Easy Export</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Export data for CRM and marketing use</p>
              </div>
            </div>
          </section>

          {/* Usage Scenarios */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Retail Loyalty Programs</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Retail shop collecting customer contact info for loyalty program.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Post-Event Feedback</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Post-event attendee feedback collection.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">E-commerce Preferences</h3>
                <p className="text-sm sm:text-base text-muted-foreground">E-commerce collecting buyer preferences.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Service Quote Collection</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Service provider gathering contact info before sending manual quote.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/50 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-4">Start Capturing Better Leads Today</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">Turn conversations into valuable customer insights.</p>
            <Button size="lg" className="text-base sm:text-lg">
              Create My Survey
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadCaptureSurveys;