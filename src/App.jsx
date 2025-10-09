import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import AnnualPlan from "./pages/AnnualPlan";
import Activities from "./pages/Activities";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundLogo from "./components/BackgroundLogo";
import Writeups from "./pages/Writeups";
import Preloader from "./components/Preloader"; // ⚡ new import

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyberNeutral to-white">
            <Navbar />
            <BackgroundLogo />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/members" element={<Members />} />
                <Route path="/annual-plan" element={<AnnualPlan />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/writeups" element={<Writeups />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
