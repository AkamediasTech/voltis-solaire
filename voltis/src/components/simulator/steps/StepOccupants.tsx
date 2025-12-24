import React from "react";
import { useSimulator } from "../SimulatorContext";
import { RadioOption } from "../shared/RadioOption";

export const StepOccupants: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Combien de personnes vivent dans votre logement ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="1-2 personnes"
          value="1-2"
          currentValue={data.occupants}
          onChange={(val) => {
            updateData({ occupants: val });
            nextStep();
          }}
        />
        <RadioOption
          label="3-5 personnes"
          value="3-5"
          currentValue={data.occupants}
          onChange={(val) => {
            updateData({ occupants: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Plus de 5 personnes"
          value="> 5"
          currentValue={data.occupants}
          onChange={(val) => {
            updateData({ occupants: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Je ne sais pas"
          value="Je ne sais pas"
          currentValue={data.occupants}
          onChange={(val) => {
            updateData({ occupants: val });
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
