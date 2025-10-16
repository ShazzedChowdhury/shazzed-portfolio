import skills from "@/components/data/skills.json"

const SkillsSection = () => {
    
    return (
      <section
        id="skills"
        className="max-w-7xl mx-auto flex flex-col lg:flex-row  gap-10 items-center lg:justify-between py-16 min-h-screen"
      >
        {/* Left side: Title and subtitle */}
        <div className="lg:w-1/2 p-5 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My Skills &{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-blue-400">
              Expertise
            </span>
          </h2>
          <p className="text-lg">
            I use a diverse set of modern technologies and tools to deliver
            high-quality, scalable, and maintainable web applications. My skill
            set ensures efficient problem solving and smooth project delivery
            for clients worldwide.
          </p>
        </div>

        {/* Right side: Skills list */}
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {skills.map((skill, index) => (
            //   <div
            //     key={index}
            //     className="relative p-1 rounded-lg overflow-hidden"
            //   >
            //     {/* Gradient border */}
            //     <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-lg blur-sm"></div>

            //     {/* Inner content */}
            //     <div className="relative bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex justify-center items-center text-gray-800 dark:text-white font-semibold">
            //       {skill}
            //     </div>
            //   </div>
            <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 flex items-center justify-center w-fit rounded-3xl">
              <div className="relative group">
                {/* Glass card */}
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-105">
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <img
                      src={skill?.imageUrl}
                      className="w-28 h-28 p-2 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Glow effect behind card */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default SkillsSection;