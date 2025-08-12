import { useEffect, useState } from "react";

export type Task = {
  id: string;
  title: string;
  date: string;
};

const STORAGE_KEY = "tasks";

export default function useSessionTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load from sessionStorage on mount
  useEffect(() => {
    const storedTasks = sessionStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      try {
        const parsed = JSON.parse(storedTasks);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      } catch (e) {
        console.error("Failed to parse tasks from sessionStorage", e);
      }
    }
  }, []);

  // Save to sessionStorage when tasks change
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const filteredTasks = (filterDate: string) => {
    if (!filterDate) return tasks;
    return tasks.filter((task) => task.date === filterDate);
  };

  return { tasks, addTask, deleteTask, filteredTasks };
}
