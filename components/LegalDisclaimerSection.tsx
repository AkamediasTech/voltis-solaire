import React from "react";

export const LegalDisclaimerSection: React.FC = () => {
  const disclaimers = [
    "(1) Limite maximale évaluée à partir de données observées en 2024 chez un panel d'environ 900 clients. Information indicative et non contractuelle, dépendant notamment des conditions d'ensoleillement réel et des choix et pratiques quotidiennes d'utilisation des équipements électriques du foyer",
    "(2) Vente du surplus de production à EDF Obligation d'Achat pour les installations d'une puissance inférieure ou égale à 9kWc au tarif régulé de 4 cts d'€ /kWh",
    "(3) Information indicative et non contractuelle, dépendant notamment des conditions d'ensoleillement réel et des choix et pratiques quotidiennes d'utilisation des équipements électriques du foyer",
    "(4) Groupe France Solaire se charge de vos démarches administratives (urbanisme, financement, demande de raccordement)",
    "(5) La garantie à vie comprend l’onduleur, les modules photovoltaïques, la structure, ainsi que la main d’œuvre et les déplacements associés. Sous réserve du respect des conditions de mise en œuvre des garanties, selon Conditions Générales de Vente applicables. Garantie à vie uniquement disponible dans Mon projet solaire Performance.",
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          {disclaimers.map((text, index) => (
            <p
              key={index}
              className="text-[10px] md:text-xs text-gray-500 leading-relaxed text-justify font-normal"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
