/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PortfolioProject } from './types';
import { INITIAL_PROJECTS } from './data/initialProjects';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WebsiteHeaderCard } from './components/WebsiteHeaderCard';
import { DevicePreviewModal } from './components/DevicePreviewModal';
import { Footer } from './components/Footer';

export default function App() {
  const [projects] = useState<PortfolioProject[]>(INITIAL_PROJECTS);
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="relative min-h-screen bg-[#0B0F13] text-[#F1F5F9] flex flex-col selection:bg-[#59b7a6] selection:text-[#0B0F13]">
      
      {/* Background Mesh Grid & Ambient Radial Glow covering entire page */}
      <div className="fixed inset-0 bg-komodo-grid opacity-60 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />

      {/* Main Page Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Main Portfolio Showcase: 2 Cards per Row */}
        <main id="showcase-grid-section" className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project) => (
              <WebsiteHeaderCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer
          onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      {/* In-App Device Preview Modal (if triggered) */}
      <DevicePreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />

    </div>
  );
}
