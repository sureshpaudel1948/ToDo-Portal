import { useState } from "react";
import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

export function useTaskForm() {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    const newTask: Task = { id: uuidv4(), title, date };
    addTask(newTask);
    setTitle("");
    setDate("");
  };

  return {
    title,
    setTitle,
    date,
    setDate,
    handleSubmit,
  };
}
