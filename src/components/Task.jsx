export default function Task({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center p-4 border-b-2 border-stone-300">
      <span className="text-stone-600">{task.text} </span>
      <button
        onClick={onDelete}
        className="text-stone-800 hover:text-red-500"
      >
        Delete
      </button>
    </li>
  );
}
