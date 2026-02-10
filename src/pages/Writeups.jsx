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
      const res = await fetch(`/api/rss?page=${page}&limit=${limit}`);
      const data = await res.json();

      setPosts(data.items || []);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(data.page || 1);
    } catch (err) {
      console.error("RSS load failed:", err);
    }
  }

  useEffect(() => {
    loadFeed(currentPage);
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
<h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-4xl font-extrabold mb-2`}>
Write-ups
</h2>
</div>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<AnimatePresence>

{posts.map((p,index)=>(

<motion.div key={p.id} variants={cardVariants} initial="hidden" animate="visible" exit="exit" transition={{duration:.5}}

className={`rounded-lg shadow-lg overflow-hidden border transition-all hover:scale-105
${theme==="dark"?"bg-[#1a0033] border-[#5e17eb]/40":"bg-white border-gray-200"}`}>

<div className={`px-4 py-2 flex justify-between
${theme==="dark"?"bg-gradient-to-r from-[#5e17eb] to-[#8b5cf6] text-white":"bg-cyan-700 text-white"}`}>

<span className="font-bold">{`0${index+1}`}</span>
<span>{p.date}</span>

</div>

<div className="p-6">

<h3 className={`${theme==="dark"?"text-white":"text-black"} text-xl font-semibold mb-2`}>
{p.title}
</h3>

<p className={`${theme==="dark"?"text-gray-300":"text-black"} mb-4`}>
{p.description}
</p>

<Link to={`/writeup/${p.id}`} state={{post:p}}

className={`inline-block px-4 py-2 rounded border transition
${theme==="dark"?"border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb]":"border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"}`}>

Read More

</Link>

</div>
</motion.div>

))}

</AnimatePresence>

</div>

{/* Pagination */}

<div className="flex justify-center items-center gap-4 mt-12">

<button disabled={currentPage===1}
onClick={()=>setCurrentPage(p=>p-1)}
className={`px-5 py-2 rounded-full border transition
${theme==="dark"?"border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb]":"border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"} disabled:opacity-40`}>
Prev
</button>

<div className="flex gap-3">

{[...Array(totalPages)].map((_,i)=>(

<button key={i} onClick={()=>setCurrentPage(i+1)}
className={`w-10 h-10 rounded-full border flex items-center justify-center transition
${currentPage===i+1
? theme==="dark"?"bg-[#5e17eb] text-white":"bg-cyan-600 text-white"
: theme==="dark"?"border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb]/40"
:"border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"}`}>
{i+1}
</button>

))}

</div>

<button disabled={currentPage===totalPages}
onClick={()=>setCurrentPage(p=>p+1)}
className={`px-5 py-2 rounded-full border transition
${theme==="dark"?"border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb]":"border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"} disabled:opacity-40`}>
Next
</button>

</div>

</section>

</PageWrapper>
  );
}
