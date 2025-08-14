import { useDateFilter } from "@/hooks/useDateFilter";

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export default function DateFilter({ selectedDate, onDateChange }: Props) {
  const { internalDate, handleChange } = useDateFilter(selectedDate, onDateChange);

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
