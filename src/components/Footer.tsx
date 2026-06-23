import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-xl font-black tracking-tighter text-white mb-4">
          Crypto<span className="text-emerald-500">Ledger</span>
        </div>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
          Disclaimer: Cryptocurrency trading involves significant risk and can result in the loss of your invested capital. The website is for educational and informational purposes only. Nothing on the website constitutes financial, investment, legal, or tax advice. You should not invest more than you can afford to lose. The website does not guarantee profits or investment returns.
        </p>
        
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-emerald-500 transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="text-gray-400 hover:text-emerald-500 transition-colors">Terms & Conditions</Link>
        </div>

        <div className="text-gray-600 text-sm">
          &copy; 2026 CryptoLedger Holdings Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
