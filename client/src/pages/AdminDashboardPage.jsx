import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { StatusBadge } from '../components/StatusBadge';
import { TypeBadge } from '../components/TypeBadge';
import { Modal } from '../components/Modal';
import { Shield, FileText, AlertOctagon, CheckCircle2, Search, Loader2, Sparkles } from 'lucide-react';

export const AdminDashboardPage = () => {
  const { user, showToast } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Status Change Modal
  const [selectedReport, setSelectedReport] = useState(null);
  const [newStatus, setNewStatus] = useState('ACTIVE');
  const [adminNotes, setAdminNotes] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  // Rejection Modal
  const [rejectingReport, setRejectingReport] = useState(null);
  const [rejectNotes, setRejectNotes] = useState('');

  // Guard: Redirect non-admin users
  useEffect(() => {
    if (user && user.role !== 'ADMIN') {
      showToast('Access denied. Administrator privileges required.', 'error');
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Stats
      const statsRes = await axios.get('/api/admin/stats');
      if (statsRes.data.success) {
        setStats(statsRes.data.data);
      }

      // 2. Fetch Moderation Reports
      const params = new URLSearchParams();
      params.append('page', page);
      params.append('limit', 10);
      if (search.trim()) params.append('search', search.trim());
      if (statusFilter) params.append('status', statusFilter);
      if (typeFilter) params.append('type', typeFilter);

      const reportsRes = await axios.get(`/api/admin/reports?${params.toString()}`);
      if (reportsRes.data.success) {
        setReports(reportsRes.data.data);
        setTotalPages(reportsRes.data.totalPages || 1);
      }
    } catch (err) {
      console.error('Failed to load admin dashboard data', err);
      showToast(err.response?.data?.error || 'Failed to load admin data', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.role === 'ADMIN') {
      fetchAdminData();
    }
  }, [user, page, statusFilter, typeFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchAdminData();
  };

  const handleOpenStatusModal = (report) => {
    setSelectedReport(report);
    setNewStatus(report.status);
    setAdminNotes(report.adminNotes || '');
  };

  const handleSaveStatus = async (e) => {
    e.preventDefault();
    if (!selectedReport) return;
    setActionLoading(true);
    try {
      const res = await axios.put(`/api/admin/reports/${selectedReport._id}/status`, {
        status: newStatus,
        adminNotes: adminNotes.trim(),
      });
      if (res.data.success) {
        showToast(`Report status updated to ${newStatus}`, 'success');
        setSelectedReport(null);
        fetchAdminData();
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to update report status', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const handleConfirmReject = async (e) => {
    e.preventDefault();
    if (!rejectingReport) return;
    setActionLoading(true);
    try {
      const res = await axios.delete(`/api/admin/reports/${rejectingReport._id}`, {
        data: { adminNotes: rejectNotes.trim() || 'Rejected by admin moderation' },
      });
      if (res.data.success) {
        showToast('Report rejected by admin moderation', 'info');
        setRejectingReport(null);
        fetchAdminData();
      }
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to reject report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold mb-2 border border-rose-200">
            <Shield className="w-3.5 h-3.5" />
            Admin Moderation Panel
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Campus Overview & Moderation</h1>
          <p className="text-xs text-slate-500 mt-1">Review all campus reports, manage statuses, and maintain community safety.</p>
        </div>
      </div>

      {/* Real Statistics Cards Grid */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="glass-card rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
              <span>Total Reports</span>
              <FileText className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-3xl font-extrabold text-slate-900 mt-2">{stats.totalReports}</p>
            <p className="text-[11px] text-slate-500 mt-1">{stats.lostItems} Lost / {stats.foundItems} Found</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
              <span>Active Reports</span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-3xl font-extrabold text-emerald-600 mt-2">{stats.activeReports}</p>
            <p className="text-[11px] text-slate-500 mt-1">Currently visible to public</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
              <span>Resolved Items</span>
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-3xl font-extrabold text-indigo-600 mt-2">{stats.resolvedReports}</p>
            <p className="text-[11px] text-slate-500 mt-1">Returned to owners</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase">
              <span>Rejected / Removed</span>
              <AlertOctagon className="w-4 h-4 text-rose-600" />
            </div>
            <p className="text-3xl font-extrabold text-rose-600 mt-2">{stats.rejectedReports}</p>
            <p className="text-[11px] text-slate-500 mt-1">Inappropriate or duplicates</p>
          </div>

        </div>
      )}

      {/* Moderation Search & Filters */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-4 border border-slate-200 shadow-sm">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          <div className="md:col-span-6 relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search reports by title, description, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              className="w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer"
            >
              <option value="" className="bg-white text-slate-900">Filter Status: All</option>
              <option value="ACTIVE" className="bg-white text-slate-900">ACTIVE</option>
              <option value="RESOLVED" className="bg-white text-slate-900">RESOLVED</option>
              <option value="REJECTED" className="bg-white text-slate-900">REJECTED</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={typeFilter}
              onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}
              className="w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer"
            >
              <option value="" className="bg-white text-slate-900">Filter Type: All</option>
              <option value="LOST" className="bg-white text-slate-900">LOST</option>
              <option value="FOUND" className="bg-white text-slate-900">FOUND</option>
            </select>
          </div>

        </form>
      </div>

      {/* Moderation Table */}
      <div className="glass-card rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">All Campus Reports (Admin View)</h2>
          <span className="text-xs text-slate-500">Including REJECTED reports</span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-indigo-600" />
            Loading moderation table...
          </div>
        ) : reports.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Report Item</th>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Reported By</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6 text-right">Admin Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {reports.map((report) => (
                  <tr key={report._id} className="hover:bg-slate-50 transition">
                    
                    <td className="py-4 px-6">
                      <p className="font-bold text-slate-900 max-w-xs truncate">{report.title}</p>
                      <p className="text-xs text-slate-500 truncate max-w-xs">{report.location}</p>
                    </td>

                    <td className="py-4 px-6">
                      <TypeBadge type={report.type} />
                    </td>

                    <td className="py-4 px-6">
                      <StatusBadge status={report.status} />
                    </td>

                    <td className="py-4 px-6 text-xs">
                      <p className="font-semibold text-slate-900">{report.reportedBy?.name || 'Unknown'}</p>
                      <p className="text-[11px] text-slate-500">{report.reportedBy?.email}</p>
                    </td>

                    <td className="py-4 px-6 text-xs">
                      {formatDate(report.date)}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenStatusModal(report)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 text-xs font-bold"
                        >
                          Change Status
                        </button>

                        {report.status !== 'REJECTED' && (
                          <button
                            onClick={() => { setRejectingReport(report); setRejectNotes(''); }}
                            className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 text-xs font-bold"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-500">
            No reports matching filter criteria.
          </div>
        )}
      </div>

      {/* STATUS UPDATE MODAL */}
      <Modal isOpen={!!selectedReport} onClose={() => setSelectedReport(null)} title="Admin Status Management">
        {selectedReport && (
          <form onSubmit={handleSaveStatus} className="space-y-4">
            <div>
              <p className="text-xs text-slate-500">Report Title: <strong className="text-slate-900">{selectedReport.title}</strong></p>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">Select New Status</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1 cursor-pointer"
              >
                <option value="ACTIVE" className="bg-white text-slate-900">ACTIVE</option>
                <option value="RESOLVED" className="bg-white text-slate-900">RESOLVED</option>
                <option value="REJECTED" className="bg-white text-slate-900">REJECTED</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">Admin Moderation Notes (Optional)</label>
              <textarea
                rows={3}
                placeholder="Reason for status change or moderation notes..."
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={actionLoading}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1"
              >
                {actionLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                Update Status
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* REJECT MODAL */}
      <Modal isOpen={!!rejectingReport} onClose={() => setRejectingReport(null)} title="Reject Inappropriate Report">
        {rejectingReport && (
          <form onSubmit={handleConfirmReject} className="space-y-4">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs">
              Rejecting this report will set its status to <strong className="underline">REJECTED</strong> and hide it from regular student browse lists.
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">Reason for Rejection *</label>
              <textarea
                required
                rows={3}
                placeholder="e.g. Duplicate report, inappropriate content, spam..."
                value={rejectNotes}
                onChange={(e) => setRejectNotes(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setRejectingReport(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={actionLoading}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold flex items-center gap-1"
              >
                {actionLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                Confirm Rejection
              </button>
            </div>
          </form>
        )}
      </Modal>

    </div>
  );
};
