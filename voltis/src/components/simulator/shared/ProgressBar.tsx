import React from "react";
import { useSimulator } from "@simulator/SimulatorContext";

export const ProgressBar: React.FC = () => {
  const { step, totalSteps } = useSimulator();

  return (
    <div className="w-full bg-gray-100 h-1.5 rounded-full mb-8 overflow-hidden flex justify-between items-center relative">
      <div
        className="bg-edf-orange h-1.5 rounded-full transition-all duration-500 ease-out absolute top-0 left-0"
        style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
      />
      <div className="absolute right-0 -top-6 text-xs font-bold text-edf-orange">
        {Math.round(((step + 1) / totalSteps) * 100)}%
      </div>
    </div>
  );
};
