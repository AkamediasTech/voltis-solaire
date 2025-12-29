import React from "react";
import { HeatingType } from "@types";
import type { StepProps } from "@types";
import { CardOptionCompact } from "@simulator/shared/CardOptionCompact";
import { GradientPremiumButtons } from "@simulator/shared/NavigationButtons";
import { CampingGasColorIcon } from "@icons/CampingGasColorIcon";
import { LightBulbColorIcon } from "@icons/LightBulbColorIcon";
import { OilBarrelColorIcon } from "@icons/OilBarrelColorIcon";
import { FireWoodColorIcon } from "@icons/FireWoodColorIcon";

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
        <CardOptionCompact
          label="Fioul"
          value={HeatingType.FUEL_OIL}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon={<OilBarrelColorIcon size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="Gaz"
          value={HeatingType.GAS}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon={<CampingGasColorIcon size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="Électrique"
          value={HeatingType.ELECTRIC}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon={<LightBulbColorIcon size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="Autre"
          value={HeatingType.OTHER}
          currentValue={data.heatingType}
          onChange={(val) => updateData({ heatingType: val as HeatingType })}
          icon={<FireWoodColorIcon size={48} />}
          onSelect={nextStep}
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
