import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <Section className="pt-12">
      <Container>
        <ContactHero />
      </Container>
    </Section>
  );
}