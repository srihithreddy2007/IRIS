import React from 'react';

export const StatusBadge = ({ status }) => {
  const getStyle = () => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'RESOLVED':
        return 'bg-[#7DA9FF]/10 text-[#7DA9FF] border-[#7DA9FF]/30';
      case 'REJECTED':
        return 'bg-[#FF6B78]/10 text-[#FF6B78] border-[#FF6B78]/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStyle()}`}>
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current animate-pulse"></span>
      {status}
    </span>
  );
};
