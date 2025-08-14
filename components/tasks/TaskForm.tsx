import { useTaskForm } from "@/hooks/useTaskForm";
import Button from "@/components/ui/button/Button";

export default function TaskForm() {
  const { title, setTitle, date, setDate, handleSubmit } = useTaskForm();

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
      <Button type="submit" variant="primary">
        Add Task
      </Button>
    </form>
  );
}
