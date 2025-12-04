import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import FeatureNavigation from "@/components/FeatureNavigation";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

const createFormSchema = (t: (key: string) => string) => z.object({
  requestType: z.string().min(1, t('contact.form.requestTypeRequired')),
  email: z.string()
    .min(1, t('contact.form.emailRequired'))
    .email(t('contact.form.validEmail'))
    .max(100, t('contact.form.maxChars').replace('{{max}}', '100')),
  company: z.string()
    .min(1, t('contact.form.companyRequired'))
    .max(30, t('contact.form.maxChars').replace('{{max}}', '30')),
  jobTitle: z.string()
    .min(1, t('contact.form.jobTitleRequired'))
    .max(30, t('contact.form.maxChars').replace('{{max}}', '30')),
  firstName: z.string()
    .min(1, t('contact.form.firstNameRequired'))
    .max(30, t('contact.form.maxChars').replace('{{max}}', '30')),
  lastName: z.string()
    .min(1, t('contact.form.lastNameRequired'))
    .max(30, t('contact.form.maxChars').replace('{{max}}', '30')),
  country: z.string().min(1, t('contact.form.countryRequired')),
  howDidYouFindUs: z.string().min(1, t('contact.form.howDidYouFindUsRequired')),
  message: z.string()
    .min(10, t('contact.form.minChars').replace('{{min}}', '10'))
    .max(250, t('contact.form.maxChars').replace('{{max}}', '250')),
});

const countries = [
  "Australia", "Austria", "Belgium", "Brazil", "Bulgaria", "Canada", 
  "China", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Finland",
  "France", "Germany", "Greece", "Hong Kong", "Hungary", "India",
  "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Luxembourg",
  "Malaysia", "Malta", "Mexico", "Netherlands", "New Zealand", "Norway",
  "Philippines", "Poland", "Portugal", "Romania", "Russia", "Saudi Arabia",
  "Singapore", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland",
  "Taiwan", "Thailand", "Turkey", "United Arab Emirates", "United Kingdom",
  "United States", "Vietnam"
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  
  const formSchema = createFormSchema(t);
  type FormData = z.infer<typeof formSchema>;
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType: "",
      email: "",
      company: "",
      jobTitle: "",
      firstName: "",
      lastName: "",
      country: "",
      howDidYouFindUs: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: t('contact.success.title'),
      description: t('contact.success.description'),
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background font-sans relative overflow-hidden flex flex-col">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-primary/15 to-transparent rounded-full blur-3xl z-0"></div>
        
        {/* Header */}
        <FeatureNavigation />

        {/* Success Message */}
        <main className="relative z-10 container mx-auto py-20 flex-grow">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-primary/30 mb-8 shadow-lg shadow-primary/20">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t('contact.success.title')}
            </h1>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-8 shadow-xl shadow-primary/5">
              <p className="text-lg text-muted-foreground mb-4">
                {t('contact.success.description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('contact.success.checkSpam')}
              </p>
            </div>
            <Button asChild className="bg-[#02B13F] hover:bg-[#02B13F]/90 text-white rounded-lg h-12 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                {t('contact.success.backToHome')}
              </Link>
            </Button>
          </div>
        </main>
        
        <div className="relative z-50">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-primary/15 to-transparent rounded-full blur-3xl z-0"></div>
        
        {/* Header */}
        <FeatureNavigation />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto py-20 flex-grow">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('contact.hero.badge')}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t('contact.hero.title')}
            </h1>
            <div className="mx-auto max-w-4xl">
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                {t('contact.hero.subtitle')}
              </p>
              
              {/* Contact Reasons Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{t('contact.hero.reasons.learnMore')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{t('contact.hero.reasons.scheduleMeeting')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{t('contact.hero.reasons.findSolution')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{t('contact.hero.reasons.productQuestions')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{t('contact.hero.reasons.partnerships')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{t('contact.hero.reasons.support')}</span>
                </div>
              </div>
              
              {/* Response Time Notice */}
              <div className="inline-flex items-start gap-3 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20 text-left max-w-2xl mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-foreground font-medium mb-1">{t('contact.hero.responseTime.title')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.hero.responseTime.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mx-auto max-w-3xl">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-primary/5">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-3">{t('contact.form.title')}</h2>
                <p className="text-muted-foreground">{t('contact.form.subtitle')}</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Request Type */}
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.requestType')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('contact.form.pleaseSelect')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border border-border shadow-lg z-[9999]">
                          <SelectItem value="learn-more">{t('contact.form.requestTypeOptions.learnMore')}</SelectItem>
                          <SelectItem value="schedule-meeting">{t('contact.form.requestTypeOptions.scheduleMeeting')}</SelectItem>
                          <SelectItem value="find-solution">{t('contact.form.requestTypeOptions.findSolution')}</SelectItem>
                          <SelectItem value="partnerships">{t('contact.form.requestTypeOptions.partnerships')}</SelectItem>
                          <SelectItem value="product-questions">{t('contact.form.requestTypeOptions.productQuestions')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Personal Information */}
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.firstName')} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.firstName')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.lastName')} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.lastName')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.email')} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('contact.form.email')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Information */}
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.company')} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.company')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.jobTitle')} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.jobTitle')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.country')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('contact.form.pleaseSelect')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-60 bg-background border border-border shadow-lg z-[9999]">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="howDidYouFindUs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.howDidYouFindUs')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('contact.form.pleaseSelect')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border border-border shadow-lg z-[9999]">
                          <SelectItem value="search-engine">{t('contact.form.howDidYouFindUsOptions.searchEngine')}</SelectItem>
                          <SelectItem value="social-media">{t('contact.form.howDidYouFindUsOptions.socialMedia')}</SelectItem>
                          <SelectItem value="online-ads">{t('contact.form.howDidYouFindUsOptions.onlineAds')}</SelectItem>
                          <SelectItem value="events">{t('contact.form.howDidYouFindUsOptions.events')}</SelectItem>
                          <SelectItem value="word-of-mouth">{t('contact.form.howDidYouFindUsOptions.wordOfMouth')}</SelectItem>
                          <SelectItem value="other">{t('contact.form.howDidYouFindUsOptions.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.message')} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('contact.form.messagePlaceholder')}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-[#02B13F] hover:bg-[#02B13F]/90 text-white rounded-lg h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;