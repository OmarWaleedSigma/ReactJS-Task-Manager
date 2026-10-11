import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import AddNewProject from "./components/AddNewProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddingProject = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: null };
    });
  };
  const handleCancelProject = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: undefined };
    });
  };
  const handleSaveProject = (newProject) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, { ...newProject, id: Math.random() }],
      };
    });
  };
  const handleSelectProject = (projectID) => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: projectID };
    });
  };
  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectID,
      );
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: updatedProjects,
      };
    });
  };
  const handleAddTask = (taskText) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [
          {
            projectID: prevState.selectedProjectID,
            text: taskText,
            id: Math.random(),
          },
          ...prevState.tasks,
        ],
      };
    });
  };
  let content;
  if (projectState.selectedProjectID === null) {
    content = (
      <AddNewProject
        onCancel={handleCancelProject}
        onSave={handleSaveProject}
      />
    );
  } else if (projectState.selectedProjectID === undefined) {
    content = (
      <NoProjectSelected onStartAddingProject={handleStartAddingProject} />
    );
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
        handleAddTask={handleAddTask}
        project={selectedProject}
        onDelete={handleDeleteProject}
      />
    );
  }
  return (
    <main className="flex h-screen gap-8 my-8 ">
      <SideBar
        selectedProjectID={projectState.selectedProjectID}
        projs={projectState.projects}
        onStartAddingProject={handleStartAddingProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}
