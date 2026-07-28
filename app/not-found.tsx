import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.32em] text-gold">404</p>
        <h1 className="font-serif text-6xl text-bone md:text-8xl">Page not found</h1>
        <p className="mx-auto mt-6 max-w-md text-muted">This frame is not in the final selection.</p>
        <Link className="mt-10 inline-flex border border-gold px-6 py-3 text-sm uppercase tracking-[0.2em] text-gold" href="/en">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
