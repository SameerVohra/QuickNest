import React from 'react';

interface Tasks {
  task: string;
  priority: string;
}

interface TaskProps {
  TaskArr: Tasks[];
  onDelete: (taskToDelete: Tasks) => void;
}

const TaskBox: React.FC<TaskProps> = ({ TaskArr, onDelete }) => {
  const getBackgroundColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'bg-yellow-300';
      case 'normal':
        return 'bg-green-500';
      case 'high':
        return 'bg-orange-500';
      case 'critical':
        return 'bg-red-400';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 m-5">
      {TaskArr && TaskArr.length > 0 ? (
        TaskArr.map((t, ind) => (
          <div
            key={ind}
            className={`flex items-start justify-between w-full max-w-md ${getBackgroundColor(t.priority)} text-black border-2 border-black rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="flex-grow mr-2 overflow-hidden">
              <p className="whitespace-normal break-words break-all overflow-hidden text-ellipsis">
                {t.task}
              </p>
            </div>
            <button
              className="text-lg font-bold hover:text-red-400 transition-colors ml-2 flex-shrink-0"
              onClick={() => onDelete(t)}
            >
              ❌
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskBox;
