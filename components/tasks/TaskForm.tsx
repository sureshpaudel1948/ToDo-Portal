import { useTaskForm } from "@/hooks/useTaskForm";
import Button from "@/components/ui/button/Button";
import Input from "@/components/forms/Input";

export default function TaskForm() {
  const { 
    title, 
    setTitle, 
    date, 
    setDate, 
    errors, 
    handleSubmit, 
    isLoading 
  } = useTaskForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 mb-6 transition-all duration-300"
    >
      <Input
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={errors.title}
        className="flex-1"
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        error={errors.date}
      />
      <Button type="submit" variant="primary" disabled={isLoading}>
        {isLoading ? (
          <svg
            className="w-5 h-5 animate-spin mx-auto text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          "Add Task"
        )}
      </Button>
    </form>
  );
}
