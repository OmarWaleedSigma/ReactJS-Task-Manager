import Button from "./Button";

export default function SideBar({ onStartAddingProject, projs }) {
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddingProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projs.length > 0 ? (
          projs.map((project) => {
            return (
              <li key={project.id}>
                <button className="text-left py-1 px-2 my-1 rounded-sm w-full hover:text-stone-200 hover:bg-stone-800 text-stone-400">
                  {project.title}
                </button>
            </li>
          );
        })) : (
          <li className="text-stone-400">No projects available</li>
        )}
      </ul>
    </aside>
  );
}
