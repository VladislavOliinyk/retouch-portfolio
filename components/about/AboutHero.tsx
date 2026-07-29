import PortfolioImage from "@/components/ui/PortfolioImage";
import Heading from "@/components/ui/Heading";

export default function AboutHero() {
  return (
    <section className="grid gap-16 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          About
        </p>

        <Heading>
          I create clean, natural and high-end photo retouching that preserves
          texture, light and emotion.
        </Heading>
      </div>

      <PortfolioImage
        src="/about/lily.jpg"
        alt="Lily Oliinyk"
        width={900}
        height={1200}
        className="w-full h-auto object-cover"
      />
    </section>
  );
}