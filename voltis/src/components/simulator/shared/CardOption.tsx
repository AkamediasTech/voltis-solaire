import React from "react";

interface CardOptionProps {
  label: string;
  value: string;
  currentValue: string | null;
  onChange: (val: string) => void;
  icon: React.ReactNode;
}

export const CardOption: React.FC<CardOptionProps> = ({
  label,
  value,
  currentValue,
  onChange,
  icon,
}) => (
  <div
    onClick={() => onChange(value)}
    className="cursor-pointer bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all h-full"
  >
    <div className="text-edf-blue">{icon}</div>
    <span className="font-bold text-gray-600 text-sm uppercase text-center">
      {label}
    </span>
    <div
      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
        currentValue === value ? "border-gray-900" : "border-gray-300"
      }`}
    >
      {currentValue === value && (
        <div className="w-3 h-3 rounded-full bg-gray-900" />
      )}
    </div>
  </div>
);
