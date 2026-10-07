import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, MessageSquare, Video, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  audience: string;
  commitment: string;
  highlight?: string;
}

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('01');

  const services: ServiceItem[] = [
    {
      id: '01',
      number: '01',
      title: 'Founder & CXO Personal Branding',
      subtitle: 'Executive Authority & Legacy Architecture',
      description:
        'A comprehensive end-to-end immersion to define your intellectual stance, crystallize your life-work narrative, and engineer an authoritative public profile that commands industry reverence.',
      icon: Sparkles,
      deliverables: [
        'Personal Brand Diagnostic & Positioning Manifesto',
        'LinkedIn & Social Profile Complete Architectural Overhaul',
        'Core Intellectual Pillars & Thought Leadership Matrix',
        'Executive Bio & Speaking Roster Deck',
        'Ongoing Content Strategy & High-Signal Ghostwriting',
      ],
      audience: 'Series A+ Founders, C-Suite Leaders, Managing Partners & Venture Capitalists',
      commitment: 'Bespoke 3 to 6-Month Advisory Retainer',
      highlight: 'Flagship Offering',
    },
    {
      id: '02',
      number: '02',
      title: 'Content & Narrative Curation',
      subtitle: 'High-Signal Thought Leadership Across Platforms',
      description:
        'Moving past cookie-cutter corporate updates into polarizing, magnetic written and video storytelling. Sourced directly from your lived experiences to ensure your voice remains unfiltered.',
      icon: Video,
      deliverables: [
        'Weekly High-Signal LinkedIn Articles & Commentary',
        'Reel & Video Storyboarding (“Personal Branding 101”)',
        'Keynote & Panel Speech Narrative Polish',
        'Monthly Distribution Review & Audience Engagement Strategy',
      ],
      audience: 'Active operators seeking regular digital resonance without time overhead',
      commitment: 'Monthly Content Syndicate Retainer',
    },
    {
      id: '03',
      number: '03',
      title: '“CRÜ x By Invite Only” Masterclasses',
      subtitle: 'A Room Full Of People Ready To Be Remembered',
      description:
        'Curated intimate in-person and closed-door salons in Mumbai for ambitious leaders, founders, and creators ready to unlock their personal narrative alongside peers.',
      icon: Users,
      deliverables: [
        'Exclusive Masterclass Workbooks & Strategy Blueprints',
        'Live Hot-Seat Positioning & Story Critique by Pragya Bagri',
        'High-Trust Peer Network of Fellow CXOs & Visionaries',
        'Post-Session Actionable 30-Day Launch Toolkit',
      ],
      audience: 'Selected cohort of Founders, CXOs & Rising Industry Leaders',
      commitment: 'By-Invite Application Only (Mumbai)',
      highlight: 'Live in Mumbai',
    },
    {
      id: '04',
      number: '04',
      title: 'Brand Strategy & Reputational Moats',
      subtitle: 'Where Corporate Brand Meets Founder Story',
      description:
        'Aligning your company’s market proposition with your personal conviction. Because customers and talent don’t fall in love with corporations — they rally behind human founders.',
      icon: MessageSquare,
      deliverables: [
        'Brand Narrative & Company Origin Story Alignment',
        'Founder-Led PR & Media Opportunity Strategy',
        'Internal Team Culture & Leadership Voice Guidelines',
        'Crisis & Reputation Risk Mitigation Architecture',
      ],
      audience: 'Founders building high-growth consumer or enterprise companies',
      commitment: 'Custom Strategic Advisory Retainer',
    },
  ];

  const current = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-14 sm:py-16 bg-white border-b border-[#141413]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-2.5">
            <span>What We Offer</span>
            <span aria-hidden="true">·</span>
            <span>Tailored Curation</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141413] leading-[1.2]">
            Curated solutions designed for leaders ready to dominate their space.
          </h2>
        </div>

        {/* 2-Column Responsive Layout: Service Selector List + Deep Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Service List */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((service) => {
              const isSelected = activeService === service.id;
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4.5 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-4 group cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF9F5] border-[#FF4D00] shadow-sm ring-1 ring-[#FF4D00]'
                      : 'bg-white border-[#141413]/10 hover:border-[#141413]/30 hover:bg-[#FAF9F5]/50'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-display text-base sm:text-lg font-bold ${
                        isSelected ? 'text-[#FF4D00]' : 'text-[#8A8780] group-hover:text-[#141413]'
                      }`}
                    >
                      {service.number}.
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-sm sm:text-base font-bold text-[#141413]">
                          {service.title}
                        </h3>
                        {service.highlight && (
                          <span className="text-[10px] font-semibold text-[#FF4D00] bg-[#FF4D00]/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {service.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#68655E] mt-0.5 line-clamp-1">{service.subtitle}</p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform mt-0.5 ${
                      isSelected ? 'text-[#FF4D00] translate-x-1' : 'text-[#8A8780] group-hover:text-[#141413]'
                    }`}
                  />
                </button>
              );
            })}

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-dashed border-[#141413]/15 text-xs text-[#68655E] flex items-center justify-between">
              <span>Looking for custom executive advisory?</span>
              <a href="#contact" className="font-semibold text-[#FF4D00] hover:underline flex items-center gap-1">
                Enquire directly <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Curation Blueprint */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-7 md:p-8 border border-[#141413]/10 shadow-xs relative">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#FF4D00] uppercase tracking-wider">
                    Service Specification {current.number}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141413] leading-snug mt-0.5 tracking-normal">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#FF4D00] mt-0.5">{current.subtitle}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#141413]/10 flex items-center justify-center text-[#FF4D00] shrink-0">
                  <current.icon className="w-5 h-5" />
                </div>
              </div>

              <p className="text-[#52504A] text-xs sm:text-sm leading-relaxed mb-5">
                {current.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#141413] mb-2.5">
                    Scope of Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {current.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#403F3B]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#141413]/10 text-xs">
                  <div className="p-3.5 bg-white rounded-xl border border-[#141413]/8">
                    <span className="text-[#68655E] block font-medium text-[11px]">Ideal For</span>
                    <span className="font-semibold text-[#141413] mt-0.5 block leading-snug">{current.audience}</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-[#141413]/8">
                    <span className="text-[#68655E] block font-medium text-[11px]">Engagement Model</span>
                    <span className="font-semibold text-[#141413] mt-0.5 block leading-snug">{current.commitment}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#141413]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-xs text-[#68655E]">
                    Strictly capped roster to maintain bespoke quality.
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#FF4D00] hover:bg-[#E04400] rounded-full transition-all duration-200 shadow-sm"
                  >
                    <span>Book Strategy Discovery</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
