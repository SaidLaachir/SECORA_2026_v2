import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function BranchWindow({ theme }) {
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const location = useLocation();
  const branch = location.state?.branch;

  if (!branch) {
    return (
      <PageWrapper>
        <div className="pt-28 text-center">
          <h2 className={`${isDark ? "text-white" : "text-black"} text-2xl font-bold`}>
            Branch not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className={`mt-4 px-4 py-2 rounded border font-semibold transition
              ${isDark
                ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
              }`}
          >
            Back
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className={`${isDark ? "text-white" : "text-black"} text-3xl sm:text-4xl font-bold`}>
            {branch.title}
          </h1>
          <button
            onClick={() => navigate(-1)}
            className={`px-4 py-2 rounded border font-semibold transition
              ${isDark
                ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
              }`}
          >
            Back
          </button>
        </div>

        {/* Description & Jobs */}
        <div className={`p-4 rounded-xl shadow ${isDark ? "bg-[#12001f]" : "bg-white"}`}>
          <p className={`${isDark ? "text-gray-300" : "text-black"} mb-4`}>
            {branch.description}
          </p>
          {branch.jobs && (
            <div>
              <h3 className={`${isDark ? "text-white" : "text-black"} font-semibold mb-2`}>Jobs & Salaries:</h3>
              <ul className={`${isDark ? "text-gray-300" : "text-black"} list-disc pl-5 space-y-1`}>
                {branch.jobs.map((job, idx) => (
                  <li key={idx}>
                    <strong>{job.title}</strong> – {job.salary}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Documents Section */}
        {branch.documents && branch.documents.length > 0 && (
          <section>
            <h3 className={`${isDark ? "text-white" : "text-black"} text-xl font-bold mb-4`}>Documents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {branch.documents.map((doc, idx) => (
                <motion.div
                  key={idx}
                  className={`p-4 rounded-xl shadow transition-all duration-300 ${isDark ? "bg-[#1a0033] border border-[#5e17eb]/50 text-[#c7b8ff]" : "bg-gray-50 border border-gray-300 text-black"}`}
                >
                  <h4 className="font-semibold mb-2">{doc.name}</h4>
                  <div className="flex gap-2">
                    <a href={doc.href} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:bg-green-500">Preview</a>
                    <a href={doc.href} download className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-500">Download</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* YouTube Section */}
        {branch.youtube && branch.youtube.length > 0 && (
          <section>
            <h3 className={`${isDark ? "text-white" : "text-black"} text-xl font-bold mb-4`}>YouTube Channels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {branch.youtube.map((yt, idx) => (
                <motion.div
                  key={idx}
                  className={`p-4 rounded-xl shadow transition-all duration-300 ${isDark ? "bg-[#1a0033] border border-[#5e17eb]/50 text-[#c7b8ff]" : "bg-gray-50 border border-gray-300 text-black"}`}
                >
                  <img src={yt.img} className="w-full h-32 object-cover rounded mb-2" />
                  <h4 className="font-semibold mb-2">{yt.name}</h4>
                  <a href={yt.href} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-purple-600 text-white text-sm hover:bg-purple-500">
                    Visit Channel
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Websites Section */}
        {branch.websites && branch.websites.length > 0 && (
          <section>
            <h3 className={`${isDark ? "text-white" : "text-black"} text-xl font-bold mb-4`}>Websites</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {branch.websites.map((web, idx) => (
                <motion.div
                  key={idx}
                  className={`p-4 rounded-xl shadow transition-all duration-300 ${isDark ? "bg-[#1a0033] border border-[#5e17eb]/50 text-[#c7b8ff]" : "bg-gray-50 border border-gray-300 text-black"}`}
                >
                  <h4 className="font-semibold mb-2">{web.name}</h4>
                  <a href={web.href} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-cyan-600 text-white text-sm hover:bg-cyan-500">
                    Visit Website
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Tools Section */}
        {branch.tools && branch.tools.length > 0 && (
          <section>
            <h3 className={`${isDark ? "text-white" : "text-black"} text-xl font-bold mb-4`}>Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {branch.tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  className={`p-4 rounded-xl shadow transition-all duration-300 ${isDark ? "bg-[#1a0033] border border-[#5e17eb]/50 text-[#c7b8ff]" : "bg-gray-50 border border-gray-300 text-black"}`}
                >
                  <h4 className="font-semibold mb-2">{tool.name}</h4>
                  <a href={tool.href} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-yellow-600 text-white text-sm hover:bg-yellow-500">
                    Visit Tool
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </section>
    </PageWrapper>
  );
}
