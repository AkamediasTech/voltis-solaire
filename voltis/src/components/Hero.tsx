import React from 'react';
import { Simulator } from './Simulator';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] bg-edf-blue flex flex-col">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="Panneaux solaires sur toit" 
          className="w-full h-full object-cover opacity-20 md:opacity-100 md:object-right"
        />
        {/* Gradient Overlay for text readability on Desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-edf-blue/90 via-edf-blue/70 to-edf-blue/90 md:bg-gradient-to-r md:from-edf-blue md:via-edf-blue/80 md:to-transparent"></div>
      </div>

      <div className="relative z-10 flex-grow flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
                <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <span className="text-white text-xs font-medium">4.8/5 sur Trustpilot</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Produisez votre propre électricité <span className="text-edf-orange">verte</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Réduisez jusqu'à <span className="font-bold text-white">60%</span> de vos factures d'énergie grâce à l'autoconsommation. Profitez des aides de l'État en 2025.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 text-sm font-medium text-blue-200">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-edf-orange"></div>
                    Installation clé en main
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-edf-orange"></div>
                    Garantie 25 ans
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-edf-orange"></div>
                    Filiale d'EDF
                </div>
              </div>
            </div>

            {/* Right Content: Simulator */}
            <div className="lg:col-span-5 w-full">
               <Simulator />
            </div>

          </div>
        </div>
      </div>
      
      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-current w-full h-auto block">
            <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};