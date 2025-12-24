import React from "react";
import { useSimulator } from "../SimulatorContext";
import { RadioOption } from "../shared/RadioOption";

export const StepAlreadyInquired: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Vous êtes-vous déjà renseigné sur les panneaux solaires ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Oui, plusieurs fois"
          value="Oui, plusieurs fois"
          currentValue={data.alreadyInquired}
          onChange={(val) => {
            updateData({ alreadyInquired: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Oui, une fois"
          value="Oui, une fois"
          currentValue={data.alreadyInquired}
          onChange={(val) => {
            updateData({ alreadyInquired: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Non, jamais"
          value="Non, jamais"
          currentValue={data.alreadyInquired}
          onChange={(val) => {
            updateData({ alreadyInquired: val });
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
