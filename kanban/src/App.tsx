import { useEffect, useState } from "react";
import { Card } from "./components/Cards";
import type { Status, Priority, Task } from "./types";
import { statuses, priorities } from "./types";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);


const updateTask = async (updatedTask: Task) => {
    try {
      const response = await fetch(
        `http://localhost:3000/tasks/${updatedTask.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...updatedTask,
            updatedAt: new Date().toISOString()
          }),
        }
      );

      if (response.ok) {
         const savedTask = await response.json();
        setTasks((prevTasks) =>
          prevTasks.map((task) => 
            task.id === savedTask.id ? savedTask : task
          )
        );
      } else {
        console.error('Failed to update task on server');
      }
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };


  
const handleDrop = async (e: React.DragEvent, newStatus: Status) => {
  e.preventDefault();
  const taskId = e.dataTransfer.getData("taskId");

  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  const updatedTask = { ...task, status: newStatus };

  setTasks((prevTasks) =>
    prevTasks.map((t) => (t.id === taskId ? updatedTask : t))
  );

  await updateTask(updatedTask);
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
