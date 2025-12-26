import React, { createContext, useContext, useState } from "react";
import type { SimulationData } from "../../types";

interface SimulatorContextType {
  step: number;
  data: SimulationData;
  isSubmitting: boolean;
  isSuccess: boolean;
  totalSteps: number;
  updateData: (fields: Partial<SimulationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setIsSubmitting: (value: boolean) => void;
  setIsSuccess: (value: boolean) => void;
}

const SimulatorContext = createContext<SimulatorContextType | undefined>(
  undefined
);

export const useSimulator = () => {
  const context = useContext(SimulatorContext);
  if (!context) {
    throw new Error("useSimulator must be used within SimulatorProvider");
  }
  return context;
};

const INITIAL_DATA: SimulationData = {
  userType: null,
  housingType: null,
  heatingType: null,
  constructionStatus: null,
  postalCode: "",
  city: "",
  surfaceArea: null,
  occupants: null,
  roofShape: null,
  sunlight: null,
  monthlyBill: null,
  stateAid: null,
  alreadyInquired: null,
  projectReason: null,
  projectTimeline: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  newsletter: false,
};

export const SimulatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SimulationData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 7;

  const updateData = (fields: Partial<SimulationData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <SimulatorContext.Provider
      value={{
        step,
        data,
        isSubmitting,
        isSuccess,
        totalSteps,
        updateData,
        nextStep,
        prevStep,
        setIsSubmitting,
        setIsSuccess,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
};
