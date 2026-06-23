import { useState } from "react";
import { motion } from "framer-motion";
import TradingAnimation from "../components/TradingAnimation";
import Footer from "../components/Footer";

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Enhanced Header */}
      <nav className="fixed w-full top-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <svg className="w-5 h-5 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div className="text-2xl font-black tracking-tighter text-white">
              Crypto<span className="text-emerald-500">Ledger</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#mechanics" className="hover:text-emerald-400 transition-colors">Performance</a>
            <a href="#benefits" className="hover:text-emerald-400 transition-colors">Benefits</a>
            <a href="#process" className="hover:text-emerald-400 transition-colors">Process</a>
            <button onClick={scrollToForm} className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-5 py-2 rounded-full hover:bg-emerald-500 hover:text-gray-950 hover:border-emerald-500 transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Enquire Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Form */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-block border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              Exclusive Access
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Institutional Grade <br/><span className="text-emerald-500 text-shadow-glow">Crypto Investing</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              You've read the story of the Swiss Secret. Now, gain access to the proprietary trading algorithms and wealth management strategies driving the modern crypto elite. 
            </p>
            
            <div className="flex gap-4 items-center pt-4">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-12 h-12 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-12 h-12 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="User" />
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-xs font-bold">+500</div>
              </div>
              <p className="text-sm text-gray-400 font-medium">Join 500+ successful investors this month.</p>
            </div>
          </motion.div>

          <motion.div 
            id="enquiry-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 scroll-mt-32"
          >
            <div className="relative bg-[#0a0f1c] border border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] pointer-events-none"></div>
              
              <div className="text-center mb-8 relative z-10">
                <h2 className="text-3xl font-black text-white mb-2">Investment Enquiry</h2>
                <p className="text-gray-400 text-sm">Submit your details to receive a confidential portfolio consultation.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 relative z-10"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enquiry Received</h3>
                  <p className="text-gray-400">Our wealth directors will contact you shortly to begin your consultation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                    <input required type="text" id="name" name="name" className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600" placeholder="John Doe" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input required type="email" id="email" name="email" className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                    <input required type="tel" id="phone" name="phone" className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea required id="message" name="message" rows={3} className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600 resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-gray-950 font-black text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-6 w-6 text-gray-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : "Submit Enquiry"}
                  </button>
                  <p className="text-[11px] text-gray-500 text-center pt-2">
                    Information securely transmitted. No commitment required.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Section 1: Live Market Mechanics */}
      <section id="mechanics" className="py-24 border-y border-gray-800/50 bg-[#060a16]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Live Market Mechanics</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">See how our proprietary trading algorithms analyze market volatility in real-time to execute precision trades.</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#030712] border border-gray-800 rounded-3xl p-8 shadow-2xl">
              <TradingAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2: Why Choose Us (Benefits) */}
      <section id="benefits" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Unfair Advantage</h2>
            <p className="text-lg text-gray-400">Why the modern crypto elite trust our infrastructure for their wealth management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-[#0a0f1c] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Algorithmic Precision</h3>
              <p className="text-gray-400 leading-relaxed">Our systems process millions of data points per second to identify arbitrage and breakout opportunities before the broader market reacts.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-[#0a0f1c] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">Your assets remain under strict institutional custody protocols with multi-signature cold storage and comprehensive insurance coverage.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#0a0f1c] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Absolute Transparency</h3>
              <p className="text-gray-400 leading-relaxed">Track your portfolio's performance with a dedicated dashboard offering 24/7 real-time reporting and direct access to your wealth manager.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3: The Process */}
      <section id="process" className="py-24 border-t border-gray-800/50 bg-[#060a16]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#030712] border-2 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Submit Enquiry</h3>
              <p className="text-gray-400 px-4">Fill out the secure form above to express your interest and detail your investment goals.</p>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#030712] border-2 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Private Consultation</h3>
              <p className="text-gray-400 px-4">A dedicated portfolio director will contact you to align our strategies with your profile.</p>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#030712] border-2 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Activate Wealth</h3>
              <p className="text-gray-400 px-4">Fund your secure institutional account and watch the algorithms execute trades in real-time.</p>
            </div>

          </div>
          
          <div className="mt-16">
            <button onClick={scrollToForm} className="bg-white text-gray-950 font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition-colors">
              Start The Process
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
