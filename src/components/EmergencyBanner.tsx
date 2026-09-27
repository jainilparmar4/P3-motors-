import React from 'react';
import { AlertCircle, Phone, MessageSquare, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { P3_CONTACT } from '../data/garageData';

interface EmergencyBannerProps {
  lang: Language;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ lang }) => {
  return (
    <div className="bg-gradient-to-r from-red-950 via-slate-900 to-orange-950 border-y border-red-800/60 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-red-600/30 border border-red-500 flex items-center justify-center shrink-0 text-red-400">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                {lang === 'hi' ? '24/7 आपातकालीन सड़क सहायता' : '24x7 Emergency Roadside Assistance'}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {lang === 'hi'
                ? 'गाड़ी का एक्सीडेंट, पंचर, बैटरी डिस्चार्ज या इंजन बंद? 30-45 मिनट में टोइंग व मिस्त्री सहायता।'
                : 'Stuck on the road, battery dead or engine breakdown? Flatbed towing & mobile mechanic dispatched immediately.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${P3_CONTACT.phoneRaw}`}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold rounded-lg shadow-lg shadow-red-950/60 transition-transform active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>{lang === 'hi' ? 'कॉल करें:' : 'Call:'} <span className="tabular-nums tracking-wide">{P3_CONTACT.phoneDisplay}</span></span>
          </a>

          <a
            href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent('आपातकालीन सहायता चाहिए! कृपया P3 Motors टोइंग वैन भेजें।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
