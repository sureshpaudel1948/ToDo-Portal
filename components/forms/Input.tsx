import React from "react";

type InputProps = {
  id?: string;
  label?: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

export default function Input({
  id,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
  className = "",
}: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-900"
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
