import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, PlusCircle, LayoutDashboard, Shield, LogOut, User as UserIcon, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-[#20283B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7DA9FF] to-[#FF6B78] p-0.5 shadow-glow group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B0D14] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#7DA9FF] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#F7F8FC]">IRIS</span>
              <span className="text-xs block text-[#A5AEC2] font-medium -mt-1">Lost & Found Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/browse"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                isActive('/browse')
                  ? 'bg-[#20283B] text-[#7DA9FF]'
                  : 'text-[#A5AEC2] hover:text-white hover:bg-[#141927]'
              }`}
            >
              Browse Reports
            </Link>
            
            {user && (
              <>
                <Link
                  to="/report"
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive('/report')
                      ? 'bg-[#20283B] text-[#7DA9FF]'
                      : 'text-[#A5AEC2] hover:text-white hover:bg-[#141927]'
                  }`}
                >
                  <PlusCircle className="w-4 h-4 text-[#7DA9FF]" />
                  Report Item
                </Link>

                <Link
                  to="/dashboard"
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive('/dashboard')
                      ? 'bg-[#20283B] text-[#7DA9FF]'
                      : 'text-[#A5AEC2] hover:text-white hover:bg-[#141927]'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-[#A5AEC2]" />
                  Dashboard
                </Link>

                {user.role === 'ADMIN' && (
                  <Link
                    to="/admin"
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border border-[#FF6B78]/40 bg-[#FF6B78]/10 text-[#FF6B78] hover:bg-[#FF6B78]/20`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    ADMIN
                  </Link>
                )}
              </>
            )}
          </nav>

          {/* Right User Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3 pl-3 border-l border-[#20283B]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#20283B] flex items-center justify-center text-[#7DA9FF] font-bold text-sm border border-[#7DA9FF]/30">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-xs font-bold text-[#F7F8FC]">{user.name}</p>
                    <p className="text-[10px] text-[#A5AEC2]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="p-2 rounded-xl text-[#A5AEC2] hover:text-[#FF6B78] hover:bg-[#20283B] transition"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-[#F7F8FC] hover:bg-[#20283B] transition"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#7DA9FF] to-[#6093FF] text-[#0B0D14] hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#A5AEC2] hover:text-white hover:bg-[#20283B]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#20283B] bg-[#0B0D14]/95 px-4 pt-2 pb-6 space-y-3 backdrop-blur-xl">
          <Link
            to="/browse"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-[#F7F8FC] hover:bg-[#20283B]"
          >
            Browse Reports
          </Link>
          {user ? (
            <>
              <Link
                to="/report"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#7DA9FF] hover:bg-[#20283B]"
              >
                + Report Item
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#F7F8FC] hover:bg-[#20283B]"
              >
                Dashboard
              </Link>
              {user.role === 'ADMIN' && (
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#FF6B78] hover:bg-[#20283B]"
                >
                  Admin Panel
                </Link>
              )}
              <div className="pt-4 border-t border-[#20283B] flex items-center justify-between">
                <div className="text-xs text-[#A5AEC2]">Logged in as <span className="font-bold text-white">{user.name}</span></div>
                <button
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#FF6B78] bg-[#FF6B78]/10 border border-[#FF6B78]/30"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl font-semibold text-white bg-[#20283B]"
              >
                Log In
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl font-bold bg-[#7DA9FF] text-[#0B0D14]"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
