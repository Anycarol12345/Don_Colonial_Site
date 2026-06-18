import { CheckCircle2 } from 'lucide-react';

export default function ProductBand({ product, reverse = false }) {
  return (
    <article
      className={`grid items-center gap-10 rounded-xl bg-white p-6 shadow-xl shadow-black/5 md:grid-cols-2 md:p-10 ${
        reverse ? 'md:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div className="relative overflow-hidden rounded-lg bg-[var(--color-dark)] p-4">
        <img src={product.image} alt={product.name} className="h-[340px] w-full object-contain" />
      </div>

      <div>
        <p className="section-eyebrow">{product.brand}</p>
        <h2 className="mt-2 text-3xl font-black text-[var(--color-dark)]">{product.name}</h2>
        <p className="mt-3 text-lg font-semibold text-[var(--color-primary-dark)]">{product.tagline}</p>
        <p className="mt-4 leading-7 text-[var(--color-muted)]">{product.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoBlock title="Queijos" items={product.queijos.length ? product.queijos : ['Consulte a embalagem']} />
          <InfoBlock title="Características" items={product.caracteristicas} />
        </div>

        <div className="mt-6 grid gap-3">
          {product.embalagens.map((item) => (
            <div key={item.peso} className="rounded-lg bg-[var(--color-bg-alt)] p-4">
              <strong className="text-[var(--color-dark)]">Embalagem {item.peso}</strong>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{item.tamanhos.join(' | ')}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <span className="pill">{product.textura}</span>
          <span className="pill">Glúten: {product.gluten}</span>
        </div>

        {product.recheados && (
          <div className="mt-6">
            <h3 className="font-bold text-[var(--color-dark)]">Sabores recheados</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.recheados.map((item) => (
                <span key={item.sabor} className="rounded-md bg-[var(--color-primary-soft)] px-4 py-2 text-sm font-semibold">
                  {item.sabor}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function InfoBlock({ title, items }) {
  return (
    <div className="rounded-lg border border-black/5 p-4">
      <h3 className="mb-3 font-bold text-[var(--color-dark)]">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--color-muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={17} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
