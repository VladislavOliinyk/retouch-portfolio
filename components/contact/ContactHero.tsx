import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="max-w-4xl">

      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
        Contact
      </p>

      <h1 className="text-5xl font-medium leading-tight tracking-tight">
        Let's create something beautiful together.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
        I'm available for beauty, fashion, commercial and
        editorial retouching projects worldwide.
      </p>

      <div className="mt-20 space-y-6">

        <Link
          href="mailto:hello@lilyoliiynyk.com"
          className="block text-2xl transition-opacity hover:opacity-60"
        >
          hello@lilyoliiynyk.com
        </Link>

        <Link
          href="https://instagram.com/"
          target="_blank"
          className="block text-2xl transition-opacity hover:opacity-60"
        >
          Instagram
        </Link>

        <Link
          href="https://linkedin.com/"
          target="_blank"
          className="block text-2xl transition-opacity hover:opacity-60"
        >
          LinkedIn
        </Link>

      </div>

      <p className="mt-24 text-neutral-500">
        Based in Ukraine · Available worldwide
      </p>

    </section>
  );
}