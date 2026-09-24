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
        
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7DA9FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#FF6B78]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#7DA9FF]/30 text-xs font-bold text-[#7DA9FF] tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-[#7DA9FF]" />
                Campus Lost & Found Platform
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FC] tracking-tight leading-[1.1]">
                Lost something? <br />
                <span className="bg-gradient-to-r from-[#7DA9FF] via-white to-[#FF6B78] bg-clip-text text-transparent">
                  Let’s bring it back.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#A5AEC2] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Your smarter way to report lost belongings, discover found items, and reconnect people with what matters across campus.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/report?type=LOST"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-gradient-to-r from-[#7DA9FF] to-[#6093FF] text-[#0B0D14] shadow-glow hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" />
                  Report Lost Item
                </Link>

                <Link
                  to="/report?type=FOUND"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold glass-card border border-[#FF6B78]/40 text-[#FF6B78] hover:bg-[#FF6B78]/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Report Found Item
                </Link>
              </div>

              {/* Quick Search Bar */}
              <form onSubmit={handleSearchSubmit} className="pt-4 max-w-xl mx-auto lg:mx-0">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-[#A5AEC2]" />
                  <input
                    type="text"
                    placeholder="Search lost backpack, keys, phone, ID card..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-28 py-4 rounded-2xl glass-input text-sm font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 px-5 py-2.5 rounded-xl bg-[#20283B] text-xs font-bold text-[#7DA9FF] hover:bg-[#7DA9FF] hover:text-[#0B0D14] transition-all"
                  >
                    Search
                  </button>
                </div>
              </form>

            </div>

            {/* Right 3D Scene */}
            <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] w-full">
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden border border-[#20283B] shadow-2xl">
                <Hero3D />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B0D14]/80 backdrop-blur-md border border-[#20283B] flex items-center justify-between text-xs text-[#A5AEC2]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Compass className="w-4 h-4 text-[#7DA9FF] animate-spin" style={{ animationDuration: '8s' }} />
                    Interactive 3D Belongings
                  </span>
                  <span className="text-[10px] bg-[#20283B] px-2 py-0.5 rounded text-white font-mono">Move mouse to tilt</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#7DA9FF]">Simple Workflow</h2>
          <h3 className="text-3xl font-extrabold text-[#F7F8FC]">How IRIS Brings Items Back</h3>
          <p className="text-sm text-[#A5AEC2]">Three seamless steps designed for campus students and faculty.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card rounded-3xl p-8 space-y-4 border border-[#20283B] hover:border-[#7DA9FF]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#7DA9FF]/10 border border-[#7DA9FF]/30 flex items-center justify-center text-[#7DA9FF] font-black text-xl">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Post a Report</h4>
            <p className="text-sm text-[#A5AEC2] leading-relaxed">
              Lost an item or found someone’s belongings? Submit a report with location, date, and description in seconds.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-4 border border-[#20283B] hover:border-[#FF6B78]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B78]/10 border border-[#FF6B78]/30 flex items-center justify-center text-[#FF6B78] font-black text-xl">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Discover & Verify</h4>
            <p className="text-sm text-[#A5AEC2] leading-relaxed">
              Browse campus-wide active reports using smart category filters, location tags, and real-time text search.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-4 border border-[#20283B] hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-xl">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Reconnect & Resolve</h4>
            <p className="text-sm text-[#A5AEC2] leading-relaxed">
              Connect with the reporter, verify ownership securely, and mark the report as RESOLVED once item is safely back.
            </p>
          </div>

        </div>
      </section>

      {/* RECENT ACTIVE REPORTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#FF6B78] mb-1">Live Feed</h2>
            <h3 className="text-3xl font-extrabold text-[#F7F8FC]">Recent Campus Reports</h3>
          </div>
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7DA9FF] hover:text-white transition"
          >
            Explore All Reports
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-2xl bg-[#141927] animate-pulse" />
            ))}
          </div>
        ) : recentReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReports.map((report) => (
              <ReportCard key={report._id} report={report} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center text-[#A5AEC2]">
            No recent reports found. Be the first to post a report!
          </div>
        )}
      </section>

      {/* BENEFITS / SECURITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#20283B] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            <div className="flex gap-4">
              <div className="p-3 rounded-2xl bg-[#7DA9FF]/10 text-[#7DA9FF] shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">HTTP-Only JWT Security</h4>
                <p className="text-xs text-[#A5AEC2]">Protected authentication tokens secured in HTTP-only cookies prevent XSS vulnerabilities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-2xl bg-[#FF6B78]/10 text-[#FF6B78] shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Admin Moderation</h4>
                <p className="text-xs text-[#A5AEC2]">Strict role verification allows administrators to moderate inappropriate reports and maintain safety.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Privacy Controls</h4>
                <p className="text-xs text-[#A5AEC2]">User email identity is protected and report ownership controls prevent unauthorized edits.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to find what you lost?
        </h3>
        <p className="text-sm text-[#A5AEC2] max-w-lg mx-auto">
          Join campus students using IRIS to report lost keys, IDs, electronics, and books every day.
        </p>
        <div className="pt-2">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-gradient-to-r from-[#7DA9FF] to-[#6093FF] text-[#0B0D14] shadow-glow hover:scale-[1.02] transition"
          >
            Create Your Account Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};
