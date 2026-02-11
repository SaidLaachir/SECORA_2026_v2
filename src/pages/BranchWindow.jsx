import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import clubPicLight from "/public/clubicon.png";
import clubPicDark from "/public/iconlogoheaderdark.png";

// Placeholder data per branch
const branchData = {
  Cryptography: {
    description:
      "Cryptography is the science of protecting information using mathematical techniques to ensure confidentiality, integrity, and authentication. It transforms readable data into unreadable form, preventing unauthorized access and tampering. Converts plaintext into ciphertext using algorithms and keys. Ensures confidentiality, integrity, authentication, and non-repudiation. Used in secure communication, digital signatures, passwords, and online transactions",
    roles: [
      { title: "Cryptographer", salary: "$80k - $150k" },
      { title: "Security Engineer", salary: "$70k - $140k" },
      { title: "Penetration Tester", salary: "$60k - $120k" },
    ],
    documents: [
      { name: "Intro to Cryptography PDF", href: "#" },
      { name: "Advanced Cryptography PDF", href: "#" },
    ],
    youtube: [
      { name: "Cryptography Basics", href: "https://www.youtube.com/watch?v=ZcB32GqfH-0" },
      { name: "Applied Cryptography", href: "https://www.youtube.com/watch?v=JhHMJCUmq28" },
    ],
    websites: [
      { name: "Crypto101", href: "https://www.crypto101.com" },
      { name: "NIST Crypto Resources", href: "https://csrc.nist.gov/projects/cryptography" },
    ],
    tools: [
      { name: "GPG Encryption Tool", href: "https://gnupg.org/" },
      { name: "OpenSSL", href: "https://www.openssl.org/" },
    ],
    img: "/public/cryptoPlaceholder.jpg",
  },

  "Network Fundamentals": {
    description: "Learn networking basics, TCP/IP, routing, and protocols.",
    roles: [
      { title: "Network Engineer", salary: "$60k - $120k" },
      { title: "Network Administrator", salary: "$50k - $100k" },
    ],
    documents: [
      { name: "Networking Basics PDF", href: "#" },
      { name: "TCP/IP Protocols PDF", href: "#" },
    ],
    youtube: [
      { name: "Networking Fundamentals", href: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
    ],
    websites: [
      { name: "Cisco Networking Academy", href: "https://www.netacad.com/" },
    ],
    tools: [
      { name: "Packet Tracer", href: "https://www.netacad.com/courses/packet-tracer" },
    ],
    img: "/public/networkPlaceholder.jpg",
  },

  "Network Security": {
    description: "Learn firewalls, IDS/IPS, VPNs, and how to secure networks.",
    roles: [
      { title: "Security Analyst", salary: "$70k - $130k" },
      { title: "Penetration Tester", salary: "$60k - $120k" },
      { title: "SOC Engineer", salary: "$65k - $125k" },
    ],
    documents: [
      { name: "Network Security Guide", href: "#" },
    ],
    youtube: [
      { name: "Network Security Tutorial", href: "https://www.youtube.com/watch?v=VmhR_eVOkXo" },
    ],
    websites: [
      { name: "OWASP", href: "https://owasp.org" },
    ],
    tools: [
      { name: "Wireshark", href: "https://www.wireshark.org/" },
      { name: "Nmap", href: "https://nmap.org/" },
    ],
    img: "/public/securityPlaceholder.jpg",
  },

  "Quantum Computing": {
    description: "Quantum computing is no longer confined to science fiction or theoretical physics. It’s rapidly becoming a groundbreaking technology poised to redefine how we approach data, algorithms, and cybersecurity. Particularly for IT managers, cybersecurity professionals, and tech enthusiasts, understanding how quantum computing reshapes the cybersecurity landscape isn’t just fascinating; it’s essential.",
    roles: [
      { title: "Quantum Researcher", salary: "$90k - $180k" },
      { title: "Quantum Software Engineer", salary: "$80k - $160k" },
    ],
    documents: [
      { name: "Quantum Computing PDF", href: "#" },
    ],
    youtube: [
      { name: "Quantum Computing Explained", href: "https://www.youtube.com/watch?v=JhHMJCUmq28" },
    ],
    websites: [
      { name: "IBM Quantum", href: "https://quantum-computing.ibm.com/" },
    ],
    tools: [
      { name: "Qiskit Lab", href: "https://qiskit.org/" },
    ],
    img: "/public/quantumPlaceholder.jpg",
  },

  Forensics: {
    description: "Learn digital forensics, analysis, and recovery techniques.",
    roles: [
      { title: "Forensic Analyst", salary: "$60k - $120k" },
      { title: "Incident Responder", salary: "$70k - $130k" },
    ],
    documents: [
      { name: "Forensics Handbook", href: "#" },
    ],
    youtube: [
      { name: "Digital Forensics Tutorial", href: "https://www.youtube.com/watch?v=X3Hbq2t3C-0" },
    ],
    websites: [
      { name: "SANS Forensics", href: "https://www.sans.org/forensics/" },
    ],
    tools: [
      { name: "Autopsy", href: "https://www.sleuthkit.org/autopsy/" },
      { name: "FTK Imager", href: "https://accessdata.com/product-download/ftk-imager-version-4-3" },
    ],
    img: "/public/forensicPlaceholder.jpg",
  },
};

export default function BranchWindow({ theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = theme === "dark";

  // Get branch name from query param or state
  const branchName = location.state?.branch || "Cryptography";
  const data = branchData[branchName];

  if (!data) return <div className="pt-28 text-center">Branch not found.</div>;

  return (
    <PageWrapper>
      <section className="pt-28 px-4 sm:px-6 lg:px-8 space-y-12 max-w-7xl mx-auto">

        {/* Header + back button */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
          <img src={isDark ? clubPicDark : clubPicLight} className="w-16 h-16" alt="Club Logo" />
          <div className="flex-1">
            <h1 className={`${isDark ? "text-white" : "text-black"} text-3xl sm:text-4xl font-bold`}>
              {branchName}
            </h1>
            <p className={`${isDark ? "text-gray-300" : "text-black"} mt-1`}>
              {data.description}
            </p>
          </div>
        </header>

        <button
          onClick={() => navigate(-1)}
          className={`px-4 py-2 rounded border text-sm font-semibold transition
            ${isDark
              ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
              : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
            }`}
        >
          ← Back
        </button>

        {/* Roles Section */}
        <div>
          <h2 className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold mb-3`}>Roles & Salaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.roles.map((role, idx) => (
              <div key={idx} className={`p-4 rounded shadow ${isDark ? "bg-[#12001f]" : "bg-white"}`}>
                <h3 className={`${isDark ? "text-white" : "text-black"} font-semibold`}>{role.title}</h3>
                <p className={`${isDark ? "text-gray-300" : "text-black"}`}>{role.salary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div>
          <h2 className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold mb-3`}>Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.documents.map((doc, idx) => (
              <div key={idx} className={`p-4 rounded shadow flex flex-col justify-between ${isDark ? "bg-[#12001f]" : "bg-white"}`}>
                <p className={`${isDark ? "text-[#c7b8ff]" : "text-black"} font-semibold mb-2`}>{doc.name}</p>
                <div className="flex gap-2 mt-auto">
                  <a href={doc.href} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm hover:bg-cyan-600 hover:text-white transition">
                    Preview
                  </a>
                  <a href={doc.href} download className="px-3 py-1 border rounded text-sm hover:bg-cyan-600 hover:text-white transition">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Section */}
        <div>
          <h2 className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold mb-3`}>YouTube Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.youtube.map((yt, idx) => (
              <div key={idx} className={`p-4 rounded shadow flex flex-col justify-between ${isDark ? "bg-[#12001f]" : "bg-white"}`}>
                <p className={`${isDark ? "text-[#c7b8ff]" : "text-black"} font-semibold mb-2`}>{yt.name}</p>
                <a href={yt.href} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm hover:bg-cyan-600 hover:text-white transition mt-auto">
                  Visit Channel
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Websites Section */}
        <div>
          <h2 className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold mb-3`}>Websites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.websites.map((web, idx) => (
              <div key={idx} className={`p-4 rounded shadow flex flex-col justify-between ${isDark ? "bg-[#12001f]" : "bg-white"}`}>
                <p className={`${isDark ? "text-[#c7b8ff]" : "text-black"} font-semibold mb-2`}>{web.name}</p>
                <a href={web.href} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm hover:bg-cyan-600 hover:text-white transition mt-auto">
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h2 className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold mb-3`}>Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.tools.map((tool, idx) => (
              <div key={idx} className={`p-4 rounded shadow flex flex-col justify-between ${isDark ? "bg-[#12001f]" : "bg-white"}`}>
                <p className={`${isDark ? "text-[#c7b8ff]" : "text-black"} font-semibold mb-2`}>{tool.name}</p>
                <a href={tool.href} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm hover:bg-cyan-600 hover:text-white transition mt-auto">
                  Visit Tool
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
    </PageWrapper>
  );
}
