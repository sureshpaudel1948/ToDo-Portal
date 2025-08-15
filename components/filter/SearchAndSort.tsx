import React from "react";

interface SearchAndSortProps {
  searchKeyword: string;
  onSearchChange: (value: string) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
}

const SearchAndSort: React.FC<SearchAndSortProps> = ({
  searchKeyword,
  onSearchChange,
  sortOrder,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."m
        value={searchKeyword}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="asc">Sort by Date ↑</option>
        <option value="desc">Sort by Date ↓</option>
      </select>
    </div>
  );
};

export default SearchAndSort;
