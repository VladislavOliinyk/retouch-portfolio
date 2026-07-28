"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { SectionReveal } from "./section-reveal";

export function BeforeAfter({ dictionary }: { dictionary: Dictionary }) {
  const [position, setPosition] = useState(52);
  const frameRef = useRef<HTMLDivElement>(null);

  const update = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container grid gap-12 md:grid-cols-[0.85fr_1.4fr] md:items-center">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.36em] text-gold">{dictionary.compare.eyebrow}</p>
          <h2 className="mt-5 font-serif text-5xl leading-none text-bone md:text-7xl">{dictionary.compare.title}</h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted">{dictionary.compare.copy}</p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div
            ref={frameRef}
            className="relative aspect-[4/5] max-h-[760px] overflow-hidden bg-surface select-none"
            onPointerMove={(event) => event.buttons === 1 && update(event.clientX)}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              update(event.clientX);
            }}
            data-cursor="hover"
          >
            <Image src="/images/work-04.jpg" alt="Before retouch" fill className="object-cover grayscale contrast-75 saturate-50" sizes="(min-width: 900px) 58vw, 100vw" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
              <Image src="/images/work-04.jpg" alt="After retouch" fill className="object-cover contrast-110 saturate-125" sizes="(min-width: 900px) 58vw, 100vw" />
            </div>
            <div className="absolute inset-y-0 w-px bg-gold" style={{ left: `${position}%` }} />
            <motion.div className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center border border-gold bg-ink/85 text-gold" style={{ left: `${position}%` }} whileTap={{ scale: 0.92 }}>
              <span className="h-1 w-5 border-y border-gold" />
            </motion.div>
            <div className="absolute left-4 top-4 bg-ink/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted">{dictionary.compare.after}</div>
            <div className="absolute right-4 top-4 bg-ink/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted">{dictionary.compare.before}</div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
