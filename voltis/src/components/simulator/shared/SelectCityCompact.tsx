import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";

interface City {
  nom: string;
  code: string;
  codesPostaux: string[];
}

interface SelectCityCompactProps {
  cities: City[];
  selectedCity: string | null;
  onChange: (cityName: string) => void;
  loading?: boolean;
  error?: string | null;
  placeholder?: string;
}

export const SelectCityCompact: React.FC<SelectCityCompactProps> = ({
  cities,
  selectedCity,
  onChange,
  loading = false,
  error = null,
  placeholder = "Sélectionnez une ville",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < cities.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < cities.length) {
            onChange(cities[highlightedIndex].nom);
            setIsOpen(false);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, highlightedIndex, cities, onChange]);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && dropdownRef.current) {
      const highlightedElement = dropdownRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleToggle = () => {
    if (cities.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (cityName: string) => {
    onChange(cityName);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const selectedCityObj = cities.find((city) => city.nom === selectedCity);

  if (loading) {
    return (
      <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm">
        Chargement...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-3 py-2 border border-red-300 rounded-md bg-red-50 text-red-600 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full px-3 py-2 border rounded-md text-left flex items-center justify-between transition-all text-sm ${
          isOpen
            ? "border-orange-500 ring-1 ring-orange-500"
            : "border-gray-300 hover:border-gray-400"
        } ${
          selectedCity ? "text-gray-900 font-medium" : "text-gray-500"
        } focus:outline-none`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={cities.length === 0}
      >
        <span className="truncate">
          {selectedCityObj ? selectedCityObj.nom : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ml-2 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && cities.length > 0 && (
        <div
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-xl max-h-48 overflow-y-auto"
          role="listbox"
          ref={dropdownRef}
        >
          {cities.map((city, index) => (
            <div
              key={city.code}
              onClick={() => handleSelect(city.nom)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`px-3 py-2 cursor-pointer flex items-center justify-between transition-colors text-sm ${
                selectedCity === city.nom
                  ? "bg-orange-50 text-orange-700 font-semibold border-l-2 border-orange-500"
                  : highlightedIndex === index
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
              role="option"
              aria-selected={selectedCity === city.nom}
            >
              <span>{city.nom}</span>
              {selectedCity === city.nom && (
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 ml-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
