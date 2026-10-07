import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import AddNewProject from "./components/AddNewProject";
import SideBar from "./components/SideBar";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
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
      return { ...prevState, selectedProjectID: undefined, projects:[
        ...prevState.projects,{...newProject,id:Math.random()}
      ]};
    });
  }
  ;
  let content;
  if (projectState.selectedProjectID === null) {
    content = <AddNewProject onCancel={handleCancelProject} onSave={handleSaveProject}/>;
  } else if (projectState.selectedProjectID === undefined) {
    content = (
      <NoProjectSelected onStartAddingProject={handleStartAddingProject} />
    );
  }
  return (
    <main className="flex h-screen gap-8 my-8 ">
      <SideBar projs={projectState.projects} onStartAddingProject={handleStartAddingProject} />
      {content}
    </main>
  );
}
