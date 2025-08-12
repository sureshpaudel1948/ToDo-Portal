import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import DateFilter from "@/components/DateFilter";
import { TaskProvider } from "@/context/TaskContext";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [filterDate, setFilterDate] = useState("");

  return (
    <TaskProvider>
      <main
        className="min-h-screen px-4 py-10 transition-colors"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <section
          className="max-w-3xl mx-auto shadow-lg rounded-lg p-6 space-y-6 transition-colors"
          style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-extrabold">📝 ToDo Portal</h1>
            <ThemeToggle />
          </div>

          {/* Task Creation Form */}
          <div className="border-t pt-4" style={{ borderColor: "var(--foreground)" }}>
            <TaskForm />
          </div>

          {/* Date Filter */}
          <div className="border-t pt-4" style={{ borderColor: "var(--foreground)" }}>
            <DateFilter selectedDate={filterDate} onDateChange={setFilterDate} />
          </div>

          {/* Task List */}
          <div className="border-t pt-4" style={{ borderColor: "var(--foreground)" }}>
            <TaskList filterDate={filterDate} />
          </div>
        </section>
      </main>
    </TaskProvider>
  );
}
