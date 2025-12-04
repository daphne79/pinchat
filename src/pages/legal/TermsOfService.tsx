import { useTranslation } from 'react-i18next';
import { useLanguageFont } from '@/hooks/useLanguageFont';
import FeatureNavigation from '@/components/FeatureNavigation';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';

// Terms of Service Page  
const TermsOfService = () => {
  const { t } = useTranslation();
  const { fontClass } = useLanguageFont();

  const tableOfContents = [
    { id: 'definitions', title: 'I. Definitions' },
    { id: 'registration', title: 'II. Account Registration and Use' },
    { id: 'guidelines', title: 'III. Usage Guidelines' },
    { id: 'liability', title: 'IV. Limitation of Liability' },
    { id: 'refund', title: 'V. Refund Policy' },
    { id: 'ownership', title: 'VI. Content Ownership' },
    { id: 'modification', title: 'VII. Terms Modification' },
    { id: 'termination', title: 'VIII. Termination' },
    { id: 'other', title: 'IX. Other Terms' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-background ${fontClass}`}>
      <FeatureNavigation />
      
      <div className="container mx-auto py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
                <ScrollArea className="h-[400px]">
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted/50"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="prose prose-lg max-w-none">
              <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Effective Date: May 26, 2025</strong></p>
                  <p><strong>Last Updated: August 26, 2025</strong></p>
                </div>
              </header>

              <div className="space-y-8 text-foreground">
                <div className="mb-8 p-6 bg-muted/50 rounded-lg">
                  <p className="text-lg leading-relaxed">
                    These Terms of Service ("Terms") are established by FUNTEK Co., Ltd. ("FUNTEK") and apply to the PinChat website (https://pinchat.app/) owned by FUNTEK and related iOS and Android applications (collectively referred to as "PinChat"). These Terms constitute a legally binding agreement between users of PinChat services ("User" or "You") and FUNTEK.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    Before using PinChat, please carefully read and understand all contents of these Terms. If you do not agree to any part of these Terms, please do not use PinChat services. For personal data protection policies, please refer to PinChat <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
                </div>

                <section id="definitions" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">I. Definitions</h2>
                  <p className="mb-4">The following terms used in these Terms are defined as follows:</p>
                  <div className="space-y-4">
                    <div>
                      <strong>1. "Content":</strong> Refers to text (including conversation records), voice, music, images, videos, stickers, software, programs, code, links, contact information, location information, and any information that can be sent and received through PinChat.
                    </div>
                    <div>
                      <strong>2. "Submissions":</strong> Refers to content actively uploaded by users to PinChat that is not part of user communication conversations.
                    </div>
                    <div>
                      <strong>3. "Account":</strong> Refers to the unique identity obtained by users when registering on PinChat for using PinChat services.
                    </div>
                    <div>
                      <strong>4. "Service":</strong> Refers to all functions, features, and related services provided by FUNTEK through the PinChat website and applications.
                    </div>
                  </div>
                </section>

                <section id="registration" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">II. Account Registration and Use</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
                      <p>Upon completion of registration, you indicate agreement to these Terms and must use PinChat in accordance with these Terms.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Authorization Requirements</h3>
                      <p>If users require consent or authorization from specific persons (such as legal representatives or guardians) under relevant laws to use this service, you must obtain such consent or authorization yourself, which is unrelated to FUNTEK. Upon completion of registration, it is deemed that the aforementioned specific persons have consented to or authorized acceptance of these Terms.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Compliance with Regulations</h3>
                      <p>Users should comply with other relevant regulations of PinChat for members. To ensure user rights, users are advised to regularly confirm the latest announcements of these Terms and usage instructions.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Data Accuracy</h3>
                      <p>If users provide any incorrect, false, or incomplete personal information (including but not limited to mobile phone numbers, credit card related information), PinChat has the right to suspend or terminate your account and refuse your use of all or part of PinChat services.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">5. Account Responsibility</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Users must be responsible for any activities that occur through their user account</li>
                        <li>Users agree not to sell, transfer, license, or assign their account, followers, username, or any account rights</li>
                        <li>PinChat prohibits creating accounts for anyone other than yourself unless explicitly authorized (may create accounts on behalf of employees or customers)</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">6. Inapplicable Regions</h3>
                      <p>If users cannot comply with or disagree with the content of these Terms, or if the country or region to which the user belongs excludes part or all of the content of these Terms, please immediately stop using the PinChat website and applications.</p>
                    </div>
                  </div>
                </section>

                <section id="guidelines" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">III. Usage Guidelines</h2>
                  <p className="mb-6">When using PinChat, users agree to comply with the following guidelines:</p>
                  <div className="space-y-4">
                    <div><strong>1. API Usage Restrictions:</strong> Users must not access PinChat's API in ways not permitted by PinChat.</div>
                    <div><strong>2. Prohibited Content:</strong> Users must not post photos or other content containing violence, nudity, semi-nudity, discrimination, illegality, infringement, hatred, pornography, or sexual suggestion through PinChat.</div>
                    <div>
                      <strong>3. Behavioral Restrictions:</strong> Users must not engage in the following behaviors:
                      <ol className="list-decimal ml-6 mt-2 space-y-1">
                        <li>Defaming, stalking, coercing, insulting, harassing, threatening, impersonating, or intimidating other people or organizations</li>
                        <li>Posting private or confidential information through PinChat, including but not limited to credit card information, ID numbers, non-public phone numbers, or non-public email addresses of users or others</li>
                      </ol>
                    </div>
                    <div><strong>4. Lawful Use:</strong> Users must not use PinChat for any illegal or unauthorized activities.</div>
                    <div><strong>5. Modification Prohibition:</strong> Users must not alter, modify, adapt, or change PinChat, or change, modify, or alter other websites and services in a way that causes confusion about the relationship between such websites and PinChat.</div>
                    <div><strong>6. Network Security:</strong> Users must not interfere with or affect servers and networks connected to PinChat, including but not limited to transmitting any computer worms, viruses, spyware, malware, or other destructive or disruptive program code.</div>
                    <div><strong>7. Presentation Protection:</strong> Users must not insert content or program code, or alter or interfere with the presentation or display of any PinChat pages on users' browsers or devices.</div>
                    <div><strong>8. Prohibition of Automated Use:</strong> Users must not create PinChat accounts through unauthorized means, including but not limited to using automated devices, scripts, automated programs, spider programs, crawler programs, or extraction programs.</div>
                    <div><strong>9. Prohibition of Interference:</strong> Users must not attempt to prevent other users from using PinChat, nor encourage or provide ways to violate these Terms of Use or other PinChat terms.</div>
                    <div><strong>10. URL Ownership:</strong> For all instant messaging URLs created through PinChat, if the URL name is a trademark or name already registered by other companies or individuals, after complaints from the rights holders to PinChat, PinChat has the right to return the URL to the rights holders and delete related conversation messages and personal information associated with that URL.</div>
                  </div>
                </section>

                <section id="liability" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">IV. Limitation of Liability</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Limited Liability</h3>
                      <p>Users understand and agree that except for situations where PinChat can be clearly proven to have intentional or gross negligence in service performance, PinChat shall not be liable for any damages caused by users' use or inability to use PinChat services. Under no circumstances shall PinChat's liability to users exceed the system service fees collected in the current year.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. System Exception Handling</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>If there are any system exceptions, please contact <a href="mailto:service@funtek.co" className="text-primary hover:underline">service@funtek.co</a></li>
                        <li>Service hours are weekdays 10:00-12:30/13:30-18:00 (excluding national holidays, with national holidays determined by the Personnel Administration Bureau).</li>
                        <li>When PinChat service interruption or abnormal conditions occur, PinChat is responsible to users according to the following levels and compensation methods:
                          <ol className="list-lower-alpha ml-6 mt-2 space-y-1">
                            <li>System suspension within 30 minutes: PinChat provides no additional compensation.</li>
                            <li>System suspension exceeding 30 minutes: Calculated by hour, and if service continues to be suspended, it will be rounded up to the hour unconditionally (e.g., if downtime is one and a half hours, it will be calculated as two hours), with refunds proportional to downtime according to subscription plans.</li>
                          </ol>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Service Interruption Exemption Reasons</h3>
                      <p className="mb-3">When the following situations occur, PinChat services will be interrupted or suspended, and users may not request refunds or claim damages from PinChat, but PinChat should provide appropriate notice to users to a reasonable and feasible extent:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Due to accidents, failures, abnormalities, or interruptions in software and hardware aspects of telecommunications or cloud service providers (including but not limited to Amazon Web Services).</li>
                        <li>When there are concrete facts suggesting potential harm to consumer rights, including but not limited to suspected attacks or criminal activities by unknown third parties, and PinChat deems it appropriate to suspend PinChat services.</li>
                        <li>When users use improperly, or when data or account password loss or leakage occurs, to prevent damage expansion.</li>
                        <li>Pre-notified system room migration, maintenance, upgrades, disaster recovery drills, etc.</li>
                        <li>Other reasons not attributable to PinChat or force majeure events such as natural disasters.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Function and Content Responsibility</h3>
                      <p>PinChat does not guarantee and assumes no responsibility for any damages caused by any functions, content, or submissions. Users should use PinChat in normal and reasonable ways and bear the aforementioned risks and damages themselves.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">5. Infringement Responsibility</h3>
                      <p>Users should bear the risks themselves if their content or submissions on PinChat involve infringement. PinChat has no obligation to judge whether submissions or content constitute infringement.</p>
                    </div>
                  </div>
                </section>

                <section id="refund" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">V. Refund Policy</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Free Trial Plans</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>If you are using PinChat's free plan or trial version, no payment is required, so refunds are not applicable.</li>
                        <li>We recommend fully utilizing the free trial features before upgrading to paid plans to ensure the product meets your needs.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Monthly Plans</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Monthly plans take effect from the payment date, and once payment is made, partial refunds are not available.</li>
                        <li>Users may contact us to cancel subscriptions at any time after purchasing monthly plans, but services will continue until the end of that billing cycle, and fees already paid will not be refunded.</li>
                        <li>If duplicate charges occur due to system errors or special circumstances, please contact us, and we will process refunds within 5 business days.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Special Events/Discount Plans</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Unless explicitly stated otherwise in the event, plans purchased through special promotions, limited-time discounts, or partner channels are non-refundable once payment is made.</li>
                        <li>If inability to enjoy event/discount plan services is caused by PinChat system errors or failures, and verified by PinChat, corresponding compensation or refunds will be provided.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Refund Process</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Please send refund requests to: <a href="mailto:service@funtek.co" className="text-primary hover:underline">service@funtek.co</a>, and include the following information in the email:
                          <ol className="list-lower-alpha ml-6 mt-2 space-y-1">
                            <li>Purchase account (email address)</li>
                            <li>Purchase plan type and time</li>
                            <li>Refund reason</li>
                          </ol>
                        </li>
                        <li>After review and qualification confirmation, we will complete refund processing within 5-10 business days (may vary depending on payment platform).</li>
                        <li>PinChat reserves the final right to refund decisions and may block or terminate services for accounts that maliciously use or abuse refund mechanisms.</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <section id="ownership" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">VI. Content Ownership</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. User Content</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Users retain ownership of content they create, upload, or share on PinChat.</li>
                        <li>Users grant FUNTEK a non-exclusive, worldwide, royalty-free license to use, copy, modify, distribute, publish, and process content uploaded by users to PinChat, limited to the following purposes:
                          <ol className="list-lower-alpha ml-6 mt-2 space-y-1">
                            <li>Providing, maintaining, and improving PinChat services</li>
                            <li>Developing new features and optimizing user experience</li>
                            <li>Handling user support requests and issues</li>
                            <li>Ensuring service security and compliance</li>
                            <li>Necessary purposes as described in these Terms and Privacy Policy</li>
                          </ol>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. FUNTEK Content</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>All rights, ownership, and interests in PinChat services, including all related intellectual property rights, belong to FUNTEK.</li>
                        <li>These Terms do not grant users any rights to use FUNTEK trademarks, logos, domain names, or other brand features.</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <section id="modification" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">VII. Terms Modification</h2>
                  <p className="text-lg leading-relaxed">
                    FUNTEK reserves the right to modify these Terms of Use and refund policy at any time, with announcements on the official website as the standard. Significant changes will be notified to users through the PinChat website or applications. Users' continued use of PinChat services indicates acceptance of the modified terms.
                  </p>
                </section>

                <section id="termination" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">VIII. Termination</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. User Termination</h3>
                      <p>Users may stop using PinChat services and terminate this agreement at any time. To delete accounts, please use the settings options in the application or contact customer support.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. FUNTEK Termination</h3>
                      <p>If users violate any provisions of these Terms, FUNTEK may suspend or terminate your account or access to all or part of PinChat services without prior notice.</p>
                    </div>
                  </div>
                </section>

                <section id="other" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">IX. Other Terms</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Complete Agreement</h3>
                      <p>These Terms constitute the complete agreement between users and FUNTEK regarding PinChat services and supersede any previous agreements.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Applicable Law</h3>
                      <p>These Terms are governed by the laws of the Republic of China, without applying conflict of laws principles.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Terms Independence</h3>
                      <p>If any provision of these Terms is deemed invalid or unenforceable, that provision will be considered severable and will not affect the validity and enforceability of the remaining provisions.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Rights Reservation</h3>
                      <p>FUNTEK Co., Ltd. reserves the right to interpret these Terms according to law.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">5. Contact Information</h3>
                      <p>If you have any questions about these Terms, please contact <a href="mailto:service@funtek.co" className="text-primary hover:underline">service@funtek.co</a>.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;