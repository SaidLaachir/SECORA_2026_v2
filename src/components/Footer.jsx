import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5e17eb] text-white py-6 mt-12 shadow-inner relative overflow-hidden">
      {/* Subtle fog overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md pointer-events-none"></div>

      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: copyright */}
        <div className="text-sm text-white/80 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
          &copy; {currentYear} SECORA Club — ENIAD. All rights reserved.
        </div>

        {/* Right: navigation links */}
        <div className="flex gap-4 text-sm font-semibold flex-wrap justify-center md:justify-end">
          <Link
            to="/"
            className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
          >
            Home
          </Link>

          <Link
            to="/members"
            className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
          >
            Members
          </Link>

          <Link
            to="/activities"
            className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
          >
            Activities
          </Link>

          <Link
            to="/annual-plan"
            className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
          >
            Documents
          </Link>

          <Link
            to="/writeups"
            className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
          >
            Write-ups
          </Link>

          <Link
            to="/lean-cybersecurity"
            className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
          >
            Learn CyberSecurity
          </Link>
        </div>
      </div>
    </footer>
  );
}
