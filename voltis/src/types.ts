export enum UserType {
  OWNER = "OWNER",
  TENANT = "TENANT",
}

export enum HousingType {
  HOUSE = "HOUSE",
  APARTMENT = "APARTMENT",
}

export enum HeatingType {
  FUEL_OIL = "FUEL_OIL",
  GAS = "GAS",
  ELECTRIC = "ELECTRIC",
  OTHER = "OTHER",
}

export interface SimulationData {
  userType: UserType | null;
  housingType: HousingType | null;
  heatingType: HeatingType | null;
  constructionStatus: string | null;
  postalCode: string;
  city: string;
  surfaceArea: string | null;
  occupants: string | null;
  roofShape: string | null;
  sunlight: string | null;
  monthlyBill: string | null;
  stateAid: string | null;
  alreadyInquired: string | null;
  projectReason: string | null;
  projectTimeline: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  newsletter: boolean;
}

export interface StepProps {
  data: SimulationData;
  updateData: (fields: Partial<SimulationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}
