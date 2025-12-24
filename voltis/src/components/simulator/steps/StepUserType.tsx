import React from "react";
import { Home, Key } from "lucide-react";
import { UserType } from "../../../types";
import { useSimulator } from "../SimulatorContext";
import { CardOption } from "../shared/CardOption";

export const StepUserType: React.FC = () => {
  const { data, updateData, nextStep } = useSimulator();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">Vous êtes ?</h3>
      <div className="grid grid-cols-2 gap-4">
        <CardOption
          label="PROPRIÉTAIRE"
          value={UserType.OWNER}
          currentValue={data.userType}
          onChange={(val) => {
            updateData({ userType: val as UserType });
            nextStep();
          }}
          icon={<Home className="w-12 h-12 stroke-1" />}
        />
        <CardOption
          label="LOCATAIRE (NON ÉLIGIBLE)"
          value={UserType.TENANT}
          currentValue={data.userType}
          onChange={(val) => {
            updateData({ userType: val as UserType });
            nextStep();
          }}
          icon={<Key className="w-12 h-12 stroke-1" />}
        />
      </div>
    </div>
  );
};
