import Navigation from "@/components/navigation";
import ThemeToggle from "@/components/theme-toggle";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ChatSection from "@/components/chat-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ChatSection />
    </div>
  );
}
