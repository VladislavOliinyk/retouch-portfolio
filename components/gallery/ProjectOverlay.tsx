import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectOverlay({ project }: Props) {
  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-end
        p-8
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
    >
      <h2 className="text-2xl font-medium text-white drop-shadow-md">
        {project.title}
      </h2>
    </div>
  );
}