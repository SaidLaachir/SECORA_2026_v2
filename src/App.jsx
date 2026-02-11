import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import AnnualPlan from "./pages/AnnualPlan";
import Activities from "./pages/Activities";
import Writeups from "./pages/Writeups";
import WriteUpDetail from "./pages/WriteupDetail";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundLogo from "./components/BackgroundLogo";
import Preloader from "./components/Preloader";
import LearnCyberSecurity from "./pages/LearnCyberSecurity";


export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );


  // Load saved theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Apply theme to document + save
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <>
          <ScrollToTop />

          <div
            className={`min-h-screen flex flex-col transition-colors duration-500
              ${
                theme === "dark"
                  ? "bg-gradient-to-b from-black via-gray-900 to-black text-white"
                  : "bg-gradient-to-b from-cyberNeutral to-white text-black"
              }`}
          >
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <BackgroundLogo />

            {/* RESPONSIVE MAIN WRAPPER */}
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
              <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/members" element={<Members theme={theme} />} />
                <Route path="/annual-plan" element={<AnnualPlan theme={theme} />} />
                <Route path="/activities" element={<Activities theme={theme} />} />
                <Route path="/writeups" element={<Writeups theme={theme} />} />
                <Route path="/writeup/:id" element={<WriteUpDetail theme={theme} />} />
                <Route path="/learn-cybersecurity" element={<LearnCyberSecurity theme={theme} />} />
              </Routes>
            </main>

            <Footer theme={theme} />
          </div>
        </>
      )}
    </>
  );
}
