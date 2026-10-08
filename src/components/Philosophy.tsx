import React from 'react';
import { CruLogo } from './CruLogo';
import { Target, ShieldCheck, Flame, BookOpen } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-14 sm:py-16 bg-[#FAF9F5] border-b border-[#141413]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-2.5">
            <span>The CRÜ Doctrine</span>
            <span aria-hidden="true">·</span>
            <span>Founder & CXO Positioning</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141413] leading-[1.2] text-balance">
            Is your personal brand strong enough to outlive your job title?
          </h2>
          <p className="mt-3.5 text-base text-[#52504A] leading-relaxed">
            Most executives spend decades building value for their companies while keeping their personal reputation entirely unhedged. When the title changes, what remains?
          </p>
        </div>

        {/* 2-Column Core Architecture: The Philosophy + The Founder's Voice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): The 3 Pillars of Legacy Branding */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#141413]/10 shadow-xs">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#FF4D00] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#141413] mb-2">
                01. Dominate Your Space, Don't Compete For Noise
              </h3>
              <p className="text-[#52504A] leading-relaxed text-sm sm:text-base">
                “We curate your personal brand, so YOU dominate your space.” We reject the template-driven, algorithm-chasing LinkedIn hacks that make everyone sound like a ghostwritten commodity. True personal branding is about establishing an undeniable intellectual point of view that commands the room before you even enter it.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#141413]/10 shadow-xs">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#FF4D00] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#141413] mb-2">
                02. Reputation As Portable Equity
              </h3>
              <p className="text-[#52504A] leading-relaxed text-sm sm:text-base">
                Your company equity stays with the company. Your personal brand stays with you for life. Whether you are fundraising your next round, hiring top-tier tier-1 operators, or opening your next global chapter, high-conviction executive branding turns your track record into compound interest.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#141413]/10 shadow-xs">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#FF4D00] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#141413] mb-2">
                03. Curated In Intimacy, Scaled In Public
              </h3>
              <p className="text-[#52504A] leading-relaxed text-sm sm:text-base">
                From our private invite-only masterclasses in Kolkata to high-impact digital storytelling, we work with a tightly capped roster of founders. Every word, appearance, and strategic move is intentionally designed to reflect the real human behind the enterprise.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Founder Spotlight & Authentic Bio */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#141413] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4D00]/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Real LinkedIn Profile Quote */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-6">
                  <Flame className="w-4 h-4 text-[#FF4D00]" />
                  <span>The Founder</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  {/* Founder Visual representation / Logo mark lockup */}
                  <div className="w-16 h-16 rounded-full bg-[#FF4D00] p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                    <CruLogo className="w-12 h-12" variant="white-on-orange" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Pragya Bagri</h3>
                    <div className="text-xs text-neutral-400">Founder & Brand Strategist · CRÜ</div>
                  </div>
                </div>

                {/* Verbatim Headline from Pragya's LinkedIn */}
                <div className="p-4.5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                    Founder Manifesto
                  </p>
                  <blockquote className="font-display text-base sm:text-lg font-semibold text-[#FAF9F5] italic leading-snug">
                    “I’ve Built Brands, Burnt Out, Bounced Back & Booked the next flight.”
                  </blockquote>
                  <p className="text-[11px] text-[#FF4D00] mt-2 font-medium">
                    — Pragya Bagri (Public LinkedIn)
                  </p>
                </div>

                <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Pragya founded CRÜ Communications to bridge the chasm between raw founder ambition and public perception. Having experienced firsthand the highs, burnouts, and reinventions of building in fast-growth environments, she partners with CXOs to craft voices that feel authentic, vulnerable, and unstoppable.
                  </p>
                  <p className="text-xs text-neutral-400">
                    Alumna of FLAME University · Based in Kolkata · Leading executive personal branding and invite-only masterclasses.
                  </p>
                </div>

                {/* Direct action to connect */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="https://in.linkedin.com/in/pragya-bagri-0355811ab"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-white hover:text-[#FF4D00] transition-colors underline underline-offset-4"
                  >
                    View LinkedIn Profile (6,100+ Network) →
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-100 rounded-full transition-colors"
                  >
                    Work With Pragya
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
