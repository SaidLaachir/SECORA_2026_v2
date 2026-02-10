import React from "react";
import PageWrapper from "../components/PageWrapper";
import { useParams } from "react-router-dom";

// Sample activities data
const activities = [
  {
    id: 1,
    title: "Hacking Workshop 2025",
    date: "2025-10-10",
    venue: "ENIAD Lab A",
    description: "Introductory web hacking workshop with hands-on labs.",
    images: ["/assets/pic1.jpg", "/assets/pic2.jpg"]
  },
  {
    id: 2,
    title: "Web Hacking session 2025",
    date: "2025-11-02",
    venue: "Main Auditorium",
    description: "Advanced web hacking techniques and challenges.",
    images: ["/assets/pic3.jpg", "/assets/pic4.jpg"]
  },
];

export default function Activity() {
  const { id } = useParams();
  const activity = activities.find(a => a.id === parseInt(id));

  if (!activity) {
    return (
      <PageWrapper>
        <p className="pt-28 text-center text-gray-900 dark:text-white">
          Activity not found
        </p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section
        className="
          pt-28 space-y-6 max-w-4xl mx-auto p-8 rounded-xl shadow-lg
          bg-white border border-gray-200
          dark:bg-gradient-to-br dark:from-[#12001f] dark:via-[#2b004f] dark:to-[#5e17eb]/30
          dark:border-[#5e17eb]/40
        "
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          {activity.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {activity.date} — {activity.venue}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {activity.description}
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {activity.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={activity.title + idx}
              className="rounded shadow w-full h-60 object-cover"
            />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
