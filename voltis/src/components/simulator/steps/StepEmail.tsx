import React from "react";
import { Info, ArrowRight } from "lucide-react";
import { useSimulator } from "../SimulatorContext";
import { Button } from "../../Button";

export const StepEmail: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">
        A quel email pouvons-nous vous contacter ?
      </h3>

      <div className="flex items-start gap-3 mb-6 text-gray-600 bg-gray-50 p-3 rounded-lg">
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
        <p className="text-sm">
          Génial ! Nous avons trouvé un professionnel près de chez vous !
        </p>
      </div>

      <div>
        <input
          required
          type="email"
          className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-edf-orange focus:ring-1 focus:ring-edf-orange outline-none text-lg placeholder-gray-400"
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter" && data.email.includes("@")) {
              nextStep();
            }
          }}
        />
      </div>

      <div className="flex justify-between items-center pt-8">
        <button
          onClick={prevStep}
          style={{ cursor: "pointer" }}
          className="text-edf-orange border border-edf-orange px-4 py-2 rounded hover:bg-orange-50 transition-colors text-sm"
        >
          ← Retour
        </button>
        <Button
          onClick={nextStep}
          disabled={!data.email || !data.email.includes("@")}
          className="flex items-center gap-2"
        >
          Continuer <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
