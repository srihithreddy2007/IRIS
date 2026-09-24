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
        <h3 className="text-lg font-bold text-[#F7F8FC] mb-2 group-hover:text-[#7DA9FF] transition line-clamp-1">
          {report.title}
        </h3>

        {/* Description preview */}
        <p className="text-sm text-[#A5AEC2] mb-4 line-clamp-2 leading-relaxed">
          {report.description}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 text-xs text-[#A5AEC2] mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#7DA9FF] shrink-0" />
            <span className="truncate">{report.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#FF6B78] shrink-0" />
            <span>{formatDate(report.date)}</span>
          </div>
          {report.category && (
            <div className="flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-[#A5AEC2] shrink-0" />
              <span className="px-2 py-0.5 rounded-md bg-[#20283B] text-[11px] font-medium text-white">
                {report.category}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer link & reported by */}
      <div className="pt-3 border-t border-[#20283B]/80 flex items-center justify-between mt-2">
        <div className="flex items-center gap-1.5 text-[11px] text-[#A5AEC2]">
          <UserIcon className="w-3 h-3 text-[#7DA9FF]" />
          <span className="truncate max-w-[120px]">
            {report.reportedBy?.name || 'Anonymous User'}
          </span>
        </div>

        <Link
          to={`/reports/${report._id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#7DA9FF] hover:text-white transition group-hover:translate-x-1"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
