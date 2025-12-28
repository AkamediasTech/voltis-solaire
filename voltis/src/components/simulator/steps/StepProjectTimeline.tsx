import React from "react";
import { useSimulator } from "@simulator/SimulatorContext";
import { RadioOption } from "@simulator/shared/RadioOption";

export const StepProjectTimeline: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quand souhaitez-vous installer des panneaux solaires ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Dès que possible"
          value="Dès que possible"
          currentValue={data.projectTimeline}
          onChange={(val) => {
            updateData({ projectTimeline: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Dans 3 à 6 mois"
          value="3-6 mois"
          currentValue={data.projectTimeline}
          onChange={(val) => {
            updateData({ projectTimeline: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Plus de 6 mois"
          value="+ 6 mois"
          currentValue={data.projectTimeline}
          onChange={(val) => {
            updateData({ projectTimeline: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Cette année"
          value="Cette année"
          currentValue={data.projectTimeline}
          onChange={(val) => {
            updateData({ projectTimeline: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Je ne souhaite pas installer des panneaux solaires"
          value="Pas intéressé"
          currentValue={data.projectTimeline}
          onChange={(val) => {
            updateData({ projectTimeline: val });
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
