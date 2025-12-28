import React from "react";
import { useSimulator } from "@simulator/SimulatorContext";
import { RadioOption } from "@simulator/shared/RadioOption";
import { Button } from "@components/Button";

export const StepBill: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Quel est le montant de votre facture d'électricité mensuelle ?
      </h3>
      <div className="space-y-3">
        <RadioOption
          label="Moins de 50€"
          value="< 50"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
        />
        <RadioOption
          label="Entre 50€ et 100€"
          value="50-100"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
        />
        <RadioOption
          label="Entre 100€ et 200€"
          value="100-200"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
        />
        <RadioOption
          label="Plus de 200€"
          value="> 200"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
        />
      </div>

      <div className="flex justify-between items-center pt-4 mt-6">
        <button
          onClick={prevStep}
          style={{ cursor: "pointer" }}
          className="text-edf-orange border border-edf-orange px-4 py-2 rounded hover:bg-orange-50 transition-colors text-sm"
        >
          ← Retour
        </button>
        <Button
          onClick={nextStep}
          disabled={!data.monthlyBill}
          className="flex items-center gap-2"
        >
          Continuer
        </Button>
      </div>
    </div>
  );
};
