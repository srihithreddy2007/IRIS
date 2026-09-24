import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { StatusBadge } from '../components/StatusBadge';
import { TypeBadge } from '../components/TypeBadge';
import { Modal } from '../components/Modal';
import { MapPin, Calendar, ArrowLeft, CheckCircle2, Trash2, Mail, AlertTriangle } from 'lucide-react';

export const ReportDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, showToast } = useAuth();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isConfirmingResolve, setIsConfirmingResolve] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchReport = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`/api/reports/${id}`);
      if (res.data.success) {
        setReport(res.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Report not found or unavailable');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [id]);

  const isOwner = user && report && report.reportedBy && (report.reportedBy._id === user.id || report.reportedBy === user.id);

  const handleResolve = async () => {
    setActionLoading(true);
    try {
      const res = await axios.patch(`/api/reports/${id}/resolve`);
      if (res.data.success) {
        showToast('Report marked as RESOLVED!', 'success');
        setReport(res.data.data);
        setIsConfirmingResolve(false);
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to resolve report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async () => {
    setActionLoading(true);
    try {
      const res = await axios.delete(`/api/reports/${id}`);
      if (res.data.success) {
        showToast('Report deleted successfully', 'info');
        navigate('/dashboard');
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to delete report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="h-96 rounded-3xl bg-slate-200 animate-pulse" />
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto text-2xl">
          ⚠️
        </div>
        <h2 className="text-xl font-bold text-slate-900">Report Unavailable</h2>
        <p className="text-xs text-slate-500">{error || 'This report may have been removed or does not exist.'}</p>
        <Link to="/browse" className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Back Button */}
      <Link
        to="/browse"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Reports
      </Link>

      {/* Main Details Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8 relative overflow-hidden">
        
        {/* Top Badges & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <TypeBadge type={report.type} />
            <StatusBadge status={report.status} />
            {report.category && (
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                {report.category}
              </span>
            )}
          </div>

          {/* Owner Actions */}
          {isOwner && report.status === 'ACTIVE' && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsConfirmingResolve(true)}
                className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                Mark Resolved
              </button>
              <button
                onClick={() => setIsConfirmingDelete(true)}
                className="px-3.5 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">{report.title}</h1>
          <p className="text-xs text-slate-500">Report ID: <span className="font-mono text-slate-900">{report._id}</span></p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              Location
            </span>
            <p className="text-sm font-medium text-slate-900">{report.location}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              Date {report.type === 'LOST' ? 'Lost' : 'Found'}
            </span>
            <p className="text-sm font-medium text-slate-900">{formatDate(report.date)}</p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Item Description</h3>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
            {report.description}
          </div>
        </div>

        {/* Optional Image URL */}
        {report.imageUrl && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Attached Image</h3>
            <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-96">
              <img src={report.imageUrl} alt={report.title} className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {/* Reporter Info & Contact Button */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-base border border-indigo-200">
              {report.reportedBy?.name ? report.reportedBy.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{report.reportedBy?.name || 'Campus Student'}</p>
              <p className="text-[11px] text-slate-500">Reported by verified campus account</p>
            </div>
          </div>

          {!isOwner && user && (
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-soft hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Reporter
            </button>
          )}
        </div>

      </div>

      {/* MODAL: Resolve Confirmation */}
      <Modal isOpen={isConfirmingResolve} onClose={() => setIsConfirmingResolve(false)} title="Mark Report as Resolved">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Have you successfully recovered or returned this item? Once marked as <strong className="text-indigo-600">RESOLVED</strong>, it will no longer accept updates.
          </p>
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setIsConfirmingResolve(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              onClick={handleResolve}
              disabled={actionLoading}
              className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              Confirm Resolve
            </button>
          </div>
        </div>
      </Modal>

      {/* MODAL: Delete Confirmation */}
      <Modal isOpen={isConfirmingDelete} onClose={() => setIsConfirmingDelete(false)} title="Confirm Delete Report">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>This action is permanent and cannot be undone.</span>
          </div>
          <p className="text-sm text-slate-600">Are you sure you want to delete this report from the portal?</p>
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setIsConfirmingDelete(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={actionLoading}
              className="px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* MODAL: Contact Reporter Info */}
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Contact Information">
        <div className="space-y-4 text-sm text-slate-600">
          <p>You can reach the student who submitted this report at:</p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-base font-bold text-indigo-600 select-all">{report.reportedBy?.email || 'Email Protected'}</p>
          </div>
          <p className="text-xs text-slate-500">
            Please arrange to meet in a safe public campus location (e.g. Student Union, Library Desk).
          </p>
        </div>
      </Modal>

    </div>
  );
};
