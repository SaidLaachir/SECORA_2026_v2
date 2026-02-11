import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import clubPicLight from "/public/clubicon.png";           // light mode logo
import clubPicDark from "/public/iconlogoheaderdark.png"; // dark mode logo

// Placeholder images for branches
import cryptoImg from "/public/cryptoPlaceholder.jpg";
import networkImg from "/public/networkPlaceholder.jpg";
import securityImg from "/public/securityPlaceholder.jpg";
import quantumImg from "/public/quantumPlaceholder.jpg";
import forensicImg from "/public/forensicPlaceholder.jpg";

const branches = [
  {
    id: 1,
    title: "Cryptography",
    description: "Learn encryption, hashing, digital signatures, and protocols.",
    img: cryptoImg,
    resources: [
      { type: "file", name: "Intro to Cryptography PDF", href: "#" },
      { type: "web", name: "Crypto101 Website", href: "https://www.crypto101.com" },
      { type: "youtube", name: "Cryptography Basics", href: "https://www.youtube.com/watch?v=ZcB32GqfH-0" },
      { type: "lab", name: "Cryptography Lab Tool", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Network Fundamentals",
    description: "Understand networking basics: TCP/IP, routing, and protocols.",
    img: networkImg,
    resources: [
      { type: "file", name: "Network Basics PDF", href: "#" },
      { type: "web", name: "Cisco Networking Academy", href: "https://www.netacad.com/" },
      { type: "youtube", name: "Networking Fundamentals", href: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
      { type: "lab", name: "Packet Tracer Lab", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Network Security",
    description: "Firewalls, IDS/IPS, VPNs, and securing networks.",
    img: securityImg,
    resources: [
      { type: "file", name: "Network Security Guide", href: "#" },
      { type: "web", name: "OWASP Security Resources", href: "https://owasp.org" },
      { type: "youtube", name: "Network Security Tutorial", href: "https://www.youtube.com/watch?v=VmhR_eVOkXo" },
      { type: "lab", name: "Wireshark Practice Lab", href: "#" },
    ],
  },
  {
    id: 4,
    title: "Quantum Computing",
    description: "Basics of quantum computing and post-quantum cryptography.",
    img: quantumImg,
    resources: [
      { type: "file", name: "Quantum Computing PDF", href: "#" },
      { type: "web", name: "IBM Quantum", href: "https://quantum-computing.ibm.com/" },
      { type: "youtube", name: "Quantum Computing Explained", href: "https://www.youtube.com/watch?v=JhHMJCUmq28" },
      { type: "lab", name: "Qiskit Lab", href: "#" },
    ],
  },
  {
    id: 5,
    title: "Forensics",
    description: "Learn digital forensics, analysis, and recovery techniques.",
    img: forensicImg,
    resources: [
      { type: "file", name: "Forensics Handbook", href: "#" },
      { type: "web", name: "SANS Forensics Resources", href: "https://www.sans.org/forensics/" },
      { type: "youtube", name: "Digital Forensics Tutorial", href: "https://www.youtube.com/watch?v=X3Hbq2t3C-0" },
      { type: "lab", name: "Forensic Lab Practice", href: "#" },
    ],
  },
];

const testPlatforms = [
  { name: "Pwn College", href: "https://pwn.college/" },
  { name: "Hack The Box", href: "https://www.hackthebox.com/" },
  { name: "TryHackMe", href: "https://tryhackme.com/" },
];

export default function LeanCyberSecurity({ theme }) {
  const [openBranchId, setOpenBranchId] = useState(null);
  const isDark = theme === "dark";

  const toggleBranch = (id) => {
    setOpenBranchId((prev) => (prev === id ? null : id));
  };

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12">

        {/* Club Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img src={isDark ? clubPicDark : clubPicLight} className="w-16 h-16" alt="Club Logo" />
          <div>
            <h1 className={`${isDark ? "text-white" : "text-black"} text-3xl font-bold`}>
              Lean CyberSecurity
            </h1>
            <p className={`${isDark ? "text-gray-300" : "text-black"}`}>
              Explore the major branches of cybersecurity.
            </p>
          </div>
        </header>

        {/* Branches */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-xl shadow-lg overflow-hidden border transition-all duration-300 hover:scale-105
                ${isDark ? "bg-[#12001f] border-[#5e17eb]/40" : "bg-white border-gray-200"}`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img src={branch.img} className="w-full h-full object-cover" />
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <h3 className={`${isDark ? "text-white" : "text-black"} text-xl font-semibold`}>
                  {branch.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-black"}`}>
                  {branch.description}
                </p>

                <button
                  onClick={() => toggleBranch(branch.id)}
                  className={`px-4 py-2 rounded border text-sm font-semibold transition
                    ${isDark ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                    : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"}`}
                >
                  {openBranchId === branch.id ? "Hide Resources" : "Show Resources"}
                </button>

                {/* Resources */}
                {openBranchId === branch.id && (
                  <div className="mt-4 space-y-2">
                    {branch.resources.map((res, idx) => (
                      <a
                        key={idx}
                        href={res.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`block px-3 py-2 rounded text-sm transition-all duration-300
                          ${isDark
                            ? "bg-[#1a0033] border border-[#5e17eb]/50 text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                            : "bg-gray-50 border border-gray-300 text-black hover:bg-cyan-600 hover:text-white"
                          }`}
                      >
                        {res.name} [{res.type.toUpperCase()}]
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Test Yourself Section */}
        <div className="mt-12 text-center">
          <h3 className={`${isDark ? "text-white" : "text-black"} font-bold text-2xl md:text-3xl mb-4`}>
            Test Yourself
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-black"} mb-4`}>
            Practice your skills on the most popular cybersecurity platforms.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {testPlatforms.map((plat, idx) => (
              <a
                key={idx}
                href={plat.href}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded border text-sm font-semibold transition-all duration-300 hover:scale-105
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
