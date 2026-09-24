import React from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export const TypeBadge = ({ type }) => {
  const isLost = type === 'LOST';
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
        isLost
          ? 'bg-[#7DA9FF]/15 text-[#7DA9FF] border-[#7DA9FF]/40'
          : 'bg-[#FF6B78]/15 text-[#FF6B78] border-[#FF6B78]/40'
      }`}
    >
      {isLost ? <HelpCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
      {type}
    </span>
  );
};
