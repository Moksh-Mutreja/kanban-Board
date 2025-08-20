import { useState } from "react";
import { tasks, type Priority, type Status } from "../types";

interface CardProps {
  title: string;
  id: string;
  points: number;
  status?: Status; 
  priority:Priority
}


export const Card = ({ title, id, points:initialPoints, priority }: CardProps) => {

  const [points, setPoints] = useState(initialPoints||0);
  const updatePoints = (points:number)=>{
    if (points < 0 || points >30) return;
    setPoints(points)
  }
  return (
    <div className="border rounded-lg p-3 m-2  bg-neutral-950 text-white w-auto transition-all duration-200 ease-linear hover:shadow-xl/30 ">
      <div className="font-mono py-2 text-lg">{title}</div>
      <div className="flex gap-5 justify-between py-3 text-zinc-300 text-sm">
        <div className="flex gap-2">
          <div>{id}</div>
          {priority === "high" ? (
            <div>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Priority: high"
                role="img"
              >
                <polygon
                  points="12 4 20 12 12 20 4 12"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  stroke-linejoin="round"
                />
                <rect
                  x="11.25"
                  y="8"
                  width="1.5"
                  height="7"
                  fill="#dc2626"
                  rx="0.75"
                />
                <circle cx="12" cy="17.5" r="1.2" fill="#dc2626" />
              </svg>
            </div>
          ) : null}

          {priority === "medium" ? (
            <div>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Priority: medium"
                role="img"
              >
                <polygon
                  points="12 5 19 19 5 19"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  stroke-linejoin="round"
                />
                <rect
                  x="11.25"
                  y="10"
                  width="1.5"
                  height="5.5"
                  fill="#f59e0b"
                  rx="0.75"
                />
                <circle cx="12" cy="17.5" r="1" fill="#f59e0b" />
              </svg>
            </div>
          ) : null}

          {priority === "low" ? (
            <div>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Priority: low"
                role="img"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="2" fill="#16a34a" />
              </svg>
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updatePoints(points - 1)}
            className="px-2 py-1 bg-zinc-800 rounded hover:bg-zinc-700 "
          >
            -
          </button>
          <span>{points}</span>
          <button
            onClick={() => updatePoints(points + 1)}
            className="px-2 py-1 bg-zinc-800 rounded hover:bg-zinc-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
