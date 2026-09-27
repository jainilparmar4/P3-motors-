import React, { useState } from 'react';
import { Check, Star, ArrowRight, Shield } from 'lucide-react';
import { Language } from '../types';
import { SERVICE_PACKAGES } from '../data/garageData';

interface ServicePackagesProps {
  lang: Language;
  onSelectPackage: (packageName: string, price: number) => void;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({
  lang,
  onSelectPackage,
}) => {
  const [vehicleCategory, setVehicleCategory] = useState<'hatchback' | 'sedan' | 'suv'>('sedan');

  return (
    <section id="packages" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
              <span>{lang === 'hi' ? 'सर्विस पैकेजेस' : 'Curated Packages'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{lang === 'hi' ? 'वार्षिक मेंटेनेंस' : 'Periodic Maintenance'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'hi'
                ? 'कार सर्विसिंग के पारदर्शी और किफ़ायती पैकेजेस'
                : 'Engineered Service Packages with Transparent Pricing'}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {lang === 'hi'
                ? 'अपनी कार की उम्र और ड्राइविंग के अनुसार सबसे उपयुक्त पैकेज चुनें। 100% ओरिजिनल पार्ट्स की गारंटी।'
                : 'Engineered to factory specifications. Select your vehicle type to preview accurate tier pricing.'}
            </p>
          </div>

          {/* Vehicle segment switcher */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setVehicleCategory('hatchback')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                vehicleCategory === 'hatchback'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'hi' ? 'हैचबैक' : 'Hatchback'}
            </button>
            <button
              onClick={() => setVehicleCategory('sedan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                vehicleCategory === 'sedan'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'hi' ? 'सेडान' : 'Sedan'}
            </button>
            <button
              onClick={() => setVehicleCategory('suv')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                vehicleCategory === 'suv'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'hi' ? 'एसयूवी' : 'SUV'}
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => {
            const price =
              vehicleCategory === 'hatchback'
                ? pkg.priceHatchback
                : vehicleCategory === 'sedan'
                ? pkg.priceSedan
                : pkg.priceSuv;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-slate-900/90 border-orange-500 shadow-xl shadow-orange-950/30 ring-1 ring-orange-500'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Marker */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span>{lang === 'hi' ? 'सर्वाधिक लोकप्रिय' : 'Most Popular'}</span>
                  </div>
                )}

                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {lang === 'hi' ? pkg.nameHi : pkg.nameEn}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {lang === 'hi' ? pkg.taglineHi : pkg.taglineEn}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 uppercase">
                        / {vehicleCategory}
                      </span>
                    </div>
                    <div className="text-[11px] text-orange-400 font-semibold mt-1">
                      {pkg.recommendedKm}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      {lang === 'hi' ? 'शामिल विशेषताएं:' : 'Included In Package:'}
                    </div>
                    <ul className="space-y-2.5">
                      {(lang === 'hi' ? pkg.featuresHi : pkg.featuresEn).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() =>
                      onSelectPackage(
                        lang === 'hi' ? pkg.nameHi : pkg.nameEn,
                        price
                      )
                    }
                    className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg shadow-orange-950/50'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{lang === 'hi' ? 'यह पैकेज चुनें' : 'Select Package'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
