import React from "react";
import { Zap } from "lucide-react";
import { SimulatorProvider, useSimulator } from "./simulator/SimulatorContext";
import { ProgressBar } from "./simulator/shared/ProgressBar";
import { StepUserType } from "./simulator/steps/StepUserType";
import { StepHousingType } from "./simulator/steps/StepHousingType";
import { StepConstructionStatus } from "./simulator/steps/StepConstructionStatus";
import { StepSurface } from "./simulator/steps/StepSurface";
import { StepOccupants } from "./simulator/steps/StepOccupants";
import { StepRoof } from "./simulator/steps/StepRoof";
import { StepSunlight } from "./simulator/steps/StepSunlight";
import { StepPostalCode } from "./simulator/steps/StepPostalCode";
import { StepBill } from "./simulator/steps/StepBill";
import { StepStateAid } from "./simulator/steps/StepStateAid";
import { StepAlreadyInquired } from "./simulator/steps/StepAlreadyInquired";
import { StepProjectReason } from "./simulator/steps/StepProjectReason";
import { StepProjectTimeline } from "./simulator/steps/StepProjectTimeline";
import { StepEmail } from "./simulator/steps/StepEmail";
import { StepContact } from "./simulator/steps/StepContact";
import { SuccessMessage } from "./simulator/steps/SuccessMessage";

const SimulatorContent: React.FC = () => {
  const { step, isSuccess } = useSimulator();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-lg mx-auto relative z-10 border-t-4 border-edf-orange">
      {!isSuccess && <ProgressBar />}

      {isSuccess ? (
        <SuccessMessage />
      ) : (
        <>
          {step === 0 && <StepUserType />}
          {step === 1 && <StepHousingType />}
          {step === 2 && <StepConstructionStatus />}
          {step === 3 && <StepSurface />}
          {step === 4 && <StepOccupants />}
          {step === 5 && <StepRoof />}
          {step === 6 && <StepSunlight />}
          {step === 7 && <StepPostalCode />}
          {step === 8 && <StepBill />}
          {step === 9 && <StepStateAid />}
          {step === 10 && <StepAlreadyInquired />}
          {step === 11 && <StepProjectReason />}
          {step === 12 && <StepProjectTimeline />}
          {step === 13 && <StepEmail />}
          {step === 14 && <StepContact />}
        </>
      )}

      {!isSuccess && (
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
          <Zap className="w-3 h-3 text-edf-orange fill-current" />
          <span>Simulation gratuite et sans engagement</span>
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
