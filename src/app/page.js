import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import Hero from "@/components/Hero";
import MyProjectsSection from "@/components/MyProjectsSection/MyProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
   <main>
    <Hero />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <MyProjectsSection />
    <ContactSection />
   </main>
  );
}
