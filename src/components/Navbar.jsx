import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import clubIcon from "/public/clubiconwhite.png";
import clubIconMobile from "/public/clubiconimage.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/annual-plan", label: "Documents", key: "annualPlan" },
  { to: "/activities", label: "Activities", key: "activities" },
  { to: "/writeups", label: "News", key: "news" },
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
        {/* Desktop logo + links */}
        <div className="hidden md:flex items-center flex-1">
          <Link
            to="/"
            className="bg-white/20 backdrop-blur-xl rounded-xl p-1 shadow-2xl border border-white/30"
          >
            <img src={clubIcon} className="w-16 h-16 object-cover" />
          </Link>
          <div className="flex gap-6 text-lg font-semibold whitespace-nowrap ml-6">
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
        </div>

        {/* Mobile logo + menu + theme toggle */}
        <div className="flex md:hidden w-full justify-between items-center">
          {/* Left side: logo + text */}
          <Link
            to="/"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-xl px-3 py-1 shadow-2xl border border-white/30"
          >
            <img src={clubIconMobile} className="w-12 h-12 object-cover" />
            <h1 className="text-white font-extrabold text-lg tracking-wide">
              SECORA CLUB
            </h1>
          </Link>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 border border-white/30"
            >
              {theme === "dark" ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
            <MobileSlideMenu links={links} notifications={notifications} handleClick={handleClick} />
          </div>
        </div>

        {/* Desktop theme toggle far right */}
        <div className="hidden md:block">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 border border-white/30"
          >
            {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ================= MOBILE SLIDE MENU ================= */
function MobileSlideMenu({ links, notifications, handleClick }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : "auto"; }, [open]);

  const hasNotification = (key) => {
    if (!key || !notifications[key]) return false;
    return new Date() - new Date(notifications[key]) < 48 * 60 * 60 * 1000;
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="transition-transform active:scale-90">
        <FaBars size={26} />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#5e17eb] p-6 shadow-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold">Menu</span>
          <FaTimes size={26} onClick={() => setOpen(false)} />
        </div>

        <div className="flex flex-col gap-6 text-xl">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => {
                setActive(l.to);
                handleClick(l.key);
                setTimeout(() => setOpen(false), 300);
              }}
              className={`transition-all duration-300 px-4 py-2 rounded-lg ${
                active === l.to
                  ? "bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 scale-105 shadow-lg font-bold"
                  : "bg-white/20 backdrop-blur-md"
              }`}
            >
              {l.label}
              {hasNotification(l.key) && (
                <span className="ml-2 inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}