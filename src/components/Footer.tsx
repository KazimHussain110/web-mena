import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import komodoLogo from '../../assets/komodo-logo.webp';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
}) => {
  const handleGetInTouchClick = () => {
    window.location.href = 'https://www.komodox.ai/contact';
  };
  return (
    <footer className="border-t border-[#1E2B38]/80 bg-[#0B0F13]/90 pt-12 pb-8 text-[#8496AA] relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1E2B38]/60">
          
          {/* Brand */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src={komodoLogo}
                alt="KomodoX Digital Studio"
                className="h-7 w-auto"
              />
              <span className="font-display text-lg font-bold text-white">
                Komodo<span className="text-[#59b7a6]">X</span>
              </span>
            </div>

            <p className="text-xs text-[#8496AA] leading-relaxed max-w-sm">
              Crafting high-performance bespoke websites, interactive spatial web platforms, and tailored digital experiences.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-6 space-y-2 md:text-right flex flex-col md:items-end">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Work With Us
            </h4>
            <p className="text-xs text-[#8496AA] max-w-sm">
              Have a digital project? Let&apos;s build an exceptional web experience together.
            </p>
            <div className="pt-2">
              <button
                onClick={handleGetInTouchClick}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#59b7a6] to-[#457292] px-4 py-2 text-xs font-semibold text-[#0B0F13] hover:opacity-95 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} KomodoX Digital Studio. All rights reserved.</p>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1 text-[#8496AA] hover:text-[#59b7a6] transition-colors cursor-pointer font-medium"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
