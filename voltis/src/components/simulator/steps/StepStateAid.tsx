import React from "react";
import { useSimulator } from "../SimulatorContext";
import { RadioOption } from "../shared/RadioOption";

export const StepStateAid: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Êtes-vous intéressé par les aides de l'État ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Oui"
          value="Oui"
          currentValue={data.stateAid}
          onChange={(val) => {
            updateData({ stateAid: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Non"
          value="Non"
          currentValue={data.stateAid}
          onChange={(val) => {
            updateData({ stateAid: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Je ne sais pas"
          value="Je ne sais pas"
          currentValue={data.stateAid}
          onChange={(val) => {
            updateData({ stateAid: val });
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
