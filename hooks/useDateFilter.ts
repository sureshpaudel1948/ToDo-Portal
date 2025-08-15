import { useEffect, useState } from "react";
import { formatDate, getTodayDate } from "@/utils/dateutils";

export function useDateFilter(
  selectedDate: string,
  onDateChange: (date: string) => void
) {
  const safeFormat = (date: string) => {
    try {
      if (!date) return "";
      // Normalize to local date without timezone shift
      const parsed = new Date(date);
      const local = new Date(
        parsed.getFullYear(),
        parsed.getMonth(),
        parsed.getDate()
      );
      return formatDate(local.toISOString());
    } catch {
      return "";
    }
  };

  const [internalDate, setInternalDate] = useState(
    safeFormat(selectedDate || getTodayDate())
  );

  useEffect(() => {
    const newFormatted = safeFormat(selectedDate);
    if (newFormatted !== internalDate) {
      setInternalDate(newFormatted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const handleChange = (date: string) => {
    const formatted = safeFormat(date);
    setInternalDate(formatted);
    onDateChange(formatted);
  };

  return { internalDate, setInternalDate, handleChange };
}
