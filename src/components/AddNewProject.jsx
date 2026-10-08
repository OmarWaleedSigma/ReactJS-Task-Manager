import { useRef } from "react";
import Input from "./Input";
import ErrorModal from "./ErrorModal";

export default function AddNewProject({ onCancel, onSave }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);
  const errorModalRef = useRef(null);

  const handleSave = (event) => {
    event.preventDefault();

    if (
      !titleRef.current.value.trim() ||
      !descriptionRef.current.value.trim() ||
      !dueDateRef.current.value
    ) {
      errorModalRef.current.open();
      return;
    }

    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    onSave(newProject);
  };

  return (
    <>
      <ErrorModal ref={errorModalRef} />
      <form onSubmit={handleSave} className="w-140 mt-16">
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
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
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
      </form>
    </>
  );
}
