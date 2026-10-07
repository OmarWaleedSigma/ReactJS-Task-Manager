// import NoProjectSelected from "./components/NoProjectSelected";
import AddNewProject from "./components/AddNewProject";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <main className="flex h-screen gap-8 my-8 ">
      <SideBar/>
      {/* <NoProjectSelected /> */}
      <AddNewProject />
    </main>
  )
}