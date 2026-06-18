import { MessageCircle } from 'lucide-react';
import { contacts } from '../data/contacts.js';

export default function WhatsAppButton() {
  return (
    <a
      href={contacts.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-bold text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1"
      aria-label="Falar com a Don Colonial pelo WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
