import PageHero from '../components/PageHero.jsx';

const blocks = [
  {
    title: 'História',
    text: 'A Don Colonial nasceu em Maringá com foco em pão de queijo congelado e atendimento próximo.',
  },
  {
    title: 'Missão',
    text: 'Levar pão de queijo saboroso e prático para a mesa das famílias e para bons pontos de venda.',
  },
  {
    title: 'Visão',
    text: 'Crescer com produtos bem feitos, parceiros bem atendidos e presença cada vez maior na região.',
  },
  {
    title: 'Valores',
    text: 'Cuidado na produção, respeito no atendimento e compromisso com quem compra e revende.',
  },
];

export default function Empresa() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Pão de queijo feito para estar sempre por perto."
        description="Uma marca de Maringá que trabalha com produtos congelados, sabor caseiro e atendimento direto."
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="card">
              <span className="inline-flex rounded-md bg-[var(--color-primary-soft)] px-4 py-2 text-sm font-bold text-[var(--color-primary-dark)]">
                {block.title}
              </span>
              <p className="mt-5 leading-7 text-[var(--color-muted)]">{block.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
