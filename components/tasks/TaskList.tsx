import { useFilteredTasks } from "@/hooks/useFilteredTasks";

type Props = {
  filterDate: string;
};

export default function TaskList({ filterDate }: Props) {
  const filteredTasks = useFilteredTasks(filterDate);

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No tasks found for the selected date.
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all border-l-4 border-blue-500"
        >
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-500 mt-1">📅 {task.date}</p>
        </li>
      ))}
    </ul>
  );
}
