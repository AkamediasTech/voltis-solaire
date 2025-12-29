import React from "react";

interface CardOptionCompactProps {
  label: string;
  value: string;
  currentValue: string | null;
  onChange: (val: string) => void;
  icon: React.ReactNode;
  onSelect?: () => void;
}

export const CardOptionCompact: React.FC<CardOptionCompactProps> = ({
  label,
  value,
  currentValue,
  onChange,
  icon,
  onSelect,
}) => {
  const isSelected = currentValue === value;

  return (
    <div
      onClick={() => {
        onChange(value);
        if (onSelect) {
          setTimeout(() => onSelect(), 250);
        }
      }}
      className={`cursor-pointer bg-white rounded-lg border-2 p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all h-full relative ${
        isSelected
          ? //   ? "border-edf-orange bg-orange-50"
            "border-gray-300 bg-orange-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      {/* Radio indicator in top-right corner */}
      <div
        className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          isSelected ? "border-slate-800" : "border-gray-300"
        }`}
      >
        {isSelected && (
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        )}
      </div>

      {/* Icon */}
      <div className="text-edf-blue">{icon}</div>

      {/* Label */}
      <span className="font-bold text-gray-600 text-sm uppercase text-center">
        {label}
      </span>
    </div>
  );
};
