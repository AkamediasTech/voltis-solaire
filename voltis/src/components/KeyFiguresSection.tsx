import React from 'react';
import { Award, MapPinned } from 'lucide-react';

export const KeyFiguresSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
             <div className="mb-6 text-edf-orange">
                <Award className="w-16 h-16 stroke-[1.5]" />
             </div>
             <h3 className="text-4xl font-extrabold text-edf-orange mb-4">N°1</h3>
             <p className="text-gray-800 font-medium leading-relaxed px-2">
               et pionnier de l’autoconsommation en France
             </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
             <div className="mb-6 text-edf-orange">
                 {/* Custom Solar Panel SVG */}
                 <svg className="w-16 h-16 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="11" rx="1" />
                    <path d="M3 8.5h18" />
                    <path d="M9 3v11" />
                    <path d="M15 3v11" />
                    <path d="M8 14l-2 6" />
                    <path d="M16 14l2 6" />
                    <path d="M5 20h14" />
                 </svg>
             </div>
             <h3 className="text-4xl font-extrabold text-edf-orange mb-4">20 ans</h3>
             <p className="text-gray-800 font-medium leading-relaxed px-2">
               d’expertise et d’accompagnement tout au long de votre garantie
             </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
             <div className="mb-6 text-edf-orange">
                <MapPinned className="w-16 h-16 stroke-[1.5]" />
             </div>
             <h3 className="text-4xl font-extrabold text-edf-orange mb-4">15 sites</h3>
             <p className="text-gray-800 font-medium leading-relaxed px-2">
               près de chez vous, pour vous assurer une proximité à chaque étape de votre projet
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};