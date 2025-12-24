import React from "react";

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Demandez votre bilan solaire gratuit dès maintenant :
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Le bilan solaire à votre domicile que nous proposons est gratuit et
          sans engagement.
        </p>

        {/* List */}
        <ul className="space-y-3 text-lg text-gray-700 mb-12 list-disc pl-5 marker:text-gray-900">
          <li>
            Il est réalisé par un Conseiller Solaire de votre région pour :
          </li>
          <li>
            Evaluer vos habitudes de consommation et{" "}
            <span className="font-bold text-gray-900">vos besoins</span>
          </li>
          <li>
            <span className="font-bold text-gray-900">
              Vérifier votre éligibilité
            </span>{" "}
            aux panneaux photovoltaïques et{" "}
            <span className="font-bold text-gray-900">aux aides</span>
          </li>
          <li>
            Expliquer les fondamentaux de{" "}
            <span className="font-bold text-gray-900">l'autoconsommation</span>
          </li>
          <li>
            Proposer une{" "}
            <span className="font-bold text-gray-900">offre sur mesure</span>
          </li>
        </ul>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer bg-edf-orange text-white font-bold py-4 px-12 rounded-full hover:bg-edf-orangeHover transition-colors shadow-lg text-lg"
          >
            Je demande mon bilan gratuit
          </button>
        </div>
      </div>
    </section>
  );
};
