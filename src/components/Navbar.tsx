import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import komodoLogo from '../../assets/komodo-logo.webp';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const handleContactClick = () => {
    window.location.href = 'https://www.komodox.ai/contact';
  };
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1E2B38]/80 bg-[#0B0F13]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand / Agency Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
            id="brand-logo-btn"
          >
            <img
              src={komodoLogo}
              alt="KomodoX Digital Studio"
              className="h-9 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-white group-hover:text-[#59b7a6] transition-colors">
                Komodo<span className="text-[#59b7a6]">X</span>
              </span>
            </div>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleContactClick}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#59b7a6] to-[#457292] px-4 py-2 text-xs font-semibold text-[#0B0F13] transition-all hover:opacity-95 hover:shadow-lg hover:shadow-[#59b7a6]/20 cursor-pointer"
            id="inquiry-btn"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
