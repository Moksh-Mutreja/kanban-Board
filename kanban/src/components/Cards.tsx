
export const Card = ({
  title,
  id,
  points,
}: {
  title: string;
  id: string;
  points?: number;
}) => {
  return (
    <div className="border rounded-lg p-3 m-2 bg-neutral-950 text-white hover:shadow-xl/30 ">
      <div className="text-xl py-2 font-medium">{title}</div>
      <div className="flex gap-5 justify-between py-3 text-zinc-300">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
};

