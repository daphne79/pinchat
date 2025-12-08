import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Star, FileText } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const ForEvents = () => {
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
              Engage Attendees Before, During, and After Your Event
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Answer event FAQs, host live group chats, and share follow-up materials — keeping participants informed and engaged at every stage.
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
              src="/lovable-uploads/a1960abd-93f1-4a03-b109-230d06508316.png" 
              alt="Event communication and Q&A interface" 
              className="mx-auto max-w-4xl w-full h-auto"
            />
          </section>

          {/* Key Benefits */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Event Information</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Answer FAQs about event time, location, or ticketing</p>
              </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Live Q&A</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Provide real-time responses during exhibitions or conferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Attendee Feedback</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Collect surveys or quick responses from participants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Post-event Materials</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Share recordings, slides, or event highlights afterward</p>
            </div>
          </div>
          </section>

          {/* Use Cases */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Conferences</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Manage speaker Q&A sessions and attendee networking.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Trade Shows</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Handle booth inquiries and product demonstration requests.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Workshops</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Support interactive learning and real-time participant questions.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Exhibitions</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Provide instant information and collect visitor feedback.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/50 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">{t('industries.eventsPage.cta.title')}</h2>
            <Button size="lg" className="text-base sm:text-lg">
              {t('industries.eventsPage.cta.button')}
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForEvents;