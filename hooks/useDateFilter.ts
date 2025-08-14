import { useEffect, useState } from "react";
import { formatDate, getTodayDate } from "@/utils/dateutils";

export function useDateFilter(selectedDate: string, onDateChange: (date: string) => void) {
  const [internalDate, setInternalDate] = useState(
    formatDate(selectedDate || getTodayDate())
  );

  // Keep internal date in sync with parent state
  useEffect(() => {
    setInternalDate(formatDate(selectedDate));
  }, [selectedDate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value);
    setInternalDate(formatted);
    onDateChange(formatted);
  };

  return {
    internalDate,
    handleChange,
  };
}
