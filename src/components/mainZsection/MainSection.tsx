import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

const MainSection = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <BlogSection/>
      <ContactSection/>
    </div>
  );
};

export default MainSection;