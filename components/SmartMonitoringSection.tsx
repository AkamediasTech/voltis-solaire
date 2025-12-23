import React from 'react';

export const SmartMonitoringSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Block 1: Guarantee & Equipment */}
        <div className="bg-gray-100 rounded-sm overflow-hidden flex flex-col lg:flex-row">
           <div className="p-8 md:p-16 lg:w-2/3 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6">
                Vos panneaux solaires avec suivi <br/>
                <span className="font-medium">intelligent de votre consommation</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-bold text-gray-800">Produisez et consommez votre propre électricité</span> avec des panneaux photovoltaïques performants et garantis à vie<sup>(5)</sup>. Notre "garantie matériel" à vie<sup>(5)</sup>, pièces, main d'œuvre et déplacement porte sur les équipements suivants :
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 font-bold text-edf-orange">
                  <span className="w-1.5 h-1.5 rounded-full bg-edf-orange"></span> l'onduleur
                </li>
                <li className="flex items-center gap-2 font-bold text-edf-orange">
                  <span className="w-1.5 h-1.5 rounded-full bg-edf-orange"></span> les modules photovoltaïques
                </li>
                <li className="flex items-center gap-2 font-bold text-edf-orange">
                  <span className="w-1.5 h-1.5 rounded-full bg-edf-orange"></span> la structure
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm">
                Investissez dans une solution durable et fiable vous permettant de réaliser des économies d'énergie<sup>(3)</sup> tout au long de votre vie<sup>(5)</sup>.
              </p>
           </div>
           <div className="lg:w-1/3 bg-white flex items-center justify-center p-8 lg:p-0">
              {/* Representing the hardware image (Panels + Hubs) */}
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=800&auto=format&fit=crop" 
                alt="Panneaux et équipements de suivi" 
                className="w-full h-full object-cover max-h-[500px]"
              />
           </div>
        </div>

        {/* Block 2: Yuze Pilotage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
           <div className="h-full min-h-[300px] lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                alt="Homme consultant son application" 
                className="w-full h-full object-cover"
              />
           </div>
           <div className="bg-gray-100 p-8 md:p-16 flex flex-col justify-center lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6">
                 Pilotage de votre production avec YUZE
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                 <span className="font-bold text-gray-800">Yuze est un compagnon intelligent</span> pour votre installation solaire. Il remonte <span className="font-bold text-gray-800">sur votre Espace Client EDF solutions solaires</span> :
              </p>
              <ul className="space-y-2 mb-6 text-gray-600 list-disc pl-5">
                 <li>La consommation électrique du foyer</li>
                 <li>La production d'électricité de l'installation photovoltaïque.</li>
                 <li>Et donc, calcule votre surplus de production solaire.</li>
              </ul>
              <p className="text-edf-orange font-bold leading-relaxed">
                 Et pour aller plus loin, profitez de notre Afficheur pour visualiser en temps réel et en un simple coup d'œil votre production d'énergie solaire.
              </p>
           </div>
        </div>

        {/* Block 3: Mobile App */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
           <div className="bg-gray-100 p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1 lg:col-span-2">
              <div className="hidden lg:block mb-8">
                 {/* Decorative Logo Placeholder similar to screenshot overlay */}
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-edf-blue rounded-full flex items-center justify-center text-white font-bold text-sm">e</div>
                    <div className="flex flex-col">
                        <span className="text-edf-blue font-bold text-sm leading-none">SOLUTIONS</span>
                        <span className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase">Solaires</span>
                    </div>
                 </div>
              </div>
              
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                 Suivez et pilotez en temps réel votre consommation directement depuis votre téléphone grâce à l'application mobile EDF solutions solaires.
              </p>
              <p className="text-gray-600 leading-relaxed">
                 Profitez de conseils personnalisés avec un conseiller pour optimiser votre consommation au mieux.
              </p>
           </div>
           <div className="h-full min-h-[300px] order-1 lg:order-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Application mobile sur smartphone" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Final CTA */}
        <div className="flex justify-center pt-8">
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="bg-edf-orange text-white font-bold py-4 px-10 rounded-full hover:bg-edf-orangeHover transition-colors shadow-lg shadow-orange-100 text-lg"
            >
                  Je demande mon Bilan gratuit
             </button>
        </div>

      </div>
    </section>
  );
};