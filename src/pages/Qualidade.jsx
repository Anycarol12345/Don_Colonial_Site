import { CheckCircle2, Cookie, Package, Snowflake } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

const qualityItems = [
  {
    icon: Cookie,
    title: 'Receita com sabor caseiro',
    text: 'Massa macia, casquinha boa e queijo aparecendo no sabor.',
  },
  {
    icon: CheckCircle2,
    title: 'Ingredientes escolhidos com cuidado',
    text: 'O catálogo destaca linhas sem essência, conservante, saborizante e corante.',
  },
  {
    icon: Snowflake,
    title: 'Congelado para facilitar',
    text: 'Ajuda no estoque, no preparo e na rotina de quem vende ou consome em casa.',
  },
  {
    icon: Package,
    title: 'Embalagens variadas',
    text: 'Opções para consumo familiar, cafeteria, mercado e revenda.',
  },
];

export default function Qualidade() {
  return (
    <>
      <PageHero
        eyebrow="Qualidade"
        title="Do freezer ao forno com praticidade e sabor."
        description="Pão de queijo congelado para assar quando quiser, sem abrir mão do sabor caseiro."
      />

      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {qualityItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="card">
                <Icon className="text-[var(--color-primary)]" size={34} />
                <h2 className="mt-5 text-xl font-bold text-[var(--color-dark)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section bg-[var(--color-bg-alt)]">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <img
            src="/images/catalogo-produtos/produto-tradicional.jpg"
            alt="Pão de queijo tradicional Don Colonial"
            className="h-[420px] w-full rounded-xl bg-[var(--color-dark)] object-contain shadow-xl"
          />
          <div>
            <p className="section-eyebrow">Valor para o cliente</p>
            <h2 className="mt-3 text-4xl font-black text-[var(--color-dark)]">Você sabe o que está levando.</h2>
            <p className="mt-5 leading-7 text-[var(--color-muted)]">
              Cada linha mostra sabores, tamanhos, textura e informação de glúten para facilitar a escolha.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
