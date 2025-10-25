"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 lg:px-20 bg-base-100 min-h-screen"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative max-w-[400px] max-h-[400px] w-full h-full rounded-sm overflow-hidden">
            <Image
              src="https://i.ibb.co/B2PnMv49/profile.png"
              alt="Shazzed"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-sm"
            />
          </div>
        </div>

        {/* Right side - Step cards */}
        <div className="flex-1 space-y-8">
          {/* Step 1: Introduction */}
          <div className="relative pl-6 border-l-4 border-gradient-to-b from-purple-500 to-pink-500">
            <h3 className="text-xl font-semibold mb-2 ">Introduction</h3>
            <p className="text-base-content/80">
              Hi, I’m <span className="font-semibold">Shazzed</span>, a
              passionate{" "}
              <span className="font-semibold">MERN Stack Developer</span> from{" "}
              <span className="font-semibold">Chittagong, Bangladesh</span>. I’m
              currently pursuing my{" "}
              <span className="font-semibold">
                Bachelor’s degree (Hon’s level)
              </span>{" "}
              and love turning ideas into full-stack web applications.
            </p>
          </div>

          {/* Step 2: My Programming Journey */}
          <div className="relative pl-6 border-l-4 border-gradient-to-b from-blue-500 to-cyan-500">
            <h3 className="text-xl font-semibold mb-2">
              My Programming Journey
            </h3>
            <p className="text-base-content/80">
              My journey began with curiosity about how web apps are built. I
              started with <span className="font-semibold">HTML</span> and{" "}
              <span className="font-semibold">CSS</span>, then explored{" "}
              <span className="font-semibold">JavaScript</span>,{" "}
              <span className="font-semibold">React</span>, and{" "}
              <span className="font-semibold">Node.js</span> to dive deeper into
              full-stack development. Through consistent practice and
              dedication, I completed a{" "}
              <span className="font-semibold">MERN Stack course</span> and now
              enjoy building modern web apps.
            </p>
          </div>

          {/* Step 3: The Type of Work I Enjoy */}
          <div className="relative pl-6 border-l-4 border-gradient-to-b from-green-500 to-emerald-400">
            <h3 className="text-xl font-semibold mb-2 ">
              The Type of Work I Enjoy
            </h3>
            <p className="text-base-content/80">
              I love working on{" "}
              <span className="font-semibold">
                interactive web applications
              </span>
              , <span className="font-semibold">dashboards</span>, and{" "}
              <span className="font-semibold">full-stack projects</span> that
              combine both frontend and backend logic. My favorite part is
              solving problems and creating{" "}
              <span className="font-semibold">user-focused designs</span>.
            </p>
          </div>

          {/* Step 4: Beyond Programming */}
          <div className="relative pl-6 border-l-4 border-gradient-to-b from-pink-500 to-orange-400">
            <h3 className="text-xl font-semibold mb-2 ">Beyond Programming</h3>
            <p className="text-base-content/80">
              Outside of coding, I have a{" "}
              <span className="font-semibold">business mindset</span> and love
              exploring how technology connects with entrepreneurship. My full
              focus is on learning in depth and building{" "}
              <span className="font-semibold">practical projects</span>
              that help me grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
