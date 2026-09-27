import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Car, Phone, User, MapPin, CheckCircle, ShieldCheck, MessageSquare, AlertCircle } from 'lucide-react';
import { Language, JobCardStatus } from '../types';
import { P3_CONTACT } from '../data/garageData';

interface BookingFormProps {
  lang: Language;
  prefilledService?: string;
  prefilledVehicleType?: string;
  prefilledEstimate?: number;
  onBookingSuccess: (newJobCard: JobCardStatus) => void;
  onNavigateToTrack: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  lang,
  prefilledService,
  prefilledVehicleType,
  prefilledEstimate,
  onBookingSuccess,
  onNavigateToTrack,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [carMakeModel, setCarMakeModel] = useState('');
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel' | 'cng' | 'ev'>('petrol');
  const [serviceType, setServiceType] = useState(prefilledService || 'Periodic General Service');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:30 AM - 12:00 PM');
  const [doorstepPickup, setDoorstepPickup] = useState(false);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [formError, setFormError] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<JobCardStatus | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setServiceType(prefilledService);
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledVehicleType && !carMakeModel) {
      setCarMakeModel(prefilledVehicleType);
    }
  }, [prefilledVehicleType, carMakeModel]);

  // Set default preferred date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim()) {
      setFormError(lang === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name');
      return;
    }

    const cleanPhone = customerPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError(lang === 'hi' ? 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें' : 'Please enter a valid 10-digit phone number');
      return;
    }

    if (!vehicleNumber.trim()) {
      setFormError(lang === 'hi' ? 'कृपया अपनी गाड़ी का नंबर दर्ज करें' : 'Please enter your vehicle registration number');
      return;
    }

    const generatedId = `P3M-${Math.floor(1000 + Math.random() * 9000)}`;

    const newJobCard: JobCardStatus = {
      id: generatedId,
      vehicleNumber: vehicleNumber.toUpperCase().trim(),
      customerName: customerName.trim(),
      carModel: carMakeModel.trim() || 'Customer Vehicle',
      status: 'received',
      stageNumber: 1,
      estimatedDelivery: 'Tomorrow, By 6:00 PM',
      advisorName: 'P3 Motors Reception',
      advisorPhone: P3_CONTACT.phoneRaw,
      tasksCompleted: ['Appointment confirmed online', 'Bay scheduled'],
      tasksPending: [
        'Vehicle arrival & entry check',
        '45-point health inspection',
        serviceType,
        'Quality audit & complimentary foam wash'
      ],
      totalEstimate: prefilledEstimate || 2499,
      updatedAt: 'Just now'
    };

    onBookingSuccess(newJobCard);
    setConfirmedBooking(newJobCard);
  };

  return (
    <section id="book" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            <span>{lang === 'hi' ? 'ऑनलाइन अपॉइंटमेंट' : 'Online Scheduling'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{lang === 'hi' ? 'फ्री पिकअप सुविधा' : 'Complimentary Pickup & Drop'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'hi'
              ? 'P3 Motors में अपनी कार सर्विस अपॉइंटमेंट बुक करें'
              : 'Book Your Service Appointment with P3 Motors'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {lang === 'hi'
              ? 'आसान 1-मिनट बुकिंग। हम आपके समय पर गाड़ी पिक करेंगे या सीधे गैराज में आपकी कार के लिए बे तैयार रखेंगे। फोन: 9727200087.'
              : 'Fast, confirmed slot booking. Prefer immediate telephonic booking? Call 97272 00087 directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {formError && (
              <div className="mb-6 p-4 bg-red-950/60 border border-red-800/80 rounded-lg flex items-center gap-3 text-red-200 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'आपका पूरा नाम *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={lang === 'hi' ? 'उदा: राहुल शर्मा' : 'e.g. Rahul Sharma'}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Car Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'गाड़ी का नंबर *' : 'Vehicle Number *'}
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                      placeholder="GJ-01-AB-1234"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500 font-mono uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'कार मेक व मॉडल' : 'Make & Model'}
                  </label>
                  <input
                    type="text"
                    value={carMakeModel}
                    onChange={(e) => setCarMakeModel(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा: Hyundai Creta SX' : 'e.g. Hyundai Creta SX'}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'ईंधन प्रकार' : 'Fuel Type'}
                  </label>
                  <select
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value as any)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                  >
                    <option value="petrol">{lang === 'hi' ? 'पेट्रोल (Petrol)' : 'Petrol'}</option>
                    <option value="diesel">{lang === 'hi' ? 'डीजल (Diesel)' : 'Diesel'}</option>
                    <option value="cng">{lang === 'hi' ? 'सीएनजी (CNG)' : 'CNG'}</option>
                    <option value="ev">{lang === 'hi' ? 'इलेक्ट्रिक (EV)' : 'Electric'}</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'hi' ? 'चुनी गई सर्विस / कार्य' : 'Requested Service'}
                </label>
                <input
                  type="text"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  placeholder={lang === 'hi' ? 'उदा: 10,000 KM सर्विस + एसी गैस रीचार्ज' : 'e.g. Periodic Service + AC Gas Recharge'}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'पसंदीदा तारीख' : 'Preferred Date'}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'hi' ? 'समय स्लॉट' : 'Time Slot'}
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="09:00 AM - 11:30 AM">{lang === 'hi' ? 'सुबह 09:00 - 11:30' : 'Morning (09:00 AM - 11:30 AM)'}</option>
                      <option value="11:30 AM - 02:00 PM">{lang === 'hi' ? 'दोपहर 11:30 - 02:00' : 'Midday (11:30 AM - 02:00 PM)'}</option>
                      <option value="02:00 PM - 05:00 PM">{lang === 'hi' ? 'दोपहर 02:00 - 05:00' : 'Afternoon (02:00 PM - 05:00 PM)'}</option>
                      <option value="05:00 PM - 08:00 PM">{lang === 'hi' ? 'शाम 05:00 - 08:00' : 'Evening (05:00 PM - 08:00 PM)'}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Doorstep Pickup Toggle */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={doorstepPickup}
                    onChange={(e) => setDoorstepPickup(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded border-slate-700 bg-slate-900 focus:ring-orange-500"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {lang === 'hi' ? 'घर/ऑफिस से फ्री कार पिकअप व ड्रॉप चाहिए' : 'Request Doorstep Pickup & Drop'}
                    </span>
                    <span className="text-[11px] text-emerald-400 block">
                      {lang === 'hi' ? '✓ 10 किमी दायरे में 100% मुफ्त सुविधा' : '✓ Complimentary within 10 km radius'}
                    </span>
                  </div>
                </label>

                {doorstepPickup && (
                  <div className="pt-2 animate-fadeIn">
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                      <textarea
                        rows={2}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder={lang === 'hi' ? 'पूरा पता व लैंडमार्क दर्ज करें' : 'Enter complete pickup address with landmark'}
                        className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'hi' ? 'कोई विशेष समस्या या आवाज? (वैकल्पिक)' : 'Specific Symptoms / Complaints (Optional)'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'hi' ? 'उदा: ब्रेक लगाने पर सीटी जैसी आवाज आ रही है, एसी में हल्की बदबू है' : 'e.g. Squeaking noise when braking, AC airflow is weak'}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-orange-950/50 transition-all cursor-pointer active:scale-99"
                >
                  {lang === 'hi' ? 'सर्विस अपॉइंटमेंट कन्फर्म करें' : 'Confirm Service Appointment'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Trust & Direct Booking Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
              <h3 className="font-display font-bold text-lg text-white">
                {lang === 'hi' ? 'फोन पर तुरंत बुकिंग' : 'Instant Telephonic Booking'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'hi'
                  ? 'फॉर्म भरने की जगह यदि आप सीधे बात करके स्लॉट बुक करना चाहते हैं तो हमारे हेल्पलाइन पर कॉल करें।'
                  : 'Prefer speaking to our service advisor directly? Call our dedicated garage reception line.'}
              </p>

              <a
                href={`tel:${P3_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-3 w-full py-3.5 bg-slate-950 hover:bg-slate-800 border border-orange-500/40 rounded-xl text-white font-bold text-sm shadow-md group transition-colors"
              >
                <Phone className="w-5 h-5 text-orange-400 group-hover:rotate-12 transition-transform" />
                <span>{lang === 'hi' ? 'कॉल करें:' : 'Call:'} <span className="tabular-nums tracking-wide text-orange-400">{P3_CONTACT.phoneDisplay}</span></span>
              </a>

              <a
                href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent('नमस्ते P3 Motors! मुझे अपनी कार सर्विस का स्लॉट बुक करना है।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-700 hover:bg-emerald-600 rounded-xl text-white font-bold text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {P3_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* P3 Motors Promises */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {lang === 'hi' ? 'P3 Motors का भरोसा:' : 'The P3 Motors Guarantee:'}
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? '100% ओरिजिनल OEM व OES स्पेयर पार्ट्स' : '100% genuine OEM & OES replacement spares'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? 'कोई भी पार्ट बदलने से पहले फोन पर फोटो व वीडियो अप्रूवल' : 'Live photo & video approval before changing any part'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? '6 महीने / 10,000 किमी तक का संपूर्ण सर्विस वारंटी कवर' : '6 Months / 10,000 km warranty on parts & labor'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? 'पारदर्शी बिलिंग, बिना किसी अतिरिक्त छिपे खर्च के' : 'Transparent invoice breakdown with zero hidden fees'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-orange-500/60 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-center space-y-6 relative">
            <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                {lang === 'hi' ? 'बुकिंग सफलतापूर्वक दर्ज हुई' : 'Booking Successfully Confirmed!'}
              </span>
              <h3 className="font-display text-2xl font-extrabold text-white mt-1">
                {confirmedBooking.id}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'hi' ? 'यह आपका डिजिटल जॉब कार्ड व ट्रैकिंग नंबर है।' : 'Your digital job card tracking reference ID.'}
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">{lang === 'hi' ? 'ग्राहक:' : 'Customer:'}</span>
                <span className="font-semibold">{confirmedBooking.customerName}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">{lang === 'hi' ? 'गाड़ी नंबर:' : 'Vehicle Plate:'}</span>
                <span className="font-mono font-bold text-orange-400">{confirmedBooking.vehicleNumber}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">{lang === 'hi' ? 'मॉडल:' : 'Car Model:'}</span>
                <span>{confirmedBooking.carModel}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">{lang === 'hi' ? 'सर्विस:' : 'Service:'}</span>
                <span>{serviceType}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  lang === 'hi'
                    ? `नमस्ते P3 Motors! मैंने वेबसाइट पर अपॉइंटमेंट बुक किया है।\nबुकिंग ID: ${confirmedBooking.id}\nगाड़ी: ${confirmedBooking.vehicleNumber} (${confirmedBooking.carModel})\nनाम: ${confirmedBooking.customerName}`
                    : `Hello P3 Motors! I booked a service appointment online.\nBooking ID: ${confirmedBooking.id}\nVehicle: ${confirmedBooking.vehicleNumber} (${confirmedBooking.carModel})\nCustomer: ${confirmedBooking.customerName}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'hi' ? 'WhatsApp पर विवरण भेजें (9727200087)' : 'Send to WhatsApp (97272 00087)'}</span>
              </a>

              <button
                onClick={() => {
                  setConfirmedBooking(null);
                  onNavigateToTrack();
                }}
                className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'hi' ? 'लाइव स्टेटस ट्रैक करें' : 'Track Vehicle Status Live'}
              </button>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="text-xs text-slate-400 hover:text-white pt-1 cursor-pointer"
              >
                {lang === 'hi' ? 'बंद करें' : 'Dismiss'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
