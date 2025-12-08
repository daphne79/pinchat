import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Users, Handshake } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const ForB2BCommercial = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  return (
    <div className={`min-h-screen bg-background ${fontClass}`}>
      <FeatureNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-wide text-foreground mb-6 leading-normal lg:leading-[1.2]">
                Streamline Business Inquiries and Partnerships
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Handle service inquiries, share information, and manage leads in one channel — making it easier to connect and follow up with business partners.
              </p>
              <Button size="lg" className="text-base sm:text-lg">
                Get Started
              </Button>
            </div>
          
            {/* Hero Image */}
            <div className="mt-16 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/48658c77-a953-49d3-8bc6-b3b56379bea1.png" 
                alt="B2B commercial services dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-12 text-center">
              Why B2B Teams Use PinChat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Service Inquiries</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Answer product or service scope questions from potential clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Quotation Requests</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Collect client needs and provide estimated pricing or proposals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Lead Management</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Organize and track incoming business leads through chat interactions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Partnership Follow-up</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Continue discussions with partners after initial contact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Manufacturing Companies</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Handle bulk orders, custom requirements, and supplier inquiries.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">IT Services</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Manage technical consultations and project scope discussions.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Business Consultants</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Qualify leads and schedule consultation meetings efficiently.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Partnership Development</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Nurture business relationships and collaboration opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary/5 py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto rounded-2xl bg-card border p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">
                Start Your Free Trial
              </h2>
              <Button size="lg" className="text-base sm:text-lg">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForB2BCommercial;