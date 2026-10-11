import { useState } from "react";
import Task from "./Task";

export default function Tasks({ tasks, onAddTask }) {
  const [taskValue, setTaskValue] = useState("");
  const handleSaveTask = () => {
    if (taskValue.trim() !== "") {
      onAddTask(taskValue);
      setTaskValue("");
    } else {
      setTaskValue("");
      return;
    }
  };
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 ">Tasks</h2>
      <div className="flex gap-4 items-center">
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 outline-stone-500"
          type="text"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleSaveTask}
        >
          Add Task
        </button>
      </div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">This project doesnot have tasks</p>
      )}
    </section>
  );
}
