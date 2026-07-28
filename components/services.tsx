import { Brush, Camera, Gem, Layers, Palette, Sparkles } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { SectionReveal } from "./section-reveal";

const icons = [Sparkles, Camera, Gem, Brush, Palette, Layers];

export function Services({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-32">
      <div className="container">
        <SectionReveal className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.36em] text-gold">{dictionary.services.eyebrow}</p>
          <h2 className="mt-5 font-serif text-5xl leading-none text-bone md:text-8xl">{dictionary.services.title}</h2>
        </SectionReveal>

        <div className="mt-14 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {dictionary.services.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <SectionReveal key={item} delay={index * 0.04} className="border-b border-white/10 p-7 md:min-h-56 md:border-r md:p-9 lg:[&:nth-child(3n)]:border-r-0">
                <Icon className="mb-10 text-gold" size={28} strokeWidth={1.4} />
                <h3 className="font-serif text-4xl text-bone">{item}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">
                  Controlled detail work, consistent delivery, and non-destructive finishing prepared for commercial approval rounds.
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
