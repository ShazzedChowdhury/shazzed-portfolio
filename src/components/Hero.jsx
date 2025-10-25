"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "./SocialLink";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-68px)] flex flex-col justify-center items-center text-center p-6 relative"
    >
      {/* Motion Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl flex flex-col-reverse lg:flex-row gap-5"
      >
        <div className="text-center lg:text-left">
          {/* Subtitle */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
              Shazzed ✨ <br />A Mern Stack Developer{" "}
            </span>
          </h1>

          {/* Title */}
          {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Building Creative Web Experiences with Code & Design
            </h1> */}

          {/* Description */}
          <p className="text-foreground mb-8 leading-relaxed text-2xl w-full lg:w-4/5">
            I’m a Mern Stack Developer passionate about crafting modern,
            performant, and visually appealing web applications using React,
            Next.js, and Tailwind CSS.
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" variant={"outline"} asChild>
                <Link href="#projects" className="flex items-center gap-2">
                  View My Resume <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <SocialLink isShowBorder={true} />
          </div>
        </div>

        <div className="relative max-w-80 w-full max-h-80 h-full rounded-full p-[4px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden bg-background">
            <Image
              src="/profile.jpg"
              width={400}
              height={400}
              alt="Profile image"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
