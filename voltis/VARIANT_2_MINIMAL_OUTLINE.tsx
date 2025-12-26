// VARIANTE 2 : Style Minimaliste avec Bordure

// Pour Question 1 (Suivant uniquement):
<div className="flex justify-end mt-8">
  <button
    onClick={() => handleQuestionNext(1)}
    disabled={!data.userType}
    className="px-10 py-4 bg-white border-2 border-orange-500 text-orange-500 rounded-lg font-bold hover:bg-orange-500 hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-all duration-300 uppercase tracking-wide text-sm"
  >
    Suivant →
  </button>
</div>

// Pour Questions 2-5 (Retour + Suivant):
<div className="flex justify-between mt-8">
  <button
    onClick={handleBack}
    className="px-10 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 uppercase tracking-wide text-sm"
  >
    ← Retour
  </button>
  <button
    onClick={() => handleQuestionNext(2)} // ou 3, 4, 5 selon la question
    disabled={!data.housingType} // adapter selon le champ
    className="px-10 py-4 bg-white border-2 border-orange-500 text-orange-500 rounded-lg font-bold hover:bg-orange-500 hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-all duration-300 uppercase tracking-wide text-sm"
  >
    Suivant →
  </button>
</div>
