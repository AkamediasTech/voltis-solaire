import React, { useState } from "react";
import { useSimulator } from "../SimulatorContext";
import { UserType, HousingType, HeatingType } from "../../../types";
import type { StepProps } from "../../../types";
import { CardOption } from "../shared/CardOption";
import {
  ModernIconButtons,
  MinimalOutlineButtons,
  GradientPremiumButtons,
} from "../shared/NavigationButtons";

const NewStepHousingInfo: React.FC<StepProps> = ({
  data,
  updateData,
  nextStep,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleQuestionNext = (questionNumber: number) => {
    if (questionNumber < 5) {
      setCurrentQuestion(questionNumber + 1);
    } else {
      // Last question, proceed to next step
      nextStep();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Question 1: Propriétaire ou Locataire */}
      {currentQuestion === 1 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Êtes-vous propriétaire ou locataire ?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <CardOption
              label="Propriétaire"
              value={UserType.OWNER}
              currentValue={data.userType}
              onChange={(val) => updateData({ userType: val as UserType })}
              icon="👤"
            />
            <CardOption
              label="Locataire"
              value={UserType.TENANT}
              currentValue={data.userType}
              onChange={(val) => updateData({ userType: val as UserType })}
              icon="🏠"
            />
          </div>

          {/* Variante 1 : Moderne avec Icônes */}
          {/* <ModernIconButtons
            onNext={() => handleQuestionNext(1)}
            disabled={!data.userType}
            showBack={false}
          /> */}

          {/* Variante 2 : Minimaliste avec Bordure */}
          {/* <MinimalOutlineButtons
            onNext={() => handleQuestionNext(1)}
            disabled={!data.userType}
            showBack={false}
          /> */}

          {/* Variante 3 : Gradient Premium */}
          <GradientPremiumButtons
            onNext={() => handleQuestionNext(1)}
            disabled={!data.userType}
            showBack={false}
          />
        </div>
      )}

      {/* Question 2: Maison ou Appartement */}
      {currentQuestion === 2 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Quel type de logement ?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <CardOption
              label="Maison"
              value={HousingType.HOUSE}
              currentValue={data.housingType}
              onChange={(val) =>
                updateData({ housingType: val as HousingType })
              }
              icon="🏡"
            />
            <CardOption
              label="Appartement"
              value={HousingType.APARTMENT}
              currentValue={data.housingType}
              onChange={(val) =>
                updateData({ housingType: val as HousingType })
              }
              icon="🏢"
            />
          </div>

          {/* Variante 1 : Moderne avec Icônes */}
          {/* <ModernIconButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(2)}
            disabled={!data.housingType}
            showBack={true}
          /> */}

          {/* Variante 2 : Minimaliste avec Bordure */}
          {/* <MinimalOutlineButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(2)}
            disabled={!data.housingType}
            showBack={true}
          /> */}

          {/* Variante 3 : Gradient Premium */}
          <GradientPremiumButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(2)}
            disabled={!data.housingType}
            showBack={true}
          />
        </div>
      )}

      {/* Question 3: Type de chauffage */}
      {currentQuestion === 3 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Quel est votre type de chauffage actuel ?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <CardOption
              label="Fioul"
              value={HeatingType.FUEL_OIL}
              currentValue={data.heatingType}
              onChange={(val) =>
                updateData({ heatingType: val as HeatingType })
              }
              icon="🛢️"
            />
            <CardOption
              label="Gaz"
              value={HeatingType.GAS}
              currentValue={data.heatingType}
              onChange={(val) =>
                updateData({ heatingType: val as HeatingType })
              }
              icon="🔥"
            />
            <CardOption
              label="Électrique"
              value={HeatingType.ELECTRIC}
              currentValue={data.heatingType}
              onChange={(val) =>
                updateData({ heatingType: val as HeatingType })
              }
              icon="⚡"
            />
            <CardOption
              label="Autre"
              value={HeatingType.OTHER}
              currentValue={data.heatingType}
              onChange={(val) =>
                updateData({ heatingType: val as HeatingType })
              }
              icon="🔧"
            />
          </div>

          {/* Variante 1 : Moderne avec Icônes */}
          {/* <ModernIconButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(3)}
            disabled={!data.heatingType}
            showBack={true}
          /> */}

          {/* Variante 2 : Minimaliste avec Bordure */}
          {/* <MinimalOutlineButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(3)}
            disabled={!data.heatingType}
            showBack={true}
          /> */}

          {/* Variante 3 : Gradient Premium */}
          <GradientPremiumButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(3)}
            disabled={!data.heatingType}
            showBack={true}
          />
        </div>
      )}

      {/* Question 4: Surface du logement */}
      {currentQuestion === 4 && (
        <div>
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

          {/* Variante 1 : Moderne avec Icônes */}
          {/* <ModernIconButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(4)}
            disabled={!data.surfaceArea}
            showBack={true}
          /> */}

          {/* Variante 2 : Minimaliste avec Bordure */}
          {/* <MinimalOutlineButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(4)}
            disabled={!data.surfaceArea}
            showBack={true}
          /> */}

          {/* Variante 3 : Gradient Premium */}
          <GradientPremiumButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(4)}
            disabled={!data.surfaceArea}
            showBack={true}
          />
        </div>
      )}

      {/* Question 5: Facture mensuelle d'électricité */}
      {currentQuestion === 5 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Montant approximatif de votre facture mensuelle d'électricité
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <CardOption
              label="Moins de 75€"
              value="LESS_THAN_75"
              currentValue={data.monthlyBill}
              onChange={(val) => updateData({ monthlyBill: val })}
              icon="💰"
            />
            <CardOption
              label="75€ à 150€"
              value="75_TO_150"
              currentValue={data.monthlyBill}
              onChange={(val) => updateData({ monthlyBill: val })}
              icon="💵"
            />
            <CardOption
              label="150€ à 250€"
              value="150_TO_250"
              currentValue={data.monthlyBill}
              onChange={(val) => updateData({ monthlyBill: val })}
              icon="💸"
            />
            <CardOption
              label="Plus de 250€"
              value="MORE_THAN_250"
              currentValue={data.monthlyBill}
              onChange={(val) => updateData({ monthlyBill: val })}
              icon="💳"
            />
          </div>

          {/* Variante 1 : Moderne avec Icônes */}
          {/* <ModernIconButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(5)}
            disabled={!data.monthlyBill}
            showBack={true}
          /> */}

          {/* Variante 2 : Minimaliste avec Bordure */}
          {/* <MinimalOutlineButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(5)}
            disabled={!data.monthlyBill}
            showBack={true}
          /> */}

          {/* Variante 3 : Gradient Premium */}
          <GradientPremiumButtons
            onBack={handleBack}
            onNext={() => handleQuestionNext(5)}
            disabled={!data.monthlyBill}
            showBack={true}
          />
        </div>
      )}
    </div>
  );
};

export default NewStepHousingInfo;
