import type { Status } from "../types";

interface CardProps {
  title: string;
  id: string;
  points: number;
  status?: Status; 
}

export const Card = ({ title, id, points }: CardProps) => {
  return (
    <div className="border rounded-lg p-3 m-2  bg-neutral-950 text-white w-auto hover:shadow-xl/30 ">
      <div className="font-mono py-2 text-lg">{title}</div>
      <div className="flex gap-5 justify-between py-3 text-zinc-300 text-sm">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
};
