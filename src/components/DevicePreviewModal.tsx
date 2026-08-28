import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, RotateCcw, Lock, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PortfolioProject } from '../types';

interface DevicePreviewModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const DevicePreviewModal: React.FC<DevicePreviewModalProps> = ({ project, onClose }) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchExternal = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile':
        return 'w-[375px] h-[667px]';
      case 'tablet':
        return 'w-[768px] h-[800px]';
      case 'desktop':
      default:
        return 'w-full h-[76vh]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="flex flex-col h-[92vh] w-full max-w-5xl rounded-2xl border border-[#1E2B38] bg-[#0B0F13] shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-[#1E2B38] bg-[#111820] px-4 py-3">
          
          {/* Left: Project title & URL */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#3B4E61]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#3B4E61]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#3B4E61]" />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#273847] bg-[#0B0F13] px-3 py-0.5 text-xs font-mono text-[#8496AA]">
              <Lock className="h-3 w-3 text-[#59b7a6]" />
              <span className="text-slate-200 font-medium">{project.displayUrl}</span>
            </div>
          </div>

          {/* Center: Device Switcher */}
          <div className="flex items-center rounded-xl border border-[#1E2B38] bg-[#0B0F13] p-1">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs transition-colors cursor-pointer ${
                device === 'desktop' ? 'bg-[#59b7a6] text-[#0B0F13] font-semibold' : 'text-[#8496AA] hover:text-white'
              }`}
              title="Desktop"
            >
              <Monitor className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs transition-colors cursor-pointer ${
                device === 'tablet' ? 'bg-[#59b7a6] text-[#0B0F13] font-semibold' : 'text-[#8496AA] hover:text-white'
              }`}
              title="Tablet"
            >
              <Tablet className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs transition-colors cursor-pointer ${
                device === 'mobile' ? 'bg-[#59b7a6] text-[#0B0F13] font-semibold' : 'text-[#8496AA] hover:text-white'
              }`}
              title="Mobile"
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIframeKey((prev) => prev + 1)}
              className="rounded-lg border border-[#1E2B38] bg-[#111820] p-1.5 text-[#8496AA] hover:border-[#59b7a6] hover:text-[#59b7a6] transition-colors cursor-pointer"
              title="Reload Preview"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={handleCopyUrl}
              className="hidden sm:flex items-center gap-1 rounded-lg border border-[#1E2B38] bg-[#111820] px-2.5 py-1.5 text-xs text-[#8496AA] hover:border-[#59b7a6] hover:text-[#59b7a6] transition-colors cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[#59b7a6]" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleLaunchExternal}
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#59b7a6] to-[#457292] px-3.5 py-1.5 text-xs font-semibold text-[#0B0F13] transition-colors hover:opacity-95 cursor-pointer"
            >
              <span>Visit Live</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={onClose}
              className="rounded-lg border border-[#1E2B38] bg-[#111820] p-1.5 text-[#8496AA] hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Viewport Simulation Area */}
        <div className="flex-1 bg-[#070A0D] p-4 flex items-center justify-center overflow-auto">
          <div className={`transition-all duration-300 flex flex-col rounded-xl border border-[#1E2B38] bg-[#111820] overflow-hidden shadow-2xl ${getDeviceWidth()}`}>
            
            {/* Device header */}
            <div className="flex items-center justify-between border-b border-[#1E2B38] bg-[#16202A] px-3 py-1.5 text-xs text-[#8496AA]">
              <span className="truncate max-w-[200px] text-white font-medium">
                {project.title}
              </span>
              <span className="text-[10px] text-[#59b7a6] font-medium uppercase">
                {device} mode
              </span>
            </div>

            {/* Content iframe */}
            <div className="relative flex-1 w-full bg-black overflow-hidden flex flex-col">
              <iframe
                key={iframeKey}
                src={project.url}
                title={project.title}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                className="w-full h-full border-0 bg-white"
              />

              {/* Bottom direct launch bar */}
              <div className="border-t border-[#1E2B38] bg-[#0B0F13] px-4 py-2.5 flex items-center justify-between text-xs">
                <span className="text-[#8496AA]">
                  Target: <strong className="text-white font-mono">{project.url}</strong>
                </span>

                <button
                  onClick={handleLaunchExternal}
                  className="flex items-center gap-1 text-[#59b7a6] hover:underline font-medium cursor-pointer"
                >
                  <span>Open in tab</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
