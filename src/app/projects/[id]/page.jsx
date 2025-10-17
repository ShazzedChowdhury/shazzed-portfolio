import Image from 'next/image';
import projects from "@/components/data/my-projects.json"
import Link from 'next/link';

const projectDetailsPage = async({ params }) => {
    const {id} = await params;
    const selectedProject = projects.find(project => project.id === id);

      if (!selectedProject) {
        return (
          <main className="pt-[80px] min-h-screen flex items-center justify-center text-gray-400">
            <p>Project not found</p>
          </main>
        );
      }

      return (
        <main className="pt-[80px] bg-black text-gray-200">
          <section className="max-w-7xl mx-auto p-6 space-y-10">
            {/* Image and Basic Info */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Project Image */}
              <figure className="max-w-[500px] max-h-[400px] w-full h-full relative overflow-hidden rounded-xl border border-gray-700 shadow-lg">
                <Image
                  src={selectedProject?.projectImg}
                  alt={selectedProject?.projectTitle}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>

              {/* Title and Links */}
              <div className="flex-1 space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject?.projectTitle}
                </h1>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Live link:</strong>{" "}
                  <Link
                    href={selectedProject?.liveUrl}
                    target="_blank"
                    className="text-green-400 hover:underline break-all"
                  >
                    {selectedProject?.liveUrl}
                  </Link>
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Github link:</strong>{" "}
                  <Link
                    href={selectedProject?.githubLink}
                    target="_blank"
                    className="text-blue-400 hover:underline break-all"
                  >
                    {selectedProject?.githubLink}
                  </Link>
                </p>
              </div>
            </div>

            {/* Challenges Section */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                Description
              </h2>
              <p className="pt-4 text-gray-300 leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>

            {/* Packages / Libraries Section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-white border-b border-gray-700 pb-2 capitalize">
                {selectedProject?.packageDescription?.title}
              </h2>
              <ul className="list-disc list-inside grid sm:grid-cols-2 lg:grid-cols-3 gap-y-1 text-gray-300 pl-4">
                {selectedProject?.packageDescription?.packages?.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Challenges Section */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                Challenges
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {selectedProject?.challenges}
              </p>
            </div>

            {/* Future Plans Section */}
            <div className="space-y-3 pb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                Future Plans
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {selectedProject?.futurePlans}
              </p>
            </div>
          </section>
        </main>
      );
    // return (
    //   <main className="pt-[64px]">
    //     <section className="max-w-7xl mx-auto p-5">
    //       {/* image and title */}
    //       <div className="flex flex-col md:flex-row gap-5">
    //         <figure className="max-w-[500px] max-h-[400px] w-full h-full relative">
    //           <Image
    //             src={selectedProject?.projectImg}
    //             width={300}
    //             height={300}
    //             alt={selectedProject?.projectTitle}
    //             className="w-full h-full object-cover"
    //           />
    //         </figure>
    //         <div>
    //           <h1>{selectedProject?.projectTitle}</h1>
    //           <p>
    //             Live link:{" "}
    //             <Link
    //               href={selectedProject?.liveUrl}
    //               target="_blank"
    //               className="hover:underline"
    //             >
    //               {selectedProject?.liveUrl}
    //             </Link>
    //           </p>
    //           <p>
    //             Github link:{" "}
    //             <Link
    //               href={selectedProject?.githubLink}
    //               target="_blank"
    //               className="hover:underline"
    //             >
    //               {selectedProject?.githubLink}
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="flex gap-2">
    //           <h2>Description:</h2>
    //           <p>{selectedProject?.description}</p>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="">
    //           <h2>{selectedProject?.packageDescription?.title}</h2>
    //           <div>
    //             {selectedProject?.packageDescription?.packages?.map((tech) => {
    //               return <p>{tech}</p>;
    //             })}
    //           </div>
    //         </div>
    //         <div>
    //           <h2>Challenges:</h2>
    //           <p>{selectedProject?.challenges}</p>
    //         </div>
    //         <div>
    //           <h2>Futute Plans:</h2>
    //           <p>{selectedProject?.futurePlans}</p>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // );
};

export default projectDetailsPage;