import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <Container>
        <p className="text-sm text-neutral-500">
          {siteConfig.copyright}
        </p>
      </Container>
    </footer>
  );
}