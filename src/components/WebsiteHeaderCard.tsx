import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioProject } from '../types';

interface WebsiteHeaderCardProps {
  project: PortfolioProject;
  onPreviewClick?: (project: PortfolioProject) => void;
  onDetailClick?: (project: PortfolioProject) => void;
}

export const WebsiteHeaderCard: React.FC<WebsiteHeaderCardProps> = ({
  project,
}) => {
  const [imgError, setImgError] = useState(false);

  const handleDirectRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id={`project-card-${project.id}`}
      onClick={handleDirectRedirect}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#1E2B38] bg-[#111820] transition-all duration-300 hover:border-[#59b7a6]/70 hover:-translate-y-1 cursor-pointer"
    >
      {/* 1. MINIMAL TOP BAR (WINDOW DOTS ONLY) */}
      <div className="flex items-center border-b border-[#1E2B38]/80 bg-[#16202A] px-4 py-3 transition-colors group-hover:bg-[#1A2633] select-none">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#3B4E61]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#3B4E61]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#3B4E61]" />
        </div>
      </div>

      {/* 2. PREVIEW MATCHING IMAGE ASPECT RATIO */}
      <div
        className="relative w-full overflow-hidden bg-[#0B0F13]"
        style={{ aspectRatio: project.imageAspectRatio ?? 16 / 9 }}
      >
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85' : project.headerImage}
          alt={`${project.title} website preview`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Subtle Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F13]/70 via-transparent to-black/20 pointer-events-none" />

        {/* Hover Overlay with Visit button */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F13]/60 opacity-0 backdrop-blur-[2px] transition-all duration-200 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#59b7a6] to-[#457292] px-6 py-3 font-display text-sm font-semibold text-[#0B0F13] shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
            <span>Visit Website</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* 3. CARD BODY: ONLY HEADING AND VISIT OPTION */}
      <div className="flex items-center justify-between p-5 sm:p-6 bg-[#111820]">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#59b7a6]">
          {project.title}
        </h3>

        <button
          onClick={handleDirectRedirect}
          className="flex items-center gap-1.5 rounded-lg bg-[#59b7a6]/15 border border-[#59b7a6]/30 px-4 py-2 text-xs font-semibold text-[#59b7a6] transition-all group-hover:bg-[#59b7a6] group-hover:text-[#0B0F13] cursor-pointer shrink-0"
          id={`visit-btn-${project.id}`}
        >
          <span>Visit</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
