import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Shield, Globe, Zap, Users, CheckCircle2 } from "lucide-react";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useLanguageFont } from '@/hooks/useLanguageFont';
import { useTranslationDirect } from '@/hooks/useTranslationDirect';

const About = () => {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();

  return (
    <div className={`min-h-screen bg-background text-foreground ${fontClass}`}>
      <FeatureNavigation />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:gap-12 md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('about.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('about.hero.subtitle')}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link to="/#pricing">{t('about.hero.startFreeToday')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">{t('about.hero.contactUs')}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/bf8b9ee8-745e-48f5-a01e-5656ac985798.png" 
              alt="3D illustration of smartphone with colorful chat bubbles floating around, representing PinChat messaging platform" 
              loading="lazy" 
              className="mx-auto max-w-4xl w-full h-auto"
            />
          </div>
        </section>

        {/* Mission Statement */}
        <section className="border-t bg-muted/20 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <Quote className="mx-auto h-12 w-12 text-primary/60 mb-6" />
              <blockquote className="text-2xl font-medium leading-relaxed md:text-3xl">
                {t('about.mission.quote')}
              </blockquote>
              <div className="mt-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{t('about.mission.label')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="container mx-auto py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-12">{t('about.numbers.title')}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t('about.numbers.yearFounded.value')}</div>
              <p className="text-muted-foreground font-medium">{t('about.numbers.yearFounded.label')}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t('about.numbers.yearFounded.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t('about.numbers.countriesServed.value')}</div>
              <p className="text-muted-foreground font-medium">{t('about.numbers.countriesServed.label')}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t('about.numbers.countriesServed.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t('about.numbers.monthlyConversations.value')}</div>
              <p className="text-muted-foreground font-medium">{t('about.numbers.monthlyConversations.label')}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t('about.numbers.monthlyConversations.description')}</p>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="border-t bg-muted/10 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-semibold tracking-tight">{t('about.journey.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('about.journey.subtitle')}</p>
            </div>

            {/* PinChat Origins */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8">{t('about.journey.origins.title')}</h3>
              <div className="mx-auto max-w-4xl">
                <div className="rounded-lg border bg-card p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('about.journey.origins.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* PinChat Milestones */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8">{t('about.journey.milestones.title')}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2019.title')}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {t('about.journey.milestones.2019.description')}
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2020.title')}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {t('about.journey.milestones.2020.description')}
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2022.title')}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {t('about.journey.milestones.2022.description')}
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#02B13F' }}></div>
                    <span className="font-semibold" style={{ color: '#02B13F' }}>{t('about.journey.milestones.2025.title')}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {t('about.journey.milestones.2025.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="container mx-auto py-16">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight">{t('about.values.title')}</h2>
            <p className="mt-2 text-muted-foreground">{t('about.values.subtitle')}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.values.simplicity.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('about.values.simplicity.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.values.innovation.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('about.values.innovation.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.values.trust.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('about.values.trust.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.values.globalReach.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('about.values.globalReach.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Team Highlight */}
        <section className="border-t bg-muted/20 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight mb-4">{t('about.team.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('about.team.subtitle')}
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-card border p-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{t('about.team.collaborative.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.team.collaborative.description')}
                  </p>
                </div>
                <div className="rounded-lg bg-card border p-6">
                  <Heart className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{t('about.team.customerFocused.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.team.customerFocused.description')}
                  </p>
                </div>
                <div className="rounded-lg bg-card border p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{t('about.team.resultsDriven.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.team.resultsDriven.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              {t('about.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/#pricing">{t('about.cta.startFree')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">{t('about.cta.contactUs')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;