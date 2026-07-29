import Link from "next/link";

import PortfolioImage from "@/components/ui/PortfolioImage";
import ProjectOverlay from "@/components/gallery/ProjectOverlay";

import { Project } from "@/types/project";
import {
  getProjectCover,
  getProjectHref,
} from "@/lib/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={getProjectHref(project.slug)}
      className="group block"
    >
      <div className="relative overflow-hidden bg-neutral-100">
        <PortfolioImage
          src={getProjectCover(project.slug)}
          alt={project.title}
          width={900}
          height={1200}
          className="
            h-auto
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
        />

        <ProjectOverlay project={project} />
      </div>
    </Link>
  );
}