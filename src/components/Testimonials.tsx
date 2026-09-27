import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { Language } from '../types';
import { REVIEWS } from '../data/garageData';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            <span>{lang === 'hi' ? 'ग्राहक संतुष्टि' : 'Client Proof'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{lang === 'hi' ? 'सत्यापित अनुभव' : 'Verified Reviews'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'hi'
              ? 'कार मालिकों का P3 Motors पर अटूट विश्वास'
              : 'Endorsed by Discerning Car Owners Across the Region'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {lang === 'hi'
              ? 'देखें हमारे सम्मानित ग्राहकों के वास्तविक अनुभव जिन्होंने अपनी कारों के लिए P3 Motors की सेवाएं चुनीं।'
              : 'Real before-and-after repair experiences from vehicle owners trusting our precision mechanics.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs text-slate-400 font-mono">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{lang === 'hi' ? review.commentHi : review.commentEn}"
                </p>
              </div>

              {/* Author & Vehicle */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-orange-400 font-medium">
                    {review.vehicle}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {review.service} · {review.city}
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
