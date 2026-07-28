import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { SectionReveal } from "./section-reveal";

export function About({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-32">
      <div className="container grid gap-12 md:grid-cols-[1.05fr_1fr] md:items-center">
        <SectionReveal>
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <Image src="/images/work-02.jpg" alt="Retouching studio visual" fill className="object-cover" sizes="(min-width: 900px) 48vw, 100vw" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <p className="text-xs uppercase tracking-[0.36em] text-gold">{dictionary.about.eyebrow}</p>
          <h2 className="mt-5 font-serif text-5xl leading-none text-bone md:text-7xl">{dictionary.about.title}</h2>
          <p className="mt-8 text-lg leading-8 text-muted">{dictionary.about.copy}</p>
          <div className="mt-12 grid grid-cols-3 border-y border-white/10">
            {dictionary.about.stats.map((stat) => (
              <div key={stat} className="border-r border-white/10 py-6 last:border-r-0">
                <p className="font-serif text-3xl text-bone md:text-5xl">{stat.split(" ")[0]}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{stat.replace(stat.split(" ")[0], "").trim() || "standard"}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
