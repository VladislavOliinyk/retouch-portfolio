import Container from "@/components/ui/Container";

import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="py-10">
      <Container>
        <div className="flex items-start justify-between">

          <Logo />

          <div className="flex items-center gap-12">
            <Navigation />
            <SocialLinks />
          </div>

        </div>
      </Container>
    </header>
  );
}