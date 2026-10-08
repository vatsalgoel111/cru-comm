import React from 'react';
import { CruLogo } from './CruLogo';
import { ArrowUp, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141413] text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <CruLogo className="w-9 h-9" variant="white-on-orange" />
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                CRÜ Communications
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              We curate your personal brand, so YOU dominate your space. Executive narrative architecture, thought leadership, and closed-door masterclasses for visionary leaders.
            </p>

            <div className="pt-1 text-xs text-neutral-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>Kolkata, India · Founder-led by Pragya Bagri</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-sm text-neutral-400">
              <li>
                <a href="#philosophy" className="hover:text-[#FF4D00] transition-colors">
                  The Doctrine
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF4D00] transition-colors">
                  Curation Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#FF4D00] transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#masterclass" className="hover:text-[#FF4D00] transition-colors">
                  crü x by invite only
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF4D00] transition-colors">
                  Discovery & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels & Legal (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Public Presence
            </h4>
            <ul className="space-y-1.5 text-sm text-neutral-400">
              <li>
                <a
                  href="https://www.instagram.com/cru_comm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D00] transition-colors flex items-center gap-2"
                >
                  <span>Instagram: @cru_comm</span>
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/in/pragya-bagri-0355811ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D00] transition-colors flex items-center gap-2"
                >
                  <span>LinkedIn: Pragya Bagri</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D00] transition-colors"
                >
                  <span>Location: Kolkata, India</span>
                </a>
              </li>
              <li className="text-xs text-neutral-400 pt-1">
                Direct Line: <a href="tel:+912249725000" className="hover:text-white underline">+91 (0) 22 4972 5000</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} CRÜ Communications. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">
              Kolkata · India
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-[#FF4D00] transition-colors p-1"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
