import React from "react";
import { useSimulator } from "@simulator/SimulatorContext";
import { RadioOption } from "@simulator/shared/RadioOption";

export const StepConstructionStatus: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quel est son état ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Terminé"
          value="Terminé"
          currentValue={data.constructionStatus}
          onChange={(val) => {
            updateData({ constructionStatus: val });
            nextStep();
          }}
        />
        <RadioOption
          label="En construction"
          value="En construction"
          currentValue={data.constructionStatus}
          onChange={(val) => {
            updateData({ constructionStatus: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Pas encore acheté"
          value="Pas encore acheté"
          currentValue={data.constructionStatus}
          onChange={(val) => {
            updateData({ constructionStatus: val });
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
