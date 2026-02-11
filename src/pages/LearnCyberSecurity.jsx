import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import clubPicLight from "/public/clubicon.png";
import clubPicDark from "/public/iconlogoheaderdark.png";

// Placeholder images
import cryptoImg from "/public/cryptoPlaceholder.jpg";
import networkImg from "/public/networkPlaceholder.jpg";
import securityImg from "/public/securityPlaceholder.jpg";
import quantumImg from "/public/quantumPlaceholder.jpg";
import forensicImg from "/public/forensicPlaceholder.jpg";

// Centralized branch data
const branches = [
  {
    id: 1,
    title: "Cryptography",
    description: "Learn encryption, hashing, digital signatures, and protocols.",
    img: cryptoImg,
  },
  {
    id: 2,
    title: "Network Fundamentals",
    description: "Understand networking basics: TCP/IP, routing, and protocols.",
    img: networkImg,
  },
  {
    id: 3,
    title: "Network Security",
    description: "Firewalls, IDS/IPS, VPNs, and securing networks.",
    img: securityImg,
  },
  {
    id: 4,
    title: "Quantum Computing",
    description: "Basics of quantum computing and post-quantum cryptography.",
    img: quantumImg,
  },
  {
    id: 5,
    title: "Forensics",
    description: "Learn digital forensics, analysis, and recovery techniques.",
    img: forensicImg,
  },
];

const testPlatforms = [
  { name: "Pwn College", href: "https://pwn.college/" },
  { name: "Hack The Box", href: "https://www.hackthebox.com/" },
  { name: "TryHackMe", href: "https://tryhackme.com/" },
];

export default function LearnCyberSecurity({ theme }) {
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const goToBranch = (branchTitle) => {
    navigate("/branch", { state: { branch: branchTitle } });
  };

  return (
    <PageWrapper>
      <section className="pt-28 px-4 sm:px-6 lg:px-8 space-y-12 max-w-7xl mx-auto">

        {/* Club Header */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
          <img src={isDark ? clubPicDark : clubPicLight} className="w-16 h-16" alt="Club Logo" />
          <div>
            <h1 className={`${isDark ? "text-white" : "text-black"} text-3xl sm:text-4xl font-bold`}>
              Learn CyberSecurity
            </h1>
            <p className={`${isDark ? "text-gray-300" : "text-black"} mt-1`}>
              Explore the major branches of cybersecurity.
            </p>
          </div>
        </header>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => goToBranch(branch.title)}
              className={`cursor-pointer rounded-xl shadow-lg overflow-hidden border transition-all duration-300 hover:scale-105
                ${isDark ? "bg-[#12001f] border-[#5e17eb]/40" : "bg-white border-gray-200"}`}
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img src={branch.img} className="w-full h-full object-cover" alt={branch.title} />
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 space-y-3">
                <h3 className={`${isDark ? "text-white" : "text-black"} text-lg sm:text-xl font-semibold`}>
                  {branch.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-black"} text-sm sm:text-base`}>
                  {branch.description}
                </p>

                <button
                  className={`w-full px-4 py-2 rounded border text-sm font-semibold transition
                    ${isDark
                      ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                      : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
                    }`}
                >
                  Explore Branch
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Test Yourself Section */}
        <div className="mt-12 text-center space-y-4">
          <h3 className={`${isDark ? "text-white" : "text-black"} font-bold text-2xl sm:text-3xl`}>
            Test Yourself
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-black"} text-sm sm:text-base`}>
            Practice your skills on the most popular cybersecurity platforms.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {testPlatforms.map((plat, idx) => (
              <a
                key={idx}
                href={plat.href}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded border text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105
                  ${isDark
                    ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                    : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
                  }`}
              >
                {plat.name}
              </a>
            ))}
          </div>
        </div>

      </section>
    </PageWrapper>
  );
}
