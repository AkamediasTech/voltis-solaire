import React from "react";
import { Info } from "lucide-react";
import { useSimulator } from "../SimulatorContext";
import { Button } from "../../Button";

export const StepContact: React.FC = () => {
  const {
    data,
    updateData,
    prevStep,
    setIsSubmitting,
    setIsSuccess,
    isSubmitting,
  } = useSimulator();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
      <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 leading-tight">
        Remplissez le formulaire ci-dessous si vous souhaitez qu'un conseiller
        d'EDF solutions solaires vous appelle pour échanger autour de votre
        projet photovoltaïque
      </h3>

      <div className="flex items-start gap-3 mb-6 text-gray-600">
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
        <p className="text-sm">
          Dernière étape ! Remplissez vos coordonnées pour recevoir l'appel d'un
          expert.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <input
            required
            type="text"
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-edf-orange focus:ring-1 focus:ring-edf-orange outline-none text-lg placeholder-gray-400"
            placeholder="Prénom"
            value={data.firstName}
            onChange={(e) => updateData({ firstName: e.target.value })}
          />
        </div>
        <div>
          <input
            required
            type="text"
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-edf-orange focus:ring-1 focus:ring-edf-orange outline-none text-lg placeholder-gray-400"
            placeholder="Nom"
            value={data.lastName}
            onChange={(e) => updateData({ lastName: e.target.value })}
          />
        </div>
        <div>
          <input
            required
            type="tel"
            pattern="[0-9]{10}"
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-edf-orange focus:ring-1 focus:ring-edf-orange outline-none text-lg placeholder-gray-400"
            placeholder="Numéro de téléphone"
            value={data.phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
              updateData({ phone: val });
            }}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Vous disposez du droit de vous inscrire sur la liste d'opposition au
        démarchage téléphonique (www.bloctel.gouv.fr).
      </p>

      <div className="flex items-start gap-3 mt-4">
        <input
          type="checkbox"
          id="newsletter"
          checked={data.newsletter}
          onChange={(e) => updateData({ newsletter: e.target.checked })}
          className="mt-1 w-5 h-5 text-edf-orange border-gray-300 rounded focus:ring-edf-orange"
        />
        <label
          htmlFor="newsletter"
          className="text-sm text-gray-700 leading-tight"
        >
          Je souhaite être informé(e) par email et SMS des actualités et offres
          d'EDF solutions solaires.
        </label>
      </div>

      <div className="flex justify-between items-center gap-4 pt-6">
        <button
          type="button"
          onClick={prevStep}
          style={{ cursor: "pointer" }}
          className="text-edf-orange border border-edf-orange px-6 py-3 rounded hover:bg-orange-50 transition-colors font-medium"
        >
          ← Retour
        </button>
        <Button
          type="submit"
          className="flex-grow py-4 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Estimer vos économies"}
        </Button>
      </div>

      <div className="flex items-start gap-2 mt-6 text-[10px] text-gray-500 leading-normal text-justify">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p>
          En validant ce formulaire, vous consentez à l'utilisation de vos
          données personnelles par EDF solutions solaires, responsable de
          traitements, aux fins de vous fournir un service d'assistance
          téléphonique dans le cadre de votre projet solaire et, lorsque cela
          est nécessaire, de vous envoyer des emails et/ou SMS aux fins de suivi
          de votre demande et de la relation commerciale qui peut en découler.
          Les champs obligatoires vous sont signalés dans le formulaire par un
          astérisque. Par ailleurs, en cochant la case ci-dessus, vous consentez
          au traitement de vos données personnelles par EDF solutions solaires à
          des fins de vous envoyer des messages promotionnels par email et/ou
          sms. Pour en savoir plus sur la gestion de vos données personnelles
          par EDF solutions solaires et vos droits, notamment d'accès, de
          rectification, d'effacement, d'opposition ou de retrait de votre
          consentement à recevoir des messages promotionnels, consultez la
          politique de confidentialité d'EDF solutions solaires.
        </p>
      </div>
    </form>
  );
};
