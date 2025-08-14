// hooks/useSessionTasks.ts
import { useEffect, useState, useCallback, useMemo } from "react";

export type Task = {
  id: string;
  title: string;
  date: string;
};

const STORAGE_KEY = "tasks";

export function useSessionTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from sessionStorage on mount
  useEffect(() => {
    const storedTasks = sessionStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      try {
        const parsed = JSON.parse(storedTasks);
        if (Array.isArray(parsed)) setTasks(parsed);
      } catch (e) {
        console.error("Failed to parse tasks from sessionStorage", e);
      }
    }
  }, []);

  // Persist tasks to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = useCallback((task: Task) => {
    setTasks((prev) => [...prev, task]);
  }, []);

  // Delete a task by ID
  const deleteTask = useCallback((taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }, []);

  // Filter tasks by date
  const filteredTasks = useCallback(
    (filterDate: string) => {
      if (!filterDate) return tasks;
      return tasks.filter((task) => task.date === filterDate);
    },
    [tasks]
  );

  // Memoized value for filtered tasks to optimize re-renders
  const memoFilteredTasks = useMemo(() => filteredTasks(""), [tasks]);

  return {
    tasks,
    addTask,
    deleteTask,
    filteredTasks,
    memoFilteredTasks,
  };
}
