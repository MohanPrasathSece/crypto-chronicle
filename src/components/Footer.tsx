import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-xl font-black tracking-tighter text-white mb-4">
          CryptomonnaieGrand livre
        </div>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
          Avis de non-responsabilité : Le trading de cryptomonnaies implique des risques importants et peut entraîner la perte de votre capital investi. Le site Web est à des fins éducatives et informatives uniquement. Rien sur le site Web ne constitue des conseils financiers, d'investissement, juridiques ou fiscaux. Vous ne devriez pas investir plus que ce que vous pouvez vous permettre de perdre. Le site Web ne garantit pas les bénéfices ou les retours sur investissement.
        </p>
        
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-emerald-500 transition-colors">Politique de Confidentialité</Link>
          <Link to="/terms-and-conditions" className="text-gray-400 hover:text-emerald-500 transition-colors">Conditions Générales</Link>
        </div>

        <div className="text-gray-600 text-sm">
          &copy; 2026 CryptomonnaieGrand livre Holdings Ltd. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
