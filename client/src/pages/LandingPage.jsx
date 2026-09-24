import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Hero3D } from '../components/Hero3D';
import { ReportCard } from '../components/ReportCard';
import { Search, PlusCircle, CheckCircle2, Shield, Sparkles, ArrowRight, Lock, Eye, Compass } from 'lucide-react';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentReports, setRecentReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await axios.get('/api/reports?limit=6&sortBy=createdAt&order=desc');
        if (res.data.success) {
          setRecentReports(res.data.data);
        }
      } catch (err) {
        console.error('Failed to fetch recent reports', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecent();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/browse');
    }
  };

  return (
    <div className="min-h-screen space-y-24 pb-20">
      
      {/* HERO SECTION WITH 3D CANVAS */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        
        {/* Pastel Soft Glow background ambient blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-rose-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-600 tracking-wide uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                Campus Lost & Found Platform
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Lost something? <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 bg-clip-text text-transparent">
                  Let’s bring it back.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Your smarter way to report lost belongings, discover found items, and reconnect people with what matters across campus.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/report?type=LOST"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <PlusCircle className="w-5 h-5" />
                  Report Lost Item
                </Link>

                <Link
                  to="/report?type=FOUND"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Report Found Item
                </Link>
              </div>

              {/* Quick Search Bar */}
              <form onSubmit={handleSearchSubmit} className="pt-4 max-w-xl mx-auto lg:mx-0">
                <div className="relative flex items-center shadow-card rounded-2xl">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search lost backpack, keys, phone, ID card..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-28 py-4 rounded-2xl glass-input text-sm font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    Search
                  </button>
                </div>
              </form>

            </div>

            {/* Right 3D Scene Panel */}
            <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] w-full">
              <div className="absolute inset-0 bg-white/80 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Hero3D />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-sm">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Compass className="w-4 h-4 text-indigo-600 animate-spin" style={{ animationDuration: '8s' }} />
                    Interactive 3D Belongings
                  </span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-semibold">Move mouse to tilt</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Simple Workflow</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">How IRIS Brings Items Back</h3>
          <p className="text-sm text-slate-600">Three seamless steps designed for campus students and faculty.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card rounded-3xl p-8 space-y-4 border border-slate-200 hover:border-indigo-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-black text-xl">
              1
            </div>
            <h4 className="text-lg font-bold text-slate-900">Post a Report</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lost an item or found someone’s belongings? Submit a report with location, date, and description in seconds.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-4 border border-slate-200 hover:border-rose-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700 font-black text-xl">
              2
            </div>
            <h4 className="text-lg font-bold text-slate-900">Discover & Verify</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Browse campus-wide active reports using smart category filters, location tags, and real-time text search.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-4 border border-slate-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-black text-xl">
              3
            </div>
            <h4 className="text-lg font-bold text-slate-900">Reconnect & Resolve</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connect with the reporter, verify ownership securely, and mark the report as RESOLVED once item is safely back.
            </p>
          </div>

        </div>
      </section>

      {/* RECENT ACTIVE REPORTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-1">Live Feed</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">Recent Campus Reports</h3>
          </div>
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition"
          >
            Explore All Reports
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-2xl bg-slate-200 animate-pulse" />
            ))}
          </div>
        ) : recentReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReports.map((report) => (
              <ReportCard key={report._id} report={report} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center text-slate-500">
            No recent reports found. Be the first to post a report!
          </div>
        )}
      </section>

      {/* BENEFITS / SECURITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            <div className="flex gap-4">
              <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">HTTP-Only JWT Security</h4>
                <p className="text-xs text-slate-600">Protected authentication tokens secured in HTTP-only cookies prevent XSS vulnerabilities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-2xl bg-rose-50 text-rose-600 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Admin Moderation</h4>
                <p className="text-xs text-slate-600">Strict role verification allows administrators to moderate inappropriate reports and maintain safety.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Privacy Controls</h4>
                <p className="text-xs text-slate-600">User email identity is protected and report ownership controls prevent unauthorized edits.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Ready to find what you lost?
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Join campus students using IRIS to report lost keys, IDs, electronics, and books every day.
        </p>
        <div className="pt-2">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.02] transition text-sm"
          >
            Create Your Account Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};
