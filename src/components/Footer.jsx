import { AtSign, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { contacts } from '../data/contacts.js';

const quickLinks = [
  ['Produtos', '/produtos'],
  ['Sobre nós', '/empresa'],
  ['Qualidade', '/qualidade'],
  ['Revendedores', '/revendedores'],
  ['Contato', '/contato'],
];

const channels = [
  { label: 'Instagram', value: contacts.instagram, href: contacts.instagramUrl, icon: AtSign },
  { label: 'WhatsApp', value: contacts.whatsapp, href: contacts.whatsappLink, icon: MessageCircle },
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacts.address)}`;

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src="/images/logo-don-colonial.png" alt="Don Colonial" className="mb-5 h-16 w-auto brightness-110" />
          <p className="max-w-md text-sm leading-7 text-white/75">
            Pão de queijo congelado feito em Maringá/PR, com sabor caseiro para famílias, cafeterias, mercados e
            revendedores.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
            <ShieldCheck className="text-[var(--color-primary)]" size={18} />
            Qualidade Don Colonial
          </div>
        </div>

        <nav aria-label="Acesso rápido">
          <h2 className="footer-title">Acesso rápido</h2>
          <div className="grid gap-2">
            {quickLinks.map(([label, to]) => (
              <NavLink key={to} to={to} className="text-sm text-white/75 transition hover:text-white">
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="footer-title">Nossos canais</h2>
          <div className="grid gap-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
              >
                <Icon className="shrink-0 text-[var(--color-primary)]" size={18} />
                <span>
                  <span className="block font-semibold text-white/90">{label}</span>
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-title">Entre em contato</h2>
          <div className="space-y-3 text-sm text-white/75">
            <a
              href={`tel:${contacts.phone.replace(/\D/g, '')}`}
              className="flex gap-3 transition hover:text-white"
            >
              <Phone className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.phone}
            </a>
            <a href={`mailto:${contacts.email}`} className="flex gap-3 transition hover:text-white">
              <Mail className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.email}
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-white">
              <MapPin className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.address}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
        © Todos os direitos reservados a Don Colonial
      </div>
    </footer>
  );
}
