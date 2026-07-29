import ProjectCard from "./ProjectCard";

import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-x-10
        gap-y-20
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}