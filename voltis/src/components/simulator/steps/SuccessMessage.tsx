import React from "react";
import { Check } from "lucide-react";
import { useSimulator } from "@simulator/SimulatorContext";

export const SuccessMessage: React.FC = () => {
  const { data } = useSimulator();

  return (
    <div className="text-center space-y-6 py-10 animate-fadeIn">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-edf-blue">Demande reçue !</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        Merci {data.firstName}. Votre demande d'étude solaire pour votre
        logement à <span className="font-semibold">{data.postalCode}</span> a
        bien été enregistrée.
      </p>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 max-w-sm mx-auto mt-6">
        <p className="text-edf-blue font-semibold mb-2">Prochaine étape :</p>
        <p className="text-sm text-gray-600">
          Un conseiller expert vous appellera sous 24h (numéro commençant par
          01, 04 ou 09) pour confirmer vos données.
        </p>
      </div>
    </div>
  );
};
