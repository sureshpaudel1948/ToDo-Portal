import { useState } from "react";
import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

type Errors = {
  title?: string;
  date?: string;
};

export function useTaskForm() {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false); // <-- added loading state

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!date) newErrors.date = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const newTask: Task = { id: uuidv4(), title: title.trim(), date };
      // Simulate async operation (like API call)
      await new Promise((res) => setTimeout(res, 500));
      addTask(newTask);

      setTitle("");
      setDate("");
      setErrors({});
    } finally {
      setIsLoading(false);
    }
  };

  return {
    title,
    setTitle,
    date,
    setDate,
    errors,
    handleSubmit,
    isLoading, // <-- return loading state
  };
}
