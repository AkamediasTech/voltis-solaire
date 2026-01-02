import React from "react";
import { Zap } from "lucide-react";
import { SimulatorProvider, useSimulator } from "./simulator/SimulatorContext";
import { ProgressBar } from "./simulator/shared/ProgressBar";
import { ShimmerBanner } from "./simulator/shared/ShimmerBanner";
import Step1UserType from "./simulator/steps/Step1UserType";
import Step2HousingType from "./simulator/steps/Step2HousingType";
import Step3HeatingType from "./simulator/steps/Step3HeatingType";
import Step4SurfaceArea from "./simulator/steps/Step4SurfaceArea";
import Step5MonthlyBill from "./simulator/steps/Step5MonthlyBill";
import NewStepLocation from "./simulator/steps/NewStepLocation";
import NewStepContactInfo from "./simulator/steps/NewStepContactInfo";
import { SuccessMessage } from "./simulator/steps/SuccessMessage";

const SimulatorContent: React.FC = () => {
  const { step, isSuccess, data, updateData, nextStep, prevStep } =
    useSimulator();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-2xl mx-auto relative z-10 border-t-4 border-edf-orange">
      {!isSuccess && (
        <>
          <div className="mb-8 mx-4 sm:mx-7">
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
            <Step1UserType
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 1 && (
            <Step2HousingType
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 2 && (
            <Step3HeatingType
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {/* {step === 3 && (
            <Step4SurfaceArea
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )} */}
          {step === 3 && (
            <Step5MonthlyBill
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <NewStepLocation
              data={data}
              updateData={updateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 5 && (
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

export const Simulator: React.FC<{ webhookUrl?: string }> = ({
  webhookUrl,
}) => {
  return (
    <SimulatorProvider webhookUrl={webhookUrl}>
      <SimulatorContent />
    </SimulatorProvider>
  );
};

export default Simulator;
