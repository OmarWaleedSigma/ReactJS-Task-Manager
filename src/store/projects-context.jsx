import { createContext, useReducer, useContext } from "react";

const ProjectsContext = createContext();

const initialProjectsState = {
  selectedProjectID: undefined,
  projects: [],
  tasks: [],
};

function projectsReducer(state, action) {
  switch (action.type) {
    case "START_ADDING_PROJECT":
      return {
        ...state,
        selectedProjectID: null,
      };

    case "CANCEL_PROJECT":
      return {
        ...state,
        selectedProjectID: undefined,
      };

    case "SAVE_PROJECT":
      return {
        ...state,
        selectedProjectID: undefined,
        projects: [...state.projects, { ...action.payload, id: Math.random() }],
      };

    case "SELECT_PROJECT":
      return {
        ...state,
        selectedProjectID: action.payload,
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        selectedProjectID: undefined,
        projects: state.projects.filter(
          (project) => project.id !== state.selectedProjectID,
        ),
      };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          {
            projectID: state.selectedProjectID,
            text: action.payload,
            id: Math.random(),
          },
          ...state.tasks,
        ],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}

export function ProjectsContextProvider({ children }) {
  const [projectState, dispatch] = useReducer(
    projectsReducer,
    initialProjectsState,
  );

  const startAddingProject = () => {
    dispatch({ type: "START_ADDING_PROJECT" });
  };

  const cancelProject = () => {
    dispatch({ type: "CANCEL_PROJECT" });
  };

  const saveProject = (projectData) => {
    dispatch({ type: "SAVE_PROJECT", payload: projectData });
  };

  const selectProject = (id) => {
    dispatch({ type: "SELECT_PROJECT", payload: id });
  };

  const deleteProject = () => {
    dispatch({ type: "DELETE_PROJECT" });
  };

  const addTask = (text) => {
    dispatch({ type: "ADD_TASK", payload: text });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const contextValue = {
    projectState,
    startAddingProject,
    cancelProject,
    saveProject,
    selectProject,
    deleteProject,
    addTask,
    deleteTask,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsContextProvider",
    );
  }
  return context;
}
