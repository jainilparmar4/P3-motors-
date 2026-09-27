import React from 'react';
import { Phone, Calendar, ShieldCheck, Wrench, Clock, MessageSquare, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { P3_CONTACT } from '../data/garageData';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
  onExploreServices: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onBookClick,
  onExploreServices,
  onOpenEstimator,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
      {/* Background Graphic & Scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/images/hero_p3_garage_1790500769122.jpg"
          alt="P3 Motors Modern Car Garage Workshop"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-75 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Zero-Pill Unboxed Trust Indicator */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-orange-400 uppercase">
              <span>P3 Motors Auto Care</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Multi-Brand Car Garage</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Helpline: {P3_CONTACT.phoneDisplay}</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl" style={{ textWrap: 'balance' }}>
              {lang === 'hi' ? (
                <>
                  आपकी कार के लिए <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">भरोसेमंद और आधुनिक</span> गैराज सेवाएं
                </>
              ) : (
                <>
                  Precision Automotive Care &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Certified Workshop</span> Engineering
                </>
              )}
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'hi'
                ? 'P3 Motors में हम प्रदान करते हैं 100% ओरिजिनल पार्ट्स, अत्याधुनिक कंप्यूटरीकृत इंजन स्कैनिंग, एसी रिपेयर, डेंटिंग-पेंटिंग और 24x7 ऑन-रोड आपातकालीन ब्रेकडाउन सहायता। विशेषज्ञ मैकेनिक और पारदर्शी बिलिंग।'
                : 'Experience dealership-grade car maintenance without dealership prices. From full synthetic oil changes and high-definition laser wheel alignment to major engine overhauls and rapid roadside assistance.'}
            </p>

            {/* Zero-Pill Unboxed Metadata Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-medium pt-1">
              <span className="text-slate-200">15+ Years Mechanical Experience</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-200">100% Genuine OEM Spares</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-200">6 Months Service Warranty</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-emerald-400 font-semibold">Free Doorstep Pickup &amp; Drop</span>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm tracking-wide uppercase rounded-lg shadow-xl shadow-orange-950/60 active:scale-98 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'hi' ? 'सर्विस अपॉइंटमेंट बुक करें' : 'Book Service Appointment'}</span>
              </button>

              <a
                href={`tel:${P3_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 rounded-lg transition-colors cursor-pointer group"
              >
                <Phone className="w-4 h-4 text-orange-400 group-hover:rotate-12 transition-transform" />
                <span>{lang === 'hi' ? 'कॉल करें:' : 'Call Direct:'} <span className="text-orange-400 tabular-nums">{P3_CONTACT.phoneDisplay}</span></span>
              </a>

              <a
                href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello P3 Motors, I need emergency assistance or car service consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg border border-emerald-600/60 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Card / Interactive Workshop Quick Panel */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {lang === 'hi' ? 'त्वरित गैराज सहायता' : 'Fast Garage Access'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === 'hi' ? 'फोन: 9727200087 पर तुरंत संपर्क' : 'Helpline: 97272 00087'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-orange-950/80 border border-orange-800/60 flex items-center justify-center text-orange-400">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>

              {/* Emergency Banner Callout Inside Card */}
              <div className="p-3.5 bg-orange-950/40 border border-orange-800/40 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span>{lang === 'hi' ? '24/7 आपातकालीन ऑन-रोड सहायता' : '24/7 Emergency Breakdown'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'hi'
                    ? 'गाड़ी बीच रास्ते में बंद हो गई? 30-40 मिनट में टोइंग व मिस्त्री सहायता।'
                    : 'Car stalled or battery dead? Instant towing & roadside mechanic dispatch.'}
                </p>
                <a
                  href={`tel:${P3_CONTACT.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-300 hover:text-orange-200 pt-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'तुरंत कॉल करें: ' : 'Call Now: '} {P3_CONTACT.phoneDisplay}</span>
                </a>
              </div>

              {/* Quick Actions List */}
              <div className="space-y-2.5">
                <button
                  onClick={onOpenEstimator}
                  className="w-full flex items-center justify-between p-3 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-lg border border-slate-700/60 text-xs font-semibold transition-colors cursor-pointer group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{lang === 'hi' ? 'कार सर्विस खर्च कैलकुलेटर' : 'Calculate Service Cost Online'}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="w-full flex items-center justify-between p-3 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-lg border border-slate-700/60 text-xs font-semibold transition-colors cursor-pointer group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{lang === 'hi' ? 'सभी 8 प्रमुख गैराज सेवाएं देखें' : 'View All 8 Core Workshop Services'}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Operating Hours & Contact Strip */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'hi' ? 'सोम-शनि: 8:30 AM - 8:30 PM' : 'Mon-Sat: 8:30 AM - 8:30 PM'}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{lang === 'hi' ? 'वर्कशॉप खुला है' : 'Open Today'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Strip adjacent to Hero */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
              10,000+
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {lang === 'hi' ? 'संतुष्ट ग्राहक व कार सर्विस' : 'Vehicles Serviced & Repaired'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
              4.9 / 5.0
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {lang === 'hi' ? '1,200+ ग्राहक समीक्षाएं' : 'Customer Satisfaction Rating'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
              30 - 45 Min
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {lang === 'hi' ? 'आपातकालीन टोइंग रिस्पॉन्स' : 'Emergency Towing Dispatch Time'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-orange-400 tabular-nums tracking-tight">
              97272 00087
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {lang === 'hi' ? '24/7 डायरेक्ट हेल्पडेस्क' : 'Direct Garage Helpline'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
