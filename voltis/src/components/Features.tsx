import React from "react";
import { PiggyBank, Leaf, TrendingUp, ShieldCheck } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <PiggyBank className="w-10 h-10 text-edf-orange" />,
      title: "Réduisez vos factures",
      description:
        "Jusqu'à 70% d'économies sur votre facture d'électricité en consommant votre propre production.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-edf-orange" />,
      title: "Valorisez votre bien",
      description:
        "Une maison équipée de panneaux solaires se revend plus cher et plus vite (Valeur verte).",
    },
    {
      icon: <Leaf className="w-10 h-10 text-edf-orange" />,
      title: "Énergie Verte",
      description:
        "Participez à la transition énergétique en produisant une énergie propre et locale.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-edf-orange" />,
      title: "Garantie Sérénité",
      description:
        "Bénéficiez de la solidité et de l'expertise d'une filiale du groupe EDF. Garantie performance 25 ans.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edf-blue mb-4">
            Pourquoi passer à l'autoconsommation ?
          </h2>
          <p className="text-lg text-gray-600">
            Une solution rentable, écologique et durable pour votre habitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-edf-orange transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
