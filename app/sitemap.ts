import { MetadataRoute } from "next";

import { projects } from "@/data/projects";

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
      url: `${base}${project.href}`,
    })),
  ];
}