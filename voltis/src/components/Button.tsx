import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "cursor-pointer px-6 py-3 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-edf-orange text-white hover:bg-edf-orangeHover focus:ring-edf-orange",
    secondary:
      "bg-edf-blue text-white hover:bg-edf-lightBlue focus:ring-edf-blue",
    outline:
      "border-2 border-edf-blue text-edf-blue hover:bg-edf-blue hover:text-white focus:ring-edf-blue",
    ghost: "bg-transparent text-gray-600 hover:text-edf-blue hover:bg-gray-100",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
