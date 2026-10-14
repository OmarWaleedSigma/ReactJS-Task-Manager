import { useState, useRef } from "react";
import Task from "./Task";
import ErrorModal from "./ErrorModal";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  const [taskValue, setTaskValue] = useState("");
  const errorModalRef = useRef(null);

  const handleSaveTask = () => {
    if (taskValue.trim() === "") {
      errorModalRef.current.open();
      return;
    }
    onAddTask(taskValue);
    setTaskValue("");
  };

  return (
    <section>
      <ErrorModal ref={errorModalRef}>
        <h2 className="font-bold text-stone-700 text-xl my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a task name.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for the task.
        </p>
      </ErrorModal>
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
            <Task
              task={task}
              key={task.id}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">This project does not have tasks.</p>
      )}
    </section>
  );
}
