import { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { getProjectHref } from "@/lib/project";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lilyoliinyk.com";

  return [
    {
      url: base,
    },
    {
      url: `${base}/about`,
    },
    {
      url: `${base}/contact`,
    },
    ...projects.map((project) => ({
      url: `${base}${getProjectHref(project.slug)}`,
    })),
  ];
}