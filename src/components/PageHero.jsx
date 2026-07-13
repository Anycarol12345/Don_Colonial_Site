export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,162,28,0.28),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--color-accent)]" />
      <div className="container relative">
        <p className="section-eyebrow text-white/75">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{description}</p>}
      </div>
    </section>
  );
}
