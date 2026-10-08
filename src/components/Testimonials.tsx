import React from 'react';
import { CruLogo } from './CruLogo';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  badge: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      quote:
        'Pragya and the CRÜ team helped distill years of startup grit into a clear, magnetic personal narrative. Inbound investor and talent conversations shifted almost immediately.',
      author: 'Founder & CEO',
      role: 'High-Growth Tech Venture, Mumbai',
      badge: 'Founder Branding',
    },
    {
      id: 't2',
      quote:
        'In a world full of generic AI-generated templates, CRÜ curates a voice that is raw, human, and genuinely commanding. The best investment I made for my leadership presence.',
      author: 'Chief Marketing Officer',
      role: 'Consumer Enterprise, India',
      badge: 'Executive Advisory',
    },
    {
      id: 't3',
      quote:
        'Attending ‘A Room Full Of People Ready To Be Remembered’ in Kolkata completely changed how I think about legacy. Pragya’s live feedback was razor sharp.',
      author: 'Executive Cohort Member',
      role: 'crü x by invite only Kolkata Salon',
      badge: 'Masterclass Cohort',
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-[#141413]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-2.5">
            <span>Client Perspectives</span>
            <span aria-hidden="true">·</span>
            <span>Real Impact</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141413] leading-[1.2]">
            Voices from leaders who chose to be remembered.
          </h2>
          <p className="mt-3 text-sm text-[#68655E]">
            Trusted by visionary founders, operators, and CXOs across industries.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-7 border border-[#141413]/8 flex flex-col justify-between hover:border-[#FF4D00]/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#141413]/8 flex items-center justify-center text-[#FF4D00]">
                    <Quote className="w-4 h-4 fill-current opacity-80" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-[#68655E] bg-white px-2 py-0.5 rounded-md border border-[#141413]/5">
                    {t.badge}
                  </span>
                </div>

                <blockquote className="text-sm text-[#2E2D2A] leading-relaxed italic mb-5">
                  “{t.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#141413]/8 flex items-center gap-3">
                <CruLogo className="w-7 h-7 shrink-0" variant="orange-on-white" />
                <div>
                  <div className="font-display text-xs sm:text-sm font-bold text-[#141413]">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#68655E] mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
