import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { contacts } from '../data/contacts.js';

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/qualidade', label: 'Qualidade' },
  { to: '/distribuidores', label: 'Distribuidores' },
  { to: '/contato', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-md px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-[var(--color-primary)] text-white'
        : 'text-[var(--color-muted)] hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-dark)]'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Don Colonial">
          <img src="/images/logo-don-colonial.png" alt="Don Colonial" className="h-14 w-auto" />
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contacts.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]"
          >
            <Phone size={18} />
            {contacts.phone}
          </a>
          <a href={contacts.whatsappLink} className="btn-primary" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-md border border-black/10 p-2 text-[var(--color-primary-dark)] lg:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-black/5 bg-white px-4 pb-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <a href={contacts.whatsappLink} className="btn-primary mt-2 text-center" target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
