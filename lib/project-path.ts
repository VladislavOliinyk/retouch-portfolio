import { asset } from "./assets";

export function projectImage(slug: string, image: string) {
  return asset(`/projects/${slug}/${image}`);
}