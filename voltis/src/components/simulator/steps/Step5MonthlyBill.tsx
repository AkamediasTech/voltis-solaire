import React from "react";
import type { StepProps } from "@types";
import { CardOptionCompact } from "@simulator/shared/CardOptionCompact";
import { GradientPremiumButtons } from "@simulator/shared/NavigationButtons";
import EuroColorIcon from "@components/icons/EuroColorIcon";
import CoinsColorIcon from "@components/icons/CoinsColorIcon";
import EuroBillColorIcon from "@components/icons/EuroBillColorIcon";
import EuroBillsColorIcon from "@components/icons/EuroBillsColorIcon";
import EuroBillsColorIcon2 from "@components/icons/EuroBillsColorIcon2";
import AtmCardColorIcon from "@components/icons/AtmCardColorIcon";

const Step5MonthlyBill: React.FC<StepProps> = ({
  data,
  updateData,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Montant approximatif de votre facture mensuelle d'électricité
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <CardOptionCompact
          label="Moins de 75€"
          value="LESS_THAN_75"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
          // icon="💰"
          // icon={<EuroColorIcon size={36} />}
          icon={<CoinsColorIcon size={48} />}
        />
        <CardOptionCompact
          label="75€ à 150€"
          value="75_TO_150"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
          // icon="💵"
          // icon={<CoinsColorIcon size={48} />}
          icon={<EuroBillColorIcon size={48} />}
        />
        <CardOptionCompact
          label="150€ à 250€"
          value="150_TO_250"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
          // icon="💸"
          // icon={<EuroBillColorIcon size={48} />}
          // icon={<EuroBillsColorIcon2 size={48} />}
          icon={<EuroBillsColorIcon size={48} />}
        />
        <CardOptionCompact
          label="Plus de 250€"
          value="MORE_THAN_250"
          currentValue={data.monthlyBill}
          onChange={(val) => updateData({ monthlyBill: val })}
          // icon="💳"
          icon={<AtmCardColorIcon size={48} />}
        />
      </div>

      <GradientPremiumButtons
        onBack={prevStep}
        onNext={nextStep}
        disabled={!data.monthlyBill}
        showBack={true}
      />
    </div>
  );
};

export default Step5MonthlyBill;
