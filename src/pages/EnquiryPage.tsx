import { useState } from "react";
import { motion } from "framer-motion";
import TradingAnimation from "../components/TradingAnimation";
import Footer from "../components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const getPhonePlaceholder = (country: string) => {
    const placeholders: Record<string, string> = {
      FR: "6 00 00 00 00", CH: "79 000 00 00", BE: "400 00 00 00", CA: "416-000-0000", US: "202-000-0000",
      GB: "7000 000000", DE: "151 00000000", ES: "600 000 000", IT: "300 0000000", NL: "6 00000000",
      SE: "70 000 00 00", AU: "400 000 000", IN: "98000 00000", AE: "50 000 0000", SG: "8000 0000",
      ZA: "60 000 0000", BR: "11 90000-0000", MX: "55 0000 0000", JP: "90-0000-0000", CY: "99 000000"
    };
    return placeholders[country] || "Sélectionnez un pays";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPhoneError("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.countryCode) {
      setPhoneError("Veuillez sélectionner un pays");
      setIsSubmitting(false);
      return;
    }

    const phone = (data.phone as string) || "";
    const cleanNum = phone.replace(/\s+/g, "");
    const phoneLengths: Record<string, number> = {
      FR: 9, CH: 9, BE: 9, CA: 10, US: 10, GB: 10, DE: 10, ES: 9, IT: 10, NL: 9, SE: 9, AU: 9, IN: 10, AE: 9, SG: 8, ZA: 9, BR: 11, MX: 10, JP: 10, CY: 8, IE: 9
    };
    const cCode = data.countryCode as string;
    const expectedLen = phoneLengths[cCode as string] || 9;
    if (cleanNum && (cleanNum.length < expectedLen - 1 || cleanNum.length > expectedLen + 2)) {
      setPhoneError(`Veuillez entrer un numéro valide pour le pays sélectionné (${expectedLen} chiffres attendus)`);
      setIsSubmitting(false);
      return;
    }

    if (!cleanNum) {
      setPhoneError("Veuillez entrer un numéro de téléphone");
      setIsSubmitting(false);
      return;
    } 

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errData;
        try {
          errData = await response.json();
        } catch(e) {}
        throw new Error(errData?.error || 'Submission failed');
      }

      setIsSuccess(true);
    } catch (error: any) {
      const rawMsg = (error?.message || error?.toString() || "");
      if (rawMsg.includes("Account already exists")) {
        setPhoneError("You have already contacted us. Our team will get in touch with you soon.");
        return;
      }
      if (rawMsg.includes("Lead is not valid")) {
        setPhoneError("Veuillez utiliser une adresse e-mail correcte.");
        return;
      }
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
              Monde Quotidien
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#mechanics" className="hover:text-emerald-400 transition-colors">Performance</a>
            <a href="#benefits" className="hover:text-emerald-400 transition-colors">Avantages</a>
            <a href="#process" className="hover:text-emerald-400 transition-colors">Processus</a>
            <button onClick={scrollToForm} className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-5 py-2 rounded-full hover:bg-emerald-500 hover:text-gray-950 hover:border-emerald-500 transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Se Renseigner
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
              Accès Exclusif
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Investissement Crypto <br/><span className="text-emerald-500 text-shadow-glow">Niveau Institutionnel</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Vous avez lu l'histoire du Secret Suisse. Maintenant, accédez aux algorithmes de trading exclusifs et aux stratégies de gestion de patrimoine qui animent l'élite crypto moderne.
            </p>
            
            <div className="flex gap-4 items-center pt-4">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-12 h-12 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-12 h-12 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="User" />
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-xs font-bold">+500</div>
              </div>
              <p className="text-sm text-gray-400 font-medium">Rejoignez plus de 500 investisseurs prospères ce mois-ci.</p>
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
                <h2 className="text-3xl font-black text-white mb-2">Demande d'Investissement</h2>
                <p className="text-gray-400 text-sm">Soumettez vos coordonnées pour recevoir une consultation de portefeuille confidentielle.</p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative z-10 py-6"
                >
                  {/* Animated checkmark circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                  >
                    <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex justify-center mb-4"
                  >
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                      Demande Confirmée
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl font-black text-white text-center mb-3"
                  >
                    Merci pour votre intérêt !
                  </motion.h3>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto mb-4"
                  />

                  {/* Body message */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-sm leading-relaxed text-center mb-6 px-2"
                  >
                    Thank you for reaching out. Your enquiry has been successfully received. Our team will contact you shortly.
                  </motion.p>

                  {/* Info card */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-[#030712] border border-gray-800 rounded-2xl p-4 space-y-3"
                  >
                    {[
                      { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Confirmation envoyée par e-mail" },
                      { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Données traitées en toute sécurité" },
                      { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Conseiller personnel assigné" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-gray-400 text-xs">{item.label}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Nom</label>
                    <input required type="text" id="name" name="name" className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600" placeholder="Jean Dupont" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Adresse E-mail</label>
                    <input required type="email" id="email" name="email" className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600" placeholder="jean@exemple.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Numéro de Téléphone</label>
                    
<div style={{ display: 'flex', gap: '8px', width: '100%' }}>
    <Select name="countryCode" required value={selectedCountry} onValueChange={(val) => { setSelectedCountry(val); setPhoneError(""); }}>
        <SelectTrigger className="w-[120px] h-[50px] bg-[#030712] border border-gray-800 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all">
            <SelectValue placeholder="Pays" />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" className="bg-[#0a0f1c] text-white border-gray-800 rounded-xl shadow-xl max-h-[300px]">
            <SelectItem value="IE" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇮🇪 +353</SelectItem>
            <SelectItem value="CH" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇨🇭 +41</SelectItem>
            <SelectItem value="FR" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇫🇷 +33</SelectItem>
            <SelectItem value="BE" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇧🇪 +32</SelectItem>
            <SelectItem value="CA" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇨🇦 +1</SelectItem>
            <SelectItem value="US" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇺🇸 +1</SelectItem>
            <SelectItem value="GB" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇬🇧 +44</SelectItem>
            <SelectItem value="DE" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇩🇪 +49</SelectItem>
            <SelectItem value="ES" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇪🇸 +34</SelectItem>
            <SelectItem value="IT" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇮🇹 +39</SelectItem>
            <SelectItem value="NL" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇳🇱 +31</SelectItem>
            <SelectItem value="SE" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇸🇪 +46</SelectItem>
            <SelectItem value="AU" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇦🇺 +61</SelectItem>
            <SelectItem value="IN" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇮🇳 +91</SelectItem>
            <SelectItem value="AE" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇦🇪 +971</SelectItem>
            <SelectItem value="SG" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇸🇬 +65</SelectItem>
            <SelectItem value="ZA" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇿🇦 +27</SelectItem>
            <SelectItem value="BR" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇧🇷 +55</SelectItem>
            <SelectItem value="MX" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇲🇽 +52</SelectItem>
            <SelectItem value="JP" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇯🇵 +81</SelectItem>
            <SelectItem value="CY" className="focus:bg-emerald-500/20 focus:text-emerald-400 cursor-pointer">🇨🇾 +357</SelectItem>
        </SelectContent>
    </Select>
<input required type="tel" id="phone" name="phone" className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600" placeholder={selectedCountry ? getPhonePlaceholder(selectedCountry) : "Sélectionnez un pays d'abord"}  style={{ flex: 1 }} onChange={() => setPhoneError("")} />
</div>
                    {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea id="message" name="message" rows={3} className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder-gray-600 resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
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
                    ) : "Soumettre la Demande"}
                  </button>
                  <p className="text-[11px] text-gray-500 text-center pt-2">
                    Informations transmises en toute sécurité. Aucun engagement requis.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Mécanismes de Marché en Direct</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Voyez comment nos algorithmes de trading exclusifs analysent la volatilité du marché en temps réel pour exécuter des transactions de précision.</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Avantage Injuste</h2>
            <p className="text-lg text-gray-400">Pourquoi l'élite crypto moderne fait confiance à notre infrastructure pour la gestion de son patrimoine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-[#0a0f1c] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Précision Algorithmique</h3>
              <p className="text-gray-400 leading-relaxed">Nos systèmes traitent des millions de points de données par seconde pour identifier les opportunités d'arbitrage et de cassure avant que le marché dans son ensemble ne réagisse.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-[#0a0f1c] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sécurité d'Entreprise</h3>
              <p className="text-gray-400 leading-relaxed">Vos actifs restent soumis à des protocoles de conservation institutionnels stricts, avec un stockage à froid multi-signatures et une couverture d'assurance complète.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#0a0f1c] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparence Absolue</h3>
              <p className="text-gray-400 leading-relaxed">Suivez les performances de votre portefeuille grâce à un tableau de bord dédié offrant des rapports en temps réel 24h/24 et 7j/7 et un accès direct à votre gestionnaire de patrimoine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3: The Process */}
      <section id="process" className="py-24 border-t border-gray-800/50 bg-[#060a16]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16">Comment ça Marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#030712] border-2 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Soumettre une Demande</h3>
              <p className="text-gray-400 px-4">Remplissez le formulaire sécurisé ci-dessus pour exprimer votre intérêt et détailler vos objectifs d'investissement.</p>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#030712] border-2 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Consultation Privée</h3>
              <p className="text-gray-400 px-4">Un directeur de portefeuille dédié vous contactera pour aligner nos stratégies avec votre profil.</p>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#030712] border-2 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-black text-emerald-500 mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Activer la Richesse</h3>
              <p className="text-gray-400 px-4">Financez votre compte institutionnel sécurisé et regardez les algorithmes exécuter des transactions en temps réel.</p>
            </div>

          </div>
          
          <div className="mt-16">
            <button onClick={scrollToForm} className="bg-white text-gray-950 font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition-colors">
              Commencer le Processus
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
