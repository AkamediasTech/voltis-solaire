import React from 'react';
import { Home, UserCheck, FileCheck, ArrowRight } from 'lucide-react';

export const StepsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Passez au solaire et réalisez jusqu'à 60%<sup>(1)</sup> d'économies d'énergie à l'année
          </h2>
        </div>

        {/* Steps Container Box */}
        <div className="border border-gray-200 rounded-sm p-8 md:p-12 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center text-center px-2">
                    <div className="mb-6">
                         <Home className="w-14 h-14 text-edf-orange stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-edf-orange mb-3">Une étude gratuite</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                        pour une installation sur-mesure par notre Conseiller Solaire à votre domicile
                    </p>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:flex items-center justify-center text-gray-800 w-12">
                    <ArrowRight className="w-8 h-8" />
                </div>

                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center text-center px-2">
                    <div className="mb-6">
                         <UserCheck className="w-14 h-14 text-edf-orange stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-edf-orange mb-3">Une validation technique</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                        par nos experts pour confirmer la proposition du Conseiller Solaire. Elle se déroule à distance ou sur place
                    </p>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:flex items-center justify-center text-gray-800 w-12">
                     <ArrowRight className="w-8 h-8" />
                </div>

                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center text-center px-2">
                    <div className="mb-6">
                         <FileCheck className="w-14 h-14 text-edf-orange stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-edf-orange mb-3 leading-tight">Démarches administratives prises en charge</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                        pour vous simplifier la vie<sup>(4)</sup>
                    </p>
                </div>

            </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
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