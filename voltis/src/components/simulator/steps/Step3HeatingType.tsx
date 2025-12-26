import React from "react";
import { HeatingType } from "../../../types";
import type { StepProps } from "../../../types";
import { CardOption } from "../shared/CardOption";
import { GradientPremiumButtons } from "../shared/NavigationButtons";

const Step3HeatingType: React.FC<StepProps> = ({
  data,
  updateData,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Quel est votre type de chauffage actuel ?
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <CardOption
          label="Fioul"
          value={HeatingType.FUEL_OIL}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon="🛢️"
        />
        <CardOption
          label="Gaz"
          value={HeatingType.GAS}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon="🔥"
        />
        <CardOption
          label="Électrique"
          value={HeatingType.ELECTRIC}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon="⚡"
        />
        <CardOption
          label="Autre"
          value={HeatingType.OTHER}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon="��"
        />
      </div>

      <GradientPremiumButtons
        onBack={prevStep}
        onNext={nextStep}
        disabled={!data.heatingType}
        showBack={true}
      />
    </div>
  );
};

export default Step3HeatingType;
