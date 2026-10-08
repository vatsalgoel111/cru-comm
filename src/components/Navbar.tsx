import React, { useState, useEffect } from 'react';
import { CruLogo } from './CruLogo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Masterclass', href: '#masterclass' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/92 backdrop-blur-md border-b border-[#141413]/10 shadow-2xs py-2.5 sm:py-3'
          : 'bg-[#FAF9F5]/80 backdrop-blur-xs py-3.5 sm:py-4 border-b border-[#141413]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#FF4D00] rounded-sm"
            aria-label="CRÜ Communications Home"
          >
            <CruLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#141413]">
              CRÜ <span className="font-normal text-xs uppercase tracking-wider text-[#68655E] hidden sm:inline">Communications</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text with subtle underline hover) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#403F3B] hover:text-[#FF4D00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#FF4D00] hover:bg-[#E04400] active:scale-98 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4D00]"
            >
              Build Your CRÜ
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#141413] hover:text-[#FF4D00] focus-visible:outline-2 focus-visible:outline-[#FF4D00] rounded-lg"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#141413]/10 px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-[#141413] hover:text-[#FF4D00] transition-colors py-2 border-b border-[#141413]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-[#FF4D00] rounded-full hover:bg-[#E04400]"
              >
                Build Your CRÜ
              </a>
              <div className="text-center text-xs text-[#68655E] pt-1">
                Kolkata, India · Founder-led by Pragya Bagri
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
