import ProjectCarousel from "./ProjectCarousel";
import projects from "./projectData";

const videoProjects = projects.filter(
  (project) => project.tag === "Video Editing"
);

export default function VideoProjects() {
  return <ProjectCarousel projects={videoProjects} category="Video Editing" />;
}
