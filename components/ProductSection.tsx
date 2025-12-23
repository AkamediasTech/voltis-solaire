import React from "react";
import { CloudSun, Sun, Home } from "lucide-react";

export const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          Montez en puissance et optimisez vos économies
        </h2>

        {/* Top Content: Text + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Text Side */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-edf-orange leading-tight">
              Voltis Solaire vous équipe de panneaux photovoltaïques nouvelle
              génération, à la pointe de l’innovation.
            </h3>

            <p className="text-gray-800 leading-relaxed text-base md:text-lg">
              Reprenez la main sur votre facture d’électricité et réalisez
              jusqu’à 60 % d’économies d’énergie par an<sup>(1)</sup>. Produisez
              et consommez votre propre énergie, toute l’année.
            </p>

            <p className="text-gray-800 leading-relaxed text-base md:text-lg">
              Avec nos nouveaux panneaux solaires 500Wc, vous générez davantage
              d’électricité verte à surface équivalente. Leur technologie
              avancée garantit de meilleures performances, y compris lorsque
              l’ensoleillement est faible.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer bg-edf-orange text-white font-bold py-3.5 px-8 rounded-full hover:bg-edf-orangeHover transition-colors shadow-lg shadow-orange-100 cursor-pointer"
              >
                Réaliser mon bilan solaire gratuit
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 flex justify-center w-full">
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"
              alt="Panneaux solaires EcoLife"
              className="w-full max-w-md object-contain drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>

        {/* Features Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <CloudSun className="w-16 h-16 text-edf-orange stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 h-auto md:h-14 flex items-center justify-center">
              Une production optimisée par tous les temps
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              Même par temps nuageux, en hiver ou en automne, nos panneaux
              captent plus d'énergie. Vous produisez ainsi votre propre
              électricité de manière plus constante tout au long de l'année.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <Sun className="w-16 h-16 text-edf-orange stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 h-auto md:h-14 flex items-center justify-center">
              Un rendement supérieur, même en cas de forte chaleur
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              Contrairement aux panneaux classiques, la technologie EcoLife est
              moins sensible aux températures élevées, garantissant une
              production maximale.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <Home className="w-16 h-16 text-edf-orange stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 h-auto md:h-14 flex items-center justify-center">
              Une promesse solide pour votre tranquillité d'esprit
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              Cette innovation offre une durabilité accrue avec des panneaux
              photovoltaïques performants et garantie à vie<sup>(2)</sup>
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-edf-orange text-white font-bold py-3.5 px-8 rounded-full hover:bg-edf-orangeHover transition-colors shadow-lg shadow-orange-100"
          >
            Réaliser mon bilan solaire gratuit
          </button>
        </div>
      </div>
    </section>
  );
};
