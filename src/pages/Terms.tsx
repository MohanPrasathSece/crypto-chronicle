import Footer from "../components/Footer";

export default function Terms() {
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
        <h1 className="text-4xl font-black text-white mb-8">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated Date: June 23, 2026</p>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
          <p>By accessing or using CryptoLedger, you agree to be bound by these Terms & Conditions. If you disagree with any part of the terms, you may not access the website.</p>

          <h2 className="text-2xl font-bold text-white">Eligibility</h2>
          <p>You must be at least 18 years old to use our website and services. By using our website, you represent and warrant that you meet this requirement.</p>

          <h2 className="text-2xl font-bold text-white">Website Purpose</h2>
          <p>The website is for educational and informational purposes only. The content provided is designed to inform you about the mechanics of cryptocurrency markets and general technological developments.</p>

          <h2 className="text-2xl font-bold text-white">No Financial Advice & No Investment Advice</h2>
          <p><strong>Nothing on the website constitutes financial, investment, legal, or tax advice.</strong> The information provided is not tailored to your individual situation. You should consult with a licensed professional before making any financial decisions.</p>

          <h2 className="text-2xl font-bold text-white">Cryptocurrency Risk Disclosure & No Guarantee of Returns</h2>
          <p>Cryptocurrency investments involve significant risk, including the risk of complete loss of capital. Markets are highly volatile. <strong>The website does not guarantee profits or investment returns.</strong> Past performance is not indicative of future results.</p>

          <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
          <p>You are responsible for your own investment decisions and any consequences thereof. You agree to use the information provided entirely at your own risk.</p>

          <h2 className="text-2xl font-bold text-white">Acceptable Use & Prohibited Activities</h2>
          <p>You agree not to use the website for any unlawful purpose or to engage in any activity that could damage, disable, or impair our servers or networks. Scraping, data mining, or extracting data from our website is strictly prohibited without written consent.</p>

          <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of CryptoLedger or its content suppliers and protected by intellectual property laws.</p>

          <h2 className="text-2xl font-bold text-white">Accuracy of Information</h2>
          <p>While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding the completeness, reliability, or accuracy of the content on our website.</p>

          <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
          <p>In no event shall CryptoLedger, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of this website.</p>

          <h2 className="text-2xl font-bold text-white">Indemnification</h2>
          <p>You agree to indemnify and hold harmless CryptoLedger from any claims, damages, losses, or expenses arising from your use of the website or your violation of these Terms.</p>

          <h2 className="text-2xl font-bold text-white">Third-Party Links</h2>
          <p>Our website may contain links to third-party web sites or services that are not owned or controlled by CryptoLedger. We assume no responsibility for the content, privacy policies, or practices of any third party web sites or services.</p>

          <h2 className="text-2xl font-bold text-white">Privacy Policy Reference</h2>
          <p>Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal data.</p>

          <h2 className="text-2xl font-bold text-white">Suspension of Access</h2>
          <p>We reserve the right to terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including breach of the Terms.</p>

          <h2 className="text-2xl font-bold text-white">Governing Law & Dispute Resolution</h2>
          <p>These Terms shall be governed by the laws applicable in our operating jurisdiction, without regard to its conflict of law provisions. Any dispute shall be resolved through binding arbitration or in a competent court of law within our jurisdiction.</p>

          <h2 className="text-2xl font-bold text-white">Severability</h2>
          <p>If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions of these Terms will remain in effect.</p>

          <h2 className="text-2xl font-bold text-white">Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.</p>

          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us through the website.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
