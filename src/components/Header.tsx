import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Globe, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { P3_CONTACT } from '../data/garageData';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onNavigate: (sectionId: string) => void;
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onNavigate,
  onBookClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', labelEn: 'Services', labelHi: 'सेवाएं' },
    { id: 'packages', labelEn: 'Packages', labelHi: 'पैकेजेस' },
    { id: 'estimator', labelEn: 'Cost Estimator', labelHi: 'खर्च अनुमान' },
    { id: 'track', labelEn: 'Track Status', labelHi: 'स्टेटस ट्रैक' },
    { id: 'contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark adhering to Top Bar Contract */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center font-display font-extrabold text-white text-xl shadow-lg shadow-orange-900/40 group-hover:bg-orange-500 transition-colors">
              P3
            </div>
            <span className="font-display text-2xl font-extrabold tracking-tight text-white uppercase group-hover:text-orange-400 transition-colors">
              P3 Motors
            </span>
          </a>

          {/* Zone 2: 4-5 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="hover:text-orange-400 transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </button>
            ))}
          </nav>

          {/* Zone 3: Direct actions: Phone click-to-call, Language switch, Book CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-orange-400" />
              <span>{lang === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>

            <a
              href={`tel:${P3_CONTACT.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors group cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-orange-400 group-hover:rotate-12 transition-transform" />
              <span className="tabular-nums tracking-wide">{P3_CONTACT.phoneDisplay}</span>
            </a>

            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg shadow-md shadow-orange-950/60 transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'सर्विस बुक करें' : 'Book Service'}</span>
            </button>
          </div>

          {/* Mobile hamburger controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="p-2 text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
              title="Change Language"
            >
              {lang === 'hi' ? 'EN' : 'हिं'}
            </button>
            <a
              href={`tel:${P3_CONTACT.phoneRaw}`}
              className="p-2.5 text-white bg-orange-600 rounded-lg shadow-sm"
              title="Call 97272 00087"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-left px-3 py-2.5 text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-orange-400 rounded-lg transition-colors"
              >
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <a
              href={`tel:${P3_CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 border border-slate-700 rounded-lg text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{lang === 'hi' ? 'कॉल करें:' : 'Call:'} {P3_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent(lang === 'hi' ? 'नमस्ते P3 Motors! मुझे अपनी कार सर्विस के बारे में जानकारी चाहिए।' : 'Hello P3 Motors! I would like to inquire about car repair & service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-600/50 rounded-lg text-white font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {P3_CONTACT.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg text-white font-bold text-sm shadow-lg shadow-orange-950/40"
            >
              {lang === 'hi' ? 'सर्विस अपॉइंटमेंट बुक करें' : 'Book Service Appointment'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
