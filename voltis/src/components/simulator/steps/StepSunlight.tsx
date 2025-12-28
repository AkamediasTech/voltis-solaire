import React from "react";
import { Sun, CloudSun, Cloud, HelpCircle } from "lucide-react";
import { useSimulator } from "@simulator/SimulatorContext";
import { RadioOption } from "@simulator/shared/RadioOption";

export const StepSunlight: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quel est l'ensoleillement de votre toit ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Au soleil"
          value="Soleil"
          currentValue={data.sunlight}
          onChange={(val) => {
            updateData({ sunlight: val });
            nextStep();
          }}
          icon={<Sun className="w-5 h-5 text-yellow-500" />}
        />
        <RadioOption
          label="Mi-soleil, mi-ombre"
          value="Mixte"
          currentValue={data.sunlight}
          onChange={(val) => {
            updateData({ sunlight: val });
            nextStep();
          }}
          icon={<CloudSun className="w-5 h-5 text-gray-500" />}
        />
        <RadioOption
          label="À l'ombre"
          value="Ombre"
          currentValue={data.sunlight}
          onChange={(val) => {
            updateData({ sunlight: val });
            nextStep();
          }}
          icon={<Cloud className="w-5 h-5 text-gray-400" />}
        />
        <RadioOption
          label="Je ne sais pas"
          value="Je ne sais pas"
          currentValue={data.sunlight}
          onChange={(val) => {
            updateData({ sunlight: val });
            nextStep();
          }}
          icon={<HelpCircle className="w-5 h-5" />}
        />
      </div>
      <div className="mt-4">
        <button
          onClick={prevStep}
          style={{ cursor: "pointer" }}
          className="text-edf-orange border border-edf-orange px-4 py-2 rounded hover:bg-orange-50 transition-colors text-sm"
        >
          ← Retour
        </button>
      </div>
    </div>
  );
};
