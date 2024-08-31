import { useEffect, useState } from "react";
import TaskBox from "./TaskBox";

interface TaskInterface {
  task: string;
  priority: string;
}

interface DisplayTasksProps {
  tasks: TaskInterface[];
  onDelete: (taskToDelete: TaskInterface) => void;
}

const DisplayTasks: React.FC<DisplayTasksProps> = ({ tasks, onDelete }) => {
  const [low, setLow] = useState<TaskInterface[]>([]);
  const [normal, setNormal] = useState<TaskInterface[]>([]);
  const [high, setHigh] = useState<TaskInterface[]>([]);
  const [critical, setCritical] = useState<TaskInterface[]>([]);

  useEffect(() => {
    setLow(tasks.filter((t) => t.priority === "low"));
    setNormal(tasks.filter((t) => t.priority === "normal"));
    setHigh(tasks.filter((t) => t.priority === "high"));
    setCritical(tasks.filter((t) => t.priority === "critical"));
  }, [tasks]);

  return (
    <div className="mt-5 flex flex-col md:flex-row flex-wrap items-top justify-center">
      {low.length > 0 && (
        <div className="flex flex-col items-center w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mt-4">Low Priority</h2>
          <TaskBox TaskArr={low} onDelete={onDelete} />
        </div>
      )}
      {normal.length > 0 && (
        <div className="flex flex-col items-center w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mt-4">Normal Priority</h2>
          <TaskBox TaskArr={normal} onDelete={onDelete} />
        </div>
      )}
      {high.length > 0 && (
        <div className="flex flex-col items-center w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mt-4">High Priority</h2>
          <TaskBox TaskArr={high} onDelete={onDelete} />
        </div>
      )}
      {critical.length > 0 && (
        <div className="flex flex-col items-center w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mt-4">Critical Priority</h2>
          <TaskBox TaskArr={critical} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
};

export default DisplayTasks;
