import { useProjectsContext } from "../store/projects-context";
import NoProjectSelected from "./NoProjectSelected";
import AddNewProject from "./AddNewProject";
import SideBar from "./SideBar";
import SelectedProject from "./SelectedProject";

export default function ProjectsManager() {
  const {
    projectState,
    startAddingProject,
    cancelProject,
    saveProject,
    selectProject,
    deleteProject,
    addTask,
    deleteTask,
  } = useProjectsContext();

  let content;
  if (projectState.selectedProjectID === null) {
    content = <AddNewProject onCancel={cancelProject} onSave={saveProject} />;
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddingProject={startAddingProject} />;
  } else {
    const selectedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectID,
    );
    const selectedProjectTasks = projectState.tasks.filter(
      (task) => task.projectID == projectState.selectedProjectID,
    );
    content = (
      <SelectedProject
        tasks={selectedProjectTasks}
        handleAddTask={addTask}
        onDeleteTask={deleteTask}
        project={selectedProject}
        onDelete={deleteProject}
      />
    );
  }

  return (
    <main className="flex h-screen gap-8 my-8 ">
      <SideBar
        selectedProjectID={projectState.selectedProjectID}
        projs={projectState.projects}
        onStartAddingProject={startAddingProject}
        onSelectProject={selectProject}
      />
      {content}
    </main>
  );
}
