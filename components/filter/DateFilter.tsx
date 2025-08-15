import { useDateFilter } from "@/hooks/useDateFilter";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import { Calendar, X } from "lucide-react";
import Button from "@/components/ui/button/Button";

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export default function DateFilter({ selectedDate, onDateChange }: Props) {
  const { internalDate, handleChange } = useDateFilter(selectedDate, onDateChange);
  const [isOpen, setIsOpen] = useState(false);

  const togglePicker = () => setIsOpen((prev) => !prev);

  return (
    <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-white dark:bg-gray-280 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <label className="font-medium text-gray-700 dark:text-gray-800 flex-shrink-0">
        📅 Filter by Date:
      </label>

      <div className="relative w-full sm:w-auto">
        <button
          type="button"
          onClick={togglePicker}
          className="flex items-center justify-between w-full sm:w-56 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-280 shadow-sm hover:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
        >
          <div className="flex items-center gap-2 text-gray-900 dark:text-gray-800">
            <Calendar size={18} />
            {internalDate || "Select Date"}
          </div>
          {internalDate && (
            <X
              size={16}
              className="text-gray-400 hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                handleChange("");
              }}
            />
          )}
        </button>

        {isOpen && (
          <div
            className="absolute z-10 mt-2 w-72 bg-white dark:bg-gray-280 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in"
          >
            <DayPicker
              mode="single"
              selected={internalDate ? new Date(internalDate) : undefined}
              onSelect={(date) => {
                if (date) {
                  const year = date.getFullYear();
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  const day = String(date.getDate()).padStart(2, "0");
                  handleChange(`${year}-${month}-${day}`);
                }
                setIsOpen(false);
              }}
              className="rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
