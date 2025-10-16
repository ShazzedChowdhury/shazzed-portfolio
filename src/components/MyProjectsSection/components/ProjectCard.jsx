import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project }) => {
  const { projectTitle, projectImg, githubLink, liveLink, technologies } =
    project;
  const id = 1;
  return (
    <div className=" rounded-xl overflow-hidden border border-[#2b2e3e] shadow-lg hover:shadow-[#2b2e3e]/50 transition-all duration-300 p-[2px]">
      <div className="shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden w-full h-full rounded-lg  p-2 text-white">
        <div>
          {/* Project Image */}
          <div className="w-full h-[200px] relative">
            <Image
              src={projectImg}
              width={200}
              height={150}
              alt={projectTitle}
              className="w-full h-full object-cover  rounded-t-lg"
            />
          </div>

          {/* Project Name  */}
          <h3 className=" py-4 pt-1 text-lg font-semibold mb-2">
            {projectTitle}
          </h3>
          <div className="flex flex-wrap p-2 gap-2">
            {technologies.map((singleTechnology, index) => {
              return (
                <p
                  key={index}
                  className=" border border-gray-400 rounded-full px-2"
                >
                  {singleTechnology}
                </p>
              );
            })}
          </div>
        </div>

        <Button variant={"link"} className="my-2" asChild={true}>
          <Link href={`/projects/${id}`}>View More Details </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
