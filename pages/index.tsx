import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";
import DateFilter from "@/components/filter/DateFilter";
import SearchAndSort from "@/components/filter/SearchAndSort";
import { TaskProvider } from "@/context/TaskContext";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  const [filterDate, setFilterDate] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  return (
    <TaskProvider>
      <main className="min-h-screen px-4 py-10 transition-colors duration-300">
        <section className="max-w-3xl mx-auto shadow-lg rounded-lg p-6 space-y-6 transition-colors duration-300">
          
          {/* Header: Title + Theme Toggle */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-extrabold">📝 ToDo Portal</h1>
            <ThemeToggle />
          </div>

          {/* Task Creation Form */}
          <div className="border-t pt-4 border-gray-200 dark:border-gray-700 transition-colors">
            <TaskForm />
          </div>

          {/* Search + Sort */}
          <div className="border-t pt-4 border-gray-200 dark:border-gray-700 transition-colors">
            <SearchAndSort
              searchKeyword={searchKeyword}
              onSearchChange={setSearchKeyword}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
            />
          </div>

          {/* Date Filter */}
          <div className="border-t pt-4 border-gray-200 dark:border-gray-700 transition-colors">
            <DateFilter selectedDate={filterDate} onDateChange={setFilterDate} />
          </div>

          {/* Task List */}
          <div className="border-t pt-4 border-gray-200 dark:border-gray-700 transition-colors">
            <TaskList
              filterDate={filterDate}
              searchKeyword={searchKeyword}
              sortOrder={sortOrder}
            />
          </div>

        </section>
      </main>
    </TaskProvider>
  );
}
