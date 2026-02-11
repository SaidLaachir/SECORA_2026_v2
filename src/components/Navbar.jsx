import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import clubIcon from "/public/clubiconwhite.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/annual-plan", label: "Documents", key: "annualPlan" },
  { to: "/activities", label: "Activities", key: "activities" },
  { to: "/writeups", label: "Write-ups", key: "writeups" },
  { to: "/learn-cybersecurity", label: "Learn Cybersecurity", key: "learnCyber" },
];

export default function Navbar({ theme, toggleTheme }) {
  const loc = useLocation();
  const [notifications, setNotifications] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("notifications") || "{}");
    setNotifications(stored);
  }, []);

  const hasNotification = (key) => {
    if (!key || !notifications[key]) return false;
    return new Date() - new Date(notifications[key]) < 48 * 60 * 60 * 1000;
  };

  const handleClick = (key) => {
    if (!key) return;
    const updated = { ...notifications };
    delete updated[key];
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#5e17eb] text-white shadow-xl z-50 h-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[length:3px_3px] opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4 z-20">
          <div className="bg-white/20 backdrop-blur-xl rounded-xl p-1 shadow-2xl border border-white/30">
            <img src={clubIcon} className="w-16 h-16 object-cover" />
          </div>

          <div>
            <div className="font-extrabold text-2xl">SECORA CLUB</div>
            <div className="text-sm text-white/80 italic">ENIAD — Cybersecurity Society</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-semibold overflow-x-auto whitespace-nowrap scrollbar-hide">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => handleClick(l.key)}
              className={`relative transition hover:scale-110 px-2 ${
                loc.pathname === l.to ? "font-extrabold scale-110" : "text-white/90"
              }`}
            >
              {l.label}
              {hasNotification(l.key) && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4 z-20">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 border border-white/30"
          >
            {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </button>

          <div className="md:hidden">
            <MobileMenu
              links={links}
              notifications={notifications}
              handleClick={handleClick}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ================= MOBILE MENU ================= */
function MobileMenu({ links, notifications, handleClick, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const hasNotification = (key) => {
    if (!key || !notifications[key]) return false;
    return new Date() - new Date(notifications[key]) < 48 * 60 * 60 * 1000;
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <FaBars size={26} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#5e17eb] p-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="text-xl font-bold">Menu</span>
          <FaTimes size={26} onClick={() => setOpen(false)} />
        </div>

        <div className="flex flex-col gap-8 text-xl">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => handleClick(l.key)}
              className={`flex justify-between ${
                loc.pathname === l.to ? "font-extrabold" : ""
              }`}
            >
              {l.label}
              {hasNotification(l.key) && (
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile theme toggle */}
        <div className="mt-12">
          <button
            onClick={toggleTheme}
            className="w-full py-3 rounded-lg bg-white/20 border border-white/30"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
}
