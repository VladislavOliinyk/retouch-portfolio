"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, portfolioItems, type PortfolioItem, type WorkCategory } from "@/data/portfolio";
import type { Dictionary } from "@/dictionaries";
import { SectionReveal } from "./section-reveal";

type Filter = WorkCategory | "All";

export function Portfolio({ dictionary }: { dictionary: Dictionary }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const visibleItems = useMemo(() => {
    return filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="work" className="scroll-mt-24 py-12 md:py-24">
      <div className="container">
        <SectionReveal className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.6fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-gold">{dictionary.portfolio.eyebrow}</p>
          </div>
          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-none text-bone md:text-8xl">{dictionary.portfolio.title}</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {(["All", ...categories] as Filter[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`h-11 border px-4 text-xs uppercase tracking-[0.22em] transition ${
                    filter === category ? "border-gold bg-gold text-ink" : "border-white/15 text-muted hover:border-gold hover:text-gold"
                  }`}
                >
                  {category === "All" ? dictionary.portfolio.all : category}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="masonry">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.article
                layout
                key={item.title}
                className="masonry-item group relative overflow-hidden bg-surface"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, delay: index * 0.025 }}
                data-cursor="hover"
              >
                <button className="block w-full text-left" onClick={() => setActive(item)} aria-label={`${dictionary.portfolio.open}: ${item.title}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    sizes="(min-width: 1120px) 31vw, (min-width: 720px) 48vw, 100vw"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/84 via-ink/8 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-end justify-between gap-4 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <h3 className="font-serif text-3xl text-bone">{item.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gold">{item.category} / {item.year}</p>
                    </div>
                    <Maximize2 className="shrink-0 text-bone" size={20} />
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div className="fixed inset-0 z-[80] bg-ink/96 p-4 backdrop-blur-xl md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center border border-white/15 text-bone transition hover:border-gold hover:text-gold" onClick={() => setActive(null)} aria-label={dictionary.portfolio.close}>
              <X size={22} />
            </button>
            <div className="grid h-full place-items-center">
              <div className="relative h-[82vh] w-full max-w-5xl">
                <Image src={active.image} alt={active.title} fill className="object-contain" sizes="100vw" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-6 text-xs uppercase tracking-[0.24em] text-muted md:left-10 md:right-10">
                <span>{active.title}</span>
                <span>{active.category} / {active.year}</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
