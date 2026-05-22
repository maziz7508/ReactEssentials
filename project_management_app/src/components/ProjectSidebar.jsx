import Button from "./Button";
export default function ProjectSideBar({ onStartAddProject }) {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="text-xl font-bold mb-8 uppercase  text-stone-200">
        Your Projects
      </h1>

      <div>
        <Button onClick={onStartAddProject}> + Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
