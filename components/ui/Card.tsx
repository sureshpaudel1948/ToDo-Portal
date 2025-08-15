import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  borderColor?: "blue" | "green" | "red" | "yellow"; // Add more as needed
};

const borderColorMap: Record<string, string> = {
  blue: "border-blue-500",
  green: "border-green-500",
  red: "border-red-500",
  yellow: "border-yellow-500",
};

export default function Card({ children, className = "", borderColor = "blue" }: CardProps) {
  return (
    <div
      className={`bg-white p-4 rounded-xl shadow hover:shadow-md transition-all border-l-4 ${
        borderColorMap[borderColor]
      } ${className}`}
    >
      {children}
    </div>
  );
}
