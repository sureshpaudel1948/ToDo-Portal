import { useMemo } from "react";
import { useTaskContext } from "@/context/TaskContext";

export function useFilteredTasks(filterDate: string) {
  const { tasks } = useTaskContext();

  const filteredTasks = useMemo(() => {
    return filterDate
      ? tasks.filter((task) => task.date === filterDate)
      : tasks;
  }, [tasks, filterDate]);

  return filteredTasks;
}
