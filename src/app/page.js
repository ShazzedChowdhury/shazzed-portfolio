import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import MyProjectsSection from "@/components/MyProjectsSection/MyProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
   <main>
    <Hero />
    <AboutSection />
    <SkillsSection />
    <MyProjectsSection />
    <ContactSection />
   </main>
  );
}
