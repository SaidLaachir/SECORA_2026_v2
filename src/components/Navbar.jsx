import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import clubIcon from "../assets/clubicon.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/annual-plan", label: "Annual Plan", key: "annualPlan" },
  { to: "/activities", label: "Activities", key: "activities" },
  { to: "/writeups", label: "Write-ups", key: "writeups" },
];

export default function Navbar() {
  const loc = useLocation();
  const [notifications, setNotifications] = useState({});

  // Load notifications from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("notifications") || "{}");
    setNotifications(stored);
  }, []);

  // Helper: check if notification is active (<48h)
  const hasNotification = (key) => {
    if (!key || !notifications[key]) return false;
    return new Date() - new Date(notifications[key]) < 48 * 60 * 60 * 1000;
  };

  // Remove notification when clicked
  const handleClick = (key) => {
    if (!key) return;
    const updated = { ...notifications };
    delete updated[key];
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 text-white shadow-xl z-50 h-24">
      {/* Scratches / Crack Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[length:3px_3px] opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-4 z-20">
          <img
            src={clubIcon}
            alt="Club Logo"
            className="w-16 h-16 object-cover shadow-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
          />
          <div>
            <div className="font-extrabold text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]">
              ECS
            </div>
            <div className="text-sm text-gray-300 italic tracking-wide">
              ENIAD — Cybersecurity Society
            </div>
          </div>
        </div>

        {/* Centered Menu Links (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-10 text-lg font-semibold z-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => handleClick(l.key)}
              className={`relative transition-all duration-300 ease-in-out hover:scale-110 hover:text-cyan-200 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${
                loc.pathname === l.to ? "text-cyan-300 font-bold" : "text-white"
              }`}
            >
              {l.label}
              {/* Notification dot */}
              {hasNotification(l.key) && (
                <span className="absolute -top-1 -right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden z-20">
          <MobileMenu links={links} notifications={notifications} handleClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ links, notifications, handleClick }) {
  const [open, setOpen] = React.useState(false);
  const loc = useLocation();

  const hasNotification = (key) => {
    if (!key || !notifications[key]) return false;
    return new Date() - new Date(notifications[key]) < 48 * 60 * 60 * 1000;
  };

  return (
    <>
      {/* Toggle button */}
      <button onClick={() => setOpen((s) => !s)} className="p-2 z-50 relative">
        {open ? (
          <FaTimes size={28} className="text-white transition-transform duration-300 rotate-90" />
        ) : (
          <FaBars size={28} className="text-white transition-transform duration-300" />
        )}
      </button>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-blue-950 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => {
                setOpen(false);
                handleClick(l.key);
              }}
              className={`relative transition-all duration-300 hover:text-cyan-300 ${
                loc.pathname === l.to ? "text-cyan-300" : "text-white"
              }`}
            >
              {l.label}
              {hasNotification(l.key) && (
                <span className="absolute -top-1 -right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
