import React from "react";
import type { StepProps } from "@types";
import { CardOptionCompact } from "@simulator/shared/CardOptionCompact";
import { GradientPremiumButtons } from "@simulator/shared/NavigationButtons";
import CottageColorIcon from "@components/icons/CottageColorIcon";
import { HouseColorIcon } from "@components/icons/HouseColorIcon";
import { HouseColorIcon2 } from "@components/icons/HouseColorIcon2";
import { HouseColorIcon3 } from "@components/icons/HouseColorIcon3";
import { BigHouseColorIcon } from "@components/icons/BigHouseColorIcon";

const Step4SurfaceArea: React.FC<StepProps> = ({
  data,
  updateData,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Quelle est la surface de votre logement ?
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <CardOptionCompact
          label="Moins de 70 m²"
          value="LESS_THAN_70"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          // icon="📏"
          icon={<CottageColorIcon size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="70 à 100 m²"
          value="70_TO_100"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          // icon="📐"
          icon={<HouseColorIcon size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="100 à 150 m²"
          value="100_TO_150"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          // icon="📊"
          icon={<HouseColorIcon3 size={48} />}
          onSelect={nextStep}
        />
        <CardOptionCompact
          label="Plus de 150 m²"
          value="MORE_THAN_150"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          // icon="📈"
          icon={<BigHouseColorIcon size={68} />}
          onSelect={nextStep}
        />
      </div>

      <GradientPremiumButtons
        onBack={prevStep}
        onNext={nextStep}
        disabled={!data.surfaceArea}
        showBack={true}
      />
    </div>
  );
};

export default Step4SurfaceArea;
