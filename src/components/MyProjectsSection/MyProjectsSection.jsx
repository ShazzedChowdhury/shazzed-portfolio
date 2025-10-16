import myProjects from "@/components/data/my-projects.json"
import ProjectCard from "./components/ProjectCard";

const MyProjectsSection = () => {  
    console.log(myProjects);  
    return (
      <section id="projects" className="max-w-7xl mx-auto p-5 min-h-screen flex flex-col justify-center py-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-center">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-blue-400">
           Porjects
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 gap-5">
          {myProjects.map((project) => {
            return <ProjectCard key={project?.id} project={project} />;
          })}
        </div>
      </section>
    );
};

export default MyProjectsSection;