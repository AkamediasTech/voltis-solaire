import React from "react";

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext: () => void;
  disabled?: boolean;
  showBack?: boolean;
  nextLabel?: string;
  backLabel?: string;
}

// Variante 1 : Moderne avec Icônes
export const ModernIconButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
  disabled = false,
  showBack = true,
}) => (
  <div className="mt-8">
    <p className="text-xs text-gray-500 mb-2">
      Variante 1 - Moderne avec Icônes
    </p>
    <div className={`flex ${showBack ? "justify-between" : "justify-end"}`}>
      {showBack && onBack && (
        <button
          onClick={onBack}
          className="group px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-x-1 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Retour
        </button>
      )}
      <button
        onClick={onNext}
        disabled={disabled}
        className="group px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:translate-x-1 flex items-center gap-2"
      >
        Suivant
        <svg
          className="w-5 h-5 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
  </div>
);

// Variante 2 : Minimaliste avec Bordure
export const MinimalOutlineButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
  disabled = false,
  showBack = true,
}) => (
  <div className="mt-4">
    <p className="text-xs text-gray-500 mb-2">
      Variante 2 - Minimaliste avec Bordure
    </p>
    <div className={`flex ${showBack ? "justify-between" : "justify-end"}`}>
      {showBack && onBack && (
        <button
          onClick={onBack}
          className="px-10 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 uppercase tracking-wide text-sm"
        >
          ← Retour
        </button>
      )}
      <button
        onClick={onNext}
        disabled={disabled}
        className="px-10 py-4 bg-white border-2 border-orange-500 text-orange-500 rounded-lg font-bold hover:bg-orange-500 hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-all duration-300 uppercase tracking-wide text-sm"
      >
        Suivant →
      </button>
    </div>
  </div>
);

// Variante 3 : Gradient Premium
export const GradientPremiumButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
  disabled = false,
  showBack = true,
  nextLabel = "Suivant",
  backLabel = "Retour",
}) => (
  <div className="mt-4">
    {/* <p className="text-xs text-gray-500 mb-2">Variante 3 - Gradient Premium</p> */}
    <div
      className={`flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 ${
        showBack ? "sm:justify-between" : "sm:justify-end"
      }`}
    >
      {showBack && onBack && (
        <button
          onClick={onBack}
          className="cursor-pointer relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-bold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto text-center text-sm sm:text-base"
        >
          <span className="relative z-10">{backLabel}</span>
        </button>
      )}
      {/* Version bleue - commentée */}
      {/* <button
        onClick={onNext}
        disabled={disabled}
        className="cursor-pointer relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden w-full sm:w-auto text-center text-sm sm:text-base"
      >
        <span className="relative z-10">{nextLabel}</span>
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </button> */}
      {/* Version orange */}
      <button
        onClick={onNext}
        disabled={disabled}
        className="cursor-pointer relative px-6 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-edf-orange to-orange-500 text-white rounded-full font-bold hover:from-orange-600 hover:to-orange-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden w-full sm:w-auto text-center text-sm sm:text-base"
      >
        <span className="relative z-10">{nextLabel}</span>
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </button>
    </div>
  </div>
);
