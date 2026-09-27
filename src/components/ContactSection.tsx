import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageSquare, Send, CheckCircle2, Shield } from 'lucide-react';
import { Language } from '../types';
import { P3_CONTACT } from '../data/garageData';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            <span>{lang === 'hi' ? 'संपर्क केंद्र' : 'Direct Garage Desk'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{lang === 'hi' ? 'कॉल व विजिट' : 'Hotline 97272 00087'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'hi'
              ? 'P3 Motors से संपर्क करें — आपकी कार की सेवा में तत्पर'
              : 'Connect with P3 Motors Service Headquarters'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {lang === 'hi'
              ? 'किसी भी पूछताछ, इमरजेंसी ब्रेकडाउन या कार सर्विस के लिए हमारे नंबर 9727200087 पर कॉल करें या नीचे संदेश छोड़ें।'
              : 'Direct telephone line, WhatsApp desk, or visit our high-tech workshop facility in person.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Phone Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-orange-500/40 rounded-xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    {lang === 'hi' ? 'सीधा संपर्क नंबर' : 'Primary Direct Contact'}
                  </span>
                  <div className="text-3xl font-display font-extrabold text-white tracking-tight mt-1 font-mono tabular-nums">
                    {P3_CONTACT.phoneDisplay}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {lang === 'hi'
                      ? 'सर्विस बुकिंग, ब्रेकडाउन सहायता व तकनीकी पूछताछ हेतु उपलब्ध।'
                      : 'Available for immediate bookings, towing, and technical advisory.'}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500 flex items-center justify-center text-orange-400 shrink-0">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${P3_CONTACT.phoneRaw}`}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors"
                >
                  {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
                </a>
                <a
                  href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent(lang === 'hi' ? 'नमस्ते P3 Motors! मुझे पूछताछ करनी है।' : 'Hello P3 Motors! I have an inquiry about car repairs and servicing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address & Timings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-orange-400 mb-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {lang === 'hi' ? 'वर्कशॉप का पता' : 'Workshop Location'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'hi' ? P3_CONTACT.addressHi : P3_CONTACT.addressEn}
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-orange-400 mb-1">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {lang === 'hi' ? 'कार्य समय' : 'Operating Hours'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'hi' ? P3_CONTACT.workingHoursHi : P3_CONTACT.workingHoursEn}
                </p>
              </div>
            </div>

            {/* Garage Amenities */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {lang === 'hi' ? 'गैराज सुविधाएं' : 'Facility Highlights'}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>8 Hydraulic Service Bays</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Dust-Free Paint Booth</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Air-Conditioned Lounge + Wi-Fi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>CCTV Live Inspection Feed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-display font-bold text-xl text-white mb-1">
              {lang === 'hi' ? 'त्वरित संदेश या कॉल बैक अनुरोध' : 'Request Callback or Send Inquiry'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'hi'
                ? 'अपना विवरण दर्ज करें, हमारे सर्विस मैनेजर 15 मिनट के अंदर संपर्क करेंगे।'
                : 'Leave your query below and our service team will get back to you promptly.'}
            </p>

            {submitted ? (
              <div className="p-6 bg-slate-950/70 border border-emerald-500/50 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-white text-base">
                  {lang === 'hi' ? 'संदेश प्राप्त हुआ!' : 'Inquiry Received!'}
                </h4>
                <p className="text-xs text-slate-300">
                  {lang === 'hi'
                    ? `धन्यवाद ${name}! P3 Motors की टीम आपसे नंबर ${phone} पर शीघ्र संपर्क करेगी।`
                    : `Thank you ${name}! Our representative will call you at ${phone} shortly.`}
                </p>
                <div className="pt-2">
                  <a
                    href={`${P3_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                      lang === 'hi'
                        ? `नमस्ते P3 Motors! मेरा नाम ${name} है और मेरा सवाल है: ${message}`
                        : `Hello P3 Motors! My name is ${name} and my inquiry is: ${message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-lg"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'WhatsApp पर भी चैट करें' : 'Chat on WhatsApp'}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    {lang === 'hi' ? 'नाम *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'hi' ? 'आपका नाम' : 'Your Name'}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    {lang === 'hi' ? 'फोन नंबर *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="97272 00087"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    {lang === 'hi' ? 'गाड़ी का मॉडल व समस्या' : 'Car Details & Service Requirement'}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'hi' ? 'कार का नाम और क्या काम करवाना है...' : 'Car model and what needs to be checked or repaired...'}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-orange-950/40 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'कॉल बैक का अनुरोध भेजें' : 'Request Urgent Callback'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
