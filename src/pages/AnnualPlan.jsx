import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

import AnnualPlanPDF from "../assets/documents/Annual Plan.pdf";
import OpeningPlanPDF from "../assets/documents/Opening Plan.pdf";
import ClubConstPDF from "../assets/documents/Club Constitution.pdf";
import ENIAD_ConstitutionPDF from "../assets/documents/Reglement Interieur ENIAD.pdf"; 

import docImage from "/public/docimage.jpg";
import webImage from "/public/webimage.jpg";
import clubPicLight from "/public/clubicon.png";          // light mode logo
import clubPicDark from "/public/iconlogoheaderdark.png"; // dark mode logo
import scholarityImage from "/public/scholarityPortal.png";
import eniadlogoImage from "/public/eniadlogoImage.png";
import umpLogoImage from "/public/umpLogoImage.png";

const docs = [
  { id: 1, name: "2025 Annual Plan", href: AnnualPlanPDF, date: "Jan 1, 2025", img: docImage },
  { id: 2, name: "Opening Plan 2025", href: OpeningPlanPDF, date: "Jan 5, 2025", img: docImage },
  { id: 3, name: "Club Constitution", href: ClubConstPDF, date: "Jan 10, 2025", img: docImage },
];

const resources = [
  { id: 1, name: "ENIAD Constitution", href: ENIAD_ConstitutionPDF, img: docImage, type: "doc" },
  { id: 2, name: "ENIAD Scholarity Portal", href: "https://scolarite-eniadb.ump.ma/", img: scholarityImage, type: "web" },
  { id: 3, name: "ENIAD Website", href: "https://eniad.ump.ma/", img: eniadlogoImage, type: "web" },
  { id: 4, name: "Mohamed First University", href: "https://www.ump.ma/", img: umpLogoImage, type: "web" },
];

export default function AnnualPlan({ theme }) {
  const [previewFile, setPreviewFile] = useState(null);
  const isDark = theme === "dark";

  const cardBase =
    "rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105";

  const cardTheme = isDark
    ? "bg-[#12001f] border-[#5e17eb]/40 hover:shadow-[0_15px_40px_#5e17eb]"
    : "bg-white border-gray-200 hover:shadow-cyan-500/40";

  const btnTheme = isDark
    ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
    : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white";

  return (
    <PageWrapper>
      <section className="pt-28 space-y-14">

        {/* Club Header */}
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

        {/* Documents */}
        <h2 className={`${isDark ? "text-white" : "text-black"} text-3xl font-extrabold`}>
          Annual Plan & Documents
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${cardBase} ${cardTheme}`}
            >
              <div className="h-48 overflow-hidden">
                <img src={d.img} className="w-full h-full object-cover" />
              </div>

              <div className="p-5 space-y-4">
                <h3 className={`${isDark ? "text-white" : "text-black"} font-semibold`}>
                  {d.name}
                </h3>

                <div className="flex gap-3">
                  <button
                    onClick={() => setPreviewFile(d.href)}
                    className={`px-3 py-2 border rounded text-sm ${btnTheme}`}
                  >
                    Preview
                  </button>

                  <a
                    href={d.href}
                    download
                    className={`px-3 py-2 border rounded text-sm ${btnTheme}`}
                  >
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESOURCES */}
        <h2 className={`${isDark ? "text-white" : "text-black"} text-3xl font-extrabold`}>
          ENIAD Documents & Resources
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${cardBase} ${cardTheme}`}
            >
              <div className="h-44 overflow-hidden">
                <img src={r.img} className="w-full h-full object-cover" />
              </div>

              <div className="p-5 space-y-4">
                <h3 className={`${isDark ? "text-white" : "text-black"} font-semibold`}>
                  {r.name}
                </h3>

                <div className="flex gap-3">
                  {r.type === "doc" ? (
                    <>
                      <button
                        onClick={() => setPreviewFile(r.href)}
                        className={`px-3 py-2 border rounded text-sm ${btnTheme}`}
                      >
                        Preview
                      </button>

                      <a
                        href={r.href}
                        download
                        className={`px-3 py-2 border rounded text-sm ${btnTheme}`}
                      >
                        Download
                      </a>
                    </>
                  ) : (
                    <a
                      href={r.href}
                      target="_blank"
                      className={`px-3 py-2 border rounded text-sm ${btnTheme}`}
                    >
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {previewFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex justify-center pt-32 px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className={`w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden flex flex-col
              ${isDark ? "bg-[#12001f]" : "bg-white"}`}
            >
              <div
                className={`flex justify-between items-center px-4 py-2 border-b
                ${isDark ? "border-[#5e17eb]/40 text-white" : "border-gray-200 text-black"}`}
              >
                <span className="font-semibold">Document Preview</span>

                <button
                  onClick={() => setPreviewFile(null)}
                  className={`text-xl font-bold transition
                  ${isDark ? "text-[#c7b8ff] hover:text-white" : "text-gray-700 hover:text-black"}`}
                >
                  &times;
                </button>
              </div>

              <iframe
                src={previewFile}
                className="flex-1 w-full bg-white"
                title="PDF Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
