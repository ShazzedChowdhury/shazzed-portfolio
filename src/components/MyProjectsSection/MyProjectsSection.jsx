import myProjects from "@/components/data/my-projects.json"
import ProjectCard from "./components/ProjectCard";

const MyProjectsSection = () => {  
  
    return (
      <section
        id="projects"
        className="max-w-7xl mx-auto p-5 min-h-screen flex flex-col justify-center py-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-center">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
            Porjects
          </span>
        </h2>
        <p className="text-lg p-3 lg:w-3/5 text-center mx-auto">
          Here you’ll find a selection of projects I’ve built, showcasing my
          skills in web development, design, and problem-solving. Each project
          highlights the technologies I use and the solutions I create to turn
          ideas into reality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 gap-5">
          {myProjects.map((project) => {
            return <ProjectCard key={project?.id} project={project} />;
          })}
        </div>
      </section>
    );
};

export default MyProjectsSection;