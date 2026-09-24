import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ReportCard } from '../components/ReportCard';
import { Search, Filter, RotateCcw, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'Electronics', 'Documents', 'Accessories', 'Clothing', 'Books', 'Keys', 'Bags', 'Other'];

export const BrowsePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [type, setType] = useState(searchParams.get('type') || 'ALL');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [status, setStatus] = useState(searchParams.get('status') || 'ALL');
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10));

  const [reports, setReports] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.append('page', page);
      params.append('limit', 9);

      if (search.trim()) params.append('search', search.trim());
      if (type !== 'ALL') params.append('type', type);
      if (category !== 'All') params.append('category', category);
      if (status !== 'ALL') params.append('status', status);

      const res = await axios.get(`/api/reports?${params.toString()}`);
      if (res.data.success) {
        setReports(res.data.data);
        setTotalPages(res.data.totalPages || 1);
        setTotalCount(res.data.total || 0);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load reports');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [type, category, status, page]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchReports();
  };

  const handleResetFilters = () => {
    setSearch('');
    setType('ALL');
    setCategory('All');
    setStatus('ALL');
    setPage(1);
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#20283B] pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-[#F7F8FC]">Browse Campus Reports</h1>
          <p className="text-sm text-[#A5AEC2] mt-1">Search lost and found items posted by students and staff.</p>
        </div>

        {/* Type Toggle Tabs */}
        <div className="inline-flex p-1 rounded-2xl bg-[#141927] border border-[#20283B]">
          {['ALL', 'LOST', 'FOUND'].map((t) => (
            <button
              key={t}
              onClick={() => { setType(t); setPage(1); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                type === t
                  ? 'bg-[#7DA9FF] text-[#0B0D14] shadow-md'
                  : 'text-[#A5AEC2] hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-4 border border-[#20283B]">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Search Input */}
          <div className="md:col-span-5 relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-[#A5AEC2]" />
            <input
              type="text"
              placeholder="Search title, description, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm"
            />
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3">
            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              className="w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#141927] text-white">
                  Category: {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="md:col-span-2">
            <select
              value={status}
              onChange={(e) => { setStatus(e.target.value); setPage(1); }}
              className="w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer"
            >
              <option value="ALL" className="bg-[#141927] text-white">Status: All</option>
              <option value="ACTIVE" className="bg-[#141927] text-white">ACTIVE</option>
              <option value="RESOLVED" className="bg-[#141927] text-white">RESOLVED</option>
            </select>
          </div>

          {/* Submit / Reset */}
          <div className="md:col-span-2 flex items-center gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-[#7DA9FF] text-[#0B0D14] font-bold text-xs hover:bg-[#6093FF] transition"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={handleResetFilters}
              className="p-2.5 rounded-xl bg-[#20283B] text-[#A5AEC2] hover:text-white transition"
              title="Reset Filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>

      {/* Reports Results Summary */}
      <div className="flex items-center justify-between text-xs text-[#A5AEC2]">
        <span>Showing <strong className="text-white">{reports.length}</strong> of <strong className="text-white">{totalCount}</strong> reports</span>
        {type !== 'ALL' && <span className="font-semibold text-[#7DA9FF]">Filtered by {type}</span>}
      </div>

      {/* Grid of Report Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 rounded-2xl bg-[#141927] animate-pulse border border-[#20283B]" />
          ))}
        </div>
      ) : error ? (
        <div className="glass-card rounded-2xl p-12 text-center text-[#FF6B78] space-y-3">
          <p className="font-bold">{error}</p>
          <button
            onClick={fetchReports}
            className="px-4 py-2 rounded-xl bg-[#20283B] text-white text-xs font-bold"
          >
            Retry Loading
          </button>
        </div>
      ) : reports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report) => (
            <ReportCard key={report._id} report={report} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-3xl p-16 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#20283B] text-[#A5AEC2] flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-white">No matching reports found</h3>
          <p className="text-xs text-[#A5AEC2]">Try adjusting your search keywords, category filters, or status selection.</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl bg-[#7DA9FF] text-[#0B0D14] text-xs font-bold"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-6">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="p-2.5 rounded-xl glass-card border border-[#20283B] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#20283B] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-semibold text-[#A5AEC2]">
            Page <strong className="text-white">{page}</strong> of <strong className="text-white">{totalPages}</strong>
          </span>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="p-2.5 rounded-xl glass-card border border-[#20283B] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#20283B] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
};
