import React from "react";
import { UserType } from "../../../types";
import type { StepProps } from "../../../types";
import { CardOption } from "../shared/CardOption";
import { GradientPremiumButtons } from "../shared/NavigationButtons";
import { HouseColorIcon } from "../../icons/HouseColorIcon";
import { SurrogateKeyColorIcon } from "../../icons/SurrogateKeyColorIcon";

const Step1UserType: React.FC<StepProps> = ({ data, updateData, nextStep }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Êtes-vous propriétaire ou locataire ?
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <CardOption
          label="Propriétaire"
          value={UserType.OWNER}
          currentValue={data.userType}
          onChange={(val) => updateData({ userType: val as UserType })}
          // icon="👤"
          icon={<SurrogateKeyColorIcon size={48} />}
        />
        <CardOption
          label="Locataire"
          value={UserType.TENANT}
          currentValue={data.userType}
          onChange={(val) => updateData({ userType: val as UserType })}
          icon={<HouseColorIcon size={48} />}
        />
      </div>

      <GradientPremiumButtons
        onNext={nextStep}
        disabled={!data.userType}
        showBack={false}
      />
    </div>
  );
};

export default Step1UserType;
