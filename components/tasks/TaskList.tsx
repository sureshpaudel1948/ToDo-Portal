import { useFilteredTasks } from "@/hooks/useFilteredTasks";
import Card from "@/components/ui/Card";

type Props = {
  filterDate: string;
};

export default function TaskList({ filterDate }: Props) {
  const filteredTasks = useFilteredTasks(filterDate);

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // Sort tasks by date ascending, then by title
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateCompare = a.date.localeCompare(b.date);
    return dateCompare !== 0 ? dateCompare : a.title.localeCompare(b.title);
  });

  if (sortedTasks.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No tasks found for the selected date.
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {sortedTasks.map((task) => (
        <Card
          key={task.id}
          borderColor="blue"
          className={task.date === today ? "border-green-500 bg-green-50" : ""}
        >
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-500 mt-1">📅 {task.date}</p>
        </Card>
      ))}
    </ul>
  );
}
