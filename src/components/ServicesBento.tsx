import React, { useState } from 'react';
import { Wrench, Check, ArrowRight, X, Phone, Clock, ShieldCheck } from 'lucide-react';
import { CarServiceItem, Language } from '../types';
import { SERVICES_LIST, P3_CONTACT } from '../data/garageData';

interface ServicesBentoProps {
  lang: Language;
  onSelectServiceToBook: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({
  lang,
  onSelectServiceToBook,
}) => {
  const [selectedService, setSelectedService] = useState<CarServiceItem | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            <span>{lang === 'hi' ? 'गैराज सेवाएं' : 'Workshop Capabilities'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{lang === 'hi' ? 'ओईएम स्टैंडर्ड्स' : 'Certified OE Protocols'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'hi'
              ? 'P3 Motors की संपूर्ण एवं आधुनिक कार रिपेयर सेवाएं'
              : 'End-to-End Mechanical & High-Tech Automotive Engineering'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'हर कार को मिलता है 45-पॉइंट विस्तृत हेल्थ चेकअप और ओरिजिनल स्पेयर पार्ट्स। सभी कारों के लिए समर्पित कंप्यूटरीकृत समाधान।'
              : 'From periodic scheduled maintenance to precision engine diagnostic telemetry, our certified garage is equipped with industrial hydraulic lifts, laser alignment rigs, and digital OBD scanners.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            const hasImage = Boolean(service.image);
            const isMarquee = service.id === 'computerized-diagnostics' || service.id === 'periodic-maintenance';

            return (
              <div
                key={service.id}
                className={`group bg-slate-900/70 border border-slate-800 hover:border-orange-500/50 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between ${
                  isMarquee ? 'lg:col-span-1 md:col-span-2' : ''
                }`}
              >
                {/* Optional Image Area */}
                {hasImage && service.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <img
                      src={service.image}
                      alt={lang === 'hi' ? service.titleHi : service.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded text-xs font-semibold text-slate-300 border border-slate-700/80">
                      {lang === 'hi' ? service.durationHi : service.durationEn}
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    {/* Natural human editorial numbering */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                      <span className="font-mono text-orange-400">{indexNumber}.</span>
                      {!hasImage && (
                        <span className="text-slate-400">
                          {lang === 'hi' ? service.durationHi : service.durationEn}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {lang === 'hi' ? service.titleHi : service.titleEn}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {lang === 'hi' ? service.shortDescHi : service.shortDescEn}
                    </p>

                    {/* Features list */}
                    <ul className="mt-4 space-y-1.5">
                      {(lang === 'hi' ? service.featuresHi : service.featuresEn).slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card bottom: Unboxed pricing & Action buttons */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                        {lang === 'hi' ? 'शुरुआती कीमत' : 'Starting From'}
                      </div>
                      <div className="text-base font-extrabold text-white font-mono tabular-nums">
                        ₹{service.startingPrice.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                      >
                        {lang === 'hi' ? 'विवरण' : 'Details'}
                      </button>
                      <button
                        onClick={() => onSelectServiceToBook(lang === 'hi' ? service.titleHi : service.titleEn)}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>{lang === 'hi' ? 'बुक करें' : 'Book'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Assistance Callout Strip under Services */}
        <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 shrink-0">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                {lang === 'hi' ? 'क्या आपकी गाड़ी में कोई अन्य फॉल्ट या आवाज है?' : 'Experiencing an Unidentified Noise or Complex Breakdown?'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'hi'
                  ? 'हमारे हेड मैकेनिक से सीधे बात करें और फोन पर मुफ्त प्रारंभिक सलाह प्राप्त करें।'
                  : 'Speak directly with our senior master diagnostic technician for immediate guidance.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${P3_CONTACT.phoneRaw}`}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'hi' ? 'हेल्पलाइन:' : 'Helpline:'} <span className="tabular-nums">{P3_CONTACT.phoneDisplay}</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedService.image && (
              <div className="h-44 w-full -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedService.image}
                  alt={lang === 'hi' ? selectedService.titleHi : selectedService.titleEn}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {lang === 'hi' ? 'सर्विस विवरण' : 'Service Specifications'}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {lang === 'hi' ? selectedService.titleHi : selectedService.titleEn}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'hi' ? selectedService.fullDescHi : selectedService.fullDescEn}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'इस सर्विस में क्या-क्या शामिल है:' : 'What Is Included in This Service:'}
                </h4>
                <ul className="space-y-2">
                  {(lang === 'hi' ? selectedService.featuresHi : selectedService.featuresEn).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{lang === 'hi' ? selectedService.durationHi : selectedService.durationEn}</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase text-slate-500">{lang === 'hi' ? 'अनुमानित कीमत' : 'Estimate From'}</div>
                  <div className="text-lg font-bold text-white font-mono tabular-nums">
                    ₹{selectedService.startingPrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const title = lang === 'hi' ? selectedService.titleHi : selectedService.titleEn;
                    setSelectedService(null);
                    onSelectServiceToBook(title);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-orange-950/40 text-center cursor-pointer"
                >
                  {lang === 'hi' ? 'यह सर्विस बुक करें' : 'Book This Service'}
                </button>
                <a
                  href={`tel:${P3_CONTACT.phoneRaw}`}
                  className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg"
                  title="Call Garage"
                >
                  <Phone className="w-5 h-5 text-orange-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
