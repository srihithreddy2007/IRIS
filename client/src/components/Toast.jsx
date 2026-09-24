import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useAuth();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-[#FF6B78]" />,
    info: <Info className="w-5 h-5 text-[#7DA9FF]" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141927]/95 border border-[#20283B] text-[#F7F8FC] shadow-2xl backdrop-blur-md">
        {icons[toast.type] || icons.info}
        <span className="text-sm font-medium">{toast.message}</span>
      </div>
    </div>
  );
};
