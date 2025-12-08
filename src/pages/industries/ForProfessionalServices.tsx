import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MessageSquare, Users } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const ForProfessionalServices = () => {
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
              Deliver Trustworthy Professional Support Online
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let clients ask questions, request consultations, and exchange documents securely — while keeping every conversation organized in one place.
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
              src="/lovable-uploads/0c488cfa-6ba1-4c50-b52e-2437906a8102.png" 
              alt="Professional service provider using chat interface with clients" 
              className="mx-auto max-w-4xl w-full h-auto"
            />
          </section>

          {/* Key Benefits */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Service Scope</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Answer client questions about expertise, fees, and service offerings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Appointment Booking</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Manage consultation scheduling quickly and efficiently</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Document Sharing</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Share checklists or required materials securely through chat</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Follow-up Feedback</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Collect feedback after consultations to improve service quality</p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Legal Services</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Handle client consultations, document sharing, and case updates.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Accounting Firms</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Manage tax consultations, financial planning, and client communications.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Business Consulting</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Streamline client onboarding and project management discussions.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Professional Consultation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Provide expert advice and document sharing across various fields.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/50 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">{t('industries.professionalServicesPage.cta.title')}</h2>
            <Button size="lg" className="text-base sm:text-lg">
              {t('industries.professionalServicesPage.cta.button')}
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForProfessionalServices;