import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

// Activities array
const activities = [
  {
    id: 1,
    title: "Windows Pentesting Active Directory 2026",
    date: "2026 February 28",
    venue: "ENIAD BR6 at 1:00 PM",
    animator: "Abdellatif TAZARNI",
    description: `
This hands-on training introduces students to real-world Windows Active Directory penetration testing.

Participants will learn how attackers exploit enterprise environments, escalate privileges, and move laterally across systems.

The session focuses on practical attack techniques, tools, and methodologies used in real-world cybersecurity operations.
    `,
    skills: [
      "Active Directory enumeration",
      "Privilege escalation",
      "Lateral movement",
      "Domain attacks (Kerberos, ACL abuse)",
      "Real pentesting workflow",
    ],
    requirements: [
      "Laptop (Windows recommended)",
      "VirtualBox or VMware installed",
      "Basic networking knowledge",
      "Basic Linux commands",
    ],
    image: "/Trainings/pentestSaturday.jpeg", 
  },
];

export default function Activity({ theme }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find((a) => a.id.toString() === id);

  if (!activity) {
    return (
      <PageWrapper>
        <p className={`pt-28 text-center font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
          Activity not found
        </p>
      </PageWrapper>
    );
  }

  const activityImage = activity.image;

  return (
    <PageWrapper>
      <section className="pt-24 pb-12 px-4 md:px-6 max-w-4xl mx-auto space-y-8 relative z-10">

        {/* BACK BUTTON */}
        <div className="flex w-full mb-2">
          <button
            onClick={() => navigate("/activities")}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold shadow-md
              transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105
              ${theme === "dark"
                ? "bg-[#5e17eb] text-white hover:bg-[#8b5cf6] hover:shadow-[#5e17eb]/40"
                : "bg-cyan-600 text-white hover:bg-cyan-500 hover:shadow-cyan-600/40"
              }
            `}
          >
            <span className="text-xl leading-none">←</span> Back to Activities
          </button>
        </div>

        {/* IMAGE - Framing removed */}
        <div className="w-full flex justify-center overflow-hidden">
          <img
            src={activityImage}
            alt={activity.title}
            className="w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="space-y-8">
          
          {/* TITLE AND INFO */}
          <div>
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
              {activity.title}
            </h2>
            <p className={`mb-1 font-semibold text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              {activity.date} — {activity.venue}
            </p>
            <p className={`mb-6 text-base font-medium ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              By {activity.animator}
            </p>

            {/* DESCRIPTION */}
            <p className={`whitespace-pre-line text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              {activity.description}
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className={`text-2xl md:text-3xl font-extrabold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
              What you will learn
            </h3>
            <ul className={`list-disc pl-6 space-y-2 text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              {activity.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* REQUIREMENTS */}
          <div>
            <h3 className={`text-2xl md:text-3xl font-extrabold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
              What you need
            </h3>
            <ul className={`list-disc pl-6 space-y-2 text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              {activity.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}