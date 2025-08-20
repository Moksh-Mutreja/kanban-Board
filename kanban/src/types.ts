export type Status = "pending" | "done" | "in-progress";

export const statuses: Status[] = ["pending", "done", "in-progress"];

export type Priority = "low" | "medium" | "high";
export const priorities: Priority[] = ["low", "medium", "high"];

export interface Task {
  title: string;
  id: string;
  points: number;
  status: Status;
  priority: Priority;
}
// export const tasks: Task[] = [
//   {
//     title: "GO TO gym",
//     id: "_01",
//     points: 5,
//     status: "pending",
//     priority: "high",
//   },
//   {
//     title: "Code for 4 hrs",
//     id: "_02",
//     points: 7,
//     status: "in-progress",
//     priority: "high",
//   },
//   {
//     title: "Read a book",
//     id: "_03",
//     points: 6,
//     status: "done",
//     priority: "low",
//   },
//   {
//     title: "Take a shower",
//     id: "_04",
//     points: 3,
//     status: "done",
//     priority: "medium",
//   },
//   {
//     title: "Learn ml",
//     id: "_05",
//     points: 7,
//     status: "pending",
//     priority: "medium",
//   },
//   {
//     title: "Go for a walk",
//     id: "_06",
//     points: 4,
//     status: "done",
//     priority: "low",
//   },
// ];

