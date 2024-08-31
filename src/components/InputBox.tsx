import { FormEvent, useState, useEffect } from "react";

interface TaskInterface {
  task: string;
  priority: string;
}

interface InputBoxProps {
  onAddTask: (task: TaskInterface) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [priority, setPriority] = useState<string>("low"); // low, normal, high, critical
  const [add, setAdd] = useState<boolean>(false);

  useEffect(() => {
    setAdd(taskName.trim() !== "");
  }, [taskName]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    onAddTask({ task: taskName, priority });
    setTaskName("");
    setPriority("low");
  };

  return (
    <div className="w-full max-w-md mx-auto border rounded-lg shadow-lg p-6 bg-amber-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.currentTarget.value)}
            placeholder="Enter Task"
            className="border rounded-md p-3 w-full text-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.currentTarget.value)}
            className={`mt-4 sm:mt-0 text-md p-3 rounded-md border border-gray-300 ${priority === 'low' ? 'bg-yellow-400' : priority === 'normal' ? 'bg-green-400' : priority === 'high' ? 'bg-orange-600' : 'bg-red-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="low">LOW</option>
            <option value="normal">NORMAL</option>
            <option value="high">HIGH</option>
            <option value="critical">CRITICAL</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={!add}
          className={`w-full p-3 rounded-md border-2 ${add ? 'bg-yellow-300 text-black border-yellow-400 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-200' : 'bg-gray-300 text-gray-600 border-gray-400 cursor-not-allowed'} transition-colors duration-300 ease-in-out`}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default InputBox;
