import React from 'react';
import { CruLogo } from './CruLogo';
import { Calendar, Users, MapPin, Check, ArrowRight } from 'lucide-react';

export const MasterclassSpotlight: React.FC = () => {
  return (
    <section id="masterclass" className="py-14 sm:py-16 bg-[#141413] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF4D00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: The Narrative & Atmosphere */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              <span>crü x by invite only</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span>Kolkata Executive Salon</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] text-balance mb-4">
              “A Room Full Of People Ready To Be Remembered”
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Real reputation isn’t built through automated spam bots or superficial engagement pods. It is forged in rooms of mutual ambition. Our signature closed-door masterclass brings together founders, senior operators, and visionaries for an intensive narrative workshop.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#FF4D00] text-sm font-bold mb-1">
                  <Users className="w-4 h-4" />
                  <span>Curated Cohort</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Strictly limited seating to ensure deep 1-on-1 narrative feedback with Pragya Bagri.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#FF4D00] text-sm font-bold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Prime Kolkata Venue</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Hosted at design-led private venues in Kolkata. Catering and materials provided.
                </p>
              </div>
            </div>

            {/* Application CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-black bg-[#FF4D00] hover:bg-[#FF6622] rounded-full transition-all duration-200 text-white"
              >
                <span>Request Invite for Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Applications open for upcoming Kolkata cohort
              </span>
            </div>
          </div>

          {/* Right Column: Physical Masterclass Experience Motif */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#1D1D1B] rounded-3xl p-7 border border-white/10 shadow-2xl overflow-hidden">
              {/* Folder / Notepad mock motif in brand orange */}
              <div className="bg-[#FF4D00] rounded-2xl p-6 text-white mb-6 relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <CruLogo className="w-10 h-10" variant="white-on-orange" />
                  <span className="text-[11px] font-mono tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded text-white font-bold">
                    CONFIDENTIAL
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-mono tracking-wider opacity-90">CRÜ MASTERCLASS WORKBOOK</p>
                  <h3 className="font-display text-2xl font-black">EXECUTIVE NARRATIVE</h3>
                  <p className="text-xs opacity-80 pt-1">Kolkata Cohort · Personal Brand Diagnostic</p>
                </div>
              </div>

              {/* What’s inside */}
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-center gap-3 py-2 border-b border-white/5">
                  <Check className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>The Legacy Moat: Defining your non-negotiable points of view</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-white/5">
                  <Check className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>Overcoming Founder Hesitation: Why quiet humility hurts companies</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-white/5">
                  <Check className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>The 30-Day Execution Playbook: Profiles, hooks & cadence</span>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <Check className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>Direct hot-seat critique from Pragya Bagri</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-[11px] text-neutral-400 italic">
                  “A Room Full Of People Ready To Be Remembered” — crü x by invite only
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
