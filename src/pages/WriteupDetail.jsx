import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function WriteUpDetail({ theme }) {
  const { id } = useParams();
  const location = useLocation();

  const post = location.state?.post;

  if (!post) {
    return (
      <PageWrapper>
        <section className="pt-28 pb-16 text-center">
          <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl font-bold`}>
            Write-up not found
          </h2>
          <Link
            to="/writeups"
            className={`
              mt-4 inline-block px-6 py-2 rounded border transition 
              ${theme === "dark"
                ? "border-[#8b5cf6] text-[#c7b8ff] hover:bg-[#5e17eb] hover:text-white"
                : "border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white"
              }
            `}
          >
            Back to Write-ups
          </Link>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 max-w-4xl mx-auto space-y-8">

        {/* Title */}
        <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl md:text-4xl font-extrabold`}>
          {post.title}
        </h1>

        {/* Date */}
        <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} text-sm`}>
          {post.date}
        </p>

        {/* Image */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-lg mt-4"
          />
        )}

        {/* Description */}
        <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mt-6 whitespace-pre-line text-lg leading-relaxed`}>
          {post.description}
        </p>

        {/* Buttons: Read Full Source & Back */}
        <div className="flex gap-4 mt-6">
          {post.link && (
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-1 text-center px-6 py-3 rounded text-white font-medium transition
                bg-green-600 hover:bg-green-500 hover:shadow-[0_0_10px_#ffffff] duration-300
              `}
            >
              Read Full Source
            </a>
          )}

          <Link
            to="/writeups"
            className={`
              flex-1 text-center px-6 py-3 rounded text-white font-medium transition
              bg-orange-500 hover:bg-orange-400 hover:shadow-[0_0_10px_#ffffff] duration-300
            `}
          >
            Back to Write-ups
          </Link>
        </div>

      </section>
    </PageWrapper>
  );
}
