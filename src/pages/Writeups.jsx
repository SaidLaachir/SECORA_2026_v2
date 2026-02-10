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

  // Pagination frontend
  const totalPages = Math.ceil(posts.length / limit);
  const start = (currentPage - 1) * limit;
  const currentPosts = posts.slice(start, start + limit);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 space-y-12 relative z-10">

        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img src={clubPic2} alt="Club Icon" className="w-16 h-16 object-cover shadow-md" />
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
              eCyberSec Club — ENIAD
            </h1>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              Building practical cybersecurity skills.
            </p>
          </div>
        </header>

        <div>
          <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-4xl font-extrabold`}>
            Write-ups
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <AnimatePresence>
            {currentPosts.map((p, index) => (

              <motion.div
                key={p.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`rounded-lg overflow-hidden border ${
                  theme === "dark" ? "bg-[#1a0033]" : "bg-white"
                }`}
              >

                {/* Image */}
                {p.image && (
                  <img
                    src={p.image}
                    className="w-full h-40 object-cover"
                  />
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
                    className="inline-block px-4 py-2 border rounded"
                  >
                    Read More
                  </Link>

                </div>

              </motion.div>

            ))}
          </AnimatePresence>

        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">

          <button disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}>
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)}>
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
