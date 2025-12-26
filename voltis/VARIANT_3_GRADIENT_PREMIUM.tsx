// VARIANTE 3 : Style Gradient Premium

// Pour Question 1 (Suivant uniquement):
<div className="flex justify-end mt-8">
  <button
    onClick={() => handleQuestionNext(1)}
    disabled={!data.userType}
    className="relative px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold hover:from-orange-600 hover:to-orange-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
  >
    <span className="relative z-10">Suivant</span>
    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
  </button>
</div>

// Pour Questions 2-5 (Retour + Suivant):
<div className="flex justify-between mt-8">
  <button
    onClick={handleBack}
    className="relative px-10 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-bold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
  >
    <span className="relative z-10">Retour</span>
  </button>
  <button
    onClick={() => handleQuestionNext(2)} // ou 3, 4, 5 selon la question
    disabled={!data.housingType} // adapter selon le champ
    className="relative px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold hover:from-orange-600 hover:to-orange-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
  >
    <span className="relative z-10">Suivant</span>
    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
  </button>
</div>
