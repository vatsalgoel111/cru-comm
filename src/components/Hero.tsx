import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Compass } from 'lucide-react';
import { CruLogo } from './CruLogo';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Throttle/rAF or direct scrollY
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Parallax offsets (disabled on reduced-motion automatically via CSS/limits)
  const layer1Offset = Math.min(scrollY * 0.15, 120);
  const layer2Offset = Math.min(scrollY * -0.1, 80);
  const layer3Offset = Math.min(scrollY * 0.22, 160);

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden border-b border-[#141413]/5">
      {/* Background Ambience & Subtle Grid Glow */}
      <div
        className="absolute top-1/4 right-5 w-96 h-96 bg-[#FF4D00]/10 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2"
        style={{ transform: `translateY(${layer1Offset * 0.5}px)` }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#FF8A00]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Real Positioning Subtitle / Trust Indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
              <span>Founder & CXO Personal Branding Agency</span>
              <span className="text-[#141413]/30" aria-hidden="true">·</span>
              <span className="text-[#68655E] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FF4D00]" /> Mumbai, India
              </span>
            </div>

            {/* Natural Balanced Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#141413] leading-[1.14] text-balance mb-4 max-w-2xl">
              We curate your personal brand, so{' '}
              <span className="text-[#FF4D00] underline decoration-[#FF4D00]/30 decoration-wavy underline-offset-8">
                YOU
              </span>{' '}
              dominate your space.
            </h1>

            {/* Strategic Subtext derived directly from CRÜ content */}
            <p className="text-base sm:text-lg text-[#52504A] leading-relaxed max-w-2xl mb-6 font-normal">
              Is your personal brand strong enough to outlive your job title? At CRÜ, we engineer distinctive thought leadership, executive narrative, and digital presence for founders, leaders, and operators who refuse to blend in.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6.5 py-3 text-sm sm:text-base font-semibold text-white bg-[#FF4D00] hover:bg-[#E04400] active:scale-98 rounded-full transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D00]"
              >
                <span>Build Your CRÜ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#philosophy"
                className="inline-flex items-center justify-center gap-2 px-5.5 py-3 text-sm sm:text-base font-medium text-[#141413] hover:text-[#FF4D00] bg-white hover:bg-neutral-50 border border-[#141413]/10 rounded-full transition-all duration-200 whitespace-nowrap shadow-2xs"
              >
                <Compass className="w-4 h-4 text-[#68655E]" />
                <span>The Legacy Philosophy</span>
              </a>
            </div>

            {/* Clean Unboxed Metadata Indicators (Rule: No pills) */}
            <div className="pt-5 border-t border-[#141413]/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#68655E]">
              <span className="font-medium text-[#141413]">Executive Strategy</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#141413]">High-Signal Content</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#FF4D00] font-semibold">Led by Pragya Bagri</span>
            </div>
          </div>

          {/* Right Column: Multi-layer Parallax Brand Canvas & Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Visual Surface: Editorial Brand Dossier */}
              <div 
                className="relative bg-white rounded-3xl border border-[#141413]/10 p-6 sm:p-8 shadow-xl transition-transform duration-200"
                style={{ transform: `translateY(${layer2Offset}px)` }}
              >
                {/* Header of Dossier */}
                <div className="flex items-center justify-between pb-5 border-b border-[#141413]/8">
                  <div className="flex items-center gap-3">
                    <CruLogo className="w-11 h-11" variant="orange-on-white" />
                    <div>
                      <div className="font-display font-bold text-base text-[#141413]">CRÜ Communications</div>
                      <div className="text-xs text-[#68655E]">Personal Branding Agency · Mumbai</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF4D00] bg-[#FF4D00]/10 px-2.5 py-1 rounded-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    By Invite Only
                  </span>
                </div>

                {/* Core Real Post Graphic: "What will you leave behind..." */}
                <div className="my-6 p-6 rounded-2xl bg-[#FFF8F3] border border-[#FF4D00]/20 relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#FF4D00]/10 rounded-full blur-xl" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FF4D00] mb-2">The Real Question</p>
                  <blockquote className="font-display text-2xl font-bold text-[#141413] leading-snug">
                    “What will you leave behind... if not a legacy?”
                  </blockquote>
                </div>

                {/* Masterclass Table Motif */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#141413] flex items-center justify-between">
                    <span>Curated Focus Areas</span>
                    <span className="text-[#FF4D00]">2026/2027</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#141413]/5">
                      <div className="font-bold text-[#141413]">Founder Presence</div>
                      <div className="text-[#68655E] text-[11px] mt-0.5">LinkedIn & Public Voice</div>
                    </div>
                    <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#141413]/5">
                      <div className="font-bold text-[#141413]">Legacy Moat</div>
                      <div className="text-[#68655E] text-[11px] mt-0.5">Reputational Capital</div>
                    </div>
                  </div>
                </div>

                {/* Founder Footnote */}
                <div className="mt-5 pt-4 border-t border-[#141413]/8 flex items-center justify-between text-xs text-[#68655E]">
                  <span>Founder: <strong>Pragya Bagri</strong></span>
                  <span className="text-[#FF4D00] font-medium">DM to build your CRÜ ✨</span>
                </div>
              </div>

              {/* Floating Layer 3: Interactive Parallax Card - Masterclass Badge */}
              <div
                className="hidden sm:block absolute -bottom-6 -left-8 bg-[#141413] text-white p-4.5 rounded-2xl shadow-2xl border border-white/10 max-w-xs transition-transform duration-300"
                style={{ transform: `translateY(${layer3Offset}px)` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF4D00]">CRÜ Masterclass</span>
                </div>
                <div className="text-sm font-bold font-display leading-tight text-white">
                  “A Room Full Of People Ready To Be Remembered”
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Invite-only executive sessions · Mumbai
                </div>
              </div>

              {/* Floating Layer 1: Social Proof Badge */}
              <div
                className="hidden sm:block absolute -top-5 -right-6 bg-white p-3.5 rounded-2xl shadow-lg border border-[#141413]/10 max-w-[210px] transition-transform duration-300"
                style={{ transform: `translateY(${-layer1Offset * 0.4}px)` }}
              >
                <div className="text-[11px] text-[#68655E]">LinkedIn Network</div>
                <div className="text-base font-bold font-display text-[#141413]">
                  6,100+ Followers
                </div>
                <div className="text-[10px] text-[#FF4D00] font-medium mt-0.5">
                  500+ Executive Connections
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
