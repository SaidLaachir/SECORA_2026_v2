import React, { useState } from "react";
import members from "../data/members";
import MemberCard from "../components/MemberCard";
import PageWrapper from "../components/PageWrapper";
import clubPicLight from "/public/clubicon.png";          // light mode logo
import clubPicDark from "/public/iconlogoheaderdark.png"; // dark mode logo

export default function Members({ theme }) {
  const [openMemberId, setOpenMemberId] = useState(null);
  const isDark = theme === "dark";

  const handleClick = (id) => {
    setOpenMemberId(prev => (prev === id ? null : id));
  };

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src={isDark ? clubPicDark : clubPicLight}
            className="w-16 h-16"
            alt="Club Logo"
          />
          <div>
            <h1 className={`${isDark ? "text-white" : "text-black"} text-3xl font-bold`}>
              SECORA Club — ENIAD
            </h1>
            <p className={`${isDark ? "text-gray-300" : "text-black"}`}>
              Building practical cybersecurity skills
            </p>
          </div>
        </header>

        {/* Members Section */}
        <div className="relative z-10 flex justify-center px-4">
          <div
            className={`shadow-lg rounded-3xl px-4 py-8 w-full max-w-5xl
            ${isDark
              ? "bg-[#12001f]/80 shadow-[#5e17eb]/40"
              : "bg-white shadow-cyan-300/50 border border-gray-200"}`}
          >
            <h2 className={`${isDark ? "text-white" : "text-black"} text-3xl md:text-4xl font-extrabold mb-4 text-center`}>
              Members — Bureau
            </h2>

            <p className={`${isDark ? "text-gray-300" : "text-black"} text-md md:text-lg mb-6 text-center`}>
              Click a member's avatar to reveal role and LinkedIn.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {members.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  theme={theme}
                  isOpen={openMemberId === member.id}
                  onClick={() => handleClick(member.id)}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
    </PageWrapper>
  );
}
