import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { BarChart3, FileText, TrendingUp, Filter, MessageCircle, Users, Sparkles } from "lucide-react";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';
const Analytics = () => {
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
                  Collect Feedback and Discover Insights
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  Run surveys, gather responses, and track performance data to improve customer engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg">
                    View Analytics Dashboard
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            <div className="min-h-64 sm:min-h-96 flex items-center justify-center animate-fade-in">
              <img src="/lovable-uploads/b1acf01e-622e-46d0-be79-527db756bbf9.png" alt="Comprehensive analytics dashboard with detailed metrics and graphs" className="max-h-full max-w-full object-contain rounded-lg shadow-lg" />
            </div>
          </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools to collect feedback, track performance, and discover insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Conversational Surveys</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Multiple question types in chat-like survey format</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Visual Results</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Visualized results with export and cross-analysis capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Integrated Data</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Combine clicks, interactions, and survey data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#02B13F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-[#02B13F]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Time-filtered Analytics</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Visual analytics with customizable time filters</p>
              </div>
            </div>

            {/* Feature Examples */}
            <div className="space-y-32">
              {/* Scenario 1: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Customer Satisfaction Tracking</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Run customer satisfaction surveys with trend analysis to improve service quality.
                  </p>
                </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/b11af36d-c1ef-4c17-a61b-b399d92b755f.png" alt="Customer satisfaction star rating survey interface" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            
            {/* Scenario 2: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/db797c1d-b1f5-4add-a175-18f58f93b1b1.png" alt="Interactive survey interface with multiple question types" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Interactive Event Surveys</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">Create engaging surveys during events to gather feedback, boost participation, and better understand your audience.</p>
              </div>
            </div>
            
              {/* Scenario 3: Text left, Image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Performance Tracking</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Track clicks, interactions, and engagement performance across all touchpoints.
                  </p>
                </div>
              <div className="h-80 sm:h-96 flex items-center justify-center">
                <img src="/lovable-uploads/9cb91d42-3650-4d07-a90f-93eabef1199a.png" alt="Performance growth tracking and analytics insights" className="max-h-full max-w-full object-contain" />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                Related Features
              </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>PinBoard</CardTitle>
                <CardDescription>Track link clicks and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/pinboard">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Chat Widget</CardTitle>
                <CardDescription>Embed chat directly into your website</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/features/chat-widget">{t('common.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#02B13F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#02B13F]" />
                </div>
                <CardTitle>Chatroom Management</CardTitle>
                <CardDescription>Export customer data for analysis</CardDescription>
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
                <BarChart3 className="w-8 h-8 text-[#02B13F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
                Ready to Unlock Data Insights?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start collecting engagement data and optimize your performance.
              </p>
              <Button size="lg" className="bg-[#02B13F] hover:bg-[#029f38] text-white text-base sm:text-lg min-w-[200px]">
                Start Analytics
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Analytics;