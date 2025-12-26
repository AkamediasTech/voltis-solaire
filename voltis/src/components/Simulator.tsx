import React from "react";
import { Zap } from "lucide-react";
import { SimulatorProvider, useSimulator } from "./simulator/SimulatorContext";
import { ProgressBar } from "./simulator/shared/ProgressBar";
import { ShimmerBanner } from "./simulator/shared/ShimmerBanner";
import NewStepHousingInfo from "./simulator/steps/NewStepHousingInfo";
import NewStepLocation from "./simulator/steps/NewStepLocation";
import NewStepContactInfo from "./simulator/steps/NewStepContactInfo";
import { SuccessMessage } from "./simulator/steps/SuccessMessage";

const SimulatorContent: React.FC = () => {
  const { step, isSuccess, data, updateData, nextStep, prevStep } =
    useSimulator();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-lg mx-auto relative z-10 border-t-4 border-edf-orange">
      {!isSuccess && (
        <>
          <div className="mb-8">
            <ShimmerBanner />
          </div>

          <ProgressBar />
        </>
      )}

      {isSuccess ? (
        <SuccessMessage />
      ) : (
        <>
          {step === 0 && (
            <NewStepHousingInfo
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 1 && (
            <NewStepLocation
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 2 && (
            <NewStepContactInfo
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
        </>
      )}

      {!isSuccess && (
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
          <Zap className="w-3 h-3 text-edf-orange fill-current" />
          <span>Traitement conforme au RGPD</span>
        </div>
      )}
    </div>
  );
};

export const Simulator: React.FC = () => {
  return (
    <SimulatorProvider>
      <SimulatorContent />
    </SimulatorProvider>
  );
};

export default Simulator;
