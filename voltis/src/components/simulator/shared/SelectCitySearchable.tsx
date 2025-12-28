import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Search } from "lucide-react";

interface City {
  nom: string;
  code: string;
  codesPostaux: string[];
}

interface SelectCitySearchableProps {
  cities: City[];
  selectedCity: string | null;
  onChange: (cityName: string) => void;
  loading?: boolean;
  error?: string | null;
  placeholder?: string;
}

export const SelectCitySearchable: React.FC<SelectCitySearchableProps> = ({
  cities,
  selectedCity,
  onChange,
  loading = false,
  error = null,
  placeholder = "Sélectionnez une ville",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredCities = cities.filter((city) =>
    city.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
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
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredCities.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (
            highlightedIndex >= 0 &&
            highlightedIndex < filteredCities.length
          ) {
            onChange(filteredCities[highlightedIndex].nom);
            setIsOpen(false);
            setSearchQuery("");
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setSearchQuery("");
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, highlightedIndex, filteredCities, onChange]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll('[role="option"]');
      const highlightedElement = items[highlightedIndex] as HTMLElement;
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
      if (!isOpen) {
        setSearchQuery("");
      }
    }
  };

  const handleSelect = (cityName: string) => {
    onChange(cityName);
    setIsOpen(false);
    setSearchQuery("");
    setHighlightedIndex(-1);
  };

  const selectedCityObj = cities.find((city) => city.nom === selectedCity);

  if (loading) {
    return (
      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
        Chargement des villes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-4 py-3 border border-red-300 rounded-lg bg-red-50 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full px-4 py-3 border rounded-lg text-left flex items-center justify-between transition-all ${
          isOpen
            ? "border-orange-500 ring-2 ring-orange-500"
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
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && cities.length > 0 && (
        <div
          className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          role="listbox"
        >
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une ville..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {filteredCities.length > 0 && (
              <div className="mt-2 text-xs text-gray-500">
                {filteredCities.length} ville
                {filteredCities.length > 1 ? "s" : ""} trouvée
                {filteredCities.length > 1 ? "s" : ""}
              </div>
            )}
          </div>

          <div className="max-h-56 overflow-y-auto" ref={dropdownRef}>
            {filteredCities.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm text-center">
                Aucune ville trouvée
              </div>
            ) : (
              filteredCities.map((city, index) => {
                const searchLower = searchQuery.toLowerCase();
                const cityNameLower = city.nom.toLowerCase();
                const matchIndex = cityNameLower.indexOf(searchLower);

                return (
                  <div
                    key={city.code}
                    onClick={() => handleSelect(city.nom)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`px-4 py-3 cursor-pointer flex items-center justify-between transition-colors ${
                      selectedCity === city.nom
                        ? "bg-orange-50 text-orange-700 font-semibold border-l-4 border-orange-500"
                        : highlightedIndex === index
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                    role="option"
                    aria-selected={selectedCity === city.nom}
                  >
                    <span>
                      {searchQuery && matchIndex !== -1 ? (
                        <>
                          {city.nom.substring(0, matchIndex)}
                          <span className="bg-yellow-200 font-semibold">
                            {city.nom.substring(
                              matchIndex,
                              matchIndex + searchQuery.length
                            )}
                          </span>
                          {city.nom.substring(matchIndex + searchQuery.length)}
                        </>
                      ) : (
                        city.nom
                      )}
                    </span>
                    {selectedCity === city.nom && (
                      <Check className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
