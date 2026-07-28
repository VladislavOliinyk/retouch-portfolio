import { ArrowUpRight, Mail, Send } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { SectionReveal } from "./section-reveal";

const socials = [
  ["Instagram", "https://instagram.com"],
  ["Behance", "https://behance.net"],
  ["Telegram", "https://t.me"],
  ["Email", "mailto:hello@retouch.studio"],
];

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-32">
      <div className="container grid gap-12 border-y border-white/10 py-16 md:grid-cols-[0.9fr_1.25fr] md:py-24">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.36em] text-gold">{dictionary.contact.eyebrow}</p>
          <h2 className="mt-5 font-serif text-5xl leading-none text-bone md:text-7xl">{dictionary.contact.title}</h2>
          <div className="mt-10 grid gap-3">
            {socials.map(([label, href]) => (
              <a key={label} className="group flex items-center justify-between border-b border-white/10 py-4 text-sm uppercase tracking-[0.22em] text-muted transition hover:text-gold" href={href}>
                {label}
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
              </a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <form className="grid gap-5" action="mailto:hello@retouch.studio" method="post">
            <label className="grid gap-3 text-xs uppercase tracking-[0.22em] text-muted">
              {dictionary.contact.name}
              <input className="h-14 border border-white/12 bg-surface px-4 text-base normal-case tracking-normal text-bone outline-none transition placeholder:text-muted/50 focus:border-gold" name="name" autoComplete="name" />
            </label>
            <label className="grid gap-3 text-xs uppercase tracking-[0.22em] text-muted">
              {dictionary.contact.email}
              <input className="h-14 border border-white/12 bg-surface px-4 text-base normal-case tracking-normal text-bone outline-none transition placeholder:text-muted/50 focus:border-gold" type="email" name="email" autoComplete="email" />
            </label>
            <label className="grid gap-3 text-xs uppercase tracking-[0.22em] text-muted">
              {dictionary.contact.message}
              <textarea className="min-h-44 resize-y border border-white/12 bg-surface p-4 text-base normal-case leading-7 tracking-normal text-bone outline-none transition placeholder:text-muted/50 focus:border-gold" name="message" />
            </label>
            <button className="mt-3 inline-flex h-14 w-fit items-center gap-3 border border-gold bg-gold px-7 text-xs uppercase tracking-[0.22em] text-ink transition hover:bg-bone" type="submit">
              <Send size={17} />
              {dictionary.contact.submit}
            </button>
          </form>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <Mail size={16} className="text-gold" />
            hello@retouch.studio
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
