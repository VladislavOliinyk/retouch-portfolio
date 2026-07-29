import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import AboutHero from "@/components/about/AboutHero";
import AboutText from "@/components/about/AboutText";
import AboutStats from "@/components/about/AboutStats";

export default function AboutPage() {
  return (
    <Section className="pt-12">
      <Container>
        <AboutHero />

        <AboutText />

        <AboutStats />
      </Container>
    </Section>
  );
}