import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import DisplayTasks from "./DisplayTasks";

interface TaskInterface {
  task: string;
  priority: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  
  useEffect(() => {
    if(tasks.length>0) localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks: string | null = localStorage.getItem("Tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);


  const handleAddTask = (newTask: TaskInterface) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete: TaskInterface) => {
    setTasks((prevTasks) => prevTasks.filter(task => task !== taskToDelete)); 
  };

  return (
    <div>
      <InputBox onAddTask={handleAddTask} />
      <DisplayTasks tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;
