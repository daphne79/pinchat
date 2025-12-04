import { useTranslation } from 'react-i18next';
import { useLanguageFont } from '@/hooks/useLanguageFont';
import FeatureNavigation from '@/components/FeatureNavigation';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';

// Privacy Policy Page
const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { fontClass } = useLanguageFont();

  const tableOfContents = [
    { id: 'scope', title: 'I. Scope of Application' },
    { id: 'collection', title: 'II. Collection and Acquisition of Personal Data' },
    { id: 'processing', title: 'III. Processing Purposes and Legal Basis for Personal Data' },
    { id: 'sharing', title: 'IV. Sharing and Disclosure of Personal Data' },
    { id: 'retention', title: 'V. Data Retention and Security' },
    { id: 'cookies', title: 'VI. Cookies and Similar Technologies' },
    { id: 'rights', title: 'VII. User Rights' },
    { id: 'children', title: 'VIII. Children\'s Privacy' },
    { id: 'transfer', title: 'IX. Cross-Border Data Transfer' },
    { id: 'updates', title: 'X. Policy Updates' },
    { id: 'contact', title: 'XI. Contact Us' },
    { id: 'additional', title: 'XII. Additional Information' },
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
                <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Effective Date: May 26, 2025</strong></p>
                  <p><strong>Last Updated: August 26, 2025</strong></p>
                </div>
              </header>

              <div className="space-y-8 text-foreground">
                <div className="mb-8 p-6 bg-muted/50 rounded-lg">
                  <p className="text-lg leading-relaxed">
                    FUNTEK Co., Ltd. ("FUNTEK") values the privacy rights of users of its PinChat website (https://pinchat.app/) and related iOS/Android applications (collectively referred to as "PinChat"). FUNTEK is committed to respecting the privacy of users who use PinChat ("you") and keeping your personal data confidential. This Privacy Policy aims to explain how we collect, use, share, and protect your personal data, as well as the rights you have regarding this data.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    Please read this Privacy Policy carefully before using our services. If you do not agree with any part of this policy, please discontinue using our services. By using PinChat, you indicate that you agree to the data processing methods described in this policy.
                  </p>
                </div>

                <section id="scope" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">I. Scope of Application</h2>
                  <p className="text-lg leading-relaxed">
                    This Privacy Policy applies to all data collected through the PinChat website, mobile applications, and related services.
                  </p>
                </section>

                <section id="collection" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">II. Collection and Acquisition of Personal Data</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Registration Data</h3>
                      <p className="mb-3">When you register as a PinChat member, we will require you to provide:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Registration account (email address or phone number)</li>
                        <li>Password (stored encrypted)</li>
                        <li>Basic personal information (such as name, nickname, etc.)</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Usage Data</h3>
                      <p className="mb-3">When you use PinChat services, we may collect:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Usage history and activity records</li>
                        <li>Content preferences and interaction data</li>
                        <li>{t('common.queryDataAndSearchRecords')}</li>
                        <li>Communication content and interaction records</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Technical Data</h3>
                      <p className="mb-3">Technical information we automatically collect includes:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Device identifiers (such as IP addresses)</li>
                        <li>Browser type and version</li>
                        <li>Operating system information</li>
                        <li>Visit times and activity duration</li>
                        <li>Location data (if you have authorized it)</li>
                        <li>Information collected by cookies and similar technologies</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Customer Service Data</h3>
                      <p className="mb-3">When you contact our customer service or submit feedback, we collect:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Your contact information</li>
                        <li>Questions or feedback content</li>
                        <li>Related communication records</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <section id="processing" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">III. Processing Purposes and Legal Basis for Personal Data</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Service Provision and Improvement</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Maintain your account and provide services you request</li>
                        <li>Improve user experience and optimize product features</li>
                        <li>Develop new features and services</li>
                        <li>Resolve technical issues and provide customer support</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Communication Purposes</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Send service-related notifications (such as system updates, security alerts)</li>
                        <li>Respond to your inquiries or requests</li>
                        <li>Provide information about new features or services that may interest you (if you have agreed)</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Analysis and Research</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Understand user behavior and preferences</li>
                        <li>Conduct market research and data analysis</li>
                        <li>Evaluate and improve our service performance</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Security and Regulatory Compliance</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Protect the security of our services</li>
                        <li>Prevent and detect fraudulent behavior</li>
                        <li>Comply with legal obligations and regulatory requirements</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <section id="sharing" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">IV. Sharing and Disclosure of Personal Data</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Third-Party Service Providers</h3>
                      <p className="mb-3">We may share data with third parties who assist us in providing services, including:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Cloud storage providers</li>
                        <li>Analytics service providers</li>
                        <li>Customer service suppliers</li>
                        <li>Payment processing services</li>
                      </ol>
                      <p className="mt-3 text-muted-foreground">
                        These third parties may only process your data to provide relevant services and are contractually bound to protect your data.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Anonymous and Statistical Data</h3>
                      <p>We may share aggregated non-personal data with third parties. "Aggregated non-personal data" refers to collective data that has been anonymized and can no longer identify or be associated with specific individuals.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Legal Requirements</h3>
                      <p className="mb-3">We may disclose your personal data in accordance with the law in the following circumstances:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>In response to legal requirements or court orders</li>
                        <li>To protect the rights, property, or safety of FUNTEK or third parties</li>
                        <li>To prevent or investigate possible illegal activities</li>
                        <li>Due to significant national interests</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <section id="retention" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">V. Data Retention and Security</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Data Retention Period</h3>
                      <p>We will retain your personal data for the period necessary to achieve the collection purposes or as required by law. After you delete your account, we will delete or anonymize your personal data within a reasonable period, unless the law requires us to retain it.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Data Security Measures</h3>
                      <p className="mb-3">We take appropriate technical and organizational measures to protect your personal data, including:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Encryption technology</li>
                        <li>Access control</li>
                        <li>Regular security assessments</li>
                        <li>Employee training and confidentiality agreements</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Security Responsibility</h3>
                      <p>You should properly safeguard your account and password to prevent leakage. After using PinChat services, it is recommended to log out or close the software and browser windows to prevent data from being stolen by others.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Third-Party Links</h3>
                      <p>PinChat may contain links to other websites or services. These third-party websites have their independent privacy policies, and if you visit these websites and provide personal data, FUNTEK assumes no responsibility.</p>
                    </div>
                  </div>
                </section>

                <section id="cookies" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">VI. Cookies and Similar Technologies</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Use of Cookies</h3>
                      <p>We use cookies and similar technologies to enhance your user experience, collect statistical data, and provide personalized services.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Cookie Types</h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>Essential Cookies: Ensure basic website functionality</li>
                        <li>Functional Cookies: Remember your preference settings</li>
                        <li>Analytical Cookies: Understand how users use our services</li>
                        <li>Targeting/Advertising Cookies: Provide relevant advertisements and content</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Cookie Management</h3>
                      <p>You can manage or delete cookies through browser settings. Please note that disabling certain cookies may affect some functions of the service.</p>
                    </div>
                  </div>
                </section>

                <section id="rights" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">VII. User Rights</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">1. Right of Access</h3>
                      <p>You have the right to inquire about and copy your personal data that we hold.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">2. Right of Rectification</h3>
                      <p>If you believe that your personal data we hold is incorrect or incomplete, you have the right to request correction.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">3. Right of Erasure</h3>
                      <p>You can request deletion of your account and related personal data. Please note that once deleted, you will not be able to continue using PinChat services.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">4. Right to Restrict Processing</h3>
                      <p>In certain circumstances, you have the right to request that we restrict the processing of your personal data.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">5. Right to Data Portability</h3>
                      <p>You have the right to receive your personal data that you provided to us in a structured, commonly used, and machine-readable format, and you have the right to transmit this data to other service providers.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">6. Right to Object</h3>
                      <p>You have the right to object to our processing of your personal data at any time based on your specific situation.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">7. Exercising Rights</h3>
                      <p className="mb-3">You can exercise the above rights through the following methods:</p>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>In the settings page of the PinChat application</li>
                        <li>Send an email to <a href="mailto:service@funtek.co" className="text-primary hover:underline">service@funtek.co</a></li>
                      </ol>
                      <p className="mt-3 text-muted-foreground">
                        To protect your privacy and security, we may require you to provide identity verification.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">8. Restrictions</h3>
                      <p>When it would harm significant national interests, interfere with public agencies performing their statutory duties, or harm the significant interests of FUNTEK or third parties, we have the right to refuse your requests to change, delete, or restrict the processing of personal data in accordance with the law.</p>
                    </div>
                  </div>
                </section>

                <section id="children" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">VIII. Children's Privacy</h2>
                  <p className="text-lg leading-relaxed">
                    PinChat services are not directed at children under 13 years of age. We do not knowingly collect personal data from children under 13. If you discover that we have inadvertently collected children's personal data, please notify us immediately, and we will take measures to delete it as soon as possible.
                  </p>
                </section>

                <section id="transfer" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">IX. Cross-Border Data Transfer</h2>
                  <p className="text-lg leading-relaxed">
                    As our servers and business operations may be located in different countries or regions, your personal data may be transferred to regions outside Taiwan. We will ensure that such transfers comply with applicable data protection laws and take appropriate measures to protect your personal data.
                  </p>
                </section>

                <section id="updates" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">X. Policy Updates</h2>
                  <p className="text-lg leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in law, technology, or business development. For significant changes, we will post notifications on the PinChat website or application and update the date at the top of the policy. We recommend that you regularly review this policy to stay informed of the latest information.
                  </p>
                </section>

                <section id="contact" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">XI. Contact Us</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    If you have any questions or concerns about this Privacy Policy, or wish to exercise your data rights, please contact us by sending an email to <a href="mailto:service@funtek.co" className="text-primary hover:underline">service@funtek.co</a>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Additionally, if you believe that our processing of your personal data violates applicable data protection laws, you have the right to file a complaint with your local data protection authority.
                  </p>
                </section>

                <section id="additional" className="scroll-mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">XII. Additional Information</h2>
                  <p className="text-lg leading-relaxed">
                    For more information about how we process your data, please refer to PinChat's Terms of Service.
                  </p>
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

export default PrivacyPolicy;