export default function Task({ task }) {
  return (
    <li class="flex justify-between items-center p-4 border-b-2 border-stone-300">
      <span class="text-stone-600">{task.text} </span>
      <button class="text-stone-800 hover:text-red-500">Delete</button>
    </li>
  );
}
