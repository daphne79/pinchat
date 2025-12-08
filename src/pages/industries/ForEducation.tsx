import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, MessageSquare, Users, BarChart } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const ForEducation = () => {
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
              Connect With Students Inside and Outside the Classroom
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              From course inquiries to class discussions and post-class surveys, make learning more interactive and accessible for students and parents.
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
              src="/lovable-uploads/325ad0e3-2e4d-41f2-bba0-d068115d2b8e.png" 
              alt="Educational setting with teacher-student chat interface" 
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
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Enrollment Questions</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Handle inquiries about course content, fees, and registration process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Class Updates</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Share timetables, schedule changes, and important reminders with students</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Student Feedback</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Gather feedback or ratings from students and parents after courses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Group Discussions</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Support Q&A and collaborative discussions during class projects</p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-center text-foreground mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Course Consultation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Provide guidance on course selection and academic planning.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">In-Class Discussion</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Facilitate real-time classroom participation and Q&A sessions.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Post-Class Survey</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Collect feedback to improve teaching methods and course content.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">Administrative Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Handle enrollment, scheduling, and academic administrative queries.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/50 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] text-foreground mb-8">Ready to Transform Your Classroom?</h2>
            <Button size="lg" className="text-base sm:text-lg">
              Start Free Trial
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForEducation;