export default function AboutStats() {
  return (
    <section className="mt-24 border-t border-neutral-200 pt-12">
      <div className="grid grid-cols-3 gap-10">
        <div>
          <p className="text-4xl font-medium">6+</p>
          <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
            Years
          </p>
        </div>

        <div>
          <p className="text-4xl font-medium">300+</p>
          <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
            Projects
          </p>
        </div>

        <div>
          <p className="text-4xl font-medium">100%</p>
          <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
            Attention to Detail
          </p>
        </div>
      </div>
    </section>
  );
}