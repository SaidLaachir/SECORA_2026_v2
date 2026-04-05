import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Rss,
  FileText,
  UsersRound,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ================= DESKTOP FOOTER ================= */}
      <footer className="hidden md:block bg-[#5e17eb] text-white py-6 mt-12 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md pointer-events-none"></div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/80 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
            &copy; {currentYear} SECORA Club — ENIAD. All rights reserved.
          </div>

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
              News
            </Link>

            <Link
              to="/learn-cybersecurity"
              className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
            >
              Learn CyberSecurity
            </Link>

            <Link
              to="/fund-us"
              className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
            >
              Fund Us
            </Link>

            <Link
              to="/sponsors"
              className="hover:text-white hover:font-extrabold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
            >
              Sponsors
            </Link>
          </div>
        </div>
      </footer>

      {/* ================= MOBILE FOOTER ================= */}
      <footer className="md:hidden bg-[#5e17eb] text-white py-4 mt-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md pointer-events-none"></div>
        <div className="relative text-sm text-white/80">
          &copy; {currentYear} SECORA Club — ENIAD.
        </div>
      </footer>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#5e17eb]/95 backdrop-blur-xl border-t border-white/20 z-50 shadow-[0_-8px_25px_rgba(0,0,0,0.25)]">
        <div className="flex justify-around items-center py-3 text-white text-[11px] font-medium">
          
          {/* News */}
          <Link
            to="/writeups"
            className="flex flex-col items-center gap-1 transition-all active:scale-90 active:drop-shadow-[0_0_10px_white]"
          >
            <Rss size={22} />
            News
          </Link>

          {/* Activities */}
          <Link
            to="/activities"
            className="flex flex-col items-center gap-1 transition-all active:scale-90 active:drop-shadow-[0_0_10px_white]"
          >
            <CalendarDays size={22} />
            Activities
          </Link>

          {/* Home (Center) */}
          <Link
            to="/"
            className="flex flex-col items-center gap-1 transition-all active:scale-90 active:drop-shadow-[0_0_14px_white]"
          >
            <Home size={26} />
            Home
          </Link>

          {/* Learn */}
          <Link
            to="/learn-cybersecurity"
            className="flex flex-col items-center gap-1 transition-all active:scale-90 active:drop-shadow-[0_0_10px_white]"
          >
            <GraduationCap size={22} />
            Learn
          </Link>

          {/* Members */}
          <Link
            to="/members"
            className="flex flex-col items-center gap-1 transition-all active:scale-90 active:drop-shadow-[0_0_10px_white]"
          >
            <UsersRound size={22} />
            Members
          </Link>

        </div>
      </nav>

      {/* Spacer so content isn't hidden */}
      <div className="md:hidden h-20"></div>
    </>
  );
}