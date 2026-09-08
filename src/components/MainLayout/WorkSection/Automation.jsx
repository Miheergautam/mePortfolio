import ProjectCarousel from "./ProjectCarousel";
import projects from "./projectData";

const automationProjects = projects.filter(
  (project) => project.tag === "Automation Tool"
);

export default function Automation() {
  return (
    <ProjectCarousel projects={automationProjects} category="Automation Tools" />
  );
}
