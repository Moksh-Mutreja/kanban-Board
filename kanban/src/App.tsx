import { Card } from "./components/Cards";
import type { Status, Priority,} from "./types";
import { statuses, priorities ,tasks} from "./types";
export default function App() {

  const Columns = statuses.map((status) => {
    const tasksColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksColumn,
    };
  });

  return (
    <>
      <div className="flex divide-x p-2 m-2 gap-2">
        {Columns.map((column) => (
          <div key={column.status} className="flex-1">
            <h1 className="text-3xl p-3 m-3 text-center text-cyan-900">
              {column.status === "pending" && "Pending Tasks"}
              {column.status === "in-progress" && "In-Progress Tasks"}
              {column.status === "done" && "Done Tasks"}
            </h1>
            {column.tasks.map((task) => (
              <Card
                key={task.id}
                title={task.title}
                id={task.id}
                points={task.points}
                priority={task.priority as Priority}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
