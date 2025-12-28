import React from "react";
import { HousingType } from "@types";
import { useSimulator } from "@simulator/SimulatorContext";
import { RadioOption } from "@simulator/shared/RadioOption";

export const StepHousingType: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quel type de bien possédez-vous ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Une maison"
          value={HousingType.HOUSE}
          currentValue={data.housingType}
          onChange={(val) => {
            updateData({ housingType: val as HousingType });
            nextStep();
          }}
        />
        <RadioOption
          label="Un appartement (non éligible)"
          value={HousingType.APARTMENT}
          currentValue={data.housingType}
          onChange={(val) => {
            updateData({ housingType: val as HousingType });
            nextStep();
          }}
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
