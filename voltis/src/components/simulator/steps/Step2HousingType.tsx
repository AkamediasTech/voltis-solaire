import React from "react";
import { HousingType } from "@types";
import type { StepProps } from "@types";
import { CardOptionCompact } from "@simulator/shared/CardOptionCompact";
import { GradientPremiumButtons } from "@simulator/shared/NavigationButtons";
import { HouseColorIcon } from "@icons/HouseColorIcon";
import { RoomKeyColorIcon } from "@icons/RoomKeyColorIcon";

const Step2HousingType: React.FC<StepProps> = ({
  data,
  updateData,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Quel type de logement ?
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <CardOptionCompact
          label="Maison"
          value={HousingType.HOUSE}
          currentValue={data.housingType}
          onChange={(val) => updateData({ housingType: val as HousingType })}
          icon={<HouseColorIcon size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="Appartement"
          value={HousingType.APARTMENT}
          currentValue={data.housingType}
          onChange={(val) => updateData({ housingType: val as HousingType })}
          icon={<RoomKeyColorIcon size={48} />}
          onSelect={nextStep}
        />
      </div>

      <GradientPremiumButtons
        onBack={prevStep}
        onNext={nextStep}
        disabled={!data.housingType}
        showBack={true}
      />
    </div>
  );
};

export default Step2HousingType;
