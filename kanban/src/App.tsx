import {Card} from "./components/Cards";

export default function App() {
  const tasks = [
    {
      title:"GO TO gym",
      id:"_01",
      points:5,
    },
    {
      title:"Code for 4 hrs",
      id:"_02",
      points:7,
    },
    {
      title:"Read a book",
      id:"_03",
      points:6,
    },
    {
      title:"Read a book",
      id:"_03",
      points:6,
    },
  ]
  return (
    <>
      {tasks.map(x => <Card title={x.title} id={x.id} points={x.points}/> )}
    </>
  );
}
