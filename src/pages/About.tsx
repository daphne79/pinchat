import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Shield, Globe, Zap, Users, CheckCircle2 } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { getAssetPath } from '@/lib/assetPath';

const About = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();

  return (
    <div className={`min-h-screen bg-background text-foreground ${fontClass}`}>
      <FeatureNavigation />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col gap-6 py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl font-bold tracking-wide text-center leading-normal lg:leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] max-w-4xl mx-auto">
            {t('about.hero.title')}
          </h1>
          <p className="text-base text-muted-foreground text-center sm:text-lg max-w-4xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            <Button size="lg" className="text-base sm:text-lg" asChild>
              <Link to="/register">{t('about.hero.startFreeToday')}</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg" asChild>
              <Link to="/contact">{t('about.hero.contactUs')}</Link>
            </Button>
          </div>
          <div className="relative mt-6">
            <img 
              src={getAssetPath("/lovable-uploads/bf8b9ee8-745e-48f5-a01e-5656ac985798.png")} 
              alt="3D illustration of smartphone with colorful chat bubbles floating around, representing PinChat messaging platform" 
              loading="lazy" 
              className="block mx-auto max-w-full w-auto h-auto object-contain"
            />
          </div>
        </section>

        {/* Mission Statement */}
        <section className="border-t py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <Quote className="mx-auto h-12 w-12 text-primary/60 mb-6" />
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">
                {t('about.mission.quote')}
              </blockquote>
              <div className="mt-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{t('about.mission.label')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="border-t bg-muted/30 py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">{t('about.numbers.title')}</h2>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="rounded-lg border bg-card p-6 md:p-8 text-center shadow-sm">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{t('about.numbers.yearFounded.value')}</div>
                <p className="text-base sm:text-lg text-muted-foreground font-medium mb-2">{t('about.numbers.yearFounded.label')}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{t('about.numbers.yearFounded.description')}</p>
              </div>
              <div className="rounded-lg border bg-card p-6 md:p-8 text-center shadow-sm">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{t('about.numbers.countriesServed.value')}</div>
                <p className="text-base sm:text-lg text-muted-foreground font-medium mb-2">{t('about.numbers.countriesServed.label')}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{t('about.numbers.countriesServed.description')}</p>
              </div>
              <div className="rounded-lg border bg-card p-6 md:p-8 text-center shadow-sm">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{t('about.numbers.monthlyConversations.value')}</div>
                <p className="text-base sm:text-lg text-muted-foreground font-medium mb-2">{t('about.numbers.monthlyConversations.label')}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{t('about.numbers.monthlyConversations.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="border-t py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">{t('about.journey.title')}</h2>
              <p className="mt-2 text-base sm:text-lg text-muted-foreground">{t('about.journey.subtitle')}</p>
            </div>

            {/* PinChat Origins */}
            <div className="mb-16 md:mb-20">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-10">{t('about.journey.origins.title')}</h3>
              <div className="mx-auto max-w-4xl">
                <div className="rounded-lg border bg-card p-8 md:p-10 shadow-sm">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {t('about.journey.origins.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* PinChat Milestones */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-10">{t('about.journey.milestones.title')}</h3>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="text-base sm:text-lg font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2019.title')}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t('about.journey.milestones.2019.description')}
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="text-base sm:text-lg font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2020.title')}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t('about.journey.milestones.2020.description')}
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="text-base sm:text-lg font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2022.title')}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t('about.journey.milestones.2022.description')}
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="text-base sm:text-lg font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2025.title')}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t('about.journey.milestones.2025.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="border-t bg-muted/30 py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">{t('about.values.title')}</h2>
              <p className="mt-2 text-base sm:text-lg text-muted-foreground">{t('about.values.subtitle')}</p>
            </div>
            <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{t('about.values.simplicity.title')}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {t('about.values.simplicity.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{t('about.values.innovation.title')}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {t('about.values.innovation.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{t('about.values.trust.title')}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {t('about.values.trust.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{t('about.values.globalReach.title')}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {t('about.values.globalReach.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Highlight */}
        <section className="border-t py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-wide leading-normal lg:leading-[1.2]">{t('about.team.title')}</h2>
              <p className="mt-2 text-base sm:text-lg text-muted-foreground">
                {t('about.team.subtitle')}
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="rounded-lg bg-card border p-6 md:p-8 shadow-sm">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3">{t('about.team.collaborative.title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('about.team.collaborative.description')}
                </p>
              </div>
              <div className="rounded-lg bg-card border p-6 md:p-8 shadow-sm">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3">{t('about.team.customerFocused.title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('about.team.customerFocused.description')}
                </p>
              </div>
              <div className="rounded-lg bg-card border p-6 md:p-8 shadow-sm">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3">{t('about.team.resultsDriven.title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('about.team.resultsDriven.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t bg-primary/5 py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2]">
                {t('about.cta.title')}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                {t('about.cta.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="min-w-[200px] text-base sm:text-lg" asChild>
                  <Link to="/register">{t('about.cta.startFree')}</Link>
                </Button>
                <Button variant="outline" size="lg" className="min-w-[200px] text-base sm:text-lg" asChild>
                  <Link to="/contact">{t('about.cta.contactUs')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;