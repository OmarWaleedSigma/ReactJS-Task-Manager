import NoProjectImage from "../assets/no-projects-5ae2e33e.png"
import Button from "./Button"
export default function NoProjectSelected({onStartAddingProject}) {
  return (
    <div className="w-2/3 mt-24 text-center">
        <img src={NoProjectImage} alt="No Projects Exist" className="size-16 object-contain mx-auto" />
        <h2 className="font-bold text-stone-500 text-xl my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a Project or get started with a new one</p>
        <Button onClick={onStartAddingProject}>Create New Project</Button>
    </div>
  )
}
