const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function projectImage(slug: string, image: string) {
  return `${basePath}/projects/${slug}/${image}`;
}