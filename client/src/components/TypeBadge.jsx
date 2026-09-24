import React from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export const TypeBadge = ({ type }) => {
  const isLost = type === 'LOST';
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
        isLost
          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
          : 'bg-rose-50 text-rose-700 border-rose-200'
      }`}
    >
      {isLost ? <HelpCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
      {type}
    </span>
  );
};
