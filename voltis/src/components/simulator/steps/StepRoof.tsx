import React from "react";
import { Triangle, Home, Box, HelpCircle } from "lucide-react";
import { useSimulator } from "../SimulatorContext";
import { RadioOption } from "../shared/RadioOption";

export const StepRoof: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quelle est la forme de votre toit ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Toit en pente"
          value="Pente"
          currentValue={data.roofShape}
          onChange={(val) => {
            updateData({ roofShape: val });
            nextStep();
          }}
          icon={<Triangle className="w-5 h-5" />}
        />
        <RadioOption
          label="Toit à pignon"
          value="Pignon"
          currentValue={data.roofShape}
          onChange={(val) => {
            updateData({ roofShape: val });
            nextStep();
          }}
          icon={<Home className="w-5 h-5" />}
        />
        <RadioOption
          label="Toit plat"
          value="Plat"
          currentValue={data.roofShape}
          onChange={(val) => {
            updateData({ roofShape: val });
            nextStep();
          }}
          icon={<Box className="w-5 h-5" />}
        />
        <RadioOption
          label="Je ne sais pas"
          value="Je ne sais pas"
          currentValue={data.roofShape}
          onChange={(val) => {
            updateData({ roofShape: val });
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
