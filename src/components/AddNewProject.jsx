import { useRef } from "react";
import Input from "./Input";

export default function AddNewProject({ onCancel, onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    onSave(newProject)
  };

  return (
    <div className="w-140 mt-16">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>

        <li>
          <button
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input title="Title" type="text" ref={titleRef} />

        <Input title="Description" textArea ref={descriptionRef} />

        <Input title="Due Date" type="date" ref={dueDateRef} />
      </div>
    </div>
  );
}
