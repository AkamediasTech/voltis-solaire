import { useState, useEffect } from "react";

interface City {
  nom: string;
  code: string;
  codesPostaux: string[];
}

interface UseCityAutocompleteReturn {
  cities: City[];
  loading: boolean;
  error: string | null;
}

export const useCityAutocomplete = (
  postalCode: string
): UseCityAutocompleteReturn => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset if postal code is empty or invalid
    if (!postalCode || postalCode.length < 5) {
      setCities([]);
      setError(null);
      return;
    }

    const fetchCities = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://geo.api.gouv.fr/communes?codePostal=${postalCode}&fields=nom,code,codesPostaux&format=json&geometry=centre`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des villes");
        }

        const data: City[] = await response.json();
        setCities(data);

        if (data.length === 0) {
          setError("Aucune ville trouvée pour ce code postal");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
        setCities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [postalCode]);

  return { cities, loading, error };
};
