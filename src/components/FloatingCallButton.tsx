import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { P3_CONTACT } from '../data/garageData';
import { Language } from '../types';

interface FloatingCallButtonProps {
  lang: Language;
}

export const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({ lang }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      {/* WhatsApp quick pill */}
      <a
        href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello P3 Motors, I need information about car repair / servicing.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-black/50 text-xs font-bold transition-transform active:scale-95"
        title="WhatsApp Chat"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Main Direct Phone Call Button */}
      <a
        href={`tel:${P3_CONTACT.phoneRaw}`}
        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-full shadow-2xl shadow-orange-950/80 text-xs font-extrabold tracking-wide uppercase transition-transform active:scale-95 border border-orange-400/40 group"
      >
        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
        <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="tabular-nums font-mono">{P3_CONTACT.phoneDisplay}</span>
      </a>
    </div>
  );
};
