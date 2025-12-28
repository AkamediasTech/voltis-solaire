import React from "react";
import { useSimulator } from "@simulator/SimulatorContext";
import { RadioOption } from "@simulator/shared/RadioOption";

export const StepProjectReason: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Pourquoi souhaitez-vous installer des panneaux solaires ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Économiser sur mes factures d'électricité"
          value="Économiser"
          currentValue={data.projectReason}
          onChange={(val) => {
            updateData({ projectReason: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Utiliser une énergie renouvelable"
          value="Écologie"
          currentValue={data.projectReason}
          onChange={(val) => {
            updateData({ projectReason: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Revendre mon énergie"
          value="Revente"
          currentValue={data.projectReason}
          onChange={(val) => {
            updateData({ projectReason: val });
            nextStep();
          }}
        />
        <RadioOption
          label="Je ne souhaite pas installer des panneaux solaires"
          value="Pas intéressé"
          currentValue={data.projectReason}
          onChange={(val) => {
            updateData({ projectReason: val });
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
