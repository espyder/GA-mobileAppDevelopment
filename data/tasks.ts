export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export const initialTasks: Task[] = [
  { id: "1", title: "Read React Native chapter", done: false },
  { id: "2", title: "Practice Flexbox layout", done: true },
  { id: "3", title: "Build mini app prototype", done: false },
];
