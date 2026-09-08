import ProjectCarousel from "./ProjectCarousel";
import projects from "./projectData";

const webProjects = projects.filter(
  (project) => project.tag === "Web Application"
);

export default function WebProjects() {
  return <ProjectCarousel projects={webProjects} category="Web Application" />;
}
