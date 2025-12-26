import React from "react";
import type { StepProps } from "../../../types";
import { CardOption } from "../shared/CardOption";
import { GradientPremiumButtons } from "../shared/NavigationButtons";

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
        <CardOption
          label="Moins de 70 m²"
          value="LESS_THAN_70"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          icon="📏"
        />
        <CardOption
          label="70 à 100 m²"
          value="70_TO_100"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          icon="📐"
        />
        <CardOption
          label="100 à 150 m²"
          value="100_TO_150"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          icon="📊"
        />
        <CardOption
          label="Plus de 150 m²"
          value="MORE_THAN_150"
          currentValue={data.surfaceArea}
          onChange={(val) => updateData({ surfaceArea: val })}
          icon="📈"
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
