import Hero from "@/components/Hero";
import MyProjectsSection from "@/components/MyProjectsSection/MyProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
   <main>
    <Hero />
    <SkillsSection />
    <MyProjectsSection />
   </main>
  );
}
