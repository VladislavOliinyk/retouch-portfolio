import Link from "next/link";

import { Project } from "@/types/project";
import { getProjectHref } from "@/lib/project";

type Props = {
  previous?: Project;
  next?: Project;
};

export default function ProjectNavigation({
  previous,
  next,
}: Props) {
  return (
    <div className="mt-24 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-12">
      <div>
        {previous && (
          <>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
              Previous
            </p>

            <Link
              href={getProjectHref(previous.slug)}
              className="text-xl transition-opacity hover:opacity-60"
            >
              ← {previous.title}
            </Link>
          </>
        )}
      </div>

      <div className="text-right">
        {next && (
          <>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
              Next
            </p>

            <Link
              href={getProjectHref(next.slug)}
              className="text-xl transition-opacity hover:opacity-60"
            >
              {next.title} →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}