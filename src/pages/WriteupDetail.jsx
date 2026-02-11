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
            className={`mt-4 inline-block px-4 py-2 text-sm rounded border transition 
              ${theme === "dark"
                ? "border-[#ff8000] text-[#ff8000] hover:bg-[#ff8000] hover:text-white"
                : "border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white"
              }`}
          >
            Back to Write-ups
          </Link>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 max-w-4xl mx-auto space-y-6">
        <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl md:text-4xl font-extrabold`}>
          {post.title}
        </h1>

        <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} text-sm`}>
          {post.date}
        </p>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-lg mt-4"
          />
        )}

        <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mt-4 whitespace-pre-line`}>
          {post.description}
        </p>

        <div className="flex gap-3 mt-6">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-4 py-2 text-sm rounded border transition
              ${theme === "dark"
                ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                : "border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            Read Full Source
          </a>

          <Link
            to="/writeups"
            className={`inline-block px-4 py-2 text-sm rounded border transition
              ${theme === "dark"
                ? "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                : "border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white"
              }`}
          >
            Back to Write-ups
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
