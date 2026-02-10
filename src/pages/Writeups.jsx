import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import clubPic2 from "/public/clubicon.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function WriteUps({ theme = "dark" }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const limit = 6;

  async function loadFeed(page = 1) {
    try {
      const res = await fetch(`/api/rss?page=${page}&limit=${limit}`);
      const data = await res.json();

      // API returns ARRAY
      setPosts(data || []);

      // frontend pagination (UX preserved)
      setTotalPages(Math.ceil((data?.length || 6) / limit));
      setCurrentPage(page);

    } catch (err) {
      console.error("RSS load failed:", err);
      setPosts([]);
      setTotalPages(1);
      setCurrentPage(1);
    }
  }

  useEffect(() => {
    setLoading(true);
    loadFeed(currentPage).finally(() => setLoading(false));
  }, [currentPage]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 space-y-12 relative z-10">

        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img src={clubPic2} className="w-16 h-16" />
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
              eCyberSec Club — ENIAD
            </h1>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              Building practical cybersecurity skills, ethically and collaboratively.
            </p>
          </div>
        </header>

        <div>
          <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-4xl font-extrabold`}>
            Write-ups
          </h2>
        </div>

        {loading && <p className="text-center text-gray-400">Loading...</p>}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {posts.map((p, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className={`rounded-lg shadow-lg border overflow-hidden hover:scale-105 transition
                ${theme === "dark" ? "bg-[#1a0033] border-[#5e17eb]/40" : "bg-white border-gray-200"}`}
              >

                <div className={`px-4 py-2 flex justify-between ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6] text-white"
                    : "bg-cyan-700 text-white"
                }`}>
                  <span>{`0${index + 1}`}</span>
                  <span>{p.date}</span>
                </div>

                <div className="p-6">
                  <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold`}>
                    {p.title}
                  </h3>

                  <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mb-4`}>
                    {p.description}
                  </p>

                  <Link
                    to={`/writeup/${index}`}
                    state={{ post: p }}
                    className="inline-block px-4 py-2 border rounded"
                  >
                    Read More
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination restored */}
        <div className="flex justify-center gap-4 mt-12">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="px-5 py-2 rounded-full border"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full border ${currentPage === i + 1 ? "bg-purple-600 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="px-5 py-2 rounded-full border"
          >
            Next
          </button>

        </div>

      </section>
    </PageWrapper>
  );
}
