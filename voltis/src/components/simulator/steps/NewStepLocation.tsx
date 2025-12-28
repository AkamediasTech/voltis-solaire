import React, { useState, useEffect } from "react";
import type { StepProps } from "@types";
import { useCityAutocomplete } from "@simulator/hooks/useCityAutocomplete";
import { GradientPremiumButtons } from "@simulator/shared/NavigationButtons";
import { SelectCity } from "@simulator/shared/SelectCity";

const NewStepLocation: React.FC<StepProps> = ({
  data,
  updateData,
  nextStep,
  prevStep,
}) => {
  const [localPostalCode, setLocalPostalCode] = useState(data.postalCode || "");
  const { cities, loading, error } = useCityAutocomplete(localPostalCode);

  // Update context when postal code changes
  useEffect(() => {
    updateData({ postalCode: localPostalCode });
  }, [localPostalCode]);

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length <= 5) {
      setLocalPostalCode(value);
      // Reset city when postal code changes
      if (data.city) {
        updateData({ city: "" });
      }
    }
  };

  const handleCitySelect = (cityName: string) => {
    updateData({ city: cityName });
  };

  const handleNext = () => {
    if (localPostalCode.length === 5 && data.city) {
      nextStep();
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Où se situe votre logement ?
      </h3>

      {/* Postal Code Input */}
      <div>
        <label
          htmlFor="postalCode"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Code postal *
        </label>
        <input
          id="postalCode"
          type="text"
          value={localPostalCode}
          onChange={handlePostalCodeChange}
          placeholder="Ex: 75001"
          maxLength={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      {/* City Selection */}
      {localPostalCode.length === 5 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ville *
          </label>
          <SelectCity
            cities={cities}
            selectedCity={data.city}
            onChange={handleCitySelect}
            loading={loading}
            error={error}
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <GradientPremiumButtons
        onBack={prevStep}
        onNext={handleNext}
        disabled={localPostalCode.length !== 5 || !data.city}
        showBack={true}
        backLabel="Précédent"
      />
    </div>
  );
};

export default NewStepLocation;
