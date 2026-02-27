import React, { useState, useEffect } from "react";
import clubPic from "/public/clubpic2.jpg";
import schoolPic from "/public/schoolpic.jpeg";
import clubPicLight from "/public/clubicon.png";
import clubPicDark from "/public/iconlogoheaderdark.png";
import PageWrapper from "../components/PageWrapper";

export default function Home({ theme }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Detect real page refresh / first load
    const navEntries = performance.getEntriesByType("navigation");
    const isReload =
      navEntries.length > 0 &&
      (navEntries[0].type === "reload" || navEntries[0].type === "navigate");

    if (isReload) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <PageWrapper>
      {/* Welcome Message */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${showMessage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"}`}
      >
        <div
          className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base shadow-lg backdrop-blur-md
            ${
              theme === "dark"
                ? "bg-[#0f001a]/90 text-[#00ffea] border border-[#00ffea]/40 shadow-[0_0_20px_rgba(0,255,234,0.5)]"
                : "bg-white/95 text-[#5e17eb] border border-[#5e17eb]/30 shadow-[0_0_20px_rgba(94,23,235,0.3)]"
            }
          `}
        >
          Welcome to SECORA Club platform — Happy Learning...
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
          className={`rounded-xl shadow p-6 ${
            theme === "dark" ? "bg-[#12001f]" : "bg-white"
          }`}
        >
          <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold`}>
            About the Club
          </h2>

          <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mt-3`}>
            SECORA Club is a student-led organization focused on hands-on cybersecurity training.
          </p>

          <ul className={`${theme === "dark" ? "text-gray-300" : "text-black"} list-disc pl-5 mt-4`}>
            <li><strong>Mission:</strong> Empower students.</li>
            <li><strong>Vision:</strong> Create local talent.</li>
          </ul>

          <img
            src={clubPic}
            alt="SECORA Club"
            className="w-full h-64 object-cover rounded mt-4"
          />
        </article>

        {/* About ENIAD */}
        <article
          className={`rounded-xl shadow p-6 ${
            theme === "dark" ? "bg-[#12001f]" : "bg-white"
          }`}
        >
          <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold`}>
            About ENIAD
          </h3>

          <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mt-2`}>
            ENIAD is our engineering school.
          </p>

          <a
            href="https://eniad.ump.ma"
            target="_blank"
            rel="noreferrer"
            className={`inline-block mt-4 px-5 py-2 rounded-lg font-semibold transition
              ${
                theme === "dark"
                  ? "bg-purple-700 text-white hover:bg-purple-600"
                  : "bg-cyan-600 text-white hover:bg-cyan-500"
              }
            `}
          >
            Visit ENIAD School →
          </a>

          <img
            src={schoolPic}
            alt="ENIAD School"
            className="w-full h-64 object-cover rounded mt-4"
          />
        </article>

      </section>
    </PageWrapper>
  );
}