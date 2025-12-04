import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { useLanguageFont } from '@/hooks/useLanguageFont';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const FeatureNavigation = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { fontClass } = useLanguageFont();
  // Use direct resource access to ensure correct language is used
  // Use useMemo to ensure it updates when language changes
  const tFixed = useMemo(() => {
    return (key: string) => {
      const currentLang = i18n.language;
      const resource = i18n.store.data[currentLang];
      if (resource?.translation) {
        const keys = key.split('.');
        let value: any = resource.translation;
        for (const k of keys) {
          value = value?.[k];
          if (value === undefined) return key;
        }
        if (typeof value === 'string') return value;
      }
      return key;
    };
  }, [i18n.language]);
  
  return (
    <header className={`sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur ${fontClass}`}>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="PinChat Home">
          <img 
            src="/lovable-uploads/25304deb-b462-4c04-a4a7-b39375759f10.png" 
            alt="PinChat Logo" 
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent p-0 h-auto font-normal">
                  {tFixed('nav.features')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-4 bg-popover border rounded-md shadow-lg">
                    <div className="grid gap-2">
                      <NavigationMenuLink asChild>
                        <Link to="/features/chat" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.chat')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/chat-widget" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.chatWidget')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/pinboard" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.pinboard')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/ai-pinbot" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.aiPinbot')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/faq-pinbot" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.faqPinbot')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/branding" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.branding')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/analytics" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.analytics')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/chatroom-management" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.chatroomManagement')}</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/features/sub-account" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                          <div className="font-medium text-sm">{tFixed('features.subAccount')}</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent p-0 h-auto font-normal">
                  {tFixed('nav.solutions')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4 bg-popover border rounded-md shadow-lg">
                    <div className="grid grid-cols-2 gap-6">
                      {/* By Business Type */}
                      <div>
                        <h3 className="text-xs font-medium text-muted-foreground mb-2 block">{tFixed('nav.businessType')}</h3>
                        <div className="grid gap-2">
                          <NavigationMenuLink asChild>
                            <Link to="/industries/retail-ecommerce" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.retail')} & {tFixed('industries.ecommerce')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/service-industries" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.serviceIndustries')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/education" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.education')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/b2b-commercial" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.b2bCommercial')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/professional-services" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.professionalServices')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/real-estate" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.realEstate')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/healthcare" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.healthcare')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/industries/events" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('industries.events')}</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                      
                      {/* By Use Case */}
                      <div>
                        <h3 className="text-xs font-medium text-muted-foreground mb-2 block">{tFixed('nav.useCase')}</h3>
                        <div className="grid gap-2">
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/ai-customer-service-bot" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('solutions.aiCustomerService')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/multichannel-messaging-hub" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('solutions.multichannelMessaging')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/lead-capture-surveys" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('solutions.leadCaptureSurveys')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/customer-feedback-analytics" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('solutions.customerFeedbackAnalytics')}</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/chatroom-team-management" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                              <div className="font-medium text-sm">{tFixed('solutions.chatroomTeamManagement')}</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">{tFixed('nav.pricing')}</Link>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="flex flex-col gap-4 mt-8">
                <Collapsible open={isFeaturesOpen} onOpenChange={setIsFeaturesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 hover:bg-accent hover:text-accent-foreground transition-colors rounded-md">
                    <span className="font-medium">{tFixed('nav.features')}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 mt-2 ml-4">
                    <Link to="/features/chat" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.chat')}
                    </Link>
                    <Link to="/features/chat-widget" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.chatWidget')}
                    </Link>
                    <Link to="/features/pinboard" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.pinboard')}
                    </Link>
                    <Link to="/features/ai-pinbot" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.aiPinbot')}
                    </Link>
                    <Link to="/features/faq-pinbot" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.faqPinbot')}
                    </Link>
                    <Link to="/features/branding" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.branding')}
                    </Link>
                    <Link to="/features/analytics" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.analytics')}
                    </Link>
                    <Link to="/features/chatroom-management" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.chatroomManagement')}
                    </Link>
                    <Link to="/features/sub-account" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      {tFixed('features.subAccount')}
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible open={isSolutionsOpen} onOpenChange={setIsSolutionsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 hover:bg-accent hover:text-accent-foreground transition-colors rounded-md">
                    <span className="font-medium">{tFixed('nav.solutions')}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 mt-2 ml-4">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-muted-foreground mb-2 block">{tFixed('nav.businessType')}</span>
                      <Link to="/industries/retail-ecommerce" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.retail')} & {tFixed('industries.ecommerce')}
                      </Link>
                      <Link to="/industries/service-industries" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.serviceIndustries')}
                      </Link>
                      <Link to="/industries/education" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.education')}
                      </Link>
                      <Link to="/industries/b2b-commercial" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.b2bCommercial')}
                      </Link>
                      <Link to="/industries/professional-services" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.professionalServices')}
                      </Link>
                      <Link to="/industries/real-estate" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.realEstate')}
                      </Link>
                      <Link to="/industries/healthcare" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.healthcare')}
                      </Link>
                      <Link to="/industries/events" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('industries.events')}
                      </Link>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground mb-2 block">{tFixed('nav.useCase')}</span>
                      <Link to="/solutions/ai-customer-service-bot" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('solutions.aiCustomerService')}
                      </Link>
                      <Link to="/solutions/multichannel-messaging-hub" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('solutions.multichannelMessaging')}
                      </Link>
                      <Link to="/solutions/lead-capture-surveys" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('solutions.leadCaptureSurveys')}
                      </Link>
                      <Link to="/solutions/customer-feedback-analytics" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('solutions.customerFeedbackAnalytics')}
                      </Link>
                      <Link to="/solutions/chatroom-team-management" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tFixed('solutions.chatroomTeamManagement')}
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                <Link to="/pricing" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors font-medium">
                  {tFixed('nav.pricing')}
                </Link>
                <div className="flex flex-col gap-3 mt-6">
                  <Button asChild variant="ghost">
                    <Link to="/login" aria-label={tFixed('nav.login')}>{tFixed('nav.login')}</Link>
                  </Button>
                  <Button>{tFixed('nav.startFree')}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login" aria-label={tFixed('nav.login')}>{tFixed('nav.login')}</Link>
          </Button>
          <Button size="sm">{tFixed('nav.startFree')}</Button>
        </div>
      </div>
    </header>
  );
};

export default FeatureNavigation;