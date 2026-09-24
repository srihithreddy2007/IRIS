import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { StatusBadge } from '../components/StatusBadge';
import { TypeBadge } from '../components/TypeBadge';
import { Modal } from '../components/Modal';
import { PlusCircle, Edit3, CheckCircle2, Trash2, Calendar, MapPin, Eye, Loader2, Sparkles } from 'lucide-react';

export const UserDashboardPage = () => {
  const { user, showToast } = useAuth();

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit Modal State
  const [editingReport, setEditingReport] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editLocation, setEditLocation] = useState('');

  // Confirmation Modals
  const [confirmResolveId, setConfirmResolveId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchMyReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/reports/my-reports');
      if (res.data.success) {
        setReports(res.data.data);
      }
    } catch (err) {
      console.error('Failed to load my reports', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyReports();
  }, []);

  const activeCount = reports.filter((r) => r.status === 'ACTIVE').length;
  const resolvedCount = reports.filter((r) => r.status === 'RESOLVED').length;
  const rejectedCount = reports.filter((r) => r.status === 'REJECTED').length;

  const handleOpenEdit = (report) => {
    setEditingReport(report);
    setEditTitle(report.title);
    setEditDescription(report.description);
    setEditLocation(report.location);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingReport) return;
    setActionLoading(true);
    try {
      const res = await axios.put(`/api/reports/${editingReport._id}`, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        location: editLocation.trim(),
      });
      if (res.data.success) {
        showToast('Report updated successfully!', 'success');
        setEditingReport(null);
        fetchMyReports();
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to update report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const handleResolve = async (id) => {
    setActionLoading(true);
    try {
      const res = await axios.patch(`/api/reports/${id}/resolve`);
      if (res.data.success) {
        showToast('Report marked as RESOLVED!', 'success');
        setConfirmResolveId(null);
        fetchMyReports();
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to resolve report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setActionLoading(true);
    try {
      const res = await axios.delete(`/api/reports/${id}`);
      if (res.data.success) {
        showToast('Report deleted successfully', 'info');
        setConfirmDeleteId(null);
        fetchMyReports();
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to delete report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#20283B] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7DA9FF]/10 text-[#7DA9FF] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            User Dashboard
          </div>
          <h1 className="text-3xl font-extrabold text-[#F7F8FC]">Welcome back, {user?.name}</h1>
          <p className="text-xs text-[#A5AEC2] mt-1">Manage your active, resolved, and submitted lost & found reports.</p>
        </div>

        <Link
          to="/report"
          className="px-5 py-3 rounded-2xl font-bold bg-gradient-to-r from-[#7DA9FF] to-[#6093FF] text-[#0B0D14] shadow-glow hover:scale-[1.02] transition flex items-center justify-center gap-2 text-xs"
        >
          <PlusCircle className="w-4 h-4" />
          Create New Report
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="glass-card rounded-2xl p-6 border border-[#20283B] flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#A5AEC2] uppercase">Active Reports</p>
            <p className="text-3xl font-extrabold text-emerald-400 mt-1">{activeCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
            ⚡
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-[#20283B] flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#A5AEC2] uppercase">Resolved Items</p>
            <p className="text-3xl font-extrabold text-[#7DA9FF] mt-1">{resolvedCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#7DA9FF]/10 text-[#7DA9FF] flex items-center justify-center font-bold">
            ✓
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-[#20283B] flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#A5AEC2] uppercase">Rejected / Removed</p>
            <p className="text-3xl font-extrabold text-[#FF6B78] mt-1">{rejectedCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#FF6B78]/10 text-[#FF6B78] flex items-center justify-center font-bold">
            ✕
          </div>
        </div>

      </div>

      {/* My Reports Table / Cards List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">My Submitted Reports ({reports.length})</h2>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-24 rounded-2xl bg-[#141927] animate-pulse" />
            ))}
          </div>
        ) : reports.length > 0 ? (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report._id}
                className="glass-card rounded-2xl p-5 border border-[#20283B] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#7DA9FF]/30 transition"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <TypeBadge type={report.type} />
                    <StatusBadge status={report.status} />
                    {report.category && (
                      <span className="text-xs text-[#A5AEC2] bg-[#20283B] px-2 py-0.5 rounded">
                        {report.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white">{report.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#A5AEC2]">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#7DA9FF]" /> {report.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#FF6B78]" /> {formatDate(report.date)}</span>
                  </div>
                </div>

                {/* Inline Action Controls */}
                <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-[#20283B]">
                  <Link
                    to={`/reports/${report._id}`}
                    className="p-2.5 rounded-xl bg-[#20283B] text-white hover:text-[#7DA9FF] text-xs font-bold flex items-center gap-1"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Link>

                  {report.status === 'ACTIVE' && (
                    <>
                      <button
                        onClick={() => handleOpenEdit(report)}
                        className="p-2.5 rounded-xl bg-[#7DA9FF]/10 text-[#7DA9FF] border border-[#7DA9FF]/30 hover:bg-[#7DA9FF]/20 text-xs font-bold flex items-center gap-1"
                      >
                        <Edit3 className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => setConfirmResolveId(report._id)}
                        className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs font-bold flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Resolve
                      </button>

                      <button
                        onClick={() => setConfirmDeleteId(report._id)}
                        className="p-2.5 rounded-xl bg-[#FF6B78]/10 text-[#FF6B78] border border-[#FF6B78]/30 hover:bg-[#FF6B78]/20 text-xs font-bold flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-12 text-center text-[#A5AEC2] space-y-3">
            <p className="font-bold text-white">No reports submitted yet</p>
            <p className="text-xs">Have you lost or found something on campus?</p>
            <Link to="/report" className="inline-block px-5 py-2.5 rounded-xl bg-[#7DA9FF] text-[#0B0D14] text-xs font-bold">
              Submit Your First Report
            </Link>
          </div>
        )}
      </div>

      {/* EDIT REPORT MODAL */}
      <Modal isOpen={!!editingReport} onClose={() => setEditingReport(null)} title="Edit Active Report">
        <form onSubmit={handleSaveEdit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#A5AEC2]">Item Title</label>
            <input
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#A5AEC2]">Location</label>
            <input
              type="text"
              required
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#A5AEC2]">Description</label>
            <textarea
              required
              rows={3}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setEditingReport(null)}
              className="px-4 py-2 rounded-xl bg-[#20283B] text-white text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={actionLoading}
              className="px-5 py-2 rounded-xl bg-[#7DA9FF] text-[#0B0D14] text-xs font-bold flex items-center gap-1"
            >
              {actionLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* RESOLVE CONFIRMATION MODAL */}
      <Modal isOpen={!!confirmResolveId} onClose={() => setConfirmResolveId(null)} title="Resolve Report">
        <div className="space-y-4 text-sm text-[#A5AEC2]">
          <p>Mark this report as <strong className="text-emerald-400">RESOLVED</strong>? This confirms the item has been recovered or returned.</p>
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={() => setConfirmResolveId(null)} className="px-4 py-2 rounded-xl bg-[#20283B] text-white text-xs font-bold">Cancel</button>
            <button onClick={() => handleResolve(confirmResolveId)} disabled={actionLoading} className="px-5 py-2 rounded-xl bg-emerald-500 text-black text-xs font-bold">Confirm Resolve</button>
          </div>
        </div>
      </Modal>

      {/* DELETE CONFIRMATION MODAL */}
      <Modal isOpen={!!confirmDeleteId} onClose={() => setConfirmDeleteId(null)} title="Delete Report">
        <div className="space-y-4 text-sm text-[#A5AEC2]">
          <p>Are you sure you want to delete this report? This action cannot be undone.</p>
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={() => setConfirmDeleteId(null)} className="px-4 py-2 rounded-xl bg-[#20283B] text-white text-xs font-bold">Cancel</button>
            <button onClick={() => handleDelete(confirmDeleteId)} disabled={actionLoading} className="px-5 py-2 rounded-xl bg-[#FF6B78] text-white text-xs font-bold">Confirm Delete</button>
          </div>
        </div>
      </Modal>

    </div>
  );
};
