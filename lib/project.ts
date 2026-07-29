import { projectImage } from "./project-path";

export function getProjectHref(slug: string) {
  return `/projects/${slug}`;
}

export function getProjectCover(slug: string) {
  return projectImage(slug, "cover.jpg");
}

export function getProjectImages(
  slug: string,
  imageCount: number
) {
  return Array.from({ length: imageCount }, (_, index) => ({
    src: projectImage(
      slug,
      `${String(index + 1).padStart(2, "0")}.jpg`
    ),
    alt: slug,
  }));
}