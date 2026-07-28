"use client";

import Image from "next/image";
import { ArrowDown, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export function Hero({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 110]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image src="/images/hero.jpg" alt="Editorial beauty retouching hero image" fill priority className="object-cover object-[68%_28%]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.88),rgba(11,11,11,0.28)_48%,rgba(11,11,11,0.7))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>

      <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center pb-20 pt-24">
        <div className="max-w-5xl">
          <motion.p className="mb-8 text-xs uppercase tracking-[0.42em] text-gold" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            {dictionary.hero.label}
          </motion.p>
          <motion.h1
            className="max-w-5xl text-balance font-serif text-[clamp(3.5rem,7.4vw,8.4rem)] font-medium leading-[0.9] tracking-normal text-bone"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08 }}
          >
            {dictionary.hero.title}
          </motion.h1>
          <motion.div
            className="mt-8 flex max-w-3xl flex-col gap-7 md:ml-1 md:flex-row md:items-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18 }}
          >
            <p className="text-base leading-8 text-bone/78 md:text-lg">{dictionary.hero.copy}</p>
            <div className="flex shrink-0 gap-3">
              <a href="#work" className="inline-flex h-12 items-center gap-2 border border-gold bg-gold px-5 text-xs uppercase tracking-[0.22em] text-ink transition hover:bg-bone">
                <ArrowDown size={16} />
                {dictionary.hero.primary}
              </a>
              <a href="#contact" className="inline-flex h-12 items-center gap-2 border border-white/20 px-5 text-xs uppercase tracking-[0.22em] text-bone transition hover:border-gold hover:text-gold">
                <Send size={16} />
                {dictionary.hero.secondary}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10 -mt-16 hidden pb-8 md:block">
        <div className="flex items-center justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.28em] text-muted">
          <span>Beauty / Fashion / Product</span>
          <span>{locale.toUpperCase()} 2026</span>
        </div>
      </div>
    </section>
  );
}
