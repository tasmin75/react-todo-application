import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  deleteTask,
  editTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim() !== "") {
      editTask(task.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`text-lg ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaEdit className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaEdit className="h-5 w-5" />
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <FaTrash className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;