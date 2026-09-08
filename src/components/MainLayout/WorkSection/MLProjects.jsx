import ProjectCarousel from "./ProjectCarousel";
import projects from "./projectData";

const machineLearningProjects = projects.filter(
  (project) => project.tag === "Machine Learning"
);

export default function MLProjects() {
  return (
    <ProjectCarousel
      projects={machineLearningProjects}
      category="Machine Learning"
    />
  );
}
