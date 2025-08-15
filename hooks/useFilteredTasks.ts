import { useMemo } from "react";
import { useTaskContext } from "@/context/TaskContext";

type SortOrder = "asc" | "desc";

export function useFilteredTasks(
  filterDate: string,
  searchKeyword: string = "",
  sortOrder: SortOrder = "asc"
) {
  const { tasks } = useTaskContext();

  const filteredTasks = useMemo(() => {
    const normalizedKeyword = searchKeyword.trim().toLowerCase();

    let filtered = tasks.filter((task) => {
      const matchesDate = filterDate ? task.date === filterDate : true;
      const matchesKeyword = normalizedKeyword
        ? task.title.toLowerCase().includes(normalizedKeyword)
        : true;

      return matchesDate && matchesKeyword;
    });

    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [tasks, filterDate, searchKeyword, sortOrder]);

  return filteredTasks;
}
