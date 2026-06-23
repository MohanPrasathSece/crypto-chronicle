import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden pt-24">
      <nav className="fixed w-full top-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-gray-800/80">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="text-2xl font-black tracking-tighter text-white text-center">
            Crypto<span className="text-emerald-500">Ledger</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 prose prose-invert prose-emerald lg:prose-lg">
        <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated Date: June 23, 2026</p>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Introduction</h2>
          <p>Welcome to CryptoLedger. We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.</p>

          <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
          <p>We collect information to provide better services to all our users. The information we collect depends on how you use our services.</p>

          <h2 className="text-2xl font-bold text-white">Information You Voluntarily Provide</h2>
          <p>When you fill out our enquiry forms, we collect the personal information you give us, which includes your Name, Email Address, Phone Number, and any Message you provide.</p>

          <h2 className="text-2xl font-bold text-white">Automatically Collected Information</h2>
          <p>We automatically collect certain information when you visit, use, or navigate the website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, and language preferences.</p>

          <h2 className="text-2xl font-bold text-white">Purpose of Data Collection</h2>
          <p>Personal information is used exclusively for responding to your enquiries, facilitating customer communication, and improving our educational services.</p>

          <h2 className="text-2xl font-bold text-white">CRM & Third-Party Service Providers</h2>
          <p>Information submitted through our enquiry forms is securely transmitted to our Customer Relationship Management (CRM) system for lead management. The website uses secure server-side processing for this transmission. <strong>No sensitive CRM credentials are ever exposed to users.</strong> We do not share your personal information with unaffiliated third parties for their own marketing purposes.</p>

          <h2 className="text-2xl font-bold text-white">Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to access or store information, maintain security, and understand how our website is used. You can set your browser to refuse all or some browser cookies, but this may affect your user experience.</p>

          <h2 className="text-2xl font-bold text-white">Data Security</h2>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that we cannot guarantee that the internet itself is 100% secure.</p>

          <h2 className="text-2xl font-bold text-white">Data Retention</h2>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.</p>

          <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
          <p>Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ.</p>

          <h2 className="text-2xl font-bold text-white">User Rights</h2>
          <p>Depending on your location, you may have rights under applicable data protection laws to access, correct, or delete your personal data. Please contact us to exercise these rights.</p>

          <h2 className="text-2xl font-bold text-white">Marketing Communications</h2>
          <p>You may opt-out of receiving marketing communications from us at any time by utilizing the unsubscribe link in our emails or contacting us directly.</p>

          <h2 className="text-2xl font-bold text-white">Children's Privacy</h2>
          <p>Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

          <h2 className="text-2xl font-bold text-white">Third-Party Websites</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those third-party websites.</p>

          <h2 className="text-2xl font-bold text-white">Policy Updates</h2>
          <p>We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>

          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          <p>If you have questions or comments about this policy, you may email us or contact us via our website enquiry forms.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
