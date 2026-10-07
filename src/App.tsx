/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { WorkGallery } from './components/WorkGallery';
import { MasterclassSpotlight } from './components/MasterclassSpotlight';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141413] flex flex-col selection:bg-[#FF4D00] selection:text-white">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Parallax & Motion */}
        <Hero />

        {/* Brand Philosophy & Founder Doctrine */}
        <Philosophy />

        {/* Real Offerings & Curation Services */}
        <Services />

        {/* Featured Work & Case Studies */}
        <WorkGallery />

        {/* Exclusive Masterclass Spotlight: crü x by invite only */}
        <MasterclassSpotlight />

        {/* Client Endorsement Highlights */}
        <Testimonials />

        {/* Lead Capture Form & Direct Contact */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
