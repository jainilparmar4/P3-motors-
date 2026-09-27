import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Phone, AlertCircle, Car, ArrowRight, UserCheck } from 'lucide-react';
import { JobCardStatus, Language } from '../types';
import { INITIAL_JOB_CARDS, P3_CONTACT } from '../data/garageData';

interface TrackStatusProps {
  lang: Language;
  userBookings: JobCardStatus[];
}

const STAGES = [
  { step: 1, titleEn: 'Vehicle Received', titleHi: 'गाड़ी वर्कशॉप में दाखिल' },
  { step: 2, titleEn: 'Health Inspection', titleHi: '45-पॉइंट विस्तृत जांच' },
  { step: 3, titleEn: 'Repairs In Progress', titleHi: 'पार्ट्स व मेंटेनेंस कार्य' },
  { step: 4, titleEn: 'Quality Check & Wash', titleHi: 'क्वालिटी टेस्ट व वॉश' },
  { step: 5, titleEn: 'Ready for Delivery', titleHi: 'हैंडओवर हेतु तैयार' },
];

export const TrackStatus: React.FC<TrackStatusProps> = ({
  lang,
  userBookings,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchedRecord, setMatchedRecord] = useState<JobCardStatus | null>(INITIAL_JOB_CARDS[0]);
  const [hasSearched, setHasSearched] = useState(false);

  // Combine default samples with user bookings
  const allCards = [...userBookings, ...INITIAL_JOB_CARDS];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setHasSearched(true);
    const clean = searchQuery.trim().toLowerCase().replace(/[\s-]/g, '');
    if (!clean) {
      setMatchedRecord(null);
      return;
    }

    const found = allCards.find((card) => {
      const vPlate = card.vehicleNumber.toLowerCase().replace(/[\s-]/g, '');
      const cardId = card.id.toLowerCase().replace(/[\s-]/g, '');
      return vPlate.includes(clean) || cardId.includes(clean);
    });

    setMatchedRecord(found || null);
  };

  const selectQuickSample = (plate: string) => {
    setSearchQuery(plate);
    setHasSearched(true);
    const clean = plate.toLowerCase().replace(/[\s-]/g, '');
    const found = allCards.find(
      (c) => c.vehicleNumber.toLowerCase().replace(/[\s-]/g, '') === clean
    );
    setMatchedRecord(found || null);
  };

  return (
    <section id="track" className="py-20 bg-slate-900/60 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            <span>{lang === 'hi' ? 'लाइव स्टेटस' : 'Real-time Tracking'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{lang === 'hi' ? 'जॉब कार्ड अपडेट' : 'Digital Job Card'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'hi'
              ? 'अपनी कार की सर्विस प्रगति लाइव ट्रैक करें'
              : 'Track Your Vehicle Repair & Service Status in Real-Time'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {lang === 'hi'
              ? 'अपना गाड़ी नंबर या बुकिंग आईडी दर्ज करें और जानें कि आपकी कार किस स्टेज पर है।'
              : 'Enter your vehicle registration number or booking reference code to monitor stage-by-stage service progress.'}
          </p>
        </div>

        {/* Search Bar & Quick Buttons */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8 max-w-3xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'hi' ? 'गाड़ी नंबर (उदा: GJ-01-AB-1234) या बुकिंग ID' : 'Vehicle Number (e.g. GJ-01-AB-1234) or Job ID'}
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500 font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-lg transition-colors cursor-pointer shrink-0"
            >
              {lang === 'hi' ? 'स्टेटस खोजें' : 'Track Status'}
            </button>
          </form>

          {/* Quick Demo Plates to Click */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="text-slate-500">{lang === 'hi' ? 'टेस्ट के लिए क्लिक करें:' : 'Try sample plates:'}</span>
            {INITIAL_JOB_CARDS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => selectQuickSample(sample.vehicleNumber)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded font-mono cursor-pointer transition-colors"
              >
                {sample.vehicleNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Result Card */}
        {matchedRecord ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl max-w-4xl space-y-8">
            {/* Record Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-orange-400 uppercase">
                    {matchedRecord.id}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="font-mono text-lg font-extrabold text-white tracking-wider">
                    {matchedRecord.vehicleNumber}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-300">
                  {matchedRecord.carModel} <span className="text-slate-500 font-normal">({matchedRecord.customerName})</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-left sm:text-right">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    {lang === 'hi' ? 'अपेक्षित डिलीवरी' : 'Expected Handover'}
                  </div>
                  <div className="text-sm font-bold text-emerald-400">
                    {matchedRecord.estimatedDelivery}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500">
                  Updated {matchedRecord.updatedAt}
                </div>
              </div>
            </div>

            {/* 5-Step Progress Stepper */}
            <div className="py-2">
              <div className="relative">
                <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                <div
                  className="hidden sm:block absolute top-1/2 left-0 h-0.5 bg-orange-500 -translate-y-1/2 z-0 transition-all duration-500"
                  style={{ width: `${((matchedRecord.stageNumber - 1) / 4) * 100}%` }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative z-10">
                  {STAGES.map((stg) => {
                    const isCompleted = matchedRecord.stageNumber > stg.step;
                    const isCurrent = matchedRecord.stageNumber === stg.step;

                    return (
                      <div
                        key={stg.step}
                        className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2"
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                            isCompleted
                              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                              : isCurrent
                              ? 'bg-orange-600 text-white ring-4 ring-orange-950 shadow-md'
                              : 'bg-slate-800 text-slate-500 border border-slate-700'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <span className="font-mono">{stg.step}</span>
                          )}
                        </div>

                        <div>
                          <div
                            className={`text-xs font-bold ${
                              isCurrent
                                ? 'text-orange-400'
                                : isCompleted
                                ? 'text-slate-200'
                                : 'text-slate-500'
                            }`}
                          >
                            {lang === 'hi' ? stg.titleHi : stg.titleEn}
                          </div>
                          {isCurrent && (
                            <div className="text-[10px] text-orange-300 font-medium">
                              {lang === 'hi' ? 'वर्तमान स्टेज' : 'In Progress'}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Completed vs Pending Work */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'पूरे हो चुके कार्य' : 'Tasks Completed'}</span>
                </h4>
                <ul className="space-y-2">
                  {matchedRecord.tasksCompleted.length === 0 ? (
                    <li className="text-xs text-slate-500">Inspection ongoing</li>
                  ) : (
                    matchedRecord.tasksCompleted.map((t, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{lang === 'hi' ? 'प्रगति पर / शेष कार्य' : 'In Progress / Pending'}</span>
                </h4>
                <ul className="space-y-2">
                  {matchedRecord.tasksPending.length === 0 ? (
                    <li className="text-xs text-emerald-400 font-semibold">
                      {lang === 'hi' ? 'सभी कार्य पूर्ण हो चुके हैं!' : 'All scheduled repairs complete!'}
                    </li>
                  ) : (
                    matchedRecord.tasksPending.map((t, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            {/* Service Advisor Contact Bar */}
            <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">
                    {lang === 'hi' ? 'असाइन्ड सर्विस एडवाइजर:' : 'Assigned Service Advisor:'} {matchedRecord.advisorName}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    P3 Motors Workshop Desk
                  </div>
                </div>
              </div>

              <a
                href={`tel:${P3_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>{lang === 'hi' ? 'एडवाइजर से बात करें:' : 'Call Advisor:'} <span className="tabular-nums font-mono">{P3_CONTACT.phoneDisplay}</span></span>
              </a>
            </div>
          </div>
        ) : hasSearched ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-2xl text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-orange-400 mx-auto" />
            <h3 className="font-display font-bold text-lg text-white">
              {lang === 'hi' ? 'कोई रिकॉर्ड नहीं मिला' : 'No Active Job Card Found'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'hi'
                ? `नंबर "${searchQuery}" के लिए अभी कोई सक्रिय सर्विस कार्ड नहीं मिला। कृपया अपना सही गाड़ी नंबर जांचें या सीधे 9727200087 पर कॉल करें।`
                : `No active workshop job card found for "${searchQuery}". Please verify your registration number or contact our reception directly.`}
            </p>
            <a
              href={`tel:${P3_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'hi' ? 'वर्कशॉप हेल्पलाइन: 9727200087' : 'Garage Reception: 97272 00087'}</span>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};
