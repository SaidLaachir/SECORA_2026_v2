import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import ActivityCard from "../components/ActivityCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import pic1 from "/public/clubMembers/ourteam.jpeg";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic3.jpg";
import pic4 from "/public/pic4.jpg";
import pic5 from "/public/pic5.jpeg";
import clubPic2 from "/public/clubicon.png";
import pic6 from "/public/clubMembers/pic6.jpg";
import pic7 from "/public/clubMembers/pic7.jpg";

const activities = [
  { id: 1, title: "Hacking Workshop 2025", date: "2025-10-10", venue: "ENIAD Lab A", images: [pic1, pic2] },
  { id: 2, title: "Web Hacking session 2025", date: "2025-11-02", venue: "Main Auditorium", images: [pic3] },
  { id: 3, title: "Cybersecurity Hackathon", date: "2025-11-15", venue: "Lab B", images: [pic4, pic5] },
];

const galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

export default function Activities({ theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const handleDetails = (activityId) => {
    navigate(`/activity/${activityId}`);
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12 relative z-10">

        {/* Club Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src={clubPic2}
            alt="Club Icon"
            className="w-16 h-16 object-cover shadow-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
          />
          <div>
            <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
              eCyberSec Club — ENIAD
            </h1>
            <p className={`text-base ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              Building practical cybersecurity skills, ethically and collaboratively.
            </p>
          </div>
        </header>

        {/* Activities Header */}
        <div>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Activities & Events
          </h2>
          <p className={`text-md md:text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
            Upcoming events where the club hosts or participates.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {activities.map((a) => (
              <motion.div
                key={a.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className={`rounded-lg shadow-lg overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40
                  ${theme === "dark"
                    ? "bg-[#1a0033] border-[#5e17eb]/40"
                    : "bg-white border-gray-200"
                  }
                `}
              >
                <div className={`px-4 py-2 flex justify-between items-center
                  bg-cyan-700 text-white
                  ${theme === "dark" ? "bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6]" : ""}`}>
                  <span className="font-bold text-lg">{a.title}</span>
                  <span className="italic text-sm">{a.date}</span>
                </div>
                <div className="p-6">
                  <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold mb-2`}>{a.venue}</h3>
                  <button
                    onClick={() => handleDetails(a.id)}
                    className={`px-4 py-2 text-sm rounded border border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white transition
                      ${theme === "dark" ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white" : ""}`}
                  >
                    See Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Google Form Subscription */}
        <div className="mt-12">
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Subscribe for New Club Members (2025-2026)
          </h3>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1buL0nv_ulI1a_nP434H4gtskA0FEqk1AvsSmXpApl4pBSg/viewform?embedded=true"
              width="640"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className={`w-full max-w-2xl rounded-lg shadow-lg transition-all duration-300
                ${theme === "dark" ? "bg-[#1a0033]" : "bg-white"}`}
              title="Club Subscription Form"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 relative w-full max-w-3xl mx-auto group">
          <h3 className={`text-3xl md:text-4xl font-extrabold text-center mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Memories & Past Activities
          </h3>
          <div className={`overflow-hidden rounded-lg shadow-lg relative h-80 transition-all duration-300
            ${theme === "dark" ? "bg-[#1a0033]" : "bg-white"}`}>
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryImages[currentIndex]}
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => window.open(galleryImages[currentIndex], "_blank")}
              />
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 text-center space-y-2">
          <h3 className={`font-bold text-2xl md:text-3xl mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>Join our socials</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { href: "https://www.instagram.com/e_cybersec_club/", name: "Instagram", color: "#E4405F" },
              { href: "https://www.linkedin.com/company/akira-club/posts/?feedView=all", name: "LinkedIn", color: "#0077B5" },
              { href: "https://discord.gg/rPVBFPvq", name: "Discord", color: "#5865F2" },
              { href: "https://chat.whatsapp.com/DBc4WdUPcVnI2z0iHGRZPC?mode=ems_wa_c", name: "WhatsApp", color: "#25D366" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded border transition-all duration-300 transform hover:scale-105 hover:text-white`}
                style={{
                  borderColor: theme === "dark" ? "#8b5cf6" : "#ccc",
                  backgroundColor: theme === "dark" ? "#1a0033" : "transparent",
                  color: theme === "dark" ? "#c7b8ff" : "black",
                }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
