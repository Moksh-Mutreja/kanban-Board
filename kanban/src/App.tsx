import { Card } from "./components/Cards";
import type { Status } from "./types";
import { statuses } from "./types";
export default function App() {
  const tasks = [
    {
      title: "GO TO gym",
      id: "_01",
      points: 5,
      status: "pending",
    },
    {
      title: "Code for 4 hrs",
      id: "_02",
      points: 7,
      status: "in-progress",
    },
    {
      title: "Read a book",
      id: "_03",
      points: 6,
      status: "done",
    },
    {
      title: "Take a shower",
      id: "_04",
      points: 3,
      status: "done",
    },
    {
      title: "Learn ml",
      id: "_05",
      points: 7,
      status: "pending",
    },
    {
      title: "Go for a walk",
      id: "_06",
      points: 4,
      status: "done",
    },
  ];
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
              />
            ))}
          </div>
        ))}
      </div>{" "}
    </>
  );
}
