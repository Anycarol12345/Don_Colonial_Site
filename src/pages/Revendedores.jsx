import { MapPin } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { contacts } from '../data/contacts.js';
import { regioesAtendidas, revendedores } from '../data/revendedores.js';

export default function Revendedores() {
  return (
    <>
      <PageHero
        eyebrow="Revendedores"
        title="Venda Don Colonial na sua região."
        description="Fale com a equipe comercial e veja as opções para trabalhar com pão de queijo congelado."
      />

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card h-fit">
            <p className="section-eyebrow">Área de atuação</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--color-dark)]">Atendimento a partir de Maringá/PR.</h2>
            <div className="mt-6 space-y-3">
              {regioesAtendidas.map((regiao) => (
                <p key={regiao} className="flex gap-3 text-[var(--color-muted)]">
                  <MapPin className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
                  {regiao}
                </p>
              ))}
            </div>
            <a href={contacts.whatsappLink} className="btn-primary mt-8 w-full justify-center" target="_blank" rel="noreferrer">
              Quero revender
            </a>
          </aside>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-black/5">
            {revendedores.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl bg-[var(--color-bg-alt)] p-8 text-center">
                <h2 className="text-2xl font-black text-[var(--color-dark)]">Quer levar a marca para sua cidade?</h2>
                <p className="mt-3 max-w-md leading-7 text-[var(--color-muted)]">
                  Entre em contato pelo WhatsApp e conte um pouco sobre sua loja, mercado, cafeteria ou distribuidora.
                </p>
                <a href={contacts.whatsappLink} className="btn-primary mt-6" target="_blank" rel="noreferrer">
                  Conversar com a equipe
                </a>
              </div>
            ) : (
              <div className="overflow-x-auto">
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
        </div>
      </section>
    </>
  );
}
