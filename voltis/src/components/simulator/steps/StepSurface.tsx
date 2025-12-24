import React from "react";
import { Home, Building2 } from "lucide-react";
import { useSimulator } from "../SimulatorContext";
import { CardOption } from "../shared/CardOption";

export const StepSurface: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quelle est la surface de votre maison ?
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <CardOption
          label="MOINS DE 100 M2"
          value="< 100"
          currentValue={data.surfaceArea}
          onChange={(val) => {
            updateData({ surfaceArea: val });
            nextStep();
          }}
          icon={<Home className="w-10 h-10 stroke-1" />}
        />
        <CardOption
          label="DE 101 À 175 M2"
          value="101-175"
          currentValue={data.surfaceArea}
          onChange={(val) => {
            updateData({ surfaceArea: val });
            nextStep();
          }}
          icon={<Building2 className="w-12 h-12 stroke-1" />}
        />
        <CardOption
          label="PLUS DE 175 M2"
          value="> 175"
          currentValue={data.surfaceArea}
          onChange={(val) => {
            updateData({ surfaceArea: val });
            nextStep();
          }}
          icon={<Building2 className="w-14 h-14 stroke-1" />}
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
