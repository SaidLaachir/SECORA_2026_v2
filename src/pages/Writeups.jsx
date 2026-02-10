import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import clubPic2 from "/public/clubicon.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function WriteUps({ theme }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 6;

  async function loadFeed() {
    try {
      const res = await fetch(`/api/rss`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("RSS load failed:", err);
      setPosts([]);
    }
  }

  useEffect(() => {
    loadFeed();
  }, []);

  // FRONTEND pagination
  const totalPages = Math.ceil(posts.length / limit);
  const start = (currentPage - 1) * limit;
  const paginatedPosts = posts.slice(start, start + limit);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 space-y-12 relative z-10">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img src={clubPic2} className="w-16 h-16" />
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
              eCyberSec Club — ENIAD
            </h1>
          </div>
        </header>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <AnimatePresence mode="wait">
            {paginatedPosts.map((p, index) => (

              <motion.div
                key={p.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className={`rounded-lg shadow-lg overflow-hidden border transition-all duration-300 hover:scale-105
                ${theme === "dark" ? "bg-[#1a0033] border-[#5e17eb]/40" : "bg-white border-gray-200"}`}
              >

                {/* Banner */}
                <div className={`${theme === "dark"
                  ? "bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6]"
                  : "bg-cyan-700"} px-4 py-2 flex justify-between text-white`}
                >
                  <span className="font-bold">{`0${index + 1}`}</span>
                  <span className="italic text-sm">{p.date}</span>
                </div>

                {/* Image */}
                {p.image && (
                  <img src={p.image} className="w-full h-40 object-cover" />
                )}

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
                    className={`${theme === "dark"
                      ? "border-[#8b5cf6] text-[#c7b8ff]"
                      : "border-cyan-600 text-cyan-700"} inline-block px-4 py-2 border rounded`}
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

          <button disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}>
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "font-bold" : ""}>
              {i + 1}
            </button>
          ))}

          <button disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}>
            Next
          </button>

        </div>

      </section>
    </PageWrapper>
  );
}
