import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProjectGrid from "@/components/gallery/ProjectGrid";

export default function HomePage() {
  return (
    <Section className="pt-14">
      <Container>

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Projects
          </p>
        </div>

        <ProjectGrid />

      </Container>
    </Section>
  );
}