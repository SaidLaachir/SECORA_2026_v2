import React, { useState, useEffect } from "react";
import clubPic from "/public/clubpic2.jpg";
import schoolPic from "/public/schoolpic.jpeg";
import clubPicLight from "/public/clubicon.png";           // light mode logo
import clubPicDark from "/public/iconlogoheaderdark.png"; // dark mode logo
import PageWrapper from "../components/PageWrapper";

export default function Home({ theme }) {
  const [hoverClub, setHoverClub] = useState(false);
  const [hoverSchool, setHoverSchool] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup only once per session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("homePopupShown");
    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("homePopupShown", "true");
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <PageWrapper>
      {/* POPUP */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500
          ${showPopup ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        <div
          className={`px-6 py-4 rounded-xl flex items-center gap-4 min-w-[300px] font-mono shadow-lg
            ${theme === "dark"
              ? "bg-[#0f001a] text-[#00ffea] border border-[#00ffea]/50 shadow-[0_0_15px_#00ffea]"
              : "bg-white text-[#0f0f0f] border border-[#00c2ff]/50 shadow-[0_0_15px_#00c2ff]"
            }`}
        >
          <span className="flex-1 font-semibold text-lg">
            Welcome to SECORA Club — ENIAD!
          </span>
          <button
            onClick={() => setShowPopup(false)}
            className={`font-bold text-xl transition
              ${theme === "dark" ? "text-[#00ffea] hover:text-white" : "text-[#00c2ff] hover:text-white"}`}
          >
            ×
          </button>
        </div>
      </div>

      <section className="pt-28 space-y-12">

        {/* Club Header */}
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

        {/* About Club */}
        <article
          className={`rounded-xl shadow p-6 overflow-hidden ${
            theme==="dark" ? "bg-[#12001f]" : "bg-white"
          }`}
          onMouseEnter={()=>setHoverClub(true)}
          onMouseLeave={()=>setHoverClub(false)}
        >
          <div className={`${hoverClub?"max-h-[1000px]":"max-h-[200px]"} transition-all duration-1000 overflow-hidden`}>
            <h2 className={`${theme==="dark"?"text-white":"text-black"} text-xl font-semibold`}>
              About the Club
            </h2>

            <p className={`${theme==="dark"?"text-gray-300":"text-black"} mt-3`}>
              SECORA Club is a student-led organization focused on hands-on cybersecurity training.
            </p>

            <ul className={`${theme==="dark"?"text-gray-300":"text-black"} list-disc pl-5 mt-4`}>
              <li><strong>Mission:</strong> Empower students.</li>
              <li><strong>Vision:</strong> Create local talent.</li>
            </ul>

            <img
              src={clubPic}
              className={`w-full h-64 object-cover rounded mt-4 transition-all duration-1000 ${
                hoverClub ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          </div>
        </article>

        {/* About ENIAD */}
        <article
          className={`rounded-xl shadow p-6 overflow-hidden ${
            theme==="dark" ? "bg-[#12001f]" : "bg-white"
          }`}
          onMouseEnter={()=>setHoverSchool(true)}
          onMouseLeave={()=>setHoverSchool(false)}
        >
          <div className={`${hoverSchool?"max-h-[1000px]":"max-h-[200px]"} transition-all duration-1000 overflow-hidden`}>
            <h3 className={`${theme==="dark"?"text-white":"text-black"} text-xl font-semibold`}>
              About ENIAD
            </h3>

            <p className={`${theme==="dark"?"text-gray-300":"text-black"} mt-2`}>
              ENIAD is our engineering school.
            </p>
            <a
              href="https://eniad.ump.ma"
              target="_blank"
              rel="noreferrer"
              className={`inline-block mt-4 px-5 py-2 rounded-lg font-semibold transition
                ${theme === "dark"
                  ? "bg-purple-700 text-white hover:bg-purple-600"
                  : "bg-cyan-600 text-white hover:bg-cyan-500"
                }
              `}
            >
              Visit ENIAD School →
            </a>

            <img
              src={schoolPic}
              className={`w-full h-64 object-cover rounded mt-4 transition-all duration-1000 ${
                hoverSchool ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          </div>
        </article>

      </section>
    </PageWrapper>
  );
}
