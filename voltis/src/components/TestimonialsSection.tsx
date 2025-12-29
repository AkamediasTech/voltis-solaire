import React from "react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      // Image proche : Homme âgé devant une maison
      image:
        "https://images.unsplash.com/photo-1544168190-79c11e66b380?q=80&w=800&auto=format&fit=crop",
      quote:
        "« Les économies sur les factures vont de 58 % à 96 % au mois d'août »",
      author: "Normandie - Famille Damotte",
    },
    {
      // Image proche : Homme debout à l'extérieur (balcon/terrasse)
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      quote:
        "« Depuis les 4 derniers mois où il fait bien soleil dans la région, la consommation d'électricité représente, grâce aux panneaux solaires, 90 % d'économies sur ma facture. »",
      author: "Auvergne-Rhône-Alpes - Famille Gonnet",
    },
    {
      // Image proche : Portrait homme sénior extérieur
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      quote:
        "« Les deux installations me font économiser plus de 70 % sur ma facture. »",
      author: "Gard - Famille Duplan",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Ils sont passés à l'autoconsommation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative h-[500px] rounded-sm overflow-hidden group shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Témoignage ${item.author}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay dégradé sombre en bas pour le texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl mb-4 leading-snug">
                  {item.quote}
                </p>
                <p className="text-gray-300 text-sm font-medium">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
