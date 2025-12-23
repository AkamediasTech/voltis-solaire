import React from 'react';

export const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="relative flex items-center justify-center">
                {/* Simplified SVG representation of a Turbine/Sun logo style */}
                <div className="w-10 h-10 bg-edf-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  e
                </div>
                <div className="absolute -top-1 -right-1">
                    <div className="w-4 h-4 bg-edf-orange rounded-full border-2 border-white"></div>
                </div>
            </div>
            <div className="flex flex-col">
              <span className="text-edf-blue font-bold text-xl leading-none tracking-tight">SOLUTIONS</span>
              <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">Solaires</span>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="bg-edf-blue text-white px-4 md:px-6 py-2.5 rounded-full text-[11px] md:text-sm font-bold hover:bg-edf-lightBlue transition-all shadow-md transform active:scale-95 whitespace-nowrap"
            >
              <span className="md:hidden">Bilan Solaire Gratuit</span>
              <span className="hidden md:inline">Obtenir mon Bilan Solaire Gratuit</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};