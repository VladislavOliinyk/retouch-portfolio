import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PortfolioImage from "@/components/ui/PortfolioImage";
import ProjectNavigation from "@/components/gallery/ProjectNavigation";

import { projects } from "@/data/projects";
import { getProjectImages } from "@/lib/project";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const index = projects.findIndex(
    (project) => project.slug === slug
  );

  if (index === -1) {
    notFound();
  }

  const project = projects[index];

  const previous =
    index > 0 ? projects[index - 1] : undefined;

  const next =
    index < projects.length - 1
      ? projects[index + 1]
      : undefined;

  const images = getProjectImages(
    project.slug,
    project.imageCount
  );

  return (
    <Section className="pt-12">
      <Container>
        <div className="mb-16">
          <h1 className="text-4xl font-medium tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
            {project.description}
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
          {images.map((image) => (
            <PortfolioImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1800}
              height={2400}
              className="h-auto w-full"
            />
          ))}
        </div>

        <ProjectNavigation
          previous={previous}
          next={next}
        />
      </Container>
    </Section>
  );
}