import React, { useState } from 'react';
import { CruLogo } from './CruLogo';
import { ExternalLink, Play, Sparkles, BookOpen, Layers, X } from 'lucide-react';

interface WorkItem {
  id: string;
  category: 'Executive Voice' | 'Visual & Reels' | 'Masterclass' | 'Legacy Architecture';
  title: string;
  clientLabel: string;
  highlight: string;
  description: string;
  outcomeTag: string;
  aestheticBg: string;
  accentColor: string;
  type: 'editorial-card' | 'quote-poster' | 'video-concept' | 'masterclass-table';
}

export const WorkGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const categories = ['All', 'Executive Voice', 'Visual & Reels', 'Masterclass', 'Legacy Architecture'];

  const workItems: WorkItem[] = [
    {
      id: 'w1',
      category: 'Visual & Reels',
      title: '“Personal Branding 101” Series',
      clientLabel: 'CRÜ Originals / Executive Reels',
      highlight: 'Video Storyboarding & High-Signal Shortform',
      description:
        'A multi-part video editorial series breaking down how modern founders can curate a defensible personal moat without generic viral dance trends or corporate clichés.',
      outcomeTag: 'High-Signal Impressions & Inbound Inquiries',
      aestheticBg: 'bg-[#FFF8F3]',
      accentColor: '#FF4D00',
      type: 'video-concept',
    },
    {
      id: 'w2',
      category: 'Executive Voice',
      title: '“What Will You Leave Behind?” Legacy Manifesto',
      clientLabel: 'Tech Founder & CEO',
      highlight: 'Thought Leadership & LinkedIn Architecture',
      description:
        'Crystallizing 8 years of venture scaling into a distinctive intellectual point of view. Sourced from authentic operational reflections rather than generic industry platitudes.',
      outcomeTag: '+340% Organic Executive Follower Growth',
      aestheticBg: 'bg-[#141413]',
      accentColor: '#FF4D00',
      type: 'quote-poster',
    },
    {
      id: 'w3',
      category: 'Masterclass',
      title: '“A Room Full Of People Ready To Be Remembered”',
      clientLabel: 'CRÜ x By Invite Only · Mumbai Cohort',
      highlight: 'Closed-Door Salon & Executive Workshop',
      description:
        'An intimate in-person masterclass held at a premier Mumbai venue bringing together ambitious founders and operators to build portable reputational equity.',
      outcomeTag: 'Curated 18-Leader Executive Cohort',
      aestheticBg: 'bg-[#FAF6F0]',
      accentColor: '#141413',
      type: 'masterclass-table',
    },
    {
      id: 'w4',
      category: 'Legacy Architecture',
      title: 'Founder Re-positioning & Transition Narrative',
      clientLabel: 'Serial Entrepreneur & Investor',
      highlight: 'Post-Exit Narrative Strategy',
      description:
        'Architecting a new public identity following a company transition, unlocking speaking opportunities, advisory invitations, and direct venture dealflow.',
      outcomeTag: 'Global Keynote & Advisory Appointments',
      aestheticBg: 'bg-white',
      accentColor: '#FF4D00',
      type: 'editorial-card',
    },
    {
      id: 'w5',
      category: 'Visual & Reels',
      title: '“And That Love + Game” Creative Voice',
      clientLabel: 'CRÜ Creative Direction',
      highlight: 'Authentic Dynamic Video Voice',
      description:
        'Blending raw entrepreneurial grit, vulnerability, and razor-sharp brand instincts into engaging reel content tailored for high-conviction decision makers.',
      outcomeTag: 'High-Trust Founder Resonance',
      aestheticBg: 'bg-[#FFF2EB]',
      accentColor: '#FF4D00',
      type: 'video-concept',
    },
    {
      id: 'w6',
      category: 'Executive Voice',
      title: 'C-Suite Thought Leadership Syndicate',
      clientLabel: 'Fintech Chief Marketing Officer',
      highlight: 'Ghostwriting & Strategic Commentary',
      description:
        'Establishing authoritative industry commentary on regulatory shifts, consumer trust, and financial infrastructure with deep analytical rigor.',
      outcomeTag: 'Tier-1 Industry Authority',
      aestheticBg: 'bg-neutral-50',
      accentColor: '#141413',
      type: 'editorial-card',
    },
  ];

  const filteredItems =
    activeFilter === 'All' ? workItems : workItems.filter((i) => i.category === activeFilter);

  return (
    <section id="work" className="py-14 sm:py-16 bg-[#FAF9F5] border-b border-[#141413]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00] mb-2.5">
              <span>Curated Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Case Studies & Work</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141413] leading-[1.2]">
              Real narratives. Undeniable presence.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#68655E] max-w-sm">
            All proprietary work is protected by confidentiality. Selected client engagements and narrative architectures highlighted below.
          </p>
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#141413]/10 pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#141413] text-white shadow-xs'
                  : 'bg-white text-[#52504A] hover:text-[#141413] border border-[#141413]/10 hover:border-[#141413]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento / Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl border border-[#141413]/10 p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-[#FF4D00]/50 transition-all duration-200 group cursor-pointer relative overflow-hidden"
            >
              {/* Visual Presentation Card */}
              <div
                className={`w-full h-44 rounded-2xl ${item.aestheticBg} border border-[#141413]/8 p-5 mb-5 flex flex-col justify-between relative overflow-hidden transition-transform duration-200 group-hover:scale-[1.01]`}
              >
                {/* Specific Card Layouts depending on category */}
                {item.type === 'quote-poster' && (
                  <div className="text-white flex flex-col justify-between h-full">
                    <span className="text-[10px] font-mono tracking-widest text-[#FF4D00] uppercase font-bold">
                      Manifesto Quote
                    </span>
                    <p className="font-display text-lg font-bold leading-snug line-clamp-3">
                      “What will you leave behind... if not a legacy?”
                    </p>
                    <span className="text-[10px] text-neutral-400">Executive Narrative Architecture</span>
                  </div>
                )}

                {item.type === 'video-concept' && (
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-[#FF4D00] uppercase tracking-wider">
                        Reel & Video Storyboard
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#FF4D00] text-white flex items-center justify-center shadow-xs">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-[#141413] line-clamp-2">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#68655E] mt-0.5">High-Signal Narrative Reel</div>
                    </div>
                  </div>
                )}

                {item.type === 'masterclass-table' && (
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-wider text-[#FF4D00] uppercase">
                        CRÜ by Invite Only
                      </span>
                      <CruLogo className="w-6 h-6" variant="orange-on-white" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/80 border border-[#141413]/5">
                      <p className="text-xs font-bold text-[#141413]">“A Room Full Of People Ready To Be Remembered”</p>
                      <p className="text-[10px] text-[#68655E] mt-0.5">Mumbai Cohort Salon</p>
                    </div>
                  </div>
                )}

                {item.type === 'editorial-card' && (
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-[10px] font-semibold text-[#68655E] uppercase tracking-wider">
                      Strategic Dossier
                    </span>
                    <div>
                      <div className="w-8 h-1 bg-[#FF4D00] rounded-full mb-2" />
                      <div className="font-display font-bold text-sm text-[#141413] line-clamp-2">
                        {item.title}
                      </div>
                    </div>
                    <span className="text-[10px] text-[#68655E] flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#FF4D00]" /> Confidential Engagement
                    </span>
                  </div>
                )}
              </div>

              {/* Card Meta & Clean Unboxed Info (Rule: No pills) */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#68655E] mb-2">
                  <span className="font-medium text-[#FF4D00]">{item.category}</span>
                  <span>{item.clientLabel}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#141413] group-hover:text-[#FF4D00] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#52504A] line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Outcome indicator */}
                <div className="pt-3 border-t border-[#141413]/8 flex items-center justify-between text-[11px]">
                  <span className="text-[#8A8780] font-mono">{item.outcomeTag}</span>
                  <span className="text-[#FF4D00] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Explore <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#141413]/10 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-[#141413] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-semibold text-[#FF4D00] uppercase tracking-wider">
                {selectedItem.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-[#141413] mt-1">
                {selectedItem.title}
              </h3>
              <p className="text-xs text-[#68655E] mt-0.5">{selectedItem.clientLabel}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#141413]/10 mb-6 space-y-2">
              <p className="text-sm text-[#403F3B] leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="pt-2 border-t border-[#141413]/8 text-xs font-mono text-[#FF4D00]">
                Outcome: {selectedItem.outcomeTag}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-medium text-[#68655E] hover:text-[#141413]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF4D00] hover:bg-[#E04400] rounded-full transition-colors"
              >
                Inquire About Similar Curation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
