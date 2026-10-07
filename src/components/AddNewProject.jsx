export default function AddNewProject() {
  return (
    <div className="w-140 mt-16">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>

        <li>
          <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">
            Save
          </button>
        </li>
      </menu>

      <div>
        <p className="flex flex-col my-4 gap-1">
          <label className="text-sm uppercase text-stone-500 font-bold">
            Title
          </label>

          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
          />
        </p>

        <p className="flex flex-col my-4 gap-1">
          <label className="text-sm uppercase text-stone-500 font-bold">
            Description
          </label>

          <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 h-5.25" />
        </p>

        <p className="flex flex-col my-4 gap-1">
          <label className="text-sm uppercase text-stone-500 font-bold">
            Due Date
          </label>

          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
          />
        </p>
      </div>
    </div>
  );
}
