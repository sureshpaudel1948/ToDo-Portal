import { useEffect, useState } from "react";
import { formatDate, getTodayDate } from "@/utils/dateutils";

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export default function DateFilter({ selectedDate, onDateChange }: Props) {
  const [internalDate, setInternalDate] = useState(formatDate(selectedDate || getTodayDate()));

  // Keep internal date in sync if parent updates selectedDate
  useEffect(() => {
    setInternalDate(formatDate(selectedDate));
  }, [selectedDate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value);
    setInternalDate(formatted);
    onDateChange(formatted);
  };

  return (
    <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <label htmlFor="date-filter" className="font-medium text-gray-700">
        📅 Filter by Date:
      </label>
      <input
        id="date-filter"
        type="date"
        value={internalDate}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900"
      />
    </div>
  );
}
