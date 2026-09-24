import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-[#20283B] bg-[#0B0D14] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#7DA9FF]" />
              <span className="text-xl font-bold text-white">IRIS</span>
            </div>
            <p className="text-sm text-[#A5AEC2] max-w-sm">
              Your smarter, secure way to report lost belongings, discover found items, and reconnect people with what matters across campus.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#A5AEC2]">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/browse" className="hover:text-white transition">Browse Reports</Link></li>
              <li><Link to="/report" className="hover:text-white transition">Report an Item</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition">My Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3">Security & Trust</h4>
            <ul className="space-y-2 text-sm text-[#A5AEC2]">
              <li>HTTP-only JWT Auth</li>
              <li>Role-Based Moderation</li>
              <li>Privacy Protected Contact</li>
              <li>Team Iris © {new Date().getFullYear()}</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#20283B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5AEC2] gap-4">
          <p>© {new Date().getFullYear()} IRIS Lost & Found Portal. Designed with care for students & staff.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#FF6B78] fill-current" /> for Campus Safety
          </p>
        </div>
      </div>
    </footer>
  );
};
