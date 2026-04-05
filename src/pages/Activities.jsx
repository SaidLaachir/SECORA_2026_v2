import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import pic1 from "/public/clubMembers/ourteam.jpeg";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic3.jpg";
import pic4 from "/public/pic4.jpg";
import pic5 from "/public/pic5.jpeg";
import clubPicLight from "/public/clubicon.png";
import clubPicDark from "/public/iconlogoheaderdark.png";
import pic6 from "/public/clubMembers/pic6.jpg";
import pic7 from "/public/clubMembers/pic7.jpg";

const activities = [
  {
    id: 3,
    title: "Champions of DGSSI CTF 2026",
    date: "2026 March 25",
    venue: "DGSSI Headquarters, Rabat",
    animator: "SECORA Team",
    description: "Le club SECORA de l'ENIAD remporte la 1ère place à la prestigieuse compétition nationale de cybersécurité organisée par la DGSSI.",
    image: "/CTF winners/congrats.jpeg", // Remplacez par le chemin de votre image principale
  },
  {
    id: 2,
    title: "SOC Fundamentals: The Blue Team Framework",
    date: "2026 March 07",
    venue: "ENIAD BR5 at 1:00 PM",
    animator: "Mohamed Amine AIT BAOUI",
    description: "We will cover a range Blue Team fundamentals.",
    image: "/Trainings/socFundamentals.jpeg",
  },
  {
    id: 1,
    title: "Windows Pentesting Active Directory 2026",
    date: "2026 February 28",
    venue: "ENIAD BR6 at 1:00 PM",
    animator: "Abdellatif TAZARNI",
    description: "Hands-on training on Active Directory pentesting and real-world attack techniques.",
    image: "/Trainings/pentestSaturday.jpeg",
  }
];

const galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

export default function Activities({ theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const handleDetails = (activityId) => {
    navigate(`/activity/${activityId}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12 relative z-10">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src={theme === "dark" ? clubPicDark : clubPicLight}
            className="w-16 h-16"
            alt="Club Logo"
          />
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
              SECORA Club — ENIAD
            </h1>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              Building practical cybersecurity skills
            </p>
          </div>
        </header>

        {/* Activities Section */}
        <div>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Activities & Events
          </h2>
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
                className={`flex flex-col rounded-lg shadow-lg overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40
                  ${theme === "dark"
                    ? "bg-[#1a0033] border-[#5e17eb]/40"
                    : "bg-white border-gray-200"
                  }`}
              >

                {/* IMAGE BANNER */}
                <div className="w-full h-48 overflow-hidden shrink-0">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className={`px-4 py-2 flex justify-between items-center
                  bg-cyan-700 text-white
                  ${theme === "dark" ? "bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6]" : ""}`}>
                  <span className="font-bold text-base md:text-lg truncate mr-2">{a.title}</span>
                  <span className="italic text-xs md:text-sm whitespace-nowrap">{a.date}</span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold mb-1`}>
                    {a.venue}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                    By {a.animator}
                  </p>

                  <button
                    onClick={() => handleDetails(a.id)}
                    className={`mt-auto px-4 py-2 text-sm rounded border border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white transition w-max
                      ${theme === "dark" ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white" : ""}`}
                  >
                    See Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gallery */}
        <div className="mt-12 relative w-full max-w-3xl mx-auto group">
          <h3 className={`text-3xl md:text-4xl font-extrabold text-center mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Memories & Past Activities
          </h3>

          <div className="overflow-hidden rounded-lg shadow-lg relative h-80">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryImages[currentIndex]}
                src={galleryImages[currentIndex]}
                alt=""
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition">
              <ChevronLeft />
            </button>

            <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}