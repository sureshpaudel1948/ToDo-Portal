import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
};

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  let baseClasses = "px-6 py-2 rounded-md font-semibold shadow transition duration-300";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600";
      break;
    case "secondary":
      variantClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "danger":
      variantClasses = "bg-red-500 text-white hover:bg-red-600";
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
