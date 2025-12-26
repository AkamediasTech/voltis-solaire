// VARIANTE 1 : Style Moderne avec Icônes et Animation

// Pour Question 1 (Suivant uniquement):
<div className="flex justify-end mt-8">
  <button
    onClick={() => handleQuestionNext(1)}
    disabled={!data.userType}
    className="group px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:translate-x-1 flex items-center gap-2"
  >
    Suivant
    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>
</div>

// Pour Questions 2-5 (Retour + Suivant):
<div className="flex justify-between mt-8">
  <button
    onClick={handleBack}
    className="group px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-x-1 flex items-center gap-2"
  >
    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
    </svg>
    Retour
  </button>
  <button
    onClick={() => handleQuestionNext(2)} // ou 3, 4, 5 selon la question
    disabled={!data.housingType} // adapter selon le champ
    className="group px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:translate-x-1 flex items-center gap-2"
  >
    Suivant
    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>
</div>
