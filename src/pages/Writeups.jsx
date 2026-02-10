import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import clubPic2 from "/public/clubicon.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function WriteUps({ theme }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  async function loadFeed(page = 1) {
    try {
      const res = await fetch(`http://localhost:5000/api/rss?page=${page}&limit=${limit}`);
      const data = await res.json();
      setPosts(data.items || []);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(data.page || 1);
    } catch (err) {
      console.error("RSS load failed:", err);
      setPosts([]);
      setTotalPages(1);
      setCurrentPage(1);
    }
  }

  useEffect(() => {
    loadFeed(currentPage);
  }, [currentPage]);

  // Animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 space-y-12 relative z-10">
        {/* Club Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src={clubPic2}
            alt="Club Icon"
            className="w-16 h-16 object-cover shadow-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
          />
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
              eCyberSec Club — ENIAD
            </h1>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} text-base`}>
              Building practical cybersecurity skills, ethically and collaboratively.
            </p>
          </div>
        </header>

        {/* Page Header */}
        <div>
          <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl md:text-4xl font-extrabold mb-2`}>
            Write-ups
          </h2>
          <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} text-md md:text-lg`}>
            Latest updates, security research, and vulnerability write-ups from multiple IT sources.
          </p>
        </div>

        {/* Write-up posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {posts.map((p, index) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className={`
                  rounded-lg shadow-lg overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40
                  ${theme === "dark" ? "bg-[#1a0033] border-[#5e17eb]/40" : "bg-white border-gray-200"}
                `}
              >
                {/* Banner */}
                <div
                  className={`px-4 py-2 flex justify-between items-center ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6] text-white"
                      : "bg-cyan-700 text-white"
                  }`}
                >
                  <span className="font-bold text-lg">{`0${index + 1}`}</span>
                  <span className="italic text-sm">{p.date}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold mb-2`}>
                    {p.title}
                  </h3>
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mb-4`}>
                    {p.description}
                  </p>
                  <Link
                    to={`/writeup/${p.id}`}
                    state={{ post: p }}
                    className={`
                      inline-block px-4 py-2 text-sm rounded border border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white transition
                      ${theme === "dark" ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white" : ""}
                    `}
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:bg-gray-400"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-cyan-800 text-white"
                  : theme === "dark"
                    ? "bg-[#2a003f] text-gray-300 hover:bg-[#5e17eb]/40"
                    : "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}
