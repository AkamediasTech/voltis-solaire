import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useSimulator } from "@simulator/SimulatorContext";
import { Button } from "@components/Button";

export const StepPostalCode: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-2">
        Où se situe votre logement ?
      </h3>
      <p className="text-gray-500 text-center text-sm mb-6">
        Pour calculer l'ensoleillement de votre région.
      </p>

      <div className="max-w-xs mx-auto">
        <div className="relative">
          <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Code Postal (ex: 69002)"
            value={data.postalCode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 5);
              updateData({ postalCode: val });
            }}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-edf-orange focus:ring-0 outline-none transition-colors text-lg"
            autoFocus
          />
        </div>
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
          disabled={data.postalCode.length < 5}
          className="flex items-center gap-2"
        >
          Continuer <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
