import { useState } from "react";
import { Card } from "./components/Cards";
import type { Status, Priority } from "./types";
import { statuses, priorities, tasks as initialTasks } from "./types";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDrop = (e: React.DragEvent, newStatus: Status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const columns = statuses.map((status) => {
    const tasksColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksColumn,
    };
  });

  return (
    <div className="flex divide-x p-2 m-2 gap-2 h-screen">
      {columns.map((column) => (
        <div
          key={column.status}
          className="flex-1 flex flex-col h-full bg-neutral-100 rounded-md "
          onDrop={(e) => handleDrop(e, column.status)}
          onDragOver={handleDragOver}
        >
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
              priority={task.priority}
              status={task.status}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
