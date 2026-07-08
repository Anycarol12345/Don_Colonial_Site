import { BadgeCheck, Handshake, MapPin, Snowflake, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import { contacts } from '../data/contacts.js';
import { regioesAtendidas, revendedores } from '../data/revendedores.js';

const whatsappNumber = contacts.whatsappLink.match(/wa\.me\/(\d+)/)?.[1] ?? '';

const beneficios = [
  {
    icon: Handshake,
    title: 'Parceria direta',
    text: 'Atendimento comercial direto com a fábrica, sem intermediários.',
  },
  {
    icon: TrendingUp,
    title: 'Boa margem',
    text: 'Produto de giro rápido e margem atrativa para o seu ponto de venda.',
  },
  {
    icon: Snowflake,
    title: 'Logística congelada',
    text: 'Do freezer ao balcão: estoque e preparo simples no dia a dia.',
  },
  {
    icon: BadgeCheck,
    title: 'Marca que fideliza',
    text: 'Sabor caseiro de verdade que faz o cliente voltar para comprar.',
  },
];

const initialForm = {
  nome: '',
  estabelecimento: '',
  cidade: '',
  telefone: '',
  mensagem: '',
};

export default function Revendedores() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = [
      'Olá, Don Colonial! Quero me tornar um revendedor.',
      '',
      `Nome: ${form.nome}`,
      `Estabelecimento: ${form.estabelecimento}`,
      `Cidade/Estado: ${form.cidade}`,
      `Telefone: ${form.telefone}`,
      form.mensagem ? `Mensagem: ${form.mensagem}` : null,
    ]
      .filter((line) => line !== null)
      .join('\n');

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageHero
        eyebrow="Revendedores"
        title="Venda Don Colonial na sua região."
        description="Fale com a equipe comercial e veja as opções para trabalhar com pão de queijo congelado."
      />

      <section className="section">
        <div className="container grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="section-eyebrow">Torne-se um revendedor</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--color-dark)] sm:text-4xl">
              Leve o pão de queijo Don Colonial para o seu balcão.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[var(--color-muted)]">
              Preencha os dados ao lado e envie direto pelo WhatsApp. Nossa equipe comercial retorna com condições,
              preços e a linha ideal para o seu ponto de venda.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {beneficios.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-black/5 bg-white p-5 shadow-sm shadow-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-[var(--color-dark)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-xl shadow-black/5 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[var(--color-dark)]">
                Nome
                <input
                  className="input"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[var(--color-dark)]">
                Estabelecimento
                <input
                  className="input"
                  name="estabelecimento"
                  value={form.estabelecimento}
                  onChange={handleChange}
                  placeholder="Mercado, cafeteria, distribuidora..."
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[var(--color-dark)]">
                Cidade/Estado
                <input
                  className="input"
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  placeholder="Cidade - UF"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[var(--color-dark)]">
                Telefone
                <input
                  className="input"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-[var(--color-dark)]">
              Mensagem
              <textarea
                className="input min-h-32 resize-y"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Conte um pouco sobre o seu ponto de venda (opcional)"
              />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full justify-center">
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="overflow-hidden rounded-2xl bg-[var(--color-dark)] p-8 text-white shadow-xl shadow-black/10 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-eyebrow text-white/70">Área de atuação</p>
                <h2 className="mt-3 text-2xl font-black md:text-3xl">Atendimento a partir de Maringá/PR.</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {regioesAtendidas.map((regiao) => (
                    <span
                      key={regiao}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
                    >
                      <MapPin className="shrink-0 text-[var(--color-primary)]" size={16} />
                      {regiao}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={contacts.whatsappLink}
                className="btn-primary shrink-0 justify-center"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {revendedores.length > 0 && (
            <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-xl shadow-black/5">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b text-[var(--color-dark)]">
                    <th className="py-3">Revendedor</th>
                    <th className="py-3">Cidade</th>
                    <th className="py-3">Telefone</th>
                    <th className="py-3">Área de atuação</th>
                  </tr>
                </thead>
                <tbody>
                  {revendedores.map((item) => (
                    <tr key={`${item.empresa}-${item.cidade}`} className="border-b last:border-none">
                      <td className="py-4">{item.empresa}</td>
                      <td className="py-4">{item.cidade}</td>
                      <td className="py-4">{item.telefone}</td>
                      <td className="py-4 font-semibold text-[var(--color-primary-dark)]">{item.areaAtuacao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
