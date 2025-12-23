import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// PinChat Feature Pages
import Chat from "./pages/features/Chat";
import ChatWidget from "./pages/features/ChatWidget";
import PinBoard from "./pages/features/PinBoard";
import AIPinBot from "./pages/features/AIPinBot";
import FAQPinBot from "./pages/features/FAQPinBot";
import Branding from "./pages/features/Branding";
import Analytics from "./pages/features/Analytics";
import ChatroomManagement from "./pages/features/ChatroomManagement";
import SubAccount from "./pages/features/SubAccount";

// Pricing Page
import Pricing from "./pages/Pricing";

// Solution Pages
import InAppCustomerService from "./pages/solutions/InAppCustomerService";
import MultichannelMessagingHub from "./pages/solutions/MultichannelMessagingHub";
import AICustomerServiceBot from "./pages/solutions/AICustomerServiceBot";
import LeadCaptureSurveys from "./pages/solutions/LeadCaptureSurveys";
import ChatroomTeamManagement from "./pages/solutions/ChatroomTeamManagement";

// Industry Pages
import ForRetailEcommerce from "./pages/industries/ForRetailEcommerce";
import ForServiceIndustries from "./pages/industries/ForServiceIndustries";
import ForB2BCommercial from "./pages/industries/ForB2BCommercial";
import ForEducation from "./pages/industries/ForEducation";
import ForRealEstate from "./pages/industries/ForRealEstate";
import ForEvents from "./pages/industries/ForEvents";
import ForHealthcare from "./pages/industries/ForHealthcare";
import ForProfessionalServices from "./pages/industries/ForProfessionalServices";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import Contact from "./pages/Contact";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/pinchat">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* PinChat Feature Routes */}
          <Route path="/features/chat" element={<Chat />} />
          <Route path="/features/chat-widget" element={<ChatWidget />} />
          <Route path="/features/pinboard" element={<PinBoard />} />
          <Route path="/features/ai-pinbot" element={<AIPinBot />} />
          <Route path="/features/faq-pinbot" element={<FAQPinBot />} />
          <Route path="/features/branding" element={<Branding />} />
          <Route path="/features/analytics" element={<Analytics />} />
          <Route path="/features/chatroom-management" element={<ChatroomManagement />} />
          <Route path="/features/sub-account" element={<SubAccount />} />
          
          {/* Solution Routes */}
          <Route path="/solutions/in-app-customer-service" element={<InAppCustomerService />} />
          <Route path="/solutions/multichannel-messaging-hub" element={<MultichannelMessagingHub />} />
          <Route path="/solutions/ai-customer-service-bot" element={<AICustomerServiceBot />} />
          <Route path="/solutions/lead-capture-surveys" element={<LeadCaptureSurveys />} />
          <Route path="/solutions/chatroom-team-management" element={<ChatroomTeamManagement />} />
          
          {/* Industry Routes */}
          <Route path="/industries/retail-ecommerce" element={<ForRetailEcommerce />} />
          <Route path="/industries/service-industries" element={<ForServiceIndustries />} />
          <Route path="/industries/b2b-commercial" element={<ForB2BCommercial />} />
          <Route path="/industries/education" element={<ForEducation />} />
          <Route path="/industries/real-estate" element={<ForRealEstate />} />
          <Route path="/industries/events" element={<ForEvents />} />
          <Route path="/industries/healthcare" element={<ForHealthcare />} />
          <Route path="/industries/professional-services" element={<ForProfessionalServices />} />
          
          {/* Legal Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
