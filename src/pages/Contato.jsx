import { AtSign, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { contacts } from '../data/contacts.js';

const contactCards = [
  { icon: Phone, label: 'Telefone', value: contacts.phone, href: `tel:${contacts.phone.replace(/\D/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: contacts.whatsapp, href: contacts.whatsappLink },
  { icon: Mail, label: 'E-mail', value: contacts.email, href: `mailto:${contacts.email}` },
  { icon: AtSign, label: 'Instagram', value: contacts.instagram, href: contacts.instagramUrl },
];

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Don Colonial."
        description="Tire dúvidas, peça informações sobre produtos ou converse sobre revenda."
      />

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex gap-4 rounded-xl bg-white p-5 shadow-lg shadow-black/5 transition hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    <Icon size={24} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-bold text-[var(--color-dark)]">{item.value}</span>
                  </span>
                </a>
              );
            })}

            <div className="rounded-xl bg-[var(--color-bg-alt)] p-6">
              <p className="flex gap-3 leading-7 text-[var(--color-muted)]">
                <MapPin className="mt-1 shrink-0 text-[var(--color-primary)]" size={20} />
                {contacts.address}
              </p>
            </div>
          </div>

          <form className="rounded-xl bg-white p-6 shadow-xl shadow-black/5 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nome" placeholder="Seu nome" />
              <Field label="Telefone" placeholder="(00) 00000-0000" />
              <Field label="E-mail" placeholder="voce@email.com" type="email" />
              <label className="grid gap-2 text-sm font-bold text-[var(--color-dark)]">
                Assunto
                <select className="input">
                  <option>Informações sobre produtos</option>
                  <option>Seja um revendedor</option>
                  <option>Dúvidas gerais</option>
                  <option>Sugestões</option>
                  <option>Outros</option>
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-[var(--color-dark)]">
              Mensagem
              <textarea className="input min-h-36 resize-y" placeholder="Como podemos ajudar?" />
            </label>
            <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
              Para agilizar o atendimento, envie sua mensagem pelo WhatsApp.
            </p>
            <a href={contacts.whatsappLink} target="_blank" rel="noreferrer" className="btn-primary mt-6 w-full justify-center">
              Enviar pelo WhatsApp
            </a>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[var(--color-dark)]">
      {label}
      <input className="input" placeholder={placeholder} type={type} />
    </label>
  );
}
