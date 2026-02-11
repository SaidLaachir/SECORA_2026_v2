import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import clubPic2 from "/public/clubicon.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FALLBACK_IMAGE = "/public/default-writeup.jpg";

export default function WriteUps({ theme = "light" }) {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const limit = 6;

  async function loadFeed() {
    try {
      const res = await fetch(`/api/rss`);
      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setAllPosts(data || []);
    } catch (err) {
      console.error("RSS load failed:", err);
      setAllPosts([]);
    }
  }

  // initial load
  useEffect(() => {
    setLoading(true);
    loadFeed().finally(() => setLoading(false));
  }, []);

  // paginate locally
  useEffect(() => {
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    setPosts(allPosts.slice(start, end));
  }, [allPosts, currentPage]);

  const totalPages = Math.ceil(allPosts.length / limit);

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 space-y-12 relative z-10">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img src={clubPic2} className="w-16 h-16" />
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
              eCyberSec Club — ENIAD
            </h1>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              Building practical cybersecurity skills
            </p>
          </div>
        </header>

        {loading && <p className="text-center text-gray-400">Loading writeups...</p>}

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((p, index) => {
              const imageSrc = p.image && p.image.trim() !== "" ? p.image : FALLBACK_IMAGE;

              return (
                <motion.div
                  key={p.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`rounded-lg shadow-lg overflow-hidden border
                    ${theme === "dark" ? "bg-[#1a0033] border-[#5e17eb]/40" : "bg-white border-gray-200"}
                  `}
                >
                  <div className={`px-4 py-2 flex justify-between ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6] text-white"
                      : "bg-cyan-700 text-white"
                  }`}>
                    <span>{`0${index + 1}`}</span>
                    <span className="italic text-sm">{p.date}</span>
                  </div>

                  {/* Image with guaranteed fallback */}
                  <img
                    src={imageSrc}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />

                  <div className="p-6">
                    <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl mb-2`}>
                      {p.title}
                    </h3>

                    <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mb-4`}>
                      {p.description}
                    </p>

                    <Link
                      to={`/writeup/${p.id}`}
                      state={{ post: p }}
                      className={`inline-block px-4 py-2 text-sm rounded border transition
                        ${theme === "dark"
                          ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb]"
                          : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
                        }`}
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12 select-none">
          {/* Prev Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-5 py-2 rounded-full border font-medium transition
              ${
                theme === "dark"
                  ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                  : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
              } ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Prev
          </motion.button>

          {/* Page Numbers */}
          <div className="flex gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border font-medium transition
                  ${
                    currentPage === i + 1
                      ? theme === "dark"
                        ? "bg-[#5e17eb] text-white border-[#5e17eb]"
                        : "bg-cyan-600 text-white border-cyan-600"
                      : theme === "dark"
                      ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                      : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
                  }`}
              >
                {i + 1}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-5 py-2 rounded-full border font-medium transition
              ${
                theme === "dark"
                  ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                  : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
              } ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </motion.button>
        </div>

      </section>
    </PageWrapper>
  );
}
