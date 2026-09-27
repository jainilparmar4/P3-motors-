import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { P3_CONTACT } from '../data/garageData';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-display font-extrabold text-white text-lg shadow-md shadow-orange-950/50">
                P3
              </div>
              <span className="font-display text-xl font-extrabold text-white uppercase tracking-tight">
                P3 Motors
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'P3 Motors — आधुनिक ऑटोमोटिव कार गैराज। सर्टिफाइड मैकेनिक्स, 100% ओरिजिनल स्पेयर पार्ट्स और 24 घंटे ऑन-रोड ब्रेकडाउन सहायता।'
                : 'P3 Motors is a certified multi-brand car garage and automotive engineering center. Complete periodic service, computerized diagnostics, and rapid emergency towing.'}
            </p>
            <div className="flex items-center gap-2 text-slate-300 font-mono">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <a href={`tel:${P3_CONTACT.phoneRaw}`} className="hover:text-white transition-colors">
                {P3_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'hi' ? 'महत्वपूर्ण लिंक्स' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'गैराज सेवाएं (Services)' : 'Workshop Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'सर्विस पैकेजेस (Packages)' : 'Periodic Packages'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'खर्च कैलकुलेटर (Estimator)' : 'Cost Estimator'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('track')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'गाड़ी स्टेटस ट्रैक (Track Job)' : 'Track Vehicle Status'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'अपॉइंटमेंट बुकिंग (Book Appointment)' : 'Book Online'}
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'hi' ? 'प्रमुख कार्य' : 'Core Capabilities'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>{lang === 'hi' ? 'इंजन ट्यूनिंग व ऑयल सर्विस' : 'Periodic Maintenance & Oil'}</li>
              <li>{lang === 'hi' ? 'कंप्यूटरीकृत OBD-II स्कैनिंग' : 'OBD-II Computerized Diagnostics'}</li>
              <li>{lang === 'hi' ? 'कार एसी गैस व कूलिंग रिपेयर' : 'Car AC Gas & Cooling Overhaul'}</li>
              <li>{lang === 'hi' ? 'ब्रेक पैड्स व सस्पेंशन ओवरहाल' : 'Ceramic Brakes & Suspension'}</li>
              <li>{lang === 'hi' ? 'डस्ट-फ्री बेक पेंटिंग व डेंटिंग' : 'Denting & Heated Paint Booth'}</li>
              <li>{lang === 'hi' ? '24/7 ऑन-रोड फ्लैटबेड टोइंग' : '24x7 Roadside Flatbed Towing'}</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'hi' ? 'गैराज डेस्क' : 'Workshop Desk'}
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {lang === 'hi' ? P3_CONTACT.addressHi : P3_CONTACT.addressEn}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-mono tabular-nums">{P3_CONTACT.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{P3_CONTACT.email}</span>
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`tel:${P3_CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-600/20 text-orange-400 border border-orange-500/40 rounded-lg text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Helpline: {P3_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} P3 Motors. {lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Certified Workshop Protocols</span>
            <span aria-hidden="true">·</span>
            <span>Contact: {P3_CONTACT.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
