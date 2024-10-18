import React, { useState } from "react";
import { toast } from "react-toastify";

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    addTask(input);
    setInput("");
    setError(null);
    toast.success("Task added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
      <div className="flex items-center w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2 w-full max-w-md text-center">
          {error}
        </p>
      )}
    </form>
  );
};

export default TaskInput;