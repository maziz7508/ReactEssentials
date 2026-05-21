import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
