import React from "react";

interface RadioOptionProps {
  label: string;
  value: string;
  currentValue: string | null;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  label,
  value,
  currentValue,
  onChange,
  icon = null,
}) => (
  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors bg-white group shadow-sm border-gray-200">
    <input
      type="radio"
      name="radio-group"
      className="hidden"
      checked={currentValue === value}
      onChange={() => onChange(value)}
    />
    <div
      className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 ${
        currentValue === value ? "border-gray-900" : "border-gray-400"
      }`}
    >
      {currentValue === value && (
        <div className="w-2.5 h-2.5 rounded-full bg-gray-900" />
      )}
    </div>
    {icon && (
      <div className="mr-3 text-gray-600 group-hover:text-edf-orange transition-colors">
        {icon}
      </div>
    )}
    <span className="text-gray-800 font-medium">{label}</span>
  </label>
);
