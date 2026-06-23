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
        <h1 className="text-4xl font-black text-white mb-8">Politique de Confidentialité</h1>
        <p className="text-sm text-gray-500 mb-12">Date de Dernière Mise à Jour : 23 Juin 2026</p>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Introduction</h2>
          <p>Bienvenue sur Monde Quotidien. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site Web.</p>

          <h2 className="text-2xl font-bold text-white">Informations que Nous Collectons</h2>
          <p>Nous collectons des informations pour fournir de meilleurs services à tous nos utilisateurs. Les informations que nous collectons dépendent de la façon dont vous utilisez nos services.</p>

          <h2 className="text-2xl font-bold text-white">Informations que Vous Fournissez Volontairement</h2>
          <p>Lorsque vous remplissez nos formulaires de demande, nous collectons les informations personnelles que vous nous fournissez, qui comprennent votre Nom, Adresse E-mail, Numéro de Téléphone et tout Message que vous fournissez.</p>

          <h2 className="text-2xl font-bold text-white">Informations Collectées Automatiquement</h2>
          <p>Nous collectons automatiquement certaines informations lorsque vous visitez, utilisez ou naviguez sur le site Web. Ces informations ne révèlent pas votre identité spécifique mais peuvent inclure des informations sur l'appareil et l'utilisation, telles que votre adresse IP, les caractéristiques du navigateur et de l'appareil, le système d'exploitation et les préférences linguistiques.</p>

          <h2 className="text-2xl font-bold text-white">Finalité de la Collecte de Données</h2>
          <p>Les informations personnelles sont utilisées exclusivement pour répondre à vos demandes, faciliter la communication avec les clients et améliorer nos services éducatifs.</p>

          <h2 className="text-2xl font-bold text-white">CRM et Fournisseurs de Services Tiers</h2>
          <p>Les informations soumises via nos formulaires de demande sont transmises en toute sécurité à notre système de gestion de la relation client (CRM) pour la gestion des leads. Le site Web utilise un traitement sécurisé côté serveur pour cette transmission. <strong>Aucune information d'identification CRM sensible n'est jamais exposée aux utilisateurs.</strong> Nous ne partageons pas vos informations personnelles avec des tiers non affiliés à leurs propres fins de marketing.</p>

          <h2 className="text-2xl font-bold text-white">Cookies et Technologies de Suivi</h2>
          <p>Nous utilisons des cookies et des technologies de suivi similaires pour accéder ou stocker des informations, maintenir la sécurité et comprendre comment notre site Web est utilisé. Vous pouvez configurer votre navigateur pour qu'il refuse tout ou partie des cookies du navigateur, mais cela peut affecter votre expérience utilisateur.</p>

          <h2 className="text-2xl font-bold text-white">Sécurité des Données</h2>
          <p>Nous avons mis en œuvre des mesures de sécurité techniques et organisationnelles appropriées conçues pour protéger la sécurité de toutes les informations personnelles que nous traitons. Cependant, n'oubliez pas que nous ne pouvons garantir que l'Internet lui-même est sécurisé à 100 %.</p>

          <h2 className="text-2xl font-bold text-white">Conservation des Données</h2>
          <p>Nous ne conserverons vos informations personnelles que le temps nécessaire aux fins énoncées dans la présente politique de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou autorisée par la loi.</p>

          <h2 className="text-2xl font-bold text-white">Transferts Internationaux de Données</h2>
          <p>Vos informations peuvent être transférées vers, et conservées sur, des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection des données peuvent différer.</p>

          <h2 className="text-2xl font-bold text-white">Droits de l'Utilisateur</h2>
          <p>Selon votre emplacement, vous pouvez avoir des droits en vertu des lois applicables sur la protection des données pour accéder, corriger ou supprimer vos données personnelles. Veuillez nous contacter pour exercer ces droits.</p>

          <h2 className="text-2xl font-bold text-white">Communications Marketing</h2>
          <p>Vous pouvez vous désinscrire de la réception de communications marketing de notre part à tout moment en utilisant le lien de désinscription dans nos e-mails ou en nous contactant directement.</p>

          <h2 className="text-2xl font-bold text-white">Confidentialité des Enfants</h2>
          <p>Notre site Web n'est pas destiné aux enfants de moins de 18 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 18 ans.</p>

          <h2 className="text-2xl font-bold text-white">Sites Web Tiers</h2>
          <p>Notre site Web peut contenir des liens vers des sites Web tiers. Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces sites Web tiers.</p>

          <h2 className="text-2xl font-bold text-white">Mises à Jour de la Politique</h2>
          <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre afin de refléter les changements de nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.</p>

          <h2 className="text-2xl font-bold text-white">Coordonnées</h2>
          <p>Si vous avez des questions ou des commentaires sur cette politique, vous pouvez nous envoyer un e-mail ou nous contacter via nos formulaires de demande sur le site Web.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
