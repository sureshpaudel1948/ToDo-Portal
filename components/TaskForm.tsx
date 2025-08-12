import { useState } from "react";
import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm() {
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

   return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 mb-6 transition-all duration-300"
    >
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none px-4 py-2 rounded-md transition duration-200"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none px-4 py-2 rounded-md transition duration-200"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-2 rounded-md shadow transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
}