import React, { useState, useMemo } from 'react';
import { Calculator, Check, Car, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { Language } from '../types';

interface CostEstimatorProps {
  lang: Language;
  onBookWithEstimate: (carType: string, selectedItems: string[], totalCost: number) => void;
}

interface ServiceOption {
  id: string;
  nameEn: string;
  nameHi: string;
  multiplier: { hatchback: number; sedan: number; suv: number; luxury: number };
}

const VEHICLE_TYPES = [
  { id: 'hatchback', nameEn: 'Hatchback', nameHi: 'हैचबैक', examples: 'Swift, i10, WagonR, Tiago, Altroz' },
  { id: 'sedan', nameEn: 'Sedan', nameHi: 'सेडान', examples: 'City, Verna, Dzire, Ciaz, Slavia' },
  { id: 'suv', nameEn: 'SUV / MUV', nameHi: 'एसयूवी / कॉम्पैक्ट', examples: 'Creta, Brezza, Nexon, Thar, Seltos' },
  { id: 'luxury', nameEn: 'Premium / Luxury', nameHi: 'प्रीमियम / लक्ज़री', examples: 'Fortuner, BMW, Mercedes, Audi' },
] as const;

type VehicleTypeId = typeof VEHICLE_TYPES[number]['id'];

const ESTIMATOR_SERVICES: ServiceOption[] = [
  {
    id: 'synthetic_oil',
    nameEn: 'Full Synthetic Engine Oil + OEM Filter',
    nameHi: 'सिंथेटिक इंजन ऑयल + ओरिजिनल ऑयल फिल्टर',
    multiplier: { hatchback: 2199, sedan: 2699, suv: 3299, luxury: 4899 }
  },
  {
    id: 'ac_service',
    nameEn: 'Car AC Gas Recharge + Condenser Cleaning',
    nameHi: 'कार एसी गैस रीचार्ज + कंडेनसर सर्विस',
    multiplier: { hatchback: 1499, sedan: 1799, suv: 2199, luxury: 2999 }
  },
  {
    id: 'brake_pads',
    nameEn: 'Front Disc Brake Pads Replacement (Ceramic)',
    nameHi: 'फ्रंट डिस्क ब्रेक पैड रिप्लेसमेंट (सिरेमिक)',
    multiplier: { hatchback: 1299, sedan: 1599, suv: 1999, luxury: 3299 }
  },
  {
    id: 'wheel_alignment',
    nameEn: '3D Laser Wheel Alignment & Dynamic Balancing',
    nameHi: '3D लेजर व्हील अलाइनमेंट व कंप्यूटर बैलेंसिंग',
    multiplier: { hatchback: 599, sedan: 699, suv: 849, luxury: 1199 }
  },
  {
    id: 'throttle_cleaning',
    nameEn: 'Throttle Body & Fuel Injector Cleaning',
    nameHi: 'थ्रॉटल बॉडी व फ्यूल इंजेक्टर क्लीनिंग',
    multiplier: { hatchback: 899, sedan: 1099, suv: 1399, luxury: 1999 }
  },
  {
    id: 'wash_detailing',
    nameEn: 'Full Interior Deep Dry Clean + Foam Wash',
    nameHi: 'इंटीरियर डीप ड्राईक्लीन + फोम वॉश व पॉलिश',
    multiplier: { hatchback: 999, sedan: 1299, suv: 1599, luxury: 2299 }
  },
  {
    id: 'denting_painting_panel',
    nameEn: 'Single Panel Denting & Heated Booth Painting',
    nameHi: 'एक पैनल डेंटिंग व बेक ओवन पेंटिंग (2 साल वारंटी)',
    multiplier: { hatchback: 1899, sedan: 2199, suv: 2499, luxury: 3499 }
  }
];

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  lang,
  onBookWithEstimate,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleTypeId>('suv');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'synthetic_oil',
    'ac_service',
    'wheel_alignment',
  ]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal = useMemo(() => {
    return selectedServices.reduce((sum, serviceId) => {
      const option = ESTIMATOR_SERVICES.find((s) => s.id === serviceId);
      if (!option) return sum;
      return sum + option.multiplier[selectedVehicle];
    }, 0);
  }, [selectedVehicle, selectedServices]);

  const handleBookEstimate = () => {
    const vName = VEHICLE_TYPES.find((v) => v.id === selectedVehicle)?.nameEn || selectedVehicle;
    const itemNames = selectedServices.map((id) => {
      const item = ESTIMATOR_SERVICES.find((s) => s.id === id);
      return lang === 'hi' ? item?.nameHi || '' : item?.nameEn || '';
    });
    onBookWithEstimate(vName, itemNames, calculatedTotal);
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900/60 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            <span>{lang === 'hi' ? 'पारदर्शी बिलिंग' : 'Transparent Pricing'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{lang === 'hi' ? 'लाइव कैलकुलेटर' : 'Live Quote Calculator'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'hi'
              ? 'अपनी कार का सर्विस खर्च तुरंत अनुमानित करें'
              : 'Calculate Your Car Service Estimate Online'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {lang === 'hi'
              ? 'गाड़ी का प्रकार चुनें और अपनी जरूरत की सेवाएं मार्क करें। कोई छिपा हुआ चार्ज नहीं, 100% स्पष्ट बिलिंग।'
              : 'Select your vehicle segment and required repairs. Get an accurate, real-time cost estimate and lock your quote.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Vehicle Segment Picker */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                {lang === 'hi' ? 'स्टेप 1: कार का प्रकार चुनें' : 'Step 1: Choose Vehicle Segment'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {VEHICLE_TYPES.map((v) => {
                  const isSelected = selectedVehicle === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-600/15 border-orange-500 text-white shadow-sm'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Car className={`w-4 h-4 ${isSelected ? 'text-orange-400' : 'text-slate-500'}`} />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {lang === 'hi' ? v.nameHi : v.nameEn}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 truncate">
                        {v.examples}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Checkboxes */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {lang === 'hi' ? 'स्टेप 2: आवश्यक सेवाएं चुनें' : 'Step 2: Select Services Required'}
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  {selectedServices.length} {lang === 'hi' ? 'चुनी गई' : 'selected'}
                </span>
              </div>

              <div className="space-y-2">
                {ESTIMATOR_SERVICES.map((item) => {
                  const isChecked = selectedServices.includes(item.id);
                  const price = item.multiplier[selectedVehicle];

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleService(item.id)}
                      className={`flex items-center justify-between p-3.5 rounded-lg border cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-slate-800/90 border-slate-700 text-white'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-orange-600 border-orange-600 text-white'
                              : 'border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                          {lang === 'hi' ? item.nameHi : item.nameEn}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 tabular-nums shrink-0 ml-3">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Estimate Summary Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-orange-400" />
                  <h3 className="font-display font-bold text-base text-white">
                    {lang === 'hi' ? 'अनुमानित बिल' : 'Estimate Summary'}
                  </h3>
                </div>
                <span className="text-xs text-orange-400 font-semibold uppercase">
                  {VEHICLE_TYPES.find((v) => v.id === selectedVehicle)?.nameEn}
                </span>
              </div>

              {/* Selected List */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedServices.length === 0 ? (
                  <div className="text-xs text-slate-500 py-4 text-center">
                    {lang === 'hi' ? 'कृपया कम से कम एक सर्विस चुनें' : 'Please select at least one service'}
                  </div>
                ) : (
                  selectedServices.map((id) => {
                    const item = ESTIMATOR_SERVICES.find((s) => s.id === id);
                    if (!item) return null;
                    const cost = item.multiplier[selectedVehicle];
                    return (
                      <div key={id} className="flex items-center justify-between text-xs text-slate-300">
                        <span className="truncate max-w-[200px]">
                          {lang === 'hi' ? item.nameHi : item.nameEn}
                        </span>
                        <span className="font-mono tabular-nums text-slate-400">
                          ₹{cost.toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Inclusions */}
              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{lang === 'hi' ? '45-पॉइंट फ्री व्हीकल इंस्पेक्शन शामिल' : 'Complimentary 45-point vehicle checkup'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{lang === 'hi' ? '6 महीने या 10,000 किमी की सर्विस वारंटी' : '6 Months / 10,000 km service warranty'}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    {lang === 'hi' ? 'कुल अनुमानित राशि' : 'Total Estimated Quote'}
                  </span>
                  <div className="text-2xl font-display font-extrabold text-white font-mono tabular-nums">
                    ₹{calculatedTotal.toLocaleString('en-IN')}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {lang === 'hi' ? '*जीएसटी व पार्ट्स वारंटी शामिल। कोई अतिरिक्त छिपे शुल्क नहीं।' : '*Includes GST & labor charges. Genuine parts guarantee.'}
                </p>
              </div>

              {/* Action Button */}
              <button
                disabled={selectedServices.length === 0}
                onClick={handleBookEstimate}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg shadow-lg shadow-orange-950/40 transition-all cursor-pointer"
              >
                <span>{lang === 'hi' ? 'इस अनुमान के साथ अपॉइंटमेंट बुक करें' : 'Book With This Estimate'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
