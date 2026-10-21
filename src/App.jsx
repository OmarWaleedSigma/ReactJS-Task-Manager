import { ProjectsContextProvider } from "./store/projects-context";
import ProjectsManager from "./components/ProjectsManager";

export default function App() {
  return (
    <ProjectsContextProvider>
      <ProjectsManager />
    </ProjectsContextProvider>
  );
}
