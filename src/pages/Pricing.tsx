import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FeatureNavigation from "@/components/FeatureNavigation";
import Footer from "@/components/Footer";
import { useTranslationDirect } from '@/hooks/useTranslationDirect';
import { useLanguageFont } from '@/hooks/useLanguageFont';

export default function Pricing() {
  const { t } = useTranslationDirect();
  const { fontClass } = useLanguageFont();
  
  const pricingPlans = [
    {
      name: t('pricing.plans.free.name'),
      price: "$0",
      period: "/month",
      description: t('pricing.plans.free.description'),
      features: [
        t('pricing.features.unlimitedChatLinks'),
        t('pricing.features.mau100'),
        t('pricing.features.exportChatData'),
        t('pricing.features.customizedChatLink'),
        t('pricing.features.customizedPinBoard'),
        t('pricing.features.basicAnalytics')
      ],
      cta: t('pricing.plans.cta.startNow'),
      popular: false
    },
    {
      name: t('pricing.plans.starter.name'),
      price: "$40",
      period: "/month",
      description: t('pricing.plans.starter.description'),
      features: [
        t('pricing.features.unlimitedChatLinks'),
        t('pricing.features.mau1000'),
        t('pricing.features.allFunctionsOfFree'),
        t('pricing.features.surveyAndFaqPinBot'),
        t('pricing.features.customizedChatWidget'),
        t('pricing.features.aiPinBot1000')
      ],
      cta: t('pricing.plans.cta.freeTrial'),
      popular: false
    },
    {
      name: t('pricing.plans.light.name'),
      price: "$60",
      period: "/month",
      description: t('pricing.plans.light.description'),
      features: [
        t('pricing.features.unlimitedChatLinks'),
        t('pricing.features.mau3000'),
        t('pricing.features.allFunctionsOfStarter'),
        t('pricing.features.aiPinBot2000')
      ],
      cta: t('pricing.plans.cta.freeTrial'),
      popular: true
    },
    {
      name: t('pricing.plans.standard.name'),
      price: "$90",
      period: "/month",
      description: t('pricing.plans.standard.description'),
      features: [
        t('pricing.features.unlimitedChatLinks'),
        t('pricing.features.mau5000'),
        t('pricing.features.allFunctionsOfLight'),
        t('pricing.features.customDomain'),
        t('pricing.features.customMetaTags'),
        t('pricing.features.aiPinBot4000Byok')
      ],
      cta: t('pricing.plans.cta.freeTrial'),
      popular: false
    }
  ];

  const GreenCheckIcon = () => (
    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#02B13F' }}>
      <Check className="w-3 h-3 text-white" strokeWidth={3} />
    </div>
  );

  const features = {
    usage: [
      { name: t('pricing.features.usage.chatLinks'), plans: ["all"], value: [t('pricing.features.usage.unlimited'), t('pricing.features.usage.unlimited'), t('pricing.features.usage.unlimited'), t('pricing.features.usage.unlimited')] },
      { name: t('pricing.features.usage.mau'), plans: ["all"], value: ["100", "1,000", "3,000", "5,000"] },
      { name: t('pricing.features.usage.mauOverage'), plans: ["all"], value: [t('pricing.features.usage.contactSales'), t('pricing.features.usage.contactSales'), t('pricing.features.usage.contactSales'), t('pricing.features.usage.contactSales')] },
      { name: t('pricing.features.usage.aiPinBot'), plans: ["starter", "light", "standard"], value: ["–", "1,000 msgs/mo", "2,000 msgs/mo", "4,000 msgs/mo + BYOK"] }
    ],
    messaging: [
      { name: t('pricing.features.messaging.oneOnOneChat'), plans: ["all"] },
      { name: t('pricing.features.messaging.groupChat'), plans: ["all"] },
      { name: t('pricing.features.messaging.voiceMessages'), plans: ["all"] },
      { name: t('pricing.features.messaging.stickersEmojis'), plans: ["all"] },
      { name: t('pricing.features.messaging.fileMediaSharing'), plans: ["all"] },
      { name: t('pricing.features.messaging.locationSharing'), plans: ["all"] },
      { name: t('pricing.features.messaging.linkPreviews'), plans: ["all"] },
      { name: t('pricing.features.messaging.translation'), plans: ["all"] },
      { name: t('pricing.features.messaging.readReceipts'), plans: ["all"] },
      { name: t('pricing.features.messaging.unreadMessageIndicator'), plans: ["all"] },
      { name: t('pricing.features.messaging.replyToMessages'), plans: ["all"] },
      { name: t('pricing.features.messaging.messageRecall'), plans: ["all"] },
      { name: t('pricing.features.messaging.mentions'), plans: ["all"] },
      { name: t('pricing.features.messaging.copyMessages'), plans: ["all"] },
      { name: t('pricing.features.messaging.visitorLocationTracking'), plans: ["all"] },
      { name: t('pricing.features.messaging.chatFolders'), plans: ["all"] },
      { name: t('pricing.features.messaging.chatTags'), plans: ["all"] }
    ],
    customization: [
      { name: t('pricing.features.customization.pinBoard'), plans: ["all"] },
      { name: t('pricing.features.customization.customChatroomLinks'), plans: ["all"] },
      { name: t('pricing.features.customization.customAppearance'), plans: ["all"] },
      { name: t('pricing.features.customization.websiteWidget'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.customization.surveyForms'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.customization.faqPinBot'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.customization.subAccountManagement'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.customization.visitorEmailNotifications'), plans: ["all"] },
      { name: t('pricing.features.customization.customerList'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.customization.customerListExport'), plans: ["starter", "light", "standard"] }
    ],
    omnichat: [
      { name: t('pricing.features.omnichat.lineIntegration'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.omnichat.whatsappBusiness'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.omnichat.messengerIntegration'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.omnichat.instagramIntegration'), plans: ["starter", "light", "standard"] },
      { name: t('pricing.features.omnichat.slackIntegration'), plans: ["starter", "light", "standard"] }
    ],
    support: [
      { name: t('pricing.features.support.webDashboard'), plans: ["all"] },
      { name: t('pricing.features.support.iosAndroidApp'), plans: ["all"] },
      { name: t('pricing.features.support.dataExport'), plans: ["all"] }
    ],
    advanced: [
      { name: t('pricing.features.advanced.customDomain'), plans: ["standard"] },
      { name: t('pricing.features.advanced.customMetaTags'), plans: ["standard"] },
      { name: t('pricing.features.advanced.removeBranding'), plans: ["standard"] }
    ]
  };

  const isFeatureIncluded = (featurePlans: string[], planName: string) => {
    return featurePlans.includes("all") || featurePlans.includes(planName.toLowerCase());
  };

  const renderFeatureSection = (sectionTitle: string, sectionFeatures: any[], rowOffset: number = 0, isFirstSection: boolean = false) => {
    return (
      <>
        {!isFirstSection && (
          <tr>
            <td colSpan={5} className="border-t border-border p-0"></td>
          </tr>
        )}
        <tr className="bg-muted/30">
          <td colSpan={5} className="py-6 px-4 font-bold text-sm uppercase tracking-wide border-b border-border" style={{ color: '#1A1A1A' }}>
            {sectionTitle}
          </td>
        </tr>
        {sectionFeatures.map((feature, index) => (
          <tr key={feature.name} className="border-b border-border transition-colors bg-white">
            <td className="sticky left-0 z-10 p-4 border-r border-border font-normal bg-white" style={{ color: '#1A1A1A' }}>
              {feature.name}
            </td>
            {feature.value ? (
              feature.value.map((value: string, planIndex: number) => (
                <td key={planIndex} className="p-4 text-center font-normal" style={{ color: '#1A1A1A' }}>
                  {value === t('pricing.features.usage.contactSales') ? (
                    <Link 
                      to="/contact" 
                      className="text-primary hover:text-primary/80 underline font-medium"
                    >
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </td>
              ))
            ) : (
              pricingPlans.map((plan) => (
                <td key={plan.name} className="p-4 text-center">
                  {isFeatureIncluded(feature.plans, plan.name) ? (
                    <div className="flex justify-center">
                      <GreenCheckIcon />
                    </div>
                  ) : (
                    <span style={{ color: '#1A1A1A' }}>–</span>
                  )}
                </td>
              ))
            )}
          </tr>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <FeatureNavigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{t('pricing.hero.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('pricing.hero.subtitle')}
          </p>
          <Button size="lg" className="mb-8">
            {t('pricing.hero.getStarted')}
          </Button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    {t('pricing.popular')}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">{t('pricing.features.customPlan.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('pricing.features.customPlan.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">{t('pricing.features.customPlan.contactUs')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('pricing.features.comparison.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('pricing.features.comparison.subtitle')}
              </p>
            </div>

            {/* Sticky Plan Headers - Desktop */}
            <div className="hidden md:block sticky top-16 z-20 bg-background/95 backdrop-blur-sm border-y border-border py-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="font-medium text-lg hidden md:block">{t('pricing.features.comparison.plans')}</div>
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`text-center p-6 rounded-xl border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
                    {plan.popular && (
                      <Badge className="mb-3 bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        {t('pricing.popular')}
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-4">
                      {plan.price}<span className="text-base font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Plan Headers - Horizontal Scroll */}
            <div className="md:hidden mb-8 overflow-x-auto">
              <div className="inline-flex gap-4 min-w-full pb-4">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`flex-shrink-0 w-[200px] text-center p-4 rounded-xl border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
                    {plan.popular && (
                      <Badge className="mb-2 bg-primary text-primary-foreground text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <div className="text-2xl font-bold mb-3">
                      {plan.price}<span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                    <Button size="sm" className="w-full text-xs" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Categories */}
            <div className="space-y-12">
              {/* Usage Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">{t('pricing.features.sections.usageLimits')}</h3>
                {/* Desktop Grid */}
                <div className="hidden md:grid gap-4">
                  {features.usage.map((feature, index) => (
                    <div key={index} className="bg-card rounded-lg border p-6">
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="font-medium">{feature.name}</div>
                        {feature.value ? 
                          feature.value.map((value: string, planIndex: number) => (
                            <div key={planIndex} className="text-center">
                              {value === t('pricing.features.usage.contactSales') ? (
                                <Link 
                                  to="/contact" 
                                  className="text-primary hover:text-primary/80 underline font-medium"
                                >
                                  {value}
                                </Link>
                              ) : (
                                <span className="font-semibold">{value}</span>
                              )}
                            </div>
                          )) :
                          pricingPlans.map((plan) => (
                            <div key={plan.name} className="text-center">
                              {isFeatureIncluded(feature.plans, plan.name) ? (
                                <div className="flex justify-center">
                                  <GreenCheckIcon />
                                </div>
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto">
                  <div className="inline-block min-w-full">
                    {features.usage.map((feature, index) => (
                      <div key={index} className="bg-card rounded-lg border p-4 mb-4">
                        <div className="font-medium mb-3">{feature.name}</div>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {feature.value ? 
                            feature.value.map((value: string, planIndex: number) => (
                              <div key={planIndex} className="flex-shrink-0 w-[120px] text-center p-3 bg-muted/30 rounded-lg">
                                <div className="text-xs text-muted-foreground mb-1">{pricingPlans[planIndex].name}</div>
                                {value === "Contact sales" ? (
                                  <Link 
                                    to="/contact" 
                                    className="text-primary hover:text-primary/80 underline font-medium text-sm"
                                  >
                                    {value}
                                  </Link>
                                ) : (
                                  <span className="font-semibold text-sm">{value}</span>
                                )}
                              </div>
                            )) :
                            pricingPlans.map((plan) => (
                              <div key={plan.name} className="flex-shrink-0 w-[120px] text-center p-3 bg-muted/30 rounded-lg">
                                <div className="text-xs text-muted-foreground mb-1">{plan.name}</div>
                                {isFeatureIncluded(feature.plans, plan.name) ? (
                                  <div className="flex justify-center">
                                    <GreenCheckIcon />
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground">–</span>
                                )}
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Messaging Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">{t('pricing.features.sections.messagingFeatures')}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.messaging.map((feature, index) => (
                    <div key={index} className="bg-card rounded-lg border p-4 flex items-center gap-3">
                      <GreenCheckIcon />
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">{t('pricing.features.sections.customizationTools')}</h3>
                {/* Desktop Grid */}
                <div className="hidden md:grid gap-4">
                  {features.customization.map((feature, index) => (
                    <div key={index} className="bg-card rounded-lg border p-6">
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="font-medium">{feature.name}</div>
                        {pricingPlans.map((plan) => (
                          <div key={plan.name} className="text-center">
                            {isFeatureIncluded(feature.plans, plan.name) ? (
                              <div className="flex justify-center">
                                <GreenCheckIcon />
                              </div>
                            ) : (
                              <span className="text-muted-foreground">–</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto">
                  <div className="inline-block min-w-full">
                    {features.customization.map((feature, index) => (
                      <div key={index} className="bg-card rounded-lg border p-4 mb-4">
                        <div className="font-medium mb-3">{feature.name}</div>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {pricingPlans.map((plan) => (
                            <div key={plan.name} className="flex-shrink-0 w-[120px] text-center p-3 bg-muted/30 rounded-lg">
                              <div className="text-xs text-muted-foreground mb-1">{plan.name}</div>
                              {isFeatureIncluded(feature.plans, plan.name) ? (
                                <div className="flex justify-center">
                                  <GreenCheckIcon />
                                </div>
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Omnichat Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">{t('pricing.features.sections.multichannelIntegration')}</h3>
                {/* Desktop Grid */}
                <div className="hidden md:grid gap-4">
                  {features.omnichat.map((feature, index) => (
                    <div key={index} className="bg-card rounded-lg border p-6">
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="font-medium">{feature.name}</div>
                        {pricingPlans.map((plan) => (
                          <div key={plan.name} className="text-center">
                            {isFeatureIncluded(feature.plans, plan.name) ? (
                              <div className="flex justify-center">
                                <GreenCheckIcon />
                              </div>
                            ) : (
                              <span className="text-muted-foreground">–</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto">
                  <div className="inline-block min-w-full">
                    {features.omnichat.map((feature, index) => (
                      <div key={index} className="bg-card rounded-lg border p-4 mb-4">
                        <div className="font-medium mb-3">{feature.name}</div>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {pricingPlans.map((plan) => (
                            <div key={plan.name} className="flex-shrink-0 w-[120px] text-center p-3 bg-muted/30 rounded-lg">
                              <div className="text-xs text-muted-foreground mb-1">{plan.name}</div>
                              {isFeatureIncluded(feature.plans, plan.name) ? (
                                <div className="flex justify-center">
                                  <GreenCheckIcon />
                                </div>
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">{t('pricing.features.sections.advancedFeatures')}</h3>
                {/* Desktop Grid */}
                <div className="hidden md:grid gap-4">
                  {features.advanced.map((feature, index) => (
                    <div key={index} className="bg-card rounded-lg border p-6">
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="font-medium">{feature.name}</div>
                        {pricingPlans.map((plan) => (
                          <div key={plan.name} className="text-center">
                            {isFeatureIncluded(feature.plans, plan.name) ? (
                              <div className="flex justify-center">
                                <GreenCheckIcon />
                              </div>
                            ) : (
                              <span className="text-muted-foreground">–</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto">
                  <div className="inline-block min-w-full">
                    {features.advanced.map((feature, index) => (
                      <div key={index} className="bg-card rounded-lg border p-4 mb-4">
                        <div className="font-medium mb-3">{feature.name}</div>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {pricingPlans.map((plan) => (
                            <div key={plan.name} className="flex-shrink-0 w-[120px] text-center p-3 bg-muted/30 rounded-lg">
                              <div className="text-xs text-muted-foreground mb-1">{plan.name}</div>
                              {isFeatureIncluded(feature.plans, plan.name) ? (
                                <div className="flex justify-center">
                                  <GreenCheckIcon />
                                </div>
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
              <p>{t('pricing.features.notes.byok')}</p>
              <p>{t('pricing.features.notes.msgsMo')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('pricing.features.faq.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('pricing.features.faq.subtitle')}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q1')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a1').split('\n\n').map((paragraph, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q2')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a2')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q3')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a3')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q4')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a4')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q5')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a5')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q6')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a6')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q7')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a7')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q8')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a8')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {t('pricing.features.faq.q9')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {t('pricing.features.faq.a9')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">{t('pricing.features.faq.stillHaveQuestions')}</p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">{t('pricing.features.faq.contactSupport')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border p-12 shadow-lg">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t('pricing.features.cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('pricing.features.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  {t('pricing.features.cta.getStartedFree')}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                  <Link to="/contact">{t('pricing.features.cta.talkToSales')}</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {t('pricing.features.cta.freeTrial')}
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {t('pricing.features.cta.noSetupFees')}
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {t('pricing.features.cta.cancelAnytime')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}