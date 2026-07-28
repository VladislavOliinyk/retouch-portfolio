import type { Dictionary } from "@/dictionaries";
import { SectionReveal } from "./section-reveal";

export function Intro({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="py-24 md:py-36">
      <div className="container grid gap-10 border-y border-white/10 py-16 md:grid-cols-[0.9fr_1.6fr] md:py-24">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.36em] text-gold">{dictionary.intro.eyebrow}</p>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="max-w-5xl font-serif text-5xl leading-[0.98] text-bone md:text-7xl">{dictionary.intro.title}</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">{dictionary.intro.copy}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
