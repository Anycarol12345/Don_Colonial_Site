import { AtSign, Mail, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { contacts } from '../data/contacts.js';

const links = [
  ['Início', '/'],
  ['Empresa', '/empresa'],
  ['Produtos', '/produtos'],
  ['Qualidade', '/qualidade'],
  ['Revendedores', '/revendedores'],
  ['Contato', '/contato'],
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr] lg:px-8">
        <div>
          <img src="/images/logo-don-colonial.png" alt="Don Colonial" className="mb-5 h-16 w-auto brightness-110" />
          <p className="max-w-md text-sm leading-7 text-white/75">
            Pão de queijo congelado feito em Maringá/PR, com sabor caseiro para famílias, cafeterias, mercados e
            revendedores.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Acesso rápido</h2>
          <div className="grid gap-2">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} className="text-sm text-white/75 transition hover:text-white">
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-title">Entre em contato</h2>
          <div className="space-y-3 text-sm text-white/75">
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.phone} | {contacts.whatsapp}
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.email}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.address}
            </p>
            <a
              href={contacts.instagramUrl}
              className="flex gap-3 transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <AtSign className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {contacts.instagram}
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
