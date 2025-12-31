import React, { useState } from "react";
import type { StepProps } from "@types";
import { GradientPremiumButtons } from "@simulator/shared/NavigationButtons";
import { useSimulator } from "@simulator/SimulatorContext";

// Helper functions to format data for webhook
const formatHeatingType = (heatingType: string | null): string => {
  const mapping: Record<string, string> = {
    FUEL_OIL: "Fioul",
    GAS: "Gaz",
    ELECTRIC: "Électrique",
    OTHER: "Autre",
  };
  return heatingType ? mapping[heatingType] || heatingType : "";
};

const formatSurfaceArea = (surface: string | null): string => {
  const mapping: Record<string, string> = {
    LESS_THAN_70: "Moins_de_70_m²",
    "70_TO_100": "70_à_100_m²",
    "100_TO_150": "100_à_150_m²",
    MORE_THAN_150: "Plus_de_150_m²",
  };
  return surface ? mapping[surface] || surface : "";
};

const formatMonthlyBill = (bill: string | null): string => {
  const mapping: Record<string, string> = {
    LESS_THAN_75: "Moins_de_75€",
    "75_TO_150": "75€_à_150€",
    "150_TO_250": "150€_à_250€",
    MORE_THAN_250: "Plus_de_250€",
  };
  return bill ? mapping[bill] || bill : "";
};

const NewStepContactInfo: React.FC<StepProps> = ({
  data,
  updateData,
  prevStep,
}) => {
  const { webhookUrl, setIsSubmitting, setIsSuccess } = useSimulator();
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // French phone number: 10 digits, can start with 0
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const cleanPhone = phone.replace(/[\s.-]/g, "");
    return cleanPhone.length === 10 || phoneRegex.test(phone);
  };

  const handleInputChange = (field: keyof typeof data, value: string) => {
    updateData({ [field]: value });

    // Clear error for this field when user types
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!data.firstName || data.firstName.trim().length < 2) {
      newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
      newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
    }

    if (!data.email || !validateEmail(data.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }

    if (!data.phone || !validatePhone(data.phone)) {
      newErrors.phone =
        "Veuillez entrer un numéro de téléphone valide (10 chiffres)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to n8n webhook if webhookUrl is provided
      if (webhookUrl) {
        // Format data for n8n webhook with expected field names
        const formattedData: Record<string, string> = {
          prenom: data.firstName || "",
          nom: data.lastName || "",
          email: data.email || "",
          telephone: data.phone || "",
          codePostal: data.postalCode || "",
          Ville: data.city || "",
          step1: data.housingType === "HOUSE" ? "Maison" : "Appartement",
          step2: data.userType === "OWNER" ? "Propriétaire" : "Locataire",
          step3: formatHeatingType(data.heatingType),
          step4: formatSurfaceArea(data.surfaceArea),
          tranche_facture_electricite_mensuelle: formatMonthlyBill(
            data.monthlyBill
          ),
          Source: "Site Web France Solaire",
        };

        if (typeof window !== "undefined") {
          formattedData["_source_page_url"] = window.location.href;
          formattedData["_source_url_path"] = window.location.pathname;
          formattedData["_source_url_query"] = window.location.search;
          // formData.append("_theme", formConfig.themeName ?? "unknown");
        }

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du formulaire");
        }

        // Track lead submission
        if (typeof window !== "undefined" && (window as any).__tracking) {
          (window as any).__tracking.lead(data);
        }
      } else {
        // Fallback: just log the data
        console.log("Form data (no webhook configured):", data);
      }

      // Show success message
      setIsSuccess(true);

      setIsSuccess(true);

      // Ajouter le paramètre URL pour le tracking GTM/Facebook Pixel
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("form_submit", "success");
        window.history.replaceState({}, "", url.toString());
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Votre simulation est prête !
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Afin de préserver la confidentialité de vos données, cette estimation
        vous sera envoyée par SMS et E-mail.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name & Last Name - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Prénom *
            </label>
            <input
              id="firstName"
              type="text"
              value={data.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Votre prénom"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nom *
            </label>
            <input
              id="lastName"
              type="text"
              value={data.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Votre nom"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email & Phone - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="exemple@email.com"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Téléphone *
            </label>
            <input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="06 12 34 56 78"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-start">
          <input
            id="newsletter"
            type="checkbox"
            checked={data.newsletter}
            onChange={(e) => updateData({ newsletter: e.target.checked })}
            className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
            J'accepte de recevoir des informations et offres commerciales par
            email
          </label>
        </div>

        {/* Navigation Buttons */}
        <GradientPremiumButtons
          onBack={prevStep}
          onNext={handleSubmit as any}
          disabled={false}
          showBack={true}
          nextLabel="Envoyer ma demande"
          backLabel="Précédent"
        />
      </form>
    </div>
  );
};

export default NewStepContactInfo;
