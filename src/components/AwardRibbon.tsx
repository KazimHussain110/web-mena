import React from 'react';
import { AwardBadge } from '../types';

interface AwardRibbonProps {
  award: AwardBadge;
  size?: 'sm' | 'md';
}

export const AwardRibbon: React.FC<AwardRibbonProps> = ({ award, size = 'sm' }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#59b7a6]/30 bg-[#59b7a6]/10 px-2 py-0.5 text-[10px] font-medium text-[#59b7a6] backdrop-blur-sm`}
    >
      {award.name || 'Featured Work'}
    </span>
  );
};
