import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Tag, ArrowRight, User as UserIcon } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { TypeBadge } from './TypeBadge';

export const ReportCard = ({ report }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Unknown Date';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between group">
      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <TypeBadge type={report.type} />
          <StatusBadge status={report.status} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition line-clamp-1">
          {report.title}
        </h3>

        {/* Description preview */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {report.description}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="truncate">{report.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{formatDate(report.date)}</span>
          </div>
          {report.category && (
            <div className="flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700">
                {report.category}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer link & reported by */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-2">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <UserIcon className="w-3 h-3 text-indigo-500" />
          <span className="truncate max-w-[120px]">
            {report.reportedBy?.name || 'Anonymous User'}
          </span>
        </div>

        <Link
          to={`/reports/${report._id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition group-hover:translate-x-1"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
