import React, { useState } from "react";
import members from "../data/members";
import MemberCard from "../components/MemberCard";
import PageWrapper from "../components/PageWrapper";
import clubPic2 from "../assets/clubicondark.png";

export default function Members() {
  const [openMemberId, setOpenMemberId] = useState(null);

  const handleClick = (id) => {
    setOpenMemberId(prev => (prev === id ? null : id));
  };

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src={clubPic2}
            alt="Club Icon"
            className="w-16 h-16 object-cover shadow-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
            style={{ backgroundColor: "transparent" }}
          />
          <div>
            <h1 className="text-3xl font-bold text-cyberBlack">
              eCyberSec Club — ENIAD
            </h1>
            <p className="text-base text-gray-700">
              Building practical cybersecurity skills, ethically and collaboratively.
            </p>
          </div>
        </header>

        {/* Members Section with professional leaderboard */}
        <div className="relative z-10 flex justify-center px-4">
          <div className="bg-[#00378f]/70 shadow-lg shadow-cyan-900/50 rounded-3xl px-4 py-8 brush-stroke-effect w-full max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-cyberBlack">
              Members — Bureau
            </h2>
            <p className="text-md md:text-lg text-white mb-6 text-center">
              Click a member's avatar to reveal role and LinkedIn.
            </p>

            {/* Responsive Leaderboard Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {members.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
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
